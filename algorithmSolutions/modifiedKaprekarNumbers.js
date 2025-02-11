function kaprekarNumbers(p, q) {
  let array = [];

  for (let i = p; i <= q; i++) {
    let number = (i ** 2).toString();
    let leftPart = number.substring(0, Math.floor(number.length / 2)) || "0";
    let rightPart = number.substring(Math.floor(number.length / 2));

    if (parseInt(leftPart) + parseInt(rightPart) === i) {
      array.push(i);
    }
  }

  if (array.length === 0) {
    console.log("INVALID RANGE");
  } else {
    console.log(array.join(" "));
  }
}
