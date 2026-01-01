import { Solar, Lunar } from "lunar-javascript";
import { STEM_ELEMENT } from "./translations";

export function calculateBaZi(date) {
  const lunar = Lunar.fromDate(date);

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
