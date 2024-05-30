export   function outcomesPredicate(o, d, x) {
  if (d === "eq") {
    return o === x;
  }

  if (d === "le") {
    return o <= x;
  }

  if (d === "ge") {
    return o >= x;
  }
};
