
**Core Concepts** • [TypeScript vs JavaScript – Benefits & Improvements](#how-typescript-improves-javascript)   • [`any` vs `unknown` Types](#any-vs-unknown)  • [Duck Typing](#duck-typing)  - [Class](#class)

**Types** • [Type Inference](#type-inference) • [Type Checking](#type-checking) • [Type Coercion](#type-coercion-in-operations) • [Type Narrowing](#type-narrowing)  

**OOPS** - [Polymorphism](#Polymorphism) - [Class](#class)  - [Immutable Class](#Immutable-Class) - [Inheritance](#Inheritance)

**Types & Interfaces** • [Interface vs Type](#interface-vs-type)  • [Extending Types and Interfaces](#extending-types-and-interfaces)  • [Mapped Types](#mapped-types)  • [Utility Types: `Partial`, `Pick`, `Omit`, `Record`](#partial-pick-omit-record)  • [Union vs Intersection Types](#Union-and-Intersection-Types)  



**Advanced Types** • [Template Literal Types](#template-literal-types)  • [`keyof` and `typeof` Operators](#keyof-vs-typeof)  • [Conditional Types](#conditional-types)  • [`readonly` vs `const`](#readonly-vs-const)   


**Generics** • [Generic Functions and Classes](#generics)  • [Constraining Generics with `extends`](#constraining-generics-with-extends)  

**Modules, Namespaces & Compiler**   • [Namespaces and Modules](#namespaces-and-modules)  • [Module System in TypeScript](#module-system-in-typescript)  • [`tsconfig.json` Compiler Options](#tsconfigjson-compiler-options)  • [`esModuleInterop` vs `allowSyntheticDefaultImports`](#esmoduleinterop-vs-allowsyntheticdefaultimports)  

**Functions & Behavior**     • [Function Overloading](#function-overloading)  • [Decorators](#decorators)  • [Declaration Merging](#declaration-merging)  

**Objects & Collections**   • [`Map` vs Plain JavaScript Object](#difference-between-map-and-plain-objects)  • [`Map` vs `WeakMap`](#map-vs-weakmap)   • [`Set` vs `WeakSet`](#set-vs-weakset)









---

## **How TypeScript Improves JavaScript**

- **TypeScript is a superset of JavaScript** that adds **static typing**.
- **Instead of waiting for errors at runtime**, TypeScript **catches type mistakes during compile time**.
- This helps in **early error detection**, saving time and reducing bugs.
- **IDEs and editors** work better with TypeScript, offering **autocompletion, easy refactoring, and quick error highlighting**.
- **Explicit types** make the code **more readable and understandable**, especially in **large projects**.
- Overall, **TypeScript makes development safer, faster, and the codebase much cleaner**.

**Example**:  
```typescript
function add(a: number, b: number): number {
  return a + b;
}
add("2", 3); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
```
TypeScript ensures that only numbers are passed into the `add` function, preventing bugs early in the development cycle.

---
## **Type Inference**

- Type Inference is the compiler's ability to **automatically deduce the type** of a variable, parameter, or expression based on its value or context.
- It helps write **cleaner, less verbose code** without compromising on **type safety**.

---

**Why Type Inference is Useful:**

- Reduces the need for **explicit type annotations**.
- Improves **readability** and **developer productivity**.
- Still allows the compiler to catch **type-related errors**.
- Enhances **maintainability** by keeping types consistent with their initial values.

---

**Examples:**

- **Basic Inference:**
  ```ts
  let num = 100; // inferred as number
  ```

- **Function Return Type:**
  ```ts
  function add(a: number, b: number) {
    return a + b; // inferred as number
  }
  ```

- **Object and Array Inference:**
  ```ts
  let user = { name: "John", age: 30 }; // inferred as { name: string; age: number }
  let scores = [1, 2, 3];               // inferred as number[]
  ```

- **`const` vs `let`:**
  ```ts
  const a = "hello"; // inferred as literal type "hello"
  let b = "hello";   // inferred as string
  ```

---

**Advanced Inference:**

- TypeScript narrows types in conditions:
  ```ts
  function greet(name: string | undefined) {
    if (name) {
      console.log(name.toUpperCase()); // name is inferred as string inside this block
    }
  }
  ```

---

**Limitations:**

- For **complex structures**, inference may not be accurate—explicit types are better.
- If inference fails, TypeScript may assign the `any` type (disabling type checking).

---

**When to Use Inference vs. Annotations:**

- Use inference for:
  - Simple variables
  - Obvious values
  - Internal implementation details

- ❗ Use annotations for:
  - Public APIs
  - Function return types
  - Complex or generic types

---




## **Any vs Unknown**


| **Feature**          | **`any`**                                       | **`unknown`**                                      |
|----------------------|-------------------------------------------------|----------------------------------------------------|
| **Type Safety**      | No type safety. You can perform any operation on a variable of type `any` without restrictions. | Requires type checks before performing operations. TypeScript forces you to verify the type first. |
| **Flexibility**      | Very flexible, as any value can be assigned and used in any way. | Flexible but requires type checking or type assertion before use. |
| **When to Use**      | When you need dynamic behavior, and you're willing to bypass TypeScript’s type checking. | When you need flexibility but want to enforce safer, type-checked operations. |
| **Code Safety**      | Less safe, can lead to runtime errors due to lack of type checks. | Safer, as TypeScript forces you to handle the value before using it. |
| **Example**          | ```typescript<br>let value: any = 42;<br>value = "hello";  // No error<br>``` | ```typescript<br>let value: unknown = 42;<br>if (typeof value === "string") {<br>  console.log(value.length);  // Valid<br>}<br>``` |



> In TypeScript:
> - **`unknown`** is a **safer version of `any`**. It represents **any value**, but unlike `any`, you must **narrow its type** before using it (e.g., through type checks or type assertions).
> - **`any`** allows **any operation** to be performed on it without restrictions, making it **more permissive but less safe**.

---

| **Example**

```ts
let value1: any = "hello";
value1 = 42; // OK, `any` can be reassigned freely

let value2: unknown = "hello";
value2 = 42; // OK, but you must narrow the type before using it

// Using `value2` directly would cause an error
// value2.toUpperCase(); // Error: Object is of type 'unknown'

// Narrowing `unknown` before using it
if (typeof value2 === "string") {
  console.log(value2.toUpperCase());  // OK, after type narrowing
}
```

**Key Differences**
| Type      | `any`                                | `unknown`                           |
|-----------|--------------------------------------|-------------------------------------|
| Safety    | **No safety** — any operation is allowed | **Requires type checking** before use |
| Use case  | When you don't care about types (use carefully) | When you want to ensure proper type handling |

---


## **Duck Typing**

- "In TypeScript, **duck typing** means that an object is considered of a certain type **as long as it has the required properties or methods**, even if it doesn’t explicitly implement a class or interface."
- "Basically, if it **looks like a duck and quacks like a duck**, we treat it like a duck — the actual structure matters more than the specific label."
- "This is common when we use **interfaces** in TypeScript, where we just check if the object matches the **shape** we expect, rather than its actual type name."


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





## Type Narrowing

> **Type narrowing** is the process where TypeScript figures out a more specific type for a variable from a union type.

**Example**
```ts
function printLength(value: string | string[]) {
  if (typeof value === "string") {
    console.log(value.length);       // value: string
  } else {
    console.log(value.length);       // value: string[]
  }
}
```
> The variable `value` starts as `string | string[]`, but within each `if` branch, TypeScript **narrows** the type.












## **Interface vs. Type**

- "`interface` and `type` are both used to define the structure of data in TypeScript."
- "Interfaces are mainly for describing object shapes and can be **extended** or **implemented** by classes."
- "Types are more flexible — they can describe **objects, primitives, unions, intersections**, and more."
- "One major difference is: **interfaces can be merged**, but **types cannot** be merged once created."
- "In practice, if I'm only defining an object structure, I prefer using an `interface`."
- "If I need to create something complex, like combining multiple types or handling different kinds of data, then `type` is a better fit."


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
## **Extending Types and Interfaces**

TypeScript allows both **`interface`** and **`type`** aliases to be extended or combined, but with some key differences and use cases.

---

** 🔹 **Extending Interfaces**
- Use the `extends` keyword.
- Interfaces can be extended multiple times.
- Useful for creating object shapes and enabling structural subtyping.

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  jobTitle: string;
}

const emp: Employee = {
  name: "Alice",
  jobTitle: "Developer",
};
```

---

** 🔸 **Extending Types**
- You can extend a `type` using **intersection types (`&`)**.
- Suitable for combining multiple types or primitives.

```ts
type Person = {
  name: string;
};

type Employee = Person & {
  jobTitle: string;
};

const emp: Employee = {
  name: "Bob",
  jobTitle: "Designer",
};
```

---

** ⚖️ **Comparison Table**

| Feature                       | `interface`                                | `type`                                      |
|------------------------------|---------------------------------------------|----------------------------------------------|
| Syntax for extension         | `extends`                                   | Intersection (`&`)                          |
| Multiple inheritance         | Yes                                       | Yes (with `&`)                            |
| Declaration merging          | Supported                                | ❌ Not supported                             |
| Extend classes               | Can extend a class                       | ❌ Cannot extend classes                     |
| Use with primitives          | ❌ No                                        | Yes (e.g., `string | number`)            |
| Preferred use case           | Object shapes                               | Unions, intersections, and advanced types    |

---

** 💡 Best Practices
- Use **`interface`** for object-oriented designs or APIs.
- Use **`type`** when dealing with union/intersection types or more complex combinations.




## **Mapped Types**


- "Mapped types in TypeScript are used to create **new types** by transforming the properties of an existing type."
- "For example, I can make all properties **readonly**, **optional**, or even **change their types** dynamically."
- "They are really helpful when I want to apply a consistent transformation across all properties without rewriting the entire type."
- "Common built-in mapped types include `Readonly`, `Partial`, and `Required`."


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





## `Partial` `Pick` `Omit` `Record`



> **Utility types** in TypeScript are built-in **generics** that allow you to **transform** or **manipulate** types in a variety of useful ways. They help you **create new types** based on existing ones, making the development process **more efficient** and **type-safe**.

---

** 🧠 **1. `Partial<T>`** — Makes all properties **optional** in a given type `T`.

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

** 🧠 **2. `Pick<T, K>`** — Creates a new type by **picking** specific properties `K` from type `T`.

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

** 🧠 **3. `Omit<T, K>`** — Creates a new type by **omitting** specific properties `K` from type `T`.

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

** 🧠 **4. `Record<K, T>`** — Creates a type with **keys** `K` and **values** `T`.

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

** 📢 Summary of Utility Types:
| Utility Type | Description                                             | Example                            |
|--------------|---------------------------------------------------------|------------------------------------|
| `Partial<T>` | Makes all properties of `T` optional                    | `Partial<User>`                    |
| `Pick<T, K>` | Selects a subset of properties from `T` (using keys `K`) | `Pick<User, "name" | "email">`     |
| `Omit<T, K>` | Removes specified properties from `T`                   | `Omit<User, "age">`                |
| `Record<K, T>` | Creates a dictionary where keys are `K` and values are `T` | `Record<string, number>`           |

---

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

 **Key Takeaways:**
- **Union Types** (`|`): A value can be **one** of multiple types.
- **Intersection Types** (`&`): A value must satisfy **all** the types in the intersection.

---

 **Example:**

**Union Type Example:**
```ts
type StringOrNumber = string | number;

let value: StringOrNumber = "Hello";
value = 42;  // Both string and number are allowed
```

**Intersection Type Example:**
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
## keyof Vs typeof

**Key Points**
| Operator | Purpose                      | Example                               |
|----------|-------------------------------|---------------------------------------|
| `typeof` | Get the type of a value        | `typeof person` ➔ `{ name: string; age: number }` |
| `keyof`  | Get keys from a type (as union)| `keyof Person` ➔ `"name" | "age"`    |


> In TypeScript:
> - **`typeof`** is used to **get the type** of a **value**.
> - **`keyof`** is used to **get the keys** of a **type** as a **union of strings**.

---

**1. `typeof` — Get Type from a Value**
Used when you want to create a type based on a real variable or object.

```ts
const person = {
  name: "Alice",
  age: 30,
};

type Person = typeof person;
// Same as:
// type Person = { name: string; age: number; }
```

`typeof` helps **reuse** or **reference** a variable's structure as a type.

---

**`keyof` — Get **Keys of a Type****  
Used to extract **property names** from a type.

```ts
type PersonKeys = keyof Person;
// PersonKeys = "name" | "age"
```

`keyof` gives a **union of keys** (`"name" | "age"`) from the `Person` type.

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

** **Key Takeaways:**
- **`readonly`** is useful when you want to make **object properties** or **array elements immutable**, ensuring that their values cannot be changed.
- **`const`** ensures the **variable reference** cannot be reassigned, but it does not prevent modifications to the contents of objects or arrays.






## **Generics**

* **Definition**:
  Generics allow functions, classes, and interfaces to work with multiple types without losing type safety.

* **Purpose**:
  They enable **code reuse** while maintaining **strong typing**, unlike `any`, which removes type checks.

* **Basic Syntax Example**:

  ```ts
  function identity<T>(arg: T): T {
    return arg;
  }
  ```

  * `T` is a placeholder for any type.
  * Calling `identity("Hello")` infers `T` as `string`.


* **Use in Interfaces & Classes**:

  ```ts
  interface Box<T> {
    value: T;
  }

  class DataHolder<T> {
    constructor(private data: T) {}
    get(): T {
      return this.data;
    }
  }
  ```

* **Benefits**:

  * Reusability across types
  * IDE autocompletion and intellisense
  * Safer refactoring
  * No need for manual type casting

---



###  **Use Case: Creating a Type-Safe Utility for Array Filtering**

On working with different types of data (e.g., `User[]`, `Product[]`, etc.) and want to write a **reusable filter function** that works for any array of objects.

Instead of duplicating code for each type, you can use **generics** to keep it type-safe and flexible.

---

###  **Generic Filter Function Example**

```ts
function filterByKey<T, K extends keyof T>(
  items: T[],
  key: K,
  value: T[K]
): T[] {
  return items.filter(item => item[key] === value);
}
```

###  **Usage with Different Types**

```ts
interface User {
  id: number;
  role: string;
}

interface Product {
  name: string;
  isAvailable: boolean;
}

const users: User[] = [
  { id: 1, role: 'admin' },
  { id: 2, role: 'user' },
];

const products: Product[] = [
  { name: 'Laptop', isAvailable: true },
  { name: 'Phone', isAvailable: false },
];

// Reuse the same function
const admins = filterByKey(users, 'role', 'admin');
const availableProducts = filterByKey(products, 'isAvailable', true);
```

---

### 🎯 **Why This Is Useful**

* **Generic `<T>`** allows the function to work with any object type.
* **`K extends keyof T`** ensures the key is valid for that object.
* **`T[K]`** ensures the value matches the key's type.
* You get **full type-safety** and **autocomplete** in your IDE.

---



## **Constraining Generics with `extends`**

---

- In TypeScript, the `extends` keyword is used to **constrain a generic type** to ensure it satisfies a specific shape or base type.
  
- This helps enforce **type safety** and provides **better IntelliSense/autocompletion**.

- **Example (structural constraint)**:
  ```ts
  function getLength<T extends { length: number }>(item: T): number {
    return item.length;
  }
  ```
  - Only accepts values with a `length` property (e.g., strings, arrays).
  - Passing a number would result in a compile-time error.

- **Example (union type constraint)**:
  ```ts
  function doSomething<T extends "start" | "stop">(action: T) { ... }
  ```
  - Accepts only `"start"` or `"stop"` as valid values.

- **Example (interface constraint)**:
  ```ts
  interface Person { name: string; age: number; }
  function greet<T extends Person>(person: T) { ... }
  ```
  - Ensures the argument matches or extends the `Person` structure.

- **Example (key constraint with `keyof`)**:
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




## **Union Types**
  - In TypeScript, Union Types let a variable hold more than one type.
 - For example, I can say let id: string | number;, which means id can either be a string or a number. If I assign a boolean to it, TypeScript will show an error.
 - We use the | symbol to join the types. It’s very helpful when you expect a function or a variable to handle multiple types of inputs.
 - A common place where I use Union Types is in functions. Like, if I have a printId function, it can accept either a string or a number, and inside the function, I can check using typeof to know what exactly it is.
 - It's useful because it keeps the flexibility without losing type safety, unlike using any.
 - We often use Union Types when handling different kinds of user inputs, API responses, or when something might be undefined or a specific type."**
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








## `esModuleInterop` and `allowSyntheticDefaultImports`

** 🔧 `esModuleInterop`

- **Purpose**: Enables a cleaner default import style from CommonJS modules.
- **Transforms**: Adds a synthetic default export to CommonJS modules (via helper functions like `__importDefault`).
- **Default behavior**: `import fs from 'fs'` works, even though Node’s `fs` is CommonJS.
- **Depends on**: **Automatically enables `allowSyntheticDefaultImports`**
- **Emits helper functions**: Yes (`__importDefault`)

```ts
// With esModuleInterop: Works even though fs is a CommonJS module
import fs from 'fs';
```

---

** 🔧 `allowSyntheticDefaultImports`

- **Purpose**: Allows writing default import syntax (`import x from 'x'`) **without TypeScript complaining**, even if the module doesn’t have a default export.
- **Only affects type checking**: Doesn’t affect emitted JavaScript.
- **Does NOT emit helpers**: So the runtime may fail if used incorrectly.
- **Use case**: For compatibility with Babel or webpack setups that handle interop differently.

```ts
// With allowSyntheticDefaultImports: Compiles, but may fail at runtime if not bundled correctly
import fs from 'fs';
```

---

** Summary Table

| Feature                          | `esModuleInterop` | `allowSyntheticDefaultImports` |
|----------------------------------|--------------------|-------------------------------|
| Enables default imports from CJS | Yes             | Yes (only at type level)   |
| Affects emitted JavaScript       | Yes             | ❌ No                         |
| Adds helper functions            | Yes             | ❌ No                         |
| Safer for CommonJS interop       | Yes             | 🚫 Risky without bundler      |
| Implies the other                | Implies `allowSyntheticDefaultImports` | ❌ Does not imply `esModuleInterop` |

---

** Recommendation
- Use **`esModuleInterop: true`** if you want full compatibility and safe default import behavior from CommonJS modules.
- Use **`allowSyntheticDefaultImports: true`** only if you are using a bundler (like Webpack or Babel) that handles interop for you.







## Namespaces and modules

> In TypeScript:
> - **Namespaces** are used to **organize code** **inside a single file** or across **multiple files** by grouping related logic.
> - **Modules** are based on the **file system** — each file becomes its **own module** if it uses `import` or `export`.

---

** 🧠 Example 1: **Namespace**
```ts
namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b;
  }

  export function multiply(a: number, b: number): number {
    return a * b;
  }
}

// Usage:
const sum = MathUtils.add(2, 3);  // 5
```
Here, `MathUtils` groups `add` and `multiply` under one "namespace."

---

** 🧠 Example 2: **Module**
```ts
// mathUtils.ts
export function add(a: number, b: number): number {
  return a + b;
}
export function multiply(a: number, b: number): number {
  return a * b;
}

// app.ts
import { add, multiply } from "./mathUtils";

const sum = add(2, 3);
```
Here, `mathUtils.ts` is a **module** because it uses `export`, and we **import** its functions in another file.

---

** 📢 Important Points:
| Feature         | Namespace                        | Module                           |
|-----------------|-----------------------------------|----------------------------------|
| How it works    | Groups code inside the same file  | Each file is a separate module   |
| Keywords used   | `namespace` and `export`          | `import` and `export`            |
| Compilation     | Needs special flags like `--outFile` | No special flags (default behavior) |
| Usage today     | **Less common now** (older style) | **Standard practice** (modern)   |

---




## **Union** and **Intersection Types** 
---

 **Union Types (`|`)**
- **Definition**: A type that allows a value to be **one of several types**.
- **Operator**: `|` (pipe symbol).
- **Resulting Type**: A value that can be **any one** of the specified types.
- **Use Case**: When a value can be **either** one type or another.
- **Common Scenarios**: 
  - Multiple types for function parameters.
  - Union of primitive types (e.g., `string | number`).
- **Type Checking**: 
  - Use type narrowing (`typeof`, `in`, or `instanceof`) to identify which type is in use.
- **Example**:
  ```ts
  type A = string | number;
  
  let value: A;
  value = "hello"; // 
  value = 123;     // 
  ```
  
---

** **Intersection Types (`&`)**
- **Definition**: A type that requires a value to **satisfy all combined types**.
- **Operator**: `&` (ampersand symbol).
- **Resulting Type**: A value that must conform to **all** types in the intersection.
- **Use Case**: When a value needs to have **combined properties** or behavior from multiple types.
- **Common Scenarios**: 
  - Combining multiple interfaces or object types.
  - Merging different behaviors into one object.
- **Type Checking**: 
  - No need for narrowing; the value must have all properties from the intersected types.
- **Example**:
  ```ts
  type B = { name: string } & { age: number };

  const person: B = {
    name: "Alice",
    age: 30,
  }; // Must have both properties
  ```

---

** **Key Differences**
- **Union Types (`|`)**: Choose **one** from multiple types.
- **Intersection Types (`&`)**: Combine **all** types together, meaning the value must match **all** constraints.




## **Module System in TypeScript**
- **Definition**: TypeScript uses **ES6 modules** to structure code into reusable files.
- **Modules**:
  - A **module** is any file that contains `export` and/or `import`.
  - Each file is treated as a separate module, with its own scope.

**Key Features**:
- **Exporting**:
  - **Named Export**: Export multiple entities from a module.
    ```ts
    export const add = (a: number, b: number) => a + b;
    ```
  - **Default Export**: Export a single entity (e.g., class or function).
    ```ts
    const add = (a: number, b: number) => a + b;
    export default add;
    ```
  
- **Importing**:
  - **Named Import**: Import specific exports from a module.
    ```ts
    import { add } from './math';
    ```
  - **Import Entire Module**: Use `import * as` to bring in all exports as an object.
    ```ts
    import * as MathFunctions from './math';
    ```
  - **Destructured Import**: Import only selected members.
    ```ts
    import { add } from './math';
    ```

- **Module Resolution**: TypeScript uses different strategies to resolve modules (e.g., **Classic**, **Node** resolution).
  - **Node Resolution**: Looks for modules in `node_modules` or relative paths.

- **Configuration in `tsconfig.json`**:
  - The `module` option determines the module system to use, e.g., `"module": "ES6"` for ES6 modules.
  - Example:
    ```json
    {
      "compilerOptions": {
        "module": "ES6",
        "moduleResolution": "Node"
      }
    }
    ```

- **CommonJS vs ES6 Modules**:
  - **CommonJS**: Uses `require()` and `module.exports`.
  - **ES6 Modules**: Uses `import` and `export` syntax.

- **Benefits**:
  - **Encapsulation**: Keeps code isolated in modules, exposing only necessary parts.
  - **Reusability**: Import/export allows easy reuse of code across files.
  - **Type Safety**: Modules bring in type-checking for imported/exported code.

---




---
## **`tsconfig.json` compiler options**

---

**Basic Options**
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

**Strict Type-Checking Options**
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

**Module Resolution**
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

**Emit / Output Options**
| Option                 | Description |
|------------------------|-------------|
| `declaration`          | Generate `.d.ts` declaration files |
| `sourceMap`            | Generate `.map` files for debugging |
| `removeComments`       | Remove comments in output |
| `noEmit`               | Don’t emit output (useful for type-check only) |
| `incremental`          | Enable incremental compilation with `.tsbuildinfo` |

---

 **Experimental Options**
| Option                 | Description |
|------------------------|-------------|
| `experimentalDecorators` | Enable support for decorators |
| `emitDecoratorMetadata`  | Emit design-type metadata for decorated declarations |
| `useDefineForClassFields` | Emit ES `define` semantics for class fields |

---

**Other Helpful Options**
| Option                 | Description |
|------------------------|-------------|
| `skipLibCheck`         | Skip type checking of declaration files (`.d.ts`) |
| `forceConsistentCasingInFileNames` | Ensure file name case consistency across OSs |

---

**Sample `tsconfig.json`**
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







## **`esModuleInterop` vs `allowSyntheticDefaultImports`**

**`esModuleInterop`**  
- **Purpose**: Ensures compatibility between CommonJS and ES6 module systems.
- **What It Does**:
  - Enables default imports from CommonJS modules.
  - Converts `import x from 'module'` to `import * as x from 'module'` for non-ES6 modules.
  - Resolves interoperability issues between TypeScript and CommonJS-style modules.
- **Use Case**: When working with CommonJS modules (like `require`-based modules) in a project using ES6 module syntax.
- **Setting**:
  - `"esModuleInterop": true`
  - **Effect**: Allows you to use the default `import` syntax with CommonJS modules.
- **Example**:
  ```ts
  // CommonJS module
  const express = require('express');
  
  // ES6 style import with esModuleInterop enabled
  import express from 'express'; // Works correctly
  ```

**`allowSyntheticDefaultImports`**  
- **Purpose**: Allows default imports from modules without a default export, without enabling full interop with CommonJS.
- **What It Does**:
  - **Only allows default imports** from modules that do not have a default export.
  - Does **not enable CommonJS interop** (i.e., it does not convert the `import * as x from 'module'` for CommonJS).
  - Primarily affects **ES6 module imports** and **non-default exports**.
- **Use Case**: When you want to import CommonJS-style modules using the default import syntax, but you don't need full interop.
- **Setting**:
  - `"allowSyntheticDefaultImports": true`
  - **Effect**: Allows you to use `import x from 'module'` even if `module` does not have a default export.
- **Example**:
  ```ts
  // CommonJS module
  const express = require('express');
  
  // ES6 style import with allowSyntheticDefaultImports enabled
  import express from 'express'; // Works even without default export
  ```

**Key Differences**
| Feature                       | **`esModuleInterop`**                                 | **`allowSyntheticDefaultImports`**                        |
|-------------------------------|-------------------------------------------------------|----------------------------------------------------------|
| **Purpose**                    | Enables full compatibility between CommonJS and ES6.  | Allows default imports from modules without default export. |
| **Effect**                     | Changes the behavior of imports for CommonJS modules. | Allows default imports without CommonJS interop.           |
| **Module Type Compatibility**  | Provides full CommonJS interop, converting imports.   | Allows default imports but does not enable full interop.   |
| **Common Use Case**            | When using CommonJS and ES6 modules together.         | When you need default imports from non-default export modules. |

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

📢 Key Points:
1. **Overload Signatures**: First, you declare the possible **types of inputs** that the function can accept. 
2. **Implementation**: Then, you provide one function implementation that handles all overload cases.
3. TypeScript uses **the correct overload signature** based on how you call the function.

---


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





## Declaration Merging


> **Declaration Merging** in TypeScript means that **when two declarations have the same name, TypeScript automatically merges them into a single definition**.  
> This happens commonly with **interfaces**, **namespaces**, and sometimes **functions and classes**.

---

| **Example**

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













## **Difference Between Map and Plain Objects**


### 🗝️ **Key Types**

* **`Object`**: Keys must be **strings** (or symbols).
* **`Map`**: Keys can be **any type** – string, number, object, function, etc.

```ts
const obj: any = {};
obj[123] = "value"; // key becomes "123" (a string)

const map = new Map();
map.set(123, "value"); // key remains a number
```

---

### 🔢 **Order of Keys**

* **Object**: Order **not guaranteed** (though modern engines try to preserve insertion order for string keys).
* **Map**: **Guaranteed insertion order**.

```ts
const obj = { b: 1, a: 2 };
console.log(Object.keys(obj)); // Might be ['b', 'a']

const map = new Map();
map.set('b', 1);
map.set('a', 2);
console.log([...map.keys()]); // ['b', 'a']
```

---

### 🚀 **Performance**

* **Object**: Good for **small**, simple lookups.
* **Map**: Better for **large** datasets and **frequent additions/deletions**.

---

### 🧬 **Prototype Inheritance**

* **Object**: Inherits from `Object.prototype`, which may cause conflicts:

```ts
console.log(obj.toString); // exists by default
```

* **Map**: No prototype interference:

```ts
console.log(map.toString); // undefined
```

---

### 🔁 **Iteration**

* **Object**:

  ```ts
  for (let key in obj) { console.log(key, obj[key]); }
  ```

* **Map**:

  ```ts
  map.forEach((value, key) => console.log(key, value));
  // or
  for (let [key, value] of map.entries()) {
    console.log(key, value);
  }
  ```

---

### ✅ Summary Table

| Feature            | Object               | Map                             |
| ------------------ | -------------------- | ------------------------------- |
| Key Types          | Strings/Symbols only | Any type                        |
| Key Order          | Not guaranteed       | Preserved (insertion order)     |
| Performance        | OK for small lookups | Better for large data/modifies  |
| Prototype Issues   | Yes                  | No                              |
| Built-in Iteration | Manual               | Built-in (`forEach`, `entries`) |

---

Let me know if you’d like a cheat sheet or visual chart for this!

---












## Map vs WeakMap

| Feature                    | `Map`                                   | `WeakMap`                              |
|---------------------------|------------------------------------------|----------------------------------------|
| **Key types**             | Any value (primitives or objects)        | **Only objects** (not primitives)      |
| **Garbage collection**    | Keys are **strongly referenced**         | Keys are **weakly referenced**         |
| **Iterable**              | Yes (can use `forEach`, `for...of`)   | ❌ No (not iterable)                   |
| **Size property**         | Has `.size` to get number of entries  | ❌ No `.size` property                 |
| **Use case**              | General-purpose key-value storage        | Private data storage tied to objects   |
| **Memory leak risk**      | Possible if not cleared manually         | Lower risk due to GC when keys die     |

---

| **Example**
```ts
const map = new Map();
map.set("key", "value");
map.set({ id: 1 }, "object value");
console.log(map.size); // 2
```

| **Example**
```ts
const weakMap = new WeakMap();
let obj = { name: "Alice" };
weakMap.set(obj, "some private data");

// After `obj` is no longer referenced, it's eligible for garbage collection
obj = null;
```

**When to use**
- **Use `Map`**: when you need to iterate, count, or use non-object keys.
- **Use `WeakMap`**: when storing **private data per object** that should not prevent garbage collection.






## Set vs WeakSet



| Feature                     | `Set`                                        | `WeakSet`                                      |
|----------------------------|----------------------------------------------|------------------------------------------------|
| **Value types**            | Any type (primitives or objects)             | **Only objects** (no primitives)               |
| **Garbage collection**     | Values are strongly referenced               | Values are **weakly referenced**               |
| **Iterable**               | Yes (`forEach`, `for...of`, spread, etc.) | ❌ No (not iterable, no `forEach`, no spread)  |
| **Size property**          | Has `.size`                               | ❌ No `.size`                                   |
| **Duplicates allowed?**    | ❌ No duplicates (same value only once)      | ❌ No duplicates                                |
| **Use case**               | Unique list of values                       | Track object presence without preventing GC    |
| **Memory management**      | Manual                                       | Automatic (objects are GC-ed when unreferenced) |

---


| **Example**
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

| **Example**
```ts
const weakSet = new WeakSet();
let obj = { id: 1 };
weakSet.add(obj);

console.log(weakSet.has(obj)); // true
obj = null; // Now eligible for garbage collection
```

---

**When to use**
- **Use `Set`**: when you need a list of **unique values** and want to **iterate or check size**.
- **Use `WeakSet`**: when you want to **track objects without preventing their garbage collection**, such as for **caching or tracking object state** internally.



## **Type Checking**
To check the data type of a variable, you can use the `typeof` operator for primitives and `instanceof` for objects.

**Example:**
```javascript
let num = 5;
console.log(typeof num); // "number"

let obj = {};
console.log(typeof obj); // "object"
console.log(obj instanceof Object); // true



console.log(typeof null);        // "object" ❗ (Legacy bug in JS)
console.log(typeof []);          // "object"
console.log(typeof NaN);         // "number"
console.log(typeof function(){}); // "function"
console.log(typeof undefined);   // "undefined"


const a = [];
const b = [];

console.log(a == b); // false -- Becoz of Both a and b point to different memory addresses.


const a = [];
const b = a;

console.log(a == b); // true -- Becoz of  same array instance

console.log({} == {}); // false -- Becoz of Both a and b point to different memory addresses.


const arr1 = [1, 2];
const arr2 = [1, 2];

console.log(JSON.stringify(arr1) === JSON.stringify(arr2)); // true ✅



```

---

## **Type Coercion in Operations**



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


## Polymorphism 

Requires behavior differences via method implementation

```javascript

// Base interface
interface Person {
  name: string;
  introduce(): string;
}

// Employee implements Person
class Employee implements Person {
  constructor(public name: string, public jobTitle: string) {}

  introduce(): string {
    return `Hi, I'm ${this.name}, and I work as a ${this.jobTitle}.`;
  }
}

// Student also implements Person
class Student implements Person {
  constructor(public name: string, public major: string) {}

  introduce(): string {
    return `Hi, I'm ${this.name}, studying ${this.major}.`;
  }
}

// Polymorphic function
function printIntroduction(p: Person) {
  console.log(p.introduce());
}

// Usage
const emp = new Employee("Alice", "Software Developer");
const stu = new Student("Bob", "Computer Science");

printIntroduction(emp); // Hi, I'm Alice, and I work as a Software Developer.
printIntroduction(stu); // Hi, I'm Bob, studying Computer Science.
```




## Class

```javascript
class Person {
  // Properties
  name: string;
  age: number;

  // Constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Usage
const person1 = new Person("Alice", 30);
person1.greet();  // Output: Hello, my name is Alice and I am 30 years old.
```


## Immutable Class

```javascript
class Person {
  // All fields are readonly
  public readonly name: string;
  public readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;

    // Optional: freeze to prevent runtime mutations (shallow)
    Object.freeze(this);
  }

  // Read-only method
  describe(): string {
    return `${this.name} is ${this.age} years old.`;
  }
}
```


## Inheritance 

```javascript

// Parent class
class Vehicle {
  constructor(public brand: string) {}

  start(): void {
    console.log(`${this.brand} vehicle is starting...`);
  }
}

// Child class
class Car extends Vehicle {
  constructor(brand: string, public model: string) {
    super(brand); // Call the parent class constructor
  }

  showDetails(): void {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }
}

// Usage
const myCar = new Car("Toyota", "Corolla");
myCar.start();         // Output: Toyota vehicle is starting...
myCar.showDetails();   // Output: Brand: Toyota, Model: Corolla
```
