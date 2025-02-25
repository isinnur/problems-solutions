function FindIntersection(strArr) {
  let array1 = strArr[0].split(",").map(Number);
  let array2 = strArr[1].split(",").map(Number);

  let setArray1 = new Set(array1);
  let intersection = array2.filter((num) => setArray1.has(num));

  return intersection.length > 0 ? intersection.join(",") : "false";
}
