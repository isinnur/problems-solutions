function LongestWord(sen) {
  let array = sen.split(" ");
  let longestWord = "";

  for (let i = 0; i < array.length; i++) {
    let word = array[i].replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ]/g, "");
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
