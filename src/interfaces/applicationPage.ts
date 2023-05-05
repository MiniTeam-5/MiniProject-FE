import { DateSelectArg } from '@fullcalendar/core/index.js';
import { DateClickArg } from '@fullcalendar/interaction/index.js';
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

export interface ICalendarProps {
  select: 'annual' | 'duty';
  handleDateSelect: (date: DateSelectArg | DateClickArg) => void;
}
