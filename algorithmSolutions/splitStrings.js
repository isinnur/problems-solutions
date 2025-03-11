function solution(str) {
  if (str.length % 2 !== 0) {
    str += "_";
  }
  let strArray = [];

  for (let i = 0; i < str.length; i += 2) {
    strArray.push(str[i] + str[i + 1]);
  }

  return strArray;
}
