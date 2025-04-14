function solution(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === string[i].toUpperCase() &&
      string[i] !== string[i].toLowerCase()
    ) {
      result += " " + string[i];
    } else {
      result += string[i];
    }
  }

  return result;
}
