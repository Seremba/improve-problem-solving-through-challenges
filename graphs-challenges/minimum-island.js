/*
minimum island
Write a function, minimumIsland, that takes in a grid containing Ws
and Ls. W represents water and L represents land. The function should
return the size of the smallest island. An island is a vertically or
horizontally connected region of land.

You may assume that the grid contains at least one island.
*/

const minimumIsland = (grid) => {
    let visited = new Set();

    let minSize = Infinity;
    for(let row = 0; row < grid.length; row += 1){
        for(let col = 0; col < grid[0].length; col += 1){
            let size = exploreSize(grid, row, col, visited);
            if(size > 0 && size < minSize){
                minSize = size;
            }
        }
    }
    return minSize;
}

const exploreSize = (grid, row, col, visited) => {
    const rowInbounds = 0 <= row && row < grid.length;
    const colInbounds = 0 <= col && col < grid[0].length;
    if(!rowInbounds || !colInbounds) return 0;
    if(grid[row][col] === "W") return 0;

    const psn = row + "," + col;
    if(visited.has(psn)) return 0;
    visited.add(psn);

   let size = 1;
   size += exploreSize(grid, row - 1, col, visited);
   size += exploreSize(grid, row + 1, col, visited);
   size += exploreSize(grid, row, col - 1, visited);
   size += exploreSize(grid, row, col + 1, visited);

   return size;
}

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

console.log(minimumIsland(grid)); // -> 2

const grid2 = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
  ];

  console.log(minimumIsland(grid2)); // -> 1

  const grid3 = [
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
  ];

 console.log(minimumIsland(grid3)) ; // -> 9
