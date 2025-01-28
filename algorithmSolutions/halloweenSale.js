function howManyGames(p, d, m, s) {
  let count = 0;
  let price = p;

  while (s >= price) {
    s -= price;
    count++;
    price = Math.max(price - d, m);
  }
  return count;
}
