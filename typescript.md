# **TypeScript Interview Questions & Answers**
---

### **How does TypeScript improve JavaScript?**  
✅ **Static Typing** (`number`, `string`, `boolean`, `any`)  
✅ **Interfaces & Types** (`interface User { name: string; age: number }`)  
✅ **Better Code Completion & Debugging**  

Example:  
```ts
function greet(name: string): string {
    return `Hello, ${name}`;
}
console.log(greet("John")); // ✅ Hello, John
```



### **1. Interface vs. Type**
**Differences:**

| Aspect         | Interface                      | Type                          |
|----------------|---------------------------------|-------------------------------|
| **Definition** | Contract for objects            | Alias for types               |
| **Extensibility** | `extends`, merging allowed      | Uses intersections (`&`)      |
| **Use Cases**  | Best for objects, classes       | For primitive types, unions   |

**When to Use:**
- **Interface:** When working with objects or classes (supports declaration merging).
- **Type:** For unions, tuples, or complex transformations.

```typescript
// Interface
interface Person { name: string; age: number; }
interface Employee extends Person { jobTitle: string; }

// Type Alias
type Point = { x: number; y: number };
type ReadOnlyPoint = Readonly<Point>;
```

---

### **2. Generics**
Generics provide flexibility while maintaining type safety, making code reusable.

```typescript
// Generic Function
function identity<T>(value: T): T { return value; }

// Generic Interface
interface Box<T> { content: T; }

const stringBox: Box<string> = { content: "TypeScript" };
```

---

### **3. Inheritance**
- **Extending Classes**:

```typescript
class Animal { move() { console.log("Moving..."); } }
class Dog extends Animal { bark() { console.log("Woof!"); } }

const dog = new Dog();
dog.move(); // Moving...
dog.bark(); // Woof!
```

- **Extending Interfaces**:

```typescript
interface Person { name: string; }
interface Employee extends Person { employeeId: number; }
const emp: Employee = { name: "John", employeeId: 123 };
```

---

### **4. Union Types**
Union types allow a variable to hold multiple types.

```typescript
let id: string | number;
id = 123; // valid
id = "ABC"; // valid

function display(value: string | number) { console.log(value); }
```


---

### **What is Duck Typing in TypeScript?**  
If an object has required properties, it's considered compatible (structural typing).  

Example:  
```ts
interface User {
    name: string;
    age: number;
}
const user = { name: "Alice", age: 25, city: "NY" }; // Extra props are ignored
let person: User = user;  // ✅ Works
```

---

---

### **5. Type Inference**
TypeScript infers types based on variable initialization.

```typescript
// Implicit Inference
let age = 25; // inferred as number

// Explicit Type
let name: string = "John";
```

---

### **6. Mapped Types**
Mapped types allow transforming types dynamically.

```typescript
type User = { name: string; age: number; };
type PartialUser = { [K in keyof User]?: User[K]; };
const user: PartialUser = { name: "Alice" };
```

---

### **7. Decorators**
Decorators modify classes, methods, or properties. Enable with `experimentalDecorators: true` in `tsconfig.json`.

```typescript
import "reflect-metadata";

function Controller(route: string) {
  return function(target: Function) { target.prototype.route = route; };
}

@Controller("/api/user")
class UserController { getUser() { console.log("Fetching User..."); } }

console.log(new UserController().route); // "/api/user"
```

---

### **8. Async/Await**
Async/await simplifies working with promises and asynchronous code.

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

---

### **9. Utility Types**
Common utility types to transform types:
- **Partial**: Makes all properties optional.
- **Pick**: Selects specific properties.
- **Omit**: Excludes specific properties.

```typescript
interface User { name: string; age: number; }
type PartialUser = Partial<User>;
type UserName = Pick<User, "name">;
type UserWithoutAge = Omit<User, "age">;
```

---

### **10. Module System & Compiler Options**
Key compiler options:
- **`esModuleInterop`**: Enables default imports from non-ES modules.
- **`allowSyntheticDefaultImports`**: Affects only type-checking.

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```

**With `esModuleInterop`, you can import modules like:**

```typescript
import fs from "fs"; // Works if enabled
```

---


### **Dependency injection?**

You can use decorators and libraries like `tsyringe` or `inversify`.

```ts
import { injectable } from 'tsyringe';

@injectable()
class UserService {
  getUsers() {}
}
```

---

### **`Generics`**

```ts
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("Hello");
```

---

### **Custom error**

```ts
class AppError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
    this.name = 'AppError';
  }
}
```
---

### **Request/response types with TypeScript?**
```ts
interface CreateUserDTO {
  name: string;
  email: string;
}

const createUser = (req: Request<{}, {}, CreateUserDTO>, res: Response) => {
  const { name, email } = req.body;
  // do something
};
```





