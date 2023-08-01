const moves = ['north', 'south', 'east', 'west'];
function finalPosition(moves) {
  let x = 0;
  let y = 0;

  for (const move of moves) {
    if (move === "north") {
      y ++;
    } else if (move === "south") {
      y --;
    } else if (move === "east") {
      x ++;
    } else if (move === "west") {
      x --;
    }
  }
  return [x, y];
}
console.log(finalPosition(moves))