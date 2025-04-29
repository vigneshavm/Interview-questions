
### 🌟 Core Concepts
• [TypeScript vs JavaScript – Benefits & Improvements](#how-typescript-improves-javascript)  
• [Type Inference](#type-inference)  
• [`any` vs `unknown` Types](#any-vs-unknown)  
• [Duck Typing](#duck-typing)  
• [Type Narrowing](#type-narrowing)  

---

### 📐 Types & Interfaces
• [Interface vs Type](#interface-vs-type)  
• [Extending Types and Interfaces](#extending-types-and-interfaces)  
• [Mapped Types](#mapped-types)  
• [Utility Types: `Partial`, `Pick`, `Omit`, `Record`](#partial-pick-omit-record)  
• [Union vs Intersection Types](#union-vs-intersection-types)  

---

### 🔗 Advanced Types
• [Template Literal Types](#template-literal-types)  
• [`keyof` and `typeof` Operators](#keyof-vs-typeof)  
• [Conditional Types](#conditional-types)  
• [`readonly` vs `const`](#readonly-vs-const)  

---

### 🔧 Generics
• [Generic Functions and Classes](#generics)  
• [Constraining Generics with `extends`](#constraining-generics-with-extends)  

---

### 📦 Modules, Namespaces & Compiler
• [Namespaces and Modules](#namespaces-and-modules)  
• [Module System in TypeScript](#module-system-in-typescript)  
• [`tsconfig.json` Compiler Options](#tsconfigjson-compiler-options)  
• [`esModuleInterop` vs `allowSyntheticDefaultImports`](#esmoduleinterop-vs-allowsyntheticdefaultimports)  

---

### ⚙️ Functions & Behavior
• [Function Overloading](#function-overloading)  
• [Decorators](#decorators)  
• [Declaration Merging](#declaration-merging)  

---

### 🗃️ Objects & Collections
• [`Map` vs Plain JavaScript Object](#difference-between-map-and-plain-objects)  
• [`Map` vs `WeakMap`](#map-vs-weakmap)  
• [`Set` vs `WeakSet`](#set-vs-weakset)














## `Partial` `Pick` `Omit` `Record`



> **Utility types** in TypeScript are built-in **generics** that allow you to **transform** or **manipulate** types in a variety of useful ways. They help you **create new types** based on existing ones, making the development process **more efficient** and **type-safe**.

---

### 🧠 **1. `Partial<T>`** — Makes all properties **optional** in a given type `T`.

```ts
interface User {
  name: string;
  age: number;
}

// Partial<User> makes both properties optional
const updateUser: Partial<User> = { name: "Alice" }; // OK
```
> - **Use case**: When you want to update only **some properties** of an object (e.g., a user profile update).

---

### 🧠 **2. `Pick<T, K>`** — Creates a new type by **picking** specific properties `K` from type `T`.

```ts
interface User {
  name: string;
  age: number;
  email: string;
}

// Pick only `name` and `email` properties
type UserNameEmail = Pick<User, "name" | "email">;

const user: UserNameEmail = { name: "Alice", email: "alice@example.com" };
```
> - **Use case**: When you need a type that **only includes certain properties** of an object.

---

### 🧠 **3. `Omit<T, K>`** — Creates a new type by **omitting** specific properties `K` from type `T`.

```ts
interface User {
  name: string;
  age: number;
  email: string;
}

// Omit `age` property from `User`
type UserWithoutAge = Omit<User, "age">;

const user: UserWithoutAge = { name: "Alice", email: "alice@example.com" };
```
> - **Use case**: When you need a type that excludes certain properties (e.g., hiding sensitive data like passwords).

---

### 🧠 **4. `Record<K, T>`** — Creates a type with **keys** `K` and **values** `T`.

```ts
// Record type where keys are strings, and values are numbers
type Scores = Record<string, number>;

const studentScores: Scores = {
  Alice: 90,
  Bob: 85,
};
```
> - **Use case**: When you want to create a **map** or **dictionary** where each key is of type `K` and each value is of type `T`.

---

### 📢 Summary of Utility Types:
| Utility Type | Description                                             | Example                            |
|--------------|---------------------------------------------------------|------------------------------------|
| `Partial<T>` | Makes all properties of `T` optional                    | `Partial<User>`                    |
| `Pick<T, K>` | Selects a subset of properties from `T` (using keys `K`) | `Pick<User, "name" | "email">`     |
| `Omit<T, K>` | Removes specified properties from `T`                   | `Omit<User, "age">`                |
| `Record<K, T>` | Creates a dictionary where keys are `K` and values are `T` | `Record<string, number>`           |

---





## `Map` vs `WeakMap`

| Feature                    | `Map`                                   | `WeakMap`                              |
|---------------------------|------------------------------------------|----------------------------------------|
| **Key types**             | Any value (primitives or objects)        | **Only objects** (not primitives)      |
| **Garbage collection**    | Keys are **strongly referenced**         | Keys are **weakly referenced**         |
| **Iterable**              | ✅ Yes (can use `forEach`, `for...of`)   | ❌ No (not iterable)                   |
| **Size property**         | ✅ Has `.size` to get number of entries  | ❌ No `.size` property                 |
| **Use case**              | General-purpose key-value storage        | Private data storage tied to objects   |
| **Memory leak risk**      | Possible if not cleared manually         | Lower risk due to GC when keys die     |

---

### 🔹 Example: `Map`
```ts
const map = new Map();
map.set("key", "value");
map.set({ id: 1 }, "object value");
console.log(map.size); // 2
```

### 🔹 Example: `WeakMap`
```ts
const weakMap = new WeakMap();
let obj = { name: "Alice" };
weakMap.set(obj, "some private data");

// After `obj` is no longer referenced, it's eligible for garbage collection
obj = null;
```

### ✅ When to use:
- **Use `Map`**: when you need to iterate, count, or use non-object keys.
- **Use `WeakMap`**: when storing **private data per object** that should not prevent garbage collection.






## `Set` vs `WeakSet`



| Feature                     | `Set`                                        | `WeakSet`                                      |
|----------------------------|----------------------------------------------|------------------------------------------------|
| **Value types**            | Any type (primitives or objects)             | **Only objects** (no primitives)               |
| **Garbage collection**     | Values are strongly referenced               | Values are **weakly referenced**               |
| **Iterable**               | ✅ Yes (`forEach`, `for...of`, spread, etc.) | ❌ No (not iterable, no `forEach`, no spread)  |
| **Size property**          | ✅ Has `.size`                               | ❌ No `.size`                                   |
| **Duplicates allowed?**    | ❌ No duplicates (same value only once)      | ❌ No duplicates                                |
| **Use case**               | Unique list of values                       | Track object presence without preventing GC    |
| **Memory management**      | Manual                                       | Automatic (objects are GC-ed when unreferenced) |

---

### 🔹 Example: `Set`
```ts
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // Ignored (duplicate)
set.add({ name: "Alice" });

for (const val of set) {
  console.log(val); // Iterates over values
}
```

### 🔹 Example: `WeakSet`
```ts
const weakSet = new WeakSet();
let obj = { id: 1 };
weakSet.add(obj);

console.log(weakSet.has(obj)); // true
obj = null; // Now eligible for garbage collection
```

---

### ✅ When to use:
- **Use `Set`**: when you need a list of **unique values** and want to **iterate or check size**.
- **Use `WeakSet`**: when you want to **track objects without preventing their garbage collection**, such as for **caching or tracking object state** internally.


## **Difference Between Map and Plain Objects**



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


## Declaration Merging


> **Declaration Merging** in TypeScript means that **when two declarations have the same name, TypeScript automatically merges them into a single definition**.  
> This happens commonly with **interfaces**, **namespaces**, and sometimes **functions and classes**.

---

#### 🧠 Example: Merging Interfaces

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// After merging:
const user: User = {
  name: "Alice",
  age: 30,
};
```



## **Decorators**
- "In TypeScript, **decorators** are special functions that can be applied to **classes, methods, properties, or parameters**."
- "They help us **add extra behavior** or **attach metadata** to these elements without changing their core logic."
- "Decorators are especially common in frameworks like **Angular**, where they are used for things like **dependency injection**, routing, and more."
- "They basically make our code **more organized and reusable** by separating extra behavior from the main logic."

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



##  **function overloading** 


> In TypeScript, **function overloading** allows you to define **multiple signatures** for a single function, so it can accept different parameter types and return different types based on those parameters.  
> You declare the **overload signatures first**, followed by the **implementation**. TypeScript will **select the appropriate signature** based on the arguments passed to the function.



```ts
// Overload signatures
function greet(person: string): string;
function greet(person: string, age: number): string;

// Function implementation
function greet(person: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${person}. You are ${age} years old.`;
  }
  return `Hello, ${person}!`;
}

// Usage
console.log(greet("Alice"));       // "Hello, Alice!"
console.log(greet("Bob", 30));    // "Hello, Bob. You are 30 years old."
```

### 📢 Key Points:
1. **Overload Signatures**: First, you declare the possible **types of inputs** that the function can accept. 
2. **Implementation**: Then, you provide one function implementation that handles all overload cases.
3. TypeScript uses **the correct overload signature** based on how you call the function.

---



## **Module System & Compiler Options**

- "In TypeScript, we use the **ES6 module system**, which means we work with `import` and `export` statements to break code into modules."
- "The way modules and compilation work is controlled by settings in the **`tsconfig.json`** file."
- "Some important compiler options are:"
  - "**`module`** — It decides which module system to use, like `commonjs`, `es6`, or `amd`."
  - "**`target`** — It tells TypeScript which JavaScript version to compile the code into, like `es5` or `es6`."
  - "**`strict`** — It enables strict type-checking, making TypeScript catch more potential errors early."

  
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



## Template literal types


> **Template literal types** in TypeScript allow us to create **dynamic string types** by combining strings and types using template syntax, similar to JavaScript's template literals.  
>  
> They are useful when we need to generate new types based on existing ones, such as creating `"GET /api/user"` or `"POST /api/post"` types dynamically.  
>  
> **Example:**  
> ```ts
> type Method = "GET" | "POST";
> type Resource = "user" | "post";
> type APIEndpoint = `${Method} /api/${Resource}`;
> ```
> Here, `APIEndpoint` becomes a union of all combinations like `"GET /api/user"`, `"POST /api/post"`, etc.
>
> This helps with **type safety**, **autocompletion**, and **avoiding string mismatches** in large applications.

---




## `esModuleInterop` and `allowSyntheticDefaultImports`

### 🔧 `esModuleInterop`

- **Purpose**: Enables a cleaner default import style from CommonJS modules.
- **Transforms**: Adds a synthetic default export to CommonJS modules (via helper functions like `__importDefault`).
- **Default behavior**: `import fs from 'fs'` works, even though Node’s `fs` is CommonJS.
- **Depends on**: **Automatically enables `allowSyntheticDefaultImports`**
- **Emits helper functions**: Yes (`__importDefault`)

```ts
// With esModuleInterop: ✅ Works even though fs is a CommonJS module
import fs from 'fs';
```

---

### 🔧 `allowSyntheticDefaultImports`

- **Purpose**: Allows writing default import syntax (`import x from 'x'`) **without TypeScript complaining**, even if the module doesn’t have a default export.
- **Only affects type checking**: Doesn’t affect emitted JavaScript.
- **Does NOT emit helpers**: So the runtime may fail if used incorrectly.
- **Use case**: For compatibility with Babel or webpack setups that handle interop differently.

```ts
// With allowSyntheticDefaultImports: ✅ Compiles, but may fail at runtime if not bundled correctly
import fs from 'fs';
```

---

### ✅ Summary Table

| Feature                          | `esModuleInterop` | `allowSyntheticDefaultImports` |
|----------------------------------|--------------------|-------------------------------|
| Enables default imports from CJS | ✅ Yes             | ✅ Yes (only at type level)   |
| Affects emitted JavaScript       | ✅ Yes             | ❌ No                         |
| Adds helper functions            | ✅ Yes             | ❌ No                         |
| Safer for CommonJS interop       | ✅ Yes             | 🚫 Risky without bundler      |
| Implies the other                | ✅ Implies `allowSyntheticDefaultImports` | ❌ Does not imply `esModuleInterop` |

---

### ✅ Recommendation
- Use **`esModuleInterop: true`** if you want full compatibility and safe default import behavior from CommonJS modules.
- Use **`allowSyntheticDefaultImports: true`** only if you are using a bundler (like Webpack or Babel) that handles interop for you.






## **`tsconfig.json` compiler options**

---

### 🔧 **Basic Options**
| Option                | Description |
|-----------------------|-------------|
| `target`              | ECMAScript version for output (e.g., `es5`, `es6`, `es2020`) |
| `module`              | Module system to use (`commonjs`, `esnext`, `umd`, etc.) |
| `lib`                 | List of libraries to include in compilation (e.g., `["dom", "es2020"]`) |
| `allowJs`             | Allow JavaScript files to be compiled |
| `checkJs`             | Enable type checking on `.js` files |
| `outDir`              | Redirect output structure to a directory |
| `rootDir`             | Specify root directory of input files |

---

### 🛠️ **Strict Type-Checking Options**
| Option                    | Description |
|---------------------------|-------------|
| `strict`                  | Enables all strict type checks (`true` by default is recommended) |
| `noImplicitAny`           | Raise error on variables with `any` type |
| `strictNullChecks`        | Make `null` and `undefined` distinct types |
| `strictFunctionTypes`     | Check function parameter bivariance |
| `strictBindCallApply`     | Type-check `bind`, `call`, and `apply` methods |
| `alwaysStrict`            | Emit `"use strict"` and perform strict checks |
| `noImplicitThis`          | Raise error on `this` expressions with an `any` type |

---

### 📦 **Module Resolution**
| Option                  | Description |
|-------------------------|-------------|
| `moduleResolution`      | Strategy to resolve modules (`node` or `classic`) |
| `baseUrl`               | Base directory for non-relative module names |
| `paths`                 | Aliases for module paths (used with `baseUrl`) |
| `typeRoots`             | Directories where type definitions are found |
| `types`                 | Specific type declaration packages to include |
| `esModuleInterop`       | Enables default imports from CommonJS |
| `allowSyntheticDefaultImports` | Allows default import syntax for modules without default export |

---

### 📂 **Emit / Output Options**
| Option                 | Description |
|------------------------|-------------|
| `declaration`          | Generate `.d.ts` declaration files |
| `sourceMap`            | Generate `.map` files for debugging |
| `removeComments`       | Remove comments in output |
| `noEmit`               | Don’t emit output (useful for type-check only) |
| `incremental`          | Enable incremental compilation with `.tsbuildinfo` |

---

### 🧪 **Experimental Options**
| Option                 | Description |
|------------------------|-------------|
| `experimentalDecorators` | Enable support for decorators |
| `emitDecoratorMetadata`  | Emit design-type metadata for decorated declarations |
| `useDefineForClassFields` | Emit ES `define` semantics for class fields |

---

### 🛡️ **Other Helpful Options**
| Option                 | Description |
|------------------------|-------------|
| `skipLibCheck`         | Skip type checking of declaration files (`.d.ts`) |
| `forceConsistentCasingInFileNames` | Ensure file name case consistency across OSs |

---

### 📁 Sample `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "dist",
    "rootDir": "src",
    "declaration": true,
    "sourceMap": true,
    "resolveJsonModule": true,
    "moduleResolution": "node"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```






## **Constraining Generics with `extends`**

---

- In TypeScript, the `extends` keyword is used to **constrain a generic type** to ensure it satisfies a specific shape or base type.
  
- This helps enforce **type safety** and provides **better IntelliSense/autocompletion**.

- ✅ **Example (structural constraint)**:
  ```ts
  function getLength<T extends { length: number }>(item: T): number {
    return item.length;
  }
  ```
  - Only accepts values with a `length` property (e.g., strings, arrays).
  - Passing a number would result in a compile-time error.

- ✅ **Example (union type constraint)**:
  ```ts
  function doSomething<T extends "start" | "stop">(action: T) { ... }
  ```
  - Accepts only `"start"` or `"stop"` as valid values.

- ✅ **Example (interface constraint)**:
  ```ts
  interface Person { name: string; age: number; }
  function greet<T extends Person>(person: T) { ... }
  ```
  - Ensures the argument matches or extends the `Person` structure.

- ✅ **Example (key constraint with `keyof`)**:
  ```ts
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  ```
  - Ensures the key exists in the object, enhancing type safety.

- Overall, `extends` allows you to:
  - Define **bounded generics**.
  - Create **flexible but safe** utility functions.
  - Support **complex type relationships** with conditional and mapped types.

---






##  **Conditional Types**

- **Definition**: Conditional types allow you to define types based on a condition that evaluates at **compile-time**, enabling more **dynamic type assignments** depending on the input type.

- **Syntax**:
  ```ts
  T extends U ? X : Y
  ```
  - If `T` extends `U`, the type is `X`.
  - Otherwise, the type is `Y`.

- **Example (basic usage)**:
  ```ts
  type IsString<T> = T extends string ? "Yes" : "No";
  
  type Test1 = IsString<string>;  // "Yes"
  type Test2 = IsString<number>;  // "No"
  ```
  - Here, `IsString<T>` evaluates to `"Yes"` if `T` is a string, otherwise `"No"`.

- **Example (working with union types)**:
  ```ts
  type FilterNumber<T> = T extends number ? T : never;
  
  type Test3 = FilterNumber<"hello" | 42 | true>;  // 42
  ```
  - The conditional type filters out non-number types, resulting in `42`.

- **Example (inferring types)**:
  ```ts
  type ElementType<T> = T extends (infer U)[] ? U : T;
  
  type ArrayElement = ElementType<string[]>;  // string
  type NumberType = ElementType<number>;      // number
  ```
  - `infer` allows extracting the type of elements within an array or other container types.

- **Example (conditional type with interfaces)**:
  ```ts
  interface Admin { role: "admin"; }
  interface User { role: "user"; }
  
  type RoleType<T> = T extends { role: "admin" } ? "Administrator" : "General User";
  
  type Test4 = RoleType<Admin>;  // "Administrator"
  type Test5 = RoleType<User>;   // "General User"
  ```

- **Use Cases**:
  - **Filtering types** based on conditions (e.g., extracting numbers from a union of types).
  - **Inferring types** of elements in collections (e.g., `infer` keyword).
  - **Creating type-safe APIs** where logic differs based on the type provided.

- **Advanced Example (Distributive Conditional Types)**:
  ```ts
  type Flatten<T> = T extends (infer U)[] ? U : T;
  
  type Test6 = Flatten<string[]>;  // string
  type Test7 = Flatten<number>;    // number
  ```

- **Key Takeaways**:
  - Conditional types are powerful for **type inference** and **type manipulation**.
  - They allow you to **transform types dynamically** based on certain conditions.
  - They are commonly used with **unions**, **arrays**, and **interfaces** to create flexible and type-safe code.

---




##  **`readonly` vs `const`** 

| **Feature**                      | **`readonly`**                                      | **`const`**                                           |
|-----------------------------------|-----------------------------------------------------|------------------------------------------------------|
| **Definition**                    | A **type modifier** that makes properties of objects or elements of arrays immutable. | A **variable declaration keyword** that makes the variable reference immutable. |
| **Applies to**                    | **Object properties** or **array elements**.        | **Variables** (including primitive types, arrays, and objects). |
| **Mutability of Reference**       | Does not affect the reference itself; only the **property** or **element**. | **Prevents reassigning the reference** to a new value. |
| **Mutability of Contents**        | The contents of the object or array cannot be modified (for properties or elements marked as `readonly`). | The contents of an object or array can be modified (unless combined with `readonly`). |
| **Example with Object**           | `interface Person { readonly name: string; }`      | `const person = { name: "Alice" }; person.name = "Bob"; // Allowed` |
| **Example with Array**            | `const numbers: readonly number[] = [1, 2, 3];`    | `const numbers = [1, 2, 3]; numbers.push(4); // Allowed` |
| **Use Case**                      | Enforces **immutability** for object properties or array elements. | Ensures **reference immutability**, meaning the variable can’t be reassigned. |
| **Scope**                         | Applied within the **type system** to enforce immutability of properties/elements. | Applied to **variables** to prevent reassigning their references. |
| **Prevents Reassigning Variable** | No, only prevents modification of properties or elements within the object/array. | Yes, prevents reassignment of the variable itself. |

---

### **Key Takeaways:**
- **`readonly`** is useful when you want to make **object properties** or **array elements immutable**, ensuring that their values cannot be changed.
- **`const`** ensures the **variable reference** cannot be reassigned, but it does not prevent modifications to the contents of objects or arrays.



## **Union and Intersection Types**

| **Feature**                      | **Union Types (`|`)**                                      | **Intersection Types (`&`)**                                 |
|-----------------------------------|------------------------------------------------------------|--------------------------------------------------------------|
| **Definition**                    | A type that allows a value to be one of several types.     | A type that combines multiple types into a single type that must satisfy all of them. |
| **Operator**                      | `|` (pipe symbol)                                          | `&` (ampersand symbol)                                       |
| **Type Combination**              | Represents a value that can be **one** of several types.   | Represents a value that must satisfy **all** the types in the intersection. |
| **Example**                       | `type A = string | number;`                                | `type A = { name: string } & { age: number };`                |
| **Resulting Type**                | The resulting type can be **either** type in the union.    | The resulting type must contain **all properties** from the intersected types. |
| **Use Case**                      | Useful when a value can be **one of several types** (e.g., different input formats). | Useful when a value must **satisfy multiple types** (e.g., merging interfaces with different properties). |
| **Compatibility with Types**      | A value can be **any one type** from the union.            | A value must conform to **all types** in the intersection. |
| **Example with Primitives**       | `let value: string | number = "Hello"; value = 42;`         | N/A (more common with objects).                              |
| **Example with Objects**          | `type Animal = { legs: number } | { wings: number };`      | `type Animal = { legs: number } & { wings: number };`        |
| **Result for Objects**            | The value can be **either** object (not requiring common properties). | The value must have **all properties** from both objects. |
| **Type Narrowing**                | Type narrowing can be done by checking the type (e.g., `typeof` or `instanceof`). | Type narrowing requires checking for common properties from all types involved. |

---

### **Key Takeaways:**
- **Union Types** (`|`): A value can be **one** of multiple types.
- **Intersection Types** (`&`): A value must satisfy **all** the types in the intersection.

---

### **Example:**

#### **Union Type Example:**
```ts
type StringOrNumber = string | number;

let value: StringOrNumber = "Hello";
value = 42;  // Both string and number are allowed
```

#### **Intersection Type Example:**
```ts
interface Person {
  name: string;
}

interface Worker {
  job: string;
}

type Employee = Person & Worker;

const employee: Employee = {
  name: "Alice",
  job: "Engineer",
}; // Must have both `name` and `job` properties
```

---
