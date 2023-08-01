function calculateRectangleArea (x, y) {
  if (x >= 0 && y >= 0){
  return (x * y)
  } else {
    return undefined;
  }
}
console.log(calculateRectangleArea(10, 5));

function calculateTriangleArea (x, y) {
  if (x >= 0 && y >= 0) {
    return ((x * y) / 2)
  } else {
    return undefined;
  }
}
console.log(calculateTriangleArea(10, 5));

function calculateCircleArea (radius) {
    if (radius >= 0 && typeof radius === 'number') {
      return (Math.PI * radius * radius);
    } else {
      return undefined;
    }
  }
console.log(calculateCircleArea(10));