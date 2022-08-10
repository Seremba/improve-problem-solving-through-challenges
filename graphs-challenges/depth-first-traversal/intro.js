const depthFirstPrint = (graph, source) => {
    const stack = [source];

    while(stack.length > 0){
        let current = stack.pop();
        console.log(current);
        for(let neighbor of graph[current]){
            stack.push(neighbor);
        }
    }
}


const graph = {
 a: ['c', 'b'],
 b: ['d'],
 c: ['e'],
 d: ['f'],
 e: [],
 f: []
}

depthFirstPrint(graph, 'a');
