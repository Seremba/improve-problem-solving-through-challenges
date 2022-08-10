/*
has path
Write a function, hasPath, that takes in an object representing the
adjacency list of a directed acyclic graph and two nodes (src, dst).
The function should return a boolean indicating whether or not there
exists a directed path between the source and destination nodes.
*/

const hasPath = (graph, src, dst) => {
    let queue = [src];

    while(queue.length > 0){
       let current = queue.shift();
       if(current === dst) return true;

       for(let neighbor of graph[current]){
           queue.push(neighbor);
       }
    }

    return false;
}
// test_00:
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

console.log(hasPath(graph, 'f', 'k')); // true
