# TypeScript Interview Questions & Answers

## 1. Interface vs. Type
### Differences:
| Aspect        | Interface | Type |
|--------------|-----------|------|
| Definition   | Contract for objects | Alias for types |
| Extensibility | Supports `extends` and merging | Uses intersections (`&`) |
| Usability   | Best for objects/classes | Can define unions, tuples, etc. |

### When to Use:
- **Interface:** For objects/classes (better performance & declaration merging).
- **Type:** For primitive types, unions, and complex transformations.

```typescript
// Interface Example
interface Person { name: string; age: number; }
interface Employee extends Person { jobTitle: string; }

// Type Alias Example
type Point = { x: number; y: number };
type ReadOnlyPoint = Readonly<Point>;
```

## 2. Generics
### Why?
- Provides flexibility while maintaining type safety.
- Enables reusable components.

```typescript
// Generic Function
function identity<T>(value: T): T { return value; }
console.log(identity(10)); // 10
console.log(identity("Hello")); // "Hello"

// Generic Interface
interface Box<T> { content: T; }
const stringBox: Box<string> = { content: "TypeScript" };
```

## 3. Inheritance
- **Extending Classes**:
```typescript
class Animal { move() { console.log("Moving..."); } }
class Dog extends Animal { bark() { console.log("Woof!"); } }
const myDog = new Dog();
myDog.move(); // Moving...
myDog.bark(); // Woof!
```

- **Extending Interfaces**:
```typescript
interface Person { name: string; }
interface Employee extends Person { employeeId: number; }
const emp: Employee = { name: "John", employeeId: 123 };
```

## 4. Union Types
```typescript
let id: string | number;
id = 123; // valid
id = "ABC"; // valid

function display(value: string | number) { console.log(value); }
```

## 5. Type Inference
```typescript
// Implicit
let age = 25; // Inferred as number
// age = "hello"; // Error

// Explicit
let name: string = "John";
```

## 6. Mapped Types
```typescript
type User = { name: string; age: number; };
type PartialUser = { [K in keyof User]?: User[K]; };
const user: PartialUser = { name: "Alice" };
```

## 7. Decorators
- **Used to modify classes, methods, and properties.**
- **Requires** `experimentalDecorators: true` in `tsconfig.json`.
```typescript
import "reflect-metadata";
function Controller(route: string) {
  return function (target: Function) { target.prototype.route = route; };
}
@Controller("/api/user")
class UserController {
  getUser() { console.log("Fetching User..."); }
}
console.log(new UserController().route); // "/api/user"
```

## 8. Async/Await
- Simplifies asynchronous code with Promises.
- **Pitfalls**: Requires `try/catch` for error handling, avoid `await` in loops.
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

## 9. Utility Types
- **Partial**: Makes properties optional.
- **Pick**: Selects specific properties.
- **Omit**: Removes specific properties.
```typescript
interface User { name: string; age: number; }
type PartialUser = Partial<User>;
type UserName = Pick<User, "name">;
type UserWithoutAge = Omit<User, "age">;
```

## 10. Module System & Compiler Options
- **CommonJS (`require`) vs. ES Modules (`import/export`)**.
- **Key Flags**:
  - `esModuleInterop`: Allows default imports from non-ES modules.
  - `allowSyntheticDefaultImports`: Similar but affects only type-checking.

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```

**With `esModuleInterop`, importing modules becomes simpler:**
```typescript
import fs from "fs"; // Works if enabled
```

