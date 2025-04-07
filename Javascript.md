### **Hoisting**
 **Variable Hoisting**
- Hoisting refers to how JavaScript moves declarations to the top of their scope, but **only the declarations** (not the assignments). 
- Variables declared using `var` are hoisted and initialized to `undefined`. `let` and `const` are hoisted but remain in the **Temporal Dead Zone** until initialized.
  
```js
console.log(a); // undefined
var a = 5; // a is hoisted as undefined

console.log(b); // ReferenceError
let b = 10; // b is in TDZ
```

---
 **Function Hoisting**
- Function declarations are hoisted completely, meaning you can call them before their declaration in code.
- Function expressions (like those using `var`, `let`, or `const`) are hoisted as variables, and they are `undefined` until assigned.
  
```js
hoisted(); // Works as function is hoisted
function hoisted() { console.log("Function hoisted"); }

notHoisted(); // TypeError: notHoisted is not a function
var notHoisted = function () { console.log("Expression not hoisted"); };
```

---

### **Difference between `var`, `let`, and `const`?**  
- `var`: **Function-scoped**, hoisted, can be re-declared.  
- `let`: **Block-scoped**, not hoisted, prevents redeclaration issues.  
- `const`: **Block-scoped**, immutable reference, must be initialized.

| Feature  | `var` | `let` | `const` |
|----------|------|------|--------|
| Scope | Function-scoped | Block-scoped | Block-scoped |
| Hoisting | Hoisted (undefined) | Hoisted (TDZ) | Hoisted (TDZ) |
| Reassignment | ✅ Allowed | ✅ Allowed | ❌ Not allowed |
| Redeclaration | ✅ Allowed | ❌ Not allowed | ❌ Not allowed |

Example:  
```js
if (true) {
    var x = 10;  // Accessible outside block
    let y = 20;  // Block-scoped
    const z = 30; // Block-scoped & immutable
}
console.log(x); // 10
// console.log(y, z); // ReferenceError
```

---

### **Key ES6 Features**
- **let and const**: Block-scoped variables, unlike var which is function-scoped.
- **Arrow functions**: Shorter syntax with lexical this binding.
- **Template literals**: Easier string interpolation using backticks.
- **Default parameters**: Set default values for function parameters.
- **Destructuring**: Extract values from arrays or objects into variables.
- **Spread** operators: Expands elements, typically in arrays or objects.
- **Rest** operators: Gathers remaining parameters into an array.
- **Promises & Async/Await**
- **Modules (`import/export`)**
- **Optional Chaining (`?.`)**

```js
// Arrow function
const greet = name => `Hello, ${name}`;

// Template literals
const greeting = `Hello, ${name}`;

// Spread
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];

// Rest
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
```



### **Normal vs Arrow Functions**
| Aspect | Normal Function | Arrow Function |
|--------|-----------------|----------------|
| `this` binding | Dynamic (depends on how the function is called) | Lexical (inherited from parent scope) |
| `arguments` object | Available | Not available |
| Can be used as constructors | Yes | No |

---

### **Shallow vs Deep Copy**
- **Shallow Copy**: Copies object references. Nested objects are still linked.
- **Deep Copy**: Recursively copies the values of objects, ensuring no references remain.

```js
let obj = { a: 1, b: { c: 2 } };

// Shallow copy
let shallow = { ...obj };
shallow.b.c = 3;
console.log(obj.b.c); // 3 (changed in both)

let deep = JSON.parse(JSON.stringify(obj)); // Deep copy
deep.b.c = 3;
console.log(obj.b.c); // 2 (original remains unchanged)
```


### **Difference between `call()`, `apply()`, and `bind()`**

All three methods allow you to set the `this` context for a function.

```js
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Alice" };
```

| Method  | Syntax | Behavior |
|---------|--------|----------|
| `call`  | `greet.call(person, "Hello", "!")` | Calls the function immediately with `this = person` |
| `apply` | `greet.apply(person, ["Hello", "!"])` | Same as `call`, but takes arguments as an array |
| `bind`  | `const greetAlice = greet.bind(person, "Hello", "!")`<br>`greetAlice()` | Returns a new function with bound `this` (can call later) |

---


### **Closure?**  
A closure allows a function to **remember its outer scope** even after execution.  

Example:  
```js
function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    console.log(counter);
  };
}
const increment = outer();
increment(); // 1
increment(); // 2
```
**Use case:** **Data encapsulation** (e.g., private variables).

---

