/* eslint-disable */
export default function iterateThroughObject(reportWithIterator) {
  let res = '';
  let i = 0;
  for (const item of reportWithIterator) {
    if (reportWithIterator.length - 1 === i) {
      res += item;
    } else {
      res += item + ' | ';
    }
    i++;
  }
  return res;
}
