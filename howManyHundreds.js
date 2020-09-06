
//When this function is given a number, it should return how many hundreds fit into that number. 

function howManyHundreds(num) {
  return (num / 100) - ((num % 100)/100);
  //Need to - the remander from "num" in order to get the # of hundrades but % puts out the remender as a whole number rather then
  //a decimal one so you need to /100 in order to put it inot the right format.
};

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);