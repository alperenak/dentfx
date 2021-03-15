export function findById(id, arr) {
  let returnedValue = '';
  arr.map((item) => {
    if (item.id === id) {
      returnedValue = item.value;
    }
  });
  return returnedValue;
}