### **Synchronous vs. Asynchronous JavaScript?**  
- **Synchronous**: Code executes sequentially, blocking further execution.  
- **Asynchronous**: Operations (e.g., API calls) run in the background without blocking.  

Example (Async/Await):  
```js
async function fetchData() {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
}
fetchData();
```

### **`==` and `===` in JavaScript.**  
- `==` (Abstract Equality): Converts types before comparing.  
- `===` (Strict Equality): No type conversion, **compares both value & type**.  

Example:  
```js
console.log(5 == "5");  // ✅ true (type conversion)
console.log(5 === "5"); // ❌ false (different types)
```

---



### **`this` keyword in JavaScript.**  
- **Global scope (`this` = window/globalThis)**  
- **Object method (`this` = object)**  
- **Arrow function (`this` = lexical/parent scope)**  

Example:  
```js
const obj = {
    value: 42,
    getValue: function () {
        return this.value;
    },
};
console.log(obj.getValue()); // ✅ 42
```
**Arrow function (`this` is not bound)**:  
```js
const obj2 = {
    value: 10,
    getValue: () => this.value, // ❌ `this` refers to global
};
console.log(obj2.getValue()); // ❌ undefined
```

---

### **`null` and `undefined`?**  
| Feature | `null` | `undefined` |
|---------|--------|------------|
| Meaning | Absence of a value (intentional) | Variable declared but not assigned |
| Type | Object (`typeof null === "object"`) | Undefined (`typeof undefined === "undefined"`) |

Example:  
```js
let a = null;
let b;
console.log(a); // null
console.log(b); // undefined
```

---



### **Event Loop & Call Stack in JavaScript.**  
JavaScript is **single-threaded** but can handle async tasks via the **Event Loop**.  
1. **Call Stack**: Executes synchronous code.  
2. **Web APIs**: Handles async tasks (setTimeout, fetch).  
3. **Callback Queue**: Holds async tasks to be executed.  
4. **Event Loop**: Moves tasks from the queue to the call stack.  

Example:  
```js
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
```
**Output:**  
```
Start
End
Promise
Timeout
```

---

### **`async/await` Vs Promises.**  
- **Promise**: Handles async code with `.then()` and `.catch()`.  
- **async/await**: Cleaner syntax, uses `await` inside an `async` function.  

Example using **Promises**:  
```js
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```
Example using **async/await**:  
```js
async function fetchData() {
    try {
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
fetchData();
```

---

### **JavaScript Modules (`import/export`)?**  
Modules **split** code into reusable files.  

**Exporting (`math.js`)**:  
```js
export function add(a, b) {
    return a + b;
}
```
**Importing (`app.js`)**:  
```js
import { add } from "./math.js";
console.log(add(2, 3)); // ✅ 5
```





### **Event Propagation**
Event propagation is the way events travel through the DOM tree. It has three phases:

1. **Capturing Phase (Event Capturing)**: The event starts from the root and moves down to the target.
2. **Target Phase**: The event reaches the target element.
3. **Bubbling Phase (Event Bubbling)**: The event travels back up the DOM tree.

Example:
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
- **`event.stopPropagation()`** prevents the event from moving up (bubbling).
- **`true` in addEventListener** makes the event trigger in the capturing phase.

---

### **Inheritance**
JavaScript supports **prototypal inheritance**, allowing objects to inherit properties and methods from other objects.

Example:
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



### **Normal Function vs Arrow Function**
| Feature | Normal Function | Arrow Function |
|---------|----------------|---------------|
| `this` Binding | Dynamic (depends on how it's called) | Lexical (inherits from surrounding scope) |
| Arguments Object | ✅ Yes (`arguments`) | ❌ No (`arguments` is undefined) |
| Suitable for Methods | ✅ Yes | ❌ No (Cannot use `this` in objects) |

**Example:**
```js
function normalFunc() {
  console.log(this); // `this` depends on call context
}
const arrowFunc = () => {
  console.log(this); // `this` inherits from parent scope
};
```

---

### **Debouncing vs Throttling**
| Feature  | Debouncing | Throttling |
|----------|-----------|------------|
| Definition | Delays execution until after a certain time has passed | Executes at most once in a given interval |
| Use Case | Search input, resize events | Scroll events, button clicks |

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

### **Closures**
A **closure** is a function that retains access to variables from its outer scope even after the outer function has finished executing.

**Example:**
```js
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}
const closureExample = outerFunction("Hello");
closureExample("World"); // Outer: Hello, Inner: World
```

---

### **Currying**
Currying is a technique where a function takes multiple arguments one at a time.

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



