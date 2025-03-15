function isPangram(string) {
  let alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
  string = string.toLowerCase();

  for (let char of string) {
    let index = alphabetArray.indexOf(char);
    if (index !== -1) {
      alphabetArray.splice(index, 1);
    }
  }

  return alphabetArray.length === 0;
}
