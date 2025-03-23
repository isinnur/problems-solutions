function firstNonRepeatingLetter(s) {
  letterArray = s.split("");

  for (let i = 0; i < letterArray.length; i++) {
    let currentChar = letterArray[i];
    let lowerCurrentChar = currentChar.toLowerCase();

    let count = 0;
    for (let j = 0; j < letterArray.length; j++) {
      if (letterArray[j].toLowerCase() === lowerCurrentChar) {
        count++;
      }
    }

    if (count === 1) {
      return currentChar;
    }
  }

  return "";
}
