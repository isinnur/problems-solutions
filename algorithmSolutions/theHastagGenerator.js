function generateHashtag(str) {
  if (!str || str.trim().length === 0) return false;
  let strArray = str.trim().split(/\s+/);

  let capitalizedArr = strArray.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  let finalStr = capitalizedArr.join("");
  if (finalStr.length >= 140) return false;
  return "#" + finalStr;
}
