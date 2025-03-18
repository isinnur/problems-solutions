const binaryArrayToNumber = (arr) => {
  let sum = 0;
  let newArray = [...arr].reverse();
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === 1) {
      sum += 2 ** i;
    }
  }

  return sum;
};
