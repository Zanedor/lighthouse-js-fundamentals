
// This should print something to the effect of: "Suzie is 32 years old."

//             Function Parameters
// name – a string representing someone's name
// yearOfBirth – a number representing their year of birth
// currentYear – a number representing the current year

function ageCalculator(name, yearOfBirth, currentYear) { //Creates function and the 3 variables that take parameters within it
  return name + " is " + (currentYear-yearOfBirth) + " years old."; //
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));