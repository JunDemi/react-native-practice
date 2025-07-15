export const fearGreedIcon: Record<string, string> = {
  '극도의 공포': `/temp/ex-fear.svg`,
  공포: `/temp/fear.svg`,
  중립: `/temp/neutral.svg`,
  탐욕: `/temp/greed.svg`,
  '극도의 탐욕': `/temp/ex-greed.svg`,
};

export const fearGreedIndex = (index: number) => {
  if (index < 25) {
    return '극도의 공포';
  } else if (index < 40) {
    return '공포';
  } else if (index < 60) {
    return '중립';
  } else if (index < 75) {
    return '탐욕';
  } else {
    return '극도의 탐욕';
  }
};
