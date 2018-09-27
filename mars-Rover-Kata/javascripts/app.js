// Rover Object Goes Here
// ======================
var roverDirection = {
  north: [1, "north"],
  east:  [2, "east"],
  south: [3, "south"],
  west:  [4, "west"]
}
var newDirection = roverDirection['north'];
var left = 1;
var right = 1;
// ======================
function turnLeft(rover){

  // if (rover == roverDirection['north'] ) {
  //   newDirection = roverDirection['west'];
  // } else if (rover == roverDirection['east'] ) {
  //   newDirection = roverDirection['north'];
  // } else if (rover == roverDirection['south'] ) {
  //   newDirection = roverDirection['east'];
  // } else if (rover == roverDirection['west'] ) {
  //   newDirection = roverDirection['south'];
  // } else {
  //   newDirection = roverDirection['north'];
  // }
  return newDirection;
}

function turnRight(rover){
  newDirection = newDirection + rover;
  return newDirection;
  if (newDirection = 2) { // Este es el valor de North que pasa a East   
    console.log(newDirection + " hola");
  } else if (newDirection = 3) {
    console.log(newDirection + " caracola");
  }
}





console.log(newDirection)



function moveForward(rover){
  console.log("moveForward was called")
}

