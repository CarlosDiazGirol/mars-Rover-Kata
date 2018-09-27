// Rover Object Goes Here
// ======================
var rover = {
  direction: 'N',
  position: {
    x: 0,
    y: 0
  },
  travelLog: []
};

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
};

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
};

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction) {
  case 'N':
    if (rover.position.y > 0) {
      rover.position.y = rover.position.y -1;     
    } else {
      rover.position.y = rover.position.y + 0;
    }
    break;
  case 'W':
    if (rover.position.x > 0) {
      rover.position.x = rover.position.x - 1;
    } else {
      rover.position.x = rover.position.x + 0;
    }
    break;
  case 'S':
    if (rover.position.y < 10) {
      rover.position.y = rover.position.y + 1;
    } else {
      rover.position.y = rover.position.y + 0;
    }
    break;
  case 'E':
    if (rover.position.x < 10) {
      rover.position.x = rover.position.x + 1;
    } else {
      rover.position.x = rover.position.x + 0;
    }    
    break;
  }
};

function moveBackwards(rover){
  console.log("moveBackWards was called");
  switch (rover.direction) {
  case 'N':
    if (rover.position.y < 10) {
      rover.position.y = rover.position.y + 1;     
    } else {
      rover.position.y = rover.position.y + 0;
    }
    break;
  case 'W':
    if (rover.position.x < 10) {
      rover.position.x = rover.position.x + 1;
    } else {
      rover.position.x = rover.position.x + 0;
    }
    break;
  case 'S':
    if (rover.position.y > 0) {
      rover.position.y = rover.position.y - 1;
    } else {
      rover.position.y = rover.position.y + 0;
    }
    break;
  case 'E':
    if (rover.position.x > 0) {
      rover.position.x = rover.position.x - 1;
    } else {
      rover.position.x = rover.position.x + 0;
    }    
    break;
  }
};

function doMove(move, rover) {
  if (move == 'l' || move == 'r' || move == 'f' || move == 'b') {
    switch (move) {
      case 'l':
        turnLeft(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      case 'f':
        moveForward(rover);
        break;
      case 'b':
        moveBackwards(rover);
        break;
    }
  } else {
    console.log('error, imposible do all moves');
  }
}

function doCommands(moves, rover) {
  var directions = moves.split('');
  for (i = 0; i < directions.length; i++) {
    var move = directions[i];
    doMove(move, rover);
    rover.travelLog.push(move);
  }
}


