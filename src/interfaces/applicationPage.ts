import { MouseEvent } from 'react';

export interface ICalendarInfo {
  allDay: boolean;
  start: Date;
  end: Date;
  startStr: string;
  endStr: string;
  jsEvent: MouseEvent;
  view: any;
}
