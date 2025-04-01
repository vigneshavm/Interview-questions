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
