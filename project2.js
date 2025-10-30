console.log("Project");

//------------------------------//
// 1. Stack using prototype     //
//------------------------------//
function Stack() {
  this.items = [];
}

Stack.prototype.push = function(element) {
  this.items.push(element);
};

Stack.prototype.pop = function() {
  return this.items.pop();
};

Stack.prototype.peek = function() {
  return this.items[this.items.length - 1];
};

Stack.prototype.isEmpty = function() {
  return this.items.length === 0;
};

Stack.prototype.size = function() {
  return this.items.length;
};

Stack.prototype.print = function() {
  console.log(this.items.toString());
};

//------------------------------//
// 2. Balanced parentheses check //
//------------------------------//
function isBalanced(str) {
  var stack = new Stack();

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.isEmpty();
}

//------------------------------//
// 3. Test isBalanced function  //
//------------------------------//
console.log("Balanced (()) :", isBalanced("(())")); // true
console.log("Balanced (()):", isBalanced("(()"));   // false
console.log("Balanced ()() :", isBalanced("()()")); // true
console.log("Balanced )(:", isBalanced(")("));      // false

//------------------------------//
// 4. Queue using prototype     //
//------------------------------//
function Queue() {
  this.items = [];
}

Queue.prototype.enqueue = function(element) {
  this.items.push(element);
};

Queue.prototype.dequeue = function() {
  return this.items.shift();
};

Queue.prototype.front = function() {
  return this.items[0];
};

Queue.prototype.isEmpty = function() {
  return this.items.length === 0;
};

Queue.prototype.size = function() {
  return this.items.length;
};

Queue.prototype.print = function() {
  for (var i = 0; i < this.items.length; i++) {
    console.log(this.items[i].toString());
  }
};

//------------------------------//
// 5. Edible queue              //
//------------------------------//
function Edible(name, isFruit) {
  this.name = name;
  this.isFruit = isFruit;
}

var edibleQueue = new Queue();
edibleQueue.enqueue(new Edible("Apple", true));
edibleQueue.enqueue(new Edible("Carrot", false));
edibleQueue.enqueue(new Edible("Banana", true));
edibleQueue.enqueue(new Edible("Broccoli", false));
edibleQueue.enqueue(new Edible("Strawberry", true));
edibleQueue.enqueue(new Edible("Spinach", false));

//------------------------------//
// 6. Fruit and vegetable queues//
//------------------------------//
var fruitQueue = new Queue();
var vegetableQueue = new Queue();

//------------------------------//
// 7. Distribute edibles        //
//------------------------------//
while (!edibleQueue.isEmpty()) {
  var item = edibleQueue.dequeue();
  if (item.isFruit) {
    fruitQueue.enqueue(item);
  } else {
    vegetableQueue.enqueue(item);
  }
}

//------------------------------//
// 8. Print final contents      //
//------------------------------//
console.log("Fruit queue size:", fruitQueue.size());
console.log("Vegetable queue size:", vegetableQueue.size());

console.log("Fruits:");
for (var i = 0; i < fruitQueue.items.length; i++) {
  var fruit = fruitQueue.items[i];
  console.log("Fruit:", fruit.name);
}

console.log("Vegetables:");
for (var j = 0; j < vegetableQueue.items.length; j++) {
  var veg = vegetableQueue.items[j];
  console.log("Vegetable:", veg.name);
}
