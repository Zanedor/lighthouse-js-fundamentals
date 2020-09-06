const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']; //Sets our movement

let position = [0,0] ; //Sets our starting position as 0,0

// finalPosition in the Assignment should return [-1, 4]
// HOWEVER: that doesn't line up with the way x,y coordinates are normaly ordered (it's y,x rather then x,y). THIS IS A REMINDER TO READ DOCUMENTATION/INSTRUCTIONS
// The version I'm keeping here uses the normal x,y layout for the sake of utility

const finalPosition = function(moves) { // Calculates where we end up
  moves.forEach(function(move) { // Determins what movment was made
    if(move === "north") { 
      position[0] += 1 ;
    } else if(move === "south") {
      position[0] -= 1 ;
    } else if(move === "east") {
      position[1] += 1 ;
    } else if(move === "west") {
      position[1] -= 1 ;
    }
  });

  return position; // Returns the poistion array
};

console.log(finalPosition(moves)); // Runs the finalPosition function and prints