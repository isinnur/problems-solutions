function beautifulTriplets(d, arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const first = arr[i];
    if (arr.includes(first + d) && arr.includes(first + 2 * d)) {
      count++;
    }
  }
  return count;
}
