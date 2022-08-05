/*Write a function, linkedListValues, that takes in the head of a linked
list as an argument. The function should return an array containing all
values of the nodes in the linked list.

Hey. This is our first linked list problem, so you should be liberal
with watching the Approach and Walkthrough. Be productive, not stubborn.
-AZ
*/
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  const linkedListValues = (head) => {
      let values = [];
      let current = head;

      while(current !== null){
          values.push(current.val);
          current = current.next;
      }

      return values;
  }
  // const linkedListValues = (head) => {
  //     const values = [];
  //     fillValues(head, values);
  //     return values;
  // }

  // const fillValues = (head, values) => {
  //   if(head === null) return;
  //   values.push(head.val);
  //   fillValues(head.next, values);
  // }
  // test_00:
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");

  a.next = b;
  b.next = c;
  c.next = d;

  // a -> b -> c -> d

  console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]
  // test_01:
  const x = new Node("x");
  const y = new Node("y");

  x.next = y;

  // x -> y

  linkedListValues(x); // -> [ 'x', 'y' ]
  // test_02:
  const q = new Node("q");

  // q

  linkedListValues(q); // -> [ 'q' ]
  // test_03:
  linkedListValues(null); // -> [ ]