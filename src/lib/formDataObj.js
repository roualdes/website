export function formDataObj(N, data) {
  var out = {};
  for (let n = 1; n <= N; n++) {
    let k = "q" + String(n).padStart(2, "0");
    let number = data.get(k);
    if (number !== undefined) {
      out[k] = number;
    }
  }
  return out;
};
