function CodelandUsernameValidation(str) {
  let validReg = /^[A-Za-z]\w+[A-Za-z0-9]$/;
  let validLength = (str) => str.length >= 4 && str.length <= 25;
  return validReg.test(str) && validLength(str);
}
