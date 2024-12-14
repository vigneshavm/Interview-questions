# Typescript-Specific Questions
1. What are the differences between interface and type in TypeScript? When would you use one over the other?
2. Explain the concept of generics in TypeScript. Can you provide an example of how generics can be useful in building reusable components?
3. How does TypeScript handle inheritance? How can you extend classes or interfaces in TypeScript?
4. What is a union type, and how is it used in TypeScript?
5. How does TypeScript’s type inference work? Can you give an example of explicit vs implicit typing?
6. What are mapped types, and how do they work? Can you provide an example?
7. Can you explain decorators in TypeScript and give an example where they could be useful in a Node.js application?
8. How does TypeScript handle async/await, and what are the potential pitfalls or challenges when using them?
9. What are utility types in TypeScript (e.g., Partial, Pick, Omit)? Can you explain how they help with type transformations?
10. Can you describe how TypeScript’s module system works and the difference between esModuleInterop and allowSyntheticDefaultImports?


-------------- Solutions ------------ 
### **1. Differences Between `interface` and `type` in TypeScript**

| **Aspect**            | **Interface**                     | **Type**                               |
|------------------------|----------------------------------|---------------------------------------|
| **Definition**         | Declares a contract for objects. | Creates an alias for types.           |
| **Extensibility**      | Can be extended (merged) using `extends`. | Cannot be extended; must be recreated. |
| **Composition**        | Supports declaration merging.    | Supports intersections (`&`) for merging. |
| **Usability**          | Primarily for objects, classes.  | Can alias primitives, tuples, etc.    |
| **Performance**        | Interfaces are slightly faster.  | Type aliases can handle advanced types.|

#### **When to Use:**
- Use **interface** for objects/classes because of its merging capabilities and better performance.
- Use **type** for primitives, unions, or more complex type transformations.

```typescript
// Interface example
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  jobTitle: string;
}

// Type alias example
type Point = { x: number; y: number };
type ReadOnlyPoint = Readonly<Point>;
```

---

### **2. Generics in TypeScript**

Generics allow you to write **reusable components** with types as parameters.

**Why useful?** They provide flexibility while maintaining type safety.

```typescript
// Generic Function
function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(10)); // 10
console.log(identity<string>("Hello")); // "Hello"

// Generic Interface
interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "TypeScript" };
const numberBox: Box<number> = { content: 123 };
```

---

### **3. TypeScript Inheritance**

1. **Extending Classes**:
   TypeScript allows classes to inherit properties and methods using `extends`.

```typescript
class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const myDog = new Dog();
myDog.move(); // Moving...
myDog.bark(); // Woof!
```

2. **Extending Interfaces**:
   Interfaces can extend other interfaces.

```typescript
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}

const emp: Employee = { name: "John", employeeId: 123 };
```

---

### **4. Union Types**

Union types allow a variable to have more than one type.

```typescript
let id: string | number;
id = 123; // valid
id = "ABC"; // valid

function display(value: string | number) {
  console.log(value);
}
```

---

### **5. Type Inference**

- **Implicit Typing**: TypeScript infers the type based on the value.
- **Explicit Typing**: You manually declare the type.

```typescript
// Implicit
let age = 25; // Inferred as number
// age = "hello"; // Error

// Explicit
let name: string = "John";
```

---

### **6. Mapped Types**

Mapped types allow you to create new types by transforming keys of existing types.

```typescript
type User = {
  name: string;
  age: number;
};

// Make all properties optional
type PartialUser = {
  [K in keyof User]?: User[K];
};

const user: PartialUser = { name: "Alice" };
```

---

### **7. Decorators in TypeScript**

Decorators are functions that **modify behavior** of classes, methods, properties, etc.

**Usage Example** in a Node.js app:
```typescript
import "reflect-metadata";

// A class decorator
function Controller(route: string) {
  return function (target: Function) {
    target.prototype.route = route;
  };
}

@Controller("/api/user")
class UserController {
  getUser() {
    console.log("Fetching User...");
  }
}

const userCtrl = new UserController();
console.log(userCtrl.route); // "/api/user"
```

- Decorators are **experimental** and require `"experimentalDecorators": true` in `tsconfig.json`.

---

### **8. Async/Await in TypeScript**

Async/await simplifies asynchronous code using Promises.

**Example**:
```typescript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

**Pitfalls**:
1. Error handling requires `try/catch`.
2. Blocking behavior if used improperly (e.g., `await` inside loops).

---

### **9. Utility Types**

Utility types help transform existing types.

1. **Partial**: Makes all properties optional.
```typescript
interface User {
  name: string;
  age: number;
}

type PartialUser = Partial<User>;
```

2. **Pick**: Picks specific properties.
```typescript
type UserName = Pick<User, "name">;
```

3. **Omit**: Omits specific properties.
```typescript
type UserWithoutAge = Omit<User, "age">;
```

---

### **10. Module System and `esModuleInterop`**

- TypeScript supports **CommonJS** (`require`) and **ES Modules** (`import`/`export`).

**Key Flags**:
1. **`esModuleInterop`**:
   - Allows default imports from modules that don’t have a default export.
   ```typescript
   import fs from "fs"; // Works if enabled
   ```

2. **`allowSyntheticDefaultImports`**:
   - Works similarly, but only for type-checking (does not affect emitted code).

**Example**:
```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```

With `esModuleInterop`, importing modules becomes simpler when working with legacy libraries.

--- 
