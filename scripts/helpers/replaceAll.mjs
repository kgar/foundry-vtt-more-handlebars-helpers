export default function (text, searchText, replacementTest) {
  return text?.replaceAll(searchText, replacementTest);
}
