

| Questions1 | Questions2 | Questions3 |Questions4 | Questions5 | Questions6 | Questions7 | Questions8 |
| --- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
 [Key ES6 Features](#key-es6-features)  | [Normal Function vs Arrow Function](#normal-function-vs-arrow-function)  | [Shallow vs Deep Copy](#shallow-vs-deep-copy)  |  [Event Propagation](#event-propagation)| [Inheritance](#inheritance)|  [Event Loop & Call Stack](#event-loop--call-stack)  | [async/await vs Promises](#asyncawait-vs-promises) | [JavaScript Modules (`import/export`)](#javascript-modules-importexport)



## let, var or const

| Feature      | `var`            | `let`            | `const`                  |
|--------------|------------------|------------------|---------------------------|
| Scope        | Function-scoped  | Block-scoped     | Block-scoped              |
| Hoisting     | ✅ Yes (undefined) | ✅ Yes (TDZ)     | ✅ Yes (TDZ)              |
| Reassignment | ✅ Allowed        | ✅ Allowed        | ❌ Not allowed            |
| Redeclaration| ✅ Allowed        | ❌ Not allowed    | ❌ Not allowed            |

```js
if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
}
console.log(x); // ✅ 10
// console.log(y, z); // ❌ ReferenceError
```

---

## Hoisting

### Variable Hoisting
- `var` is hoisted and initialized to `undefined`.
- `let` and `const` are hoisted but **not initialized** — they stay in **TDZ (Temporal Dead Zone)**.

```js
console.log(a); // undefined
var a = 5;

console.log(b); // ❌ ReferenceError
let b = 10;
```

---

### Function Hoisting

```js
hoisted(); // ✅ Works
function hoisted() { console.log("Function hoisted"); }

notHoisted(); // ❌ TypeError
var notHoisted = function () { console.log("Expression not hoisted"); };
```

---

### Hoisting Summary

| Declaration Type           | Hoisted | Initialized | Access Before Declaration         |
|----------------------------|---------|-------------|-----------------------------------|
| `var`                     | ✅ Yes | ✅ `undefined` | ✅ Returns `undefined`            |
| `let`, `const`            | ✅ Yes | ❌ No         | ❌ Throws `ReferenceError`        |
| `function` declaration    | ✅ Yes | ✅ Yes        | ✅ Works normally                 |
| `function` expression (var)| ✅ Yes | ❌ No         | ❌ TypeError                      |
| `class` declaration       | ✅ Yes | ❌ No         | ❌ ReferenceError                 |
| `import` statements       | ✅ Yes | ✅ Yes        | ❗ Must be at top of file         |

---

## Common Hoisting Pitfalls

1. **Unexpected `undefined` values**
   ```js
   console.log(a); // undefined
   var a = 10;
   ```

2. **ReferenceError with `let` or `const`**
   ```js
   console.log(b); // ❌ ReferenceError
   let b = 20;
   ```

3. **Calling function expressions before assignment**
   ```js
   sayHello(); // ❌ TypeError
   var sayHello = function() { console.log('Hello'); };
   ```

4. **Using classes before declaration**
   ```js
   const obj = new MyClass(); // ❌ ReferenceError
   class MyClass {}
   ```

---

## Key ES6 Features

- ✅ `let` and `const`
- ✅ Arrow functions  
- ✅ Template literals  
- ✅ Default parameters  
- ✅ Destructuring  
- ✅ Spread & Rest  
- ✅ Promises & async/await  
- ✅ Modules (`import/export`)  
- ✅ Optional chaining (`?.`)

```js
const greet = name => `Hello, ${name}`;
const arr = [1, 2, 3];
const newArr = [...arr, 4];
function sum(...nums) { return nums.reduce((a, b) => a + b); }
```

---

##  Normal Function vs Arrow Function

| Aspect              | Normal Function                                   | Arrow Function                              |
|---------------------|--------------------------------------------------|---------------------------------------------|
| `this` Binding       | Dynamic (`this` depends on call)                 | Lexical (`this` inherits from parent scope) |
| `arguments` Object   | ✅ Available                                      | ❌ Not available                             |
| Constructor Use      | ✅ Yes                                            | ❌ No                                        |
| Hoisting             | ✅ Fully hoisted (if declaration)                | ❌ Not hoisted                               |
| Usage as Methods     | ✅ Recommended                                   | ⚠️ Not ideal for object methods              |

```js
function normalFunc() {
  console.log(this);
  console.log(arguments);
}

const arrowFunc = () => {
  console.log(this);
  // console.log(arguments); // ❌ Error
};
```

---

##  Shallow vs Deep Copy

- **Shallow Copy** → Only top-level copied.
- **Deep Copy** → All nested objects copied recursively.

```js
const obj = { a: 1, b: { c: 2 } };

const shallow = { ...obj };
shallow.b.c = 3;
console.log(obj.b.c); // 3

const deep = JSON.parse(JSON.stringify(obj));
deep.b.c = 4;
console.log(obj.b.c); // 3
```

---

##  call(), apply(), and bind()

```js
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}
const person = { name: "Alice" };

greet.call(person, "Hello", "!");        // Hello, Alice!
greet.apply(person, ["Hi", "?"]);        // Hi, Alice?
const boundGreet = greet.bind(person, "Hey", ".");
boundGreet();                            // Hey, Alice.
```

| Method | Arguments Format | Invoked Immediately | Returns New Function |
|--------|------------------|---------------------|----------------------|
| `call` | Separate values  | ✅ Yes              | ❌ No                |
| `apply`| Array of values  | ✅ Yes              | ❌ No                |
| `bind` | Any format       | ❌ No               | ✅ Yes               |

---




---

##  Closure

Closure is when a function remembers its lexical scope even after that outer function has finished executing.

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

##  Synchronous vs Asynchronous

| Type         | Description                                       |
|--------------|---------------------------------------------------|
| Synchronous  | Blocks further execution until finished          |
| Asynchronous | Runs in background, non-blocking                 |

```js
async function fetchData() {
  const response = await fetch("https://api.com/data");
  const data = await response.json();
  console.log(data);
}
```

---

##  == vs ===

```js
console.log(5 == "5");   // ✅ true → type coercion
console.log(5 === "5");  // ❌ false → strict equality
```

| Operator | Type Conversion | Checks Type | Example     |
|----------|------------------|-------------|-------------|
| `==`     | ✅ Yes           | ❌ No        | `'5' == 5`  |
| `===`    | ❌ No            | ✅ Yes       | `'5' === 5` |

---

##  this keyword

| Context              | `this` refers to                      |
|----------------------|--------------------------------------|
| Global Scope         | `window` (browser) or `globalThis`   |
| Inside function      | `window` (non-strict) or `undefined` |
| Inside method        | The object calling the method        |
| Arrow function       | Lexically inherits from parent scope |

---

##  null vs undefined

| Value       | Meaning                        |
|-------------|--------------------------------|
| `null`      | Intentionally empty            |
| `undefined` | Declared but not assigned yet  |

```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```

---

##  Event Loop & Call Stack

- JavaScript is single-threaded, with an **event loop** that manages async operations via the **call stack** and **task queue**.

```js
console.log("Start");
setTimeout(() => console.log("Async"), 0);
console.log("End");
```

**Output:**  
```
Start  
End  
Async
```

---

##  async/await vs Promises

```js
function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done!"), 1000);
  });
}

async function fetchData() {
  const result = await getData();
  console.log(result); // Done!
}
```

| Feature        | Promises                     | async/await               |
|----------------|------------------------------|---------------------------|
| Syntax         | `.then().catch()`            | `await`, `try...catch`    |
| Readability    | ❌ More chaining              | ✅ Cleaner, like sync code |
| Error Handling | `.catch()`                   | `try...catch`             |

---



---

### **JavaScript Modules (`import/export`)**

Modules **split** code into reusable files.

**Exporting (`math.js`)**  
```js
export function add(a, b) {
  return a + b;
}
```

**Importing (`app.js`)**  
```js
import { add } from "./math.js";
console.log(add(2, 3)); // ✅ 5
```

---

### **Event Propagation**

Event propagation is the way events travel through the DOM tree. It has three phases:

1. **Capturing Phase (Event Capturing)** – Event travels from the root to the target.
2. **Target Phase** – Event reaches the target element.
3. **Bubbling Phase (Event Bubbling)** – Event bubbles up from the target to the root.

**Example:**
```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

```js
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
}, true); // Capturing phase

