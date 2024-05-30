export function makeID(header) {
  return header.toLowerCase().replaceAll(" ", "-");
}
