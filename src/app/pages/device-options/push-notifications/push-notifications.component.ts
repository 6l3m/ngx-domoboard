import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { Temp, Switch, DomoticzSettings } from '@nd/core/models';

@Component({
  selector: 'nd-notifications',
  template: `
    <div class="notifs-container">
      <span class="title">{{ title }}</span>
      <div class="btn-container">
        <button nbButton status="primary" (click)="onSubscribeClick()">
          {{ !isSubscribed ? 'Subscribe' : 'Unsubscribe' }}
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./push-notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushNotificationsComponent {

  private _device: Switch | Temp;
  @Input()
  set device(value) {
    if (!!value) {
      this.checkSubscription.emit(this.pushEndpoint);
      this._device = value;
    }
  }
  get device() { return this._device; }

  @Input() settings: DomoticzSettings;

  @Input() isSubscribed: boolean;

  @Input() pushEndpoint: string;

  @Output() subscribeClick = new EventEmitter<any>();

  @Output() checkSubscription = new EventEmitter<string>();

  title = 'PUSH NOTIFICATIONS:';

  onSubscribeClick() {
    this.subscribeClick.emit({
      device: this.device,
      isSubscribed: this.isSubscribed,
      settings: this.settings,
      pushEndpoint: this.pushEndpoint
    });
  }

}
