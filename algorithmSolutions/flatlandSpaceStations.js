function flatlandSpaceStations(n, c) {
  let distances = [];

  if (n === c.length) {
    return 0;
  }

  for (let i = 0; i < n; i++) {
    let array = [];
    c.map((index) => {
      array.push(Math.abs(i - index));
    });
    distances.push(Math.min(...array));
  }

  return Math.max(...distances);
}
