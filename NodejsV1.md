


| **Category**                 | **Topics** |
|-----------------------------|------------|
| **Node.js Basics**           | [Node.js Architecture](#nodejs-architecture), - [Why V8 Engine](#Why-V8-Engine) - [Handle Multiple Requests](#nodejs-handle-multiple-requests),  - [Single-Threaded Nature](#single-threaded-nature), - [node js 22 features](#node-js-22-features) - [Node js 20 features](#Node-js-20-features) |
| **Express.js Framework**     | -[Core modules](#core-modules) - [HTTP Module](#HTTP-Module),  - [Express.js](#expressjs),  - [Routing](#routing),  - [HTTP Methods](#http-methods--use-cases),  - [Query Params](#request-response-query-params),  - [HTTP Status Codes](#status-codes) |
| **Processes**                | [Event Loop](#event-loop),  - [Async I/O Handling](#asynchronous-io-handling),  - [Microtasks vs Macrotasks](#Microtasks-vs-Macrotasks),  - [Async Execution Order](#Async-Execution-Order),  - [SetImmediate vs process.nextTick](#SetImmediate-vs-processnextTick),   |
| **Processes**                | - [Cluster vs Child vs Worker](#cluster-module-vs-child-process-vs-worker-thread),  - [libuv](#libuv),  - [spawn vs fork](#spawn-vs-fork) |
| **Async and Middleware** |  [BackPressure](#BackPressure)  - [FS(File System)](#FS), - [Streams](#Streams),  - [Buffer](#Buffer) - [Middleware](#middleware),  - [CORS](#cors),  - [Helmet](#helmet),  - [Rate Limiter](#Rate-Limiter),  - [DDoS Attack](#DDoS-attack),  - [Data Validation](#data-validation),  - [Input Validate](#Input-Validate) , [Idempotency](#Idempotency) |
| **Package JSON**             | [package.json](#packagejson),  - [package.json vs package-lock.json](#packagejson-vs-package-lockjson),  - [Memory Leak](#Memory-leak),  - [Garbage Collection](#garbage-collection) - [Caching Strategies](#caching-strategies),  - [Redis (Caching)](#nodejs-with-redis-caching)|
| **REST API & Security**      | [REST API](#rest-api),  -[HTTP methods](#http-methods) - [RESTAPI version](#restapi-version) - [Pagination](#implement-pagination-in-a-rest-api),  - [Folder Structure](#clean-restful-folder-structure),  - [REST API Performance Testing](#REST-API-Performance-Testing),  - [Scalable REST APIs](#Scalable-REST-APIs) , - [Handle retries](#Handle-retries) , - [API Slow](#API-Slow) |
| **Security**      | - [Secure Node.js](#secure-nodejs-app),  - [Secure Sensitive Data](#securing-sensitive-data),  - [Secure REST APIs](#secure-rest-apis) -[`Hash vs Encrypt`](#Hash-vs-Encrypt) -[Keep secrets in Node.js](#keep-secrets-in-nodejs) |
| **Authentication & Authz**   | [Auth vs Authz](#authentication-vs-authorization),  - [JWT](#implementing-jwt-authentication),  - [OAuth](#OAuth),  - [Single Sign On](#Single-Sign-On),  - [Session vs Token](#session-based-vs-token-based-authentication),  - [Protecting Routes](#protecting-sensitive-routes),  - [Refresh Tokens](#refresh-tokens),  - [JWT Cookies vs Headers](#jwt-in-cookies-vs-headers),  - [RBAC](#role-based-access-control-rbac) |
| **Event Handling**           | [Event Driven Architecture](#Event-Driven-Architecture),  - [Event Emitters](#event-emitters),  - [Process Object](#process-object),  - [WebSockets](#websockets-socketio-basics),  - [WebSockets Drawbacks](#drawbacks-of-WebSockets),  - [Socket.IO](#SocketIO) |
| **Error & Debugging**        | [Error Handling](#error-handling-in-nodejs-applications),  - [Logging Errors](#logging-errors),  - [Debugging](#debugging-nodejs-applications),  - [REST API Errors](#error-handling-in-rest-apis) |
| **Performance Optimization** | [Performance Optimization](#performance-optimization),  - [Performance Pitfalls](#common-performance-pitfalls),  - [Handle CPU Tasks](#Handle-CPU-intensive-task) |
| **Concurrency & Scaling**      | [Handles large data sets](#Handles-large-data-sets) , [Concurrent Requests](#Concurrent-CPU-intensive-requests),  - [100K Concurrent](#Handling-100000-concurrent-requests),  - [Handle Concurrency](#Handle-Concurrency),  - [High Traffic Scaling](#Scaling-High-Traffic),  - [Scalability Issues](#scalability-issues) |
| **Deployment**               | [Production Deployment](#deploying-a-nodejs-application-to-production),  - [PM2](#pm2),  - [Load Balancing](#load-balancing) |
| **Timeout**     | [Common Cases Timeout Errors](#Common-Cases-Timeout-Errors) , - [Handle Timeout Issue](#Debugging-Steps-I-Follow-For-Timeout)  |
| **Database Interaction**     | [JOINs in Sequelize](#JOINs-in-Sequelize) [SQL Connection](#sql-connection),  - [MongoDB Connection](#mongodb-connection),  - [DB Connections](#database-connections),  - [Transactions](#database-transactions) |





## **Create Node App using JS**

- mkdir user-api && cd user-api
- npm init -y
- npm install express
---

---
## **Create Node App using Typescript**
- mkdir user-api && cd user-api
- npm init -y
- npm install express
- npm install -D typescript ts-node-dev @types/node @types/express
```bash
npm init -y
npm install typescript ts-node @types/node --save-dev
npx tsc --init
```


```js
tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```
---

## **`.ts` Vs `.d.ts` files?**

- `.ts`: A TypeScript source file.
- `.d.ts`: A TypeScript declaration file used to describe types of existing JavaScript libraries.

---
## **`ts-node`?**

`ts-node` is a utility that runs TypeScript code directly without compiling it to JavaScript.

---
## **Node.js with TypeScript?**

- TypeScript adds static typing to JavaScript, helping developers catch errors during development, improve code readability, and enable better IDE support.
- This is particularly helpful in large-scale Node.js projects.


---

## **Nodejs Architecture**

- **Node.js**: Server-side JavaScript runtime built on Chrome’s **V8 engine**.
- **Single-threaded** but **non-blocking**, ideal for scalable I/O-heavy apps.
- Uses **libuv** for handling async I/O with a thread pool.
- Built on an **event-driven** model via the **event loop**.
- Designed for **high concurrency** with minimal system resources.

---

###  **Core Components of Node.js**

- **V8 Engine**: Converts JS to machine code (JIT compilation).
- **libuv**: Handles event loop, async I/O, timers, and thread pool.
- **Event Loop**: Manages execution of code, handles callbacks & async tasks.
- **Thread Pool**: Offloads heavy I/O tasks to prevent blocking the main thread.
- **Callback Queue**: Stores ready-to-run async callbacks.
- **Microtask Queue**: Stores high-priority microtasks (Promises, `process.nextTick`).
- **Node APIs**: Built-in modules like `fs`, `http`, `crypto`, etc.

---

## **Event Loop**


* The **event loop** is the mechanism that allows Node.js to perform **non-blocking I/O** on a **single thread**.
* It achieves this by **offloading async operations** (network, file I/O, timers) to **libuv’s thread pool**, then processing their **callbacks asynchronously**.
* As a result, Node.js can efficiently handle **thousands of concurrent connections**.


* **Call Stack** → Runs synchronous code.
* **Event Queue (Macrotasks)** → Timers, I/O, `setTimeout`, `setImmediate`.
* **Microtask Queue** → Promises, `process.nextTick`, always runs **before macrotasks**.
* The **event loop** coordinates between them to make async feel seamless.


**Execution Flow**

1. Run all **synchronous code** (top-level).
2. Process **process.nextTick()** queue.
3. Process **microtask queue** (Promises).
4. Enter **event loop phase** (timers, poll, check, etc.).
5. After each phase, run microtasks again.
6. Repeat infinitely.


- [Call Stack](#call-stack)
- [Event Queue (Macrotask Queue)](#event-queue-macrotask-queue)
- [Microtask Queue (Task Queue)](#microtask-queue-task-queue)
- [Event Loop Phases](#event-loop-phases)
- [Microtasks vs Macrotasks](#microtasks-vs-macrotasks)


### **Call Stack**

* The **call stack** is where JavaScript executes code **synchronously**.
* Functions are pushed when called and popped when returned.
* If the call stack is **busy**, nothing else runs (that’s why heavy computation blocks the event loop).

👉 Example:

```js
function a() { b(); }
function b() { console.log("Hello"); }
a(); // Call stack: [a → b], then pops off
```

---

### **Event Queue (Macrotask Queue)**

* Holds **callbacks** from async operations (timers, DOM events, I/O).
* Works in **FIFO order** (first in, first out).
* When the **call stack is empty**, the event loop moves one task from the **event queue** into the stack.

👉 Example:

```js
console.log("start");
setTimeout(() => console.log("timeout"), 0); // goes into event queue
console.log("end");
// Output: start → end → timeout
```

---

### **Microtask Queue (Task Queue)**


* Holds **microtasks**, which have **higher priority** than macrotasks.
* Includes: `Promise.then()`, `queueMicrotask()`, and `process.nextTick()` (Node.js).
* After **every execution of the call stack** (and between event loop phases), all microtasks are processed **before any macrotasks**.

👉 Example:

```js
console.log("start");

setTimeout(() => console.log("timeout"), 0);   // macrotask
Promise.resolve().then(() => console.log("promise")); // microtask

console.log("end");
// Output: start → end → promise → timeout
```

---





### **Event Loop Phases**

Executed in a defined order:

1. **Timers** → Executes callbacks from `setTimeout()` and `setInterval()`.
2. **Pending Callbacks** → Executes I/O callbacks deferred to the next loop iteration.
3. **Idle/Prepare** → Internal (libuv preparing for next cycle).
4. **Poll** → Retrieves new I/O events and executes I/O callbacks (sockets, files).
5. **Check** → Executes `setImmediate()` callbacks.
6. **Close Callbacks** → Handles `socket.on('close')`, cleanup, etc.

---

### **Microtasks vs Macrotasks**

* **Microtasks** → Run *immediately after* the current operation, **before moving to the next phase**.

  * Examples: `process.nextTick()`, `Promise.then()`, `queueMicrotask()`.
* **Macrotasks** → Scheduled in phases of the event loop.

  * Examples: `setTimeout()`, `setInterval()`, `setImmediate()`, I/O callbacks.
* **Priority order**:

  1. Current synchronous code.
  2. `process.nextTick()` (highest priority).
  3. Other microtasks (Promises).
  4. Next event loop phase (macrotask).


**Execution**
   
  * **Node.js begins by executing top-level synchronous code** directly on the **call stack**.
  * **Asynchronous operations** (e.g., file system access, DNS lookups, network calls, crypto) are **offloaded to the libuv thread pool**.
  * Once these async operations are complete, their **callbacks are pushed into the appropriate queues**:
     - **Timers Queue** (e.g., `setTimeout`, `setInterval`)    - **I/O Callbacks Queue**    - **Check Queue** (e.g., `setImmediate`)    - **Close Callbacks Queue**    - **Microtasks Queue** (e.g., `process.nextTick`, Promises)
  * The **event loop continuously monitors** the system and checks:
   * If the **call stack is empty**, it proceeds to the next phase of the loop.
   * In each phase, it **dequeues the relevant callbacks** and **executes them by pushing them onto the call stack**.
  * **Microtasks** are processed **between every phase**, and `process.nextTick()` is prioritized over Promises.
  * This **cycle repeats continuously**, allowing Node.js to handle a large number of concurrent operations efficiently, without blocking.



**Execution Priority**
- 1.Current synchronous code runs (call stack).
- 2.All microtasks are processed (in order).
- 3.Then one macrotask runs.
- 4.Loop repeats.

```
┌───────────────────────────────┐
│      Synchronous Code         │ ← Runs first
├───────────────────────────────┤
│    process.nextTick() Queue   │ ← Always runs next
├───────────────────────────────┤
│       Microtask Queue         │ ← e.g., Promise callbacks
├───────────────────────────────┤
│       Event Loop Phases       │
│  ┌ timers (setTimeout, etc.)  │
│  ├ pending callbacks          │
│  ├ idle/prepare               │
│  ├ poll (I/O)                 │
│  ├ check (setImmediate)       │
│  └ close callbacks            │
└───────────────────────────────┘
```


---


### **Async Execution Order**

| Function             | Phase             | Priority Order         | Use Case                              |
| -------------------- | ----------------- | ---------------------- | ------------------------------------- |
| `process.nextTick()` | Before event loop | 🔝 Highest (microtask) | Critical deferred logic, cleanup      |
| `setImmediate()`     | Check phase       | After I/O              | Run after I/O, lowest-priority tasks  |
| `setTimeout(fn, 0)`  | Timers phase      | After check phase      | General deferral, non-critical timing |


```js
setTimeout(() => console.log("Timeout"), 0);
setImmediate(() => console.log("Immediate"));
process.nextTick(() => console.log("NextTick"));
console.log("Main");
```
**Output:**
```
Main          ----> sync
NextTick      ----> runs before other microtasks
Immediate     ----> check phase
Timeout      ----> timer phase
```




```js
const fs = require('fs');
console.log('Start');                                                               //Sync code     
setTimeout(() => console.log('setTimeout'), 0);                                     // Timers phase
setImmediate(() => console.log('setImmediate'));                                    //Check phase
fs.readFile(__filename, () => {   console.log('File Read'); });                     // Poll phase
function add() {   return 5 * 2; }                                                  //Sync code     
console.log('Add Result:', add());                                                  //Sync   code    
process.nextTick(() => console.log('nextTick'));                                    // High priorty Microtask
Promise.resolve((() => {   console.log("Promise inside ");   return "result";})())  //Synccode
.then((res) => {  console.log("Promise Then got:", res);});                         //  Microtask
console.log('End');                                                                 //Sync   code   
```

#### 🧾 **Expected Output (Most likely)**

```
Start
Add Result: 10
Promise inside 
End
nextTick
Promise Then got: result
setTimeout
setImmediate
File Read
```


```js
console.log('Start'); // 1

setTimeout(() => {
  console.log('setTimeout 1'); // 6
  process.nextTick(() => {console.log('nextTick inside setTimeout');});
  Promise.resolve().then(() => { console.log('Promise in setTimeout');});
}, 0);

setImmediate(() => {  console.log('setImmediate'); });

process.nextTick(() => {  console.log('nextTick 1'); });

Promise.resolve((() => {   console.log("Promise resolve"); 
  return "IIFE result";
})()).then((res) => {  console.log("Promise Then got:", res); });

console.log('End'); // 2
```

**Result**
```
Start
Promise resolve
End
nextTick 1
Promise Then got: IIFE result
setTimeout 1
nextTick inside setTimeout
Promise in setTimeout
setImmediate
```


#### 💡 **Explanation:**

* `console.log('Start')` and `console.log('End')` are **synchronous**, so they run immediately.
* `Promise.then()` is a **microtask**, so it's executed **after the current call stack**.
* `setImmediate()` is queued during the **check phase** — it often fires **before** `setTimeout()` when scheduled from the top level.
* `fs.readFile()` is an async I/O task; its callback is queued in the **poll phase**.
* `setTimeout(..., 0)` is a **macrotask** queued in the **timers phase**, and it might execute **after I/O** and `setImmediate()`.

---

### 📌 **Key Takeaways**

* Microtasks (like `Promise.then`) run before any I/O or timer callbacks.
* `setImmediate()` callbacks usually run before `setTimeout(..., 0)` when both are set at the same level.
* The event loop is **not random**—it follows a specific phase order.

-----------------------




### **Optimizing Event Loop Performance**:

1. **Avoid Blocking the Event Loop**:

   * Use **asynchronous** functions (`fs.readFile()` vs. `fs.readFileSync()`).
2. **Offload CPU-Intensive Work**:

   * Use **Worker Threads** or **Child Processes** to offload computationally heavy tasks.
3. **Efficient Timers**:

   * Minimize the usage of `setTimeout()` and `setInterval()` to avoid unnecessary delays and callback congestion.
4. **Profile and Monitor**:

   * Leverage tools like `clinic.js`, `pm2`, and `node-inspect` to monitor and optimize performance.

---

### **Real-World Applications**:

* **Scalability**:

  * Node.js is ideal for building **high-performance, scalable applications**, such as web servers and APIs, due to its non-blocking I/O model.

* **Efficient I/O Handling**:

  * Ideal for applications needing **real-time data processing** (e.g., messaging apps, live data feeds).

* **Concurrency Management**:

  * The Event Loop ensures concurrent operations without requiring multi-threading, making it highly suitable for **real-time applications** like chat servers or live-streaming.

---


---



### **SetImmediate vs processnextTick**:

* **`setImmediate()`**:
  * Executes in the **Check Phase**, after I/O events.
* **`process.nextTick()`**:
  * Executes immediately after the current operation, before any I/O tasks, including `setImmediate()`.


- If all three are scheduled together, `process.nextTick()` executes first, then `setTimeout(fn, 0)`, and `setImmediate()` executes last. 
-However, under I/O conditions, `setImmediate()` may execute before `setTimeout()` due to the event loop’s phase order.”*

**Summary Table**


---


### 🔁 **1. `process.nextTick()`**

* Executes **after the current operation**, **before** the event loop continues.
* Runs **before any I/O events** or timers.
* Part of the **nextTick queue**, **not** the event loop phases.

**Use Case:**

* Deferring execution while staying in the **same phase**.
* Useful for short tasks, cleanup, or recursively avoiding stack overflow.

```js
console.log('Start');

process.nextTick(() => {
  console.log('nextTick');
});

console.log('End');

// Output:
// Start
// End
// nextTick
```

---

### 🕓 **2. `setImmediate()`**

* Executes **after I/O events** in the **check phase** of the event loop.
* Runs **after** `process.nextTick()` and any synchronous code.

**Use Case:**

* Deferring execution until the I/O phase is complete.
* Suitable for **I/O-bound operations** or tasks after the current phase.

```js
console.log('Start');

setImmediate(() => {
  console.log('setImmediate');
});

console.log('End');

// Output:
// Start
// End
// setImmediate
```

---

### ⏱️ **3. `setTimeout(fn, 0)`**

* Executes after a **minimum of 0ms delay**, in the **timers phase** of the event loop.
* Delay is **not guaranteed to be immediate**, especially under load.

**Use Case:**

* Simple deferral with timing control.
* Less precise than `setImmediate()` for deferring to next cycle.

```js
console.log('Start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

console.log('End');

// Output:
// Start
// End
// setTimeout
```

---



| Use                  | Situation                                                                               
| -------------------- | --------------------------------------------------------------------------------------- |
| `process.nextTick()` | Need to **throw an error ASAP**, without crashing or overlapping stack                  |
| `setImmediate()`     | Want to **defer post-processing** (e.g., analytics, cleanups) without delaying response |


| Tool Used               | Task                               | Reason                                                                  |
| ---------------------------------- | ----------------------- | ----------------------------------------------------------------------- |
| `process.nextTick()`    |Throwing format error immediately  |  Ensure error is raised before any other code can process partial result |
| `setImmediate()`        | Logging analytics after completion | Non-critical background task; defer until after I/O and response        |



---

###  **Request Handling in Node.js**

1. **Client Sends HTTP Request**
2. **Node.js Accepts via HTTP Module or Express**
3. **Middleware Processed**
4. **Route Matched**
   - If sync: handled immediately.
   - If async (DB, FS): offloaded to thread pool.
5. **Callback queued on completion**
6. **Event Loop picks callback** when stack is free
7. **Response Sent**

---

### 🧵 **Thread Pool (libuv)**

- Default: **4 threads** (configurable via `UV_THREADPOOL_SIZE`).
- Used for:
  - File I/O (`fs.readFile`)
  - DNS (non-cached)
  - Crypto operations (`pbkdf2`)
  - Compression (zlib)

---

### 🚀 **Why Node.js is Fast (Despite Single Thread)**

- No thread per request → low memory usage.
- Async operations don’t block the event loop.
- Handles **thousands of connections** efficiently via callbacks.

---

### 💼 **Real-World Use Cases**

| Use Case               | Reason to Use Node.js                            |
|------------------------|--------------------------------------------------|
| **Real-time apps**     | Non-blocking, WebSocket support                  |
| **APIs & Microservices** | Lightweight, scalable, fast async response      |
| **Streaming services** | Stream API for data chunks                       |
| **Proxies/gateways**   | Handles many concurrent requests                 |
| **CLI tools**          | Fast execution with JS scripting capabilities    |

---




## **Event Driven Architecture**

- Event-Driven Architecture (EDA) is a software design pattern where components communicate through events. 
- Instead of direct method calls, components emit events when something happens, and other components listen for and react to those events. 
- This decouples producers from consumers, making systems more scalable, reactive, and flexible.
- It supports loose coupling, meaning services don’t need to know about each other. 
- This makes it easier to scale, test, and modify systems independently.
- However, it can be harder to debug and trace flows, so proper observability and logging are key.

---

### 🔁 **Core Concepts**

* **Event**: A message that signals that *something happened* (e.g., 'userRegistered').
* **Producer**: Sends (emits) the event.
* **Consumer**: Listens for and reacts to that event.
* **Event Bus or Broker**: The system that routes events (e.g., Node.js EventEmitter, Kafka, RabbitMQ, Redis Pub/Sub).

---

### 🧠 Example (Node.js - Micro Level)

```js
const EventEmitter = require('events');

const eventBus = new EventEmitter();

// Listener (consumer)
eventBus.on('userRegistered', (user) => {
  console.log(`Welcome email sent to ${user.email}`);
});

// Emitter (producer)
function registerUser(email) {
  const user = { email };
  console.log(`User registered: ${email}`);
  eventBus.emit('userRegistered', user);
}

registerUser('test@example.com');
```

---

### 📦 Real-World Use Cases

* **Microservices**: Services publish/subscribe to events instead of calling each other directly.
* **UIs**: React or Angular use events (clicks, changes) to trigger updates.
* **Serverless**: AWS Lambda triggered by events like S3 uploads or API Gateway calls.
* **Analytics pipelines**: Events like "itemPurchased" feed into Kafka for processing and insights.

---







##  **Event Emitters**


- In Node.js, `EventEmitter` is a core class provided by the built-in `events` module. It enables an **event-driven architecture**, allowing objects to **emit named events** and other parts of the code to **listen and respond** to those events asynchronously.

- It’s heavily used internally by Node.js — for example, in **streams**, **HTTP servers**, and **file system operations**. You can also use it in your custom modules to **decouple logic** and manage asynchronous workflows cleanly.

- A common pattern is to register listeners using `.on()` or `.once()` for one-time events. It’s especially useful in **real-time applications** where scalability and maintainability are key.

- I typically use `.once()` for **initialization events**,
- I **always handle the `'error'` event** to prevent the app from crashing,
- And I make sure to **remove listeners** when they're no longer needed to avoid **memory leaks**.

- One thing to note: I avoid using `EventEmitter` for simple callbacks.
- It's better suited for **broadcast-like, asynchronous patterns** rather than direct function invocation.

- I’m using multiple on('notify') listeners because I want different parts of my system to independently handle the same event — like email, WebSocket, and logging.
- This gives me loose coupling: none of the listeners depend on each other. I can remove, add, or update them without breaking the rest of the flow.
- It also improves code modularity — each listener focuses on a single task.
- They are executed in the order they were registered.

🔎 **Why EventEmitter?**

* You decouple the core logic (`placeOrder`) from side effects (e.g., notifications).
* You can plug/unplug listeners at runtime — great for scalable systems.


 **Commonly Used Methods**

| Method                             | Description                        |
| ---------------------------------- | ---------------------------------- |
| `.on(event, listener)`             | Registers a listener               |
| `.emit(event, [args])`             | Emits an event                     |
| `.once(event, listener)`           | Registers a one-time listener      |
| `.removeListener(event, listener)` | Removes a listener                 |
| `.removeAllListeners(event)`       | Removes all listeners for an event |
| `.listenerCount(event)`            | Returns count of listeners         |


 - [Event Emitter Interview Qns](#Event-Emitter-Interview-Qns)
 - [Event Emitter Example](#Event-Emitter-Example)


```js
const EventEmitter = require('events');

// Notification emitter
class NotificationCenter extends EventEmitter {}
const notificationCenter = new NotificationCenter();

// Email notification listener
notificationCenter.on('notify', (data) => {
  console.log(`📧 Email sent to ${data.user}: ${data.message}`);
});

// WebSocket notification listener
notificationCenter.on('notify', (data) => {
  console.log(`💬 WebSocket push to ${data.user}: ${data.message}`);
});

// Logging notification
notificationCenter.on('notify', (data) => {
  console.log(`📝 Logged notification for ${data.user}: ${data.message}`);
});

// Error handling (always handle 'error')
notificationCenter.on('error', (err) => {
  console.error('❌ Notification error:', err.message);
});

// Simulate triggering a notification
function triggerNotification(user, message) {
  try {
    notificationCenter.emit('notify', { user, message });
  } catch (err) {
    notificationCenter.emit('error', err);
  }
}

// Example usage
triggerNotification('vignesh@example.com', 'You have a new message!');
```

### **Event Emitter Interview Qns**

#### Q1: *What is the difference between `.on()` and `.once()`?*

> `.on()` listens every time an event is emitted. `.once()` listens only the **first time** and is removed automatically.

```js
emitter.once('data', () => console.log('Only once!'));
```

---

#### Q2: *What if an event has no listeners when it's emitted?*

> Nothing happens. By default, unhandled events are ignored unless it's an `'error'` event — that will crash the app if not handled.

```js
emitter.emit('unregisteredEvent'); // No issue
emitter.emit('error', new Error('Fail')); // ❌ if no 'error' listener
```

---

#### Q3: *Why is `EventEmitter` useful in a real-time system?*

> Because it supports **non-blocking communication between components**. You can trigger events like `userLoggedIn`, `messageReceived`, or `paymentProcessed` and let independent modules respond asynchronously, without tightly coupling logic.

---

#### Q4: *Can you remove an event listener?*

> Yes, using `.off()` or `.removeListener()`:

```js
const fn = () => console.log('Triggered');
emitter.on('log', fn);
emitter.off('log', fn);
```

---

### 🧠 5. **Advanced: Custom EventEmitter with Multiple Listeners**

```js
class Chat extends EventEmitter {
  sendMessage(user, msg) {
    this.emit('message', { user, msg });
  }
}

const chat = new Chat();

chat.on('message', ({ user, msg }) => {
  console.log(`User ${user} said: ${msg}`);
});

chat.on('message', ({ msg }) => {
  logAnalytics(msg);
});

chat.sendMessage('Alice', 'Hello!');
```

🧩 Multiple listeners = decoupled, pluggable behavior

---



### 🛠️ 7. **Real-Time System Examples**

| System          | Event Example                                  |
| --------------- | ---------------------------------------------- |
| Chat App        | `messageReceived`, `userTyping`, `userJoined`  |
| Order System    | `orderPlaced`, `orderShipped`, `paymentFailed` |
| Monitoring      | `cpuHigh`, `memoryLow`, `diskFull`             |
| File Processing | `fileUploaded`, `fileProcessed`, `fileError`   |

---




### BackPressure

> **Backpressure** is a mechanism to prevent overwhelming a slower destination stream(`fs.createWriteStream`) when the source (like `fs.createReadStream`) is producing data too fast.


**Where do you face it?** - reading a large file and writing it to another file or destination

> Typically when reading a large file using `fs.createReadStream` and writing it to another file or destination using `fs.createWriteStream`. If the **writable stream can't handle the incoming data fast enough, it causes backpressure**.


**Node.js automatically handles backpressure**

> When we use `.pipe()` — like `readable.pipe(writable)` 

* It pauses the readable stream if the writable buffer is full.
* It resumes reading once the writable stream drains.


**Can you handle backpressure manually?**

> Yes. We can manually control the flow:

```js
const readable = fs.createReadStream('input.txt');
const writable = fs.createWriteStream('output.txt');

readable.on('data', (chunk) => {
  const canWrite = writable.write(chunk);
  if (!canWrite) {
    readable.pause(); // Pause reading if write buffer is full
  }
});

writable.on('drain', () => {
  readable.resume(); // Resume once buffer is flushed
});
```

> This gives you full control and is useful when doing complex operations between streams.


**Why is it important?**

> Without backpressure handling:

* The process may consume too much memory.
* It could crash the app or slow down the system.
* Critical in real-time applications — like video streaming or file uploads.


**When would you use manual handling over `pipe()`?**

> When you:

* Need to transform or filter data between reading and writing.
* Want fine-grained control over how and when data is sent or processed.
* Are implementing custom throttling or retry logic.



##  **Streams**

- Handle large data chunks efficiently.
- Types: Readable, Writable, Duplex, Transform.


- **Streams** in Node.js are **abstract interfaces** for working with streaming data — data that **doesn’t have to be available all at once**, but can be processed **in chunks**.

- They’re essential when working with **large files**, **network sockets**, or **I/O-heavy operations**, 
- enabling you to process data efficiently with **low memory usage**.


- In Node.js, streams are crucial for handling large or continuous data efficiently. 
- They allow us to read/write data piece by piece without blocking the event loop. 
- For example, instead of reading a 1GB file into memory, 
- we can stream it in small chunks using `fs.createReadStream()` and pipe it directly to a writable stream. 
- This makes applications scalable and performant."*



### 🧩 **Types of Streams in Node.js**

1. **Readable** – stream from which data can be read
   *(e.g., `fs.createReadStream()` for reading files)*

2. **Writable** – stream to which data can be written
   *(e.g., `fs.createWriteStream()` to write to files)*

3. **Duplex** – both readable and writable (e.g., TCP socket)

4. **Transform** – a duplex stream that modifies data as it’s written and read (e.g., compression)


### 🎯 **Use Cases of Streams**

* Reading/writing large files
* HTTP request and response (e.g., serving a video)
* Real-time data processing (e.g., logs)
* Compression and decompression (using zlib)
* Audio/video streaming


### 📌 **Benefits of Using Streams**

* **Memory-efficient** (processes chunks instead of loading everything)
* **Faster I/O** (process while reading/writing)
* **Composable** (can be chained with `pipe()`)


### 📜 **Readable Stream Example**

```js
const fs = require('fs');

const readable = fs.createReadStream('file.txt', { encoding: 'utf8' });

readable.on('data', chunk => {
  console.log('Received chunk:', chunk);
});

readable.on('end', () => {
  console.log('No more data.');
});
```

---

### ✏️ **Writable Stream Example**

```js
const fs = require('fs');

const writable = fs.createWriteStream('output.txt');

writable.write('Hello World\n');
writable.end('Done writing');
```

---

### 🔄 **Piping Streams**

> `pipe()` is a method to connect the output of a readable stream to the input of a writable stream.

```js
const fs = require('fs');

fs.createReadStream('input.txt')
  .pipe(fs.createWriteStream('output.txt'));
```

This approach is **memory-efficient** and great for **large file operations**.

---



---

##  **Buffer**

- Represents binary data.
- Useful when dealing with streams.
 - In Node.js, a **Buffer** is a global object used to handle **binary data directly in memory**. It’s essential for working with streams, file I/O, network sockets, or any operation requiring raw data processing.
- Since JavaScript strings are not suitable for binary manipulation, Buffers provide an efficient way to **read, write, and manipulate raw bytes**, especially when dealing with encodings like UTF-8, base64, etc.
- Buffers allow Node.js to efficiently process binary data, making them a core feature for handling streams, files, and network protocols.


### 🔧 **Key Use Cases:**

* Reading/writing files (e.g., `fs.readFile`)
* Handling TCP or HTTP streams
* Encoding/decoding binary data (e.g., images, PDFs)

---

### 🧪 **Example:**

```js
const buf = Buffer.from('Hello');
console.log(buf.toString()); // Output: Hello

const buf = Buffer.from('Hello');
console.log(buf); // <Buffer 48 65 6c 6c 6f>
console.log(buf.toString()); // Hello
```


### 🧠 **Important Methods:**

* `Buffer.from(str)` – Create buffer from string/data
* `Buffer.alloc(size)` – Allocate zero-filled buffer
* `buffer.toString()` – Convert buffer to string
* `Buffer.concat([...])` – Merge multiple buffers

---


##  **Process Object**

- Global object for current Node.js process.
- Access environment variables, exit process, etc.

 Code Sample
```js
console.log(`PID: ${process.pid}`);
console.log(`Platform: ${process.platform}`);
```

---




## **Cluster Module vs Child Process vs Worker Thread**

- [Worker Threads](#worker-threads) 
 - [Child Processes](#child-processes)  
 - [Cluster Module](#cluster-module)


- In Node.js, help overcome its single-threaded nature and handle **CPU-bound tasks**, **parallel execution**, and **scaling**
- **Worker Threads** --> **parallel computation**,**heavy JS computations** without blocking the main thread.
- **Child Processes** --> **external script execution** or heavy isolation, 
- **Cluster** -->  **horizontally scaling servers** to handle more traffic across all CPU cores.”

**Worker Threads**

* **Used For:** - Running **CPU-intensive tasks** (e.g., image processing, encryption) in parallel without blocking the main event loop.
* Runs in the same process, but different threads (`worker_threads` module).
* Shares memory via `SharedArrayBuffer` if needed.
* Best for **offloading computation** while keeping I/O in the main thread.
* **Example** Video rendering > * Complex mathematical calculations > * JSON parsing of huge files

```ts
const { Worker } = require('worker_threads');
```


**Child Processes**

* **Used For:** Running **external scripts or system-level tasks** in **separate OS processes**.
* Uses the `child_process` module (`spawn`, `fork`, `exec`).
* Each process has its own memory and event loop.
* Good for **task isolation**, **script execution**, or **language interoperability** (e.g., calling Python from Node).
* **Example** > * Spawning a shell command > * Running a Python script from Node > * Heavy log processing in a forked process

```ts
const { fork } = require('child_process');
```

**3. Cluster Module**

* ✅ **Used For:**  **Scaling** a Node.js app across **multiple CPU cores** by creating multiple instances of the same server.
* Built-in load balancing using `cluster` module.
* Each process gets its own Node.js instance, can handle requests in parallel.
* Ideal for **horizontal scaling** of web servers.
* **Example Use Case:** > * Scaling an HTTP server to utilize all CPU cores > * High concurrency REST API server

```ts
const cluster = require('cluster');
```

---

## 📊 **Comparison Table**

| Feature                 | Worker Threads             | Child Process               | Cluster Module                     |
| ----------------------- | -------------------------- | --------------------------- | ---------------------------------- |
| Execution Model         | Thread (same process)      | New process                 | Multiple server instances (forked) |
| Communication           | MessageChannel, shared mem | IPC (message passing)       | IPC with master process            |
| Use Case                | CPU-bound tasks            | Script execution, isolation | Scale HTTP servers                 |
| Shared Memory           | Yes                        | No                          | No                                 |
| Built-in Load Balancing | ❌                          | ❌                           | ✅                                  |





| Feature / Aspect          | **Cluster Module**                          | **Child Process**                            | **Worker Thread**                          |
|---------------------------|---------------------------------------------|-----------------------------------------------|---------------------------------------------|
| 🔧 Purpose                | Scale app across CPU cores (load balancing) | Run external scripts or processes             | Run CPU-intensive JS code in parallel       |
| 🧠 Memory                 | Separate memory per worker                  | Separate memory per process                   | Shared memory with isolation (SharedArrayBuffer) |
| 🔄 Communication         | IPC via messaging                           | IPC via messaging (slower)                    | Fast message passing (same process)         |
| 🚀 Performance           | Good for scaling HTTP servers               | Costly for frequent creation                  | Better for JS-level parallel computing      |
|  Use Case              | Load-balanced web server, clustering apps   | Shell commands, script execution              | Heavy computations (e.g., parsing, hashing) |
| ⚙️ API Module           | `cluster`                                   | `child_process`                               | `worker_threads`                            |
| 🔁 Restart / Monitor     | Built-in restart logic (cluster.on exit)    | Manual process management                     | Must manage manually                        |
| 📞 Communication Speed   | Moderate                                    | Slow (serializing large data)                 | Fastest (structured cloning, SharedArrayBuffer) |
| ⚠️ Complexity            | Medium (setup + monitoring)                 | Low (simple to use)                           | Low to Medium (code split required)         |
| 🌐 Port Sharing         | Yes (workers share server port)             | No                                            | Not applicable                              |

---


 ## **Worker Threads**


- **Worker Threads** allow Node.js to run **JavaScript code in parallel** on multiple threads.
- They are part of the `worker_threads` module.
- Introduced in **Node.js v10.5.0** and stable from **v12 onwards**.
- Useful for **CPU-intensive** operations that can block the **main event loop**.
- Help improve performance in applications that require **heavy computation**.

---

### **When to use Worker Threads:**
- Performing **CPU-bound tasks** (e.g., encryption, image processing, large calculations).
- Running **long-running JavaScript operations** without blocking the main thread.
- Offloading **computational workloads** from the event loop to avoid performance issues.

---

### **Key Features:**
- Each worker runs in its **own thread** with a **separate V8 instance and memory heap**.
- Communicates with the main thread using **`postMessage`** and **`parentPort`**.
- Lightweight compared to `child_process`, as it's not a separate OS process.
- **Not ideal for I/O tasks** (prefer async/await or streams for those).

---

### **Simple Code Example:**

**main.js**
```js
const { Worker } = require('worker_threads');

const worker = new Worker('./worker.js');
worker.on('message', (msg) => console.log('Result:', msg));
```

**worker.js**
```js
const { parentPort } = require('worker_threads');

let sum = 0;
for (let i = 0; i < 1e9; i++) sum += i;

parentPort.postMessage(sum);
```



* Allows JavaScript code to run in parallel threads within a single Node.js process.
* **Key Features**:

  * Provides **multithreading** with each thread having its own event loop.
  * Enables **shared memory** using `SharedArrayBuffer` and communication via `MessageChannel`.
  * Best for **CPU-bound tasks** where parallel execution is needed.
* **Example Usage**:

  ```javascript
  const { Worker, isMainThread, parentPort } = require('worker_threads');

  if (isMainThread) {
    const worker = new Worker(__filename);
    worker.on('message', (message) => {
      console.log('Received from worker:', message);
    });
    worker.postMessage('Hello Worker');
  } else {
    parentPort.on('message', (message) => {
      console.log('Received from main thread:', message);
      parentPort.postMessage('Hello Main');
    });
  }
  ```



 ## Cluster Module

- Node.js is **single-threaded** by default and cannot leverage multiple CPU cores, which limits performance on modern multi-core machines.

- The Cluster module helps Node.js **scale applications vertically**, improving **performance, reliability, and fault tolerance** by distributing workloads across multiple processes, each utilizing a different core.

- The **Cluster module** is a built-in Node.js module that enables the creation of **multiple child processes (workers)**, 
- Each capable of handling requests **on the same server port**, effectively utilizing **multi-core systems**.

---

### 🚀 Key Features & Benefits

* **Full CPU Utilization**: Spreads load across available CPU cores.
* **Improved Throughput**: Handles more concurrent requests.
* **Fault Tolerance**: If one worker crashes, others continue to serve.
* **Scalability**: Ideal for compute-heavy or high-traffic applications.
* **Shared Port**: All workers listen on the **same port**, allowing a single-entry server setup.

---

### 🛠️ How It Works

| Component          | Description                                                |
| ------------------ | ---------------------------------------------------------- |
| **Master Process** | Uses `cluster.fork()` to create worker processes.          |
| **Workers**        | Each has its own **event loop** and handles requests.      |
| **IPC**            | Communication via `process.send()` and `'message'` events. |
| **Server Sharing** | Use `server.listen(...)` in workers to share sockets.      |

---

### 📘 Example Usage

```js
const cluster = require('cluster');
const os = require('os');
const http = require('http');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork(); // Create workers
  }
} else {
  http.createServer((req, res) => {
    res.end(`Handled by worker: ${process.pid}`);
  }).listen(3000);
}
```

---






## Child Processes


### **What are Child Processes?**
- Node.js uses the `child_process` module to **create subprocesses**.
- Enables **running external programs or scripts** in parallel.
- and  **communication via  IPC (Inter-Process Communication) using .send() and 'message' events** 
- Each child process runs in a **separate memory space** (unlike Worker Threads).
- Useful for handling **CPU-bound or blocking tasks**, or to **leverage other languages/tools**.

---

###  **When to Use Child Processes:**
- Running **external commands** or shell scripts (e.g., `ffmpeg`, `git`, `python`, etc.)
- **Spawning multiple Node.js processes** for heavy computations.
- **Isolating crashes** — if a child process crashes, it doesn’t affect the main process.
- Building **multi-core solutions** using clustering.

---

### 🧰 **Types of Child Process Methods:**
Absolutely! Here's an **interview-style breakdown** of the four main **child process methods** in Node.js — `spawn()`, `exec()`, `execFile()`, and `fork()` — with **real-world use cases**, **differences**, and how to answer confidently:

---

## spawn vs fork

| Method       | Shell | Output | Best Use Case                        | Supports IPC | Suitable For Large Output |
| ------------ | ----- | ------ | ------------------------------------ | ------------ | ------------------------- |
| `spawn()`    | ❌     | Stream | Long-running or big output tasks     | ❌            | ✅                         |
| `exec()`     | ✅     | Buffer | Short shell commands, pipelines      | ❌            | ❌                         |
| `execFile()` | ❌     | Buffer | Run binaries securely                | ❌            | ❌                         |
| `fork()`     | ❌     | IPC    | Node module child with communication | ✅            | ✅                         |

---

### 🧠 Bonus Q: *Why use `fork()` instead of `spawn('node', [...])`?*

> `fork()` is optimized for Node.js scripts, and it **automatically enables IPC** between parent and child. It simplifies communication and avoids manually setting up messaging channels.



## 🔧 1. `spawn()`

### ✅ Use when:

* You want to **stream output** (stdout/stderr) **in real-time**
* The command has **large output**
* You need more **fine-grained control**

```js
const { spawn } = require('child_process');

const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`Output: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`Error: ${data}`);
});

ls.on('close', (code) => {
  console.log(`Child exited with code ${code}`);
});
```

### 📦 Real-time use case:

* Streaming logs
* Real-time file conversion
* Piping video/audio output

---

## 🧨 2. `exec()`

### ✅ Use when:

* You need to run a **shell command**
* The output is **small** (buffered, not streamed)
* You want simplicity

```js
const { exec } = require('child_process');

exec('ls -lh /usr', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});
```

### ⚠️ Note:

* It buffers output in memory (default: 1MB)
* Can run **shell operators** like `&&`, `||`, redirects

### 🛠️ Use case:

* Simple CLI tools
* Git commands
* Bash pipelines

---

## 🚫 3. `execFile()`

### ✅ Use when:

* You want to execute **an actual file**, not via shell
* It’s **faster and more secure** than `exec()`
* You don't need shell features (like piping or redirection)

```js
const { execFile } = require('child_process');

execFile('/path/to/script.sh', ['arg1', 'arg2'], (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});
```

### 🛡️ Use case:

* Executing binaries/scripts where shell injection must be avoided
* Performance-sensitive tools

---

## 🧬 4. `fork()`

### ✅ Use when:

* You want to spawn **another Node.js process**
* You need **IPC (Inter-Process Communication)** via `process.send()`

```js
// parent.js
const { fork } = require('child_process');
const child = fork('child.js');

child.send({ hello: 'world' });

child.on('message', (msg) => {
  console.log('Message from child:', msg);
});
```

```js
// child.js
process.on('message', (msg) => {
  console.log('Message from parent:', msg);
  process.send({ received: true });
});
```

### 📡 Use case:

* Microservices inside a Node app
* Background computation workers
* Building a custom task queue or orchestrator

---









##  **Global Objects**

- `__dirname`, `__filename`, `global`, `process`
- Available in all modules.

 Code Sample
```js
console.log(__dirname);
console.log(__filename);
global.foo = 'bar';
console.log(foo);
```

---

##  **Process & Threads**

 

- Node.js runs on a single-threaded event loop architecture.
- It uses **libuv** under the hood for managing asynchronous operations via a pool of worker threads.
- CPU-bound tasks should be offloaded to child processes or worker threads.
- Suitable for I/O-bound, not CPU-bound applications.



```js
console.log(`Main process PID: ${process.pid}`);
setTimeout(() => console.log('Async operation'), 1000);
```

---


---

##  **Node.js handle multiple requests**
- Node.js uses a single-threaded event loop to handle all incoming requests. 
- It uses a background thread pool via libuv to offload I/O-heavy tasks, and schedules their completion using callbacks. 
- This allows Node to handle thousands of requests concurrently without spawning new threads for each request.



---

##  **Streams**

 

- Streams are memory-efficient for reading/writing large data.
- Streams process large data efficiently by handling it in chunks, avoiding memory overload.
- Types:
  - **Readable**: Used for reading operations.
  - **Writable**: Used for writing operations.
  - **Duplex**: Both read and write.
  - **Transform**: Modify data while reading/writing.



```js
const fs = require('fs');
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');
readStream.on("data", chunk => console.log(chunk));
readStream.pipe(writeStream);
```

---

##  **WebSockets (Socket.IO Basics)**

 

- Enables two-way, real-time communication between client and server.
- Used in chats, games, real-time dashboards.
- Socket.IO simplifies WebSocket implementation with fallback mechanisms.



```js
const http = require('http').createServer();
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('message', (msg) => {
    io.emit('message', msg);
  });
});

http.listen(3000);
```

---

##  **CORS**

- **CORS** is a **browser-enforced security feature** 
- **restricts web pages from making requests to a different origin** (domain, protocol, or port) than the one that served the web page.
- CORS is critical when a frontend served from one origin (e.g., `localhost:3000`) makes requests to an API hosted on another (e.g., `api.example.com`). 
- I typically use the `cors` middleware in Express and **configure it per environment — open in dev, and locked down to trusted origins with strict headers in production**.”

* Browsers implement **same-origin policy** to prevent **cross-site attacks**.
* CORS enables **controlled access** to resources on different domains.
* Server must send **specific HTTP headers** to allow or restrict access.
- Node.js does not handle CORS headers by default. It must be configured manually or using the `cors` middleware:


```js
app.use(cors()); // Allow all origins (not recommended for production)
app.use(cors({
  origin: 'http://example.com' // Allow only this domain
}));
app.use(cors({
  origin: ['https://client.example.com', 'https://admin.example.com'],
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Allow cookies/auth headers
}));
```

| 🔍 Feature                 | ✅ Best Practice                       |
| -------------------------- | ------------------------------------- |
| Allow all origins          | Only in **development**               |
| Specific origin control    | Use `origin: 'https://your-app.com'`  |
| Credentials (cookies/auth) | `credentials: true` + specific origin |
| Preflight support          | Automatically handled by `cors` lib   |
| Security                   | Always restrict origins in production |


- **One common vulnerability I watch for is insecure CORS**,
- especially APIs exposing sensitive data.
- I've seen setups where **Access-Control-Allow-Origin: * is used even with credentials enabled — a serious mistake**.
- I ensure we validate origins against a whitelist, never use wildcards in prod, and separate internal vs public APIs using different CORS policies.”




##  **Environment Variables and dotenv**

 

- Secure and manage configuration outside of the source code.
- The `dotenv` package loads `.env` file variables into `process.env`.



```env
PORT=3000
API_KEY=123456
```

```js
require('dotenv').config();
console.log(process.env.API_KEY);
```

---



##  **Node.js with Redis (Caching)**


- Redis is used for caching, session storage, pub/sub.
- Reduces DB load by storing frequently accessed data.


```js
const redis = require('redis');
const client = redis.createClient();

client.on('connect', () => console.log('Connected to Redis'));

app.get('/data', async (req, res) => {
  client.get('key', async (err, result) => {
    if (result) return res.send(JSON.parse(result));

    const data = await getFromDb();
    client.setex('key', 3600, JSON.stringify(data));
    res.send(data);
  });
});
```

> * I use `SET` + `EX` for time-limited values (OTP, session tokens).
> * `GET` retrieves the value; `TTL` helps me check when it expires.
> * `HMSET` is perfect for structured data like user objects or app configs.
> * `HGET` gets individual fields; `HGETALL` gives the full map.
> * This combination is **fast**, **in-memory**, and ideal for **read-heavy apps**.

**`SET`, `GET`, `EX`, and `TTL`**

**Answer (interview-style):**

> "I typically use `SET` and `GET` for simple key-value storage, especially for caching responses or managing short-lived values like  OTPs.

For example, in a login system, after authenticating a user, I store a JWT token in Redis like this:

```js
await redis.set(`session:${userId}`, token, 'EX', 3600); // 1 hour expiry
```

> Later, when the user makes a request, I use:

```js
const token = await redis.get(`session:${userId}`);
```

> If I want to **check how long the session remains valid**, I use:

```js
const ttl = await redis.ttl(`session:${userId}`);
```

> This helps us **auto-expire inactive sessions** and also refresh them if the TTL is too low, improving both security and performance."


**`HMSET`, `HGET`, and `HGETALL`**


> "I use Redis hashes (`HMSET`, `HGET`, `HGETALL`) when I need to store and access structured data — like user profiles or config settings — under a single key with multiple fields.

**Example:**
When a user signs up, I store their profile details in Redis using `HMSET`:

```js
await redis.hmset(`user:${userId}`, {
  name: 'Vignesh',
  email: 'vignesh@example.com',
  role: 'admin'
});
```

> Later, to get the full object, I use:

```js
const profile = await redis.hgetall(`user:${userId}`);
```

> And if I need just a specific field, I use:

```js
const name = await redis.hget(`user:${userId}`, 'name');
```

> This structure allows me to **store multiple fields under a single key**, avoid multiple round-trips, and update just one field efficiently."


---


## **CommonJS Vs ES Modules**

- **CommonJS** is used in Node.js and uses `require()` and `module.exports`.
- **ES Modules** (introduced in ES6) use `import` and `export`.

**Example:**
- CommonJS:
  ```js
  const fs = require("fs");
  module.exports = { greet };
  ```
- ES Modules:
  ```js
  export function greet() { console.log("Hello!"); }
  import { greet } from "./module.js";
  ```



## **Error Handling**

- **Synchronous**: `try-catch`.
- **Asynchronous**: `Error-first callback pattern`, `Promises`, `Async/Await`.

```js
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});
```

---





## **Authentication vs Authorization**

- **Authentication**: Verifies user identity (e.g., JWT ).
- **Authorization**: Determines what resources a user can access. (e.g., Role ).

| Term               | Description                          | Example                         |
| ------------------ | ------------------------------------ | ------------------------------- |
| **Authentication** | Verifying **who** the user is        | Login with username/password    |
| **Authorization**  | Verifying **what** a user can access | Only admin can access dashboard |

- JWT: Issued access and refresh tokens; refresh stored in HttpOnly cookies.
- Password Hashing: Used bcrypt with proper salt rounds.
- RBAC: Implemented role-based access control using middleware.
- Rate Limiting: Used express-rate-limit to prevent brute force.
- Helmet & CORS: Added HTTP headers and domain-level CORS rules.




## **JWT in Cookies vs Headers**

| Method |  Pros | ❌ Cons |
|--------|--------|---------|
| **Authorization Header** | Simple, stateless, widely used in APIs | Exposed to JS (XSS risk) |
| **HTTP-only Cookie** | More secure against XSS (not accessible via JS) | CSRF protection required |

**Backend (Node.js/Express)**
- Authenticates user
- Sets JWT as an HttpOnly cookie

**Frontend (React)**
- Sends credentials: 'include' to receive and send cookie
- Makes authenticated requests without accessing JWT directly
- Clear Cookie ```res.clearCookie('token');``` during logout


**Example: Set JWT in Cookie**
```ts
res.cookie('accessToken', token, {
  httpOnly: true,
  secure: true,     // set to true in production
  sameSite: 'strict',
  maxAge: 15 * 60 * 1000, // 15 min
});
```
---

## **Secure Node.js App**

|  **Practice** | 📋 **Explanation** | 🛠️ **Example / Tool** |
|----------------|--------------------|------------------------|
| **HTTPS** | Ensures data is encrypted in transit. | Use [Let's Encrypt](https://letsencrypt.org/) or a certificate provider. |
| **Input Validation** | Prevents malicious or malformed data from reaching your logic layer. | Use `Joi`, `express-validator`. |
| **Sanitize Data** | Removes harmful code (like scripts) from input. | Use libraries like `xss-clean`, `express-mongo-sanitize`. |
| **SQL Injection Prevention** | Attackers can inject SQL via input fields. Use parameterized queries or ORM. | Use Sequelize, Prisma, or Mongoose (for MongoDB). |
| **Authentication** | Validates user identity. Tokens ensure sessionless security. | Use `JWT`, `Passport.js`, `OAuth2`. |
| **Environment Variables** | Keeps secrets/config outside code. | Use `dotenv` in development, `AWS Secrets Manager` in production. |
| **Rate Limiting** | Blocks excessive requests (helps prevent DDoS attacks). | `express-rate-limit` middleware. |
| **Helmet** | Secures HTTP headers. Protects against common web vulnerabilities. | `app.use(helmet())` |
| **NPM Audit** | Scans your dependencies for vulnerabilities. | Run `npm audit fix` regularly. |

---

---

## **Performance Optimization**
| **Category**              | **Strategy**                                                               | **Category**               | **Strategy**                                                      |
| ------------------------- | -------------------------------------------------------------------------- | -------------------------- | ----------------------------------------------------------------- |
| **Async Operations**      | Use **`async/await`**, avoid blocking calls like **`fs.readFileSync`**     | **Caching**                | Use **Redis** or **in-memory cache** for frequent data            |
| **Database Optimization** | Add **indexes**, use **pagination**, avoid over-fetching                   | **DB Connection Pooling**  | Use **`pg-pool`** or ORM pooling to reuse DB connections          |
| **Code Efficiency**       | Use **Streams** for large files, avoid large **synchronous loops**         | **Background Jobs**        | Offload to **Bull**, **worker threads** for heavy operations      |
| **Load Balancing**        | Use **clustering**, **PM2**, or **Node cluster module**                    | **Rate Limiting**          | Apply **`express-rate-limit`** to prevent abuse                   |
| **Compression**           | Enable **Gzip/Brotli** using `compression` middleware                      | **Minification**           | **Minify JS/CSS** to reduce client-side load                      |
| **Lazy Loading**          | Use **`await import()`** for conditional module loading                    | **Code Splitting**         | Load only needed parts/modules in large-scale apps                |
| **Event Loop Monitoring** | Track loop lag with **`event-loop-lag`** or Node.js metrics                | **Profiling**              | Use **`clinic.js`**, **`node --inspect`**, or **Chrome DevTools** |
| **Observability**         | Use **Winston/Pino** for structured logs                                   | **Monitoring Tools**       | Use **Prometheus**, **Datadog**, or **ELK stack**                 |
| **Real-World Example**    | Reduced latency from **400ms → 150ms** via **Redis caching & DB indexing** | **Async Media Processing** | Offloaded to **Bull + Redis queues** for scalability              |




## **Caching Strategies**

- **In-memory Caching**: Use **Redis** for frequently accessed data.
- **Cache Expiration**: Set TTL (Time to Live) to prevent stale data.
- **Lazy Loading**: Cache data only when required.

---

## **Load Balancing**




- In Node.js, I implement load balancing at two levels: 
within a **single machine using multi-core processing**, and 
across **multiple servers using reverse proxies or cloud-based load balancers.**
- This helps improve throughput, scalability, and fault tolerance."

* Using the cluster module or PM2 to utilize all CPU cores,
* Adding reverse proxies like Nginx for multi-server scaling,
* Managing sessions effectively,
* And ensuring resilience with health checks and restarts."



###  **1. Application-Level Load Balancing (Single Server)**

- "Since Node.js runs on a single thread, 
- I use the built-in `cluster` module to take advantage of multi-core CPUs. 
- It allows me to spawn multiple worker processes that share the same server port."

* Each process handles a portion of the incoming traffic.
* If one worker crashes, the master can restart it.

```js
const cluster = require('cluster');
const os = require('os');

if (cluster.isPrimary) {
  for (let i = 0; i < os.cpus().length; i++) cluster.fork();
} else {
  // Express app runs here
}
```

---

###  **2. PM2 Cluster Mode**

- "In production, I prefer using **PM2** in cluster mode — it's simpler, supports zero-downtime restarts, and handles process monitoring out-of-the-box."

```bash
pm2 start app.js -i max
```

* This runs one instance per CPU core.
* PM2 manages load distribution internally.

---

###  **3. Load Balancing Across Multiple Servers**

- "When scaling beyond a single machine, 
- I use a reverse proxy like **Nginx** or **cloud-based load balancers** (e.g., AWS ELB, GCP Load Balancer) to distribute traffic across multiple Node.js instances."

* Each instance can run on different machines or containers.
* Nginx supports round-robin, IP-hash, or least-connections strategies.

```nginx
upstream node_cluster {
  server 10.0.0.1:3000;
  server 10.0.0.2:3000;
}
```

---

###  **4. Session Handling**

- "If the app needs to maintain sessions, 
- I either enable **sticky sessions** or use a **centralized session store** like Redis, 
- to avoid session affinity issues in load-balanced environments."

---

###  **5. Monitoring & Health Checks**

- I also configure **health checks** and use tools like PM2, Docker, or Kubernetes probes to ensure unhealthy instances are restarted or removed from rotation."

---

---

## **Handling Large File Uploads**

Use **Multer** for handling multipart file uploads and consider storing large files in cloud services like **AWS S3** or **Google Cloud Storage**.

```js
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  console.log('File uploaded:', req.file);
  res.send('File uploaded successfully');
});
```

---

## **Dependency Injection**

Dependency Injection (DI) helps manage service dependencies and simplifies testing.

Example using **InversifyJS**:
```ts
import { Container, inject, injectable } from 'inversify';

@injectable()
class UserService {
  constructor(@inject('Database') private db: any) {}
  getUser(id: string) {
    return this.db.findUser(id);
  }
}

const container = new Container();
container.bind('Database').toConstantValue(new DatabaseConnection());
container.bind(UserService).toSelf();
```

---

## **Database Transactions**

Use ORMs like **Sequelize** or **Mongoose** to handle database transactions and ensure data consistency.

Example using **Sequelize**:
```ts
const { sequelize } = require("./models");

async function performTransaction() {
  const t = await sequelize.transaction();

  try {
    await User.create({ name: 'John' }, { transaction: t });
    await Order.create({ userId: 1, total: 100 }, { transaction: t });

    await t.commit();
  } catch (error) {
    await t.rollback();
  }
}
```

---

## **Data Validation**

Use **Joi** or **express-validator** for input validation in APIs.

Example using **Joi**:
```ts
import Joi from 'joi';

const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  age: Joi.number().min(18).required(),
});

const { error, value } = userSchema.validate(req.body);
if (error) {
  res.status(400).send(error.details);
} else {
  res.status(200).send(value);
}
```

## **Asynchronous operations?**

- You can use `async/await`, Promises, or callbacks. 
- TypeScript provides type safety and proper async/await support.

Example:
```ts
const fetchData = async (): Promise<string> => {
  return await Promise.resolve("data");
};
```

---


##  **Express request/response objects?**

```ts
import { Request, Response } from 'express';

const handler = (req: Request, res: Response) => {
  res.send('Hello TypeScript');
};
```

---

## **Type safety across layers?**

Define shared interfaces/types and use them consistently across all layers. Use DTOs (Data Transfer Objects) if needed.

---

##  **Middleware**

- A function that **runs before the final route handler**.
- Has access to the **req, res, and next()** objects.
- Can **modify request/response, perform checks, or short-circuit the pipeline**.
- Used **globally or at the route level**.
- I use **route-level middleware to control specific endpoints**. 
- For example, in an admin panel, I might **chain `authenticateJWT` and `checkAdminRole` on selected routes**. 
- Auth Middleware on a Single Route ```js router.get('/profile', authenticateJWT, (req, res) => {})```
- Chaining Multiple Middlewares ```js router.post('/create',  authenticateJWT,  checkAdmin,  validateRequest,  (req, res) => {  })```
- Apply Middleware to All Routes in a Router - ```js userRouter.use(authenticateJWT)```;

**Common Middleware Use Cases**
- Logging (e.g., morgan, custom logger) - Authentication & Authorization - Request Body Parsing & Validation (express.json(), Joi, Zod)
- CORS configuration - Rate Limiting & Throttling - Error Handling

```js
const express = require('express');
const app = express();

// Global middleware
app.use((req, res, next) => {   console.log("Middleware running");   next(); });
// Logger middleware
const logger = (req, res, next) => {   console.log(`${req.method} ${req.url}`);   next(); };

const authJWT = (req, res, next) => {
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    (req as any).user = payload;
    next();
  } catch {
    res.status(403).json({ error: 'Forbidden' });
  }
};
app.use(logger);
app.get('/', (req, res) => res.send('Home'));
app.get('/admin',authJWT, (req, res) => res.send('Home'));
app.listen(3000, () => console.log('Server running'));
```


**Middleware to Protect Routes**
```ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'yourSecretKey';

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer '))
    return res.status(401).json({ error: 'Unauthorized' });

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    (req as any).user = payload;
    next();
  } catch {
    res.status(403).json({ error: 'Forbidden' });
  }
};
```

---



##  **Scalability issues**
   - **Clustering**: Use the `cluster` module to utilize multi-core systems by spawning worker processes.
   - **Load Balancing**: Distribute incoming requests across multiple servers using NGINX, HAProxy, or AWS Elastic Load Balancer.
   - **Horizontal Scaling**: Deploy multiple instances of the application using containers (e.g., Docker) and orchestration tools like Kubernetes.
   - **Caching**: Use Redis or Memcached to cache frequently accessed data.
   - **Optimize Queries**: Use efficient database queries and indexing.

---




## **Single-Threaded Nature**
- Node.js runs in a **single-threaded environment** using a single thread, allowing it to handle concurrent I/O operations effectively due to its **non-blocking asynchronous execution model**.
- For **multi-core utilization**, Node.js can use **clustering** (which creates multiple Node.js processes) or **worker threads**.


## **Handling CPU-Intensive Tasks**
- Use **Worker Threads** (via the `worker_threads` module) for CPU-intensive tasks, which offloads the task to another thread and prevents blocking the main event loop.
- For efficiency, use **worker pools** instead of spawning a new worker for each task.

---








## **REST API?**

A REST (Representational State Transfer) API is an architectural style that uses HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources. Resources are identified by URIs.

For example, when designing APIs in Node.js using Express, I follow these REST principles by structuring endpoints cleanly (/api/products/:id), keeping them stateless, and using HTTP methods semantically. I also handle proper status codes and ensure APIs are versioned and cacheable when needed.

---

## **REST API design principles?**
- Use **nouns**, not verbs in URIs: `/users`, not `/getUsers`
- Use proper HTTP methods
- Use **plural nouns** for collections
- Return appropriate status codes
- Version your API: `/api/v1/users`
- Support filtering, pagination, and sorting with query params

---



## request response query params

| **Property / Method** | **Example**                                 | **Definition**                                                                    | **Used For**                               |
| --------------------- | ------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------ |
| `req.params`          | `/users/:id` → `req.params.id`              | Captures **dynamic values from URL path segments**                                | URL path variables (e.g., `/users/123`)    |
| `req.query`           | `/users?role=admin` → `req.query.role`      | Parses **key-value pairs from the URL query string** (after `?`)                  | Filtering, sorting, pagination             |
| `req.body`            | `{ "email": "a@b.com" }` → `req.body.email` | Holds **data sent in the request body**, typically JSON or form data              | POST/PUT requests (e.g., login, form data) |
| `res.send()`          | `res.send('Done')`                          | Sends a **plain-text or HTML response** to the client                             | Simple text or HTML responses              |
| `res.json()`          | `res.json({ ok: true })`                    | Sends a **JSON-formatted response**, auto-sets content-type to `application/json` | Structured API responses                   |





## **HTTP methods**
| Method | Use Case |
|--------|----------|
| `GET` | Retrieve data |
| `POST` | Create new data |
| `PUT` | Replace entire object |
| `PATCH` | Modify a few fields |
| `DELETE` | Remove data |


- The Location header is most commonly used with POST (new resource creation),

- If a new resource was created 
(because sometimes a PUT can be used to create a resource if it doesn’t already exist).
HTTP/1.1 201 Created
Location: /v1/invoices/123e4567
Content-Type: application/json

Location header Benefits:
- Clarity: Client knows the exact URL of the new resource.
- Consistency: Aligns with REST best practices.
- Efficiency: No need for clients to rebuild the resource path manually.

Summary for PUT:
- 200 OK (or 204 No Content) → when updating an existing resource.
- 201 Created + Location header → when the resource didn’t exist before and the PUT caused its creation.

| Method    | Purpose                       | Response Body | Common Use Case                         |
| --------- | ----------------------------- | ------------- | --------------------------------------- |
| `HEAD`    | Headers only                  | ❌ No          | Metadata checks, health checks          |
| `CONNECT` | Tunnel for SSL through proxy  | Depends       | HTTPS via HTTP proxy                    |
| `OPTIONS` | Discover allowed HTTP methods | ❌ No          | CORS preflight, API capabilities check  |
| `TRACE`   | Echo back the request         | ✅ Yes         | Debugging (often disabled for security) |
---

## **RESTful structure**
**Example:**
```ts
// routes/user.routes.ts
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
```




---

## **Implement pagination in a REST API?**
```ts
GET /users?page=2&limit=10
```

In controller:
```ts
const page = parseInt(req.query.page as string) || 1;
const limit = parseInt(req.query.limit as string) || 10;
const skip = (page - 1) * limit;

// use skip and limit in DB query
```

---

## **Status codes?**
| Status Code | Meaning |
|-------------|---------|
| `200` | OK |
| `201` | Created |
| `204` | No Content |
| `400` | Bad Request |
| `401` | Unauthorized |
| `404` | Not Found |
| `500` | Server Error |


---

###  **1xx – Informational**

| Code | When to Return                                     |
|------|----------------------------------------------------|
| 100  | Used internally by some HTTP clients (rarely used manually) |
| 101  | When switching protocols (e.g., HTTP → WebSocket)  |

---

###  **2xx – Success**

| Code | When to Return | Example |
|------|----------------|---------|
| **200 OK** | Standard response for successful GET, PUT, or PATCH request | `GET /users/5` returns user info |
| **201 Created** | Resource successfully created | `POST /users` to add a new user |
| **202 Accepted** | Request accepted but processing happens asynchronously | Upload processing |
| **204 No Content** | Successful request but no content to return | `DELETE /users/5` or `PUT` with no change |

---

###  **3xx – Redirection**

| Code | When to Return | Example |
|------|----------------|---------|
| **301 Moved Permanently** | Resource has permanently moved to a new URL | Redirecting from old domain |
| **302 Found** | Temporarily redirect to another URL | Login redirects temporarily |
| **304 Not Modified** | Use cached version, no update since last fetch | Used with ETags or `If-Modified-Since` header |

---

###  **4xx – Client Errors**

| Code | When to Return | Example |
|------|----------------|---------|
| **400 Bad Request** | Invalid data from client | Missing required fields, bad JSON |
| **401 Unauthorized** | No or invalid authentication token | User not logged in (User isn’t authenticated) |
| **403 Forbidden** | Authenticated but not allowed to access the resource | User role not allowed(User is authenticated, but doesn’t have permission) |
| **404 Not Found** | Requested resource doesn’t exist | `GET /products/999` where product doesn’t exist |
| **409 Conflict** | Request conflicts with current state of server | Creating user with already-used email |
| **422 Unprocessable Entity** | Validation failed | Name too short, invalid email format |

---

###  **5xx – Server Errors**

| Code | When to Return | Example |
|------|----------------|---------|
| **500 Internal Server Error** | Unexpected exception or failure | Database crashes, unhandled error |
| **502 Bad Gateway** | Server acting as proxy got invalid response from upstream | API gateway problem |
| **503 Service Unavailable** | Server is down or overloaded | During maintenance |
| **504 Gateway Timeout** | Server didn’t respond in time | Timeout waiting for microservice/API |

---

## 🎯 RESTful API Status Code Guide (Cheat Sheet)

| Action              | Method | Status |
|---------------------|--------|--------|
| Fetch all users     | GET    | 200 OK |
| Get specific user   | GET    | 200 or 404 |
| Create user         | POST   | 201 or 400/422 |
| Update user         | PUT    | 200/204 or 404 |
| Delete user         | DELETE | 204 or 404 |
| Login failed        | POST   | 401 or 403 |
| Duplicate request   | POST   | 409 Conflict |

---


```ts
res.status(201).json({ message: 'User created' });
```

---

## **Error handling in REST APIs?**


- In my REST APIs, I follow a **consistent and layered approach** to error handling to ensure the API is **robust, debuggable, and user-friendly**. 
- I implement **centralized error handling**, **custom error classes**, and **standard error response formats**. Here's how I handle it:"
- "**I structure my error handling to be centralized, clean, and predictable.**
- This ensures that errors are properly logged, clients receive meaningful feedback, and the API remains stable and secure even when things go wrong."



###  **1. Centralized Error Handling**

* I create a **global error-handling middleware** (e.g., in Express) so that all errors are caught in one place.
* This avoids repetitive error logic in each route.

```js
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    errorCode: err.errorCode || 'SERVER_ERROR',
  });
});
```


###  **2. Custom Error Classes**

* I define **custom error classes** for different types of errors (e.g., `ValidationError`, `AuthError`, `DatabaseError`).
* This improves error context and reusability.

```js
class AppError extends Error {
  constructor(message, statusCode, errorCode) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }
}
```

👉 Example usage:

```js
throw new AppError('User not found', 404, 'USER_NOT_FOUND');
```


###  **3. Consistent Error Response Format**

* I use a **uniform JSON structure** for all errors:

```json
{
  "success": false,
  "message": "Invalid credentials",
  "errorCode": "AUTH_FAILED"
}
```

> This helps frontend or mobile clients **handle errors predictably**.


###  **4. Handling Async/Await Errors**

* I wrap all `async` route handlers with a **generic wrapper** to catch unhandled promise rejections:

```js
const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
```

> This avoids using `try/catch` in every route.


###  **5. Internal Logging (Without Exposing Stack Traces)**

* I log all errors using tools like **Winston**, **Pino**, or **Sentry**.
* In production, I **hide internal stack traces** from users for security.


###  **6. Use Proper HTTP Status Codes**

* I ensure the API uses **accurate and meaningful HTTP status codes**:

  * `400` – Bad Request   * `401` – Unauthorized   * `403` – Forbidden  * `404` – Not Found  * `500` – Internal Server Error

---


## **Secure REST APIs**

Security in REST APIs is multi-layered. I
I follow **careful design, validated inputs, secure data handling, and runtime protection**

* HTTPS & Secure Headers (`helmet`, `hpp`)
* JWT with expiration & refresh
* Role Based access control & proper authorization checks
* Input validation (`Joi`, `Zod`, etc.)
* Rate limiting + IP restrictions
* CORS, CSP, and CSRF protection
* Secrets managed in secure vaults
* Continuous security scanning
---


### **1. Transport Layer Security** - * **Always enforce HTTPS** to protect data in transit. 
* Use **secure headers** with [`helmet`](https://www.npmjs.com/package/helmet).

### **2. Authentication & Authorization**

* Use **JWT** for stateless authentication.

  * Sign with a secure **secret** or **RSA key**.
  * Validate tokens via middleware.
  * Implement **expiry, refresh tokens**, and **token rotation**.
* For third-party login, use **OAuth2** (e.g., Google, GitHub).

  * Libraries: `passport`, `simple-oauth2`
* Implement **RBAC (Role-Based Access Control)** to control access to resources.

---

### **3. Input Validation & Sanitization**

* Prevent **XSS, SQL Injection**, and data corruption.
* Validate and sanitize all incoming data:

  * Libraries: `Joi`, `Zod`, `express-validator`
* Use **parameterized queries** with ORM or raw SQL to prevent injection attacks.

---

### **4. Rate Limiting & Throttling**

* Protect APIs from abuse and DoS attacks:

  * Use `express-rate-limit`
  * Or configure **NGINX** / **API Gateway** for rate control
* Implement **IP whitelisting** for sensitive endpoints.

---

### **5. CORS & Browser Security**

* Configure **CORS policies** strictly using `cors` middleware.
* Enforce **Content Security Policy (CSP)** headers.
* Add **CSRF protection** where needed (e.g., cookies-based auth).

---

### **6. Secrets & Token Management**

* Never hardcode secrets or API keys.
* Store secrets securely using:

  * **AWS Secrets Manager**
  * **HashiCorp Vault**
  * `.env` files + secure CI/CD vaulting (for local dev)

---

### **7. Continuous Security**

* Conduct **static analysis (SAST)** and **runtime testing (DAST)**.
* Monitor for vulnerabilities with tools like:

  * `npm audit`, `snyk`, `OWASP ZAP`



Example with JWT:
```ts
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  // Verify token
  next();
};
```

---

## Clean RESTful Folder Structure

```
src/
├── controllers/
│   └── user.controller.ts
├── services/
│   └── user.service.ts
├── routes/
│   └── user.routes.ts
├── middlewares/
│   └── auth.middleware.ts
├── dtos/
│   └── create-user.dto.ts
├── models/
│   └── user.model.ts
```

- MVC Structure: controllers/, services/, routes/, middlewares/.
- Separation of concerns: Business logic inside services, routes stay thin.
- Error handling: Central error handler middleware, using asyncHandler for routes.
- Logging: Used winston or pino for structured logging.
- Validation: Used Joi or express-validator for input validation.

---









## **Role-Based Access Control (RBAC)**

RBAC allows you to restrict access to routes based on the user's role (e.g., `admin`, `user`, `moderator`).

**Token with role**
```ts
const token = jwt.sign(
  { userId: user.id, role: user.role },
  JWT_SECRET,
  { expiresIn: '1h' }
);
```

---

### Middleware: Check Role
```ts
export const authorizeRoles = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    if (!user || !allowedRoles.includes(user.role)) {
      return res.status(403).json({ error: 'Forbidden - Insufficient role' });
    }
    next();
  };
};
```

---

**Usage**
```ts
app.get('/admin/dashboard',
  authenticateJWT,
  authorizeRoles('admin'),
  (req, res) => {
    res.json({ message: 'Welcome Admin!' });
  }
);
```

---

## **Refresh Tokens**


Access tokens are short-lived (e.g., 15min). 
A refresh token is long-lived (e.g., 7d) and used to get a new access token without re-logging in.

---

**Basic Flow:**
1. User logs in → gets `accessToken` + `refreshToken`
2. `accessToken` expires → frontend sends `refreshToken` to backend
3. Server verifies `refreshToken` and returns a new `accessToken`

---

**Generate Tokens**
```ts
const accessToken = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '15m' });
const refreshToken = jwt.sign({ userId }, JWT_REFRESH_SECRET, { expiresIn: '7d' });

// Store refresh token in DB or in-memory store (e.g., Redis)
```

---

**Refresh Token Endpoint**
```ts
export const refreshToken = (req: Request, res: Response) => {
  const { token } = req.body;
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_REFRESH_SECRET, (err, payload) => {
    if (err) return res.sendStatus(403);

    const accessToken = jwt.sign({ userId: payload.userId }, JWT_SECRET, { expiresIn: '15m' });
    res.json({ accessToken });
  });
};
```

---

## **packagejson vs package lockjson**

- package.json defines the metadata and dependencies of a Node.js project — it tells npm what packages are needed and can include version ranges. 
- package-lock.json records the exact versions of those packages and all nested dependencies. It's auto-generated and ensures reproducible builds across environments. 
- Both files work together: `package.json` is for humans, `package-lock.json` is for the system."
- package-lock.json guarantees that **everyone** will install `express@4.18.2` even if `package.json` allows a range.

###  **1. `package.json`** – _The Project Manifest_

- **Purpose**: Lists your project’s dependencies and metadata.
- **Created by**: `npm init`
- **Used for**:
  - Describing the project (name, version, scripts)
  - Listing dependencies with **version ranges** (`^`, `~`, etc.)
  - Ensuring everyone knows _which_ packages are needed.

**Example:**
```json
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.0"
  }
}
```

- `^4.18.0` means any minor/patch update like `4.18.1`, `4.19.0` is acceptable.

---

###  **2. `package-lock.json`** – _The Dependency Snapshot_

- **Purpose**: Locks exact versions of installed packages and their dependencies.
- **Created by**: Automatically by `npm install`
- **Used for**:
  - Ensuring **exact versions** across all environments (dev/staging/prod)
  - Faster installs with caching
  - Security audit tools rely on this

**Example:**
```json
{
  "name": "my-app",
  "lockfileVersion": 2,
  "dependencies": {
    "express": {
      "version": "4.18.2"
    }
  }
}
```


---

## 🆚 Key Differences

| Feature                | `package.json`                         | `package-lock.json`                      |
|------------------------|----------------------------------------|------------------------------------------|
| Human editable?        |  Yes                                  | ❌ No (auto-generated)                   |
| Version flexibility    |  Allows version ranges                | ❌ Uses exact versions                   |
| Purpose                | Project definition & top-level deps    | Lock exact dependency tree              |
| Used in deployment?    |  Yes                                  |  Yes                                   |
| Required in Git repo?  |  Yes                                  |  Yes (for consistent builds)           |

---



---

## **package json**

---

### 1. **What is `package.json` and why is it important?**

📌 *Answer*: It’s the manifest file for a Node.js project. It contains metadata (like name, version, author), dependencies, devDependencies, and scripts. It ensures consistent project setup and makes it easy to share the project.

---

### 2. **How do dependencies differ from devDependencies in `package.json`?**

📌 *Answer*:  
- `dependencies`: Required to run the app (e.g., Express, Mongoose)  
- `devDependencies`: Only needed during development/testing (e.g., Jest, Nodemon)  
Use `--save-dev` or `-D` to install devDependencies.

---

### 3. **What is the difference between `^`, `~`, and no symbol in versioning?**

📌 *Answer*:
- `^1.2.3` → Allows updates that do not change the first digit (e.g., `1.x.x`)
- `~1.2.3` → Allows patch updates only (e.g., `1.2.x`)
- No symbol → Only that exact version is allowed (`1.2.3`)

---

### 4. **What is the `scripts` section in `package.json` used for?**

📌 *Answer*: Defines shortcut commands to automate tasks like:
```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js",
  "test": "jest"
}
```
You run them with `npm run dev`, `npm start`, etc.

---

### 5. **What is the difference between `npm install` and `npm ci`?**

📌 *Answer*:
- `npm install`: Installs packages based on `package.json` and updates `package-lock.json`
- `npm ci`: Installs **exact versions** from `package-lock.json`. It’s faster and ideal for CI/CD.

---

### 6. **Can we publish a package without all dependencies listed in `package.json`?**

📌 *Answer*: No. All external packages your code uses must be declared in `package.json` under `dependencies` or `peerDependencies`.

---

### 7. **What are `peerDependencies` and when should you use them?**

📌 *Answer*: Used when your package relies on another package, but expects the consuming project to install it.  
👉 Useful for plugins or libraries (e.g., `react-dom` peer for `react`).

---

### 8. **What does the `main` field do in `package.json`?**

📌 *Answer*: Specifies the entry point of your module when it’s `require()`d by another file.

```json
"main": "index.js"
```

---

### 9. **How do you prevent a package from being published to npm?**

📌 *Answer*:
- Add `"private": true` to `package.json`  
- Or use `.npmignore` to control what files are excluded

---

### 10. **What is the `engines` field used for?**

📌 *Answer*: To specify the required Node.js or npm version.

```json
"engines": {
  "node": ">=14.0.0"
}
```

---

##  Bonus Practical Questions

| Question | Purpose |
|---------|---------|
| How do you create a `package.json` file? | Use `npm init` or `npm init -y` |
| How to install a package as an exact version? | `npm install express@4.18.1` |
| How to update a dependency? | `npm update` or manually edit `package.json` |
| How to remove a dependency? | `npm uninstall package-name` |

---




---

## Helmet

 - Helmet is a middleware for Express.js that helps secure your app by setting various HTTP headers.
 - It’s one layer of defense
```bash
npm install helmet
```

### 📦 Usage:

```js
const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet()); // Apply security headers to all responses
```

###  What Does Helmet Do?

| 🛡️ **Header**                | **Purpose**                                                  |
|-----------------------------|------------------------------------------------------------------|
| `Content-Security-Policy`   | Prevents XSS by restricting sources of content                  |
| `X-Frame-Options`           | Prevents clickjacking by disallowing iframe embedding           |
| `Strict-Transport-Security` | Enforces HTTPS connections only                                 |
| `X-Content-Type-Options`    | Prevents browsers from MIME-type sniffing                       |
| `Referrer-Policy`           | Controls the amount of referrer info sent                       |
| `Cross-Origin-Embedder-Policy` | Required for using SharedArrayBuffer securely               |

---

###  Customizing Helmet:

You can selectively enable/disable headers like this:

```js
app.use(helmet({
  contentSecurityPolicy: false, // disable if you're using inline scripts for now
}));
```

---



---

### Garbage Collection ### 

- **Definition**: Automatic memory management feature in JavaScript.
- **Purpose**: Frees up memory no longer in use or referenced by the program.
- **Process**:
  1. **Mark Phase**: Garbage collector marks all reachable objects starting from root objects (global objects, function scopes).
  2. **Sweep Phase**: Unreachable objects (not marked) are deallocated.

---

### Different types of Garbage Collection ### 

- **Mark-and-Sweep** (Most Common):
  - Marks reachable objects.
  - Sweeps away unreachable objects.
  
- **Reference Counting** (Less Common):
  - Tracks reference count of each object.
  - Deletes object when reference count reaches zero.
  - **Issue**: Circular references prevent proper collection.

---

### optimize garbage collection ###

- **Minimize Global Variables**:
  - Global variables persist, affecting memory cleanup. Use local variables.

- **Avoid Circular References**:
  - Circular references prevent proper collection, so break them when possible.

- **Use `let` and `const` instead of `var`**:
  - `let` and `const` are block-scoped and easier for garbage collection to clean up.

- **Nullify Unused References**:
  - Set variables to `null` when no longer needed.
  ```js
  let user = { name: "John", age: 30 };
  user = null; // Eligible for garbage collection
  ```

- **Use Weak References**:
  - Use `WeakMap` or `WeakSet` for objects that can be garbage collected when no longer in use.
  ```js
  const weakMap = new WeakMap();
  let obj = { key: "value" };
  weakMap.set(obj, "data");
  obj = null; // Eligible for garbage collection
  ```

- **Monitoring Tools**:
  - **Chrome DevTools**:
    - Use **Memory** tab to analyze memory usage and garbage collection behavior.
    - Take **heap snapshots** to identify memory leaks.
    - Trigger manual garbage collection.
  - **Node.js Tools**:
    - Use tools like **`clinic.js`**, **`node-inspect`**, or **`heapdump`** for memory profiling.

- **Optimizing Garbage Collection**:
  - Minimize object creation and remove unnecessary references.
  - Regularly profile memory to spot inefficiencies.

---

### Handle memory management  ###

- **Memory Management**:
  - JavaScript uses **automatic memory management** with garbage collection.
  - Objects are stored in the **heap**, while local variables are stored in the **stack**.
  
- **Unreachable Objects**:
  - When an object becomes unreachable, it is eligible for garbage collection.
  - The garbage collector marks and sweeps unreachable objects.

---


### Memory Leak

- **Definition of Memory Leak**:
  - Memory leaks occur when objects are no longer needed but still referenced, preventing garbage collection.

- **Common Causes**:
  1. **Global Variables**: Persistent references.
  2. **Event Listeners**: Not removed after use.
  3. **Circular References**: Objects referencing each other.
  4. **Closures**: Retaining references unintentionally.

- **Fixing Memory Leaks**:
  - Use **weak references** (`WeakMap`, `WeakSet`).
  - **Remove event listeners** when no longer needed.
  - **Break circular references** and set variables to `null`.

- **Identifying Memory Leaks**:
  - Use **Chrome DevTools** or **Node.js memory profiling** to track memory consumption.
  - Look for objects in heap snapshots that should have been collected but aren’t.
  -  Use tools like heapdump, clinic.js, or Chrome DevTools for profiling.

---



## **XSS Attack**

An **XSS (Cross-Site Scripting) attack** is a **security vulnerability** that allows an attacker to **inject malicious scripts (usually JavaScript)** into content that other users will see.

---

### 🧨 **How it Works:**
- Attacker injects a script into a **web page** (via form input, URL, or comment box).
- The malicious script is then **executed in another user’s browser**.
- This script can **steal cookies**, **session tokens**, redirect users, or **modify page content**.

---

### 📂 **Types of XSS Attacks:**

1. **Stored XSS**  
   - Malicious script is **permanently stored** on the server (e.g., in a database).
   - Victim loads the page and script runs automatically.
   - Common in comment sections, forums, etc.

2. **Reflected XSS**  
   - Script is **injected via a URL or request** and **reflected back** by the server.
   - Triggered when user **clicks a malicious link**.

3. **DOM-based XSS**  
   - Happens entirely on the **client side**, through JavaScript modifying the DOM.
   - Script uses `document.location`, `document.write`, etc., to inject payload.

---

###  **What Can It Do?**
- Steal login credentials
- Hijack sessions
- Deface websites
- Redirect users to phishing/malware sites
- Perform actions on behalf of the user (if logged in)

---

###  **How to Prevent XSS:**

- **Escape Output**: Sanitize HTML, JavaScript, URLs, etc.
- **Input Validation**: Never trust user input. Sanitize on both client and server.
- **Use HTTP-only Cookies**: So JavaScript can’t access them.
- **Content Security Policy (CSP)**: Prevents inline scripts and untrusted sources.
- **Framework Protections**: Use secure templating engines (e.g., React auto-escapes content).

---

###  **Example of Reflected XSS:**
```html
<!-- User clicks this URL -->
http://example.com/search?q=<script>alert('XSS')</script>
```
If the server reflects the input without sanitizing:
```html
<p>You searched for: <script>alert('XSS')</script></p>
```

---

## **PM2**

### 🚀 **PM2 (Process Manager 2) — Node.js Utility**

- PM2 is a **production-grade process manager** for Node.js applications.
- It helps manage, monitor, and keep apps alive indefinitely with ease.

---

#### 🔧 **Core Features / Use Cases**

- **Keep Apps Alive Forever**  
  Automatically restarts crashed apps (ideal for production).

- **Process Management**  
  - Start, stop, restart, reload apps  
  - Manage multiple Node.js apps concurrently  
  - Command:  
    ```bash
    pm2 start app.js
    ```

- **Cluster Mode**  
  - Leverages multi-core systems by running apps in cluster mode  
  - Command:  
    ```bash
    pm2 start app.js -i max
    ```

- **Zero Downtime Reload**  
  - Reload apps without downtime (great for updates)  
  - Command:  
    ```bash
    pm2 reload app.js
    ```

- **Auto Restart on File Changes (Dev Mode)**  
  - Watches for file changes and restarts automatically  
  - Command:  
    ```bash
    pm2 start app.js --watch
    ```

- **Startup Script Generation**  
  - Keeps apps running after server reboot  
  - Command:  
    ```bash
    pm2 startup
    pm2 save
    ```

- **Logging & Monitoring**  
  - Centralized logs (`stdout`, `stderr`)  
  - Real-time monitoring:  
    ```bash
    pm2 logs
    pm2 monit
    ```

- **JSON-based Ecosystem Config**  
  - Use `ecosystem.config.js` for managing multiple apps with one command.

---

#### 📦 **Installation**
```bash
npm install -g pm2
```

---














### Asynchronous IO Handling

- **Definition**: Asynchronous I/O in Node.js allows non-blocking operations, enabling multiple tasks (e.g., file reads, database queries) to run concurrently without waiting for each other to complete.
  
- **Event Loop**:
  - Node.js uses an **Event Loop** to handle asynchronous tasks.
  - When an I/O operation (e.g., file read) is initiated, Node.js delegates it to the operating system and continues processing other tasks.
  - Once the I/O task completes, its callback is placed in the callback queue to be processed in the next event loop cycle.

- **Non-blocking Operations**:
  - Non-blocking means that Node.js doesn't stop executing other code while waiting for I/O operations to complete.
  - It ensures that the application remains responsive and can handle many operations simultaneously.

- **Callback-based Asynchronous Model**:
  - **Callbacks** are functions executed once an I/O task finishes.
  - While effective, callbacks can lead to "callback hell" if nested too deeply.

- **Promises & Async/Await**:
  - **Promises** provide a cleaner, more readable way to handle asynchronous code by avoiding nested callbacks.
  - **Async/Await** (introduced in ES2017) further simplifies asynchronous code, allowing it to look and behave like synchronous code with better error handling (`try/catch`).

- **Synchronous vs Asynchronous I/O**:
  - **Synchronous I/O** (blocking) waits for tasks to complete before moving on to the next one.
  - **Asynchronous I/O** (non-blocking) allows Node.js to continue processing while I/O operations are still being completed.

- **Advantages**:
  - **Improved Performance**: Non-blocking I/O handles more operations concurrently, making it ideal for I/O-heavy applications.
  - **Scalability**: Node.js can handle a large number of concurrent connections with minimal overhead.
  - **Efficiency**: Node.js can perform multiple tasks while waiting for I/O operations, reducing idle time.

- **Error Handling**:
  - **Callbacks**: Handle errors by checking the `err` parameter in callback functions.
  - **Promises**: Use `.catch()` to handle errors in Promises.
  - **Async/Await**: Use `try/catch` blocks to handle errors in asynchronous code.

- **Best Practices**:
  - Prefer asynchronous methods over synchronous ones (e.g., `fs.readFile()` vs `fs.readFileSync()`).
  - Use **Promises** or **async/await** to avoid callback hell.
  - Include error handling to ensure stability.
  - Avoid blocking the event loop with CPU-heavy operations; use **worker threads** for parallelism.

- **Event Loop and Callbacks**:
  - The **Event Loop** checks the callback queue and processes tasks one by one after I/O tasks complete.
  - This non-blocking model allows Node.js to scale efficiently and handle a large number of requests.

- **Real-World Example**:
  - Example of an asynchronous file read:
    ```js
    const fs = require('fs');
    fs.readFile('file.txt', 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    console.log('File read started');
    ```

- **Libraries and Tools**:
  - **`fs`**: For asynchronous file handling (e.g., `fs.readFile()`, `fs.writeFile()`).
  - **`http`**: For handling asynchronous HTTP requests/responses.
  - **`axios`**: Popular HTTP client for making asynchronous API calls.
  - **`async`**: Utility library to manage complex async workflows like parallel execution.

- **Challenges**:
  - **Callback Hell**: Deeply nested callbacks can make code difficult to manage.
  - **Event Loop Starvation**: CPU-heavy tasks can block the event loop, affecting performance.

- **Solutions**:
  - Use **Promises** and **async/await** to make asynchronous code cleaner.
  - Offload CPU-bound tasks to **worker threads** or **cluster modules**.

---






### **Securing Sensitive Data**

* **Never hardcode credentials** – use **environment variables** or **secret managers** like *AWS Secrets Manager* or *Vault*.
* **Hash passwords securely** using **bcrypt** with proper salting.
* **Enforce HTTPS** and use **TLS** for service-to-service communication.
* **Encrypt sensitive data at rest** using **Node.js `crypto`** or cloud-native encryption.
* Apply **input validation and sanitization** (e.g., `Joi`, `express-validator`) to prevent **injection attacks**.
* **Do not log sensitive data** (passwords, card details); use log masking (e.g., **Winston** with redaction).
* Implement **RBAC (Role-Based Access Control)** and **least privilege** at every layer.
* Use `npm audit`, **Snyk**, or **OWASP Dependency-Check** for **vulnerability scanning**.
* Add **rate limiting and brute-force protection** (e.g., `express-rate-limit`).
* Use **Helmet.js** for secure HTTP headers.



### **Deploying a Node.js Application to Production**
- **Environment Configuration**: Use `.env` files with `dotenv` or `process.env` for secure, environment-specific settings (e.g., DB credentials, API keys).
- **Process Manager**: Use **PM2** to:
  - Keep the app running (auto-restart on crashes)
  - Manage logs
  - Enable zero-downtime deployments (`pm2 reload`)
- **Reverse Proxy**: Use **Nginx or Apache** as a reverse proxy to:
  - Handle HTTPS (SSL termination)
  - Manage load balancing
  - Improve security and performance
- **Security Practices**:
  - Use Helmet to set secure HTTP headers
  - Sanitize inputs and validate payloads
  - Disable X-Powered-By header
- **Monitoring & Logs**:
  - Integrate tools like **LogRocket, Sentry, or New Relic** for error tracking
  - Use centralized logging (e.g., with Winston or Morgan)

---

### **Scaling High Traffic**
  To design a scalable API:
- **Stateless Design**:   - Design APIs and services to be stateless so they can scale horizontally (multiple instances).
- **Load Balancing**:  - Use **Nginx, AWS ELB**, or **HAProxy** to distribute requests among instances.
- **Caching**: - Use **Redis or Memcached** for frequent reads and rate-limiting.
  - Leverage HTTP caching and CDN (like Cloudflare).
- **Database Optimization**:  - Use indexing, query optimization, and read-replicas.
- **Microservices** (Optional at scale):  - Break the monolith into smaller, independently deployable services.
- **Stateless API**: Follow REST principles — keep APIs stateless to allow horizontal scaling.
- **Clustering**: Use Node.js cluster module or process managers like PM2 to utilize multiple CPU cores.
- **Load balancing**: Deploy behind a load balancer (e.g., NGINX, AWS ALB).
- **Database optimization**: Use connection pooling, caching (e.g., Redis), and indexing for performance.
- **Asynchronous I/O**: Leverage Node’s non-blocking nature to handle multiple requests concurrently.
- **Rate limiting**: Prevent abuse using libraries like express-rate-limit.
- **Pagination**: Implement for large datasets to avoid memory pressure.
- **Monitoring**: Use tools like Prometheus, Grafana, New Relic, or Elastic APM.
* **Auto-scale services** using metrics (CPU, latency, etc.).
* Use **CloudFront/CDN** for static content offload.
* Put async tasks into **background workers** (e.g., Bull, Agenda) to decouple long operations.
* Enable **API rate limiting and quota enforcement** for users.
* Apply **back-pressure** techniques for APIs interacting with downstream systems.
* Monitor using tools like **Datadog, New Relic, Prometheus**, and **trigger alerts**.





###  **Common Performance Pitfalls**
- **Blocking the Event Loop:** Avoid CPU-intensive tasks like hashing, loops, or parsing huge data inside the main thread; offload to worker threads or external services.
- **Memory Leaks:** Unreleased timers, large cache objects, or global variables can lead to high memory usage and slowdowns over time.
- **Unoptimized Middleware Stack:** Too many middlewares or heavy synchronous logic in middleware can slow down requests.
- **Inefficient Logging:** Excessive logging, especially to files synchronously, can severely affect performance.
- **Neglecting Load Balancing:** Without proper load balancing or clustering, a single Node.js process might become a bottleneck under heavy traffic.

---




---

###  **Error Handling in Node.js Applications**


In large-scale Node.js apps, I follow a layered and structured error handling approach:

* **Centralized error middleware**: For Express, I define centralized error-handling middleware that catches all errors and sends consistent JSON responses.
* **Custom error classes**: I create domain-specific custom error classes (e.g., `ValidationError`, `AuthError`) for better traceability and differentiation.
* **Async error boundaries**: I wrap all async routes with error-catching middlewares or use tools like `express-async-errors` to propagate rejections.
* **Fail-fast and logging**: I prefer to fail fast in case of critical errors, and use structured logging (`winston`, `pino`) to capture stack traces and metadata.
* **Monitoring integration**: I integrate with tools like Sentry or Datadog for production error tracking and alerting.
* **Graceful shutdown**: On unhandled rejections or exceptions, I log, clean up resources, and shut down services cleanly.

- **Use Try-Catch for Synchronous Code**: Wrap code that might throw errors in a `try-catch` block to handle exceptions gracefully.
- **Handle Errors in Asynchronous Code**: Always handle errors in callbacks and use `.catch()` for Promises.
- **Global Error Handling**:
  - `process.on('uncaughtException')`: Captures unhandled exceptions.
  - `process.on('unhandledRejection')`: Catches unhandled promise rejections.
- **Create Custom Error Classes**: Extend `Error` to build meaningful and consistent error messages throughout your application.
- **Middleware for Express**: Use centralized error-handling middleware to manage errors cleanly in routes.

---

###  **Logging Errors**
- **Use Logging Libraries**: Tools like `Winston`, `Pino`, or `Bunyan` are preferred over `console.log` for structured logging.
- **Log Levels**: Implement different log levels such as `info`, `warn`, `error`, `debug` to help categorize issues.
- **Environment-Based Logging**:
  - Verbose logging in development.
  - Minimal and structured logging in production.
- **Log Rotation and Storage**: Rotate logs to prevent disk overload and store logs in centralized systems like ELK (Elasticsearch, Logstash, Kibana), Loggly, or Datadog.

---

###  **Debugging Node.js Applications**
- **Built-in Debugger**: Start your app with `node inspect app.js` and use breakpoints.
- **Chrome DevTools**: Use `--inspect` flag to connect Node.js with Chrome DevTools.
- **VS Code Debugging**: Configure launch settings in `launch.json` for seamless debugging within the IDE.
- **Logging for Debugging**: Temporarily insert logs to trace code execution, but ensure to remove or replace with proper logging afterward.
- **Use Tools**:
  - `nodemon`: Automatically restarts your app on file changes during debugging.
  - `npx node --trace-warnings`: Helps trace async stack traces and deprecation warnings.

---


## **[Implementing JWT Authentication](#Implementing-JWT-Authentication)**

"Sure. **JWT stands for JSON Web Token** — it's a compact, URL-safe token used for **securely transmitting information between parties**. I’ve used it **extensively for authentication and authorization in stateless REST APIs."**

-  “So overall, JWT has been my go-to choice for securing REST APIs and user sessions — especially in modern SPA and microservice-based systems — due to its **stateless nature** and wide support across platforms.”


 **Structure and How It Works**:

> "A JWT has three parts — header, payload, and signature — separated by dots:
>
> ```
> <header>.<payload>.<signature>
> ```
>
> The **header defines the algorithm (e.g., HS256 or RS256)**, the **payload carries user claims** like userId, role, and expiry (`exp`), and the **signature is used to verify that the token** hasn’t been tampered with."


**Where I Used It (Real-World Example)**:

> "In one of our React + Node.js projects, I implemented JWT-based authentication for an internal admin dashboard.
>
> * After successful login, we generated an **access token** (short-lived) and a **refresh token** (longer-lived).
> * The access token was stored in a **secure, HTTP-only cookie** to prevent XSS.
> * The refresh token was used to silently renew sessions without requiring the user to log in again.
> * On the backend (Node.js/Express), I used **`jsonwebtoken`** to sign and verify the tokens.
> * We also used `jwks-rsa` to verify tokens issued by external identity providers like Azure AD and Auth0 in other services."


 **Security Considerations**:

> "Some best practices I follow:
>
> * Always use **HTTPS**
> * Use **short expiration** for access tokens (`exp`)
> * Store tokens in **HTTP-only, Secure cookies**
> * Use **RS256 (asymmetric keys)** for public verification
> * Avoid storing sensitive data in the payload since JWTs are only encoded, not encrypted."


 **Common Use Cases I’ve Worked On**:

* Stateless authentication across microservices.
* Role-based authorization (`role`, `scope` claims).
* Identity federation with SSO providers (e.g., Auth0, Azure AD) using JWTs as ID tokens.
* Secure communication between services in distributed systems.



---

### **JWT Auth Works**
1. User logs in → Server validates credentials
2. Server generates a token (signed with a secret)
3. Client sends the token with each request (usually in `Authorization` header)
4. Server verifies the token before processing the request

---


### **JWT Flow**

- User logs in with credentials
- User logs in → Server generates JWT.
- JWT Structure: Header (algorithm), Payload (user data), Signature (hash).
- Client stores the JWT (e.g., in localStorage)
- Client sends JWT in the `Authorization` header.
- Server verifies JWT and grants access to protected routes
---

Folder Structure

```
jwt-auth-ts/
├── src/
│   ├── index.ts
│   ├── auth.ts
│   ├── middleware/
│   │   └── authMiddleware.ts
├── .env
├── tsconfig.json
├── package.json
```

---



 `src/index.ts`

```ts
import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { authMiddleware } from "./middleware/authMiddleware";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 4000;
const USERS = [{ id: 1, username: "admin", password: "password" }];

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = USERS.find(u => u.username === username && u.password === password);

  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET as string, {
    expiresIn: "1h"
  });

  res.json({ token });
});

