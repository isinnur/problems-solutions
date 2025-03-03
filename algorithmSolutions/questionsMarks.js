function QuestionsMarks(str) {
  let questionsMarkCount = 0;
  let lastNumber = null;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (!isNaN(char) && char !== " ") {
      let number = parseInt(char);

      if (lastNumber !== null) {
        if (lastNumber + number === 10) {
          if (questionsMarkCount === 3) {
            return true;
          }
        }
      }

      lastNumber = number;
      questionsMarkCount = 0;
    } else if (char == "?") {
      questionsMarkCount++;
    }
  }
  return false;
}
