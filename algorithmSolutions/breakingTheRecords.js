function breakingRecords(scores) {
  // Write your code here
  let min_score = scores[0];
  let max_score = scores[0];
  let max_breaks = 0;
  let min_breaks = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max_score) {
      max_score = scores[i];
      max_breaks++;
    } else if (scores[i] < min_score) {
      min_score = scores[i];
      min_breaks++;
    }
  }

  return [max_breaks, min_breaks];
}
