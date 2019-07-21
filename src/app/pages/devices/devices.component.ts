import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

import { Subject, merge } from 'rxjs';
import { tap, takeUntil, take, finalize, mergeMap } from 'rxjs/operators';

import { Switch, Temp } from '@nd/core/models';

import { DevicesService, SwitchesService } from '@nd/core/services';

@Component({
  selector: 'nd-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject();

  devices$ = this.service.select<Switch[] | Temp[]>('devices');

  types$ = this.service.select<string[]>('types');

  icon = {
    Fireplace: 'nd-fireplace',
    Light: 'nb-lightbulb',
    Door: 'nd-door'
  };

  switchLoading: boolean;

  clickedIdx: string;

  path = this.route.snapshot.url[0].path;

  navState = 'in';

  loading: boolean;

  get filter() {
    switch (this.path) {
      case 'temperature': return 'temp';
      case 'switches': return 'light';
    }
  }

  get statusKey() {
    switch (this.filter) {
      case 'light': return 'Status';
      case 'temp': return 'Data';
    }
  }

  constructor(
    private service: DevicesService,
    private switchesService: SwitchesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    merge(
      this.service.getDevices(this.filter),
      this.service.refreshDevices(this.filter)
    ).pipe(
      mergeMap(() => this.router.events),
      tap(event => {
        if (event instanceof NavigationStart) {
          if (!event.url.includes('options')) {
            this.navState = 'out';
          }
          setTimeout(() => this.loading = true, 400);
        }
      }),
      takeUntil(this.unsubscribe$)
    ).subscribe();
  }

  isSwitchOn(_switch: Switch): boolean {
    if (this.filter !== 'light' || !_switch.Status) { return; }
    return !['Off', 'Closed'].some(s => _switch.Status.includes(s));
  }

  statusChanged(event: any, _switch: Switch) {
    if (['On/Off', 'Dimmer'].includes(_switch.SwitchType)) {
      this.switchLoading = true;
      this.clickedIdx = _switch.idx;
      this.switchesService.switchLight(_switch.idx, event).pipe(
        tap(resp => {
          if (resp.status === 'OK') {
            _switch.Status = event;
          } else {
            throw resp;
          }
        }),
        take(1),
        finalize(() => this.switchLoading = false)
      ).subscribe();
    } else {
      throw new Error('Not a switchable device!');
    }
  }

  onOptionsClick(idx: string) {
    this.router.navigate(['options', idx]);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
