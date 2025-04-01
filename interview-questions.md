### **Node.js Core Concepts**

#### **Single-Threaded Nature**
- Node.js runs in a **single-threaded environment** using a single thread, allowing it to handle concurrent I/O operations effectively due to its **non-blocking asynchronous execution model**.
- For **multi-core utilization**, Node.js can use **clustering** (which creates multiple Node.js processes) or **worker threads**.

#### **Event Loop & Concurrency**

**Phases of the Event Loop:**
1. **Timers**: Executes the callbacks for `setTimeout` and `setInterval`.
2. **Pending Callbacks**: Handles I/O callbacks (e.g., TCP callbacks).
3. **Idle/Prepare**: Internal phase for system operations.
4. **Poll**: Waits for new I/O events and executes callbacks when ready.
5. **Check**: Executes `setImmediate` callbacks.
6. **Close Callbacks**: Handles events such as `close` event listeners.

**Code Execution Order:**
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

- **`process.nextTick()` vs `setImmediate()`**:  
  - `process.nextTick()` executes **before** I/O operations, and **before** the next event loop iteration.
  - `setImmediate()` executes **after I/O callbacks**, right before the event loop continues.

#### **Callback Hell & Solutions**
- **Callback Hell** refers to nested callbacks that make code unreadable and difficult to maintain.
- **Solutions**: 
  - **Promises**: Handles asynchronous behavior more cleanly with `.then()`, `.catch()`.
  - **Async/Await**: Allows asynchronous code to be written in a synchronous style, improving readability.

**Promise vs Async/Await**:
- **Promises**: Use `.then()` and `.catch()` for chaining async calls.
- **Async/Await**: More readable and concise for handling asynchronous operations.

**`Promise.all()` vs `Promise.race()`**:
- **`Promise.all()`**: Resolves when **all** promises are completed.
- **`Promise.race()`**: Resolves when **the first** promise resolves or rejects.

#### **Handling CPU-Intensive Tasks**
- Use **Worker Threads** (via the `worker_threads` module) for CPU-intensive tasks, which offloads the task to another thread and prevents blocking the main event loop.
- For efficiency, use **worker pools** instead of spawning a new worker for each task.

---

### **Databases**

#### **MongoDB**
- **Scaling MongoDB**:
  - **Vertical Scaling**: Adding more resources (CPU, memory) to a single server.
  - **Horizontal Scaling**: Using **sharding** to distribute data across multiple servers.

**Difference Between `$in` and `$all` in MongoDB**:
- `$in`: Matches if the value is in the provided array.
- `$all`: Matches if the value contains all of the provided elements in the array.

- **Clustering & Replication**:
  - **Replica Set**: Maintains multiple copies of data for high availability.
  - **Sharding**: Distributes data across multiple nodes for scalability.

**Searching in MongoDB**:
```js
db.collection.find({ $text: { $search: "searchText" } });
```

#### **Databases for a Social Media App**
- **MongoDB** is a good fit for unstructured or semi-structured data (large-scale).
- **PostgreSQL** is ideal for structured data with complex relationships and ACID compliance.

---

### **Caching & Queues**

#### **Redis for Caching**
```js
const redis = require("redis");
const client = redis.createClient();
client.set("key", "value");
client.get("key", (err, data) => console.log(data));
```

#### **Queuing System (RabbitMQ/Kafka)**
- Use **RabbitMQ** or **Redis Pub/Sub** for background job processing and messaging.

---

### **Backend API Development**

#### **Defining API Routes in Express**
```js
const express = require("express");
const router = express.Router();
router.get("/route", (req, res) => res.send("Hello"));
```

#### **Ignoring Routes in Middleware**
```js
app.use((req, res, next) => {
  if (req.path.startsWith("/ignore")) return next();
});
```

#### **Using Swagger for API Documentation**
- To document APIs:
  ```sh
  npm install swagger-jsdoc swagger-ui-express
  ```

---

### **JavaScript Core Concepts**

#### **Closures**
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

#### **ES5 vs ES6 Advantages**
- **ES6 Improvements**:
  - **Block scope variables** (`let` and `const`)
  - **Arrow Functions**
  - **Destructuring** for easier variable extraction
  - **Template Literals** for easy string interpolation
  - **Default Parameters**

---

### **Coding Questions**

#### **Count Character Occurrences in a String (Ignore Spaces)**
```js
const countChars = (str) => {
  const result = {};
  for (let char of str.replace(/\s/g, "")) {
    result[char] = (result[char] || 0) + 1;
  }
  return result;
};
```

#### **Boolean Function to Match Filename Pattern Without Regex**
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

#### **Stock Span Problem (Optimized Solution)**
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

#### **Simulating Wallet Withdrawal Queue**
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

#### **Find Second Largest in an Array**
```js
const secondLargest = arr => {
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique[1];
};
```

#### **Remove Duplicates From an Array**
```js
const removeDuplicates = arr => arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
console.log(removeDuplicates([1, 2, 3, 4, 1, 5, 5, 6])); // [2, 3, 4, 6]
```
