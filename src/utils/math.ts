// generate a unicode string
export const unicode = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// money format
export const moneyFormat = (money: string | number) => {
  money = money.toString();
  const pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(money))
    money = money.replace(pattern, "$1,$2");
  return money;
}