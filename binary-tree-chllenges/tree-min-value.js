/*
Write a function, treeMinValue, that takes in the root of a binary
tree that contains number values. The function should return the
minimum value within the tree.

You may assume that the input tree is non-empty.
*/
class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeMinValue = (root) => {
    let minValue = Infinity;

    let queue = [ root ];
    while(queue.length > 0){
        let current = queue.shift();
        if(current.val < minValue) {
            minValue = current.val;
        }

        if(current.left !== null)queue.push(current.left);
        if(current.right !== null)queue.push(current.right);
    }

    return minValue;
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(treeMinValue(a)); // -> -2
