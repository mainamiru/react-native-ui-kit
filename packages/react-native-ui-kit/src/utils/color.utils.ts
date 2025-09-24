export function hexToRgb(hex: string) {
  const parsed = hex.replace("#", "");
  const bigint = parseInt(parsed, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

export function getContrastColor(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance > 186 ? "#000000" : "#FFFFFF"; // threshold
}
