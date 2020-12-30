export const truncateString = ({
  maxLength,
  separator,
  string,
}: {
  maxLength: number;
  separator?: string;
  string: string;
}): string => {
  if (maxLength > string.length) return string;
  const divider = separator || '...';
  const dividerLength = divider.length;
  const charsToShow = maxLength - dividerLength;
  const frontChars = Math.ceil(charsToShow / 2);
  const backChars = Math.ceil(charsToShow / 2);
  return string.substr(0, frontChars) + divider + string.substr(string.length - backChars);
};
