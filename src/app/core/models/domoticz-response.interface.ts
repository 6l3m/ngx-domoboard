export interface DomoticzResponse {
  ActTime?: number;
  AstrTwilightEnd?: string;
  AstrTwilightStart?: string;
  CivTwilightEnd?: string;
  CivTwilightStart?: string;
  DayLength?: string;
  NautTwilightEnd?: string;
  NautTwilightStart?: string;
  ServerTime?: string;
  SunAtSouth?: string;
  Sunrise?: string;
  Sunset?: string;
  app_version?: string;
  result?: any[];
  status: string;
  title?: string;
  message?: string;
}
