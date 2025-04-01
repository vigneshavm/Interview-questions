# **TypeScript Interview Questions & Answers**  

### **1. What are the key differences between TypeScript and JavaScript?**  
**Answer:**  
| Feature          | JavaScript | TypeScript |
|-----------------|------------|-------------|
| Type Checking   | Dynamic    | Static       |
| Compilation     | No (Interpreted) | Yes (Transpiled to JS) |
| Interfaces      | Not Available | Available |
| Generics        | Not Available | Available |
| Modularity      | Limited Support | Stronger Support |

---

### **2. Explain TypeScript Interfaces and give an example.**  
**Answer:**  
An interface in TypeScript defines the structure of an object and enforces type checking.  

```typescript
interface User {
  name: string;
  age: number;
}

const user: User = { name: "John", age: 25 };
```

---

### **3. What are Generics in TypeScript?**  
**Answer:**  
Generics allow writing reusable and type-safe functions or classes.  

```typescript
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<number>(10));
console.log(identity<string>("Hello"));
```

---

### **4. What are Utility Types in TypeScript?**  
**Answer:**  
TypeScript provides built-in utility types to modify existing types.  

- `Partial<T>` - Makes all properties optional  
- `Pick<T, K>` - Selects specific properties  
- `Omit<T, K>` - Removes specific properties  

```typescript
type Person = { name: string; age: number; };
type PartialPerson = Partial<Person>;
type PersonName = Pick<Person, "name">;
```

---

### **5. What are Decorators in TypeScript?**  
**Answer:**  
Decorators are special functions prefixed with `@` that modify classes, methods, or properties. They are used in frameworks like Angular.  

```typescript
function Log(target: any, key: string) {
  console.log(`Property: ${key}`);
}

class User {
  @Log
  name: string = "John";
}
```