app.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "You accessed protected data!" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

---

 `src/middleware/authMiddleware.ts`

```ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface TokenPayload {
  id: number;
  username: string;
  iat: number;
  exp: number;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Token missing" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as TokenPayload;
    req.user = decoded; // Optional: attach to req
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
```

---

 `.env`

```
JWT_SECRET=mySuperSecretKey
```

---

 Scripts in `package.json`

```json
"scripts": {
  "dev": "ts-node-dev --respawn src/index.ts",
  "start": "tsc && node dist/index.js"
}
```

---

  Testing

 Login and get token

```bash
curl -X POST http://localhost:4000/login \
-H "Content-Type: application/json" \
-d '{"username":"admin","password":"password"}'
```

 Access protected route

```bash
curl http://localhost:4000/protected \
-H "Authorization: Bearer <your_token_here>"
```

---

### **[Session-based vs Token-based Authentication](#Session-based-vs-Token-based-Authentication)**
- **Session-based Authentication**:
  - User credentials are validated on the server, which stores session data (typically in a session store like a database or memory).
  - The session ID is sent back to the client in the form of a cookie, and on each request, the client sends the session ID back to the server.
  - Vulnerable to **CSRF** if cookies aren’t protected and prone to scalability issues.
  
- **Token-based (JWT) Authentication**:
  - The server creates a signed JWT token after user login, which is sent to the client.
  - The client stores the token (commonly in `localStorage` or `sessionStorage`) and sends it on subsequent requests in the `Authorization` header.
  - Stateless (no session data on the server), making it ideal for **RESTful APIs**, **single-page apps (SPAs)**, and **mobile apps**.
  - Token-based authentication is **more scalable** and secure for large distributed systems as it avoids server-side session storage.

