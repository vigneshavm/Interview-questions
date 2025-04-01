
## **Node.js Core Concepts**  
### **Single-Threaded Nature**  
- Node.js runs on a **single core by default** using a single-threaded event loop.  
- It can handle multiple concurrent I/O operations due to **non-blocking asynchronous execution**.  
- To utilize multiple cores, **clustering** or **worker threads** can be used.

### **Event Loop & Concurrency**  
- **Phases of Event Loop**:  
  1. **Timers** – Executes `setTimeout` and `setInterval` callbacks.  
  2. **Pending Callbacks** – Executes I/O-related callbacks.  
  3. **Idle/Prepare** – Internal operations.  
  4. **Poll** – Retrieves new I/O events and executes ready callbacks.  
  5. **Check** – Executes `setImmediate` callbacks.  
  6. **Close Callbacks** – Handles `close` event listeners.  

- **Execution Order of Below Code:**
  ```js
  setTimeout(() => console.log("Timeout Callback"), 10);
  setImmediate(() => console.log("Immediate Callback"));
  process.nextTick(() => console.log("NextTick Callback"));
  console.log("Main Module Ends");
  ```
  **Output:**  
  ```
  Main Module Ends  
  NextTick Callback  
  Immediate Callback  
  Timeout Callback
  ```

- **Difference Between `process.nextTick()` and `setImmediate()`**:  
  - `process.nextTick()` executes **before I/O operations** and **before the next event loop iteration**.  
  - `setImmediate()` executes **after the I/O callbacks**, right **before the event loop continues**.

### **Callback Hell & Solutions**  
- Callback Hell: Multiple nested callbacks make the code unreadable.  
- Solution:  
  1. **Using Promises**  
  2. **Using `async/await`**  

- **Difference Between Promises and `async/await`**  
  - **Promises**: `.then().catch()` for chaining asynchronous calls.  
  - **Async/Await**: Cleaner, avoids chaining complexity.  
  - **What If You Don’t Use `await`?** Execution proceeds without waiting for the result.

- **Difference Between `Promise.all()` and `Promise.race()`**  
  - `Promise.all()`: Resolves when **all** promises complete.  
  - `Promise.race()`: Resolves when **the first** promise completes.

### **Handling CPU-Intensive Tasks**  
- **Worker Threads** (`worker_threads` module) should be used for CPU-intensive operations.  
- **Do not** spawn a new worker for every request—use a worker pool.  

---

## **Databases**  
### **MongoDB**  
- **Scaling MongoDB**  
  - **Vertical Scaling**: Adding more resources to a single server.  
  - **Horizontal Scaling**: Using **sharding** to distribute data across multiple servers.  

- **Difference Between `$in` and `$all` in MongoDB**  
  - `$in`: Matches **any** value in the array.  
  - `$all`: Matches **all** values in the array.

- **Clustering & Replication**  
  - **Replica Set**: High availability by maintaining multiple copies of data.  
  - **Sharding**: Distributes data across multiple nodes for scalability.

- **Searching in MongoDB**  
  ```js
  db.collection.find({ $text: { $search: "searchText" } });
  ```

### **Database for a Social Media App**  
- **MongoDB** – Best for large-scale, unstructured data.  
- **PostgreSQL** – Suitable if structured relations are needed.

---

## **Caching & Queues**  
### **Redis for Caching**  
```js
const redis = require("redis");
const client = redis.createClient();
client.set("key", "value");
client.get("key", (err, data) => console.log(data));
```

### **Queuing System (RabbitMQ/Kafka)**  
- Use **RabbitMQ** or **Redis Pub/Sub** for background job processing.  

---

## **Backend API Development**  
### **Defining API Routes in Express**  
```js
const express = require("express");
const router = express.Router();
router.get("/route", (req, res) => res.send("Hello"));
```

### **Ignoring Some Routes in Middleware**  
```js
app.use((req, res, next) => {
  if (req.path.startsWith("/ignore")) return next();
});
```

### **Using Swagger for API Documentation**  
- Install Swagger:  
  ```sh
  npm install swagger-jsdoc swagger-ui-express
  ```

---

## **JavaScript Core Concepts**  
### **Closures**  
```js
function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    console.log(counter);
  };
}
const increment = outer();
increment(); // 1
increment(); // 2
```

### **ES5 vs ES6 Advantages**  
- **ES6 Advantages:**  
  - `let` & `const` (block scope variables)  
  - Arrow Functions  
  - Destructuring  
  - Template Literals  
  - Default Parameters  

---

## **Coding Questions**  
### **Count Character Occurrences in a String (Ignore Spaces)**  
```js
const countChars = (str) => {
  const result = {};
  for (let char of str.replace(/\s/g, "")) {
    result[char] = (result[char] || 0) + 1;
  }
  return result;
};
```

### **Boolean Function to Match Filename Pattern Without Regex**  
```js
function matchPattern(filename, pattern) {
  let i = 0, j = 0, starIdx = -1, match = 0;
  while (i < filename.length) {
    if (j < pattern.length && (pattern[j] === "?" || pattern[j] === filename[i])) {
      i++; j++;
    } else if (j < pattern.length && pattern[j] === "*") {
      starIdx = j++; match = i;
    } else if (starIdx !== -1) {
      j = starIdx + 1; i = ++match;
    } else return false;
  }
  while (j < pattern.length && pattern[j] === "*") j++;
  return j === pattern.length;
}
```

### **Stock Span Problem (Optimized Solution)**  
```js
class StockSpanner {
  constructor() {
    this.stack = [];
  }
  next(price) {
    let span = 1;
    while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
      span += this.stack.pop()[1];
    }
    this.stack.push([price, span]);
    return span;
  }
}
```
- **Time Complexity**: **O(n) amortized**  
- **Space Complexity**: **O(n)**  

### **Simulating Wallet Withdrawal Queue**  
```js
function withdrawQueue(amounts, maxLimit) {
  let exitOrder = [], queue = [], i = 0;
  while (amounts.some(a => a > 0)) {
    if (amounts[i] > 0) {
      queue.push(i + 1);
      amounts[i] -= Math.min(amounts[i], maxLimit);
      if (amounts[i] <= 0) exitOrder.push(i + 1);
    }
    i = (i + 1) % amounts.length;
  }
  return { exitOrder, queue };
}
console.log(withdrawQueue([1200, 400, 300, 2000, 1500], 400));
```

### **Find Second Largest in an Array**  
```js
const secondLargest = arr => {
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique[1];
};
```

### **Remove Duplicates From an Array**  
```js
const removeDuplicates = arr => arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
console.log(removeDuplicates([1, 2, 3, 4, 1, 5, 5, 6])); // [2, 3, 4, 6]
```

