JavaScript Interview Preparation

1. Variable Hoisting in JavaScript

Hoisting Overview:

Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before execution.

Key Points:

Variable declarations are hoisted, but initializations are not.

var is hoisted and initialized as undefined.

let and const are hoisted but remain in the Temporal Dead Zone (TDZ) until their definition.

Function declarations are fully hoisted, including their body.

Examples:

Hoisting with var

console.log(a); // undefined
var a = 10;
console.log(a); // 10

var a is hoisted, but a = 10 is not, leading to undefined.

Hoisting with let and const

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

let and const are hoisted but in TDZ, causing a ReferenceError.

Function Hoisting

foo(); // Output: "Hello"
function foo() {
  console.log("Hello");
}

Function declarations are fully hoisted.

2. Difference Between call(), apply(), and bind()

Overview:

These methods manipulate the this context of a function.

Comparison Table:

Method

Execution

Arguments

Returns

call

Immediately

Passed individually

Function result

apply

Immediately

Passed as an array

Function result

bind

Not immediate

Passed individually

New function

Examples:

function greet(name, age) {
  console.log(`Hello ${name}, you are ${age} years old`);
  console.log(this);
}
const person = { profession: "Developer" };

Using call

greet.call(person, "John", 30);

Output:

Hello John, you are 30 years old
{ profession: "Developer" }

Using apply

greet.apply(person, ["Jane", 25]);

Using bind

const boundGreet = greet.bind(person, "Smith", 40);
boundGreet();

When to Use?

call → When arguments are passed individually.

apply → When arguments are in an array (e.g., Math.max.apply(null, [1, 2, 3])).

bind → When creating a new function with a pre-set this.

3. Optimized Binary Search with Sorting

Step 1: Sorting the Array

let array = [1, 6, 2, 9, 4, 5, 7, 3];
array.sort((a, b) => a - b);
console.log("Sorted Array:", array);

Sorted Output: [1, 2, 3, 4, 5, 6, 7, 9]

Step 2: Implementing Binary Search

function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    arr[mid] > target ? right = mid - 1 : left = mid + 1;
  }
  return -1;
}

let target = 3;
let index = binarySearch(array, target);
console.log(`Index of ${target}:`, index);

Output:

Index of 3: 2

Binary Search Breakdown:

Initialize left = 0, right = arr.length - 1.

Find middle index mid = Math.floor((left + right) / 2).

Compare arr[mid] with target:

If equal → return mid.

If greater → search left half (right = mid - 1).

If smaller → search right half (left = mid + 1).

Repeat until left > right.

Time Complexity:

Sorting: O(n log n)

Binary Search: O(log n)

Total Complexity: O(n log n) (due to sorting step)
