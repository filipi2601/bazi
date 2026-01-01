import { Solar } from "lunar-javascript";
import { STEM_ELEMENT } from "./translations";

export function calculateBaZi(date) {
  const solar = Solar.fromDate(date);
  const lunar = solar.getLunar();

  return {
    year: lunar.getYearInGanZhiExact(),
    month: lunar.getMonthInGanZhiExact(),
    day: lunar.getDayInGanZhi(),
    hour: lunar.getTimeInGanZhi(),
  };
}

export function getDayMaster(dayGanzhi) {
  const stem = dayGanzhi[0];
  const elementData = STEM_ELEMENT[stem];

  return {
    stem,
    element: elementData.element,
  };
}
