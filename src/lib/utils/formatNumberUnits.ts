import { formatLpadFixedNumber } from "./formatLpadFixedNumber";

export const formatNumberUnits = (num?: number) => {
  let defaultNum = num || 0;
  // 숫자의 자리수에 따라 단위 결정
  let unit;
  if (defaultNum >= 1e15) {
    unit = 'P'; // 페타
    defaultNum /= 1e15;
  } else if (defaultNum >= 1e12) {
    unit = 'T'; // 테라
    defaultNum /= 1e12;
  } else if (defaultNum >= 1e9) {
    unit = 'B'; // 기가
    defaultNum /= 1e9;
  } else if (defaultNum >= 1e6) {
    unit = 'M'; // 메가
    defaultNum /= 1e6;
  } else if (defaultNum >= 1e3) {
    unit = 'K'; // 킬로
    defaultNum /= 1e3;
  } else {
    unit = ''; // 단위 없음
  }
  return `${formatLpadFixedNumber((Math.round(defaultNum * 100) / 100))}${unit}`;
};
