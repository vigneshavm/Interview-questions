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

--- 





---

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





