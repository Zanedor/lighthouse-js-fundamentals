const stations = [ 
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
]; //NOTE AND THIS IS IMPORTANT: The entries of the "stations" array are themselves arrays.
   //When interacting with them/their contents we MUST use "station" not "stations" (no "s" on the end)

  //We want:
  //have capacity of at least 20
  //and
  //be a school or community centre.

const chooseStations = function (stations) {
  let goodStations = [] ; // This defines a new array that will hold a list of stations we want

  for (const station of stations) { // "for loop" goes through all the entries in the "stations" array, which are themselves arrays called "station"
    let capacity = station[1] ; // Sets capacity to that of the current array. REMEBER the array entry goes [0,1,2].

    if (capacity >= 20) { // Checks to see if the array has the requiered capacity
      
      let type = station[2] ; // Sets type to that of the current array. REMEBER the array entry goes [0,1,2].

      if (type === "school" || type === "community centre") { // Checks to see if the array has one of the requiered types
        goodStations.push(station[0]) ; // This pushes the name (array entry 0) of the !!station!! array entry that tripped the "if" statment
      }                                 // to the "goodStations" array that we will print out, adding it to that array
    }
  }
  return goodStations // Returns goodStations array, making it the output of the funtion, allowing us to get it out of the function.
};

console.log(chooseStations(stations)); // Runs the chooseStations function with the "stations" array as the input