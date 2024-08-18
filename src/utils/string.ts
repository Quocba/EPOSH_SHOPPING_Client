export const formatMoneyToNumber = (money: any) => {
  let newNum = money.split(".").join("");
  return newNum;
};

export const formatNumberToMoney = (num: any) => {
  if (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
  return "";
};

export const formatCommas = (num: any) => {
  if (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return "";
};

export function encodeToken(str: string) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
