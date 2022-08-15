/*
Write a function, islandCount, that takes in a grid containing Ws and Ls.
W represents water and L represents land. The function should return the
number of islands on the grid.
An island is a vertically or horizontally connected region of land.
*/

const islandCount = (grid) => {
    const visited = new Set();
    let count = 0;
    for(let row = 0; row < grid.length; row += 1){
        for(let col = 0; grid[0].length; col += 1){
            if (explore(grid, row, col, visited) === true){
                count += 1;
            }
        }
    }
    return count;
}

const explore = (grid, row, col, visited) => {
  const rowBounds = 0 <= row && row < grid.length;
  const colBounds = 0 <= col && col < grid[0].length;
  if(!rowBounds || !colBounds) return false;

  if(grid[row][col] === 'W') return false;

  const psn = row + "," + col;
//   console.log(psn);
  if(visited.has(psn)) return false;
  visited.add(psn);
//   console.log(visited)
  explore(grid, row - 1, col, visited);
  explore(grid, row + 1, col, visited);
  explore(grid, row, col - 1, visited);
  explore(grid, row, col + 1, visited);

  return true;
}
const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];

  console.log(islandCount(grid)); // -> 3
