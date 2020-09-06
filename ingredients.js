const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let W = 0 //sets start point as 1st element of the loop as well as the count

while (W < ingredients.length) { // End point is set to the last entry due to length staring at 1 and the array elements starting at 0

  console.log(ingredients[W]) // print's out the current ingredient

  W += 1; //Incraments the loop
}

// Write a for loop that prints out the contents of ingredients:
for (let F = 0; F < ingredients.length; F++) { //End and start points are set as above

  console.log(ingredients[F]) // print's out the current ingredient
}


// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let F2 = ingredients.length - 1; F2 >= 0; F2--) { // We're swaping things so we start at the last element (ingredients.length - 1) and end on the fist (0)

  console.log(ingredients[F2]) // print's out the current ingredient
}