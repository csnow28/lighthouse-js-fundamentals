function range(start, end, step) {
  if (typeof start !== 'number' || typeof end !== 'number' || typeof step !== 'number') {
    return [];
  }

  if (start > end) {
    return [];
  }

  if (step <= 0) {
    return [];
  }

  let newArray = [];
  for (var i = start; i <= end; i += step) {
    newArray.push(i);
  }

  return newArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));