| Feature              | **Session-based**     | **Token-based (JWT)**   |
|----------------------|-----------------------|-------------------------|
| **Storage**          | Server-side           | Client-side (e.g., localStorage) |
| **Statefulness**     | Stateful              | Stateless               |
| **Scalability**      | Moderate              | High                    |
| **Security Risks**   | CSRF, session fixation | XSS (with improper handling) |
| **Common Use**       | Traditional web apps  | REST APIs, SPAs, Mobile Apps |

---

### **[Protecting Sensitive Routes](#Protecting-Sensitive-Routes)**

```ts
app.get('/profile', authenticateJWT, (req: Request, res: Response) => {
  res.json({ message: 'Secure user data' });
});
```

- **JWT Verification**: Use middleware to check the JWT on protected routes.
- Steps to protect routes:
  - Check if the token is sent via the `Authorization` header.
  - Use `jsonwebtoken` to verify the token against the secret key.
  - If valid, allow access to the route and attach the user’s info (like `req.user`) for further use.
  - If invalid, return an error (e.g., `401 Unauthorized`).
  
**Example**:
```js
// Middleware to authenticate the token
function authenticateToken(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).send('Access Denied');

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send('Invalid Token');
    req.user = user;
    next();
  });
}

// Protecting a sensitive route
app.get('/user/profile', authenticateToken, (req, res) => {
  res.send('This is a protected profile');
});
```

