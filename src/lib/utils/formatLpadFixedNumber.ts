export const formatLpadFixedNumber = (num?: number) => {
  const defaultNum = num || 0;
  // - 제거
  const toStringNum = defaultNum < 0 ? String(defaultNum).slice(1) : String(defaultNum);

  const [integerPart, decimalPart] = toStringNum.toString().split('.');
  const formattedInteger = parseInt(integerPart, 10).toString();
  const formattedDecimal = (decimalPart ? decimalPart : '00').padEnd(2, '0').slice(0, 2);
  return `${formattedInteger}.${formattedDecimal}`;
};
