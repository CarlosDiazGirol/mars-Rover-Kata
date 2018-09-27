// Rover Object Goes Here
// ======================
var rover = {
  direction: 'N'
}
// ======================

function turnLeft(rover){
  console.log('turnLeft was called');

  var newDirection;
  switch (rover.direction) {
    case 'N':
      newDirection = 'W';
      break;
    case 'W':
      newDirection = 'S';
      break;
    case 'S':
      newDirection = 'E';
      break;
    case 'E':
      newDirection = 'N';
      break;
  }
  rover.direction = newDirection;
}

function turnRight(rover){ 
  console.log('turnRight was called');

  var newDirection;
  switch (rover.direction) {
    case 'N':
      newDirection = 'E';
      break;
    case 'W':
      newDirection = 'N';
      break;
    case 'S':
      newDirection = 'W';
      break;
    case 'E':
      newDirection = 'S';
      break;
  }
  rover.direction = newDirection;
}

function moveForward(rover){
  console.log("moveForward was called")
}
