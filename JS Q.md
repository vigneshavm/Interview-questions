**JavaScript Fundamentals** - [let vs var vs const](#let-and-var-and-const)  • [const with primitive and non primitive](#const-with-primitive-and-non-primitive)  • [Temporal Dead Zone](#temporal-dead-zone-in-let-and-const)    • [use strict Directive](#use-strict-directive)    • [Data Types](#data-types)    • [Symbol](#symbol)    • [null vs undefined vs undeclared](#null-and-undefined-and-undeclared)        • [== vs ===](#loose-equality-vs-strict-equality)   


**Array** • [Create Array](#create-array)  • [JavaScript Array Methods](#javascript-array-methods) • [`slice()` and `splice()`](#slice-and-splice) • [Loop through Arrays](#loop-through-arrays) • [`map()`, `filter()`, and `reduce()`](#map-filter-and-reduce) • [Shallow Copy and Deep Copy`](#shallow-copy-and-deep-copy) • [Map](#map-key-references-with-objects)  
 


**JavaScript Fundamentals Advance** - [ES6 Features](#key-es6-features)   -[Arrow Functions](#Arrow-Functions) • [Promises](#Promises)
• [Async Await](#Async-Await) • [async await vs Promises](#async-await-vs-Promises) • [Optional Chaining (`?.`)](#optional-chaining-operator)    • [Nullish Coalescing (`??`)](#nullish-coalescing-operator) • [Labeled Statements](#labeled-statements-usage)   - [Iterator](#Iterator) - [Generator function](#Generator-function)


**Scope and `this`** - [Scope](#scope)    • [Global, Function, and Block Scope](#global-and-function-and-block-scope)    • [Lexical Scoping](#Lexical-Scoping)   • [THIS Keyword Behavior](#this-keyword-behavior)  • [new Keyword](#new-keyword)  • [Memory Leaks](#common-causes-of-memory-leaks) • [Memoization Techniques](#memoization-techniques) 

**Events** - [Event Propagation](#event-propagation)    • [Event Listeners](#event-listeners)     • [`event.preventDefault()` vs `event.stopPropagation()`](#preventdefault-vs-stoppropagation)      • [Event Capturing vs Event Bubbling vs Event Delegation](#Event-Capturing-vs-Event-Bubbling-vs-Event-Delegation)  

**Functions** - [Declaration vs Expression vs Constructor](#function-declaration-vs-expression-vs-constructor)    • [Functions](#functions)    • [Closures](#closures)      • [Currying](#currying-in-javascript)       • [Hoisting](#hoisting)   • [`Call()`, `Apply()`, and `Bind()`](#call-and-apply-and-bind-methods)  • [Debounce and Throttle Fn](#debounce-and-throttle-functions)  • [Default Parameters](#default-parameters)    • [Constructor Function](#constructor-function)      

**Asynchronous JavaScript** - [Sync vs Async Fn](#synchronous-vs-asynchronous-functions)    • [Async Errors](#handling-async-errors)    • [setTimeout vs setImmediate vs process.nextTick()](#settimeout-and-setimmediate-and-processnexttick)    • [Event Loop & Call Stack](#event-loop--call-stack)      • [Garbage Collection](#javascript-garbage-collection)    • [Extend Built-in Objects](#extending-built-in-objects)  


**Objects and Classes** • [Prototypes](#understanding-__proto__-and-prototypes)  - [Mutable vs Immutable Objects](#mutable-vs-immutable-objects)    • [Object.assign() vs Spread Operator](#objectassign-vs-spread-operator)    • [Object.create() and Prototype Chains](#object-create-and-prototype-chains)    • [Object.freeze / seal / preventExtensions](#objectfreeze-and-seal-and-preventextensions)    • [Static Class Members](#static-class-members)    • [Getters and Setters](#getters-and-setters)    • [Inheritance](#inheritance)    • [Usage of `super()`](#usage-of-super-in-classes)     • [in Operator vs hasOwnProperty()](#in-operator-vs-hasownproperty)   


**CSS and DOM Manipulation** - [innerHTML vs textContent](#innerhtml-vs-textcontent)    • [CSS Manipulation](#css-manipulation)  


**Modules and Imports** - [Js Modules (import/export)](#javascript-modules-importexport)    • [CommonJS vs ES Modules](#commonjs-vs-es-modules)  
  


**Browser APIs** - [Cookies vs sessionStorage vs localStorage](#cookies-and-sessionStorage-and-localStorage)    • [Window vs Document](#window-vs-document)    • [window.history API](#using-window-history-api)    • [Web Workers](#web-workers)    • [WebSocket API](#websocket-api)  

**Error Handling** - [Custom Error](#custom-error)    • [Unexpected Outputs](#understanding-unexpected-outputs)  - [Web Communication Protocols](#Web-Communication-Protocols)






## **let and var and const**




In JavaScript, `var`, `let`, and `const` are used to declare variables, but they differ in **scope**, **hoisting**, and **mutability**.

---

### 1. **`var`**:

* Function-scoped.
* Variables declared with `var` are hoisted to the top of their function, but initialized as `undefined`.
* Re-declaration are Allowed within the same scope.
* Considered outdated; avoid using in modern code.

```js
function example() {
  console.log(a); // undefined
  var a = 10;
}
```

---

### 2. **`let`**:

* Block-scoped (`{}`).
* Hoisted but not initialized; accessing before declaration causes a ReferenceError (temporal dead zone).
* Re-declaration are Not allowed in the same scope.
* Preferred for variables that change value.

```js
{
  let x = 5;
  x = 10; // OK
}
```

---

### 3. **`const`**:

* Block-scoped.
* Same as `let` — hoisted but in temporal dead zone.
* Re-declaration areNot allowed.
* Re-assignment are Not allowed. However, for objects/arrays, their contents **can** be modified.

```js
const y = 20;
y = 30; // ❌ Error

const obj = { name: "Alice" };
obj.name = "Bob"; // ✅ Allowed
```

> In modern JavaScript (ES6+), prefer `let` and `const` over `var`. Use `const` by default, and `let` only when you know the value will change.


| **Keyword** | **Scope**              | **Reassignment Allowed** | **Hoisted**                  | **Common Use Case**                                  | **Example Behavior**                                 |
|-------------|------------------------|---------------------------|------------------------------|-------------------------------------------------------|------------------------------------------------------|
| `var`       | Function/global scope  |  Yes                    |  Yes (initialized as `undefined`) | Legacy code, but prone to scope-related bugs          | `console.log(y)` outside block prints **20**         |
| `let`       | Block-scoped           |  Yes                    | ⚠️ Yes (but not initialized)   | Mutable variables within a specific block             | `console.log(x)` outside block gives **ReferenceError** |
| `const`     | Block-scoped           |  No                     | ⚠️ Yes (but not initialized)   | Constants — values that shouldn’t change              | `z = 40` gives **TypeError**                         |




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


## **const with primitive and non-primitive** 


---

###  **1. `const` with Primitive Types**

Primitive types include:
`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`

When you declare a **primitive** with `const`, the **value cannot be changed**.

For primitive values, they are stored directly in the variable.
So with const, you can't change or reassign them — they behave as immutable.



```js
const age = 30;
age = 35; //  Error: Assignment to constant variable.
```

---

###  **2. `const` with Non-Primitive Types**

Non-primitive types include:
`object`, `array`, `function`, etc.

For non-primitive values , the variable holds a reference to the data. 
Const locks that reference, meaning I can't assign a new object or array to it. 
However, I can still modify the contents of the object or array because the reference remains unchanged.

With non-primitives, the **reference** is constant — meaning the variable always points to the same object/array/function — **but the contents can be modified.**

#### Example with Object:

```js
const user = { name: "Alice", age: 25 };
user.age = 26;         //  Allowed
user.name = "Bob";     //  Allowed

user = { name: "Eve" }; //  Error: Assignment to constant variable.
```

#### Example with Array:

```js
const numbers = [1, 2, 3];
numbers.push(4);     //  Allowed
numbers[0] = 100;    //  Allowed

numbers = [5, 6];    //  Error: Assignment to constant variable.
```

---

### 🧠 Summary

| `const` with...              | Can change value?  | Can reassign variable? |
| ---------------------------- | ------------------ | ---------------------- |
| Primitive                    |  No               |  No                   |
| Non-primitive (object/array) |  Yes (internally) |  No                   |



## **Temporal Dead Zone in `let` and const`**



The Temporal Dead Zone happens when we declare variables using `let` or `const`.  

Even though these variables are technically **hoisted** to the top of their scope — like a function or block — **they aren’t initialized right away**.

There’s a small period between when the scope starts and when the variable is actually declared in the code.  

During this time, **if we try to access the variable, JavaScript throws a `ReferenceError`** because it hasn’t been initialized yet.

Here's a quick example:

```javascript
console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
let foo = 'bar';
```

In this case, the variable `foo` exists in memory but is **uninitialized** until the `let foo = 'bar'` line is executed.  
If we try to use it before that, we fall into the Temporal Dead Zone.

**Why does it happen?**  
It’s designed this way to **prevent bugs** — so developers can't accidentally use variables before they're ready.

**Best practice:**  
I always make sure to **declare variables at the top** of their scope and **only use them after they are declared**, so I don't run into TDZ issues.

---



## **use strict Directive**
`'use strict'` is a special directive in JavaScript
That we can add at the top of our script or inside a function.  
It tells JavaScript to **run in strict mode**, which  follow  **stricter rules** for write our code.
In strict mode, **JavaScript catches common mistakes** that normally be ignored. 

For example, if I accidentally use a variable without declaring it first, it would throw an error instead of silently creating a global variable.

Here’s a small example:

```javascript
'use strict';

x = 5; // ReferenceError: x is not defined
```

Without strict mode, `x` would automatically become a global variable, which can cause problems in big applications.  
But with `'use strict'`, JavaScript **forces us to declare variables properly** using `let`, `const`, or `var`, and helps avoid these kinds of bugs.

**In short:**  
Strict mode makes our code **safer**, **cleaner**, and **easier to debug**.

---
## **Data Types**
JavaScript has several data types that can be classified as primitive types and object types.
- **Primitive Types**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.
- **Object Types**: `object`, `array`, `function`, and others.

| Category         | Type Name | `typeof` Result                    |
| ---------------- | --------- | ---------------------------------- |
| **Primitive**    | string    | `"string"`                         |
|                  | number    | `"number"`                         |
|                  | boolean   | `"boolean"`                        |
|                  | null      | `"object"` ❗                       |
|                  | undefined | `"undefined"`                      |
|                  | symbol    | `"symbol"`                         |
|                  | bigint    | `"bigint"`                         |
| **Object-based** | object    | `"object"`                         |
|                  | array     | `"object"` (use `Array.isArray()`) |
|                  | function  | `"function"`                       |



---

## **Symbol**
A `Symbol` is a unique and immutable primitive value.
Symbols are often used as keys for object properties to avoid property name collisions.

**Example:**
```javascript
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false (each Symbol is unique)

```javascript
const id = Symbol("userId");

const user = {
  name: "Alice",
  [id]: 12345
};

console.log(user.name);    // Alice
console.log(user[id]);     // 12345
console.log(user["userId"]); // undefined
```

---


## **null and undefined and undeclared**
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



## **Loose Equality Vs Strict Equality**


That == tries to convert the values to the same type before comparing, 
but === checks both value and type exactly.

- **`==` (Loose Equality)**: Compares values for equality but performs type coercion. This can lead to unexpected results.
- **`===` (Strict Equality)**: Compares both value and type, so no type conversion is done.


Type coercion is the process where JavaScript automatically converts values from one data type to another when doing operations — especially comparisons or arithmetic.

**Example:**
---


**Strict Equality (`===`) – No Type Coercion**

| Expression           | Result | Explanation                             |
| -------------------- | ------ | --------------------------------------- |
| `[1] === true`       | false  | Array is object type, `true` is boolean |
| `[] === false`       | false  | `[]` is object, `false` is boolean      |
| `null === undefined` | false  | Different types (`null` ≠ `undefined`)  |
| `false === '0'`      | false  | Boolean vs string                       |
| `0 === '0'`          | false  | Number vs string                        |


**Abstract Equality (`==`) – Allows Type Coercion**

| Expression          | Result | Explanation                                  |
| ------------------- | ------ | -------------------------------------------- |
| `0 == '0'`          | true   | `'0'` coerces to number → `0 == 0`           |
| `false == '0'`      | true   | `false` → `0`, `'0'` → `0` → `0 == 0`        |
| `null == undefined` | true   | Exception case — loosely equal               |
| `[] == false`       | true   | `[]` → `''` → `0`, `false` → `0` → `0 == 0`  |
| `[1] == true`       | true   | `[1]` → `'1'` → `1`, `true` → `1` → `1 == 1` |

**Reference Equality – Arrays & Objects**

| Expression   | Result | Explanation                                           |
| ------------ | ------ | ----------------------------------------------------- |
| `[] == []`   | false  | Two different array instances                         |
| `{}` == `{}` | false  | Two different object instances                        |
| `[] == {}`   | false  | Different types: coerces to `'' == '[object Object]'` |
| `[] === []`    | false  | Different array references                           |
| `{}` === `{}`  | false  | Different object references                          |
| `[] === {}`    | false  | Array ≠ Object → different internal \[\[Class]] types  |





---




## Key ES6 Features

| 🔧 **Feature**           |  **Example Code**                                                                                  | 📝 **Description**                                         |
|-------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| **`let` & `const`**     | `let count = 0;` <br> `const name = "React";`                                                        | `let` = reassignable, `const` = read-only                 |
| [Arrow Functions](#arrow-functions)    | `const add = (a, b) => a + b;`                                                                        | Concise function syntax with `this` binding               |
| **Template Literals**   | `` `Hello, ${name}!` ``                                                                               | Multi-line strings & expressions inside `` `${}` ``        |
| **Default Parameters**  | `function greet(name = "Guest") { return "Hi " + name; }`                                             | Provides fallback values for missing args                |
| [Destructuring](#destructuring)      | `const { title, year } = movie;` <br> `const [first, second] = items;`                                | Unpacks values from objects/arrays                       |
| [Spread and Rest operator](#spread-operator)  | `const newArr = [...arr1, ...arr2];` <br> `function logAll(...args) {}`                               | Spread: expands, Rest: collects values                   |
| **[Promises](#Promises)  /  [async/await](#async-await)** | `const fetchData = async () => { const res = await fetch(url); };`                                 | Handle async operations cleanly                          |
| **Modules (import/export)** | `import React from 'react';` <br> `export const add = (a, b) => a + b;`                            | Use reusable code across files                           |
| **Optional Chaining (`?.`)** | `const username = user?.profile?.name;`                                                          | Avoid errors when accessing nested properties             |




**ES7 (2016)**

| Feature                      | Description                                 |
| ---------------------------- | ------------------------------------------- |
| `Array.prototype.includes()` | Check if value exists: `[1, 2].includes(1)` |
| Exponentiation operator      | `2 ** 3` instead of `Math.pow(2, 3)`        |
| `Object.values()`, `Object.entries()` | Easy object iteration          |
| `String.prototype.padStart/padEnd`    | Padding strings                |
| `async/await`                         | Async functions using promises |
| Rest/Spread in objects | `{...obj}`                               |
| Asynchronous iteration | `for await...of` with `async generators` |
| `Array.prototype.flat()`    | Flatten nested arrays             |
| `Object.fromEntries()`      | Convert key-value pairs to object |
| `trimStart()` / `trimEnd()` | String trimming                   |
| `Optional catch binding`    | Catch block without param         |
| `Nullish coalescing` (`??`) | Fallback only if `null` or `undefined`     |
| `Optional chaining` (`?.`)  | Safe nested access                         |
| Dynamic `import()`          | Lazy load modules                          |
| `Promise.allSettled()`      | Wait for all promises (fulfilled/rejected) |
| Logical assignment operators (`&&=`, \` |                                 | =`, `??=\`) | Concise logic + assignment |
| `String.replaceAll()`                   | Replace all matches in a string |             |                            |
| Numeric separators                      | `1_000_000` for readability     |             |                            |
| Top-level `await`              | Await outside async function (in modules) |
| `.at()` method                 | Negative indexing in arrays/strings       |
| `Array findLast/findLastIndex` | Better reverse search                     |
| `Error.cause`                  | Attach original error to new one          |
| `Object.hasOwn()`              | Better alternative to `hasOwnProperty()`  |






---

## **Promises**


 A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation.
 Promises allow us to handle asynchronous operations in a more manageable way than using callbacks (callback hell).

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

**Promise States**


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

- **Pros**:
  - **Avoid Callback Hell**: Promises allow chaining with `.then()` and `.catch()`, which makes the code more readable than nested callbacks.
  - **Improved error handling**: With promises, errors can be caught at any point in the chain using `.catch()`.
  - **Better flow control**: Promises make it easier to manage asynchronous operations and follow a linear flow.

- **Cons**:
  - **Chaining can become complex**: Deep chaining can lead to code that's difficult to maintain.
  - **Not always intuitive**: Debugging and understanding promises can be tricky, especially when multiple promises are involved.
  - **Older browser support**: Older browsers may not support promises natively without polyfills.

---


- **Promise Type**:

| Method               | Behavior |
|----------------------|----------|
| `Promise.all`         | Wait for **all to resolve**, or **rejects fast** |
| `Promise.allSettled`  | Wait for **all to settle** |
| `Promise.race`        | Resolve/reject with **first settled** |
| `Promise.any`         | Resolve with **first fulfilled**, or `AggregateError` |
| `Promise.resolve`     | Wrap any value into a **fulfilled** promise |
| `Promise.reject`      | Create a **rejected** promise immediately |



#### **1. `Promise.all([...])`**
- **Waits for all promises to resolve**.
- Rejects immediately if **any** promise rejects.

```js
Promise.all([p1, p2, p3])
  .then(results => console.log(results))  // [val1, val2, val3]
  .catch(err => console.error(err));      // If any reject, catches first
```

---

#### **2. `Promise.allSettled([...])`**
- Waits for **all promises to settle** (either fulfilled or rejected).
- Never rejects.

```js
Promise.allSettled([p1, p2])
  .then(results => {
    results.forEach(r => console.log(r.status)); // 'fulfilled' or 'rejected'
  });
```

---

#### **3. `Promise.race([...])`**
- Resolves or rejects **as soon as the first promise settles**.
- Useful for timeouts or competitive async tasks.

```js
Promise.race([slowPromise, fastPromise])
  .then(result => console.log(result))
  .catch(err => console.error(err));
```

---

#### **4. `Promise.any([...])`**
- Resolves when **any one promise fulfills**.
- If **all reject**, it rejects with `AggregateError`.

```js
Promise.any([p1, p2, p3])
  .then(value => console.log(value))
  .catch(error => console.error(error)); // AggregateError if all reject
```

---

#### **5. `Promise.resolve(value)`**
- Converts a value (even non-promise) into a resolved promise.

```js
Promise.resolve(42).then(console.log); // 42
```

---

#### **6. `Promise.reject(error)`**
- Returns a **rejected** promise.

```js
Promise.reject('Error').catch(console.error); // Error
```


---


## **Async Await**

- `async/await` makes asynchronous code look more like synchronous code and makes it easier to read and debug.
- **`async`** is a keyword used to define a function as asynchronous,
-  which means it will always return a promise. 
-  Inside an `async` function, `await` keyword to pause the execution of the function until the promise resolves or rejects.
  

**Example**:
```javascript
async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  let data = await response.json();
  console.log(data);
}

fetchData();
```


---


## **async await vs Promises**

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
| Readability    |  More chaining              |  Cleaner, like sync code |
| Error Handling | `.catch()`                   | `try...catch`             |

---

### **Handling Async Errors**


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

---

## **Optional Chaining Operator**

 
- The **Optional Chaining (`?.`) Operator** allows us to access deeply nested properties of an object without having to explicitly check 
- If each level of the object exists, preventing errors like `TypeError: Cannot read property 'x' of undefined`.


**Use Case**:
  - The operator is especially useful when dealing with optional or missing properties in nested objects or arrays, 
  such as when fetching data from APIs that may not always return all expected properties.

  **How it Works**:
  - If the property or method exists, the expression is evaluated normally.
  - If the property or method is `null` or `undefined`, it short-circuits and returns `undefined` instead of throwing an error.

  **Example**:
  ```javascript
  const user = { profile: { name: 'John' } };
  console.log(user?.profile?.name); // 'John'
  console.log(user?.address?.city); // undefined (no error thrown)
  ```

 

---

## **Nullish Coalescing Operator**



- The **Nullish Coalescing (`??`) Operator** is used to return the right-hand operand when the left-hand operand is either `null` or `undefined`. 
- It is often used to provide a fallback value when dealing with potentially missing or uninitialized values.

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

## **`in` Operator vs `hasOwnProperty()`**



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




## **Labeled Statements Usage**



- **Labeled statements** in JavaScript allow you to assign a label to a block of code (like a loop or a function), 
- which can then be referenced by control flow statements (like `break` or `continue`). 
- They are typically used in conjunction with nested loops to control the flow of execution in a more readable way.

**Use Case**:
  - Labeled statements are helpful when you have nested loops or complex control flow and want to break out of multiple levels of loops at once. However, they are **rarely used** in practice due to their potential to make code harder to read and maintain.


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

#### 🔁 **Event Loop**
- The event loop is what allows JavaScript — even though it's single-threaded — to perform asynchronous operations without blocking the main thread (handling timers, HTTP requests, or user interactions).
- The **event loop** continuously checks the call stack and callback queue (or task/microtask queues).
 - The event loop constantly checking if the call stack is empty, and then pushing callbacks or microtasks into the stack to execute.
 - This allows JavaScript to stay non-blocking and reactive, even though it runs in a single thread.


#### 🧠 **Call Stack**

- A **LIFO (Last In, First Out)** stack that keeps track of function calls.
- When a function is invoked, it’s **pushed onto the stack**.
- When it finishes execution, it’s **popped off** the stack.
- If the stack is blocked (e.g., infinite loop or heavy computation), **no other code executes**.

```javascript
function greet() {
  console.log("Hello");
}
greet();  // pushed to stack → executed → popped from stack
```

---



#### 🕳️ **Callback Queue vs Microtask Queue**

- **Callback Queue**: `setTimeout`, `setInterval`, DOM events
- **Microtask Queue**: `Promise.then`, `async/await`, `queueMicrotask`
- Microtasks are **executed first**, **right after the current task**, before any queued callbacks.

---

#### 📊 **Example Execution Order**

```javascript
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
```

📌 Output:
```
1
4
3   ← microtask
2   ← macrotask (callback queue)
```

---

#### 💡 **Why It Matters**

- Helps avoid **race conditions**, UI freeze, and unexpected behavior.
- Crucial for understanding how **async code**, **Promises**, and **timers** work together.
- Used to explain why `setTimeout(..., 0)` doesn’t run immediately.

---













## **JavaScript Modules (`import/export`)**

Modules **split** code into reusable files.

| Module System       | Synchronous or Asynchronous?  | Explanation                                                                                                                                                                                               |
| ------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `require()`         | ✅ **Synchronous**             | Executes immediately when called. Loads modules **at runtime**, blocking until loaded.                                                                                                                    |
| `import` / `export` | ⚠️ **Asynchronous (sort of)** | ES Modules are **loaded asynchronously**, but the `import` statement itself is **hoisted and static**. They must be declared **at the top-level** and cannot be wrapped inside functions or conditionals. |


**Exporting (`math.js`)**  
```js
export function add(a, b) {
  return a + b;
}
```

**Importing (`app.js`)**  
```js
import { add } from "./math.js";
console.log(add(2, 3)); //  5
```

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



## **Hoisting**

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



Sure! Here are some **JavaScript hoisting-based code snippet questions**, tailored for interviews. These test your understanding of how **variables** and **functions** are hoisted and initialized:

---



```js
console.log(a);
var a = 5;
```

> **Answer:** `undefined`
> Because `var a` is hoisted but **not initialized**, so the variable exists at the top but has the value `undefined`.

---



```js
console.log(b);
let b = 10;
```

> **Answer:** ❌ `ReferenceError: Cannot access 'b' before initialization`
> `let` is hoisted but placed in the **Temporal Dead Zone (TDZ)** until its declaration is evaluated.

---



```js
sayHi();

function sayHi() {
  console.log("Hi!");
}
```

> **Answer:** ✅ `"Hi!"`
> Function declarations are **fully hoisted** — both name and body.

---



```js
sayHello();

var sayHello = function () {
  console.log("Hello!");
};
```

> **Answer:** ❌ `TypeError: sayHello is not a function`
> Only the `var sayHello` declaration is hoisted (not the function assignment). So it's `undefined` at runtime.

---



```js
function test() {
  console.log(x);
  var x = 2;
}
test();
```

> **Answer:** `undefined`
> Inside the function, `var x` is hoisted to the top, but not initialized until the assignment.

---



```js
console.log(typeof greet);
function greet() {
  return "Hello";
}
```

> **Answer:** `"function"`
> Because the function `greet` is fully hoisted before `typeof` is evaluated.

---



```js
function foo() {
  console.log(bar);
  var bar = 1;
  console.log(bar);
}
foo();
```

> **Answer:**

```
undefined
1
```


Great! Let's go deeper with **complex hoisting questions** that cover a mix of `var`, `let`, `const`, functions, shadowing, and scope — perfect for **10+ years JavaScript interviews**.

---

###  **Function + Variable Hoisting Combo**

```js
var x = 21;

var fun = function () {
  console.log(x);
  var x = 20;
};

fun();
```

> **Answer:** `undefined`
> Inside the function:

```js
function () {
  var x;          // hoisted
  console.log(x); // undefined
  x = 20;
}
```

---

###  **Let + Block Scope**

```js
let a = 10;

{
  console.log(a);
  let a = 20;
}
```

> **Answer:** `ReferenceError: Cannot access 'a' before initialization`
> Because `let a` inside the block is hoisted but in TDZ.

---

###  **Function Declaration vs Function Expression**

```js
foo(); // ?

function foo() {
  console.log("Function Declaration");
}

bar(); // ?

var bar = function () {
  console.log("Function Expression");
};
```

> **Answer:**

```
Function Declaration  
TypeError: bar is not a function
```

> Because `foo` is hoisted with its body.
> `bar` is hoisted as `undefined`.

---

###  **IIFE & Hoisting**

```js
(function () {
  console.log(typeof myVar);
  var myVar = "Hoisted?";
})();
```

> **Answer:** `undefined`
> `myVar` is hoisted inside the IIFE.

---

###  **let in Loop (Closure Trap)**

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

> **Answer:** `3 3 3`
> Because `var` is function-scoped — all callbacks reference the same `i`.

✅ **Follow-up variant (fix using `let`):**

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

> **Output:** `0 1 2` (each loop iteration has its own `i` binding due to `let` block scope)

---

###  **Shadowing With Function and Variable**

```js
var a = 1;

function test() {
  console.log(a);
  function a() {}
}

test();
```

> **Answer:** `function a() {}`
> Here, `function a()` is hoisted above the `console.log(a)`.

---

### **const Hoisting in TDZ**

```js
console.log(x);
const x = 5;
```

> **Answer:** ❌ `ReferenceError: Cannot access 'x' before initialization`
> `const` is hoisted but in the Temporal Dead Zone.

---

###  **Default Parameters + Hoisting**

```js
let x = 10;

function demo(val = x) {
  let x = 20;
  console.log(val);
}

demo();
```

> **Answer:** ❌ `ReferenceError: Cannot access 'x' before initialization`
> Because the `x` inside the function is in TDZ **even for default param evaluation**.

---

###  **Class Hoisting**

```js
const obj = new User();

class User {
  constructor() {
    console.log("User created");
  }
}
```

> **Answer:** ❌ `ReferenceError: Cannot access 'User' before initialization`
> Classes are **not hoisted** like functions.

---

###  **Multiple `var` Hoisting**

```js
function test() {
  console.log(a);
  var a = 1;
  if (true) {
    var a = 2;
    console.log(a);
  }
  console.log(a);
}
test();
```

> **Answer:**

```
undefined
2
2
```

> Because `var a` is function-scoped. Redeclaration inside `if` block doesn't create a new scope.



---

#### **Lexical Scoping**
- Lexical scoping means scope of a variable is determined by its position in the source code.
- Inner functions have access to variables defined in their outer (parent) scopes.
- This behavior is fixed at the time of writing code, not during execution.
- JavaScript uses lexical scoping to resolve variable references.

---

#### **Example:**
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
---

- Scope in JavaScript is all about where variables can be accessed or modified in code
- For instance, if declare a variable inside a function, it won’t be accessible outside of that - function. 
  But if it’s declared globally, it’s accessible throughout the entire program

#### **Global and Function and Block Scope**

- **Global Scope**: When a variable is declared outside of any function or block, it can be accessed anywhere in your code.
- **Function Scope**: When a variable is declared inside a function, it’s only accessible within that function.
- **Block Scope**: Variables declared inside blocks (like `if` statements or loops) using `let` or `const` are only accessible within that block."

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



### Lexical Scoping

- **Definition**: Lexical scoping refers to how JavaScript determines the scope of variables based on where they are declared in the code, not where they are executed.
  
- **Function Scope**: A function’s scope is determined by where the function is defined, not where it is called.

- **Nested Functions**: Inner functions can access variables from their outer functions, even after the outer function has finished executing.

- **Closure Creation**: Lexical scoping allows for closures, where an inner function "remembers" the variables of its outer function even after the outer function has returned.

- **Example**:

  ```javascript
  function outer() {
    let outerVar = 'I am in the outer function';
    
    function inner() {
      console.log(outerVar); // 'outerVar' is accessible here
    }
    
    inner(); // Logs: 'I am in the outer function'
  }

  outer();
  ```

- **Why it’s important**: It enables the creation of closures, which are essential for encapsulating state and creating private variables.






### **Mutable vs Immutable Objects**

- **Mutable Objects**: These are objects that can be modified after creation. For example, arrays and objects are mutable by default in JavaScript. You can add, remove, or change their properties at any time.

    **Example**: 
    ```javascript
    let arr = [1, 2, 3];
    arr.push(4);  // The array is mutated
    console.log(arr);  // Output: [1, 2, 3, 4]
    ```

- **Immutable Objects**: These objects cannot be modified once they are created. In JavaScript, you can enforce immutability using methods like `Object.freeze()`. Once frozen, properties of the object cannot be changed, added, or deleted.

    **Example**:
    ```javascript
    const person = Object.freeze({ name: 'John' });
    person.name = 'Jane';  // Error: Cannot assign to read only property 'name'
    ```

#### **Table View:**

| **Type**            | **Mutable Objects**                                        | **Immutable Objects**                                     |
|---------------------|------------------------------------------------------------|-----------------------------------------------------------|
| **Definition**       | Objects that can be modified after creation.               | Objects that cannot be modified after creation.           |
| **Examples**         | Arrays, objects, etc.                                      | Frozen objects using `Object.freeze()`.                   |
| **Modifiable**       | Yes, you can change, add, or remove properties.            | No, properties cannot be changed, added, or removed.      |
| **Example Code**     | ```javascript<br>let arr = [1, 2, 3];<br>arr.push(4);<br>console.log(arr);``` | ```javascript<br>const person = Object.freeze({ name: 'John' });<br>person.name = 'Jane'; // Error``` |
| **When to Use**      | When you need to modify data over time, like adding/removing elements. | When you need to ensure that an object remains unchanged throughout the program. |







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

---
##  Normal Function vs Arrow Function

| Aspect              | Normal Function                                   | Arrow Function                              |
|---------------------|--------------------------------------------------|---------------------------------------------|
| `this` Binding       | Dynamic (`this` depends on call)                 | Lexical (`this` inherits from parent scope) |
| `arguments` Object   |  Available                                      |  Not available                             |
| Constructor Use      |  Yes                                            |  No                                        |
| Hoisting             |  Fully hoisted (if declaration)                |  Not hoisted                               |
| Usage as Methods     |  Recommended                                   | ⚠️ Not ideal for object methods              |

```js
function normalFunc() {
  console.log(this);
  console.log(arguments);
}

const arrowFunc = () => {
  console.log(this);
  // console.log(arguments); //  Error
};
```

---

## **Arrow Functions**


 Arrow functions are a shorter syntax for writing functions in JavaScript, introduced in ES6. and have the key difference of **lexical scoping** for `this`.
 Unlike regular functions, they do not have their own `this`, `arguments`, `super`, or `new.target`.
 They're great for writing concise, readable, and expression-style code, especially in callbacks and array methods.

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


### ✅ **Q1: `this` Binding with Arrow vs Regular Function**

```js
const user = {
  name: "Vignesh",
  greet: function () {
    setTimeout(function () {
      console.log(`Hello, ${this.name}`);
    }, 100);
  }
};

user.greet();
```

> **Output:** `Hello, undefined`
> Because regular function has its own `this` (global or `window` in browser)

✅ **Fix with Arrow Function:**

```js
setTimeout(() => {
  console.log(`Hello, ${this.name}`);
}, 100);
```

> Output: `Hello, Vignesh` – arrow uses lexical `this` from `greet`

---

### ✅ **Q2: Implicit Return Confusion**

```js
const fn = () => 
  { name: "JS" };

console.log(fn());
```

> **Output:** `undefined`
> Because `{}` is interpreted as a block, not an object.

✅ **Fix:**

```js
const fn = () => ({ name: "JS" });
```

---

### ✅ **Q3: Arrow Function in `map()` with `this`**

```js
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}

new Person();
```

> ✅ Output: `1, 2, 3...` – `this` inside arrow function refers to `Person` instance
> Arrow functions don't bind their own `this`, so it uses the constructor context.

---

### ✅ **Q4: Arrow Function as Constructor**

```js
const Person = (name) => {
  this.name = name;
};

const p = new Person("John");
```

> ❌ **Error:** `Person is not a constructor`
> Arrow functions **cannot be used with `new`**, they have no `[[Construct]]`.

---

### ✅ **Q5: Nested Arrow Function Scope**

```js
let length = 4;

function callback() {
  console.log(this.length);
}

const obj = {
  length: 5,
  method: function () {
    arguments[0]();
  }
};

obj.method(callback, 1);
```

> **Output:** `2`
> `arguments[0]()` is called with `arguments` as `this`, and `arguments.length === 2`.

---

### ✅ **Q6: Arrow in Event Listeners**

```js
const button = {
  label: "Click Me",
  onClick: () => {
    console.log(this.label);
  }
};

button.onClick();
```

> **Output:** `undefined`
> `this` inside arrow refers to global context, not `button`.

✅ **Fix:**

```js
onClick: function () {
  console.log(this.label);
}
```

---

### ✅ **Q7: Currying with Arrow Functions**

```js
const add = a => b => c => a + b + c;

console.log(add(1)(2)(3));
```

> ✅ **Output:** `6`
> Arrow functions are great for currying.

---

### ✅ **Q8: `arguments` Object in Arrow Functions**

```js
const fn = () => {
  console.log(arguments);
};

fn(1, 2, 3);
```

> ❌ **Error:** `arguments is not defined`
> Arrow functions do **not have their own `arguments`** object.

✅ **Fix with normal function:**

```js
function fn() {
  console.log(arguments);
}
```

---

### ✅ **Q9: Default Parameters + Arrow**

```js
const greet = (name = "Guest") => `Hello, ${name}`;

console.log(greet());
```

> ✅ **Output:** `Hello, Guest`

---

### ✅ **Q10: Arrow Function Return with `reduce()`**

```js
const nums = [1, 2, 3];

const total = nums.reduce((acc, val) => {
  acc + val;
}, 0);

console.log(total);
```

> ❌ **Output:** `undefined`
> Missing `return` – block arrow function requires explicit `return`.

✅ Fix:

```js
nums.reduce((acc, val) => acc + val, 0);
```

---





----


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

### **Closures**

 - [Closures Drawbacks](#Common-Pitfalls-of-Closures)

- A closure where an inner function has access to variables from its outer function scope(lexical scope), even after the outer function has finished execution.
- In other words, the inner function "remembers" the environment in which it was created.
- Useful for:
  - **Data privacy**
  - **Stateful functions**
  - **Encapsulation**

##### Example: Creating a Counter

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

##### Best Practices

- **Avoid long-lived closures** with large objects.
- **Manually dereference** variables if needed (e.g., `largeArray = null`).
- Be cautious when binding closures to UI elements or persistent states.

---

### ⚠️ **Common Pitfalls of Closures**

- 🔄 **Memory Leaks**: Retained variables can't be garbage-collected.
- 🧩 **Unexpected Retention**: Hidden data may persist longer than needed.
- ⏱ **Async Confusion**: Closures in loops can reference incorrect values.

####  Problematic Async Example

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // Outputs: 3, 3, 3
}
```

##### Fixed with `let`

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


🟢 **Priority Order**:
1. `console.log("Main")` → sync
2. `process.nextTick()` → runs before other microtasks
3. `setImmediate()` → check phase
4. `setTimeout()` → timer phase

 These are methods in Node.js that deal with asynchronous scheduling but differ in when they are executed:

- **`setTimeout()`**: Executes the callback after a specified delay, typically used for scheduling a task in the event loop after a given period.
  ```javascript
  setTimeout(() => console.log('Timeout'), 0);
  ```

- **`setImmediate()`**: 

setImmediate() schedules a callback to run after the current event loop phase completes, specifically during the "check" phase of the Node.js event loop.

It’s commonly used to run code after I/O operations or to defer non-critical logic so that I/O and other high-priority tasks are not blocked.

Use setImmediate() when:

You want to run logic after I/O callbacks (e.g., after fs.readFile).

You want to avoid blocking I/O with heavy computation.

You need to yield to the event loop to let other tasks proceed.

  ```javascript
  setImmediate(() => console.log('Immediate'));

  const fs = require('fs');

fs.readFile('file.txt', () => {
  setImmediate(() => {
    console.log('This runs after I/O events.');
  });
});


  ```

  setImmediate ensures your logic runs after I/O callbacks, so it's great for cleanup, logging, or deferred computations.

- **`process.nextTick()`**: process.nextTick() executes a callback immediately after the current operation completes, but before any I/O events, timers, or setImmediate() callbacks.

It has the highest priority in the Node.js event loop and is ideal when you want to defer execution without waiting for the next tick — for example, to:

  - handle async errors safely,

  - allow the current stack to unwind,

  - or schedule critical logic just after the current call completes.

  ```javascript
  process.nextTick(() => console.log('Next Tick'));

  function doSomething(callback) {
  if (!callback) {
    process.nextTick(() => {
      throw new Error('Callback is required');
    });
  }
}

  ```

  Here, nextTick ensures that the error is thrown after the function exits, allowing the calling code to finish and catch it properly.

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

 - Web Workers allow you to run JavaScript code in the background, on a separate thread, without blocking the main execution thread. 
 - This is especially useful for tasks that involve heavy computation or long-running processes, preventing the UI from freezing.

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

• [Object Destructuring with Defaults](#object-destructuring-with-defaults)  

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

`call`, `apply`, and `bind` are methods that allow you to control the `this` context within functions, 
they all are used to invoke a function with a specific `this` value.

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

- **Memoization** is an optimization technique that involves caching the results of expensive function calls 
- reusing the cached result when the same inputs occur again. 
- It is particularly useful in functions where the output is deterministic and depends on the inputs.

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
  - Ensures that a function is **executed only after a certain amount of time has passed since the last time it was invoked**. It’s useful when you want to prevent a function from being called too frequently (e.g., when typing in a search bar).
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
  - Ensures that a function is **executed at most once in a specified interval**, even if it is triggered multiple times. It is useful for limiting expensive operations like scroll event handlers.
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

"The `this` refers to different things depending on the context:

- **Global Context**: 
  - When you use `this` in the global scope, it refers to the global object. 
  - In the browser, that's the `window` object.

  Example:
  ```javascript
  console.log(this); // In the browser, this refers to the window object
  ```

- **Inside a Function**: 
  When `this` inside a regular function, it refers to the object that called the function. 
  `this` refers to the object that method belongs to.

  Example:
  ```javascript
  const person = {
    name: 'Bob',
    greet: function() {
      console.log(this.name);  // 'this' refers to the person object
    }
  };
  person.greet();  // Output: Bob
  ```

- **Arrow Functions**: Arrow functions don’t have their own `this`. Instead, they inherit `this` from the surrounding context.


 ```javascript
const person = {
  name: 'Alice',
  greet: function () {
    setTimeout(() => {
      console.log(`Hi, I'm ${this.name}`);  // ✅ 'Alice'
    }, 1000);
  }
};

person.greet();       // Hi, I'm Alice
 ```
  

- **Event Handlers**: In event handlers, `this` refers to the element that triggered the event.
  Example:
  ```javascript
  button.addEventListener('click', function() {
    console.log(this);  // 'this' refers to the button element
  });
  ```



---

### 🔴 Original Code (Arrow Function — Not Working)

```js
const person = {
  name: 'Bob',
  greet: () => {
    console.log(this.name);
  }
};
person.greet(); // Output: undefined
```

####  Step-by-Step (Why it doesn't work):

* JavaScript parses the object `person` and its method `greet`.
* `greet` is defined as an **arrow function**.
* Arrow functions do **not have their own `this`**.
* Instead, `this` inside the arrow function comes from the **surrounding lexical scope** (the place where the function is **defined**, not where it is **called**).
* In this case, the arrow function is defined inside the global scope (outside of any object), so `this` refers to the **global object** (`window` in browsers, or `undefined` in strict mode).
* `this.name` becomes `undefined` because `name` doesn't exist on the global object.
* So the output is: `undefined`.

---

###  Corrected Code (Regular Function — Working)

```js
const person = {
  name: 'Bob',
  greet() {
    console.log(this.name);
  }
};
person.greet(); // Output: Bob
```

####  Step-by-Step (Why it works):

* JavaScript creates the object `person`.
* `greet` is defined using a **regular function syntax** (`greet() { ... }`).
* Regular functions get their `this` based on **how they are called**.
* When you call `person.greet()`, JavaScript sets `this` to the `person` object.
* Inside the function, `this.name` becomes `'Bob'`.
* So the output is: `Bob`.

---

###  Summary:

| Feature           | Arrow Function                     | Regular Function                    |
| ----------------- | ---------------------------------- | ----------------------------------- |
| How `this` is set | From lexical scope (where defined) | From calling context (where called) |
| Good for methods? |  No                               |  Yes                               |
| Use case          | Short callbacks, closures          | Object methods, dynamic `this`      |


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




#### **Understanding `__proto__` and Prototypes**


- [Prototype Chaining](#Prototype-Chaining)

- In JavaScript, every object has a **prototype** from which it can inherit properties and methods.
- The **prototype** is itself an object that provides a blueprint for the object, and it is linked to the object via the internal property `[[Prototype]]`.
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


### **Prototype Chaining**

  - Prototype chaining is a mechanism in JavaScript that is used to implement **inheritance**. 
  - Every object in JavaScript has an internal link to another object called its **prototype**. 
  - When trying to access a property or method on an object, JavaScript will:

1. Look for the property on the object itself.
2. If it doesn't find it, it will look up the object's prototype.
3. If it's not there, it moves up the chain—this continues until it reaches `Object.prototype`, the top of the chain.
4. If not found, it returns `undefined`.

---

#### 🔍 Example:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

function Dog(name) {
  Animal.call(this, name); // Inherit properties
}

Dog.prototype = Object.create(Animal.prototype); // Inherit methods
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
  console.log(`${this.name} barks.`);
};

const d = new Dog("Buddy");
d.speak(); // Buddy barks.
```

####  What's happening here:
- `d` → instance of `Dog`
- `Dog.prototype` → inherits from `Animal.prototype`
- `Animal.prototype` → inherits from `Object.prototype`

So the prototype chain is:

```
d → Dog.prototype → Animal.prototype → Object.prototype → null
```

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

## **ES6 Classes and Prototypal Inheritance**

- **Definition**: ES6 (ECMAScript 2015) introduced the `class` keyword to provide a clearer and more familiar syntax for creating objects and handling inheritance, while still using prototypal inheritance under the hood.

- **Syntactic Sugar**: ES6 classes are syntactic sugar over JavaScript's existing prototype-based inheritance.

- **Basic Syntax Example**:

  ```javascript
  class Person {
    constructor(name) {
      this.name = name;
    }

    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }

  const user = new Person("Alice");
  user.greet(); // Hello, my name is Alice
  ```

- **Constructor Method**: A special method called `constructor` is used to initialize object properties.

- **Method Declaration**: Methods inside a class are added to the prototype, not copied per instance.

- **Inheritance with `extends` and `super`**:

  ```javascript
  class Employee extends Person {
    constructor(name, position) {
      super(name); // Calls the parent class constructor
      this.position = position;
    }

    work() {
      console.log(`${this.name} is working as a ${this.position}`);
    }
  }
  ```

- **Key Features**:
  - Supports **inheritance** via `extends`
  - Use `super()` to call the parent class constructor
  - Methods defined in class are **non-enumerable**
  - No hoisting for classes (unlike function declarations)

- **Static Methods**: Defined with `static` keyword and are called on the class itself, not instances.

  ```javascript
  class MathUtil {
    static add(a, b) {
      return a + b;
    }
  }

  MathUtil.add(2, 3); // 5
  ```

- **Private Fields** (ES2022+): Use `#` prefix to declare truly private fields.

  ```javascript
  class BankAccount {
    #balance = 0;

    deposit(amount) {
      this.#balance += amount;
    }

    getBalance() {
      return this.#balance;
    }
  }
  ```

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

## **JavaScript Garbage Collection**



- JavaScript uses **automatic garbage collection** to manage memory.
 The JavaScript engine tracks all objects created during runtime and frees up memory when objects are no longer in use.

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









#### **Map Key References with Objects**

- In JavaScript, **`Map`** objects allow you to use **any type of value as a key, including objects**.
-  Unlike regular objects, **`Map`** uses the **object’s reference**, not its value, as the key.
- **Key Concept**: When using objects as keys in a `Map`, JavaScript stores a reference to the actual object. This means that two different object instances, even if they contain the same data, will be treated as distinct keys.

- **Maps** retain the reference of objects as keys, unlike regular JavaScript objects, where the keys are always coerced to strings.
- **Maps** provide better performance when dealing with frequent key lookups, especially for non-string keys.


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

 
  
  ```javascript
  let obj3 = { name: 'Alice' };
  console.log(obj1 === obj3); // false, different references
  console.log(map.get(obj3)); // undefined (obj3 is not in the map)
  ```

 
---

## **Understanding Unexpected Outputs**



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
• [Inheritance](#Inheritance-in-JavaScript) 
• [ES6 Classes and Prototypal Inheritance](#es6-classes-and-prototypal-inheritance) 
• [Mixins for Inheritance](#implementing-mixins-for-multiple-inheritance) 
• [Prototypal Inheritance](#Prototypal-Inheritance) 



---

### **Prototypal Inheritance**

- **Definition**: Prototypal Inheritance is a JavaScript feature where objects inherit properties and methods from other objects via a prototype chain.
- Every object in JavaScript has an internal link (`[[Prototype]]`), accessible using `__proto__`, which points to its prototype object.
- When a property or method is not found on an object, JavaScript automatically looks **up the prototype chain** to find it.
- It supports **behavior reuse**, reducing memory overhead by sharing methods through the prototype instead of copying them.
- Can be implemented using:
  - Constructor functions + `prototype`
  - `Object.create()` for direct object-to-object inheritance
- **Example** using `Object.create()`:

  ```javascript
  const person = {
    greet() {
      console.log(`Hello, I'm ${this.name}`);
    }
  };

  const user = Object.create(person);
  user.name = "Alice";
  user.greet(); // Output: Hello, I'm Alice
  ```

- Modern ES6 `class` syntax is syntactic sugar over this prototype-based system.
- Enables **dynamic composition** and **flexible inheritance**, unlike rigid class-based OOP.

---

Would you like a follow-up with a **prototype chain diagram** or a comparison with **classical inheritance**?




















## **Event Listeners**

Event listeners are functions that listen for specific events, such as `click`, `keypress`, or `mouseover`, on DOM elements. When the specified event occurs, the listener executes a callback function to handle that event.

In JavaScript, we typically use the `addEventListener()` method to attach an event listener to an element. This method takes two required arguments:
1. The **event type** (such as `click`, `keydown`, `mouseover`), which specifies what kind of event we want to listen for.
2. The **callback function**, which defines the action to be taken when the event occurs.

**Example**:
```javascript
document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});
```

This will display an alert when the user clicks the button with `id="myButton"`. You can also specify options like event bubbling or capturing, and whether the event listener should be passive.

---



### Event Propagation

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




### **Event Capturing vs Event Bubbling vs Event Delegation** 
---

👉 **Event Capturing**  
When an event happens, like a click, it first **travels from the top of the DOM** — starting from `document`, then moving down through `html`, `body`, and other elements — **until it reaches the target element**.  
This is called **capturing phase**.  
By default, browsers don’t handle events during capturing unless we **explicitly** set the `capture` option to `true` while adding the event listener.

> Example:  
```javascript
element.addEventListener('click', handler, true);
```

We mainly use capturing when we need to **catch or intercept** the event **before** it reaches its target.

---

👉 **Event Bubbling**  
After the event reaches the target element, it then **bubbles up** — meaning it moves **back up the DOM tree** — from the target’s parent to its grandparent, and so on, until it reaches the `document`.  
This is called the **bubbling phase**.  
By default, **most events bubble** and that's why normally we don't set anything special.

Bubbling is **very common**. It allows us to put event listeners on parent elements and still react to actions happening inside their children.

> Example:  
```javascript
element.addEventListener('click', handler); // Default is bubbling
```

---

👉 **Event Delegation**  
Event Delegation is a **technique** where instead of attaching separate event listeners to each child element, **we attach just one listener to a parent**, and then use `event.target` inside the handler to figure out which child triggered the event.

It **relies on event bubbling** to work.

This is **very useful** when we have dynamic elements — like list items or buttons added later through JavaScript — because we don't need to add listeners to each new element manually.

> Example:  
```javascript
parent.addEventListener('click', function(event) {
  if (event.target.matches('li')) {
    console.log('Clicked on:', event.target.textContent);
  }
});
```

---

#### 🧠 **Quick Summary:**  
- **Capturing** ➔ Event flows **down** the DOM.  
- **Bubbling** ➔ Event flows **up** the DOM.  
- **Delegation** ➔ Use bubbling to **efficiently manage events** on many child elements using **one parent listener**.

---

#### 🔥 Full Visual of Event Propagation Phases:

```
Document ➔ HTML ➔ BODY ➔ DIV.outer ➔ DIV.inner ➔ [TARGET ELEMENT]
                 ⬇️ (capturing)
               [Target Phase]
                 ⬆️ (bubbling)
DIV.inner ➔ DIV.outer ➔ BODY ➔ HTML ➔ Document
```

- **Capturing** moves **downward** 🔻.
- **Target phase** occurs at the **element clicked** 🎯.
- **Bubbling** moves **upward** 🔺.

---

#### Quick Summary Table:

| Feature           | Capturing                         | Bubbling                          | Delegation                            |
|-------------------|------------------------------------|-----------------------------------|---------------------------------------|
| **Propagation**   | Top ➔ Down (outer to target)       | Bottom ➔ Up (target to outer)     | Uses bubbling to catch child events   |
| **Listener Syntax** | `{ capture: true }` or `true`     | Default (`capture: false`)        | On parent, check `event.target`       |
| **Commonness**    | Rare                               | Very common                       | Very common for dynamic content       |
| **Best Use Case** | Early interception                 | Standard event handling           | Dynamic UI and fewer listeners        |

---

#### 🚀 Important Notes:
- You can **stop propagation** at any phase using `event.stopPropagation()`.
- You can **stop capturing/bubbling** early by controlling listeners.
- Modern apps (React, Angular) internally use **delegation** heavily for performance!

---
### **preventdefault Vs stoppropagation**



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



### **Create Array**

| **Method**             | **Syntax**                             | **Description**                                                                 | **Example Output**                     |
|------------------------|----------------------------------------|----------------------------------------------------------------------------------|----------------------------------------|
| **Array Literal**      | `const arr = [1, 2, 3];`               | Most common and readable way to create arrays.                                  | `[1, 2, 3]`                             |
| **Array Constructor**  | `const arr = new Array(3);`            | Creates an array of 3 empty slots.                                               | `[ <3 empty items> ]`                  |
|                        | `const arr = new Array(1, 2, 3);`      | Creates an array with given elements.                                            | `[1, 2, 3]`                             |
| **Array.of()**         | `const arr = Array.of(3);`             | Creates an array with a single element `3` (not 3 empty slots).                  | `[3]`                                   |
| **Array.from()**       | `const arr = Array.from('abc');`       | Converts iterable or array-like object into an array.                            | `['a', 'b', 'c']`                       |
| **Spread Syntax**      | `const arr = [...'abc'];`              | Spreads iterable elements into an array.                                         | `['a', 'b', 'c']`                       |






### **JavaScript Array Methods**

```js
const arr = [1, 2, 3];
```

| **Method**    | **Description**                                                                 | **Example**                                 | **Result**                                 |
|---------------|----------------------------------------------------------------------------------|----------------------------------------------|---------------------------------------------|
| `push()`      | Adds one or more elements to the **end** of an array.                           | `arr.push(4)`                                | `[1, 2, 3, 4]`                              |
| `pop()`       | Removes the **last** element from an array.                                     | `arr.pop()`                                  | Returns `3`, `arr` becomes `[1, 2]`         |
| `shift()`     | Removes the **first** element from an array.                                    | `arr.shift()`                                | Returns `1`, `arr` becomes `[2, 3]`         |
| `unshift()`   | Adds one or more elements to the **start** of an array.                         | `arr.unshift(0)`                             | `[0, 1, 2, 3]`                              |
| `slice()`     | Returns a **shallow copy** of a portion of an array (doesn't modify original).  | `arr.slice(1, 3)`                            | `[2, 3]` (elements at index 1 and 2)        |
| `splice()`    | Adds/removes elements in-place.                                                 | `arr.splice(1, 2)`                           | Removes 2 elements from index 1; returns `[2, 3]` |
| `concat()`    | Combines arrays or values into a new array.                                     | `arr.concat([4, 5])`                         | `[1, 2, 3, 4, 5]`                           |
| `join()`      | Joins array elements into a string (with optional separator).                   | `arr.join('-')`                              | `"1-2-3"`                                   |
| `indexOf()`   | Returns the **first index** of a value, or `-1` if not found.                   | `arr.indexOf(2)`                             | `1`                                         |

---


### **`slice()` and `splice()`** ### 

| Feature      | `slice()`                       | `splice()`                                |
|--------------|----------------------------------|--------------------------------------------|
| Changes array? |  No                           |  Yes                                      |
| What it does | Copies part of the array         | Removes or adds items                      |
| Example use  | Get part of an array for display | Delete items, insert new items             |


`slice()` – **Take a part of the array** (does **not** change original)

- **Think of it as: "cut a copy"**
- You give a start and end position, and it returns that part as a new array.
- The original array stays the same.

**Example**
```js
const fruits = ['apple', 'banana', 'cherry', 'date'];
const result = fruits.slice(1, 3); 
console.log(result);  // ['banana', 'cherry']
console.log(fruits);  // ['apple', 'banana', 'cherry', 'date']
```
➡️ It **copied** items from index 1 to 2 (not including 3), but didn't change the original.

---

`splice()` – **Change the array** (add or remove items)

- **Think of it as: "cut and change"**
- You can **remove** items, **add** items, or **both**
- The original array **is modified**

**Example**
```js
const fruits = ['apple', 'banana', 'cherry', 'date'];
const removed = fruits.splice(1, 2); 
console.log(removed);  // ['banana', 'cherry']
console.log(fruits);   // ['apple', 'date']
```
➡️ It **removed** 2 items starting from index 1, and the original array got shorter.

**Example with adding items**
```js
const fruits = ['apple', 'date'];
fruits.splice(1, 0, 'banana', 'cherry');
console.log(fruits);  // ['apple', 'banana', 'cherry', 'date']
```
➡️ It **added** 'banana' and 'cherry' at index 1.

---

### **Loop through arrays** ### 


| Loop Type     | Can Modify Original? | Returns New Array? | Break/Continue Allowed? | Simpler Syntax? | Async-Friendly? |
|---------------|----------------------|---------------------|--------------------------|------------------|------------------|
| `for`         |  Yes               |  No              |  Yes                   |  No (manual index) |  Yes            |
| `for...of`    |  Yes               |  No              |  Yes                   |  Yes             |  Yes            |
| `forEach()`   |  Yes               |  No              |  No                   |  Yes             |  No (no `await`) |
| `map()`       |  Yes (if used carefully) |  Yes        |  No                   |  Yes             |  No (but alternatives exist) |

---

| **Use**      || **Use This When You Want To...**                         
|--------------||----------------------------------------------------------
| `for`        || Loop with full control (`break`, `continue`, index)      
| `for...of`   || Loop simply over values (no index needed)                
| `forEach()`  || Loop cleanly with a callback (read-only loop)            
| `map()`      || Transform an array into a new one (return values)        

1. `for` loop

-  Can break/continue
-  Most flexible
- 🔧 Needs manual indexing

```js
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

---

 2. `for...of` loop

-  Simpler than `for`
-  Cannot access index directly unless using `.entries()`

```js
const arr = [1, 2, 3];
for (const value of arr) {
  console.log(value);
}
```

 To access index:
```js
for (const [i, val] of arr.entries()) {
  console.log(i, val);
}
```

---

 3. `forEach()` method

-  Clean syntax
-  Cannot use `break`, `continue`, or `await` inside

```js
const arr = [1, 2, 3];
arr.forEach((value, index) => {
  console.log(index, value);
});
```

---

 4. `map()` method

-  Best when transforming array values
-  Returns a **new array**
-  Cannot break or use `await` directly

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

---



### **`map()` `filter()` and `reduce()`** ### 

---

**Overview Table**

| Method   | Purpose                      | Returns        | Changes Original? | Common Use Case                     |
|----------|------------------------------|----------------|-------------------|--------------------------------------|
| `map()`   | Transform each item          | New array      |  No              | Double numbers, format strings, etc. |
| `filter()`| Keep items that pass a test | New filtered array |  No           | Filter even numbers, non-empty items |
| `reduce()`| Combine all items into one  | A single value |  No              | Sum, average, object building        |

---

**Summary with Simple Analogy**

| Method     | Think of it as...                    |
|------------|--------------------------------------|
| `map()`     | "Change every item"                 |
| `filter()`  | "Keep only what passes"             |
| `reduce()`  | "Boil it all down to one thing"     |

**`map()`**
 — **Transform each item**

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```
 Transforms each element and gives a new array.

---

**`filter()**`
 — **Keep only matching items**

```js
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
```
 Returns only items that pass the condition.

---

**`reduce()`**
 — **Reduce to a single result**

```js
const numbers = [1, 2, 3, 4];
const total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total); // 10
```
 Combines all items into one value (sum, product, etc.).

You can also build objects, arrays, etc., using `reduce()`.


---


## **shallow copy** and **deep copy** ### 



### **1. Shallow Copy**


A **shallow copy** duplicates only the **first level** of an object or array. **Nested objects are still referenced**, not copied.

### Works :

* Copies the **top-level** properties/values.
* If a property is a **primitive** (number, string, boolean), it's copied by **value**.
* If a property is a **reference type** (object, array), it's copied by **reference** (i.e., both original and copy point to the same object).

###  Common methods for shallow copy:

* `Object.assign({}, obj)`
* `{ ...obj }` (spread syntax)
* `Array.prototype.slice()` (for arrays)

---

### **2. Deep Copy**

A **deep copy** duplicates the object and **all nested objects**. The result is **fully independent** from the original.

### Works :

* Recursively copies every level of the object.
* No shared references between the original and the copy.


### ⚠️ Limitations of `JSON.stringify`:

* Doesn’t copy functions, `undefined`, `Symbol`, or circular references.

###  Better method (advanced):

Use a utility like **Lodash**:

```js
import _ from 'lodash';
const deepCopy = _.cloneDeep(original);
```

---

## ⚠️ `const copy = originalArr` (Direct Reference)

### ✅ Behavior:

* No copying is done at all.
* Both `copy` and `originalArr` point to the **same memory**.
* Any change in `copy` directly affects `originalArr`, and vice versa.

### 🧾 Example:

```js
const originalArr = [1, 2, 3];
const copy = originalArr;

copy[0] = 99;

console.log(originalArr[0]); // 99 (original changed!)
```

✅ **Same reference**, not a copy!

---

## 🔁 Shallow Copy

```js
const shallow = [...originalArr];  // OR Array.prototype.slice()
```

### ✅ Behavior:

* Top-level elements are copied.
* **Nested arrays or objects** are **still shared** (referenced).

### 🧾 Example:

```js
const originalArr = [1, 2, [3, 4]];
const shallow = [...originalArr];

shallow[2][0] = 99;

console.log(originalArr[2][0]); // 99 — nested object changed (shared reference)
```

✅ **Partial independence**
❌ **Nested elements are shared**

---

## 🌊 Deep Copy

```js
const deep = JSON.parse(JSON.stringify(originalArr));
```

### ✅ Behavior:

* Entire array, including nested arrays/objects, is **fully copied**.
* No shared references at any level.

### 🧾 Example:

```js
const originalArr = [1, 2, [3, 4]];
const deep = JSON.parse(JSON.stringify(originalArr));

deep[2][0] = 77;

console.log(originalArr[2][0]); // 3 — original remains untouched
```

✅ **Full independence**
✅ **Safe for nested structures**

---

## 🧠 Summary Table

| Method                            | Type             | Shared Nested Data? | Fully Independent? | Memory Reference |
| --------------------------------- | ---------------- | ------------------- | ------------------ | ---------------- |
| `const copy = originalArr`        | Direct Reference | ✅ Yes               | ❌ No               | ✅ Same           |
| `const shallow = [...arr]`        | Shallow Copy     | ✅ Yes               | ❌ No               | ❌ Top-level only |
| `JSON.parse(JSON.stringify(arr))` | Deep Copy        | ❌ No                | ✅ Yes              | ❌ Full copy      |

----------------------
### Example with **Object**

### 🧾 Original:

```js
const originalObj = {
  name: 'Alice',
  address: {
    city: 'New York'
  }
};
```

### 🪞 Shallow Copy:

```js
const shallowObj = { ...originalObj };
shallowObj.name = 'Bob';                   // OK — only affects copy
shallowObj.address.city = 'Los Angeles';   // ❌ Changes both copy and original

console.log(originalObj.address.city); // 'Los Angeles' — shared reference
```

### 🌊 Deep Copy:

```js
const deepObj = JSON.parse(JSON.stringify(originalObj));
deepObj.address.city = 'Chicago';

console.log(originalObj.address.city); // 'Los Angeles' — unchanged!
console.log(deepObj.address.city);     // 'Chicago'
```

---

### Example with **Array**

### 🧾 Original:

```js
const originalArr = [1, 2, [3, 4]];
```

### 🪞 Shallow Copy:

```js
const shallowArr = [...originalArr];
shallowArr[2][0] = 99; // ❌ Changes nested array in original too

console.log(originalArr[2][0]); // 99 — shared nested array
```

### 🌊 Deep Copy:

```js
const deepArr = JSON.parse(JSON.stringify(originalArr));
deepArr[2][0] = 77;

console.log(originalArr[2][0]); // 99 — original stays unchanged
console.log(deepArr[2][0]);     // 77
```

---

## ✅ Summary

| Type   | Method Used                    | Changes Nested Data in Original? |
| ------ | ------------------------------ | -------------------------------- |
| Object | `{ ...obj }` (shallow)         | ✅ Yes                            |
| Object | `JSON.parse(JSON.stringify())` | ❌ No                             |
| Array  | `[...arr]` (shallow)           | ✅ Yes                            |
| Array  | `JSON.parse(JSON.stringify())` | ❌ No                             |

---


#### **recursive functions**
 - Deep copy
Example:
```js
function deepClone(value) {
  if (Array.isArray(value)) {
    return value.map(deepClone);
  } else if (value && typeof value === "object") {
    const result = {};
    for (let key in value) {
      result[key] = deepClone(value[key]);
    }
    return result;
  }
  return value;
}

const deepCopy = deepClone(original);
```





###  **Iterator**



 - Yes. In JavaScript, an **iterator** is an object that follows the **iterator protocol**, meaning it has a `next()` method which returns an object with two properties:

- * `value`: the next value in the sequence,
- * `done`: a boolean indicating if the sequence has ended.

- You typically see iterators behind the scenes in constructs like `for...of`, `spread`, or with arrays, maps, sets, etc.

```js
const arr = [10, 20];
const iter = arr[Symbol.iterator]();

console.log(iter.next()); // { value: 10, done: false }
```

- This is especially useful when you want **custom control over iteration**.

---

###  **Generator function**

 - A **generator function** in JavaScript is declared using `function*` and can pause its execution using the `yield` keyword.

 - It automatically implements both the **iterator** and **iterable** protocols, so you can directly use it in `for...of` loops.

 - The difference is that:

 - * **Iterator** must be created and maintained manually.
 - * **Generator** abstracts that logic; it internally tracks the state and simplifies the code.

```js
function* myGenerator() {
  yield 1;
  yield 2;
}
const gen = myGenerator();
console.log(gen.next()); // { value: 1, done: false }
```

---

###  **Generators - Real-world**



 - Definitely. Generators are great for:

 - * **Lazy evaluation** – yielding values on demand instead of computing everything up front.
 - * **Streaming data** – for example, reading large files line by line.
 - * **Asynchronous flows** – Redux-Saga uses generator functions to manage side effects in a more synchronous-looking way.
 - * **Infinite sequences** – like a Fibonacci series or infinite counters.

Example:

```js
function* idGenerator() {
  let id = 1;
  while (true) yield id++;
}
```

---

### **custom object iterable using a generator**

- I'd define a generator function under the `Symbol.iterator` key of the object:

```js
const obj = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (const num of obj) {
  console.log(num); // 1, 2, 3
}
```

 - This allows the object to be looped using `for...of`, even though it's not a built-in iterable like Array or Set.

---

###  **Generator different from an async function?**

 - A generator yields values **synchronously** using `yield`.
 - In contrast, `async function`s return **promises** and use `await` to pause execution until the promise resolves.
 - There’s also a special type of generator — `async function*` — which allows you to use `for await...of` to process async streams, such as from file systems or network sources.







## **Web Communication Protocols**

### ✅ **Comparison Table (Interview Quick Reference)**

| Protocol  | Direction                        | Persistent?  | Real-Time?             | Use Case                  |
| --------- | -------------------------------- | ------------ | ---------------------- | ------------------------- |
| HTTP      | Request-Response                 | No           | ❌                      | REST APIs, web pages      |
| HTTPS     | Secure HTTP                      | No           | ❌                      | Login, sensitive data     |
| WebSocket | Bi-directional                   | Yes          | ✅                      | Chat, multiplayer games   |
| SSE       | Server → Client                  | Yes          | ✅                      | Live news, logs           |
| gRPC      | Request/Stream                   | Yes (HTTP/2) | ✅                      | Internal services, mobile |
| MQTT      | Pub/Sub                          | Yes          | ✅                      | IoT, sensors              |
| GraphQL   | Request/Response / Subscriptions | Depends      | ✅ (with Subscriptions) | Frontend APIs             |

---


 - Web communication protocols define **how data is transmitted between clients (e.g., browsers) and servers** over a network.
 - Here are the main ones used in modern web development:

---

### 1. **HTTP (Hypertext Transfer Protocol)**

* **Type:** Stateless, request-response
* **Use case:** Most common protocol for REST APIs and web pages
* **Ports:** 80 (HTTP), 443 (HTTPS)
* **Example:**

  ```http
  GET /api/products HTTP/1.1
  ```

🔹 **Interview Tip:**
HTTP is stateless — each request is independent unless you use cookies or tokens.

---

### 2. **HTTPS (Secure HTTP)**

* **HTTP + SSL/TLS** encryption
* Protects data from **MITM (man-in-the-middle)** attacks
* Required for most modern APIs, login flows, and third-party integrations (e.g., Stripe)

---

### 3. **WebSocket**

* **Type:** Full-duplex, persistent connection
* **Use case:** Real-time apps like chat, games, live dashboards
* **Port:** 80 (ws), 443 (wss)
* **Key Feature:** Server can push data to client without polling

```js
const socket = new WebSocket("ws://localhost:3000");
socket.onmessage = e => console.log(e.data);
```

---

### 4. **SSE (Server-Sent Events)**

* **Type:** One-way server → client stream
* **Use case:** Live feeds, notifications
* **Unlike WebSockets**, it doesn't allow client → server communication

```js
const evtSource = new EventSource('/events');
evtSource.onmessage = e => console.log(e.data);
```

---

### 5. **gRPC (Google Remote Procedure Call)**

* **Type:** Binary, based on HTTP/2
* **Use case:** Microservices or backend-to-backend systems needing high performance
* **Data format:** Protocol Buffers (not JSON)

🔹 **Example use:** Real-time communication between Node.js and Go microservices

---

### 6. **MQTT (Message Queuing Telemetry Transport)**

* **Type:** Publish/subscribe protocol
* **Use case:** IoT, low-bandwidth communication
* **Example:** Smart devices, sensors sending updates to a broker

---

### 7. **GraphQL over HTTP/WebSocket**

* **Type:** Query-based API over HTTP or WebSockets
* **Use case:** Flexible API for frontend apps to fetch exactly the data needed
* **Supports:** Subscriptions for real-time updates using WebSocket

---


### 💬 **Q: When would you choose WebSockets over HTTP?**

* When the app needs **low-latency, real-time** updates (e.g., chat apps, stock tickers)
* WebSockets maintain a persistent connection, unlike HTTP which is **stateless and short-lived**