- Only users with a valid token can access the protected route, ensuring security for sensitive resources.
- For **additional protection**:
  - Use HTTPS for secure communication.
  - Limit token expiration time and use **refresh tokens** for long-lasting sessions.

---




### **Express.js**

- Express.js is a **minimal and flexible Node.js web framework** used to build web applications and APIs.
- It simplifies server-side development by abstracting the **core HTTP module** in Node.js.
- Helps in **handling routing, middleware, request/response objects**, and server configurations.
- Commonly used to develop **RESTful APIs, web apps, and single-page applications**.
- Works seamlessly with Node.js and supports a wide range of **third-party middleware**.
- Example usage:
  ```javascript
  const express = require('express');
  const app = express();

  app.get('/', (req, res) => res.send('Hello, World!'));
  app.listen(3000, () => console.log('Server running on port 3000'));
  ```

---

### **Routing**

- **Routing** refers to defining how the application responds to client requests for a given endpoint and HTTP method.
- Express provides methods like `.get()`, `.post()`, `.put()`, `.delete()` for routing.
- **Basic GET route:**
  ```javascript
  app.get('/home', (req, res) => res.send('Home Page'));
  ```
- **Route parameters** for dynamic URLs:
  ```javascript
  app.get('/user/:id', (req, res) => res.send(`User ID: ${req.params.id}`));
  ```
