//Calculates area of a Rectangle + creates the appropriate variables that take parameters within
function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return undefined ;
  } else {
    return length * width ; // Rectangle Area: length × width
  }
}

//Calculates area of a Triangle + creates the appropriate variables that take parameters within
function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return undefined ;
  } else { 
    return (base * height) / 2 ; //Triangle Area: base × height / 2
  }
}

//Calculates area of a Circle + creates the appropriate variable that takes the parameter within
function calculateCircleArea(radius) {
  if (radius < 0) {
    return undefined ;
  } else {
    return Math.PI * Math.pow(radius, 2) ; //Circle Area: π × radius^2
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined