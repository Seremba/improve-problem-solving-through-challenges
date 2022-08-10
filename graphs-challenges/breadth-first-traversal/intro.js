const breadthFirstPrint = (graph, source) => {
    let queue = [source];

    while(queue.length > 0){
        let current = queue.shift();
        console.log(current);

        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
}

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
   }

   breadthFirstPrint(graph, 'a')
