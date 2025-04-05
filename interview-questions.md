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


