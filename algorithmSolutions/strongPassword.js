function minimumNumber(n, password) {
  let digits = "0123456789";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let specialCharacters = "!@#$%^&*()-+";

  let hasdigits = false;
  let hadLowerCase = false;
  let hasUpperCase = false;
  let hasSpecialCharacters = false;

  for (let char of password) {
    if (digits.includes(char)) hasdigits = true;
    if (lowerCase.includes(char)) hadLowerCase = true;
    if (upperCase.includes(char)) hasUpperCase = true;
    if (specialCharacters.includes(char)) hasSpecialCharacters = true;
  }

  let count = 0;
  if (!hasdigits) count++;
  if (!hadLowerCase) count++;
  if (!hasUpperCase) count++;
  if (!hasSpecialCharacters) count++;

  return Math.max(count, 6 - n);
}
