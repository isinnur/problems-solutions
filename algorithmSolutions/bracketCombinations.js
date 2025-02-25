function BracketCombinations(num) {
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  return factorial(2 * num) / (factorial(num + 1) * factorial(num));
}
