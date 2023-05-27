import moment from 'moment';

export enum PocOperationTimeSlot {
  Noon = 'averageTurnPerDayNoon',
  Night = 'averageTurnPerDayNight',
  Latenight = 'averageTurnPerDayLatenight',
  NoonNight = 'averageTurnPerDayNoonNight',
  NightLateNight = 'averageTurnPerDayNightLatenight',
  NoonLateNight = 'averageTurnPerDayNoonLatenight',
}

export const caculate = (open: string, close: string) => {
  const openingHour = moment(open, 'hh:mm');
  const closingHour = moment(close, 'hh:mm');

  const point_1159 = moment('11:59', 'hh:mm');
  // const point_1830 = moment("18:30", "hh:mm");
  const point_1800 = moment('18:00', 'hh:mm');
  const point_1759 = moment('17:59', 'hh:mm');

  if (openingHour.isSameOrBefore(point_1159)) {
    if (closingHour.isBefore(openingHour)) {
      return PocOperationTimeSlot.NoonLateNight;
    } else {
      if (closingHour.isSameOrBefore(point_1759)) return PocOperationTimeSlot.Noon;
      else return PocOperationTimeSlot.NoonNight;
    }
  } else {
    if (openingHour.isSameOrAfter(point_1800)) {
      if (closingHour.isBefore(openingHour)) return PocOperationTimeSlot.Latenight;
      else return PocOperationTimeSlot.Night;
    } else {
      if (closingHour.isBefore(openingHour)) return PocOperationTimeSlot.Latenight;
      else return PocOperationTimeSlot.Night;
    }
  }
};
