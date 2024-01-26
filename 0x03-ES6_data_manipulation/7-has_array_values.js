function hasValuesFromArray(set, array) {
  const present = array.every((item) => set.has(item));
  return present;
}

export default hasValuesFromArray;
