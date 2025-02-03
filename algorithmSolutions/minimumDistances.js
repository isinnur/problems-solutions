function minimumDistances(a) {
  let minDistance = Infinity;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] == a[j]) {
        minDistance = Math.min(minDistance, j - i);
      }
    }
  }
  return minDistance == Infinity ? -1 : minDistance;
}
