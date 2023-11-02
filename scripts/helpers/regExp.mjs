export default function (text) {
  const flags = typeof arguments[1] === 'string' ? arguments[1] : 'g';
  return new RegExp(text, flags);
}
