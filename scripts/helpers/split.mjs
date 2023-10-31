export default function (text, separator) {
  return typeof text === 'string' ? text.split(separator) : text;
}
