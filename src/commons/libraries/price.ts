export const insertCommas = (price: number) => {
  // get stuff before the dot
  const s1 = price.toString();
  const d = s1.indexOf(".");
  let s2 = d === -1 ? s1 : s1.slice(0, d);

  // insert commas every 3 digits from the right
  for (let i = s2.length - 3; i > 0; i -= 3)
    s2 = s2.slice(0, i) + "," + s2.slice(i);

  // append fractional part
  if (d !== -1) s2 += s1.slice(d);

  return s2;
};
