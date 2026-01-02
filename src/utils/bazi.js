import { Solar, Lunar } from "lunar-javascript";
import { STEM_ELEMENT } from "./translations";

export function calculateBaZi(date) {
  const lunar = Lunar.fromDate(date);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hourObj =
    hours === 0 && minutes === 0 && seconds === 0
      ? null
      : lunar.getTimeInGanZhi();

  return {
    year: lunar.getYearInGanZhiExact(),
    month: lunar.getMonthInGanZhiExact(),
    day: lunar.getDayInGanZhi(),
    hour: hourObj, // null se for 00:00:00
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
