## 1st round
1. Variable hoisting
2. function hoisting
3. ES6 features
4. spread and rest operator
5. normal function and arrow function difference
6. Shallow copy and deep copy
7. Node js architecture
8. Event loop
9. Difference between authendication and authoriztion
10. Middleware
11. How JWT works
12. How to secure nodejs application
13. How to improve performance of nodejs application
14. Helmet middleware
15. CORS middleware
16. What is promises
17. Worker thread in nodejs
18. Handle high volume request in nodejs
19. Clustering in mongodb
20. Indexing in mongodb
21. 
22. 

## 2nd round
1. Output order of below code
```
for(var i = 0; i < 5; i++) {
  console.log(i);
  setTimeout(() => {
    console.log(i);
  }, 0);
} 

```
2.  Write common function for below two function calls
```
sum(2, 3);
sum(2)(3);
```

3. Remove duplicates in array and sort them in efficient way ( Don't use util functions and bubble sort algorithm) (Interviewer expected to use merge sort algorithm)




### **1st Round Answers**

#### **1. Variable Hoisting**
- Hoisting is a JavaScript behavior where variables are **declared at the top** of their scope during execution but without their value.
- `var` is hoisted with `undefined`, while `let` and `const` are hoisted but **not initialized** (Temporal Dead Zone).

```javascript
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;
```

---

#### **2. Function Hoisting**
- **Function declarations** are hoisted entirely (including their definition), so they can be called before being defined.
- **Function expressions** are hoisted as variables, meaning they are `undefined` before assignment.

```javascript
hoisted(); // Works
function hoisted() {
  console.log("Function hoisted");
}

notHoisted(); // TypeError
var notHoisted = function () {
  console.log("Expression not hoisted");
};
```

---

#### **3. ES6 Features**
- **let** and **const** for block scoping.
- Arrow functions (`=>` syntax).
- Default parameters.
- Template literals.
- Destructuring assignment.
- Spread/rest operators.
- Classes.
- Modules (`import`/`export`).
- Promises and async/await.
- Generators.

---

#### **4. Spread and Rest Operator**
- **Spread (`...`)** expands elements:
```javascript
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
```

- **Rest (`...`)** collects arguments into an array:
```javascript
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3)); // 6
```

---

#### **5. Normal Function vs Arrow Function**
| **Aspect**           | **Normal Function**     | **Arrow Function**        |
|-----------------------|------------------------|---------------------------|
| **`this` binding**     | Dynamic (based on caller)| Lexically bound (parent scope) |
| **`arguments` object** | Available              | Not available             |
| **Constructors**       | Can use `new`          | Cannot use `new`          |

---

#### **6. Shallow Copy vs Deep Copy**
- **Shallow Copy**: Copies references of nested objects.
- **Deep Copy**: Recursively copies all properties.

**Shallow Copy Example**:
```javascript
let obj = { a: 1, b: { c: 2 } };
let shallow = { ...obj };
shallow.b.c = 3;
console.log(obj.b.c); // 3
```

**Deep Copy Example**:
```javascript
let deep = JSON.parse(JSON.stringify(obj));
deep.b.c = 3;
console.log(obj.b.c); // 2
```

---

#### **7. Node.js Architecture**
Node.js uses the **event-driven, non-blocking I/O** model. It consists of:
1. **Event Loop**: Handles all asynchronous operations.
2. **Libuv**: Provides the thread pool.
3. **V8 Engine**: Executes JavaScript code.
4. **C++ Bindings**: Allow access to OS-level operations.

---

#### **8. Event Loop**
The **Event Loop** handles asynchronous tasks by running through:
1. **Timers** (setTimeout, setInterval).
2. **Pending I/O**.
3. **Idle/Prepare**.
4. **Poll** (new I/O events).
5. **Check** (setImmediate).
6. **Close Callbacks**.

---

#### **9. Authentication vs Authorization**
- **Authentication**: Verifies **who you are** (e.g., via username/password).
- **Authorization**: Determines **what you can do** (e.g., access permissions).

---

#### **10. Middleware**
Middleware are functions that execute **before** reaching the final route handler. Examples:
- Logging
- Authentication
- Validation

```javascript
app.use((req, res, next) => {
  console.log("Middleware running");
  next();
});
```

---

#### **11. How JWT Works**
1. User logs in → Server generates a **JWT**.
2. JWT contains:
   - **Header**: Algorithm & token type.
   - **Payload**: User data (e.g., ID).
   - **Signature**: Hash of header & payload using a secret key.
3. Client sends JWT in **Authorization header**.
4. Server verifies JWT to authorize the request.

---

#### **12. How to Secure a Node.js Application**
- Use **HTTPS**.
- Validate input data.
- Use **Helmet** for security headers.
- Protect against **SQL injection** with ORMs.
- Use **rate limiting**.
- Use secure libraries (npm audit).

---

#### **13. Improve Performance**
- Use caching (Redis).
- Optimize queries.
- Use clustering or load balancers.
- Use async processing (worker threads).
- Compress responses (Gzip).
- Implement lazy loading.

---

#### **14. Helmet Middleware**
Helmet sets secure HTTP headers to protect against common attacks:
```javascript
const helmet = require('helmet');
app.use(helmet());
```

---

#### **15. CORS Middleware**
CORS controls cross-origin resource sharing.
```javascript
const cors = require('cors');
app.use(cors({ origin: "http://example.com" }));
```

---

#### **16. Promises**
Promises represent an asynchronous operation. States:
- **Pending**
- **Fulfilled**
- **Rejected**

---

#### **17. Worker Threads in Node.js**
Worker threads offload CPU-intensive tasks to separate threads to prevent blocking the main thread.

---

#### **18. Handling High-Volume Requests**
- Use **clustering** to scale Node.js.
- Use **load balancers** (Nginx).
- Cache data.
- Use efficient DB queries.

---

#### **19. Clustering in MongoDB**
MongoDB supports clustering with **sharding** and **replica sets**.

---

#### **20. Indexing in MongoDB**
Indexes improve query performance. Example:
```javascript
db.collection.createIndex({ name: 1 });
```

---

### **2nd Round Answers**

#### **1. Output Order of the Code**
```javascript
for (var i = 0; i < 5; i++) {
  console.log(i);
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```
**Output**:
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
- `var` creates a global scope for `i`.
- `setTimeout` runs after the loop finishes, printing `5` (final value of `i`).

---

#### **2. Write a Common Function**
```javascript
function sum(a, b) {
  if (b !== undefined) return a + b;
  return (c) => a + c;
}

console.log(sum(2, 3)); // 5
console.log(sum(2)(3)); // 5
```

---

#### **3. Remove Duplicates and Sort Using Merge Sort**
```javascript
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
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

function removeDuplicatesAndSort(arr) {
  const uniqueArr = [...new Set(arr)];
  return mergeSort(uniqueArr);
}

const array = [4, 2, 5, 3, 4, 2, 1];
console.log(removeDuplicatesAndSort(array)); // [1, 2, 3, 4, 5]
```