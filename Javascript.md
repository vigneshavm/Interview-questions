# **JavaScript Interview Questions & Answers**  

### **1. What is Hoisting in JavaScript?**  
**Answer:**  
Hoisting is JavaScript's behavior of moving function and variable declarations to the top of their scope before execution.  
- **Variables declared with `var` are hoisted but initialized as `undefined`.**  
- **`let` and `const` are hoisted but remain in a "Temporal Dead Zone" until initialized.**  
- **Function declarations are fully hoisted, but function expressions are not.**  

```js
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;
```

---

### **2. What are Closures in JavaScript?**  
**Answer:**  
A closure is a function that retains access to its outer scope, even after the outer function has executed. Closures are useful for creating private variables and stateful functions.  

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
```

---

### **3. What is the difference between `call()`, `apply()`, and `bind()`?**  
**Answer:**  
All three methods are used to invoke a function with a specific `this` value.  

- **`call()`** - Calls the function immediately with arguments passed individually.  
- **`apply()`** - Calls the function immediately but accepts arguments as an array.  
- **`bind()`** - Returns a new function with `this` bound to a specific object but does not invoke it immediately.  

```js
function greet(age) { console.log(`Hello, ${this.name}, you are ${age}`); }
const user = { name: "John" };

greet.call(user, 25);
greet.apply(user, [30]);
const boundGreet = greet.bind(user, 35);
boundGreet();
```

---

### **4. Explain Promises in JavaScript.**  
**Answer:**  
A Promise is an object representing the eventual completion or failure of an asynchronous operation.  
It has three states: **Pending, Resolved (Fulfilled), and Rejected**.  

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 1000);
});

promise.then(console.log).catch(console.error);
```

---

### **5. What is Event Loop in JavaScript?**  
**Answer:**  
The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations by handling asynchronous code execution.  
It prioritizes tasks in the following order:  
1. **Call Stack** (Synchronous tasks)  
2. **Microtasks Queue** (Promises, MutationObserver)  
3. **Callback Queue** (setTimeout, setInterval, DOM events)  

```js
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// Output: Start -> End -> Promise -> Timeout
```

---



Here's how the content can be organized based on technology:

---

### **JavaScript Concepts**

#### **1. Variable Hoisting**  
- **Hoisting** moves variable declarations to the top of their scope.  
- `var` is hoisted with `undefined`, while `let` and `const` are hoisted but remain uninitialized (Temporal Dead Zone).  
```js
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;
```

#### **2. Function Hoisting**  
- **Function declarations** are fully hoisted (can be called before definition).  
- **Function expressions** are hoisted as variables (`undefined` before assignment).  
```js
hoisted(); // Works
function hoisted() { console.log("Function hoisted"); }

notHoisted(); // TypeError
var notHoisted = function () { console.log("Expression not hoisted"); };
```

#### **3. Key ES6 Features**  
- `let` & `const` (block scoping)  
- **Arrow functions** (`=>` syntax)  
- Default parameters, template literals, destructuring  
- Spread/rest operators (`...`)  
- Classes, modules (`import/export`), promises, `async/await`, generators  

#### **4. Spread & Rest Operator**  
- **Spread (`...`)** expands elements:  
```js
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
```
- **Rest (`...`)** collects arguments into an array:  
```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3)); // 6
```

#### **5. Normal vs Arrow Functions**  
| Aspect | Normal Function | Arrow Function |
|--------|-----------------|----------------|
| `this` binding | Dynamic (based on caller) | Lexical (parent scope) |
| `arguments` object | Available | Not available |
| Constructors | Can use `new` | Cannot use `new` |

#### **6. Shallow vs Deep Copy**  
- **Shallow Copy**: Copies references of nested objects.  
```js
let obj = { a: 1, b: { c: 2 } };
let shallow = { ...obj };
shallow.b.c = 3;
console.log(obj.b.c); // 3
```
- **Deep Copy**: Recursively copies all properties.  
```js
let deep = JSON.parse(JSON.stringify(obj));
deep.b.c = 3;
console.log(obj.b.c); // 2
```



### **JavaScript Functional Programming**

#### **16. Promises in JavaScript**  
- A **Promise** represents an asynchronous operation.  
- States: **Pending → Fulfilled → Rejected**  

#### **17. Remove Duplicates & Sort Using Merge Sort**
```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [], i = 0, j = 0;

  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  }
  return result.concat(left.slice(i), right.slice(j));
}

function removeDuplicatesAndSort(arr) {
  return mergeSort([...new Set(arr)]);
}

const array = [4, 2, 5, 3, 4, 2, 1];
console.log(removeDuplicatesAndSort(array)); // [1, 2, 3, 4, 5]
```

#### **18. Output Order of Asynchronous Code**
```js
for (var i = 0; i < 5; i++) {
  console.log(i);
  setTimeout(() => console.log(i), 0);
}
```
**Output:**  
```
0  
1  
2  
3  
4  
5  
5  
5  
5  
5  
```
**Explanation:**  
- `var i` is **global**; after the loop, `i = 5`.  
- `setTimeout` runs **after the loop finishes**, printing `5` repeatedly.  

---

### **Express.js Middleware**

#### **10. Middleware in Express.js**  
- Functions executed before reaching the route handler.  
```js
app.use((req, res, next) => {
  console.log("Middleware running");
  next();
});
```
#### Examples:
- **Logging**, **Authentication**, **Validation**  

--- 

This organization separates the topics based on their relevant technology, helping to easily identify which area each concept belongs to.