- **Chaining multiple HTTP methods** using `app.route()`:
  ```javascript
  app.route('/product')
    .get((req, res) => res.send('Get Product'))
    .post((req, res) => res.send('Create Product'));
  ```
- **Middleware** can be applied before route handling to add extra functionality like logging or authentication.
- Routing in Express is **clean, scalable, and modular**, making it ideal for large applications.

---




---

### **SQL connection**

- I use popular Node.js libraries such as:
  - **`mysql2`** or **`sequelize`** for MySQL
  - **`pg`** or **`knex`/`sequelize`** for PostgreSQL
- These libraries allow me to perform CRUD operations using either raw SQL or ORM-style syntax.
- **Sequelize**, for example, helps manage models, migrations, and associations in a more structured way.
- Example using `mysql2`:
  ```javascript
  const mysql = require('mysql2');
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'testdb'
  });

  connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
  });
  ```

---
### **MongoDB connection**

- I typically use **Mongoose** or **MongoDB native driver** for connecting to MongoDB.
- Mongoose provides schema-based modeling, validation, and query building for MongoDB.
- It integrates smoothly with Node.js asynchronous patterns (Promises/async-await).
- Example using Mongoose:
  ```javascript
  const mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));
  ```

---
### **Database connections**

- I use **connection pooling** to reuse active connections efficiently rather than opening a new connection for every query.
- In production, I usually store DB credentials in **environment variables** using `.env` files.
- I handle connection errors gracefully and ensure the application can recover or restart if the DB becomes temporarily unavailable.
- For ORM tools like **Sequelize**, pooling is built-in and configurable:
  ```javascript
  const sequelize = new Sequelize('db', 'user', 'pass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
  ```

---

### **Data validation**

- I use libraries like **`Joi`**, **`express-validator`**, or **Mongoose built-in validation** to ensure data integrity.
- **Validation** ensures the data type, length, required fields, etc., match expectations.
- **Sanitization** protects against malicious input like XSS or SQL injection by cleaning/escaping input data.
- Example with `express-validator`:
  ```javascript
  const { body, validationResult } = require('express-validator');

  app.post('/register', [
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Proceed with safe data
  });
  ```
- I also make sure to sanitize data **both at input and output** stages to prevent security vulnerabilities.

---




## drawbacks of WebSockets

---

## ⚠️ **1. Complex Scalability**

* **Problem**: WebSocket connections are long-lived and stateful.
* **Drawback**: Difficult to horizontally scale without sticky sessions or external session stores (e.g., Redis).
* **Solution**: Use a message broker like Redis Pub/Sub or Kafka to sync between nodes.

---

