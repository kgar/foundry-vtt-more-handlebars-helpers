import striptags from '../striptags/striptags.mjs';

export default function (htmlString) {
  return typeof htmlString === 'string' ? striptags(htmlString) : htmlString;
}