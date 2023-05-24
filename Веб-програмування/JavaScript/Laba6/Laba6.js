function filterBy(arr, type) {
  return arr.filter(item => typeof item !=type);
}

let arr = ['3.14', 25, 12.54, '211', 3.14, 'name', 'year', false];
let filteredData = filterBy(arr, 'number');
console.log(filteredData);
