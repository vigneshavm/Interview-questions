## **1. Event Propagation in JavaScript**
Event propagation is the way events travel through the DOM tree. It has three phases:

1. **Capturing Phase (Event Capturing)**: The event starts from the root and moves down to the target.
2. **Target Phase**: The event reaches the target element.
3. **Bubbling Phase (Event Bubbling)**: The event travels back up the DOM tree.

### Example:
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

## **2. Inheritance in JavaScript**
JavaScript supports **prototypal inheritance**, allowing objects to inherit properties and methods from other objects.

### Example:
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

## **3. `let` vs `const` vs `var`**
| Feature      | `var` | `let` | `const` |
|-------------|------|------|--------|
| Scope       | Function-scoped | Block-scoped | Block-scoped |
| Reassignable | ✅ Yes | ✅ Yes | ❌ No |
| Redeclarable | ✅ Yes | ❌ No | ❌ No |
| Hoisting     | ✅ Yes (initialized as `undefined`) | ✅ Yes (in **Temporal Dead Zone**) | ✅ Yes (in **TDZ**) |

**Example:**
```js
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;

const c = 15;
c = 20; // TypeError
```

---

## **4. Normal Function vs Arrow Function**
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

## **5. Debouncing vs Throttling**
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

## **6. Closures in JavaScript**
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

## **7. Currying in JavaScript**
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

## **8. JavaScript (JS) vs React**
| Feature | JavaScript | React |
|---------|-----------|-------|
| Type | Programming Language | JavaScript Library |
| Purpose | General-purpose scripting | UI Development |
| Uses | DOM Manipulation | Virtual DOM, Components |
| State Management | Manual | Built-in (`useState`, Redux, etc.) |

---

## **9. Convert React to JS**
React (JSX):
```jsx
function App() {
  return <h1>Hello, React!</h1>;
}
ReactDOM.render(<App />, document.getElementById("root"));
```
Vanilla JavaScript:
```js
const root = document.getElementById("root");
const h1 = document.createElement("h1");
h1.textContent = "Hello, JavaScript!";
root.appendChild(h1);
```

---

## **10. How Browsers Run React**
1. **JSX** gets compiled by Babel into vanilla JS.
2. React creates a **Virtual DOM**.
3. **Reconciliation** process updates only changed parts.
4. React updates the **actual DOM** efficiently.

---

## **11. How Browsers Run JavaScript**
1. **Parsing** (JS code is read and converted into AST).
2. **Compilation** (JS gets optimized by Just-In-Time compiler).
3. **Execution** (Runs in JS Engine like V8, SpiderMonkey).

---

## **12. Use of Webpack**
Webpack is a **module bundler** that:
- Bundles multiple JS files into one.
- Handles **JSX, SCSS, TypeScript**.
- Optimizes performance via **tree shaking**.

---

## **13. React JSX**
JSX (JavaScript XML) allows writing HTML-like syntax in JavaScript.

**Example:**
```jsx
const element = <h1>Hello, JSX!</h1>;
```
JSX gets compiled to:
```js
const element = React.createElement("h1", null, "Hello, JSX!");
```

---

## **14. Routes in React**
React uses **react-router-dom** for routing.

**Example:**
```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

---

## **15. BrowserRouter vs HashRouter**
| Feature | BrowserRouter | HashRouter |
|---------|--------------|------------|
| URL Format | `/about` | `/#/about` |
| Server Required? | ✅ Yes | ❌ No |
| SEO-Friendly? | ✅ Yes | ❌ No |
| Use Case | Full web apps | Static sites (GitHub Pages) |

**Example:**
```jsx
<HashRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</HashRouter>
```
