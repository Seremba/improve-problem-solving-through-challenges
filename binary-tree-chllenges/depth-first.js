/*
Write a function, depthFirstValues, that takes in the root of a
binary tree. The function should
return an array containing all values of the tree in depth-first order.
*/
class Node {
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

const depthFirstValues = (root) => {
    if(root === null) return [];
    let result = [];
    const stack = [root];
    while(stack.length > 0){
        let current = stack.pop();
        result.push(current.val);

        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);

    }
    return result;
}


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(depthFirstValues(a));
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
