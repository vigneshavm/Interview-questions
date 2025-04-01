### **1. Variable Hoisting**  
- **Hoisting** moves variable declarations to the top of their scope.  
- `var` is hoisted with `undefined`, while `let` and `const` are hoisted but remain uninitialized (Temporal Dead Zone).  
```js
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;
```

### **2. Function Hoisting**  
- **Function declarations** are fully hoisted (can be called before definition).  
- **Function expressions** are hoisted as variables (`undefined` before assignment).  
```js
hoisted(); // Works
function hoisted() { console.log("Function hoisted"); }

notHoisted(); // TypeError
var notHoisted = function () { console.log("Expression not hoisted"); };
```

### **3. Key ES6 Features**  
- `let` & `const` (block scoping)  
- **Arrow functions** (`=>` syntax)  
- Default parameters, template literals, destructuring  
- Spread/rest operators (`...`)  
- Classes, modules (`import/export`), promises, `async/await`, generators  

### **4. Spread & Rest Operator**  
- **Spread (`...`)** expands elements:  
```js
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
```
- **Rest (`...`)** collects arguments into an array:  
```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3)); // 6
```

### **5. Normal vs Arrow Functions**  
| Aspect | Normal Function | Arrow Function |
|--------|---------------|----------------|
| `this` binding | Dynamic (based on caller) | Lexical (parent scope) |
| `arguments` object | Available | Not available |
| Constructors | Can use `new` | Cannot use `new` |

### **6. Shallow vs Deep Copy**  
- **Shallow Copy**: Copies references of nested objects.  
```js
let obj = { a: 1, b: { c: 2 } };
let shallow = { ...obj };
shallow.b.c = 3;
console.log(obj.b.c); // 3
```
- **Deep Copy**: Recursively copies all properties.  
```js
let deep = JSON.parse(JSON.stringify(obj));
deep.b.c = 3;
console.log(obj.b.c); // 2
```

### **7. Node.js Architecture**  
- **Event-Driven, Non-Blocking I/O**  
- Components:  
  - **Event Loop** (Handles async operations)  
  - **Libuv** (Thread pool)  
  - **V8 Engine** (Executes JS)  
  - **C++ Bindings** (OS access)  

### **8. Event Loop Phases**  
1. **Timers** (`setTimeout`, `setInterval`)  
2. **Pending I/O**  
3. **Idle/Prepare**  
4. **Poll** (New I/O events)  
5. **Check** (`setImmediate`)  
6. **Close Callbacks**  

### **9. Authentication vs Authorization**  
- **Authentication**: Verifies identity (e.g., login).  
- **Authorization**: Determines permissions (e.g., access control).  

### **10. Middleware in Express.js**  
- Functions executed before reaching the route handler.  
```js
app.use((req, res, next) => {
  console.log("Middleware running");
  next();
});
```
#### Examples:
- **Logging**, **Authentication**, **Validation**  

### **11. How JWT Works**  
1. **User logs in → Server generates JWT**  
2. **JWT structure**:  
   - **Header** (Algorithm & type)  
   - **Payload** (User data)  
   - **Signature** (Hash with secret key)  
3. **Client sends JWT in Authorization header**  
4. **Server verifies JWT before authorizing request**  

### **12. Securing a Node.js App**  
✅ Use **HTTPS**  
✅ Validate **input data**  
✅ Use **Helmet** for security headers  
✅ Prevent **SQL injection** with ORMs  
✅ Use **rate limiting**  
✅ Run **npm audit** for security checks  

### **13. Performance Optimization**  
- Use **caching** (Redis)  
- Optimize **DB queries**  
- Use **clustering/load balancing**  
- Enable **Gzip compression**  
- Implement **lazy loading**  

### **14. Helmet Middleware (Security Headers)**  
```js
const helmet = require('helmet');
app.use(helmet());
```

### **15. CORS Middleware (Cross-Origin Requests)**  
```js
const cors = require('cors');
app.use(cors({ origin: "http://example.com" }));
```

### **16. Promises in JavaScript**  
- A **Promise** represents an asynchronous operation.  
- States: **Pending → Fulfilled → Rejected**  

### **17. Worker Threads in Node.js**  
- **Offloads CPU-intensive tasks** to separate threads, preventing main thread blocking.  

### **18. Handling High-Volume Requests**  
- **Use Clustering** (Multiple processes)  
- **Load Balancers** (e.g., Nginx)  
- **Cache Responses** (e.g., Redis)  
- **Optimize DB Queries**  

### **19. MongoDB Clustering**  
- **Sharding** (Distributes data across nodes)  
- **Replica Sets** (Ensures redundancy & failover)  

### **20. Indexing in MongoDB**  
- Improves query performance:  
```js
db.collection.createIndex({ name: 1 });
```

---

## **2nd Round Interview Answers**

### **1. Output Order of Asynchronous Code**
```js
for (var i = 0; i < 5; i++) {
  console.log(i);
  setTimeout(() => console.log(i), 0);
}
```
**Output:**  
```
0  
1  
2  
3  
4  
5  
5  
5  
5  
5  
```
**Explanation:**  
- `var i` is **global**; after the loop, `i = 5`.  
- `setTimeout` runs **after the loop finishes**, printing `5` repeatedly.  

### **2. Write a Common Function for Both Cases**
```js
function sum(a, b) {
  if (b !== undefined) return a + b;
  return (c) => a + c;
}

console.log(sum(2, 3)); // 5
console.log(sum(2)(3)); // 5
```

### **3. Remove Duplicates & Sort Using Merge Sort**
```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [], i = 0, j = 0;

  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  }
  return result.concat(left.slice(i), right.slice(j));
}

function removeDuplicatesAndSort(arr) {
  return mergeSort([...new Set(arr)]);
}

const array = [4, 2, 5, 3, 4, 2, 1];
console.log(removeDuplicatesAndSort(array)); // [1, 2, 3, 4, 5]
```


