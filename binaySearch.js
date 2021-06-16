// given an sorted array e.g. [1,3,7,7,8,8,9]
// create a function that returns the indeces of a target number.
// For example, target is 8, return [4,5] 


let binarySearch = function (arr, val, low = 0, high = arr.length - 1, result = []) {

  // arr is empty array
  if (arr.length === 0) {
    return [];
  }

  // arr has no target value
  if (high === low && arr[low] !== val) {
    return [];
  }

  let mid = Math.floor((low + high + 1) / 2);

  if (arr[mid] === val) {
    result.push(mid)
    let lower = mid - 1;
    let higher = mid + 1;

    while (arr[lower] === val) {
      result.push(lower)
      lower--;
    }

    while (arr[higher] === val) {
      result.push(higher)
      higher++;
    }
  }

  if (arr[mid] > val) {
    return binarySearch(arr, val, low, mid - 1)
  }

  if (arr[mid] < val) {
    return binarySearch(arr, val, mid + 1, high)
  }

  return result.sort((a, b) => a - b);
}


let s = binarySearch([1, 3, 7, 7, 8, 8, 9], 89)

console.log('s:', s)