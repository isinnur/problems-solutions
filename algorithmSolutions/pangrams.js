function pangrams(s) {
  let alphabetSet = new Set("abcdefghijklmnopqrstuvwxyz");
  let sSet = new Set(s.toLowerCase().replace(/[^a-z]/g, ""));
  return alphabetSet.size == sSet.size ? "pangram" : "not pangram";
}