##  **2. Security Considerations**

* **Problem**: WebSockets don’t have built-in authentication/authorization.
* **Drawback**: You must **manually secure** connections and check permissions.
* **Solution**: Use tokens (e.g., JWT) and validate them during the handshake.

---

## 🧱 **3. No Built-in Reconnection or Fallback**

* **Problem**: If a WebSocket connection drops, it's not automatically recovered.
* **Drawback**: You must code retry logic and handle edge cases manually.
* **Solution**: Use libraries like `socket.io` which offer reconnection handling.

---

## 🌐 **4. Limited Proxy Support**

* **Problem**: Some proxies, firewalls, or load balancers **don’t support** or disrupt WebSocket connections.
* **Drawback**: Causes unexpected disconnects or blocks.
* **Solution**: Ensure WebSocket support on all network layers; consider fallback mechanisms like long-polling.

---

## 📊 **5. Resource Intensive**

* **Problem**: Each connection consumes server memory and threads.
* **Drawback**: A large number of connections (e.g., 1 million+) can overwhelm the server.
* **Solution**: Optimize with event-driven frameworks (e.g., Node.js) and load balancers.

---

## 📉 **6. Poor Caching and Logging**

* **Problem**: Unlike HTTP, WebSocket messages are not cached or logged by default.
* **Drawback**: Debugging and analytics are harder.
* **Solution**: Implement custom logging, message tracking, and debugging tools.

---

## 🔄 **7. Browser Support for Legacy Systems**

* **Problem**: Not supported by very old browsers or constrained environments.
* **Drawback**: Might need fallbacks for older clients.

---

### 🧠 Summary Table:

| Issue               | Impact                     | Solution                        |
| ------------------- | -------------------------- | ------------------------------- |
| Scalability         | Harder than REST           | Redis/Kafka/Sticky sessions     |
| Security            | No built-in auth           | Use token-based validation      |
| Reconnection        | Not automatic              | Use `socket.io` or manual logic |
| Proxy compatibility | Not universal              | Network testing & configuration |
| Resource usage      | High for large connections | Optimize with efficient servers |
| Debugging           | Harder than HTTP logs      | Add custom tracking/logging     |

---







##  Rate Limiter


- Protects APIs from abuse or brute-force attacks.
- Implemented using middleware like `express-rate-limit`.
- A **Rate Limiter** is a design pattern used to **control the rate of incoming requests** to a service or API, ensuring fair usage, protecting system resources, and preventing abuse or denial-of-service (DoS) attacks.

 - In summary, a **Rate Limiter** is a defensive pattern that protects APIs and services from being overwhelmed by **controlling request frequency**, enhancing **reliability, scalability, and security** in distributed systems.


* Prevent overloading the system with too many requests.
* Ensure **fair usage policies** (e.g., 100 requests per minute per user).
* Improve system **stability and performance** under high load.

## Rate Limit using using express-rate-limit
```js
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100, // Limit each IP to 100 requests
});

app.use(limiter);
```

## Rate Limit only using express

```ts
const express = require('express');
const app = express();

const rateLimitWindowMs = 15 * 60 * 1000; // 15 minutes
const maxRequests = 100; // max requests per IP per window

// In-memory store: { "ip": { count: x, startTime: Date } }
const ipRequestMap = new Map();

const rateLimiter = (req, res, next) => {
  const ip = req.ip;

  const currentTime = Date.now();
  const requestInfo = ipRequestMap.get(ip);

  if (!requestInfo) {
    // First request from this IP
    ipRequestMap.set(ip, { count: 1, startTime: currentTime });
    return next();
  }

  const elapsedTime = currentTime - requestInfo.startTime;

  if (elapsedTime < rateLimitWindowMs) {
    // Still within the time window
    if (requestInfo.count < maxRequests) {
      requestInfo.count += 1;
      return next();
    } else {
      res.status(429).send('Too many requests. Please try again later.');
    }
  } else {
    // Reset window
    ipRequestMap.set(ip, { count: 1, startTime: currentTime });
    return next();
  }
};

app.use(rateLimiter);

app.get('/', (req, res) => {
  res.send('Hello, this is a rate-limited endpoint!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

```


### 📦 Common Use Cases:

* Public APIs (e.g., `GET /weather?city=Chennai`)
* Login endpoints to avoid brute force attacks
* Payment or transaction systems to avoid misuse

---

### 🔁 Popular Algorithms for Rate Limiting:

| Algorithm          | Description                                                                    |
| ------------------ | ------------------------------------------------------------------------------ |
| **Fixed Window**   | Limits requests in a fixed time window (e.g., 100 requests per minute)         |
| **Sliding Window** | Smoother distribution; counts over a moving window of time                     |
| **Token Bucket**   | Tokens are added at a fixed rate; each request consumes one token              |
| **Leaky Bucket**   | Requests are processed at a steady rate; excess requests are queued or dropped |

---

### 🔧 Example (Fixed Window):

> “Each user can make **100 requests per 60 seconds**.”

If user exceeds 100 requests:

* ✅ If under limit: allow request.
* ❌ If over limit: reject with **HTTP 429 Too Many Requests**.

---

### ⚙️ Tools & Libraries:

* **NGINX / Envoy**: Built-in rate limiting
* **Node.js**: express-rate-limit

---







## DDoS attack

- A **DDoS (Distributed Denial of Service)** attack occurs when **multiple systems** flood a **target server, application, or network** with a massive volume of traffic, overwhelming its capacity and **disrupting normal services**.


-  A DDoS attack is a **serious threat to service availability**, and defending against it requires a **multi-layered approach** involving **rate limits, firewalls, CDNs**, and **behavioral analytics** to identify and block abnormal traffic.

---

### 🚨 Key Characteristics:

* Involves **thousands or millions** of requests from **botnets** (compromised machines).
* Targets bandwidth, CPU, memory, or specific application vulnerabilities.
* Aimed at **making the service unavailable** to legitimate users.

---

### 🧨 Types of DDoS Attacks:

| Type                  | Description                                                       |
| --------------------- | ----------------------------------------------------------------- |
| **Volumetric Attack** | Floods network bandwidth (e.g., UDP flood)                        |
| **Protocol Attack**   | Exploits weaknesses in protocols (e.g., SYN flood, Ping of Death) |
| **Application-layer** | Targets app-level endpoints (e.g., HTTP GET/POST flood)           |

---

### 🔐 Mitigation Techniques:

1. **Rate Limiting**

   * Limit number of requests per IP or user.

2. **Web Application Firewall (WAF)**

   * Filters and blocks malicious traffic.

3. **CDN & DDoS Protection Services**

   * Offload traffic to providers like **Cloudflare**, **AWS Shield**, **Akamai**.

4. **Geo-blocking & IP Blacklisting**

   * Block regions or addresses with suspicious traffic patterns.

5. **Autoscaling & Load Balancers**

   * Absorb spikes with elastic infrastructure.

6. **CAPTCHA / Challenge-Response**

   * Prevent bots from abusing endpoints.

---






## Event Driven Architecture

---

### 📌 **What is Event-Driven Architecture (EDA)?**

**Event-Driven Architecture** is a software design pattern where:

* The **system reacts to events** (e.g., “user signed up”, “file uploaded”, “comment added”).
* Components emit and listen for **events** instead of calling each other directly.

This decouples different parts of your application, making it:

* **Modular**
* **Scalable**
* **Responsive**

Node.js is inherently built on an **event-driven model**, making it ideal for real-time, reactive applications.

---

### ⚙️ Core Concepts in Node.js

| Concept                | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `EventEmitter`         | Core Node.js module for creating custom events  |
| Event Loop             | Runs asynchronously and handles event callbacks |
| Callback/Promise/Async | Works well with events and non-blocking I/O     |

### 🏁 Summary

* Node.js and `EventEmitter` make EDA easy and powerful.
* Great for **scalable**, **modular**, **real-time** apps like Instagram, Twitter, or Slack.
* You can also scale this by using **message queues** like RabbitMQ, Kafka, or Redis Pub/Sub for distributed systems.

---

### 🧾 Basic Example

```js
const EventEmitter = require('events');

class AppEvents extends EventEmitter {}
const appEvents = new AppEvents();

// Listener
appEvents.on('userSignedUp', (user) => {
  console.log(`Welcome email sent to ${user.email}`);
});

// Emit event
appEvents.emit('userSignedUp', { email: 'user@example.com' });
```

✅ Output:

```
Welcome email sent to user@example.com
```

---

## 📱 Real-World Example: Instagram-like App

### 🔁 Scenario: User uploads a photo

**Step-by-step flow:**

1. User uploads a photo.
2. The backend emits a `photoUploaded` event.
3. Multiple parts of the system react:

   * Update feed for followers.
   * Trigger image moderation.
   * Log analytics.
   * Send notification.

---

### 🧩 Code Structure

#### `events/photoEvents.js`

```js
const EventEmitter = require('events');
class PhotoEvents extends EventEmitter {}
module.exports = new PhotoEvents();
```

#### `controllers/photoController.js`

```js
const photoEvents = require('../events/photoEvents');

app.post('/upload', upload.single('image'), async (req, res) => {
  const photo = await savePhoto(req.user.id, req.file);

  // Emit event
  photoEvents.emit('photoUploaded', {
    userId: req.user.id,
    photoId: photo.id,
  });

  res.status(201).json({ message: 'Photo uploaded' });
});
```

#### `listeners/notificationListener.js`

```js
const photoEvents = require('../events/photoEvents');

photoEvents.on('photoUploaded', ({ userId, photoId }) => {
  notifyFollowers(userId, photoId);
});
```

#### `listeners/loggingListener.js`

```js
const photoEvents = require('../events/photoEvents');

photoEvents.on('photoUploaded', ({ userId, photoId }) => {
  setImmediate(() => {
    console.log(`User ${userId} uploaded photo ${photoId}`);
  });
});
```

---

### 🧠 Why Use Event-Driven Architecture?

| Benefit           | Description                                         |
| ----------------- | --------------------------------------------------- |
| ✅ Decoupling      | Upload logic doesn’t need to know who gets notified |
| 🔄 Asynchronous   | Events don’t block main user interactions           |
| 🔧 Extensibility  | Add new listeners without touching existing logic   |
| ⚡ Real-time Ready | Suits real-time apps: chat, notifications, streams  |

---

### 🧵 Real-World Events in a Social App

| Event           | Trigger           | Handlers                              |
| --------------- | ----------------- | ------------------------------------- |
| `userSignedUp`  | On registration   | Send welcome email, log signup        |
| `photoUploaded` | After photo saved | Notify followers, moderate image      |
| `postLiked`     | User likes a post | Notify post owner, increment counter  |
| `commentAdded`  | On new comment    | Notify tagged users, moderate comment |

---




