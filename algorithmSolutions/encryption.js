function encryption(s) {
  s = s.replace(/\s/g, "");
  let L = s.length;

  let row = Math.floor(Math.sqrt(L));
  let column = Math.ceil(Math.sqrt(L));

  let encryptedText = Array.from({ length: column }, (_, i) =>
    s
      .split("")
      .filter((_, j) => j % column === i)
      .join("")
  );

  return encryptedText.join(" ");
}
