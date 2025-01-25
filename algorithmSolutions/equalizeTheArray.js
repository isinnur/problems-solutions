function equalizeArray(arr) {
  // Write your code here
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]]) {
      result[arr[i]]++;
    } else {
      result[arr[i]] = 1;
    }
  }

  let maxFrequency = 0;
  for (let key in result) {
    if (result[key] > maxFrequency) {
      maxFrequency = result[key];
    }
  }
  return arr.length - maxFrequency;
}
