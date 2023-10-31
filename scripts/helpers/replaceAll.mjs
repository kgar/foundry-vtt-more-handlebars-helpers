export default function (text, searchText, replacementTest) {
  return typeof text === 'string'
    ? text.replaceAll(searchText, replacementTest)
    : text;
}
