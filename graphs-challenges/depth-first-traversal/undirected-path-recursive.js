/*
undirected path
Write a function, undirectedPath, that takes in an array of edges for
an undirected graph and two nodes (nodeA, nodeB). The function should
return a boolean indicating whether or not there exists a path between
nodeA and nodeB.
*/

const undirectedPath = (edges,nodeA,nodeB) => {
 // create helper function to change edges to graph
    const graph = buildGraph(edges);
    // console.log(graph);
    return hasPath(graph, nodeA, nodeB, new Set());
}

const hasPath = (graph, src, dst, visited) => {
    if(src === dst) return true;
    if(visited.has(src)) return false;
    visited.add(src);

   for(let neighbor of graph[src]){
       if(hasPath(graph, neighbor, dst, visited) === true) {
           return true
       }
   }

   return false;
}
const buildGraph = (edges) => {
    let graph = {};
    for(let edge of edges) {
        const [a, b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

const edgess = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

console.log(undirectedPath(edgess, 'j', 'm')); // -> true


const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];

  console.log(undirectedPath(edges, 'k', 'o')); // -> false
