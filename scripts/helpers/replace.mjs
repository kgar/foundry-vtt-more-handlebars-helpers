export default function (text, searchTextOrRegExp, replacementText) {
  return typeof text === 'string'
    ? text?.replace(searchTextOrRegExp, replacementText)
    : text;
}
