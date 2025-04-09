### ✅ **JavaScript Fundamentals**
- [`let`, `var`, `const`](#let-var-or-const)
- [Global JavaScript scope](#global-javascript-scope)
- [`'use strict'` Directive](#use-strict-directive-in-javascript)
- [Hoisting](#hoisting)
- [Lexical Scoping](#lexical-scoping)
- [Scope](#scope)
- [Global, Function, and Block Scope](#global-scope-function-scope-and-block-scope)
- [Data Types](#javascript-data-types)
- [Symbol](#data-types--symbol)
- [null, undefined, and undeclared](#null-undefined-or-undeclared)
- [Type Checking](#how-do-you-check-the-data-type-of-a-variable)
- [Equality: `==` vs `===`](#-and-)
- [Mutable vs Immutable Objects](#mutable-vs-immutable-objects)
---

### 💡 **TypeScript**
- [How TypeScript Improves JavaScript](#how-does-typescript-improve-javascript)
- [Interface vs. Type](#interface-vs-type)
- [Generics](#generics)
- [Union Types](#union-types)
- [Type Inference](#type-inference)
- [Mapped Types](#mapped-types)
- [Custom Error](#custom-error)
- [Request/Response Types](#requestresponse-types-with-typescript)
- [Decorators](#decorators)
- [Duck Typing](#duck-typing)
- [Module System & Compiler Options](#module-system--compiler-options)
---

### 🔁 **Functions & Scope**
- [Function Declaration vs Expression vs Constructor](#function-declaration-vs-function-call-vs-constructor-call)
- [Arrow Functions](#arrow-functions)
- [Anonymous Functions](#anonymous-functions---use-cases)
- [Default Parameters](#default-parameters)
- [Higher-Order Functions](#higher-order-functions)
- [Callback Functions](#callback-functions)
- [Closures & Private Variables](#closures)
- [Immediately Invoked Function Expressions (IIFE)](#immediately-invoked-function-expressions)
- [Potential Pitfalls of Closures](#closures-pitfalls)
---

### 🔄 **Asynchronous JavaScript**
- [Synchronous vs Asynchronous](#synchronous-vs-asynchronous-functions)
- [Promises](#promises)
- [Promise States](#promise-states)
- [Pros and Cons of Promises](#pros-and-cons-of-promises)
- [Promise.all()](#promiseall)
- [Promise.all vs Promise.allSettled](#promiseall-vs-promiseallsettled)
- [Async/Await](#asyncawait)
- [Handling Async Errors](#handle-errors-in-asynchronous-operations)
- [Microtask Queue](#microtask-queue)
- [`setTimeout()`, `setImmediate()`, and `process.nextTick()`](#settimeout-setimmediate-and-processnexttick)

---

### 🔄 **Objects & Classes**
- [Constructor Function](#constructor-function)
- [`new` Keyword](#new-keyword)
- [Classical vs Prototypal Inheritance](#classical-inheritance-vs-prototypal-inheritance)
- [Inheritance in ES2015 Classes](#inheritance-in-es2015-classes)
- [Static Class Members](#static-class-members)
- [Extending Built-in Objects](#extending-built-in-javascript-objects)
- [Getters and Setters](#getters-and-setters)
- [Object.freeze / seal / preventExtensions](#objectfreeze), etc.

---

### 🧠 **Design Patterns & Architecture**
- [Introduction to Design Patterns](#introduction-to-design-patterns-and-their-importance)
- [Singleton Pattern](#the-singleton-pattern-explained)
- [Factory Pattern](#understanding-the-factory-pattern-and-its-usage)
- [Module Pattern](#module-pattern-and-encapsulation)
- [Observer Pattern](#the-observer-pattern-and-its-use-cases)
- [Prototype Pattern](#prototype-pattern)
- [Dependency Injection](#dependency-injection)

---

### 📦 **Modules, Storage & Browser APIs**
- [`<script>`, `async`, and `defer`](#script-script-async-and-script-defer)
- [Cookies, sessionStorage, and localStorage](#cookie-sessionstorage-localstorage)
- [Window vs Document](#window-object-vs-document-object)
- [WebSocket API](#the-web-socket-api)
- [Web Workers](#workers)
- [Using `window.history`](#using-the-windowhistory-api)

---

### 🧰 **DOM, Events & UI**
- [Event Listeners](#event-listeners)
- [Event Bubbling vs Capturing](#event-bubbling), [Event Capturing](#event-capturing)
- [`event.preventDefault()` vs `event.stopPropagation()`](#eventpreventdefault-vs-eventstoppropagation)
- [Event Delegation](#event-delegation)
- [innerHTML vs textContent](#innerhtml-vs-textcontent)
- [Manipulating CSS Styles](#css-styles-manipulate)
- [Destructuring](#destructuring-assignment-for-objects-and-arrays)
- [Spread & Rest](#spread-operator), [Rest Parameters](#rest-parameters)

---

### 🧪 **Testing**
- [Types of Testing](#types-of-testing-in-software-development)
- [Unit vs Integration vs E2E](#differences-between-unit-testing-integration-testing-and-end-to-end-testing)
- [Writing Unit Tests](#writing-unit-tests-for-javascript-code)
- [Testing Frameworks](#popular-javascript-testing-frameworks)
- [Mocks and Stubs](#mocks-and-stubs-in-testing)
- [TDD](#understanding-test-driven-development-tdd)
- [Testing Async Code](#testing-asynchronous-code-in-javascript)
---

### 🔒 **Security**
- [XSS and Prevention](#cross-site-scripting-xss-and-prevention)
- [CSRF and Mitigation](#cross-site-request-forgery-csrf-and-mitigation-techniques)
- [SQL Injection](#preventing-sql-injection-vulnerabilities)
- [Handling Sensitive Data](#handling-sensitive-data)
- [CSP](#content-security-policy-csp)
- [Security Headers](#common-security-headers-and-their-purposes)
- [Clickjacking](#preventing-clickjacking-attacks)
- [Input Validation](#input-validation-and-its-importance)

---

### ⚙️ **Performance Optimization**
- [Common Bottlenecks](#common-performance-bottlenecks-in-javascript-applications)
- [DOM Optimization](#optimizing-dom-manipulation-for-better-performance)
- [Lazy Loading](#implementing-lazy-loading-to-enhance-performance)
- [Caching Strategies](#leveraging-caching-strategies-for-performance-optimization)
- [Tools for Measuring JS Performance](#tools-for-measuring-and-analyzing-javascript-performance)
- [Optimizing Network Requests](#optimizing-network-requests-for-better-performance)
---

### Execution Context & Event Loop
- [Call Stack and Execution Context](#call-stack-and-execution-context)
- [Event Loop Mechanics](#event-loop-mechanics)
- [Web APIs and Asynchronous Handling](#web-apis-and-asynchronous-handling)
- [Macro-tasks vs Micro-tasks](#macro-tasks-vs-micro-tasks)
- [`setTimeout(0)` and Task Queuing](#settimeout0-and-task-queuing)

---

### Function Behavior and Patterns
- [`call`, `apply`, and `bind` Methods](#call-apply-and-bind-methods)
- [Pure Functions and Side Effects](#pure-functions-and-side-effects)
- [Memoization Techniques](#memoization-techniques)
- [Debounce and Throttle Functions](#debounce-and-throttle-functions)
- [Currying in JavaScript](#currying-in-javascript)
- [Function Composition Patterns](#function-composition-patterns)

---

### Advanced JavaScript Features
- [Event Delegation and Bubbling](#event-delegation-and-bubbling)
- [`WeakMap` and `WeakSet` Usage](#weakmap-and-weakset-usage)
- [Difference Between `Map` and Plain Objects](#difference-between-map-and-plain-objects)
- [Object Destructuring with Defaults](#object-destructuring-with-defaults)
- [`this` Keyword Behavior](#this-keyword-behavior)
- [Usage of `super()` in Classes](#usage-of-super-in-classes)

---

### Modules, Bundling, and Transpiling
- [CommonJS vs ES Modules](#commonjs-vs-es-modules)
- [Tree Shaking in Modern Bundlers](#tree-shaking-in-modern-bundlers)
- [Polyfills and Backward Compatibility](#polyfills-and-backward-compatibility)
- [Transpiling JavaScript Code](#transpiling-javascript-code)
- [Role of Babel in Modern Development](#role-of-babel-in-modern-development)
- [Webpack and Vite Bundling Process](#webpack-and-vite-bundling-process)

---

### Prototypes and Inheritance
- [Understanding `__proto__` and Prototypes](#understanding-__proto__-and-prototypes)
- [`Object.create()` and Prototype Chains](#objectcreate-and-prototype-chains)
- [`Object.assign()` vs Spread Operator](#objectassign-vs-spread-operator)
- [ES6 Classes and Prototypal Inheritance](#es6-classes-and-prototypal-inheritance)
- [Implementing Mixins for Multiple Inheritance](#implementing-mixins-for-multiple-inheritance)

---

### Memory Management
- [Common Causes of Memory Leaks](#common-causes-of-memory-leaks)
- [JavaScript Garbage Collection](#javascript-garbage-collection)
- [Closures and Memory Management](#closures-and-memory-management)

---

### Optional Chaining & Advanced Operators
- [Optional Chaining (`?.`) Operator](#optional-chaining-operator)
- [Nullish Coalescing (`??`) Operator](#nullish-coalescing-operator)
- [`in` Operator vs `hasOwnProperty()`](#in-operator-vs-hasownproperty)
- [Temporal Dead Zone in `let` and `const`](#temporal-dead-zone-in-let-and-const)
- [Labeled Statements Usage](#labeled-statements-usage)

---

### Miscellaneous
- [Type Coercion in Operations (`[] + []`, `{}` + [])](#type-coercion-in-operations)
- [Map Key References with Objects](#map-key-references-with-objects)
- [Understanding Unexpected Outputs](#understanding-unexpected-outputs)








### ✅ **JavaScript Fundamentals**

---

#### **1. `let`, `var`, `const`**
- **`let`**: Introduced in ES6, `let` allows you to declare variables that can be reassigned and is block-scoped. This means the variable exists within the block, statement, or expression where it’s declared. `let` helps avoid issues with variable redeclaration that arise with `var`.

**Example:**
```javascript
if (true) {
    let x = 10;
    console.log(x); // 10
}
console.log(x); // ReferenceError: x is not defined
```
In this example, `x` is scoped to the `if` block and cannot be accessed outside it.

- **`var`**: `var` is function-scoped (or globally scoped if declared outside a function), meaning it can be accessed even outside the block where it's declared. This leads to some unexpected behavior, especially when used in loops or conditional blocks.

**Example:**
```javascript
if (true) {
    var y = 20;
}
console.log(y); // 20
```
Here, `y` is accessible outside the block because `var` is function-scoped.

- **`const`**: `const` is also block-scoped, but it is used to declare variables whose values cannot be reassigned after initialization. It is useful when you want to create constants.

**Example:**
```javascript
const z = 30;
z = 40; // TypeError: Assignment to constant variable.
```
You cannot reassign a value to a constant variable once it's initialized.

---

#### **2. Global JavaScript Scope**
The global scope refers to the top level of your JavaScript code where variables and functions are accessible throughout the entire program. If a variable is declared in the global scope, it can be accessed from any part of the code. However, global variables can lead to conflicts and bugs, especially in large applications.

**Example:**
```javascript
var globalVar = "I'm global";

function display() {
    console.log(globalVar); // Accesses globalVar
}
display(); // Outputs: I'm global
```

---

#### **3. `'use strict'` Directive**
The `'use strict'` directive is a feature in JavaScript that enables strict mode. It helps catch common coding mistakes and prevents the use of problematic features like implicit globals. When strict mode is applied, certain errors that are silently ignored in normal JavaScript will now throw errors.

**Example:**
```javascript
'use strict';
x = 5; // ReferenceError: x is not defined
```
Without `'use strict'`, the variable `x` would be implicitly created as a global variable. With strict mode, JavaScript throws an error because `x` is not explicitly declared.

---

#### **4. Hoisting**
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. It’s important to note that while function declarations and `var` declarations are hoisted, their values or initializations are not hoisted.

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

#### **5. Lexical Scoping**
Lexical scoping refers to the fact that in JavaScript, the scope of a variable is determined by its location in the source code, i.e., where it was declared. Inner functions have access to the outer function’s variables, but the reverse is not true.

**Example:**
```javascript
function outer() {
    let outerVar = "I am outside!";
    
    function inner() {
        console.log(outerVar); // I can access outerVar
    }
    
    inner();
}

outer(); // Outputs: I am outside!
```
In this case, `inner()` is able to access `outerVar` because it is lexically scoped to the `outer` function.

---

#### **6. Scope**
Scope refers to the accessibility of variables in different parts of the code. There are several types of scopes in JavaScript:
- **Global Scope**: Variables declared outside of any function or block.
- **Function Scope**: Variables declared inside a function.
- **Block Scope**: Variables declared within a block (for example, inside `if` statements or loops), using `let` or `const`.

---

#### **7. Global, Function, and Block Scope**
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

#### **8. Data Types**
JavaScript has several data types that can be classified as primitive types and object types.
- **Primitive Types**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.
- **Object Types**: `object`, `array`, `function`, and others.

---

#### **9. Symbol**
A `Symbol` is a unique and immutable primitive value. Symbols are often used as keys for object properties to avoid property name collisions.

**Example:**
```javascript
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false (each Symbol is unique)
```

---

#### **10. `null`, `undefined`, and Undeclared**
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

#### **11. Type Checking**
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

#### **12. Equality: `==` vs `===`**
- **`==` (Loose Equality)**: Compares values for equality but performs type coercion. This can lead to unexpected results.
- **`===` (Strict Equality)**: Compares both value and type, so no type conversion is done.

**Example:**
```javascript
console.log(5 == '5');  // true (due to type coercion)
console.log(5 === '5'); // false (different types)
```

---

#### **13. Mutable vs Immutable Objects**
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


### ✅ **TypeScript Interview Answers**

---

#### **1. How TypeScript Improves JavaScript**

**Interviewer**: How does TypeScript improve JavaScript?

**Answer**: TypeScript is a superset of JavaScript that introduces static typing to help catch errors during development, before the code runs. While JavaScript is dynamically typed and relies on runtime checks, TypeScript allows you to declare variable types, which provides several benefits:
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

#### **2. Interface vs. Type**

**Interviewer**: Can you explain the difference between `interface` and `type` in TypeScript?

**Answer**: Both `interface` and `type` are used for defining shapes of objects, but they have subtle differences:
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

#### **3. Generics**

**Interviewer**: What are generics in TypeScript, and why are they useful?

**Answer**: Generics allow you to write functions, classes, or interfaces that work with any data type. By using generics, you can create reusable components that maintain type safety while being flexible. This helps avoid the need for multiple versions of the same function or class for different data types.

**Example**:  
```typescript
function identity<T>(arg: T): T {
  return arg;
}
let num = identity(10); // inferred as number
let str = identity("hello"); // inferred as string
```
Generics allow you to write flexible yet type-safe code.

---

#### **4. Union Types**

**Interviewer**: What are union types in TypeScript?

**Answer**: Union types in TypeScript allow a variable to hold one of several types. It’s useful when a variable could accept different types of values, and we want to ensure type safety while maintaining flexibility.

**Example**:  
```typescript
function printId(id: number | string): void {
  console.log(id);
}

printId(123); // OK
printId("abc"); // OK
printId(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
```
With union types, TypeScript ensures that only valid types are passed.

---

#### **5. Type Inference**

**Interviewer**: What is type inference in TypeScript?

**Answer**: TypeScript has a powerful type inference system that automatically determines the type of a variable based on its initial value. This reduces the need for explicit type annotations and makes code more concise without losing type safety.

**Example**:  
```typescript
let count = 5; // TypeScript infers 'count' as a number
count = "hello"; // Error: Type 'string' is not assignable to type 'number'
```
Type inference helps improve the developer experience by reducing boilerplate while ensuring correct types.

---

#### **6. Mapped Types**

**Interviewer**: What are mapped types in TypeScript?

**Answer**: Mapped types allow you to create new types by transforming properties of an existing type. For example, you can make all properties of a type `readonly`, `optional`, or change their types.

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

#### **7. Custom Error**

**Interviewer**: How would you define a custom error in TypeScript?

**Answer**: You can define a custom error in TypeScript by extending the built-in `Error` class. This allows you to add additional information or customize error handling in your applications.

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

#### **8. Request/Response Types with TypeScript**

**Interviewer**: How would you use TypeScript for defining request and response types in an API?

**Answer**: TypeScript is very useful for defining the types of data sent and received in an API. By defining request and response types, we can ensure that the data structure adheres to expectations, preventing issues such as incorrect data being passed to or from the API.

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

#### **9. Decorators**

**Interviewer**: What are decorators in TypeScript?

**Answer**: Decorators in TypeScript are special functions that can be applied to classes, methods, properties, or parameters to add behavior or metadata. They are commonly used in frameworks like Angular to handle things like dependency injection.

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

#### **10. Duck Typing**

**Interviewer**: What is Duck Typing in TypeScript?

**Answer**: Duck typing is a concept where an object is considered to be of a certain type if it has the properties or methods expected of that type, regardless of its actual class or interface. In TypeScript, this is common when we use interfaces to define the shape of objects.

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

#### **11. Module System & Compiler Options**

**Interviewer**: How does TypeScript handle modules, and what are the key compiler options?

**Answer**: TypeScript uses the ES6 module system, which relies on `import` and `export` statements to modularize code. You can define modules and specify how they should be compiled using the `tsconfig.json` file.

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

### ✅ **Functions & Scope Interview Answers**

---

#### **1. Function Declaration vs Expression vs Constructor**

**Interviewer**: Can you explain the difference between a function declaration, function expression, and constructor?

**Answer**: 
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

#### **2. Arrow Functions**

**Interviewer**: What are arrow functions in JavaScript, and how do they differ from traditional function expressions?

**Answer**: Arrow functions, introduced in ES6, offer a more concise syntax for writing functions and have the key difference of **lexical scoping** for `this`. Unlike regular functions, they do not have their own `this`, `arguments`, `super`, or `new.target`.

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

#### **3. Anonymous Functions - Use Cases**

**Interviewer**: What are anonymous functions, and where would you use them?

**Answer**: Anonymous functions are functions without a name. They are often used as arguments to other functions, or for short tasks where a function doesn’t need to be reused elsewhere.

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

#### **4. Default Parameters**

**Interviewer**: How do default parameters work in JavaScript functions?

**Answer**: Default parameters allow you to specify a default value for a function parameter if no value is provided during the function call.

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

#### **5. Higher-Order Functions**

**Interviewer**: Can you explain higher-order functions?

**Answer**: A **higher-order function** is a function that either:
1. Takes one or more functions as arguments.
2. Returns a function as its result.

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

#### **6. Callback Functions**

**Interviewer**: What are callback functions, and when would you use them?

**Answer**: A **callback function** is a function passed into another function as an argument that is executed at a later time. They are often used for **asynchronous operations** like handling API responses, timers, or events.

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

#### **7. Closures & Private Variables**

**Interviewer**: What are closures, and how are they used to create private variables?

**Answer**: A **closure** is a function that "remembers" its lexical scope, even when the function is executed outside that scope. Closures are useful for creating **private variables** by enclosing them inside a function and providing controlled access through closures.

**Example**:
```javascript
function createCounter() {
  let count = 0; // `count` is a private variable
  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    },
  };
}

const counter = createCounter();
counter.increment(); // Outputs: 1
counter.increment(); // Outputs: 2
counter.decrement(); // Outputs: 1
```
Here, `count` is private, and the `increment` and `decrement` methods form a closure over it, providing controlled access.

---

#### **8. Immediately Invoked Function Expressions (IIFE)**

**Interviewer**: What is an Immediately Invoked Function Expression (IIFE)?

**Answer**: An **IIFE** is a function expression that is defined and immediately invoked (called) right after its declaration. It is used to create a new scope, often to avoid polluting the global namespace.

**Example**:
```javascript
(function() {
  const message = "Hello, world!";
  console.log(message);
})(); // Outputs: Hello, world!
```

IIFEs are often used for **module patterns** or **self-contained logic** in JavaScript.

---

#### **9. Potential Pitfalls of Closures**

**Interviewer**: What are some common pitfalls of closures?

**Answer**: Closures are powerful, but they can introduce some pitfalls:
1. **Memory Leaks**: Closures can keep references to variables, which may cause memory issues if not handled carefully.
2. **Unintended Variable Retention**: Because closures "remember" variables from their lexical scope, it can be easy to unintentionally retain references to large data structures.
3. **Async Issues**: Closures can sometimes cause confusion when working with asynchronous code, as they may use values that change over time.

**Example of Async Pitfall**:
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Outputs 3 three times, instead of 0, 1, 2
  }, 1000);
}
```
To fix this, we can use `let` instead of `var` to create block-scoped variables.

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Outputs: 0, 1, 2
  }, 1000);
}
```

---


---

### ✅ **Asynchronous JavaScript Interview Answers**

---

#### **1. Synchronous vs Asynchronous Functions**

**Interviewer**: What is the difference between synchronous and asynchronous functions?

**Answer**: 
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

#### **2. Promises**

**Interviewer**: Can you explain what a Promise is in JavaScript?

**Answer**: A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation. Promises allow us to handle asynchronous operations in a more manageable way than using callbacks (callback hell).

A promise has three states:
1. **Pending**: The promise is neither fulfilled nor rejected.
2. **Fulfilled**: The operation was successful.
3. **Rejected**: The operation failed.

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

#### **3. Promise States**

**Interviewer**: Can you elaborate on the different states of a promise?

**Answer**: A Promise can exist in one of the following states:

1. **Pending**: The initial state, where the Promise is waiting to be resolved or rejected.
2. **Fulfilled**: The Promise has completed successfully and has returned a value.
3. **Rejected**: The Promise has failed and returned a reason (error).

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

#### **4. Pros and Cons of Promises**

**Interviewer**: What are the pros and cons of using Promises in JavaScript?

**Answer**:
- **Pros**:
  - **Avoid Callback Hell**: Promises allow chaining with `.then()` and `.catch()`, which makes the code more readable than nested callbacks.
  - **Improved error handling**: With promises, errors can be caught at any point in the chain using `.catch()`.
  - **Better flow control**: Promises make it easier to manage asynchronous operations and follow a linear flow.

- **Cons**:
  - **Chaining can become complex**: Deep chaining can lead to code that's difficult to maintain.
  - **Not always intuitive**: Debugging and understanding promises can be tricky, especially when multiple promises are involved.
  - **Older browser support**: Older browsers may not support promises natively without polyfills.

---

#### **5. Promise.all()**

**Interviewer**: What does `Promise.all()` do, and when would you use it?

**Answer**: `Promise.all()` takes an array of promises and returns a single promise that resolves when all the input promises have resolved or rejects as soon as one of the promises is rejected.

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

#### **6. Promise.all vs Promise.allSettled**

**Interviewer**: How does `Promise.all()` differ from `Promise.allSettled()`?

**Answer**: 
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

#### **7. Async/Await**

**Interviewer**: What are `async` and `await`, and how do they simplify working with promises?

**Answer**: 
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

#### **8. Handling Async Errors**

**Interviewer**: How do you handle errors in asynchronous functions?

**Answer**: Errors in asynchronous code can be handled using `try/catch` blocks when using `async/await`, or `.catch()` when using promises.

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

#### **9. Microtask Queue**

**Interviewer**: What is the microtask queue in JavaScript?

**Answer**: The **microtask queue** is a queue where JavaScript places promises and `async/await` operations. It is processed after the current execution context and before any rendering tasks or `setTimeout` calls.

- Microtasks are given higher priority than tasks in the event loop, which ensures that promises are always resolved as soon as possible.

**Example**:
```javascript
Promise.resolve().then(() => console.log('Promise 1'));
Promise.resolve().then(() => console.log('Promise 2'));
console.log('End');

// Outputs: End, Promise 1, Promise 2
```

---

#### **10. `setTimeout()`, `setImmediate()`, and `process.nextTick()`**

**Interviewer**: Can you explain the difference between `setTimeout()`, `setImmediate()`, and `process.nextTick()` in Node.js?

**Answer**: These are methods in Node.js that deal with asynchronous scheduling but differ in when they are executed:

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

### ✅ **Objects & Classes Interview Answers**

---

#### **1. Constructor Function**

**Interviewer**: What is a constructor function in JavaScript?

**Answer**: 
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

#### **2. `new` Keyword**

**Interviewer**: How does the `new` keyword work in JavaScript?

**Answer**: 
The `new` keyword is used to create an instance of an object that is defined by a constructor function or a class. When used with a constructor function, it performs the following steps:
1. Creates a new empty object.
2. Sets the `this` value within the constructor to the new object.
3. Sets up inheritance so that the new object has access to the constructor's prototype.
4. Returns the newly created object.

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

#### **3. Classical vs Prototypal Inheritance**

**Interviewer**: What is the difference between classical and prototypal inheritance?

**Answer**: 
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

#### **4. Inheritance in ES2015 Classes**

**Interviewer**: How is inheritance handled in ES2015 (ES6) classes?

**Answer**: 
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

#### **5. Static Class Members**

**Interviewer**: What are static members in JavaScript classes?

**Answer**: 
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

#### **6. Extending Built-in Objects**

**Interviewer**: Can you extend built-in objects in JavaScript? If yes, how?

**Answer**: Yes, you can extend built-in objects in JavaScript. This is done by adding custom properties or methods to the prototype of the built-in object, or by subclassing it (using `class` syntax in ES6).

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

#### **7. Getters and Setters**

**Interviewer**: What are getters and setters in JavaScript?

**Answer**: 
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

#### **8. `Object.freeze()`, `seal()`, `preventExtensions()`**

**Interviewer**: What is the difference between `Object.freeze()`, `seal()`, and `preventExtensions()`?

**Answer**: These methods are used to control the mutability of objects in JavaScript.

1. **`Object.freeze()`**: Makes an object immutable. You cannot add, remove, or modify any of its properties.
   ```javascript
   const obj = { name: "Alice" };
   Object.freeze(obj);
   obj.name = "Bob";  // This will not work
   console.log(obj.name);  // Outputs: Alice
   ```

2. **`Object.seal()`**: Prevents adding or removing properties, but existing properties can still be modified (unless they are marked as non-writable).
   ```javascript
   const obj = { name: "Alice" };
   Object.seal(obj);
   obj.name = "Bob";  // This will work
   delete obj.name;   // This will not work
   console.log(obj.name);  // Outputs: Bob
   ```

3. **`Object.preventExtensions()`**: Prevents new properties from being added to the object but allows existing properties to be modified or deleted.
   ```javascript
   const obj = { name: "Alice" };
   Object.preventExtensions(obj);
   obj.age = 25;  // This will not work
   console.log(obj.age);  // Outputs: undefined
   ```

---



---

### ✅ **Design Patterns & Architecture Interview Answers**

---

#### **1. Introduction to Design Patterns**

**Interviewer**: What are design patterns, and why are they important?

**Answer**: 
Design patterns are proven, reusable solutions to common problems in software design. They are not code templates but rather general solutions that can be adapted to specific needs. Design patterns improve code readability, reusability, maintainability, and scalability. They help developers avoid reinventing the wheel by providing standard approaches to solving design issues.

**Example**:
For instance, the **Singleton Pattern** ensures that a class has only one instance, which is useful in situations like managing database connections or configuration settings.

---

#### **2. Singleton Pattern**

**Interviewer**: Can you explain the Singleton Pattern?

**Answer**: 
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

#### **3. Factory Pattern**

**Interviewer**: What is the Factory Pattern, and how is it used?

**Answer**: 
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

#### **4. Module Pattern**

**Interviewer**: What is the Module Pattern in JavaScript?

**Answer**: 
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

#### **5. Observer Pattern**

**Interviewer**: What is the Observer Pattern, and when should you use it?

**Answer**: 
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

#### **6. Prototype Pattern**

**Interviewer**: Can you explain the Prototype Pattern?

**Answer**: 
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

#### **7. Dependency Injection**

**Interviewer**: What is Dependency Injection, and why is it useful?

**Answer**: 
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

### ✅ **Modules, Storage & Browser APIs Interview Answers**

---

#### **1. `<script>`, `async`, and `defer`**

**Interviewer**: What is the difference between `<script>`, `async`, and `defer` attributes in HTML?

**Answer**:
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

#### **2. Cookies, sessionStorage, and localStorage**

**Interviewer**: What are the differences between cookies, sessionStorage, and localStorage?

**Answer**:
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

#### **3. Window vs Document**

**Interviewer**: What is the difference between `window` and `document` in JavaScript?

**Answer**:
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

#### **4. WebSocket API**

**Interviewer**: Can you explain the WebSocket API?

**Answer**:
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

#### **5. Web Workers**

**Interviewer**: What are Web Workers and how are they useful?

**Answer**:
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

#### **6. Using `window.history` API**

**Interviewer**: How does the `window.history` API work in JavaScript?

**Answer**:
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

### ✅ **DOM, Events & UI Interview Answers**

---

#### **1. Event Listeners**

**Interviewer**: Can you explain how event listeners work in JavaScript?

**Answer**:
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

#### **2. Event Bubbling vs Capturing**

**Interviewer**: What is the difference between event bubbling and event capturing?

**Answer**:
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

#### **3. `event.preventDefault()` vs `event.stopPropagation()`**

**Interviewer**: What is the difference between `event.preventDefault()` and `event.stopPropagation()`?

**Answer**:
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

#### **4. Event Delegation**

**Interviewer**: What is event delegation and why is it useful?

**Answer**:
**Event delegation** is a technique where you attach a single event listener to a parent element instead of adding listeners to individual child elements. When an event is triggered on a child element, it bubbles up to the parent, where the parent can catch the event and handle it.

This technique is particularly useful when dealing with dynamically added elements (i.e., elements that are created after the initial page load).

**Example**:
```javascript
document.getElementById("parent").addEventListener("click", function(event) {
  if (event.target && event.target.matches("button.className")) {
    alert("Button clicked!");
  }
});
```

In this example, the parent element listens for clicks on its child buttons, even if the buttons are dynamically added later.

**Benefits**:
- Reduces the number of event listeners.
- Works for dynamically added elements.

---

#### **5. `innerHTML` vs `textContent`**

**Interviewer**: What is the difference between `innerHTML` and `textContent`?

**Answer**:
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

#### **6. Manipulating CSS Styles**

**Interviewer**: How can you manipulate CSS styles using JavaScript?

**Answer**:
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

#### **7. Destructuring**

**Interviewer**: Can you explain destructuring in JavaScript?

**Answer**:
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

#### **8. Spread & Rest**

**Interviewer**: What is the difference between the spread and rest operators?

**Answer**:
The **spread** (`...`) and **rest** (`...`) operators have similar syntax but serve different purposes depending on the context.

- **Spread Operator**: Used to spread elements of an array or object into individual elements. It’s typically used when calling functions or combining arrays/objects.

  **Example**:
  ```javascript
  const arr1 = [1, 2];
  const arr2 = [...arr1, 3, 4];  // Spread arr1 into arr2
  console.log(arr2);  // [1, 2, 3, 4]
  ```

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

### ✅ **Testing Interview Answers**

---

#### **1. Types of Testing in Software Development**

**Interviewer**: What are the different types of testing in software development?

**Answer**:
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

#### **2. Unit Testing vs Integration Testing vs E2E**

**Interviewer**: What is the difference between Unit Testing, Integration Testing, and End-to-End (E2E) Testing?

**Answer**:
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

#### **3. Writing Unit Tests for JavaScript Code**

**Interviewer**: How do you write unit tests for JavaScript code?

**Answer**:
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

#### **4. Popular JavaScript Testing Frameworks**

**Interviewer**: What are some popular JavaScript testing frameworks?

**Answer**:
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

#### **5. Mocks and Stubs in Testing**

**Interviewer**: What are mocks and stubs, and when do you use them in testing?

**Answer**:
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

#### **6. Test-Driven Development (TDD)**

**Interviewer**: Can you explain Test-Driven Development (TDD)?

**Answer**:
Test-Driven Development (TDD) is a software development methodology in which tests are written before the code itself. It follows the **Red-Green-Refactor** cycle:

1. **Red**: Write a failing test for the new functionality.
2. **Green**: Write just enough code to pass the test.
3. **Refactor**: Clean up the code, ensuring it’s readable and efficient without changing its functionality.

TDD encourages writing minimal code and focusing on only what is needed to pass the tests.

**Example**:
1. Write the test:
   ```javascript
   test('adds 1 + 1 to equal 2', () => {
     expect(add(1, 1)).toBe(2);
   });
   ```
2. Write code to pass the test:
   ```javascript
   function add(a, b) {
     return a + b;
   }
   ```

**Benefits**:
- Ensures the code is testable and bug-free.
- Encourages simpler, more modular code.

---

#### **7. Testing Asynchronous Code in JavaScript**

**Interviewer**: How do you test asynchronous code in JavaScript?

**Answer**:
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

#### **1. Cross-Site Scripting (XSS) and Prevention**

**Interviewer**: What is Cross-Site Scripting (XSS), and how do you prevent it?

**Answer**:
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

#### **2. Cross-Site Request Forgery (CSRF) and Mitigation Techniques**

**Interviewer**: What is CSRF, and how do you mitigate it?

**Answer**:
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

#### **3. Preventing SQL Injection Vulnerabilities**

**Interviewer**: What is SQL Injection, and how do you prevent it?

**Answer**:
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

#### **4. Handling Sensitive Data**

**Interviewer**: How do you handle sensitive data securely?

**Answer**:
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

#### **5. Content Security Policy (CSP)**

**Interviewer**: What is Content Security Policy (CSP), and how does it enhance security?

**Answer**:
CSP is a security mechanism that helps prevent various types of attacks like XSS and data injection attacks by specifying which content sources are allowed to load on a webpage.

**How it works**:
- **Restrict Resource Loading**: You can control where scripts, images, stylesheets, and other resources are loaded from.
  
  **Example CSP Header**:
  ```html
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://trusted.com;">
  ```

By using CSP, you prevent attackers from injecting malicious scripts or other resources into your web pages.

---

#### **6. Common Security Headers and Their Purposes**

**Interviewer**: What are some common security headers, and what are their purposes?

**Answer**:
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

#### **7. Preventing Clickjacking Attacks**

**Interviewer**: What is clickjacking, and how do you prevent it?

**Answer**:
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

#### **8. Input Validation and Its Importance**

**Interviewer**: Why is input validation important, and how do you perform it?

**Answer**:
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