## libuv


 - Node.js runs JavaScript in a **single-threaded** event loop. However, certain operations (like file I/O, DNS lookups, encryption) are **blocking at the system level** and would block the main thread.

 - To solve this, Node.js uses a **thread pool** (managed by the [libuv](https://github.com/libuv/libuv) library) to offload blocking operations in the background.



* **libuv** is the backbone of Node.js's non-blocking architecture.
* It handles both I/O and CPU-bound tasks through:

  * Event loop (for async, non-blocking work)
  * Thread pool (for blocking tasks)
* It abstracts OS-level behavior to provide a unified API across platforms.
* Use `UV_THREADPOOL_SIZE` to scale the thread pool for heavy workloads.

---

## ⚙️ libuv in Node.js

`libuv` is a **C-based support library** that powers Node.js's **non-blocking, event-driven** architecture. It provides:

* An **event loop**
* **Asynchronous I/O**
* **Cross-platform abstractions** (Windows, macOS, Linux)

> 🧠 It’s the low-level engine that enables high-level asynchronous APIs in Node.js.

---

### 🚀 Why Node.js Needs libuv

JavaScript is **single-threaded**, but real-world applications require:

* File system access
* Network communication
* DNS resolution
* Timers
* Spawning child processes

To handle all this **without blocking** the main thread, Node.js offloads these operations to `libuv`, which uses threads or OS-level async features.

---

### 🔁 How libuv Powers the Event Loop

1. JavaScript code initiates an async operation (e.g., `fs.readFile()`).
2. Node.js delegates it to `libuv`.
3. `libuv` handles the task via:

   * A **thread pool** for blocking work
   * **OS-level APIs** for non-blocking tasks (e.g., sockets)
4. Once done, `libuv` queues a callback in the event loop.
5. Node.js executes the callback when the event loop reaches it.

---

### 🧵 libuv Thread Pool

Some operations (like file I/O, crypto, and DNS lookups) are **blocking at the system level**, so `libuv` runs them in a **thread pool**:

| Feature                 | Detail                                    |
| ----------------------- | ----------------------------------------- |
| Default pool size       | 4 threads                                 |
| Maximum pool size       | 128 threads                               |
| Configurable via        | `UV_THREADPOOL_SIZE` environment variable |
| Tasks using thread pool | `fs`, `crypto`, `zlib`, `dns`, etc.       |

> 📌 Use non-blocking APIs wherever possible for scalability.

---




### 🔁 **What Does libuv Handle?**

| Feature                              | Handled By libuv |
| ------------------------------------ | ---------------- |
| Event Loop                           | ✅ Yes            |
| File System I/O                      | ✅ Yes            |
| TCP/UDP Networking                   | ✅ Yes            |
| DNS (non-blocking)                   | ✅ Yes            |
| Timers (`setTimeout`, `setInterval`) | ✅ Yes            |
| Child Processes                      | ✅ Yes            |
| Thread Pool (for blocking tasks)     | ✅ Yes            |

---

### 🧱 Architecture Overview

```bash
Your JS Code
   ↓
Node.js Core (JavaScript/C++)
   ↓
libuv (C library)
   ↓
OS system calls (epoll, kqueue, IOCP, etc.)
```

---



### ⚙️ Example: File Read Behind the Scenes

```js
fs.readFile('large.txt', (err, data) => {
  console.log('Done reading!');
});
```

**What really happens:**

1. JS calls `fs.readFile()`.
2. Node sends this to libuv.
3. libuv delegates it to a worker thread (from its 4-thread pool).
4. Once read is complete, it triggers an event.
5. Event loop queues the callback to run in the next tick.

---

### 🧵 libuv Thread Pool

* Used for blocking tasks: File I/O, DNS, compression, crypto.
* Default: **4 threads**, can be increased via:

  ```bash
  UV_THREADPOOL_SIZE=8 node app.js
  ```

---

### 🪛 Real-World Use: Instagram-like App

| Task                                    | libuv Role                     |
| --------------------------------------- | ------------------------------ |
| Uploading/processing video              | Uses thread pool for file I/O  |
| Fetching image metadata                 | Runs async via libuv           |
| Sending notifications (network sockets) | Managed by libuv               |
| Timers (e.g., retry logic)              | Handled by libuv's timer queue |

---

### 🏁 Summary

| Feature            | Description                                            |
| ------------------ | ------------------------------------------------------ |
| `libuv`            | C library enabling async I/O and event loop in Node.js |
| Cross-platform     | Works on Windows, macOS, Linux                         |
| Core of event loop | Manages I/O operations, timers, thread pool            |
| Powers             | `fs`, `net`, `dns`, `setTimeout`, and more             |

---



### 🧮 **Default Thread Pool Size**

* **Default**: `4` threads
* This means **only 4 tasks** can run in parallel in the libuv thread pool.

---

### ⚠️ **Maximum Size**

* Node.js allows setting **up to `128` threads** using `UV_THREADPOOL_SIZE`.

```bash
UV_THREADPOOL_SIZE=128 node app.js
```

> 🛑 Setting beyond 128 **has no effect** — Node.js caps it internally.

---


### ⚙️ When Should You Increase It?

Increase `UV_THREADPOOL_SIZE` if:

* You have **many simultaneous I/O-bound blocking tasks**.
* You're doing **parallel crypto**, **file processing**, or **image compression**.
* You observe **performance bottlenecks** under heavy load.

---

### 🧠 Tip

Use tools like `clinic.js`, `0x`, or built-in `--trace-events` to inspect your app's event loop and thread pool behavior before tuning this setting.




## **Handle Concurrency**

**"So, while Node.js is single-threaded, I handle concurrency effectively using:**

* **`async/await`** for I/O
* **`worker_threads`** for CPU work
* **`cluster`** and **PM2** for scaling
* `Bull`/`RabbitMQ` for background jobs,
* locks & DB transactions for safe data handling,
* reverse proxies, caching, and DB pooling for performance,
* monitoring tools to track event loop lag and memory,
* and Docker/Kubernetes for horizontal scalability."\*\*


## Handling 100000 concurrent requests

**"Node.js handles concurrency through its** ***single-threaded event loop architecture***, **optimized for** ***asynchronous I/O operations***. **To scale effectively under high-concurrency workloads, I follow these strategies depending on the task type:"**


**1. I/O-bound tasks — Use *asynchronous non-blocking code***  --> **Keywords:** `async/await`, Promises, non-blocking I/O, event loop

- "I ensure all I/O operations — like **DB queries**, **file reads**, or **API calls** — are handled using **`async/await`**, **Promises**, or **callbacks**. This keeps the **event loop unblocked** and allows Node to handle **thousands of concurrent requests efficiently**."


**2. CPU-bound tasks — Offload using *`worker_threads`***  --> **Keywords:** `worker_threads`, CPU-bound, parallelism, offloading

- "For **CPU-heavy operations** (e.g., hashing, image compression), I use **`worker_threads`** to offload tasks to separate threads, keeping the **main thread responsive** and preventing event loop blocking."


**3. High concurrency — Scale using *`cluster`*** and PM2 -->**Keywords:** cluster, PM2, multi-core, process forking, scaling

- "To leverage multi-core CPUs, I use the **`cluster` module** or **PM2** to fork child processes. This enables **horizontal scaling** on a single machine."

**4. Background jobs — Use *job queues* (e.g., Bull, RabbitMQ)** --> **Keywords:** Bull, RabbitMQ, Redis, background jobs, retry, queue

- "For **time-consuming tasks** like **email sending** or **video processing**, I use background queues like **RabbitMQ**, with Redis as a backend. This helps manage **concurrency**, **retry logic**, and **delayed execution**."


**5. Data integrity — Use *locks and database transactions*** --> **Keywords:** mutex, transaction, atomicity, consistency, race condition

- "To prevent **race conditions** in shared resources (e.g., wallet updates), I use **mutexes** (e.g., `async-mutex`) and ensure **atomic operations** using **database transactions**."
 
**6. Connection optimization — *Pooling and caching***  --> **Keywords:** connection pooling, Redis, Memcached, latency reduction

- "I use **DB connection pooling** to reduce overhead and apply **caching layers** like **Redis** or **Memcached** to minimize response time and load."

**7. Reverse proxy — *Load balancing and SSL termination***  --> **Keywords:** Nginx, HAProxy, reverse proxy, load balancing, SSL

- "I deploy a **reverse proxy** (e.g., Nginx or HAProxy) in front of Node.js for **load balancing**, **keep-alive connections**, and **SSL termination**."


**8. Monitoring — *Detect and resolve bottlenecks*** --> **Keywords:** clinic.js, PM2, profiling, event loop lag, debugging

- "I monitor **event loop lag**, **CPU usage**, and **memory leaks** using tools like **`clinic.js`**, **`node --inspect`**, **PM2**, and APMs (e.g., New Relic) to ensure optimal performance."


**9. Horizontal scaling — *Beyond one server*** --> **Keywords:** Kubernetes, Docker, microservices, autoscaling, horizontal scale
- "If vertical scaling isn't enough, I scale the app horizontally using **container orchestration tools** like **Docker** and **Kubernetes**."

--


##  Handle CPU intensive task

 - Use Worker Threads
 - Child Processes
 - Offload Work to External Services
 - Avoid Blocking Code

---

### 1. **Use Worker Threads (Since Node.js 10.5+)**

* Offload CPU-heavy tasks to separate threads.
* Keeps the main event loop free for I/O and other tasks.

**Example:**

```js
// main.js
const { Worker } = require('worker_threads');

function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', code => {
      if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

runService({ num: 42 })
  .then(result => console.log('Result:', result))
  .catch(err => console.error(err));
```

```js
// worker.js
const { workerData, parentPort } = require('worker_threads');

// Example CPU-intensive task
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(workerData.num);

parentPort.postMessage(result);
```

---

### 2. **Child Processes**

* Spawn separate Node.js processes for CPU-heavy work.
* Communicate via IPC (inter-process communication).

---

### 3. **Offload Work to External Services**

* Use a message queue (e.g., RabbitMQ, Redis) and separate worker services.
* Node.js handles lightweight tasks and delegates heavy lifting elsewhere.

---



### 4. **Avoid Blocking Code**

* Use asynchronous APIs and non-blocking algorithms wherever possible.
* Don’t run heavy loops or synchronous code on the main thread.

---

## Concurrent CPU intensive requests

- Node.js is single-threaded and excels at I/O-bound operations, but it's not ideal for CPU-heavy tasks like encryption, image processing, or complex math. 
- Blocking the event loop with such tasks can degrade performance for all users.

- So in production, I never run CPU-bound logic directly on the main thread. 
- Instead, I offload it using the `worker_threads` module. 
- However, creating a new worker for each request is inefficient — it introduces thread startup overhead, consumes memory, and doesn't scale under load.

- My preferred solution is to use a **worker pool** — a fixed set of reusable threads.
- It allows tasks to be queued and processed without overwhelming system resources. I usually align the pool size with the number of CPU cores for optimal performance.

- For implementation, I use libraries like `poolifier` or `Piscina`, which abstract worker management and provide good performance metrics. 
- Under extreme workloads, I offload tasks to background queues or dedicated microservices built in performant languages like Go or Rust.

- This approach ensures the Node.js event loop remains non-blocking and responsive, even when handling CPU-intensive operations.

**Key Points Interviewer Looks For (All Covered)**

* Awareness of Node.js event loop limitations ✅
* Knowledge of `worker_threads` and when not to use them per request ✅
* Use of **worker pool** for concurrency control ✅
* Familiarity with production-ready libraries like `poolifier`, `Piscina` ✅
* Scaling strategies: queueing, microservices ✅
* Thought process around performance tuning (CPU-core-based sizing) ✅

---



---

## Single Sign On
**"Yes, I’ve implemented Single Sign-On (SSO) in enterprise-grade applications where users needed seamless access across multiple platforms with a single authentication step."**

- “By **implementing SSO with Azure AD and OpenID Connect**, we delivered a secure, scalable, and **seamless login experience across our enterprise apps**, while aligning with organizational security standards and improving user productivity.”


 **Real-World Use Case**:

**Internal Enterprise Dashboard using Azure Active Directory**

We had **multiple internal applications** — HR portal, timesheet system, and project tracker — and the goal was to enable users to **log in once using corporate credentials** and access all systems **without repeated logins**.

---

 **SSO Integration Highlights:**

| 🔧 Area                         | ✅ What Was Done                                                                  |
| ------------------------------- | -------------------------------------------------------------------------------- |
| **Identity Provider**           | Integrated **Azure Active Directory (Azure AD)**                                 |
| **Protocols Used**              | Used **OAuth 2.0** + **OpenID Connect (OIDC)**                                   |
| **Flow**                        | Implemented **Authorization Code Flow with PKCE**                                |
| **Frontend (React)**            | Handled redirection, stored **ID/access tokens in HTTP-only cookies**            |
| **Backend (Node.js / Express)** | Verified tokens using **Microsoft’s public keys (JWKS endpoint)**                |
| **Authentication**              | Used **ID Token** for login, **Access Token** for secure API access              |
| **Authorization**               | Applied **role-based access control (RBAC)** using claims (e.g., admin, manager) |
| **Security Measures**           | Ensured **token expiration**, secure cookie flags, and **HTTPS enforcement**     |


 **Benefits Achieved:**

* 🧠 **Centralized login experience** using Microsoft credentials
* 🔁 **True SSO experience** across all internal tools
* 🔐 **Role-based access control** enforced via Azure AD groups
* 🧼 **Reduced password fatigue** and IT support load
* 🧩 Easy integration with existing **corporate security policies**

**Key Technologies & Standards Used:**

* **OAuth 2.0** – For delegated access
* **OpenID Connect (OIDC)** – For authentication and ID tokens
* **Azure AD** – Identity Provider (IdP)
* **React** – Frontend handled redirect & silent token refresh
* **Node.js (Express)** – Backend verified JWTs, issued sessions
* **JWT** – Used for ID and Access tokens
* **JWKS endpoint** – For public key verification

---






## **Memory leak**
---


- A **memory leak in Node.js** occurs when the **application holds references to objects that are no longer needed**, preventing the garbage collector from reclaiming that memory.
- Over time, this **leads to increased memory usage, performance degradation, and potential crashes**.
- Memory leaks in Node.js happen when unused memory isn’t freed due to retained references.
- I prevent them through scoped variables, proper cleanup of timers and listeners, use of `WeakMap`, and bounded caching. 
- I detect leaks via heap snapshots, Chrome DevTools, and tools like `clinic.js` or `heapdump`.”



### 🔍 **Common Causes:**

1. **Unintentional Global Variables** – Declared without `let/const`, they persist for the app’s lifetime.
2. **Uncleared Timers/Intervals** – Active timers referencing closures retain memory.
3. **Unremoved Event Listeners** – E.g., using `emitter.on()` but never calling `.off()`.
4. **Retained Closures** – Functions capturing variables unintentionally.
5. **Unbounded In-memory Caching** – Caches growing without a limit.

---

### 🛡️ **Prevention Strategies:**

* **Use `let`/`const` with `'use strict'`** to avoid accidental globals.
* **Clear `setTimeout` / `setInterval`** when no longer needed.
* **Always remove unused event listeners** using `off()` or `removeListener()`.
* **Use `WeakMap` / `WeakSet`** for temporary object storage — they allow automatic garbage collection.
* **Limit cache size** using tools like `lru-cache` to prevent uncontrolled growth.
* **Avoid long-lived closures** holding onto large objects.

---

### 🔍 **Detection Techniques:**

#### 1. **Runtime Monitoring:**

```js
console.log(process.memoryUsage());
```

Track `heapUsed`, `heapTotal`, `rss`. Continuous growth = suspicious.

#### 2. **DevTools Profiling:**

```bash
node --inspect app.js
```

Use Chrome DevTools (`chrome://inspect`) to:

* Take heap snapshots
* Analyze memory timeline
* Identify retained objects

#### 3. **Heap Snapshots via Code:**

```js
const heapdump = require('heapdump');
heapdump.writeSnapshot(`./${Date.now()}.heapsnapshot`);
```

Compare snapshots before and after load.

#### 4. **Tooling:**

| Tool                     | Use Case                          |
| ------------------------ | --------------------------------- |
| `clinic.js`              | Profiling memory, CPU, event loop |
| `memwatch-next`          | Emits warnings on memory growth   |
| `v8.getHeapStatistics()` | Detailed V8-level memory stats    |

#### 5. **Red Flags to Watch:**

* Heap grows after GC
* `MaxListenersExceededWarning`
* High memory usage without corresponding load

#### 6. **Stress Testing:**

Use tools like **Artillery**, **Apache Benchmark**, or **Postman Runner** to simulate traffic and detect leaks under load.

---

### 📌 **Example: EventEmitter Leak Prevention**

```js
const emitter = new EventEmitter();
function onMessage(msg) {
  console.log(msg);
}
emitter.on('message', onMessage);

// ✅ Prevent leak
emitter.off('message', onMessage);
```

---

## HTTP Module


- A Node.js HTTP server is created using Node’s built-in http module, 
- which allows us to handle requests and send responses without any external dependencies. 
- It follows an event-driven, non-blocking I/O model—ideal for handling many concurrent connections efficiently.
- The server listens on a specified port and handles HTTP methods like GET, POST, etc., using a callback that provides req (request) and res (response) objects. 
- It’s low-level compared to frameworks like Express, but it gives fine-grained control over how the server behaves.



```js
const http = require('http');

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the homepage!');
  } else if (url === '/about' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About us page');
  } else if (url === '/api' && method === 'GET') {
    const data = { message: 'Hello from API', success: true };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```




Here’s a **streamlined and optimized list of Socket.IO interview questions and answers**, grouped by topic, with **concise bullet-point answers** — perfect for quick review or interviews:

---

##  **SocketIO**

### 1. **What is Socket.IO?**

* JavaScript library for **real-time, bidirectional communication**.
* Built on top of **WebSockets**, with fallback to polling.

### 2. **How is Socket.IO different from WebSockets?**

* WebSocket is a **protocol**.
* Socket.IO is a **framework** with extras like:

  * Auto-reconnect
  * Room/namespace support
  * Fallback mechanisms
  * Middleware support

---

### 3. **How do you initialize Socket.IO?**

**Server (Node.js):**

```js
const io = require('socket.io')(server);
```

**Client:**

```html
<script src="/socket.io/socket.io.js"></script>
<script>
  const socket = io('http://localhost:3000');
</script>
```

### 4. **How do you handle client connection and disconnection?**

```js
io.on('connection', socket => {
  console.log('connected:', socket.id);
  socket.on('disconnect', () => console.log('disconnected:', socket.id));
});
```

---


### 5. **Emit and listen to custom events?**

**Server:**

```js
socket.emit('msg', 'Hello');
```

**Client:**

```js
socket.on('msg', data => console.log(data));
```

### 6. **Emit to all clients except sender?**

```js
socket.broadcast.emit('event', data);
```

### 7. **Emit to all clients (including sender)?**

```js
io.emit('event', data);
```

---


### 8. **What is a namespace?**

* Logical endpoint, e.g. `/chat`, `/news`
* Separates concerns on same connection

```js
const chat = io.of('/chat');
chat.on('connection', socket => { ... });
```

### 9. **What is a room in Socket.IO?**

* Channel within a namespace
* Used to group users

```js
socket.join('room1');
io.to('room1').emit('msg', 'Hi room');
```

---

## 🔐 **Authentication & Security**

### 10. **How to implement authentication?**

Use middleware:

```js
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  // validate token...
  next();
});
```

### 11. **Security best practices**

* Use HTTPS
* Validate inputs
* Restrict events
* Apply CORS rules
* Use rate-limiting/throttling

---


### 12. **Auto-reconnection config**

```js
io('url', {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});
```

### 13. **How to use event acknowledgement?**

**Client:**

```js
socket.emit('event', data, response => {
  console.log('Server response:', response);
});
```

**Server:**

```js
socket.on('event', (data, cb) => {
  cb('OK');
});
```

---


### 14. **How to scale Socket.IO with Redis?**

```bash
npm install socket.io-redis
```

```js
const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({ host: 'localhost', port: 6379 }));
```

### 15. **How to debug Socket.IO?**

**Browser:**

```js
localStorage.debug = '*';
```

**Server:**

```bash
DEBUG=socket.io* node app.js
```

---


### 16. **Socket.IO version mismatch causes?**

* Using **v4 client with v2 server** leads to handshake errors.
* Always align client and server versions for stable communication.

---

### Summary Table

| Feature           | Method/Example                      |
| ----------------- | ----------------------------------- |
| Emit to all       | `io.emit()`                         |
| Emit to one       | `socket.emit()`                     |
| Except sender     | `socket.broadcast.emit()`           |
| Join room         | `socket.join('room')`               |
| Emit to room      | `io.to('room').emit()`              |
| Middleware use    | `io.use((socket, next) => { ... })` |
| Auth token access | `socket.handshake.auth.token`       |
| Debugging         | `localStorage.debug = '*'`          |
| Redis adapter     | `io.adapter(redisAdapter(...))`     |

---

## **Basic Socket.IO example**


### 📦 1. **Install Dependencies**

### Backend (`Node.js + Express + Socket.IO`):

```bash
mkdir socket-server
cd socket-server
npm init -y
npm install express socket.io
```

### Frontend (`React + socket.io-client`):

```bash
npx create-react-app socket-client
cd socket-client
npm install socket.io-client
```

---

### 🖥️ 2. **Backend Code (Node.js + Socket.IO)**

**File: `server.js`**

```js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', // React app URL
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('send_message', (data) => {
    console.log('Received:', data);
    io.emit('receive_message', data); // broadcast to all
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
```

---

### 🌐 3. **Frontend Code (React + Socket.IO Client)**

**File: `App.js`**

```jsx
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => socket.disconnect();
  }, []);

  const sendMessage = () => {
    socket.emit('send_message', message);
    setMessage('');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>React + Socket.IO Chat</h2>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
      <ul>
        {chat.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

### 🚀 4. **Run the App**

### Terminal 1: Start the backend

```bash
node server.js
```

### Terminal 2: Start the React frontend

```bash
npm start
```

---

### Result

* Open `http://localhost:3000` in two browser tabs.
* Type a message and send.
* You’ll see real-time messages on both tabs!



## **Scalable REST APIs**


- First, I design APIs to be **stateless** , This makes it easy to scale horizontally 
- Second, I implement **caching**  like **Redis or in-memory caches** for frequently accessed data — and set proper HTTP caching headers to reduce repeated load.

- I also make sure to use **pagination, filtering, and sorting** to avoid sending large datasets in a single response

- For background tasks, I offload them using **message queues** 

- I add **rate limiting and throttling** to protect the API from overuse

- On the infrastructure side, I use **auto-scaling** policies — for example, in Azure or AWS — based on CPU or request metrics, and I monitor performance with tools like Prometheus, Grafana, or Azure Monitor.

- Lastly, if the system grows large, I prefer breaking it into **microservices**, so each one can be scaled independently depending on demand.

- In one project, we handled a sudden 5x traffic spike by horizontally scaling the Node.js containers and leveraging Redis caching. The API maintained low response times even under load."



* **Node.js with Express/Fastify** for RESTful API development
* **Stateless architecture** for **horizontal scaling** behind **load balancers** (e.g., NGINX, AWS ALB)
* **Cluster module or PM2** to leverage **multi-core CPUs**
* **Redis caching** for frequently accessed data
* **Queue systems** (e.g., **Bull + Redis**) for background processing
* **Rate limiting** and **throttling** for abuse protection
* **Docker + Kubernetes** (or **AWS ECS**) for containerized deployments
* **Multi-AZ**, **health checks**, and **auto-scaling** for high availability
* **Centralized logging** using **Winston**, integrated with **ELK stack** or **Datadog**
* **Security:** Helmet, CORS, and **JWT/OAuth2-based auth**
* **Swagger/OpenAPI** for API documentation
* **Jest & Supertest** for unit and integration testing


---




## **REST API Performance Testing**


When I work on REST API performance testing, my goal is to validate **how well the API performs under expected load** and how it **scales under stress**.

**In short:** Performance testing tells me *how well the system runs under expected load*. Scalability testing tells me *how far I can push it before it breaks, and how gracefully it scales*. By combining both, I ensure the API is **robust, efficient, and production-ready**.

I usually break it into two phases:

1. **Performance Testing** – This tells me if the API consistently meets requirements under expected load.

   * Example: If my API should handle 2000 RPS, I check whether latency stays below 300ms at that fixed load.

2. **Scalability Testing** – This tells me how far I can push the system before it breaks, and how gracefully it scales.

   * Example: I increase load to 5000, 10,000, or even 20,000 RPS, then check if the system can scale horizontally (extra containers/instances) without latency spikes or error surges.
   * Here, I don’t just measure speed — I monitor **latency, throughput, error rates, CPU/memory usage, and event loop health**.

---

**My Approach:**

1. **Choosing the Right Tool**

   * I prefer **k6** for scripting load tests in JavaScript, **Artillery** for Node.js CI/CD pipelines, and sometimes **JMeter** for enterprise scenarios. For quick baseline checks, I even use **Postman Runner**.

2. **Defining Load Scenarios**

   * With k6, for example, I write scripts to simulate **virtual users** sending concurrent requests.
   * Example: Run 100 concurrent users for 1 minute to test sustained load.

3. **Monitoring Metrics**

   * I focus on:

     * Response time (p50, p95, p99)
     * RPS (requests per second)
     * Error rates (4xx, 5xx)
     * CPU/Memory (via `top`, `pm2`, Node’s `process`)
     * Event loop lag (using `clinic.js` or `node:perf_hooks`)

4. **Analyzing Results**

   * I look for latency spikes, throughput drops, or resource bottlenecks.
   * I also check for memory leaks, blocking code, or database constraints.

5. **Simulating Real-World Patterns**

   * I don’t just hit a single endpoint — I mix GET, POST, PUT, DELETE.
   * I test both **authenticated and unauthenticated requests**, data-heavy payloads, and even edge cases like rapid repeated access (simulating brute-force or DDoS-like traffic).

---





## **Response k6 performance test**


### **Sample k6 Script**

```js
import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 50,
  duration: '30s',
};

export default function () {
  let res = http.get('http://localhost:3000/api/users');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });
}
```
### **Sample k6 Script (10k users)**
```js
import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 1000 },   // ramp-up to 1k
    { duration: '2m', target: 3000 },   // ramp-up to 3k
    { duration: '2m', target: 6000 },   // ramp-up to 6k
    { duration: '2m', target: 10000 },  // ramp-up to 10k
    { duration: '5m', target: 10000 },  // hold at 10k
    { duration: '2m', target: 0 },      // ramp-down
  ],
  thresholds: {
    http_req_duration: ['p(95)<1000'], // 95% of requests should be < 1000ms
    http_req_failed: ['rate<0.01'],    // < 1% error rate
  },
};

export default function () {
  const res = http.get('http://your-api-domain.com/api/health');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'duration < 1000ms': (r) => r.timings.duration < 1000,
  });

  sleep(1); // simulate think time
}

```

---

### 📊 **Sample Output After Running `k6 run test.js`:**

```bash
running (30.0s), 50/50 VUs, 15000 complete and 0 interrupted iterations
default ✓ [======================================] 50 VUs  30s

     ✓ status is 200
     ✓ response time < 500ms

     checks.........................: 100.00% ✓ 15000 ✗ 0    
     data_received..................: 3.2 MB  106 kB/s
     data_sent......................: 1.9 MB  64 kB/s
     http_req_blocked...............: avg=1.22ms   min=0s      max=22.36ms  p(90)=2ms      p(95)=2.8ms  
     http_req_connecting............: avg=0.32ms   min=0s      max=6.98ms   p(90)=0.6ms    p(95)=1.1ms  
     http_req_duration..............: avg=183.7ms  min=110ms   max=420ms    p(90)=310ms    p(95)=370ms  
     http_req_failed................: 0.00%   ✓ 0     ✗ 15000
     http_req_receiving.............: avg=2.45ms   min=0.2ms   max=15.1ms   p(90)=4.3ms    p(95)=5.6ms  
     http_req_sending...............: avg=0.21ms   min=0.1ms   max=1.1ms    p(90)=0.3ms    p(95)=0.4ms  
     http_req_tls_handshaking.......: avg=0s       min=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=181ms    min=108ms   max=412ms    p(90)=307ms    p(95)=364ms  
     http_reqs......................: 15000   500.23/s
     iteration_duration.............: avg=1.02s    min=1s      max=1.1s     p(90)=1.05s    p(95)=1.07s  
     iterations.....................: 15000   500.23/s
     vus............................: 50      min=50  max=50
     vus_max........................: 50      min=50  max=50
```

---

### 🧠 **How to Read This:**

| Metric                   | Meaning                                |
| ------------------------ | -------------------------------------- |
| `http_req_duration`      | Total time per request (avg = 183.7ms) |
| `http_req_failed`        | 0% failed requests (✔️ good)           |
| `http_reqs`              | 15,000 total requests in 30s (500 RPS) |
| `p(95)`                  | 95% of requests were faster than 370ms |
| `data_received` / `sent` | Useful for network load profiling      |
| `iteration_duration`     | How long each virtual user loop took   |

---

### ✅ **Conclusion from This Test:**

* API is handling **500 requests/sec**
* 95% of requests are under **370ms**
* **No errors** occurred
* API is **performing well** under 50 concurrent users for 30 seconds

---





### **Handles large data sets**

To handle large datasets efficiently:

* Use **pagination** or **cursor-based** queries (offset is inefficient for large tables).
* Use **database streaming** (e.g., `pg-query-stream` for PostgreSQL) to avoid loading everything in memory.
* For APIs returning large lists, consider **compression (gzip/brotli)** and **response streaming**.
* Use DTOs with **Zod** or **class-transformer** for type-safe shaping and validation.
* Example structure:

  * `controllers/UserController.ts`
  * `services/UserService.ts`
  * `repositories/UserRepository.ts`
  * `types/User.ts`

With TypeScript, I define interfaces for each layer to ensure contract adherence and type correctness across modules.





## **OAuth**


* **OAuth (Open Authorization)** is an **authorization protocol**, **not authentication**.
* Enables **secure access to third-party resources** without exposing **user credentials**.
* App acts **on behalf of the user**, using **tokens**, not passwords.

**Real-World Use Cases**
* ✅ **Google Login** for social authentication
* ✅ **GitHub API access** (e.g., fetch repositories)
* ✅ **Google Calendar integration** using scoped permissions


* **OAuth** defines the **authorization flow** (how tokens are issued, validated, revoked).
* **JWT** is just a **token format** — many OAuth providers issue tokens as JWTs.
* OAuth enables apps to **act on behalf of users** **with their consent**.
* User credentials are **never shared with your app**.
* The app receives a **scoped access token** to perform **only allowed operations** (e.g., read email, not send).


**OAuth Authorization Code Flow (Real-Time Use Case)**

> “In a production app where I implemented Google Sign-In, here’s how it worked:”

1. User clicks **Login with Google**
2. App redirects to Google’s **authorization endpoint** with scopes like `email profile`
3. User logs in and **consents**
4. Google redirects back with a temporary **authorization code**
5. Backend securely exchanges the code for an **access token**
6. Token is then used to call Google APIs (e.g., `https://www.googleapis.com/oauth2/v2/userinfo`)

> 🔒 *For native/mobile apps, I always use **PKCE** to prevent authorization code interception.*

---

## 🔑 **Key Concepts** *(in one line per concept)*

| Term                     | Explanation                                               |
| ------------------------ | --------------------------------------------------------- |
| **Client**               | Your app (frontend/backend)                               |
| **Resource Owner**       | The end user                                              |
| **Authorization Server** | Issues access & refresh tokens (e.g., Google, GitHub)     |
| **Access Token**         | Short-lived token used to access APIs                     |
| **Refresh Token**        | Long-lived token to obtain new access tokens silently     |
| **Scopes**               | Granular permissions (e.g., `email`, `calendar.readonly`) |
| **Redirect URI**         | Secure endpoint for OAuth callbacks                       |
| **State**                | Random value to prevent CSRF attacks                      |

---

## 🔐 **Security Best Practices**

✅ Always use **HTTPS**
✅ Store tokens in **HttpOnly cookies**, not `localStorage`
✅ Validate **redirect URIs**
✅ Use **state** to prevent CSRF
✅ Apply **scopes** based on least privilege
✅ Use **PKCE** for public/native clients

---

## 🌍 **OAuth Providers & Examples**

| Provider | Auth Endpoint                                  | Scopes Examples                         |
| -------- | ---------------------------------------------- | --------------------------------------- |
| Google   | `https://accounts.google.com/o/oauth2/v2/auth` | `email`, `profile`, `calendar.readonly` |
| GitHub   | `https://github.com/login/oauth/authorize`     | `user`, `repo`                          |
| Facebook | `https://www.facebook.com/v10.0/dialog/oauth`  | `email`, `public_profile`               |

---

## 💻 **Code Snippet: Exchanging Code for Token (Node.js)**

```js
const axios = require('axios');

async function getAccessToken(code) {
  const { data } = await axios.post('https://oauth2.googleapis.com/token', {
    code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_SECRET,
    redirect_uri: 'http://localhost:3000/oauth-callback',
    grant_type: 'authorization_code'
  });

  return data.access_token;
}
```




### **Idempotency**

> **"Idempotency in APIs ensures that making the same request multiple times results in the same outcome, without causing unintended side effects. It's especially important in scenarios where network failures, timeouts, or retries might cause a client to re-send a request."**


> **Idempotency is a critical part of building fault-tolerant, user-safe APIs** — especially in financial, booking, or inventory systems — where retrying can cause severe duplication unless controlled

> Stripe is a well-known example. Every POST request to create a charge can include an `Idempotency-Key`. If the same request is retried with the same key, the server ensures that the customer is not double-charged."*

> *"For example, imagine a user submits a payment and the client doesn't receive the response due to a timeout. If the client retries the payment request, without idempotency, the user could be charged twice. Idempotency prevents this by ensuring the operation only happens once."*
> *"We can use Redis or a relational DB to store idempotency records. I usually use a TTL to auto-expire keys, and hash the request body to detect changes for the same key."*

**How to Implement It (POST requests)**

> **"While HTTP GET, PUT, and DELETE are idempotent by nature, POST is not. To make POST idempotent — especially for operations like payments or orders — we typically use an `Idempotency-Key`. The client generates and sends this key with the request."**

> **"On the backend, we store this key along with a hash of the request body and the response. If the same key comes in again, we check if the body is the same:**

* If yes, return the cached response.
* If no, return a `409 Conflict`."\*\*


```js
const idempotencyStore = new Map();

app.post("/order", (req, res) => {
  const key = req.headers["idempotency-key"];
  const body = JSON.stringify(req.body);

  if (!key) return res.status(400).send("Missing Idempotency-Key");

  if (idempotencyStore.has(key)) {
    return res.status(200).json(idempotencyStore.get(key));
  }

  // Process order
  const response = { orderId: "xyz123", status: "created" };
  idempotencyStore.set(key, response);
  res.status(200).json(response);
});
```



## **core modules**

- Yes, in Node.js, **core modules** are the **built-in modules** that come bundled with the Node.js runtime environment. 

- These modules provide essential functionalities like working with the file system, creating HTTP servers, handling streams, working with buffers, and more — without needing to install anything separately using npm.

- For example, modules like `fs` for file system operations, `http` for building web servers, and `path` for handling file paths are all core modules.

- They’re highly optimized, written in C++ under the hood, and are loaded using the `require()` function. Since they are native to Node.js, they help developers build efficient and scalable applications without relying on external dependencies.

 ```js
 const fs = require('fs');
 fs.readFile('example.txt', 'utf8', (err, data) => {
   if (err) throw err;
   console.log(data);
 });
 ```

- In this case, `fs` is a core module used to read a file asynchronously.
-  Overall, core modules form the **foundation of most Node.js applications**, especially in back-end development.

---



## **node js 22 features**

Absolutely! Node.js 22 introduces several significant features and enhancements focused on performance, developer experience, and improved module handling. Here are the key highlights:

1. **V8 Engine Upgrade (v12.4):**
   Node.js 22 comes with an upgraded V8 engine which adds support for:

   * `Array.fromAsync()`
   * New Set methods like `union()`, `intersection()`, and `difference()`
   * Iterator helpers
   * WebAssembly Garbage Collection
     These improve both language capabilities and performance.

2. **Maglev JIT Compiler (Enabled by Default):**
   A major performance boost comes from Maglev, V8’s new mid-tier JIT compiler. It’s optimized for short-lived processes, like CLI tools, offering faster startup and execution.

3. **Stable Watch Mode (`node --watch`):**
   Previously experimental, the Watch Mode is now stable. It automatically restarts the process when files change—huge for improving development efficiency and workflows.

4. **Built-in WebSocket Client:**
   Node.js 22 now includes a browser-compatible WebSocket client by default, removing the need for third-party packages for basic WebSocket functionality.

5. **Support for `require()`ing ESM Graphs (Experimental):**
   This allows limited, synchronous `require()` usage of ESM modules—under specific conditions—helping bridge compatibility between CommonJS and ESM.

6. **`node --run` Flag (Experimental):**
   This feature enables running `package.json` scripts directly, like `node --run start`, offering a faster alternative to `npm run`.

7. **Stream High Water Mark Increase:**
   The default high water mark has been increased from **16KiB to 64KiB**, improving stream throughput performance, albeit with a small memory trade-off.

8. **Glob Pattern Matching in `fs` Module:**
   New built-in `glob()` and `globSync()` functions provide native file path pattern matching without relying on external libraries like `glob`.

9. **Faster `AbortSignal` Creation:**
   Internal optimizations make the creation of `AbortSignal` more efficient, benefiting high-level APIs like `fetch()` and the built-in test runner.

---

**Interviewer Follow-up:** *Which of these do you find most impactful?*
**You:** Personally, I find the **Maglev compiler** and **stable Watch Mode** the most impactful. Maglev brings noticeable performance improvements in CLI tools, and Watch Mode really boosts development speed, especially in rapid iteration environments.

---



## Node js 20 features


Certainly! Node.js 20 introduced several important improvements in security, performance, and developer convenience. Here are the key highlights:

**1. Permission Model (Experimental)**

* One of the most notable features.
* Allows developers to **restrict access** to file system, environment variables, and child processes.
* You can now run Node with flags like:

  ```bash
  node --experimental-permission --allow-fs-read=./data
  ```
* Helps in **sandboxing** and securing Node applications during development or in production.



**2. V8 JavaScript Engine Upgrade (v11.3)**

* Node.js 20 ships with V8 11.3, bringing in:

  * `Array.prototype.toSorted()`
  * `Array.prototype.toSpliced()`
  * `Array.prototype.with()`
  * Performance improvements and better language features



**3. Stable Test Runner**

* The built-in `node:test` module, introduced in v18, became **stable** in Node.js 20.
* Provides a native way to write unit tests without external libraries like Mocha or Jest.



**4. Web Crypto API Fully Stable**

* The `crypto` module's Web Crypto API implementation is now **fully stable**.
* Closer alignment with browser-based Web Crypto, useful for cross-platform cryptography.



**5. Synchronous import.meta.resolve (Stable)**

* Previously experimental, now stable.
* Allows modules to resolve paths synchronously using:

  ```js
  import.meta.resolve('./path')
  ```



**6. Custom ESM Loaders Move to Stable**

* ESM (ECMAScript Modules) loaders, which allow you to customize module loading behavior (e.g., for transpiling), are now stable.
* Useful in tools and frameworks like Next.js or TypeScript compilers.



**7. Improved HTTP(S) Keep-Alive Performance**

* Major enhancements in HTTP and HTTPS **keep-alive** behavior.
* Reduces latency for consecutive HTTP requests and improves throughput for APIs.



**8. TimeZone Support with ICU**

* Node.js 20 includes **ICU 72**, enabling updated time zone data and formatting.
* Helps with consistent internationalization and time zone conversions.



**9. Experimental Features**
* **Single Executable Apps (Experimental):**

  * Bundle your Node.js app into a single `.exe` or binary—makes deployment easier.
* **Web Streams API Improvements:** Better compatibility and performance with streaming APIs.



**Interviewer Follow-up:** *Which feature do you find most valuable?*

**You:**
The **Permission Model** stands out because it brings a more secure runtime to Node.js—something that was traditionally harder to enforce. For enterprise-grade apps or serverless environments, it's a game-changer.

-----------





### **Common Cases Timeout Errors**

1. **External API Calls** -    * When calling third-party services that are down or responding slowly. * Example: Axios or fetch request to payment gateway times out.
2. **Database Queries** -    * Slow queries, large result sets, or network issues. * Example: MongoDB or MySQL query exceeding query timeout.
3. **Long-Running Operations**    * CPU-heavy tasks, infinite loops, or blocking file I/O.* Example: Processing large images or JSON files synchronously.
4. **Express Route Handling**  -   * No response is sent in time; Express may timeout or load balancer cuts it off.
5. **Load Balancer or Reverse Proxy** -    * Nginx, AWS ELB, or Cloudflare might return a timeout (504 Gateway Timeout) if backend doesn't respond quickly.
6. **Socket or Streaming Connections**  -   * WebSocket, file upload/download, or streaming API that stays open without activity.


### **Debugging Steps I Follow For Timeout**


**“Intermittent timeouts are tricky because they’re often non-deterministic. In my experience, handling them well requires a mix of proactive monitoring, defensive coding, and fault-tolerant design. Here’s how I typically approach it:”**


**Monitor First, Fix Later**

* I always begin by enabling detailed **logs and metrics** using tools like **Winston**, **Pino**, or APMs like **Elastic APM**, **Datadog**, or **Prometheus + Grafana**.
* This helps me correlate timeouts with specific endpoints, payload sizes, or time windows.

**Set Explicit Timeouts**

* I avoid relying on library defaults. For example:

  * `axios({ timeout: 5000 })`
  * Database clients: `query_timeout`, `connect_timeout`
  * Express/Nginx: ensure server timeouts are configured explicitly.

**Add Retry with Exponential Backoff**

* For transient errors, I implement **retry logic** with **jitter** using `axios-retry` or custom wrappers — to prevent retry storms or duplicated writes.

**Apply Circuit Breakers**

* I use libraries like **Opossum** to implement circuit breakers. This prevents cascading failures and protects downstream services during outages.

**Optimize the Event Loop**

* Using **`clinic.js`**, `async_hooks`, or Node’s profiler, I identify blocking code like sync file I/O or large JSON parsing and refactor it to async/non-blocking alternatives.

**Simulate & Load Test**

* I simulate latency and spike scenarios using **k6**, **Artillery**, or **Apache Benchmark**, which helps uncover hidden bottlenecks before they hit production.

**Graceful Degradation**

* In cases where timeouts are unavoidable, I design fallback strategies — e.g., cached responses, retries from queue, or user-friendly error pages.

**By combining observability, proactive coding practices, and resilience patterns, I can significantly reduce the impact of intermittent timeouts and ensure smooth user experience — even during high load or degraded conditions.**


-------------


### Handle retries


- Retry logic is essential when dealing with **transient failures** — such as network issues, temporary service downtime, or throttling.
-  I implement retries in a **controlled and safe manner**, ensuring reliability without overloading downstream systems.
- I use retries for **resilience**, but with careful control — using exponential backoff, jitter, error filtering, and circuit breakers. I also ensure the operation is safe to retry and implement observability to track failures and retries.

**1. When to Use Retries**

I apply retry logic for:

* **Idempotent operations** (e.g., GET, PUT)
* **External API calls** (e.g., payment gateways, SMS, third-party services)
* **Message processing** (e.g., RabbitMQ, Kafka consumers)
* **Service-to-service communication**

> I avoid retrying non-idempotent operations like `POST` unless I use **retry-safe mechanisms** (e.g., idempotency keys).

**2. Retry Mechanisms**

**Manual Retry with `setTimeout` + Recursion**

```js
function retryAsync(fn, retries = 3, delay = 1000) {
  return fn().catch(err => {
    if (retries === 0) throw err;
    return new Promise(res => setTimeout(res, delay))
      .then(() => retryAsync(fn, retries - 1, delay));
  });
}
```

**Using Libraries**

* `axios-retry` for HTTP:

  ```js
  const axiosRetry = require('axios-retry');
  axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });
  ```
* `p-retry` for generic async operations:

  ```js
  const pRetry = require('p-retry');
  await pRetry(() => fetchData(), { retries: 3 });
  ```

**3. Best Practices for Retry Handling**

   * I add increasing delays between retries to prevent hammering the downstream service.  * Example: 1s → 2s → 4s
   * To prevent retry storms in distributed systems, I add random jitter to delay values.
   * Each retry attempt has its own timeout to avoid hanging requests.
   * I integrate retry logic with **circuit breakers** (e.g., `opossum`) to prevent retries when a service is already down.
   * I retry only on **transient** errors:
     * HTTP 408 (Request Timeout), 429 (Too Many Requests), 5xx
     * `ECONNRESET`, `ETIMEDOUT`, etc.
   * I define retry caps to avoid infinite loops and cascading failures.


**4. Retry in Message Queues**

* For RabbitMQ or Kafka, I implement **DLQs (Dead Letter Queues)**:

  * Retry failed messages up to `n` times.
  * Move to DLQ after retries for manual investigation or alerting.





### **Hash vs Encrypt**

* Hashing is ideal for verifying data integrity (e.g., verifying passwords), hashing is designed to be irreversible.
* while encryption is used when data needs to be retrieved later (e.g., encrypting messages or files). Encryption is reversible with a key;
* For passwords, hashing with salt is a best practice. For secure communication, encryption (like AES or RSA) is used.

| Aspect            | **Hashing**                                                    | **Encryption**                                                      |
| ----------------- | -------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Purpose**       | Data integrity & verification                                  | Data confidentiality & protection                                   |
| **Process**       | One-way transformation                                         | Two-way transformation (encrypt & decrypt)                          |
| **Reversible?**   | ❌ Irreversible                                                 | ✅ Reversible (with key)                                             |
| **Use Cases**     | - Password storage<br>- Digital signatures<br>- File integrity | - Secure communication<br>- File & database encryption<br>- SSL/TLS |
| **Output Length** | Fixed length (e.g., 256 bits for SHA-256)                      | Variable length (depends on algorithm & data)                       |
| **Key Used?**     | No key used                                                    | Uses a key (symmetric or asymmetric)                                |
| **Examples**      | SHA-256, MD5, bcrypt                                           | AES, RSA, DES, Blowfish                                             |
| **Security Risk** | Susceptible to collision or brute force if weak algorithm      | Risk if key is leaked or poorly managed                             |
| **Idempotency**   | Same input always gives same output                            | Same input with same key gives same output (unless IV used)         |
| **Salt/IV?**      | Salt used to prevent rainbow attacks                           | IV used in some modes to ensure unique ciphertexts                  |



## FS



- [Check if File Exists](#check-if-file-exists)
- [Copy File](#copy-file)
- [Read Directory Contents](#read-directory-contents)
- [Create Directory](#create-directory)
- [Delete a File](#delete-a-file)
- [Append to File](#append-to-file)
- [Write to File](#write-to-file)
- [Read File](#read-file)



#### **Read File**

```js
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) return console.error('Error reading file:', err);
  console.log('File content:', data);
});
```

#### **Write to File**

```js
fs.writeFile('example.txt', 'Hello, Node.js!', 'utf8', (err) => {
  if (err) return console.error('Error writing file:', err);
  console.log('File written successfully');
});
```

#### **Append to File**

```js
fs.appendFile('example.txt', '\nMore content...', 'utf8', (err) => {
  if (err) return console.error('Error appending:', err);
  console.log('Content appended');
});
```

#### **Delete a File**

```js
fs.unlink('example.txt', (err) => {
  if (err) return console.error('Error deleting:', err);
  console.log('File deleted');
});
```

#### **Create Directory**

```js
fs.mkdir('myFolder', { recursive: true }, (err) => {
  if (err) return console.error('Error creating directory:', err);
  console.log('Directory created');
});
```

#### **Read Directory Contents**

```js
fs.readdir('myFolder', (err, files) => {
  if (err) return console.error('Error reading directory:', err);
  console.log('Files:', files);
});
```

#### **Check if File Exists**

```js
fs.access('example.txt', fs.constants.F_OK, (err) => {
  console.log(err ? 'File does not exist' : 'File exists');
});
```

---

#### **Copy File**

```js
const source = 'example.txt';
const destination = 'copy.txt';

fs.copyFile(source, destination, (err) => {
  if (err) return console.error('Error copying file:', err);
  console.log('File copied successfully');
});
```




## RESTAPI version 

- For REST API versioning, I typically use **URI versioning** like `/api/v1/` — it's clean, cache-friendly, and easy to manage in Express or any routing layer.*

- I follow these principles:*

* ***Non-breaking changes** stay in the same version.*
* ***Breaking changes** trigger a new version.*
* *Old versions are **deprecated gradually** with proper communication and monitoring.*

- If needed, I also support **header-based versioning** for advanced clients — using headers like `Accept: application/vnd.myapp.v1+json`.*

- Finally, I document each version using **Swagger/OpenAPI** and ensure test coverage across all active versions through CI/CD. This ensures **backward compatibility**, smooth client migration, and long-term API stability."*


Via URL versioning:
```ts
GET /api/v1/users
```
Or via headers (less common):
```http
GET /users
Accept: application/vnd.company.v1+json
```

## Why V8 Engine

* **High Performance**: V8 compiles JavaScript to **native machine code** using **Just-In-Time (JIT) compilation**, making execution extremely fast.
* **Built by Google**: V8 powers **Google Chrome**, ensuring **continuous optimization**, **stability**, and **performance**.
* **Memory Efficiency**: V8 has an efficient **garbage collector**, which helps Node.js manage memory in **long-running server apps**.
* **Cross-Platform**: Written in **C++**, V8 is **portable** and works well across different **OS platforms**.
* **Embeddability**: V8 is a **standalone engine**, making it easy for Node.js to **embed and extend** it with custom APIs (e.g., file system, network).
* **Active Development**: Backed by **Google** and **open source contributors**, it receives **regular updates** and **performance improvements**.








### **JOINs in Sequelize**

"In **Sequelize**, JOINs are performed through **model associations** such as `hasOne`, `hasMany`, `belongsTo`, and `belongsToMany`.

Once the **relationships** are defined, we use the **`include` option** in queries to perform JOINs.

For example, if we have two models — **`User` and `Post`**, where a **User has many Posts**, the association looks like this:

```js
User.hasMany(Post);
Post.belongsTo(User);
```

To **fetch posts along with their user details**, we write:

```js
const posts = await Post.findAll({
  include: {
    model: User,
    attributes: ['id', 'name']
  }
});
```

This performs a **SQL JOIN** between `posts` and `users` using the foreign key.

**Key points:**

* `include` enables **automatic JOINs** based on defined associations
* Use `attributes` to **limit selected columns**
* Add `required: true` in `include` for an **INNER JOIN**
* Default JOIN is **LEFT OUTER JOIN**
* For **aliases**, use `as` in both association and query:

```js
User.hasMany(Post, { as: 'Articles' });

User.findAll({
  include: {
    model: Post,
    as: 'Articles'
  }
});
```



## API Slow 

**Crisp Interview Answer:**
“To find a slow API, I first measure latency with monitoring/logging to detect slowness. Then I break down the request path — network, application logic, database, and infra — using tools like APMs, `clinic.js`, and query profilers to pinpoint the bottleneck. Once identified, I optimize (e.g., caching, DB indexing, async processing) and re-test under load to confirm improvements.”

### **Step 1: Detect the Slowness**

* **Baseline monitoring** – Track API latency (p50, p95, p99) using tools like **New Relic, Datadog, Prometheus + Grafana**, or simple logging with timestamps.
* **Compare expected vs actual** – If an endpoint that should respond in \~200ms is taking 800ms, it’s a red flag.
* **Load testing** – Use **k6, Artillery, or JMeter** to simulate traffic and measure response times under different loads.

### **Step 2: Narrow Down the Bottleneck**

I check where the time is being spent:

1. **Network/External Factors**

   * High latency from external APIs (use `axios.interceptors` or `console.time` to measure outbound requests).

2. **Application Layer**

   * Add **timestamps or `console.time()`** around controller/service logic.
   * Use **APM tools (New Relic, Elastic APM, Datadog)** or `clinic.js` to profile event loop lag, blocking code, or heavy CPU tasks.

3. **Database Layer**

   * Check slow queries with **EXPLAIN (SQL)** or query logs.
   * Look for missing indexes, N+1 query patterns, or unoptimized joins.

4. **Infrastructure**

   * CPU spikes, memory leaks, GC (garbage collection) pauses, or insufficient scaling (too few Node instances).


### **Step 3: Fix and Re-test**

* If DB is the bottleneck → add indexes, caching (Redis), or pagination.
* If code is blocking → offload to workers (BullMQ, RabbitMQ) or use async streams.
* If external API is slow → add retries, circuit breakers (e.g., with **opossum** library), or caching.
* If infra issue → scale horizontally (containers/instances) or use Node clustering/PM2.


## Keep secrets in Node.js

"In Node.js, we **never hardcode secrets** like API keys, tokens, or database passwords directly in the code.

* For **local development**, we usually store secrets in **environment variables** using a `.env` file with libraries like `dotenv`.
* In **production**, it’s a best practice to use a **secret manager** such as AWS Secrets Manager, Azure Key Vault, Google Secret Manager, or HashiCorp Vault. These tools allow secure storage, encryption, rotation, and controlled access to secrets.
* Additionally, we ensure secrets are never committed to source control, apply **least privilege access**, and set up **rotation policies** for high-security environments.

So, in short: **`.env` for local, Secret Manager for production** — that keeps the application both flexible and secure."

- In a **Jenkins CI/CD pipeline**, we **never hardcode secrets**. Instead, we store them in the **Jenkins Credentials Store** and **inject them at runtime** using the `withCredentials` block.
- Each **environment (dev, stage, prod)** has its own **separate credentials**, and the pipeline picks the right one based on the **deployment target**. For **enterprise setups**,
- we integrate Jenkins with **Secret Managers** like **AWS Secrets Manager** or **HashiCorp Vault** to enable **secure storage, automatic rotation, and auditing**.
- This ensures secrets are always **isolated, encrypted, and environment-specific**."


---




