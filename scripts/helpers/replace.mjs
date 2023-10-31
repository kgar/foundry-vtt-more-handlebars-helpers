export default function (text, searchText, replacementTest) {
  return typeof text === 'string'
    ? text?.replace(searchText, replacementTest)
    : text;
}
