function workbook(n, k, arr) {
  let currentPage = 1;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let problemNum = arr[i];

    for (let problem = 1; problem <= problemNum; problem++) {
      if (problem == currentPage) {
        count++;
      }

      if (problem % k == 0 || problem == problemNum) {
        currentPage++;
      }
    }
  }
  return count;
}
