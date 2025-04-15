function moveZeros(arr) {
  const result = arr.filter((a) => a !== 0);
  const zeros = arr.filter((a) => a === 0);
  return result.concat(zeros);
}
