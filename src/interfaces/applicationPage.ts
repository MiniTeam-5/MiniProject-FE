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
  select: 'ANNUAL' | 'DUTY';
  applyDateSelect: (date: DateSelectArg | DateClickArg) => void;
  resetDate: () => void;
}

export interface IApplyInfoProps {
  select: 'ANNUAL' | 'DUTY';
  date: { startDate: string; endDate: string };
}
