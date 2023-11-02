export default function (text, searchTextOrRegExp, replacementText) {
  return typeof text === 'string'
    ? text.replaceAll(searchTextOrRegExp, replacementText)
    : text;
}
