| [Functions](#functions) | [Closures](#closures) | [Currying ](#currying-in-javascript) 
|[Request/Response Types](#requestresponse-types) 
| [Custom Error](#custom-error) 
| [Inheritance](#Inheritance)
| [Call, Apply, Bind](#call-and-apply-and-bind-methods)
| [Debounce and Throttle](#debounce-and-throttle-functions)    

**TypeScript**
| [TS Improves JS](#how-typescript-improves-javascript) | [Interface Vs Type](#interface-vs-type) | [Generics](#generics) | [Union Types](#union-types) | [Type Inference](#type-inference) | [Mapped Types](#mapped-types) |   [Decorators](#decorators) | [Duck Typing](#duck-typing) | [Module System & Compiler Options](#module-system--compiler-options) | 

**JavaScript Fundamentals**
| [let and var and const](#let-and-var-and-const) | [Global JavaScript scope](#global-javascript-scope) | [use strict Directive](#use-strict-directive) [Hoisting](#hoisting) | [Lexical Scoping](#lexical-scoping) | [Scope](#scope) | [Global and Function and Block Scope](#global-and-function-and-block-scope) | [Data Types](#data-types) | [Symbol](#symbol)  [null and undefined and undeclared](#null-and-undefined-and-undeclared) | [Type Checking](#type-checking) | [== vs ===](#loose-equality-vs-strict-equality) | [Mutable vs Immutable Objects](#mutable-vs-immutable-objects) |  [Usage of `super()`](#usage-of-super-in-classes) | [Understanding `__proto__`](#understanding-__proto__-and-prototypes) | [Labeled Statements](#labeled-statements-usage) | [this Keyword Behavior](#this-keyword-behavior) | [ES6 Features](#key-es6-features)  [Optional Chaining (`?.`)](#optional-chaining-operator) | [Nullish Coalescing (`??`)](#nullish-coalescing-operator) | [Object Destructuring with Defaults](#object-destructuring-with-defaults) |

**Functions & Scope**
| [Function Declaration vs Expression vs Constructor](#function-declaration-vs-expression-vs-constructor)  |  [Default Parameters](#default-parameters) |  [JavaScript Modules (`import/export`)](#javascript-modules-importexport) |  [WeakMap and WeakSet](#weakmap-and-weakset-usage) | [Temporal Dead Zone](#temporal-dead-zone-in-let-and-const) | [Map and Plain Objects](#difference-between-map-and-plain-objects) 

**Asynchronous JavaScript** 
| [Synchronous vs Asynchronous](#synchronous-vs-asynchronous-functions) | [Promises](#promises) | [Async/Await](#asyncawait) | [Handling Async Errors](#handling-async-errors) | [Event Propagation](#event-propagation) | [Extending Built-in Objects](#extending-built-in-objects) | [Microtask Queue](#microtask-queue) | [setTimeout(), setImmediate(), process.nextTick()](#settimeout-and-setimmediate-and-processnexttick) | [Shallow vs Deep Copy](#shallow-vs-deep-copy) | [ Memory Leaks](#common-causes-of-memory-leaks) | [Garbage Collection](#javascript-garbage-collection) | [Type Coercion](#type-coercion-in-operations) | [Map Key References with Objects](#map-key-references-with-objects) | 

**Objects & Classes**
| • [Constructor Function](#constructor-function)    • [new Keyword](#new-keyword)        • [Static Class Members](#static-class-members)            • [Getters and Setters](#getters-and-setters)    • [Object.freeze / seal / preventExtensions](#objectfreeze-and-seal-and-preventextensions)       • [in Operator vs hasOwnProperty()](#in-operator-vs-hasownproperty)    • [CommonJS vs ES Modules](#commonjs-vs-es-modules) |


**Design Patterns & Architecture**
 | • [Design Patterns](#introduction-to-design-patterns)    • [Object.assign() vs Spread Operator](#objectassign-vs-spread-operator)    • [Object.create() and Prototype Chains](#object-create-and-prototype-chains)    • [Dependency Injection](#dependency-injection)    • [Event Loop & Call Stack](#event-loop--call-stack)         • [Memoization Techniques](#memoization-techniques)    • [Function Composition Patterns](#function-composition-patterns)       

**Execution & JS Engine**
 | • [Call Stack](#call-stack-and-execution-context)    • [Macro vs Micro-tasks](#macro-tasks-vs-micro-tasks)    • [setTimeout(0)](#settimeout0-and-task-queuing)    • [Web APIs](#web-apis-and-asynchronous-handling)    • [Unexpected Outputs](#understanding-unexpected-outputs) |

**Modules & Tooling**
 | • [`<script>`, async, defer](#script-and-async-and-defer)    • [Tree Shaking](#tree-shaking-in-modern-bundlers)    • [Transpiling](#transpiling-javascript-code)    • [Babel](#role-of-babel-in-modern-development)    • [Webpack & Vite](#webpack-and-vite-bundling-process) |

**Browser APIs**
 | • [Cookies, sessionStorage, localStorage](#cookies-and-sessionStorage-and-localStorage)    • [Window vs Document](#window-vs-document)    • [WebSocket](#websocket-api)    • [Web Workers](#web-workers)    • [window.history](#using-window-history-api) |

**DOM & Events**
 | • [Event Listeners](#event-listeners)    • [Bubbling vs Capturing](#event-bubbling)    • [preventDefault vs stopPropagation](#preventdefault-vs-stoppropagation)  • [Event Delegation and Bubbling](#event-delegation-and-bubbling)  • [innerHTML vs textContent](#innerhtml-vs-textcontent)  • [CSS Manipulation](#css-manipulation)|

**Testing**
 | • [Testing Types](#types-of-testing-in-software-development)    • [Unit vs Integration vs E2E](#unit-testing-vs-integration-testing-vs-e2e)    • [Writing Unit Tests](#writing-unit-tests)    • [Mocks and Stubs](#mocks-and-stubs-in-testing)    • [Testing Frameworks](#popular-javascript-testing-frameworks)    • [TDD](#test-driven-development)    • [Testing Async Code](#testing-asynchronous-code-in-javascript) |

**Security**
 | • [XSS](#cross-site-scripting-xss-and-prevention)    • [SQL Injection](#preventing-sql-injection-vulnerabilities)    • [Sensitive Data Handling](#handling-sensitive-data)    • [CSP](#content-security-policy-csp)    • [Security Headers](#common-security-headers-and-their-purposes)    • [Clickjacking](#preventing-clickjacking-attacks)    • [Input Validation](#input-validation-and-its-importance) |

**Performance Optimization**
 | • [Bottlenecks](#common-performance-bottlenecks-in-javascript-applications)    • [Lazy Loading](#lazy-loading)    • [Caching](#leveraging-caching-strategies-for-performance-optimization)    • [Performance Tools](#tools-for-measuring-and-analyzing-javascript-performance)    • [Optimizing Network Requests](#optimizing-network-requests-for-better-performance)    • [Polyfills](#polyfills-and-backward-compatibility)    

---



## Key ES6 Features

| 🔧 **Feature**           | ✅ **Example Code**                                                                                  | 📝 **Description**                                         |
|-------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| **`let` & `const`**     | `let count = 0;` <br> `const name = "React";`                                                        | `let` = reassignable, `const` = read-only                 |
| [Arrow Functions](#arrow-functions)    | `const add = (a, b) => a + b;`                                                                        | Concise function syntax with `this` binding               |
| **Template Literals**   | `` `Hello, ${name}!` ``                                                                               | Multi-line strings & expressions inside `` `${}` ``        |
| **Default Parameters**  | `function greet(name = "Guest") { return "Hi " + name; }`                                             | Provides fallback values for missing args                |
| [Destructuring](#destructuring)      | `const { title, year } = movie;` <br> `const [first, second] = items;`                                | Unpacks values from objects/arrays                       |
| [Spread and Rest operator](#spread-operator)  | `const newArr = [...arr1, ...arr2];` <br> `function logAll(...args) {}`                               | Spread: expands, Rest: collects values                   |
| **Promises / async/await** | `const fetchData = async () => { const res = await fetch(url); };`                                 | Handle async operations cleanly                          |
| **Modules (import/export)** | `import React from 'react';` <br> `export const add = (a, b) => a + b;`                            | Use reusable code across files                           |
| **Optional Chaining (`?.`)** | `const username = user?.profile?.name;`                                                          | Avoid errors when accessing nested properties             |

---

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





## Event Propagation

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





## Inheritance in JavaScript

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












## **JavaScript Modules (`import/export`)**

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





### **JavaScript Fundamentals**

#### **let and var and const**

---


| **Keyword** | **Scope**              | **Reassignment Allowed** | **Hoisted**                  | **Common Use Case**                                  | **Example Behavior**                                 |
|-------------|------------------------|---------------------------|------------------------------|-------------------------------------------------------|------------------------------------------------------|
| `var`       | Function/global scope  | ✅ Yes                    | ✅ Yes (initialized as `undefined`) | Legacy code, but prone to scope-related bugs          | `console.log(y)` outside block prints **20**         |
| `let`       | Block-scoped           | ✅ Yes                    | ⚠️ Yes (but not initialized)   | Mutable variables within a specific block             | `console.log(x)` outside block gives **ReferenceError** |
| `const`     | Block-scoped           | ❌ No                     | ⚠️ Yes (but not initialized)   | Constants — values that shouldn’t change              | `z = 40` gives **TypeError**                         |




**Example:**
```javascript
if (true) {
    var y = 20;
}
console.log(y); // 20
```
Here, `y` is accessible outside the block because `var` is function-scoped.

**Example:**
```javascript
if (true) {
    let x = 10;
    console.log(x); // 10
}
console.log(x); // ReferenceError: x is not defined
```
In this example, `x` is scoped to the `if` block and cannot be accessed outside it.

**Example:**
```javascript
const z = 30;
z = 40; // TypeError: Assignment to constant variable.
```
You cannot reassign a value to a constant variable once it's initialized.

---

#### **Global JavaScript Scope**
- The global scope refers to the top level of your JavaScript code where variables and functions are accessible throughout the entire program. 
- If a variable is declared in the global scope, it can be accessed from any part of the code. - - However, global variables can lead to conflicts and bugs, especially in large applications.

**Example:**
```javascript
var globalVar = "I'm global";

function display() {
    console.log(globalVar); // Accesses globalVar
}
display(); // Outputs: I'm global
```

---

#### **use strict Directive**
The `'use strict'` directive is a feature in JavaScript that enables strict mode. It helps catch common coding mistakes and prevents the use of problematic features like implicit globals. When strict mode is applied, certain errors that are silently ignored in normal JavaScript will now throw errors.

**Example:**
```javascript
'use strict';
x = 5; // ReferenceError: x is not defined
```
Without `'use strict'`, the variable `x` would be implicitly created as a global variable. With strict mode, JavaScript throws an error because `x` is not explicitly declared.

---

#### **Hoisting**

- **Hoisting** is a JavaScript mechanism where:
  - Variable and function **declarations** are moved to the **top of their containing scope** during the compile phase.
- Key points to remember:
  - **Function declarations** are hoisted **with their definitions**, so you can call them before they appear in the code.
  - **`var` declarations** are hoisted, **but their initial values are not**.
    - This means variables declared with `var` are initialized as `undefined` at the top.
  - Variables declared with **`let`** and **`const`** are **not initialized during hoisting**.
    - They exist in a **Temporal Dead Zone (TDZ)** until their declaration is evaluated. Accessing them before declaration results in a **ReferenceError**.


**Example:**
```javascript
console.log(a); // undefined
var a = 10;

foo(); // "Hello"
function foo() {
    console.log("Hello");
}
```
In this example, `a` is hoisted but only the declaration (`var a;`) is hoisted, not the initialization. However, function declarations are hoisted fully, so `foo()` can be called before it’s defined.

---

#### **Lexical Scoping**
- **Lexical scoping** means that the scope of a variable is determined by its **position in the source code** (i.e., where it is written).
- Inner functions have access to variables **defined in their outer (parent) scopes**.
- This behavior is fixed **at the time of writing code**, not during execution.
- JavaScript uses **lexical scoping** to resolve variable references.

---

### ✅ **Example:**
```javascript
function outer() {
  let name = "Lexical";

  function inner() {
    console.log(name); // Has access to 'name' from outer scope
  }

  inner();
}
outer();
```

In the example above, `inner()` can access `name` because it's **lexically inside** `outer()`.

---

#### **Scope**
Scope refers to the accessibility of variables in different parts of the code. There are several types of scopes in JavaScript:
- **Global Scope**: Variables declared outside of any function or block.
- **Function Scope**: Variables declared inside a function.
- **Block Scope**: Variables declared within a block (for example, inside `if` statements or loops), using `let` or `const`.

---

#### **Global and Function and Block Scope**
- **Global Scope**: Variables declared outside any function or block are accessible from anywhere in the code.
- **Function Scope**: Variables declared inside a function are only accessible within that function.
- **Block Scope**: Variables declared inside a block (for example, inside an `if` or loop) are only accessible within that block when declared with `let` or `const`.

**Example:**
```javascript
// Global Scope
var globalVar = "I am global";

function myFunction() {
    // Function Scope
    var functionVar = "I am function-scoped";
    
    if (true) {
        // Block Scope
        let blockVar = "I am block-scoped";
        console.log(blockVar); // I am block-scoped
    }
    console.log(functionVar); // I am function-scoped
    // console.log(blockVar); // ReferenceError: blockVar is not defined
}
myFunction();
console.log(globalVar); // I am global
```

---

#### **Data Types**
JavaScript has several data types that can be classified as primitive types and object types.
- **Primitive Types**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.
- **Object Types**: `object`, `array`, `function`, and others.

---

#### **Symbol**
A `Symbol` is a unique and immutable primitive value. Symbols are often used as keys for object properties to avoid property name collisions.

**Example:**
```javascript
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false (each Symbol is unique)
```

---

#### **null and undefined and undeclared**
- **`null`**: Represents the intentional absence of any value. It’s an object and can be explicitly assigned to variables.
- **`undefined`**: Represents a variable that has been declared but hasn’t been assigned a value yet.
- **Undeclared**: Refers to variables that have been used without declaration. This leads to global variables being created in non-strict mode.

**Example:**
```javascript
let a;
console.log(a); // undefined
a = null;
console.log(a); // null
```

---

#### **Type Checking**
To check the data type of a variable, you can use the `typeof` operator for primitives and `instanceof` for objects.

**Example:**
```javascript
let num = 5;
console.log(typeof num); // "number"

let obj = {};
console.log(typeof obj); // "object"
console.log(obj instanceof Object); // true
```

---

#### **Loose Equality Vs Strict Equality**
- **`==` (Loose Equality)**: Compares values for equality but performs type coercion. This can lead to unexpected results.
- **`===` (Strict Equality)**: Compares both value and type, so no type conversion is done.

**Example:**
```javascript
console.log(5 == '5');  // true (due to type coercion)
console.log(5 === '5'); // false (different types)
```

---

#### **Mutable vs Immutable Objects**
- **Mutable Objects**: These are objects that can be modified after they are created. Arrays and objects are mutable by default in JavaScript.
  
**Example of Mutable Object:**
```javascript
let arr = [1, 2, 3];
arr.push(4); // Array is mutated
console.log(arr); // [1, 2, 3, 4]
```

- **Immutable Objects**: These objects cannot be modified after creation. You can create immutability by using methods like `Object.freeze()`.

**Example of Immutable Object:**
```javascript
const person = Object.freeze({ name: 'John' });
person.name = 'Jane'; // Error: Cannot assign to read only property 'name'
```


### **TypeScript Interview Answers**

---

#### **How TypeScript Improves JavaScript**


 TypeScript is a superset of JavaScript that introduces static typing to help catch errors during development, before the code runs. While JavaScript is dynamically typed and relies on runtime checks, TypeScript allows you to declare variable types, which provides several benefits:
- **Early Error Detection**: With TypeScript, errors related to type mismatches can be caught at compile time.
- **Better Tooling**: IDEs and editors offer enhanced autocompletion, refactoring, and error-checking features.
- **Improved Code Readability**: Explicit types make the code more understandable, especially in large projects.
  
**Example**:  
```typescript
function add(a: number, b: number): number {
  return a + b;
}
add("2", 3); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
```
TypeScript ensures that only numbers are passed into the `add` function, preventing bugs early in the development cycle.

---

#### **Interface vs. Type**


 Both `interface` and `type` are used for defining shapes of objects, but they have subtle differences:
- **Interface**: Primarily used to define object shapes and can be extended or implemented.
- **Type**: More flexible than `interface` and can define primitive types, union types, intersection types, and more.

**Key Differences**:
- **Extensibility**: Interfaces can be extended or merged, whereas types cannot be merged once defined.
- **Use Cases**: While `interface` is best suited for defining object shapes, `type` is better for complex types, like unions or tuples.

**Example**:  
```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = { name: "Max", breed: "Golden Retriever" };
```
Alternatively, with `type`:
```typescript
type Animal = { name: string };
type Dog = Animal & { breed: string };

const dog: Dog = { name: "Max", breed: "Golden Retriever" };
```

---

#### **Generics**



- **Generics** allow you to create **reusable components** or functions that work with **multiple data types** without losing type safety.
- Think of them as **type variables** that can be passed to functions, interfaces, or classes.

---

##### ✅ **Why Use Generics?**

- To **write flexible and reusable code**.
- To ensure **type safety** without having to duplicate code for different types.
- They help avoid using `any`, which removes type safety.

---

##### 🧪 **Generic Function Example:**

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(100);
```

- `T` is a **placeholder type**.
- TypeScript infers the type from the passed argument, or you can explicitly declare it.

---

##### 📦 **Generic Interface Example:**

```typescript
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "Hello" };
const numberBox: Box<number> = { value: 123 };
```

---

##### 🧱 **Generic Class Example:**

```typescript
class DataHolder<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  getData(): T {
    return this.data;
  }
}

const holder = new DataHolder<number>(42);
console.log(holder.getData()); // 42
```

---

#### **Union Types**


 
In TypeScript, **Union Types** allow a variable or parameter to hold **multiple types**. This gives you more flexibility in the types a variable can accept while still maintaining type safety.

---

##### ✅ **Why Use Union Types?**

- To specify that a variable can accept multiple types, which is useful when you expect different types of values but still want to enforce certain constraints.
- Helps with **flexibility** while avoiding the use of `any`.

---

##### 📦 **Union Types Syntax:**

- The **pipe symbol (`|`)** is used to define Union Types.

```typescript
let id: string | number;

id = "123"; // Valid
id = 123;   // Valid
id = true;  // Error: Type 'boolean' is not assignable to type 'string | number'.
```

---

##### 🧪 **Union Types with Functions:**

```typescript
function printId(id: string | number): void {
  console.log(`ID: ${id}`);
}

printId("abc");  // Valid
printId(123);    // Valid
printId(true);   // Error: Type 'boolean' is not assignable to type 'string | number'.
```

---

##### 📦 **Union Types with Arrays:**

You can use Union Types with arrays to specify that the elements of the array can be of different types.

```typescript
let items: (string | number)[] = ["apple", 10, "banana", 20];
items.push(30); // Valid
items.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
```

---

##### 🧱 **Type Narrowing with Union Types:**

TypeScript allows you to narrow down the type of a variable using **type guards** (like `typeof` or `instanceof`).

```typescript
function printLength(value: string | string[]): void {
  if (typeof value === "string") {
    console.log(value.length);  // `value` is now narrowed to `string`
  } else {
    console.log(value.length);  // `value` is now narrowed to `string[]`
  }
}

printLength("Hello");   // Valid
printLength(["Hello"]); // Valid
```

---

##### 💡 **Common Use Cases for Union Types:**

- Accepting **multiple possible types** for function parameters (e.g., strings or numbers).
- **Working with data** that might be in different formats or types (e.g., API responses).
- Handling **optional values** (e.g., `string | undefined`).

---


---

#### **Type Inference**


**Type Inference** is a powerful feature in TypeScript that allows the compiler to automatically deduce the type of a variable based on its value or context. This reduces the need for explicit type annotations in many cases, making your code cleaner while still benefiting from TypeScript's type safety.

---

##### ✅ **Why Use Type Inference?**

- **No need for explicit types** in many cases, making code easier to read and write.
- Helps keep the code **maintainable** by ensuring variables always have the correct type without the need for repetitive type annotations.
- **Error prevention** by ensuring the correct types are being used across the code.

---

##### 📦 **How TypeScript Infers Types:**

TypeScript uses the value assigned to a variable to infer its type. 

###### **Examples of Type Inference:**

1. **Basic Inference:**

```typescript
let num = 10;  // TypeScript infers `num` as `number`
num = "hello"; // Error: Type 'string' is not assignable to type 'number'.
```

Here, TypeScript infers that `num` is of type `number` because it is initialized with a numeric value.

---

2. **Inference in Functions:**

```typescript
function add(a: number, b: number) {
  return a + b;  // TypeScript infers that the return type is `number`
}

let result = add(5, 10);  // TypeScript infers `result` as `number`
result = "string";        // Error: Type 'string' is not assignable to type 'number'.
```

In the `add` function, TypeScript infers the return type to be `number` because the function performs arithmetic addition.

---

3. **Object and Array Inference:**

```typescript
let obj = { name: "John", age: 30 };  // TypeScript infers `obj` as { name: string; age: number; }

let arr = [1, 2, 3];  // TypeScript infers `arr` as number[]
```

For objects and arrays, TypeScript will infer the types of each property or element based on the initial values.

---

4. **Inference with `const` and `let`:**

```typescript
const a = "Hello";   // TypeScript infers `a` as `const` with type `string`
let b = 42;          // TypeScript infers `b` as `number`
```

- **`const`** allows the type to be inferred as a literal value (e.g., `"Hello"`).
- **`let`** infers general types like `string` or `number`.

---

##### 🔍 **Narrowing Inference:**

Sometimes, TypeScript can narrow the inferred type based on conditions.

```typescript
function greet(person: string | undefined) {
  if (person) {
    // `person` is inferred as `string` here because we've checked it's not `undefined`
    console.log(`Hello, ${person.toUpperCase()}`);
  }
}

greet("Alice"); // Valid
greet(undefined); // TypeError: Cannot read property 'toUpperCase' of undefined
```

---

##### 🚫 **Limitations of Type Inference:**

- **Complex Structures:** For more complex objects or functions, TypeScript might not infer the desired type accurately. Explicit type annotations might still be necessary.
  
- **Any Type:** If TypeScript cannot infer the type, it defaults to the `any` type, which disables type checking, essentially opting out of type safety.

---

##### 💡 **When to Use Type Inference vs Type Annotations:**

- **Use Type Inference** when the variable's type can be clearly inferred from the initialization or context (e.g., simple types like `number`, `string`, arrays).
- **Use Type Annotations** when you want to be explicit about a type (e.g., for complex objects, function return types, or when the type isn't easily inferred).

---


---

#### **Mapped Types**


 Mapped types allow you to create new types by transforming properties of an existing type. For example, you can make all properties of a type `readonly`, `optional`, or change their types.

**Example**:  
```typescript
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

interface User {
  name: string;
  age: number;
}

const user: ReadOnly<User> = { name: "Alice", age: 30 };
user.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property
```
Mapped types are useful for creating reusable and flexible transformations of types.

---

#### **Custom Error**


 You can define a custom error in TypeScript by extending the built-in `Error` class. This allows you to add additional information or customize error handling in your applications.

**Example**:  
```typescript
class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomError";
  }
}

function throwError() {
  throw new CustomError("An unexpected error occurred!");
}

try {
  throwError();
} catch (e) {
  if (e instanceof CustomError) {
    console.error(e.message); // Custom error message
  }
}
```
Custom errors make error handling more specific and manageable in larger applications.

---

#### **Request/Response Types**


 TypeScript is very useful for defining the types of data sent and received in an API. By defining request and response types, we can ensure that the data structure adheres to expectations, preventing issues such as incorrect data being passed to or from the API.

**Example**:  
```typescript
interface UserRequest {
  name: string;
  email: string;
}

interface UserResponse {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

function createUser(request: UserRequest): UserResponse {
  return {
    id: 1,
    name: request.name,
    email: request.email,
    createdAt: new Date().toISOString(),
  };
}
```
By using these types, TypeScript provides type safety and improves the maintainability of API integrations.

---

#### **Decorators**


 Decorators in TypeScript are special functions that can be applied to classes, methods, properties, or parameters to add behavior or metadata. They are commonly used in frameworks like Angular to handle things like dependency injection.

**Example**:  
```typescript
function log(target: any, key: string) {
  let value = target[key];
  
  const getter = () => {
    console.log(`Getting ${key}: ${value}`);
    return value;
  };
  
  const setter = (newValue: any) => {
    console.log(`Setting ${key} to ${newValue}`);
    value = newValue;
  };
  
  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
  });
}

class Person {
  @log
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("Alice");
person.name = "Bob"; // Logs: Setting name to Bob
console.log(person.name); // Logs: Getting name: Bob
```
Decorators help add reusable logic without modifying the core structure of the class or function.

---

#### **Duck Typing**


 Duck typing is a concept where an object is considered to be of a certain type if it has the properties or methods expected of that type, regardless of its actual class or interface. In TypeScript, this is common when we use interfaces to define the shape of objects.

**Example**:  
```typescript
interface Duck {
  quack(): void;
}

class Mallard {
  quack() {
    console.log("Quack!");
  }
}

class Car {
  honk() {
    console.log("Honk!");
  }
}

function makeQuack(duck: Duck) {
  duck.quack();
}

let mallard = new Mallard();
makeQuack(mallard); // Works fine

let car = new Car();
// makeQuack(car); // Error: Property 'quack' is missing in type 'Car'
```
In TypeScript, objects are accepted based on their structure (duck typing), rather than their exact type.

---

#### **Module System & Compiler Options**


 TypeScript uses the ES6 module system, which relies on `import` and `export` statements to modularize code. You can define modules and specify how they should be compiled using the `tsconfig.json` file.

**Key Compiler Options**:
- **`module`**: Specifies the module system (`commonjs`, `es6`, `amd`).
- **`target`**: Specifies the JavaScript version the code should be compiled to (e.g., `es5`, `es6`).
- **`strict`**: Enables strict type-checking options, ensuring more accurate type validation.
  
**Example**:  
```typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

// main.ts
import { add } from './math';
console.log(add(1, 2)); // Outputs: 3
```
In `tsconfig.json`:
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "strict": true
  }
}
```

---

---

### **Functions & Scope Interview Answers**

---

#### **Function Declaration vs Expression vs Constructor**


 
- **Function Declaration**: This defines a function in the standard way and is hoisted, meaning it can be called before it is defined in the code.
  ```javascript
  function add(a, b) {
    return a + b;
  }
  add(1, 2); // Works fine
  ```
- **Function Expression**: A function is assigned to a variable or constant. This type is not hoisted, so it can only be called after it is defined.
  ```javascript
  const add = function(a, b) {
    return a + b;
  };
  add(1, 2); // Works fine
  ```
- **Constructor**: A constructor function is used to create and initialize objects. It's typically invoked using `new`.
  ```javascript
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const person = new Person('Alice', 30); // Works fine
  ```

The primary difference between declaration and expression lies in hoisting, while constructors are used to create instances of objects.

---

#### **Arrow Functions**


 Arrow functions, introduced in ES6, offer a more concise syntax for writing functions and have the key difference of **lexical scoping** for `this`. Unlike regular functions, they do not have their own `this`, `arguments`, `super`, or `new.target`.

**Example**:
```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Outputs: 5
```
**Key Difference**:
- Regular function expressions create their own `this`, while arrow functions inherit `this` from their enclosing context.
  
**Example**:
```javascript
const obj = {
  name: "Alice",
  greet: function() {
    setTimeout(() => {
      console.log(this.name); // 'this' refers to obj because arrow function inherits it
    }, 1000);
  }
};

obj.greet(); // Outputs: Alice
```

---

#### **Anonymous Functions - Use Cases**


 Anonymous functions are functions without a name. They are often used as arguments to other functions, or for short tasks where a function doesn’t need to be reused elsewhere.

**Example**:
```javascript
setTimeout(function() {
  console.log("This is an anonymous function!");
}, 1000);
```

**Use cases**:
- As **callback functions**.
- For one-time use without needing a named function.
- In event handlers or promises.

---

#### **Default Parameters**


 Default parameters allow you to specify a default value for a function parameter if no value is provided during the function call.

**Example**:
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Outputs: Hello, Guest!
greet("Alice"); // Outputs: Hello, Alice!
```

This is useful for handling cases where arguments may be missing and helps avoid errors in your code.

---

#### **Higher-Order Functions**


 A **higher-order function** is a function that either:
Takes one or more functions as arguments.
Returns a function as its result.

They are often used for tasks like transformations or creating function pipelines.

**Example**:
```javascript
function applyOperation(a, b, operation) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

console.log(applyOperation(5, 3, add)); // Outputs: 8
```

In this case, `applyOperation` is a higher-order function because it accepts `add`, a function, as an argument.

---

#### **Callback Functions**


 A **callback function** is a function passed into another function as an argument that is executed at a later time. They are often used for **asynchronous operations** like handling API responses, timers, or events.

**Example**:
```javascript
function fetchData(url, callback) {
  // Simulating data fetch
  setTimeout(() => {
    const data = { user: 'Alice' };
    callback(data);
  }, 1000);
}

fetchData('https://api.example.com', function(data) {
  console.log(data); // Outputs: { user: 'Alice' }
});
```

Callbacks allow us to handle asynchronous operations in a non-blocking way.

---

---

### 🔒 **Closures**

 - [Closures Drawbacks](#Common-Pitfalls-of-Closures)

- A **closure** is a function that remembers variables from its **lexical scope**, even after that scope has exited.
- Useful for:
  - **Data privacy**
  - **Stateful functions**
  - **Encapsulation**

#### ✅ Example: Creating a Counter

```javascript
function createCounter() {
  let count = 0;
  return {
    increment() { count++; console.log(count); },
    decrement() { count--; console.log(count); },
  };
}
```
- `count` remains private and accessible only through `increment`/`decrement`.

---

### 🧠 **Closures & Memory Management**

- **Closures retain variables** from the outer function, keeping them in memory.
- Can **prevent garbage collection**, leading to **memory leaks**.

#### 🔁 Example:

```javascript
function createCounter() {
  let count = 0;
  return () => console.log(++count);
}
```
- `count` stays in memory as long as the returned function exists.

#### ⚠️ Potential Memory Leak

```javascript
function createLargeObject() {
  const largeArray = new Array(1_000_000).fill(0);
  return () => console.log(largeArray.length);
}
```
- `largeArray` remains in memory due to closure.

#### ✅ Best Practices

- **Avoid long-lived closures** with large objects.
- **Manually dereference** variables if needed (e.g., `largeArray = null`).
- Be cautious when binding closures to UI elements or persistent states.

---

### ⚠️ **Common Pitfalls of Closures**

- 🔄 **Memory Leaks**: Retained variables can't be garbage-collected.
- 🧩 **Unexpected Retention**: Hidden data may persist longer than needed.
- ⏱ **Async Confusion**: Closures in loops can reference incorrect values.

#### ❌ Problematic Async Example

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // Outputs: 3, 3, 3
}
```

#### ✅ Fixed with `let`

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // Outputs: 0, 1, 2
}
```

---





#### **Immediately Invoked Function Expressions**


 An **IIFE** is a function expression that is defined and immediately invoked (called) right after its declaration. It is used to create a new scope, often to avoid polluting the global namespace.

**Example**:
```javascript
(function() {
  const message = "Hello, world!";
  console.log(message);
})(); // Outputs: Hello, world!
```

IIFEs are often used for **module patterns** or **self-contained logic** in JavaScript.

---

### **Asynchronous JavaScript Interview Answers**

---

#### **Synchronous vs Asynchronous Functions**


 
- **Synchronous functions** are executed one after another, blocking further execution until the current function completes. This can cause delays if a task takes time (e.g., reading a file or making a network request).
  
  **Example**:
  ```javascript
  console.log('Start');
  console.log('End'); // This will print after 'Start' immediately
  ```

- **Asynchronous functions**, on the other hand, allow other tasks to run while waiting for a result (like a network response or file read). They do not block the execution thread and are usually handled via callbacks, promises, or async/await.

  **Example**:
  ```javascript
  console.log('Start');
  setTimeout(() => {
    console.log('Middle'); // This runs after 2 seconds
  }, 2000);
  console.log('End');
  // Outputs: Start, End, Middle
  ```

---

#### **Promises**


 A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation. Promises allow us to handle asynchronous operations in a more manageable way than using callbacks (callback hell).

A promise has three states:
**Pending**: The promise is neither fulfilled nor rejected.
**Fulfilled**: The operation was successful.
**Rejected**: The operation failed.

**Example**:
```javascript
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

promise
  .then(result => console.log(result)) // "Operation successful"
  .catch(error => console.log(error)); // If rejected
```

---

#### **Promise States**


 A Promise can exist in one of the following states:

**Pending**: The initial state, where the Promise is waiting to be resolved or rejected.
**Fulfilled**: The Promise has completed successfully and has returned a value.
**Rejected**: The Promise has failed and returned a reason (error).

**Example**:
```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});

myPromise
  .then(result => console.log(result))   // Will not execute
  .catch(error => console.log(error));   // Outputs: Failure
```

---

#### **Pros and Cons of Promises**



- **Pros**:
  - **Avoid Callback Hell**: Promises allow chaining with `.then()` and `.catch()`, which makes the code more readable than nested callbacks.
  - **Improved error handling**: With promises, errors can be caught at any point in the chain using `.catch()`.
  - **Better flow control**: Promises make it easier to manage asynchronous operations and follow a linear flow.

- **Cons**:
  - **Chaining can become complex**: Deep chaining can lead to code that's difficult to maintain.
  - **Not always intuitive**: Debugging and understanding promises can be tricky, especially when multiple promises are involved.
  - **Older browser support**: Older browsers may not support promises natively without polyfills.

---

#### **Promise.all()**


 `Promise.all()` takes an array of promises and returns a single promise that resolves when all the input promises have resolved or rejects as soon as one of the promises is rejected.

**Example**:
```javascript
let promise1 = Promise.resolve(3);
let promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'foo'));
let promise3 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'bar'));

Promise.all([promise1, promise2, promise3])
  .then(values => console.log(values));  // Outputs: [3, 'foo', 'bar']
```
Use `Promise.all()` when you want to wait for multiple asynchronous operations to complete before proceeding.

---

#### **Promise.all vs Promise.allSettled**


 
- **`Promise.all()`**: Returns a single promise that resolves when all promises in the array resolve. If any of the promises is rejected, the entire promise chain is rejected immediately.
  
  **Example**:
  ```javascript
  let promise1 = Promise.resolve(3);
  let promise2 = Promise.reject("Error");
  let promise3 = Promise.resolve("Done");

  Promise.all([promise1, promise2, promise3])
    .then(values => console.log(values)) // Will not execute because of the rejection
    .catch(error => console.log(error)); // Outputs: Error
  ```

- **`Promise.allSettled()`**: Returns a promise that resolves when all of the promises have settled (either resolved or rejected). The result is an array of objects describing the outcome of each promise.

  **Example**:
  ```javascript
  Promise.allSettled([promise1, promise2, promise3])
    .then(results => console.log(results));
  // Outputs: [{status: "fulfilled", value: 3}, {status: "rejected", reason: "Error"}, {status: "fulfilled", value: "Done"}]
  ```

`Promise.allSettled()` is useful when you need to know the outcome of each promise, regardless of whether it was fulfilled or rejected.

---

#### **Async/Await**


 
- **`async`** is a keyword used to define a function as asynchronous, which means it will always return a promise. Inside an `async` function, you can use `await` to pause the execution of the function until the promise resolves or rejects.
  
- **`await`** pauses the execution of the `async` function until the promise resolves or rejects. It only works inside an `async` function.

**Example**:
```javascript
async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  let data = await response.json();
  console.log(data);
}

fetchData();
```
`async/await` makes asynchronous code look more like synchronous code and makes it easier to read and debug.

---


####  async/await vs Promises

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

#### **Handling Async Errors**


 Errors in asynchronous code can be handled using `try/catch` blocks when using `async/await`, or `.catch()` when using promises.

- **With async/await**:
  ```javascript
  async function fetchData() {
    try {
      let response = await fetch('https://api.example.com/data');
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }
  ```

- **With promises**:
  ```javascript
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .catch(error => console.log("Error fetching data:", error));
  ```

Both approaches allow you to catch and handle errors in a clean and structured way.

---

#### **Microtask Queue**


 The **microtask queue** is a queue where JavaScript places promises and `async/await` operations. It is processed after the current execution context and before any rendering tasks or `setTimeout` calls.

- Microtasks are given higher priority than tasks in the event loop, which ensures that promises are always resolved as soon as possible.

**Example**:
```javascript
Promise.resolve().then(() => console.log('Promise 1'));
Promise.resolve().then(() => console.log('Promise 2'));
console.log('End');

// Outputs: End, Promise 1, Promise 2
```

---

#### **setTimeout and setImmediate and processnextTick**


 These are methods in Node.js that deal with asynchronous scheduling but differ in when they are executed:

- **`setTimeout()`**: Executes the callback after a specified delay, typically used for scheduling a task in the event loop after a given period.
  ```javascript
  setTimeout(() => console.log('Timeout'), 0);
  ```

- **`setImmediate()`**: Executes the callback after the current event loop cycle, in the **check phase** of the event loop.
  ```javascript
  setImmediate(() => console.log('Immediate'));
  ```

- **`process.nextTick()`**: Executes the callback immediately after the current operation completes, before any I/O tasks or timers. This gives it the highest priority.
  ```javascript
  process.nextTick(() => console.log('Next Tick'));
  ```

**Example Execution Order**:
```javascript
setTimeout(() => console.log('Timeout'), 0);  // Last
setImmediate(() => console.log('Immediate')); // Second
process.nextTick(() => console.log('Next Tick')); // First
```

---



---

### **Objects & Classes Interview Answers**

---

#### **Constructor Function**


 
A **constructor function** in JavaScript is a special type of function that is used to create and initialize objects. When a function is called using the `new` keyword, it acts as a constructor. The constructor function allows you to define properties and methods for the newly created object.

**Example**:
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Alice", 25);
console.log(person1.name); // Outputs: Alice
console.log(person1.age);  // Outputs: 25
```

In this example, `Person` is a constructor function that initializes an object with properties `name` and `age`.

---

#### **`new` Keyword**


 
The `new` keyword is used to create an instance of an object that is defined by a constructor function or a class. When used with a constructor function, it performs the following steps:
Creates a new empty object.
Sets the `this` value within the constructor to the new object.
Sets up inheritance so that the new object has access to the constructor's prototype.
Returns the newly created object.

**Example**:
```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.make); // Outputs: Toyota
```

---

#### **Classical vs Prototypal Inheritance**


 
- **Classical Inheritance** (found in languages like Java and C++) involves defining a class, and then objects are created based on that class, inheriting its properties and methods. JavaScript, however, does not have traditional class-based inheritance (until ES6 introduced classes).
  
- **Prototypal Inheritance** in JavaScript allows objects to directly inherit from other objects. Every object has a `prototype` property, which can be used to inherit methods and properties from other objects.

**Example (Prototypal Inheritance)**:
```javascript
const animal = {
  speak: function() {
    console.log("Animal speaks");
  }
};

const dog = Object.create(animal);  // dog inherits from animal
dog.speak();  // Outputs: Animal speaks
```

With **prototypal inheritance**, the `dog` object inherits methods from the `animal` object.

---

#### **Inheritance in ES2015 Classes**


 
In ES2015, JavaScript introduced the `class` syntax, which provides a clearer and more structured way to define inheritance. Classes use the `extends` keyword to inherit from another class, and the `super()` function is used to call the parent class's constructor.

**Example**:
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // Call the parent class constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Rex", "German Shepherd");
dog.speak();  // Outputs: Rex barks
```

In this example, `Dog` inherits from `Animal` using `extends`, and the `super()` function calls the constructor of `Animal`.

---

#### **Static Class Members**


 
Static members are properties and methods that belong to the class itself, rather than to instances of the class. These members are accessed using the class name, not through an instance.

**Example**:
```javascript
class MyClass {
  static greet() {
    console.log("Hello from the class!");
  }
}

MyClass.greet(); // Outputs: Hello from the class!
```

Here, `greet()` is a static method of `MyClass`, and it is called directly on the class, not an instance of it.

---

#### **Extending Built-in Objects**


 Yes, you can extend built-in objects in JavaScript. This is done by adding custom properties or methods to the prototype of the built-in object, or by subclassing it (using `class` syntax in ES6).

**Example (Extending Array)**:
```javascript
class CustomArray extends Array {
  last() {
    return this[this.length - 1];
  }
}

const arr = new CustomArray(1, 2, 3);
console.log(arr.last());  // Outputs: 3
```

In this example, `CustomArray` extends the built-in `Array` class, adding a custom method `last()`.

---

#### **Getters and Setters**


 
Getters and setters are special methods in JavaScript that allow you to access and update the properties of an object in a controlled way. They are used to define custom behavior when getting or setting a property.

- **Getter**: A method that gets the value of a property.
- **Setter**: A method that sets the value of a property.

**Example**:
```javascript
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const person = new Person("Alice");
console.log(person.name);  // Outputs: Alice
person.name = "Bob";
console.log(person.name);  // Outputs: Bob
```

Here, the `name` property is accessed and updated through getter and setter methods.

---

#### **Object.freeze() and seal() and preventExtensions()**


 These methods are used to control the mutability of objects in JavaScript.

**`Object.freeze()`**: Makes an object immutable. You cannot add, remove, or modify any of its properties.
   ```javascript
   const obj = { name: "Alice" };
   Object.freeze(obj);
   obj.name = "Bob";  // This will not work
   console.log(obj.name);  // Outputs: Alice
   ```

**`Object.seal()`**: Prevents adding or removing properties, but existing properties can still be modified (unless they are marked as non-writable).
   ```javascript
   const obj = { name: "Alice" };
   Object.seal(obj);
   obj.name = "Bob";  // This will work
   delete obj.name;   // This will not work
   console.log(obj.name);  // Outputs: Bob
   ```

**`Object.preventExtensions()`**: Prevents new properties from being added to the object but allows existing properties to be modified or deleted.
   ```javascript
   const obj = { name: "Alice" };
   Object.preventExtensions(obj);
   obj.age = 25;  // This will not work
   console.log(obj.age);  // Outputs: undefined
   ```

---



---

### **Design Patterns & Architecture Interview Answers**

---

#### **Introduction to Design Patterns**


 
Design patterns are proven, reusable solutions to common problems in software design. They are not code templates but rather general solutions that can be adapted to specific needs. Design patterns improve code readability, reusability, maintainability, and scalability. They help developers avoid reinventing the wheel by providing standard approaches to solving design issues.

**Example**:
For instance, the **Singleton Pattern** ensures that a class has only one instance, which is useful in situations like managing database connections or configuration settings.

---



| **Design Pattern**   | **Description** |
|----------------------|-----------------|
| **Singleton Pattern** | Ensures that a class has only one instance and provides a global point of access to it. Useful for services like logging or configuration where a single shared instance is needed. |
| **Factory Pattern** | Provides a way to create objects without specifying the exact class. Defines an interface for object creation, but the instantiation is handled by methods or subclasses. Promotes loose coupling. |
| **Module Pattern** | Encapsulates code in a self-contained unit to maintain a clean global namespace. Uses closures to expose public members while keeping other functionality private. |
| **Observer Pattern** | A behavioral pattern where an object (subject) maintains a list of dependents (observers) and notifies them of changes. Useful in UI event handling or real-time systems. |
| [Prototype Pattern](#prototype-pattern) | Creates new objects by cloning an existing object (prototype). Useful when object creation is costly. In JavaScript, implemented using `Object.create()`. |


#### **Singleton Pattern**


 
The **Singleton Pattern** ensures that a class has only one instance and provides a global point of access to that instance. This pattern is particularly useful for scenarios where only one object is needed to coordinate actions (like a logging service or a configuration manager).

**Example**:
```javascript
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  show() {
    console.log("Singleton instance");
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

instance1.show();  // Outputs: Singleton instance
console.log(instance1 === instance2);  // Outputs: true
```

Here, even though we create two instances of `Singleton`, they both point to the same object.

---

#### **Factory Pattern**


 
The **Factory Pattern** provides a way to create objects without specifying the exact class of the object that will be created. It defines an interface for creating objects, but the actual creation is deferred to subclasses or methods. It helps in abstracting the instantiation logic and promotes loose coupling.

**Example**:
```javascript
class Car {
  drive() {
    console.log("Driving a car");
  }
}

class Bike {
  drive() {
    console.log("Riding a bike");
  }
}

class VehicleFactory {
  static createVehicle(type) {
    if (type === "car") {
      return new Car();
    } else if (type === "bike") {
      return new Bike();
    }
  }
}

const myCar = VehicleFactory.createVehicle("car");
myCar.drive();  // Outputs: Driving a car
```

In this example, `VehicleFactory` abstracts the creation logic of different vehicle types.

---

#### **Module Pattern**


 
The **Module Pattern** is used to encapsulate code in a self-contained unit, often to maintain a clean global namespace. It allows you to expose only the methods and properties you want to be publicly accessible, keeping other functionality private. This is typically done using closures.

**Example**:
```javascript
const counterModule = (function() {
  let count = 0;

  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    },
    getCount: function() {
      return count;
    }
  };
})();

counterModule.increment();  // Outputs: 1
counterModule.increment();  // Outputs: 2
console.log(counterModule.getCount());  // Outputs: 2
```

In this example, the `counterModule` encapsulates the `count` variable, exposing only the public methods.

---

#### **Observer Pattern**


 
The **Observer Pattern** is a behavioral design pattern where an object (the **subject**) maintains a list of its dependent objects (the **observers**) and notifies them of any state changes, typically by calling one of their methods. This pattern is useful in scenarios where multiple objects need to be updated when the state of another object changes, like in UI event handling or real-time notifications.

**Example**:
```javascript
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log("Received data:", data);
  }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers("New update available!");
// Outputs:
// Received data: New update available!
// Received data: New update available!
```

Here, when the `Subject` notifies its observers, all registered observers react to the change.

---

#### **Prototype Pattern**


 
The **Prototype Pattern** is a creational design pattern used to create new objects by cloning an existing object (prototype). It is particularly useful when object creation is costly, and you need to produce several identical objects. In JavaScript, this can be implemented using the `Object.create()` method to clone an object.

**Example**:
```javascript
const carPrototype = {
  drive() {
    console.log("Driving a car");
  },
  stop() {
    console.log("Stopping the car");
  }
};

const car1 = Object.create(carPrototype);
car1.drive();  // Outputs: Driving a car

const car2 = Object.create(carPrototype);
car2.stop();  // Outputs: Stopping the car
```

Here, `car1` and `car2` are clones of the `carPrototype`, sharing the same methods.

---

#### **Dependency Injection**


 
**Dependency Injection (DI)** is a design pattern used to implement **inversion of control**, where an object’s dependencies (like services or components) are injected into it rather than the object creating them itself. DI promotes loose coupling between classes, making it easier to manage dependencies, test components, and scale applications.

**Example**:
```javascript
class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car {
  constructor(engine) {
    this.engine = engine;
  }

  drive() {
    this.engine.start();
    console.log("Car is driving");
  }
}

const engine = new Engine();
const car = new Car(engine);  // Injecting the engine dependency
car.drive();
// Outputs:
// Engine started
// Car is driving
```

In this example, `Car` depends on `Engine`. Instead of `Car` creating its own engine, it receives an `Engine` instance via its constructor, making it easier to replace the `Engine` with a mock or a different implementation for testing.

---


---

### **Modules, Storage & Browser APIs Interview Answers**

---

#### **script and async and defer**



The `<script>` tag is used to include JavaScript files in an HTML document. By default, when a `<script>` is encountered, the HTML parsing is paused until the script is loaded and executed, which can lead to delays in rendering. The `async` and `defer` attributes help optimize script loading behavior.

- **`async`**: The script is fetched asynchronously (in parallel with the HTML parsing) and executed as soon as it is available, without waiting for the HTML parsing to finish. This can cause the script to execute before the HTML parsing is complete.
  
  **Example**:
  ```html
  <script src="script.js" async></script>
  ```

- **`defer`**: The script is fetched asynchronously, but it is executed only after the HTML document has been completely parsed. It ensures that scripts are executed in the order they appear in the document.

  **Example**:
  ```html
  <script src="script.js" defer></script>
  ```

**Key Difference**:
- `async` is ideal for scripts that don’t depend on other scripts.
- `defer` is better for scripts that rely on the DOM being fully loaded before executing.

---

#### **Cookies and sessionStorage and localStorage**



These are all web storage mechanisms, but they have different lifespans and uses:

- **Cookies**: Data stored in cookies is sent to the server with every HTTP request. Cookies have an expiration date and can be set with a specific domain, path, and security attributes. They are limited to 4KB of data.

  **Use case**: Storing authentication tokens, tracking sessions.

  **Example**:
  ```javascript
  document.cookie = "username=John; expires=Fri, 31 Dec 2025 12:00:00 UTC; path=/";
  ```

- **sessionStorage**: Data stored in `sessionStorage` is specific to a single browser session. The data is available as long as the browser is open, but it is cleared when the tab or window is closed.

  **Use case**: Storing temporary data that is only needed for the duration of a session (like a multi-step form).

  **Example**:
  ```javascript
  sessionStorage.setItem("user", "John");
  let user = sessionStorage.getItem("user");
  ```

- **localStorage**: Data stored in `localStorage` persists even when the browser is closed and reopened. It is specific to the domain and accessible in future sessions until explicitly removed. It has a storage limit of about 5MB.

  **Use case**: Storing user preferences, app settings, or data that should persist across sessions.

  **Example**:
  ```javascript
  localStorage.setItem("theme", "dark");
  let theme = localStorage.getItem("theme");
  ```

---

#### **Window vs Document**



- **`window`**: The `window` object represents the global environment or the browser window itself. It provides methods for controlling the browser window (like `window.open()`, `window.alert()`) and properties like `window.innerWidth` (viewport width).
  
  **Example**:
  ```javascript
  console.log(window.innerWidth);  // Prints the width of the window
  ```

- **`document`**: The `document` object is a property of the `window` object and represents the DOM (Document Object Model) of the web page. It is used for interacting with the content of the web page (like selecting elements or modifying the DOM).

  **Example**:
  ```javascript
  document.getElementById("myElement").innerText = "Hello World!";
  ```

**Key Difference**: The `window` object represents the browser window, while `document` represents the content of the web page.

---

#### **WebSocket API**



The **WebSocket API** provides a way to open a two-way interactive communication session between the user's browser and a server. This allows for real-time communication, such as chat applications or live updates, by maintaining a persistent connection.

- WebSockets are different from HTTP requests because once the connection is established, it remains open, and both the client and server can send messages anytime.

**Example**:
```javascript
const socket = new WebSocket("ws://example.com/socket");

socket.onopen = function(event) {
  socket.send("Hello Server");
};

socket.onmessage = function(event) {
  console.log("Message from server: " + event.data);
};
```

**Use case**: Real-time applications like stock tickers, live chat, or multiplayer games.

---

#### **Web Workers**



**Web Workers** allow you to run JavaScript code in the background, on a separate thread, without blocking the main execution thread. This is especially useful for tasks that involve heavy computation or long-running processes, preventing the UI from freezing.

**Example**:
```javascript
// worker.js
self.onmessage = function(e) {
  console.log("Message from main thread: " + e.data);
  self.postMessage("Hello from worker");
};

// In main thread
const worker = new Worker('worker.js');
worker.onmessage = function(e) {
  console.log("Message from worker: " + e.data);
};
worker.postMessage("Start working");
```

**Use case**: Performing calculations, data processing, or file reading without freezing the UI.

---

#### **Using window history API**



The **`window.history` API** provides access to the browser's session history, allowing you to navigate between pages in the session history stack, modify the browser's URL, and even change the current state without causing a page reload.

**Key Methods**:
- `history.pushState()`: Adds a new entry to the browser history stack.
- `history.replaceState()`: Modifies the current entry in the history stack without creating a new entry.
- `history.back()`: Navigates to the previous page.
- `history.forward()`: Navigates to the next page.

**Example**:
```javascript
history.pushState({ page: 1 }, "title 1", "?page=1");
history.replaceState({ page: 2 }, "title 2", "?page=2");
```

This can be useful in single-page applications (SPAs) for updating the URL without refreshing the page.

---


---

### **DOM, Events & UI Interview Answers**

---

#### **Event Listeners**



In JavaScript, **event listeners** are used to listen for specific events (like clicks, keypresses, etc.) on DOM elements and trigger a function when that event occurs.

You can add an event listener to an element using the `addEventListener()` method. This method allows you to specify the event type and a callback function that will be executed when the event occurs.

**Example**:
```javascript
document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});
```

This will display an alert when the user clicks the button with `id="myButton"`. You can also specify options like event bubbling or capturing, and whether the event listener should be passive.

---

#### **Event Bubbling**



In JavaScript, events can propagate through the DOM in two phases: **bubbling** and **capturing**.

- **Event Bubbling**: The event starts at the target element (where the event occurred) and bubbles up through the ancestors (parent elements) in the DOM hierarchy. This is the default behavior in most cases.

  **Example**:
  ```javascript
  document.getElementById("child").addEventListener("click", function() {
    alert("Child clicked!");
  });
  document.getElementById("parent").addEventListener("click", function() {
    alert("Parent clicked!");
  });
  ```

  If the child element is clicked, the event will first trigger the child's listener and then bubble up to the parent element.

#### **Event Capturing**

- **Event Capturing**: In this phase, the event starts from the top (the document) and travels down the DOM tree to the target element.

  **Example**:
  ```javascript
  document.getElementById("parent").addEventListener("click", function() {
    alert("Parent clicked!");
  }, true);  // The third argument 'true' activates capturing
  ```

  In event capturing, the event is first captured by the parent, then it reaches the child.

**Key Difference**: Bubbling starts at the target and moves up, while capturing starts at the root and moves down.

---

#### **`event.preventDefault()` vs `event.stopPropagation()`**



Both methods are used in event handling, but they serve different purposes:

- **`event.preventDefault()`**: Prevents the default action associated with the event from occurring. This is useful for actions like stopping form submissions or disabling anchor tags' default navigation.

  **Example**:
  ```javascript
  document.getElementById("myLink").addEventListener("click", function(event) {
    event.preventDefault();  // Prevents the default link behavior (navigation)
    alert("Link clicked, but no navigation");
  });
  ```

- **`event.stopPropagation()`**: Stops the event from propagating (bubbling) to parent elements. This prevents any parent event listeners from being triggered.

  **Example**:
  ```javascript
  document.getElementById("child").addEventListener("click", function(event) {
    event.stopPropagation();  // Prevents the event from reaching parent elements
    alert("Child clicked!");
  });
  ```

**Key Difference**: `preventDefault()` stops the default behavior of the event, while `stopPropagation()` prevents the event from bubbling up the DOM.

---








#### **Event Delegation and Bubbling**

---

#### 🔸 **What is Event Delegation?**
- Event delegation is a technique where a **single event listener** is attached to a **parent element** to handle events for its **child elements**.
- It leverages **event bubbling**, where events propagate up the DOM tree.
- Useful for handling **dynamically added elements** (e.g., added after DOM load).
- ✅ **Benefits**:
  - Fewer event listeners = better performance.
  - Handles new child elements automatically.

> **Example:**
```javascript
document.getElementById("parent").addEventListener("click", function(event) {
  if (event.target.matches("button.className")) {
    alert("Button clicked!");
  }
});
```

---

#### 🔸 **What is Event Bubbling?**
- Event bubbling is the process where an event starts from the **target element** and **bubbles up** to its ancestors (parent → grandparent → root).
- Enables parent elements to catch events from children.
- Happens by default in the DOM unless `stopPropagation()` is used.

> **Example:**
```javascript
document.querySelector('button').addEventListener('click', () => {
  console.log('Button clicked!');
});
```

---

#### 🔸 **How Are Event Delegation and Bubbling Related?**
- **Event delegation** relies on **event bubbling** to work.
- Without bubbling, parent elements wouldn’t be able to handle child events.

---


#### **`innerHTML` vs `textContent`**



- **`innerHTML`**: Allows you to get or set the HTML content inside an element. It includes any HTML tags that are inside the element.

  **Example**:
  ```javascript
  document.getElementById("myElement").innerHTML = "<strong>Bold Text</strong>";
  ```

  This would insert HTML content inside the element and render it as HTML.

- **`textContent`**: Allows you to get or set the plain text content of an element. It will strip out any HTML tags.

  **Example**:
  ```javascript
  document.getElementById("myElement").textContent = "Plain Text Content";
  ```

  This would insert the text "Plain Text Content" into the element without any HTML tags.

**Key Difference**: `innerHTML` includes HTML tags, while `textContent` only deals with text.

---

#### **Manipulating CSS Styles**



In JavaScript, you can manipulate the styles of an element by using the `style` property or by modifying the `classList`.

- **Using `style` property**:
  ```javascript
  document.getElementById("myElement").style.backgroundColor = "red";
  ```

- **Using `classList`**:
  ```javascript
  document.getElementById("myElement").classList.add("myClass");
  ```

**Best Practice**: It's generally better to modify classes than individual styles because classes can be reused, and it helps in maintaining cleaner code.

---

#### **Destructuring**



**Destructuring** is a convenient way of extracting multiple properties from an object or elements from an array and assigning them to variables.

- **Object Destructuring**:
  ```javascript
  const person = { name: "John", age: 30 };
  const { name, age } = person;
  console.log(name);  // John
  ```

- **Array Destructuring**:
  ```javascript
  const arr = [1, 2, 3];
  const [a, b, c] = arr;
  console.log(a);  // 1
  ```

Destructuring makes the code more concise and readable, especially when working with complex data structures.

---

#### **spread operator**



The **spread** (`...`) and **rest** (`...`) operators have similar syntax but serve different purposes depending on the context.

- **Spread Operator**: Used to spread elements of an array or object into individual elements. It’s typically used when calling functions or combining arrays/objects.

  **Example**:
  ```javascript
  const arr1 = [1, 2];
  const arr2 = [...arr1, 3, 4];  // Spread arr1 into arr2
  console.log(arr2);  // [1, 2, 3, 4]
  ```

  #### **Rest Parameters**

- **Rest Parameters**: Used to collect multiple arguments into an array within function definitions.

  **Example**:
  ```javascript
  function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  console.log(sum(1, 2, 3));  // 6
  ```

**Key Difference**: Spread is used for expanding elements, while rest is used for gathering elements into a collection.

---



---

### **Testing Interview Answers**

---

#### **Types of Testing in Software Development**



There are several types of testing that help ensure the quality and functionality of the software:

- **Unit Testing**: Focuses on testing individual units or components of code, typically functions or methods, in isolation from the rest of the application.

- **Integration Testing**: Involves testing the interaction between different modules or services to ensure they work together as expected.

- **End-to-End (E2E) Testing**: Simulates the user’s behavior and tests the entire system, from the front end to the back end, ensuring all parts of the application function together.

- **Smoke Testing**: Verifies that the most important features of an application are working, often called "sanity" testing.

- **Regression Testing**: Ensures that new changes or features don't negatively impact existing functionality.

- **Acceptance Testing**: Determines if the software meets the client’s requirements or business needs.

- **Performance Testing**: Evaluates how the application behaves under heavy load or stress.

Each type of testing serves a specific purpose in the software development lifecycle to ensure the software is reliable, efficient, and meets user requirements.

---

#### **Unit Testing vs Integration Testing vs E2E**



- **Unit Testing**: Involves testing individual units or functions of the code in isolation from the rest of the application. Unit tests ensure that each unit behaves as expected.

  **Example**: Testing a function that calculates the sum of two numbers.

  ```javascript
  function add(a, b) {
    return a + b;
  }
  
  // Unit test
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });
  ```

- **Integration Testing**: Focuses on testing the interaction between multiple components or services to ensure they work together correctly. It checks the interfaces between different parts of the application.

  **Example**: Testing a function that calls a database to fetch data and returns it to the user.

- **End-to-End (E2E) Testing**: Tests the application as a whole, simulating user interactions. It verifies that the entire system, including front-end and back-end, functions as expected from start to finish.

  **Example**: Simulating a user logging in, navigating through the app, and completing a purchase.

**Key Difference**: Unit testing focuses on small, isolated units of code, integration testing focuses on how different parts of the application work together, and E2E testing ensures the entire application functions as intended.

---

#### **Writing Unit Tests**



Writing unit tests for JavaScript involves creating tests that validate individual functions or units of code. The goal is to isolate the unit being tested to ensure it performs correctly in various scenarios.

A typical unit test includes:
- **Test Setup**: Preparing the environment or input data.
- **Test Execution**: Calling the function with specific arguments.
- **Assertions**: Verifying that the function produces the expected output.

**Example**:
Let’s say you have the following function:

```javascript
function multiply(a, b) {
  return a * b;
}
```

A unit test for this function would look like this:

```javascript
test('multiplies 2 and 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});
```

This is a simple test using the **Jest** testing framework. It asserts that multiplying 2 and 3 returns 6.

---

#### **Popular JavaScript Testing Frameworks**



Some of the most popular JavaScript testing frameworks are:

- **Jest**: A comprehensive testing framework often used for React applications. It includes features like assertions, mocks, and snapshots, and is known for its simplicity and ease of use.
  
  **Example**:
  ```javascript
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });
  ```

- **Mocha**: A flexible testing framework that works well with other libraries. Mocha allows you to write asynchronous tests and is often used with assertion libraries like Chai.

- **Jasmine**: A behavior-driven testing framework that provides a rich syntax for writing tests, with built-in support for assertions.

- **Karma**: A test runner that works with other frameworks like Jasmine or Mocha, often used for running tests in different browsers.

- **Cypress**: A tool for testing front-end applications in real browsers, with a focus on end-to-end testing.

---

#### **Mocks and Stubs in Testing**



Mocks and stubs are used in unit testing to simulate parts of the system, isolate the unit under test, and avoid making real API calls or database queries.

- **Stub**: A function that replaces another function and provides a controlled response. Stubs are usually used for functions that return specific values.

  **Example**:
  ```javascript
  const fetchData = jest.fn().mockReturnValue({ data: 'Hello, world!' });
  ```

- **Mock**: A more advanced form of a stub that tracks the calls made to the function, including arguments, return values, and the number of times it was called.

  **Example**:
  ```javascript
  const logger = jest.fn();
  logger('Test log');
  expect(logger).toHaveBeenCalledWith('Test log');
  ```

Mocks and stubs allow you to test the logic of your functions without invoking external dependencies like databases or APIs.

---

#### **Test-Driven Development**

Test-Driven Development (TDD) is a software development methodology in which tests are written before the code itself. It follows the **Red-Green-Refactor** cycle:

**Red**: Write a failing test for the new functionality.
**Green**: Write just enough code to pass the test.
**Refactor**: Clean up the code, ensuring it’s readable and efficient without changing its functionality.

TDD encourages writing minimal code and focusing on only what is needed to pass the tests.

**Example**:
Write the test:
   ```javascript
   test('adds 1 + 1 to equal 2', () => {
     expect(add(1, 1)).toBe(2);
   });
   ```
Write code to pass the test:
   ```javascript
   function add(a, b) {
     return a + b;
   }
   ```

**Benefits**:
- Ensures the code is testable and bug-free.
- Encourages simpler, more modular code.

---

#### **Testing Asynchronous Code in JavaScript**


Testing asynchronous code involves handling promises or callbacks and ensuring that the code executes correctly.

- **With Promises**: You can use `async/await` and `assertions` to wait for promises to resolve.

  **Example**:
  ```javascript
  test('fetches data from API', async () => {
    const data = await fetchData();
    expect(data).toEqual({ name: 'John' });
  });
  ```

- **With Callbacks**: In case of callbacks, you can use `done` in Jest to indicate that the test should wait for the callback to complete.

  **Example**:
  ```javascript
  test('fetches data with callback', (done) => {
    fetchDataWithCallback((data) => {
      expect(data).toEqual({ name: 'John' });
      done();
    });
  });
  ```

Testing async code ensures that the asynchronous operations are correctly handled and that the results are as expected.

---


---

### 🔒 **Security Interview Answers**

---

#### **Cross-Site Scripting (XSS) and Prevention**



Cross-Site Scripting (XSS) is a security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. These scripts can steal sensitive information, manipulate content, or hijack user sessions.

**Prevention**:
- **Sanitize Input**: Always sanitize user inputs to ensure no malicious scripts are injected. Use libraries like **DOMPurify** or **OWASP Java HTML Sanitizer**.
  
  **Example**:
  ```javascript
  const cleanInput = DOMPurify.sanitize(userInput);
  ```
  
- **Use Content Security Policy (CSP)**: CSP restricts how resources (like scripts) are loaded by the browser.
  
  **Example**:
  ```html
  <meta http-equiv="Content-Security-Policy" content="script-src 'self';">
  ```

- **Escape Output**: Encode data before rendering it in HTML, JavaScript, or URL contexts.

  **Example**:
  ```javascript
  const safeHTML = document.createElement('div');
  safeHTML.textContent = userInput;  // This will prevent XSS by escaping the input
  ```

By sanitizing inputs and escaping outputs, you minimize the risk of XSS attacks.

---

#### **Cross-Site Request Forgery (CSRF) and Mitigation Techniques**



Cross-Site Request Forgery (CSRF) is an attack where a malicious actor tricks a user into making an unwanted request to a web application where they are authenticated.

**Mitigation Techniques**:
- **Use Anti-CSRF Tokens**: A unique token is included with every request to verify that the request is from the legitimate user.
  
  **Example**:
  ```html
  <input type="hidden" name="csrf_token" value="{{csrf_token}}">
  ```

- **SameSite Cookies**: Set the `SameSite` attribute for cookies to `Strict` or `Lax` to restrict cookie transmission in cross-origin requests.

  **Example**:
  ```javascript
  document.cookie = "sessionid=xyz; SameSite=Strict";
  ```

- **Check Referer Header**: Verify the `Referer` header to ensure the request originates from your domain.

---

#### **Preventing SQL Injection Vulnerabilities**



SQL Injection is a technique where an attacker can manipulate SQL queries by injecting malicious SQL code into user inputs, potentially allowing them to access, modify, or delete data from the database.

**Prevention**:
- **Use Prepared Statements**: Avoid constructing SQL queries directly with user input. Prepared statements with parameterized queries ensure that user input is treated as data and not executable code.

  **Example (using Node.js with SQL libraries)**:
  ```javascript
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [userEmail], (err, results) => { ... });
  ```

- **Use ORM Libraries**: Object-Relational Mapping (ORM) libraries like **Sequelize** (for Node.js) automatically sanitize user inputs.
  
- **Whitelist Input Validation**: Ensure that inputs match expected patterns (e.g., email format) to prevent malicious data.

---

#### **Handling Sensitive Data**



Handling sensitive data requires encryption, proper access control, and secure storage mechanisms to protect user information.

**Best Practices**:
- **Encrypt Sensitive Data**: Use algorithms like AES-256 for encrypting sensitive data at rest. Ensure the encryption keys are stored securely using hardware security modules (HSMs).

  **Example** (AES encryption in Node.js):
  ```javascript
  const crypto = require('crypto');
  const encryptedData = crypto.createCipher('aes-256-cbc', secretKey).update(data, 'utf8', 'hex');
  ```

- **Use HTTPS**: Always use **HTTPS** to encrypt data in transit and prevent man-in-the-middle attacks.

- **Avoid Storing Plaintext Passwords**: Use strong hashing algorithms like **bcrypt** or **argon2** to store passwords securely.

  **Example**:
  ```javascript
  const bcrypt = require('bcrypt');
  const hash = bcrypt.hashSync(password, 10);
  ```

- **Limit Data Access**: Implement least privilege access and make sure only authorized personnel can access sensitive information.

---

#### **Content Security Policy (CSP)**



CSP is a security mechanism that helps prevent various types of attacks like XSS and data injection attacks by specifying which content sources are allowed to load on a webpage.

**How it works**:
- **Restrict Resource Loading**: You can control where scripts, images, stylesheets, and other resources are loaded from.
  
  **Example CSP Header**:
  ```html
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://trusted.com;">
  ```

By using CSP, you prevent attackers from injecting malicious scripts or other resources into your web pages.

---

#### **Common Security Headers and Their Purposes**



Some common security headers are:

- **Strict-Transport-Security (HSTS)**: Instructs browsers to only use HTTPS for communication, protecting against downgrade attacks.
  ```http
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  ```

- **Content-Security-Policy (CSP)**: Prevents XSS by controlling which resources can be loaded by the browser.
  ```http
  Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.com;
  ```

- **X-Content-Type-Options**: Prevents browsers from interpreting files as something other than their declared content type.
  ```http
  X-Content-Type-Options: nosniff
  ```

- **X-Frame-Options**: Prevents your site from being embedded in an iframe, protecting against clickjacking.
  ```http
  X-Frame-Options: DENY
  ```

- **X-XSS-Protection**: Enables or disables the browser’s built-in XSS filter.
  ```http
  X-XSS-Protection: 1; mode=block
  ```

These headers improve the security posture of a web application by enforcing proper security mechanisms.

---

#### **Preventing Clickjacking Attacks**



Clickjacking is a malicious technique where a user is tricked into clicking on a hidden button or link by rendering it behind an iframe.

**Prevention**:
- **X-Frame-Options Header**: Prevents the page from being embedded in an iframe.

  ```http
  X-Frame-Options: DENY
  ```

- **Content Security Policy (CSP)**: Restricts the embedding of content within frames.
  
  ```html
  <meta http-equiv="Content-Security-Policy" content="frame-ancestors 'none';">
  ```

These headers prevent attackers from tricking users into clicking on elements that they can't see.

---

#### **Input Validation and Its Importance**



Input validation is crucial for ensuring that user input is safe, expected, and meets the application's requirements. It helps prevent injection attacks, data corruption, and crashes.

**How to Perform Input Validation**:
- **Type Checking**: Ensure that input data is of the correct type (e.g., strings, numbers).
  
  **Example**:
  ```javascript
  if (typeof userInput !== 'string') {
    throw new Error('Invalid input type');
  }
  ```

- **Range Checking**: Ensure numeric values are within an expected range.

  **Example**:
  ```javascript
  if (age < 18 || age > 100) {
    throw new Error('Invalid age');
  }
  ```

- **Pattern Matching**: Use regular expressions to match the expected input format (e.g., email format).
  
  **Example**:
  ```javascript
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(userInput)) {
    throw new Error('Invalid email format');
  }
  ```

By validating inputs, you ensure data integrity and reduce the risk of malicious data entering your system.

---



---

### ⚙️ **Performance Optimization Interview Answers**

---

#### **Common Performance Bottlenecks in JavaScript Applications**



Common performance bottlenecks in JavaScript applications include:

- **Blocking the Main Thread**: Long-running synchronous JavaScript code can block the UI thread, making the application feel slow or unresponsive. This happens when heavy computations or synchronous AJAX calls are performed.
  
- **Memory Leaks**: Unused objects or event listeners that are not properly cleaned up can cause memory leaks, slowing down the application over time.

- **DOM Manipulation**: Excessive DOM manipulation or manipulating the DOM repeatedly in an inefficient way can drastically degrade performance.

- **Large Bundle Sizes**: Large JavaScript bundle sizes increase loading times and can slow down the initial page render.

- **Inefficient Loops**: Unoptimized loops or excessive computations inside loops can severely impact performance, especially when iterating over large datasets.

**Prevention**:
- Break down long tasks using `requestIdleCallback` or `setTimeout`.
- Optimize memory usage by clearing references and using weak references where appropriate.

---

#### **Optimizing DOM Manipulation for Better Performance**



Optimizing DOM manipulation is critical to maintaining fast web applications, especially when frequently updating the DOM. Here are some strategies:

- **Batch DOM Updates**: Manipulating the DOM multiple times in a loop can be inefficient. Instead, batch all updates and perform them in a single operation.

  **Example**:
  ```javascript
  const fragment = document.createDocumentFragment();
  data.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item;
    fragment.appendChild(div);
  });
  container.appendChild(fragment);
  ```

- **Minimize Reflows and Repaints**: Reflows and repaints are triggered whenever the DOM changes, so minimize unnecessary changes. Avoid reading layout properties (like `offsetHeight`, `offsetWidth`) before making modifications.

- **Use Virtual DOM (React)**: Libraries like React optimize DOM updates by using a virtual DOM and batching updates, minimizing direct interaction with the real DOM.

- **Avoid Complex Selectors**: Use efficient selectors, especially when selecting elements by class, ID, or tag, rather than using complex queries.

---

#### **Lazy Loading**



Lazy loading is a technique where resources (like images, scripts, or components) are only loaded when they are required, rather than all at once during the initial page load. This reduces the initial load time and improves perceived performance.

**How to Implement Lazy Loading**:
- **Images**: Use the `loading="lazy"` attribute to defer the loading of images until they are about to be displayed in the viewport.

  **Example**:
  ```html
  <img src="image.jpg" loading="lazy" alt="Lazy Loaded Image">
  ```

- **Dynamic Imports**: Use JavaScript's dynamic `import()` function to load modules only when necessary.

  **Example**:
  ```javascript
  button.addEventListener('click', () => {
    import('./myModule').then(module => {
      module.initialize();
    });
  });
  ```

- **Intersection Observer**: Use the Intersection Observer API to detect when elements are about to enter the viewport and load them accordingly.

  **Example**:
  ```javascript
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      }
    });
  });
  
  const images = document.querySelectorAll('img[data-src]');
  images.forEach(img => observer.observe(img));
  ```

Lazy loading reduces unnecessary initial load, improving both performance and user experience.

---

#### **Leveraging Caching Strategies for Performance Optimization**



Caching strategies are essential for reducing load times, especially for frequently accessed resources. Some effective caching strategies include:

- **Browser Caching**: Use HTTP headers like `Cache-Control` and `ETag` to instruct browsers to cache resources, so they don't need to be fetched on every request.

  **Example**:
  ```http
  Cache-Control: max-age=31536000, immutable
  ```

- **Service Workers**: Use service workers for caching assets and enabling offline functionality. This allows caching of network requests and responses for future use.

  **Example**:
  ```javascript
  self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('my-cache').then(cache => {
        return cache.addAll(['/index.html', '/styles.css', '/script.js']);
      })
    );
  });
  ```

- **Content Delivery Network (CDN)**: Use CDNs to cache static resources geographically closer to users, reducing latency and improving load times.

- **Application Cache**: For legacy browsers, use `localStorage`, `sessionStorage`, or IndexedDB to cache application data on the client side.

---

#### **Tools for Measuring and Analyzing JavaScript Performance**



There are several tools available to measure and analyze JavaScript performance:

- **Chrome DevTools**: Offers a suite of tools for analyzing performance, including the **Performance tab** for recording and analyzing runtime performance, the **Memory tab** for detecting memory leaks, and the **Network tab** for tracking network requests.

- **Lighthouse**: An open-source tool from Google that audits the performance, accessibility, SEO, and best practices of a web page. It provides actionable insights and recommendations for improving performance.

- **WebPageTest**: An online tool that provides detailed information about page load time, performance bottlenecks, and opportunities for optimization, including first paint, time to interactive, etc.

- **r3 Performance Analyzer**: A performance profiler specifically designed to analyze network performance and rendering times in real-world conditions.

- **New Relic / Datadog**: These monitoring tools help in tracking server-side and client-side performance, providing real-time insights into bottlenecks and issues affecting the application’s speed.

---

#### **Optimizing Network Requests for Better Performance**



Optimizing network requests is crucial to improve the loading speed and overall performance of a web application. Here are some strategies:

- **Minimize HTTP Requests**: Reduce the number of requests by combining files (e.g., CSS, JavaScript) into a single file and using image sprites.

- **Use HTTP/2**: HTTP/2 allows multiplexing, meaning multiple requests can be sent over a single TCP connection, reducing latency.

- **Lazy Load Resources**: Load resources such as images, fonts, and JavaScript files only when they are needed (on-demand), reducing initial page load.

- **Compression**: Use compression techniques like GZIP or Brotli to reduce the size of transferred resources. Ensure that both your server and client support these compression methods.

  **Example**:
  ```http
  Content-Encoding: gzip
  ```

- **Avoid Render-Blocking Resources**: Minimize or defer the loading of CSS and JavaScript files that block the rendering of the page. Use `async` or `defer` attributes on script tags for non-critical resources.

  **Example**:
  ```html
  <script src="script.js" async></script>
  ```

- **Use a Content Delivery Network (CDN)**: Serve static resources (images, CSS, JavaScript) from CDNs, which reduce the distance data needs to travel and improve load times.




#### **call and apply and bind Methods**



In JavaScript, `call`, `apply`, and `bind` are methods that allow you to control the `this` context within functions, and they all are used to invoke a function with a specific `this` value.

- **`call()`**: Immediately invokes the function and allows you to pass arguments one by one.
    - **Syntax**: `func.call(thisContext, arg1, arg2, ...)`
    - **Example**:
      ```javascript
      function greet(name) {
        console.log(`Hello, ${name}!`);
      }

      greet.call(null, 'Alice'); // Output: Hello, Alice!
      ```

- **`apply()`**: Similar to `call()`, but it takes an array or array-like object as arguments.
    - **Syntax**: `func.apply(thisContext, [arg1, arg2, ...])`
    - **Example**:
      ```javascript
      function greet(name, age) {
        console.log(`${name} is ${age} years old.`);
      }

      greet.apply(null, ['Alice', 30]); // Output: Alice is 30 years old.
      ```

- **`bind()`**: Unlike `call` and `apply`, `bind()` does not invoke the function immediately. Instead, it returns a new function with a fixed `this` context and optional parameters.
    - **Syntax**: `const boundFunc = func.bind(thisContext, arg1, arg2, ...);`
    - **Example**:
      ```javascript
      function greet(name) {
        console.log(`Hello, ${name}!`);
      }

      const greetAlice = greet.bind(null, 'Alice');
      greetAlice(); // Output: Hello, Alice!
      ```

---

#### **Pure Functions and Side Effects**



- **Pure Functions**:
  - A pure function is a function that always produces the same output for the same input and has no side effects (does not modify any external state).
  - **Key Characteristics**:
    Given the same input, it will always return the same result.
    It does not modify any variables or objects outside the function.
  - **Example**:
    ```javascript
    function add(a, b) {
      return a + b;
    }
    ```

- **Side Effects**:
  - A side effect occurs when a function modifies external state, such as changing a global variable, modifying an object outside the function, or performing an I/O operation like logging to the console or changing the DOM.
  - **Example**:
    ```javascript
    let counter = 0;
    function increment() {
      counter++;  // side effect: modifies an external variable
    }
    ```

---

#### **Memoization Techniques**



**Memoization** is an optimization technique that involves caching the results of expensive function calls and reusing the cached result when the same inputs occur again. It is particularly useful in functions where the output is deterministic and depends on the inputs.

- **How it works**:
  - Store the result of a function in a cache (object or map) with the input parameters as the key.
  - When the function is called again with the same arguments, return the cached result instead of recalculating it.

**Example**:
```javascript
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = args.join(',');
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const factorial = memoize(function(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(5)); // Calculates and stores result
console.log(factorial(5)); // Returns cached result
```

---

#### **Debounce and Throttle Functions**



Both **debounce** and **throttle** are techniques to control the frequency of function calls, typically used with events like scrolling, resizing, or typing.

- **Debounce**:
  - Ensures that a function is executed only after a certain amount of time has passed since the last time it was invoked. It’s useful when you want to prevent a function from being called too frequently (e.g., when typing in a search bar).
  - **Example**:
    ```javascript
    function debounce(func, delay) {
      let timeoutId;
      return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
      };
    }

    const handleResize = debounce(() => console.log('Resized!'), 300);
    window.addEventListener('resize', handleResize);
    ```

- **Throttle**:
  - Ensures that a function is executed at most once in a specified interval, even if it is triggered multiple times. It is useful for limiting expensive operations like scroll event handlers.
  - **Example**:
    ```javascript
    function throttle(func, limit) {
      let inThrottle;
      return function (...args) {
        if (!inThrottle) {
          func(...args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    }

    const handleScroll = throttle(() => console.log('Scrolling!'), 500);
    window.addEventListener('scroll', handleScroll);
    ```

---

#### **Currying in JavaScript**


- **Currying** is a technique where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument. 
- It allows for partial function application, where you can fix some arguments ahead of time.

- **Example**:
  ```javascript
  function multiply(a) {
    return function(b) {
      return a * b;
    };
  }

  const multiplyBy2 = multiply(2);
  console.log(multiplyBy2(5)); // Output: 10
  ```

In this example, the `multiply` function is curried, and we create a new function `multiplyBy2` by passing `2` as the argument, so that calling `multiplyBy2(5)` returns `10`.

---

#### **Function Composition Patterns**



**Function composition** refers to the technique of combining two or more functions to create a new function. The output of one function is passed as the input to the next. It allows for creating more modular, reusable functions.

- **Example**:
  ```javascript
  const add = (a) => a + 2;
  const multiply = (a) => a * 3;

  const compose = (f, g) => (x) => f(g(x));  // Composition of two functions

  const result = compose(add, multiply)(5);  // multiply(5) -> 15, add(15) -> 17
  console.log(result); // Output: 17
  ```

In this example, we composed `add` and `multiply` functions, which means `multiply(5)` is executed first, and the result is passed into `add(15)`.

---

### Advanced JavaScript Features Interview Answers

---



#### **WeakMap and WeakSet Usage**



- **`WeakMap`**:
  - A **`WeakMap`** is a collection of key-value pairs where the keys are objects and the values can be any data type. What makes it "weak" is that the keys are held **weakly** (i.e., they do not prevent garbage collection). If the key object is garbage collected, the corresponding entry is also removed from the `WeakMap`.
  - **Use Case**: `WeakMap` is useful when you want to associate data with an object without preventing that object from being garbage collected.

  **Example**:
  ```javascript
  let obj = {};
  const weakMap = new WeakMap();
  weakMap.set(obj, 'some data');
  obj = null;  // The entry in WeakMap will be garbage collected
  ```

- **`WeakSet`**:
  - A **`WeakSet`** is similar to a `Set`, but it only allows objects as its members and the objects are stored weakly (they don’t prevent garbage collection).
  - **Use Case**: `WeakSet` is used when you need to track objects, and you don’t want the presence in the set to prevent those objects from being garbage collected.

  **Example**:
  ```javascript
  let obj = {};
  const weakSet = new WeakSet();
  weakSet.add(obj);
  obj = null;  // The object will be garbage collected
  ```

---

#### **Difference Between Map and Plain Objects**



- **Key Types**:
  - A **`Map`** allows keys of any type (objects, functions, primitive types), while **objects** only allow strings (or symbols) as keys.
  
- **Order of Keys**:
  - In a **`Map`**, keys are ordered in the insertion order, while **objects** do not guarantee any specific order (though most modern JavaScript engines preserve it).
  
- **Performance**:
  - **`Map`** is optimized for frequent additions and removals of key-value pairs, especially when the number of entries is large. **Objects** are more efficient for simple key-value pair lookups, but not for large datasets.
  
- **Prototype Inheritance**:
  - **`Map`** does not have a prototype chain (no inherited properties like `toString` or `hasOwnProperty`), which avoids potential key conflicts. In contrast, **objects** inherit from `Object.prototype`.

- **Iteration**:
  - A **`Map`** has built-in methods for iteration like `forEach`, `keys()`, `values()`, and `entries()`. While **objects** can be iterated over using `for...in` loops, `Object.keys()`, `Object.values()`, etc., these methods are more manual.

---

#### **Object Destructuring with Defaults**



In **object destructuring**, you can assign **default values** for variables in case the property is `undefined`. If the property exists on the object, the value will be used; otherwise, the default value will be assigned.

**Example**:
```javascript
const user = { name: 'Alice' };
const { name, age = 25 } = user;
console.log(name); // Alice
console.log(age);  // 25 (default value since `age` is not in the object)
```

In this case, `age` was not defined on the `user` object, so the default value `25` is used.

---

#### **`this` Keyword Behavior**



- **Global Context**: 
  - When `this` is used in the global execution context, it refers to the global object. In browsers, `this` will refer to the `window` object.

  **Example**:
  ```javascript
  console.log(this); // In the browser, this refers to the window object
  ```

- **Inside a Function**: 
  - In non-arrow functions, `this` refers to the object that called the function. For example, in a method call, `this` refers to the object the method is called on.

  **Example**:
  ```javascript
  const person = {
    name: 'Bob',
    greet: function() {
      console.log(this.name);  // 'this' refers to the person object
    }
  };
  person.greet();  // Output: Bob
  ```

- **Arrow Functions**: 
  - Arrow functions do not have their own `this`. They inherit `this` from the surrounding lexical context.

  **Example**:
  ```javascript
  const person = {
    name: 'Bob',
    greet: () => {
      console.log(this.name);  // 'this' is inherited from the surrounding context
    }
  };
  person.greet();  // Output: undefined (since 'this' does not refer to the person object)
  ```

- **Event Handlers**: 
  - In an event handler, `this` refers to the element that triggered the event.

  **Example**:
  ```javascript
  button.addEventListener('click', function() {
    console.log(this);  // 'this' refers to the button element
  });
  ```

---

#### **Usage of `super()` in Classes**



The `super()` function is used in a subclass to call methods on the parent class. It is required when a subclass needs to invoke a constructor or methods from the parent class.

- **In a Constructor**:
  - In a subclass constructor, `super()` must be called before `this` can be used. It invokes the constructor of the parent class.

  **Example**:
  ```javascript
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }

  class Dog extends Animal {
    constructor(name, breed) {
      super(name);  // Calls the parent class constructor
      this.breed = breed;
    }
  }

  const dog = new Dog('Buddy', 'Golden Retriever');
  console.log(dog.name);  // Output: Buddy
  console.log(dog.breed);  // Output: Golden Retriever
  ```

- **In Methods**:
  - You can also use `super()` to call methods from the parent class.

  **Example**:
  ```javascript
  class Animal {
    speak() {
      console.log('Animal speaks');
    }
  }

  class Dog extends Animal {
    speak() {
      super.speak();  // Calls the parent class speak method
      console.log('Dog barks');
    }
  }

  const dog = new Dog();
  dog.speak();  // Output: Animal speaks
               // Output: Dog barks
  ```

---

### Modules, Bundling, and Transpiling Interview Answers

---

#### **CommonJS vs ES Modules**



- **CommonJS**:
  - **CommonJS** is a module system traditionally used in Node.js. It uses `require()` to import modules and `module.exports` or `exports` to export modules.
  - **Example**:
    ```javascript
    // module.js (CommonJS)
    module.exports = function() {
      console.log('Hello from CommonJS!');
    };
    
    // main.js
    const greet = require('./module');
    greet();
    ```

- **ES Modules**:
  - **ES Modules** (ESM) is the modern module system standardized by ECMAScript. It uses `import` and `export` syntax.
  - ES modules are statically analyzed, meaning imports and exports can be resolved at compile time, which makes them suitable for tree shaking and better performance.
  - **Example**:
    ```javascript
    // module.js (ES Module)
    export function greet() {
      console.log('Hello from ES Module!');
    }
    
    // main.js
    import { greet } from './module';
    greet();
    ```

**Key Differences**:
- **Syntax**: CommonJS uses `require()`/`module.exports`, while ES Modules use `import`/`export`.
- **Asynchronous vs Synchronous**: CommonJS is synchronous (modules are loaded at runtime), whereas ES Modules are designed to be asynchronous.
- **Execution**: CommonJS modules are executed immediately upon import, while ES Modules are executed lazily and can be statically analyzed.

---

#### **Tree Shaking in Modern Bundlers**



- **Tree shaking** is a feature of modern JavaScript bundlers (like Webpack and Rollup) that eliminates unused code from the final bundle. It works by statically analyzing the code to determine which exports are used and which can be safely removed.

- **How it Works**:
  - Tree shaking works on **ES Modules** because of their static structure (i.e., imports/exports are known at compile time). This allows bundlers to "shake" out any unused code, leading to smaller bundle sizes.

- **Example**:
  ```javascript
  // utils.js
  export function usefulFunction() {
    console.log('This is useful!');
  }
  
  export function unusedFunction() {
    console.log('This is not used.');
  }

  // main.js
  import { usefulFunction } from './utils';
  usefulFunction();
  ```
  After bundling, only the `usefulFunction` will remain in the final bundle, and `unusedFunction` will be eliminated.

---

#### **Polyfills and Backward Compatibility**



- **Polyfills** are scripts that add support for features not natively available in older browsers or environments. They ensure that modern JavaScript features (like `Promise`, `fetch`, or `Array.prototype.includes`) work on older platforms by providing implementations of those features.

- **How Polyfills Work**:
  - A polyfill checks if a feature exists, and if not, it provides its implementation.
  
  **Example**:
  ```javascript
  if (!window.fetch) {
    // Provide a polyfill for the fetch API
    window.fetch = function() {
      // Implement fetch logic here
    };
  }
  ```

- **Importance**:
  - Polyfills ensure that your application can run on older browsers that don’t support the latest JavaScript features. This is especially important when supporting Internet Explorer or older versions of Firefox, Chrome, etc.

---

#### **Transpiling JavaScript Code**



- **Transpiling** is the process of converting modern JavaScript (ES6+) code into an older version of JavaScript (such as ES5) that is compatible with older browsers or environments. This is usually done to ensure compatibility with older browsers that don’t support new JavaScript features.

- **Example**:
  - **ES6+ Code**:
    ```javascript
    const greet = (name) => {
      console.log(`Hello, ${name}!`);
    };
    ```
  
  - **ES5 Transpiled Code** (via Babel):
    ```javascript
    var greet = function(name) {
      console.log('Hello, ' + name + '!');
    };
    ```

- **Tools for Transpiling**:
  - **Babel** is the most popular tool for transpiling modern JavaScript into compatible versions for older browsers.

---

#### **Role of Babel in Modern Development**



- **Babel** is a widely used JavaScript transpiler that converts modern JavaScript code (ES6 and beyond) into backward-compatible versions (usually ES5) for use in older browsers. Babel also provides plugins for transforming syntax (like JSX for React) or even polyfilling missing features.

- **Why Use Babel?**:
  - It allows developers to write code using the latest JavaScript syntax and features, knowing that Babel will handle the compatibility issues.
  - It helps modernize codebases and supports newer JavaScript features without worrying about browser support.

- **Example**:
  ```javascript
  // Example ES6 Code
  const greet = () => console.log("Hello, world!");
  ```

  **Babel Transpiled (ES5)**:
  ```javascript
  var greet = function() {
    console.log("Hello, world!");
  };
  ```

- **Babel Setup**:
  - Babel can be integrated with bundlers like **Webpack** or **Vite** to transpile code as part of the build process.

---

#### **Webpack and Vite Bundling Process**



- **Webpack**:
  - **Webpack** is a powerful and flexible bundler for JavaScript applications. It bundles all your assets (JS, CSS, images, etc.) and optimizes them for production.
  - **Process**:
    - **Entry**: Webpack starts with an entry point (usually `index.js`) and looks at the dependencies to build a dependency graph.
    - **Loaders**: Webpack uses loaders to transform files before they are bundled (e.g., using Babel to transpile JavaScript or Sass to CSS).
    - **Plugins**: Plugins are used for additional optimization, such as minification or tree-shaking.
    - **Output**: The bundled files are output to a directory, usually in the form of a single JavaScript file, or split into multiple files for better caching.

- **Vite**:
  - **Vite** is a modern bundler that focuses on speed and simplicity. Unlike Webpack, Vite uses native ES Modules and leverages the browser's native module system during development, allowing for fast hot-reloading and instant updates.
  - **Process**:
    - **Development**: During development, Vite serves the code directly as ES Modules without bundling, offering instant reloads and fast development builds.
    - **Production**: For production builds, Vite uses **Rollup** internally to bundle and optimize the code, performing tree-shaking, code splitting, and other optimizations.
  
  **Key Difference**:
  - Webpack is more flexible but can be slower, especially with large projects, while Vite is faster due to its reliance on native browser features for development and modern optimization techniques for production.

---



### Prototypes and Inheritance Interview Answers

---

#### **Understanding `__proto__` and Prototypes**



- In JavaScript, every object has a **prototype** from which it can inherit properties and methods. The **prototype** is itself an object that provides a blueprint for the object, and it is linked to the object via the internal property `[[Prototype]]`.
- `__proto__` is a reference to the prototype of an object, meaning it points to the object from which it inherits. It is a way to access the prototype of an object directly.

  **Example**:
  ```javascript
  const animal = {
    sound: 'growl'
  };

  const dog = Object.create(animal);
  console.log(dog.__proto__); // Output: { sound: 'growl' }
  console.log(dog.__proto__.sound); // Output: growl
  ```

- **Key Concepts**:
  - Every object in JavaScript has an internal `[[Prototype]]` link, and you can access it using `__proto__` (although it's deprecated in modern JavaScript).
  - Objects can inherit from other objects via the prototype chain, which allows for shared properties and methods.

---

#### **Object create and Prototype Chains**



- `Object.create()` creates a new object with a specified prototype object and optional properties. The new object’s `[[Prototype]]` (i.e., its prototype chain) is set to the object passed as an argument.

  **Example**:
  ```javascript
  const animal = {
    speak() {
      console.log('Animal speaks');
    }
  };

  const dog = Object.create(animal);
  dog.speak();  // Output: Animal speaks
  ```
  - **Role in Prototype Chains**:
    - The `dog` object inherits from `animal`. This means `dog.__proto__` points to `animal`. If `dog` doesn’t have a `speak()` method, JavaScript looks up the prototype chain and finds it on `animal`.
    - Prototypes allow inheritance and shared behavior between objects, which helps in creating more efficient, reusable code.

---

#### **`Object.assign()` vs Spread Operator**



- Both `Object.assign()` and the spread operator can be used to copy the properties of one object into another, but there are some differences:

  - **`Object.assign()`**:
    - Copies all **enumerable** properties (including non-symbol keys) from one or more source objects to a target object.
    - It **mutates** the target object.
    - Does not copy inherited properties or non-enumerable properties.
  
    **Example**:
    ```javascript
    const target = { a: 1 };
    const source = { b: 2, c: 3 };
    Object.assign(target, source);
    console.log(target); // { a: 1, b: 2, c: 3 }
    ```

  - **Spread Operator (`...`)**:
    - Copies all enumerable properties from one object to another, similar to `Object.assign()`.
    - Does not mutate the original object; it creates a **shallow copy**.
    - It’s more concise and is used for object literals or arrays.
  
    **Example**:
    ```javascript
    const target = { a: 1 };
    const source = { b: 2, c: 3 };
    const newObj = { ...target, ...source };
    console.log(newObj); // { a: 1, b: 2, c: 3 }
    ```

- **Key Differences**:
  - **Mutability**: `Object.assign()` mutates the target object, whereas the spread operator creates a new object.
  - **Use Case**: The spread operator is typically more concise, whereas `Object.assign()` might be more familiar in certain situations like copying properties from multiple sources.

---

#### **ES6 Classes and Prototypal Inheritance**



- **ES6 classes** are a **syntactic sugar** over JavaScript's existing prototype-based inheritance. While classes provide a more familiar syntax for object-oriented programming (OOP), they still rely on **prototypes** under the hood.
- An ES6 class is essentially a function, and its instances inherit from the class's prototype.

  **Example**:
  ```javascript
  class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }

  const dog = new Animal('Dog');
  dog.speak(); // Dog makes a noise.
  console.log(dog.__proto__ === Animal.prototype); // true
  ```

- **Key Points**:
  - The `constructor` method in a class is used to initialize the instance.
  - Methods defined inside the class are added to the prototype of the class, meaning all instances share them.
  - Even though the syntax is cleaner, the inheritance model is still **prototypal** at its core.

---

#### **Implementing Mixins for Multiple Inheritance**



- JavaScript doesn’t natively support **multiple inheritance**, but you can mimic it using **mixins**. A mixin is a pattern that allows objects to share functionality without using inheritance. You can create a function that copies methods from one or more source objects to a target object.

- **Example** of mixins:
  ```javascript
  const canEat = {
    eat() {
      console.log('Eating...');
    }
  };

  const canSleep = {
    sleep() {
      console.log('Sleeping...');
    }
  };

  function applyMixins(target, sources) {
    sources.forEach(source => {
      Object.getOwnPropertyNames(source).forEach(name => {
        target.prototype[name] = source[name];
      });
    });
  }

  class Person {}
  applyMixins(Person, [canEat, canSleep]);

  const person = new Person();
  person.eat();   // Output: Eating...
  person.sleep(); // Output: Sleeping...
  ```

- **How it works**:
  - `applyMixins()` copies properties and methods from the mixin objects (`canEat` and `canSleep`) to the `Person` class’s prototype.
  - This allows `Person` to use methods from multiple objects, mimicking **multiple inheritance**.

---

### Memory Management Interview Answers

---

#### **Common Causes of Memory Leaks**



- **Memory leaks** occur when memory that is no longer needed is not released, leading to a gradual increase in memory usage. In JavaScript, memory leaks can happen for various reasons:

  - **Global Variables**: Accidentally declaring variables globally (without `var`, `let`, or `const`) can cause them to persist throughout the lifetime of the application.
    - **Example**:
      ```javascript
      function foo() {
        globalVar = 'I am global';
      }
      foo();
      console.log(globalVar); // globalVar is still accessible, causing a memory leak.
      ```

  - **Detached DOM Nodes**: When a DOM element is removed from the document but still referenced by JavaScript, it cannot be garbage collected, leading to a memory leak.
    - **Example**:
      ```javascript
      const element = document.getElementById('myElement');
      document.body.removeChild(element); // Removes the element from the DOM.
      // If there’s a lingering reference to the element, it can’t be garbage collected.
      ```

  - **Closures**: Closures that unintentionally keep references to large objects or DOM nodes can prevent those objects from being garbage collected.
    - **Example**:
      ```javascript
      function createFunction() {
        const largeObject = new Array(1000000).fill(0); // large object
        return function() {
          console.log(largeObject);
        };
      }
      const func = createFunction();
      // `largeObject` is kept alive by the closure and cannot be garbage collected.
      ```

  - **Event Listeners**: Not removing event listeners after they are no longer needed can prevent memory from being released.
    - **Example**:
      ```javascript
      const button = document.getElementById('button');
      function handleClick() {
        console.log('Button clicked');
      }
      button.addEventListener('click', handleClick);
      // If event listener is never removed, it can cause a memory leak.
      ```

  - **Timers (setTimeout, setInterval)**: Not clearing timers when they are no longer needed can cause memory to be retained.
    - **Example**:
      ```javascript
      const intervalId = setInterval(() => {
        console.log('Interval running');
      }, 1000);
      // If clearInterval(intervalId) is never called, it will cause a memory leak.
      ```

---

#### **JavaScript Garbage Collection**



- JavaScript uses **automatic garbage collection** to manage memory. The JavaScript engine tracks all objects created during runtime and frees up memory when objects are no longer in use.

  **Key concepts**:
  - **Mark-and-Sweep Algorithm**: This is the most common garbage collection strategy in JavaScript. It works in two main phases:
    **Marking**: The garbage collector marks all objects that are reachable (i.e., objects that are referenced directly or indirectly by other objects).
    **Sweeping**: It then removes objects that are not marked (i.e., those that are unreachable or no longer referenced).

  - **Reachability**: An object is considered reachable if it is referenced by any part of the program, directly or indirectly. Objects that are no longer reachable are considered eligible for garbage collection.

  - **Memory Management Example**:
    ```javascript
    let obj = { name: 'JavaScript' };
    obj = null; // The object is no longer referenced, and can be garbage collected.
    ```

  - **Automatic**: Garbage collection is triggered automatically at certain intervals or when the system is low on memory, though exact timing and behavior can vary across different JavaScript engines (e.g., V8 in Chrome).

  **Important Points**:
  - The process is **automatic** and doesn’t require manual intervention in most cases.
  - However, it’s important for developers to be aware of memory leaks and manage references to objects properly to help the garbage collector free up memory.

---



### Optional Chaining & Advanced Operators

---

#### **Optional Chaining Operator**



- The **Optional Chaining (`?.`) Operator** allows us to access deeply nested properties of an object without having to explicitly check if each level of the object exists, preventing errors like `TypeError: Cannot read property 'x' of undefined`.

  **How it Works**:
  - If the property or method exists, the expression is evaluated normally.
  - If the property or method is `null` or `undefined`, it short-circuits and returns `undefined` instead of throwing an error.

  **Example**:
  ```javascript
  const user = { profile: { name: 'John' } };
  console.log(user?.profile?.name); // 'John'
  console.log(user?.address?.city); // undefined (no error thrown)
  ```

  **Use Case**:
  - The operator is especially useful when dealing with optional or missing properties in nested objects or arrays, such as when fetching data from APIs that may not always return all expected properties.

---

#### **Nullish Coalescing Operator**



- The **Nullish Coalescing (`??`) Operator** is used to return the right-hand operand when the left-hand operand is either `null` or `undefined`. It is often used to provide a fallback value when dealing with potentially missing or uninitialized values.

  **Key Difference from `||`**:
  - The **`??` operator** only checks for `null` or `undefined` and does **not** treat falsy values like `0`, `false`, or `""` as "nullish."
  - The **`||` operator** considers all falsy values (`0`, `false`, `""`, `null`, `undefined`, `NaN`) as false, potentially leading to unintended behavior.

  **Example**:
  ```javascript
  const foo = null;
  console.log(foo ?? 'default'); // 'default' (nullish value)
  
  const bar = 0;
  console.log(bar ?? 42); // 0 (does not consider 0 as nullish)

  // Using OR (||)
  console.log(bar || 42); // 42 (0 is considered falsy here)
  ```

  **Use Case**:
  - The `??` operator is particularly useful when you want to treat `null` and `undefined` as absent values, but still allow other falsy values like `0`, `false`, and empty strings.

---

#### **`in` Operator vs `hasOwnProperty()`**



- The **`in` Operator** checks if a property exists in an object (including properties inherited from the prototype chain).

  **Example**:
  ```javascript
  const obj = { name: 'Alice' };
  console.log('name' in obj); // true
  console.log('toString' in obj); // true (inherited from Object.prototype)
  ```

- **`hasOwnProperty()`** is a method that checks whether a property exists directly on the object, excluding properties that are inherited via the prototype chain.

  **Example**:
  ```javascript
  const obj = { name: 'Alice' };
  console.log(obj.hasOwnProperty('name')); // true
  console.log(obj.hasOwnProperty('toString')); // false
  ```

  **Key Differences**:
  - The **`in` operator** returns `true` if the property exists anywhere in the prototype chain.
  - **`hasOwnProperty()`** only returns `true` if the property is directly present on the object.

---

#### **Temporal Dead Zone in `let` and const`**



- The **Temporal Dead Zone (TDZ)** is the time between the entering of the scope and the initialization of variables declared with `let` or `const`. During this period, the variable cannot be accessed, and attempting to do so will result in a **ReferenceError**.

  **Why does it happen?**
  - Variables declared with `let` or `const` are **hoisted** to the top of their scope but are not initialized until their declaration is reached in the code. Accessing them before initialization results in the TDZ.

  **Example**:
  ```javascript
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  let foo = 'bar';
  ```

  **Best Practice**:
  - Always ensure variables are accessed only after their declaration to avoid the TDZ issue.

---

#### **Labeled Statements Usage**



- **Labeled statements** in JavaScript allow you to assign a label to a block of code (like a loop or a function), which can then be referenced by control flow statements (like `break` or `continue`). They are typically used in conjunction with nested loops to control the flow of execution in a more readable way.

  **Syntax**:
  ```javascript
  outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === 2 && j === 2) {
        break outerLoop; // Breaks out of the outer loop
      }
      console.log(i, j);
    }
  }
  ```

  **Use Case**:
  - Labeled statements are helpful when you have nested loops or complex control flow and want to break out of multiple levels of loops at once. However, they are **rarely used** in practice due to their potential to make code harder to read and maintain.

---
### Miscellaneous

---

#### **Type Coercion in Operations**



- **Type coercion** refers to JavaScript's automatic conversion of one data type to another when performing operations. This can lead to unexpected results, especially when using operators like `+`.

  **Examples**:
  
  - **`[] + []`**:
    - Both arrays are empty, and when the `+` operator is used, JavaScript coerces them to strings, resulting in an empty string.
    - **Result**: `""` (empty string)

    ```javascript
    console.log([] + []); // ""
    ```

  - **`{} + []`**:
    - The **`{}`** is interpreted as a **block of code** (empty block), and the `+ []` is treated as an attempt to coerce the empty array to a number (which is `0`).
    - **Result**: `0` (a number)

    ```javascript
    console.log({} + []); // 0
    ```

    To avoid this confusion, it’s recommended to wrap the object in parentheses:

    ```javascript
    console.log({} + []); // 0
    console.log(({}) + []); // "[object Object]"
    ```

  **Key Takeaway**: JavaScript applies type coercion in ways that can lead to unexpected results, particularly when the operands are complex data types like objects and arrays.

---

#### **Map Key References with Objects**



- In JavaScript, **`Map`** objects allow you to use any type of value as a key, including objects. Unlike regular objects, **`Map`** uses the **object’s reference**, not its value, as the key.

  **Example**:
  ```javascript
  let obj1 = { name: 'Alice' };
  let obj2 = { name: 'Bob' };
  
  let map = new Map();
  map.set(obj1, 'Hello');
  map.set(obj2, 'Hi');

  console.log(map.get(obj1)); // 'Hello'
  console.log(map.get(obj2)); // 'Hi'
  ```

  - **Key Concept**: When using objects as keys in a `Map`, JavaScript stores a reference to the actual object. This means that two different object instances, even if they contain the same data, will be treated as distinct keys.
  
  ```javascript
  let obj3 = { name: 'Alice' };
  console.log(obj1 === obj3); // false, different references
  console.log(map.get(obj3)); // undefined (obj3 is not in the map)
  ```

  **Why this is useful**:
  - **Maps** retain the reference of objects as keys, unlike regular JavaScript objects, where the keys are always coerced to strings.
  - **Maps** provide better performance when dealing with frequent key lookups, especially for non-string keys.

---

#### **Understanding Unexpected Outputs**



- JavaScript’s dynamic typing and implicit type coercion can lead to some surprising behavior. Here are a few examples of unexpected outputs:

  - **Comparing `null` and `undefined`**:
    ```javascript
    console.log(null == undefined); // true
    console.log(null === undefined); // false
    ```

    - `==` compares only values, so `null` and `undefined` are considered equal. However, `===` compares both value and type, so they are not strictly equal.

  - **`NaN` Comparisons**:
    ```javascript
    console.log(NaN == NaN); // false
    console.log(NaN === NaN); // false
    console.log(isNaN(NaN)); // true
    ```

    - `NaN` is not equal to itself, which is an odd and unexpected behavior. The correct way to check if a value is `NaN` is using the `isNaN()` function.

  - **Arithmetic with `+` and Non-Numbers**:
    ```javascript
    console.log([] + []); // ""
    console.log([] + {}); // "[object Object]"
    console.log({} + []); // 0 (unintended behavior due to syntax)
    console.log("5" - 1); // 4 (string coerced to a number)
    ```

    - The `+` operator attempts to concatenate strings, but the result can be surprising when used with arrays or objects.
    - The `-` operator coerces strings into numbers, which can lead to arithmetic even with strings that look like numbers.

  **Key Takeaways**:
  - Be aware of **JavaScript's type coercion** when comparing values or performing arithmetic.
  - **Always use strict equality (`===`)** to avoid unexpected type coercion.
  - Understand that **`NaN` is a special case** and is not equal to itself.
  - Always test expressions carefully to avoid unexpected outputs, especially when using operators with complex data types.

---



## Functions
• [Function Declaration vs Expression vs Constructor](#function-declaration-vs-expression-vs-constructor)    
• [Arrow Functions](#arrow-functions)    
• [Normal Function vs Arrow Function](#normal-function-vs-arrow-function) 
• [Anonymous Functions](#anonymous-functions---use-cases)    
• [Higher-Order Functions](#higher-order-functions)    
• [Callback Functions](#callback-functions) 
• [Pure Functions](#pure-functions-and-side-effects)   
• [Immediately Invoked Function](#immediately-invoked-function-expressions)    

## Inheritance
• [Classical vs Prototypal Inheritance](#classical-vs-prototypal-inheritance)    
• [Inheritance in ES2015 Classes](#inheritance-in-es2015-classes)
• [Inheritance](#Inheritance in JavaScript)
• [ES6 Classes and Prototypal Inheritance](#es6-classes-and-prototypal-inheritance) |
• [Mixins for Inheritance](#implementing-mixins-for-multiple-inheritance) |



































