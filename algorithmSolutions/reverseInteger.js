var reverse = function (x) {
  let abs = Math.abs(x);
  let reverse = abs.toString().split("").reverse().join("");
  if (reverse > 2 ** 31) {
    return 0;
  }
  return reverse * Math.sign(x);
};
