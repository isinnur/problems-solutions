function chocolateFeast(n, c, m) {
  let chocolates = Math.floor(n / c);
  let wrappers = chocolates;

  while (wrappers >= m) {
    let freeChocolates = Math.floor(wrappers / m);
    chocolates += freeChocolates;
    wrappers = freeChocolates + (wrappers % m);
  }

  return chocolates;
}
