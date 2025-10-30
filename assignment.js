//--------------------------//
// The stack data structure //
//--------------------------//
console.log("The stack data structure");

function Stack() {
  var items = [];

  this.push = function(element) {
    items.push(element);
  };

  this.pop = function() {
    return items.pop();
  };

  this.peek = function() {
    return items[items.length - 1];
  };

  this.size = function() {
    return items.length;
  };

  this.isEmpty = function() {
    return items.length === 0;
  };

  this.print = function() {
    console.log(items.toString());
  };
}

// Test the stack
var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Peek:", stack.peek()); // 3
console.log("Pop:", stack.pop());   // 3
console.log("Size:", stack.size()); // 2
stack.print();                      // 1,2

//----------------------------------//
// ECMAScript 6 and the Stack class //
//----------------------------------//
console.log("ECMAScript 6 and the Stack class");
// Skipped as instructed

//-------------------------------//
// Solving problems using stacks //
//-------------------------------//
console.log("Solving problems using stacks");

// 1. Convert decimal to binary using remainder
var number = parseInt(prompt("Enter a decimal number:"));
var result = "";
var temp = number;

while (temp > 0) {
  result += (temp % 2).toString();
  temp = Math.floor(temp / 2);
}
console.log("Incorrect binary (reversed):", result);

// 2. Problem: binary digits are in reverse order

// 3. Solve using a stack
var binaryStack = new Stack();
temp = number;

while (temp > 0) {
  binaryStack.push(temp % 2);
  temp = Math.floor(temp / 2);
}

var binary = "";
while (!binaryStack.isEmpty()) {
  binary += binaryStack.pop().toString();
}
console.log("Correct binary:", binary);

//--------------------------//
// The queue data structure //
//--------------------------//
console.log("The queue data structure");

// Stack = LIFO (last in, first out) → e.g., undo history
// Queue = FIFO (first in, first out) → e.g., print jobs

//------------------//
// Creating a queue //
//------------------//
console.log("Creating a queue");

function Queue() {
  var items = [];

  this.enqueue = function(element) {
    items.push(element);
  };

  this.dequeue = function() {
    return items.shift();
  };

  this.front = function() {
    return items[0];
  };

  this.size = function() {
    return items.length;
  };

  this.isEmpty = function() {
    return items.length === 0;
  };

  this.print = function() {
    console.log(items.toString());
  };
}

// Test the queue
var queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
console.log("Front:", queue.front()); // A
console.log("Dequeue:", queue.dequeue()); // A
queue.print(); // B,C

//--------------------//
// The priority queue //
//--------------------//
console.log("The priority queue");

function QueueElement(element, priority) {
  this.element = element;
  this.priority = priority;
}

function PriorityQueue() {
  var items = [];

  this.enqueue = function(element, priority) {
    var queueElement = new QueueElement(element, priority);
    var added = false;

    for (var i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      items.push(queueElement);
    }
  };

  this.dequeue = function() {
    return items.shift();
  };

  this.front = function() {
    return items[0];
  };

  this.size = function() {
    return items.length;
  };

  this.isEmpty = function() {
    return items.length === 0;
  };

  this.print = function() {
    for (var i = 0; i < items.length; i++) {
      console.log(`${items[i].element} - ${items[i].priority}`);
    }
  };
}

// Test the priority queue
var pq = new PriorityQueue();
pq.enqueue("Task A", 3);
pq.enqueue("Task B", 1);
pq.enqueue("Task C", 2);
pq.print();
// Output: Task B - 1, Task C - 2, Task A - 3

//---------------------------------//
// The circular queue - Hot Potato //
//---------------------------------//
console.log("The circular queue - Hot Potato");

function hotPotato(nameList, num) {
  var queue = new Queue();

  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    console.log("Removed:", queue.dequeue());
  }

  return queue.dequeue();
}

// Test the hot potato game
var names = ["Alice", "Bob", "Charlie", "David", "Eve"];
var winner = hotPotato(names, 7);
console.log("Winner:", winner);
