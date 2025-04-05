### **JavaScript Concepts**

#### **1. Variable Hoisting**
- Hoisting refers to how JavaScript moves declarations to the top of their scope, but **only the declarations** (not the assignments). 
- Variables declared using `var` are hoisted and initialized to `undefined`. `let` and `const` are hoisted but remain in the **Temporal Dead Zone** until initialized.
  
```js
console.log(a); // undefined
var a = 5; // a is hoisted as undefined

console.log(b); // ReferenceError
let b = 10; // b is in TDZ
```

---

#### **2. Function Hoisting**
- Function declarations are hoisted completely, meaning you can call them before their declaration in code.
- Function expressions (like those using `var`, `let`, or `const`) are hoisted as variables, and they are `undefined` until assigned.
  
```js
hoisted(); // Works as function is hoisted
function hoisted() { console.log("Function hoisted"); }

notHoisted(); // TypeError: notHoisted is not a function
var notHoisted = function () { console.log("Expression not hoisted"); };
```

---

#### **3. Key ES6 Features**
- **`let` and `const`**: Block scoping, unlike `var` which is function-scoped.
- **Arrow functions**: Shorter function syntax that lexically binds `this`.
- **Template literals**: For easier string interpolation.
- **Default parameters**: Allows setting default values for function parameters.
- **Destructuring**: Extract values from arrays or objects directly into variables.
- **Spread/Rest operators**: `...` used to expand or collect values.
  
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

---

#### **4. Spread & Rest Operator**
- **Spread**: Expands elements, typically in arrays or objects.
- **Rest**: Gathers remaining parameters into an array.

```js
// Spread
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]

// Rest
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0); 
}
console.log(sum(1, 2, 3)); // 6
```

---

#### **5. Normal vs Arrow Functions**
| Aspect | Normal Function | Arrow Function |
|--------|-----------------|----------------|
| `this` binding | Dynamic (depends on how the function is called) | Lexical (inherited from parent scope) |
| `arguments` object | Available | Not available |
| Can be used as constructors | Yes | No |

---

#### **6. Shallow vs Deep Copy**
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


#### **7. Difference between `call()`, `apply()`, and `bind()`**

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