document.getElementById("child").addEventListener("click", (event) => {
  console.log("Child clicked");
  event.stopPropagation(); // Prevents bubbling
}, false); // Bubbling phase
```

- `event.stopPropagation()` prevents the event from moving up (bubbling).
- `true` in `addEventListener` enables the **capturing phase**.

---

### **Inheritance**

JavaScript supports **prototypal inheritance**, allowing objects to inherit properties and methods from other objects.

**Example:**
```js
function Parent(name) {
  this.name = name;
}
Parent.prototype.greet = function () {
  console.log(`Hello, ${this.name}`);
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const kid = new Child("John", 10);
kid.greet(); // Hello, John
```

---

### **Debouncing vs Throttling**

| Feature    | Debouncing                                  | Throttling                               |
|------------|---------------------------------------------|------------------------------------------|
| Definition | Delays execution until pause in events      | Executes at most once per time interval  |
| Use Case   | Search input, resize events                 | Scroll events, repeated button clicks    |

**Example:**
```js
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

function throttle(func, limit) {
  let lastFunc;
  return function (...args) {
    if (!lastFunc) {
      func.apply(this, args);
      lastFunc = setTimeout(() => (lastFunc = null), limit);
    }
  };
}
```

---

### **Currying**

Currying is a technique where a function takes multiple arguments **one at a time**.

**Example:**
```js
function curry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curry(1)(2)(3)); // 6
```

---

### **Pure Functions**

A **pure function** always:

1. **Returns the same output** for the same input.
2. **Has no side effects** (doesn’t modify external state).

---

| Feature            | Description                                 |
|--------------------|---------------------------------------------|
| ✅ Deterministic    | Same inputs produce same outputs           |
| ✅ No Side Effects  | Doesn’t rely on or modify external state    |
| ✅ Testable         | Easy to test, debug, and reason about       |
| ✅ Composable       | Easily combined with other functions        |

**Example:**
```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (Always the same)
```

---


