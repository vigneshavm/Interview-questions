
**Node.js Basics**  - [Node.js Architecture](#nodejs-architecture)  - [Node.js handle multiple requests](#nodejs-handle-multiple-requests)  - [Single-Threaded Nature](#single-threaded-nature)  - [Scalability issues](#scalability-issues) 

**Express.js Framework**  - [Express.js](#expressjs)  - [Routing](#routing)  - [HTTP Methods](#http-methods--use-cases)  - [HTTP Status Codes](#status-codes)

**Concurrency & Processes**  - [Event Loop](#event-loop)    - [Async Execution Order](#Async-Execution-Order)   - [Cluster Module vs Child Process vs Worker Thread](#cluster-module-vs-child-process-vs-worker-thread)

**Asynchronous Programming**  - [Asynchronous I/O Handling](#asynchronous-io-handling)  - [Callback, Promise, and Async/Await](#callback-vs-promise-vs-asyncawait)  - [Callback Hell](#callback-hell)  - [Promise](#promise)   - [Promise Type](#promise-type)

**Middleware** - [Middleware](#middleware) - [CORS](#cors)  - [Insecure CORS Configuration](#insecure-cors-configuration)  - [Helmet](#helmet)  - [Rate Limiting APIs](#rate-limiting-apis) 

**Caching** - [Caching Strategies](#caching-strategies)  - [Redis(Caching)](#nodejs-with-redis-caching) 

**Secure** -  [Secure Node.js](#secure-nodejs-app) - [Securing Sensitive Data](#securing-sensitive-data)  - [Secure REST APIs](#secure-rest-apis)

**Database Interaction**  - [SQL connection](#sql-connection)  - [MongoDB connection](#mongodb-connection)  - [Database connections](#database-connections)  - [Data validation](#data-validation)  - [Database Transactions](#database-transactions)  - [Data consistency across distributed services](#data-consistency-across-distributed-services)

**Authentication & Authorization**  - [Authentication vs Authorization](#authentication-vs-authorization)   [JWT](#implementing-jwt-authentication) - [Session-based vs Token-based](#session-based-vs-token-based-authentication)  - [Protecting Routes](#protecting-sensitive-routes)   - [Refresh Tokens](#refresh-tokens)  - [JWT Cookies vs Headers](#jwt-in-cookies-vs-headers)   - [Role-Based Access Control](#role-based-access-control-rbac)

**Error Handling & Debugging**  - [Error Handling](#error-handling-in-nodejs-applications)  - [Logging Errors](#logging-errors)  - [Debugging](#debugging-nodejs-applications)  - [Error handling in REST APIs](#error-handling-in-rest-apis)  - [Data Validation](#data-validation) **Deployment & Scaling**  - [Deploying into Production](#deploying-a-nodejs-application-to-production)  - [Scaling](#scaling-nodejs-applications-for-high-traffic)  - [Clustering](#clustering-in-nodejs-for-performance-improvement)  - [PM2](#pm2)  - [Load Balancing](#load-balancing)  - [Microservices Communication](#microservices-communication)

**Performance Optimization**  - [Performance Optimization](#performance-optimization) - [Strategies for Improving Performance](#strategies-for-improving-performance-in-nodejs-applications)  - [Profiling and Optimizing Latency](#profiling-and-optimizing-latency)  - [Common Performance Pitfalls](#common-performance-pitfalls)    - [Garbage Collection](#garbage-collection)

**API Design & Development**  - [REST API](#rest-api)    - [Pagination REST API](#implement-pagination-in-a-rest-api)  - [RESTful Folder Structure](#clean-restful-folder-structure)


**Event Handling**  - [Event Emitters](#event-emitters)  - [Process Object](#process-object)  - [WebSockets](#websockets-socketio-basics) - [WebSockets Drawbacks](#drawbacks-of-WebSockets)


**Package JSON**  - [package.json](#packagejson)  - [package.json vs package-lock.json](#packagejson-vs-package-lockjson)


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

### **Event Loop**


> Node.js uses the **libuv** library to implement its event loop, which provides a **non-blocking, asynchronous I/O model**. 
Although JavaScript itself runs on a **single thread**, 
Node achieves concurrency by offloading heavy I/O operations to the **libuv thread pool** or system APIs.

> The event loop is structured into **phases**, such as:
>
> * **Timers** – for `setTimeout` and `setInterval`.
> * **Pending Callbacks** – for deferred I/O errors.
> * **Poll** – where I/O events are retrieved.
> * **Check** – where `setImmediate` callbacks run.
> * **Close Callbacks** – for cleanup like `socket.on('close')`.
>
> Between each phase, Node processes **microtasks**, which include `Promise.then()` and `queueMicrotask()`, and even higher-priority tasks like `process.nextTick()`. These are **fully drained** before moving to the next phase.
>
> For example, `process.nextTick()` allows us to execute logic **before any other microtask or phase**, which is useful but must be used with care to avoid starving the event loop.
>
> Understanding these internals is essential when optimizing for **latency, throughput, or event loop lag**, especially in high-concurrency or real-time systems. I’ve used this knowledge to fine-tune performance, avoid blocking patterns, and handle backpressure in production systems.



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


**Execution Priority**

1.Current synchronous code runs (call stack).

2.All microtasks are processed (in order).

3.Then one macrotask runs.

4.Loop repeats.


---

### ⚙️ **Event Loop Phases (Simplified Order)**

1. **Timers**
   Executes `setTimeout()` and `setInterval()` callbacks.

2. **Pending Callbacks**
   Executes I/O callbacks deferred to the next loop iteration.

3. **Idle/Prepare**
   Internal use only.

4. **Poll**

   * Retrieves new I/O events.
   * Executes I/O callbacks (excluding close, timers, and `setImmediate()`).
   * If nothing is in the poll queue, it may:

     * Wait for callbacks.
     * Move to the **check** phase.

5. **Check**
   Executes `setImmediate()` callbacks.

6. **Close Callbacks**
   Executes close events like `socket.on('close')`.

---

### 🧠 **Microtasks vs Macrotasks**


| Category       | Description                                                                            | Examples                                                         |
| -------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **Microtasks** | Executed **immediately after the current operation**, before the next event loop tick. | `process.nextTick()`, `Promise.then()`, `queueMicrotask()`       |
| **Macrotasks** | Scheduled in specific **phases of the event loop**. They are executed one per tick.    | `setTimeout()`, `setInterval()`, `setImmediate()`, I/O callbacks |


 - Microtasks always run after the currently executing task and before the next phase begins.
 - process.nextTick() is a special kind of microtask that runs before other microtasks like Promises.
- process.nextTick(): Even higher — before other microtasks.
 - Microtasks: Higher priority, run between phases.
 - Macrotasks: Scheduled in specific phases of the event loop.


### **Behavior of `setImmediate()` vs `process.nextTick()`**:

* **`setImmediate()`**:
  * Executes in the **Check Phase**, after I/O events.
* **`process.nextTick()`**:
  * Executes immediately after the current operation, before any I/O tasks, including `setImmediate()`.

---

---

###  **Node.js Event Loop Example**

```js
const fs = require('fs');

console.log('Start');

setTimeout(() => console.log('Timer 1'), 0);
setImmediate(() => console.log('Immediate 1'));

fs.readFile(__filename, () => {
  console.log('File Read');
});

Promise.resolve().then(() => console.log('Promise resolved'));

console.log('End');
```

#### 🧾 **Expected Output (Most likely)**

```
Start
End
Promise resolved
Immediate 1
File Read
Timer 1
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


### **Async Execution Order**

```js
setTimeout(() => console.log("Timeout"), 0);
setImmediate(() => console.log("Immediate"));
process.nextTick(() => console.log("NextTick"));
console.log("Main");
```
**Output:**
```
Main
NextTick
Immediate
Timeout
```

🟢 **Priority Order**:
1. `console.log("Main")` → sync
2. `process.nextTick()` → runs before other microtasks
3. `setImmediate()` → check phase
4. `setTimeout()` → timer phase

---

### 🌐 **Request Handling in Node.js**

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


##  **Event Emitters**

- Node.js uses `EventEmitter` class to handle events.
- that can create, emit, and listen to custom events.

 Code Sample
```js
const EventEmitter = require('events');

const myEmitter = new EventEmitter();
myEmitter.on('greet', () => {
  console.log('Hello from EventEmitter!');
});

myEmitter.emit('greet');
```

---

##  **Streams**

- Handle large data chunks efficiently.
- Types: Readable, Writable, Duplex, Transform.

 Code Sample
```js
const fs = require('fs');

const readable = fs.createReadStream('file.txt');
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});
```

---

##  **Buffer**

- Represents binary data.
- Useful when dealing with streams.

 Code Sample
```js
const buf = Buffer.from('Hello');
console.log(buf); // <Buffer 48 65 6c 6c 6f>
console.log(buf.toString()); // Hello
```

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



## Summary of Key Differences:

* **Cluster Module**:

  * Creates multiple processes to handle requests across multiple CPU cores.
  * Used for **load balancing** and **multi-core utilization**.
* **Child Process**:

  * Executes external commands or scripts in separate processes.
  * Used for running shell commands or interacting with other applications.
* **Worker Threads**:

  * Runs JavaScript code in separate threads within the same process.
  * Ideal for **CPU-intensive tasks** that need parallel execution without blocking the main event loop.



### 📝 **Summary:**
- **Use Cluster**  --> **scaling Node.js servers** to use all CPU cores.
- **Use Child Process** --> **running external programs** or isolating code.
- **Use Worker Thread** --> **heavy JS computations** without blocking the main thread.


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


 ## Worker Threads

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
- Allows Node.js to create a multi-process application that utilizes multiple CPU cores.
- **Key Features**:
  - Forks child processes using `cluster.fork()`, each with its own event loop.
  - The master process can load balance requests between worker processes.
  - and  **communication via  IPC (Inter-Process Communication)** using process.send() and the 'message' event.
  - Improves performance by distributing tasks across multiple CPU cores for CPU-bound applications.
- **Example Usage**:
  ```javascript
  const cluster = require('cluster');
  const http = require('http');
  const numCPUs = require('os').cpus().length;

  if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died`);
    });
  } else {
    http.createServer((req, res) => {
      res.writeHead(200);
      res.end('Hello World');
    }).listen(8000);
  }
  ```
##  Cluster Module

- The **Cluster module** in Node.js allows you to **create child processes (workers)** that all share the **same server port**.
- Built-in module used to **take advantage of multi-core systems**.
- Helps scale Node.js applications by **distributing incoming connections** across multiple processes.

---

###  **When to Use the Cluster Module:**
- To handle **high traffic** by using multiple CPU cores.
- When you need **fault isolation** — a crash in one worker doesn't affect others.
- To **improve performance and concurrency** in production apps (e.g., Express servers).
- When your application is **CPU-intensive** and can benefit from parallel processing.

---

### ⚙️ **How It Works:**
- The **master process** manages multiple **worker processes**.
- Workers are **exact copies** of the Node.js app but run in **separate memory spaces**.
- The master process handles **load balancing** (using OS or custom logic).

---

###  **Simple Example:**

```js
const cluster = require('cluster');
const http = require('http');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Listen for dying workers
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    // Optionally fork a new one
    cluster.fork();
  });

} else {
  // Workers share the same TCP connection
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Handled by worker ${process.pid}`);
  }).listen(3000);

  console.log(`Worker ${process.pid} started`);
}
```

---

### 📌 **Key Features:**
- Built-in **load balancing** across CPU cores.
- Workers can communicate with the master via **IPC messages**.
- Each worker can be **monitored or restarted** independently.
- Ideal for **stateless** applications (or apps using shared storage like Redis/DB).

---

### ⚠️ **Limitations:**
- **Workers don't share memory** — need external store (e.g., Redis) for shared state.
- Not suitable for apps with **heavy memory usage per process**.
- Cluster logic adds **complexity** (e.g., handling worker restarts, sticky sessions).



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
- `spawn()` – Launches a new process with a given command.
- `exec()` – Runs a command in a shell and buffers the output (good for short commands).
- `execFile()` – Similar to `exec()`, but without a shell.
- `fork()` – Special case of `spawn()` for spawning **Node.js modules**, with built-in communication.

---

### 📦 **Example: Using `fork()`**
```js
const { fork } = require('child_process');

const child = fork('child.js');

child.on('message', (msg) => {
  console.log('Message from child:', msg);
});

child.send({ hello: 'from parent' });
```

**child.js**
```js
process.on('message', (msg) => {
  console.log('Message from parent:', msg);
  process.send({ reply: 'hello back!' });
});
```

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

##  **Cluster Module**

 

- Used to create child processes (workers) that share the same server port.
- Improves performance on multi-core systems.
- Each worker runs in its own thread/process.



```js
const cluster = require('cluster');
const http = require('http');
const os = require('os');

if (cluster.isMaster) {
  const cpuCount = os.cpus().length;
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) => {
    res.end(`Handled by worker ${process.pid}`);
  }).listen(3000);
}
```
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

 
- Cross-Origin Resource Sharing (CORS) is a browser security feature.
- that controls how resources are shared between different origins (domains, protocols, or ports).
- Node.js needs to set appropriate headers for cross-domain requests.
- Easily managed using the `cors` npm package.



```js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/', (req, res) => res.send('CORS Enabled'));
app.listen(3000);
```

---

## **CORS Middleware**

Use **CORS** to manage cross-origin requests, restricting access to certain origins.

```js
const cors = require('cors');
app.use(cors({ origin: "http://example.com" }));
```

---

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

##  **Rate Limiting APIs**

 

- Protects APIs from abuse or brute-force attacks.
- Implemented using middleware like `express-rate-limit`.



```js
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100, // Limit each IP to 100 requests
});

app.use(limiter);
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

---





## **JWT in Cookies vs Headers**

| Method |  Pros | ❌ Cons |
|--------|--------|---------|
| **Authorization Header** | Simple, stateless, widely used in APIs | Exposed to JS (XSS risk) |
| **HTTP-only Cookie** | More secure against XSS (not accessible via JS) | CSRF protection required |

---

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

- Use **caching** (e.g., Redis).
- Optimize **DB queries**.
- Enable **load balancing** and **clustering**.
- Use **Gzip compression**.
- Implement **lazy loading** to optimize resource loading.

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

---



## **Caching Strategies**

- **In-memory Caching**: Use **Redis** for frequently accessed data.
- **Cache Expiration**: Set TTL (Time to Live) to prevent stale data.
- **Lazy Loading**: Cache data only when required.

---

## **Microservices Communication**

- **Synchronous**: Use **HTTP REST** or **gRPC**.
- **Asynchronous**: Use **message queues** (RabbitMQ, Kafka) for decoupling services.

Example of an **event-driven** architecture:
```js
const emitter = new EventEmitter();
emitter.emit('userCreated', { userId: 1, name: 'John' });

emitter.on('userCreated', (data) => {
  console.log('User created:', data);
});
```

---

## **Load Balancing**

Distribute requests across multiple instances using tools like **PM2**, **Nginx**, or **HAProxy**.

```sh
pm2 start app.js -i max  # Start one instance per CPU core
```

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

- Functions that execute during the request-response cycle.
- Middleware functions execute before route handlers. 
- They can perform tasks like logging, authentication, and error handling.
- Can modify request, response objects.


 Code Sample
```js
const express = require('express');
const app = express();

// General middleware
app.use((req, res, next) => {
  console.log("Middleware running");
  next();  // Pass control to the next middleware
});

// Logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next middleware
};

app.use(logger);

// Route
app.get('/', (req, res) => {
  res.send('Home');
});

// Start server with callback
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

```

---

**Middleware in Express**

```ts
import { Request, Response, NextFunction } from 'express';

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
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
---


## **Callback Hell** 
      - refers to nested callbacks that make code unreadable and difficult to maintain.
      - Use **Promises** to flatten the callback chain.
      - Use **async/await** for better readability and linear flow.
      -  Modularize code into smaller functions for better maintainability.

- **Solutions**: 
  - **Promises**: Handles asynchronous behavior more cleanly with `.then()`, `.catch()`.
  - **Async/Await**: Allows asynchronous code to be written in a synchronous style, improving readability.

## Promise

A **Promise** is an object that represents the **eventual completion (or failure)** of an asynchronous operation and its resulting value.

It has **3 states**:

| State        | Description                            |
|--------------|----------------------------------------|
| `pending`    | Initial state, operation not complete  |
| `fulfilled`  | Operation completed successfully        |
| `rejected`   | Operation failed with an error          |

---

### Promise Basic Syntax

```js
const myPromise = new Promise((resolve, reject) => {
  // Async task here (e.g., API call)
  const success = true;

  if (success) {
    resolve("It worked!");
  } else {
    reject("It failed!");
  }
});
```

---

### Consuming a Promise

```js
myPromise
  .then(result => {
    console.log(result); // Output: It worked!
  })
  .catch(error => {
    console.error(error); // If rejected
  })
  .finally(() => {
    console.log("Done"); // Runs always
  });
```

---

### Promise Real-world Example (Fake API)

```js
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      success ? resolve({ name: "Alice" }) : reject("Error!");
    }, 1000);
  });
}

getUserData()
  .then(user => console.log(user.name))
  .catch(err => console.log(err));
```

---

## Promises vs Callbacks

| Callbacks                  | Promises                       |
|----------------------------|--------------------------------|
| Error-prone (callback hell) | Cleaner syntax                 |
| Difficult to debug         | Better error handling          |
| Nested structure           | Chainable (`.then`)            |

---



## **Promise Type**:

| Function             | Description                                                                 | Use Case |
|----------------------|-----------------------------------------------------------------------------|----------|
| `Promise.resolve()`  | Creates a **fulfilled** promise with a value                                | Simulating success |
| `Promise.reject()`   | Creates a **rejected** promise with a reason                                | Simulating error |
| `Promise.all()`      | Waits for **all** promises to resolve (or one to reject)                    | Run multiple tasks together |
| `Promise.allSettled()` | Waits for all promises to settle (fulfilled or rejected)                  | Get results of all, including errors |
| `Promise.race()`     | Resolves/rejects as soon as **one** promise(resolves or rejects) settles    | Timeout or fastest response |
| `Promise.any()`      | Resolves as soon as **any one succeeds** (ignores rejections)              | Get first successful result |




####  `Promise.resolve()`

```js
const p = Promise.resolve("Hello"); p.then(console.log); // "Hello"
```

#### ❌ `Promise.reject()`

```js
const p = Promise.reject("Something went wrong"); p.catch(console.error);
```

---

#### 🔗 `Promise.all()`

```js
const p1 = Promise.resolve(1); const p2 = Promise.resolve(2);
Promise.all([p1, p2]).then(results => console.log(results)); // [1, 2]
```

#### ⚠️ `Promise.allSettled()`

```js
const p1 = Promise.resolve("Done"); const p2 = Promise.reject("Failed");
Promise.allSettled([p1, p2]).then(results => console.log(results));
```

 Output:
```js
[  { status: 'fulfilled', value: 'Done' },  { status: 'rejected', reason: 'Failed' }]
```

---

#### ⚡ `Promise.race()`

```js
const slow = new Promise(res => setTimeout(() => res("Slow"), 1000));
const fast = new Promise(res => setTimeout(() => res("Fast"), 100));

Promise.race([slow, fast]).then(console.log); // "Fast"
```

---

#### 🌟 `Promise.any()`

```js
const p1 = Promise.reject("Fail 1");
const p2 = Promise.resolve("Success!");

Promise.any([p1, p2]).then(console.log); // "Success!"
```

---


##  **Scalability issues**
   - **Clustering**: Use the `cluster` module to utilize multi-core systems by spawning worker processes.
   - **Load Balancing**: Distribute incoming requests across multiple servers using NGINX, HAProxy, or AWS Elastic Load Balancer.
   - **Horizontal Scaling**: Deploy multiple instances of the application using containers (e.g., Docker) and orchestration tools like Kubernetes.
   - **Caching**: Use Redis or Memcached to cache frequently accessed data.
   - **Optimize Queries**: Use efficient database queries and indexing.

---

##  **Data consistency across distributed services?**
   - Use distributed transaction mechanisms like **two-phase commit**.
   - Implement **event-driven architecture** with message brokers (e.g., Kafka, RabbitMQ) for eventual consistency.
   - Use database strategies like **write-ahead logs** and **saga patterns** for managing consistency.

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

---

## **HTTP methods && use cases?**
| Method | Use Case |
|--------|----------|
| `GET` | Retrieve data |
| `POST` | Create new data |
| `PUT` | Replace entire object |
| `PATCH` | Modify a few fields |
| `DELETE` | Remove data |

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

## **REST API design principles?**
- Use **nouns**, not verbs in URIs: `/users`, not `/getUsers`
- Use proper HTTP methods
- Use **plural nouns** for collections
- Return appropriate status codes
- Version your API: `/api/v1/users`
- Support filtering, pagination, and sorting with query params

---

## **Versioning in REST APIs?**

Via URL versioning:
```ts
GET /api/v1/users
```
Or via headers (less common):
```http
GET /users
Accept: application/vnd.company.v1+json
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
- Use a centralized error middleware
- Send structured error responses
```ts
res.status(400).json({ error: 'Email is required' });
```

Custom Error Handler:
```ts
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ error: err.message });
});
```

---

## **Secure REST APIs?**
- Use HTTPS
- Implement authentication (JWT, OAuth)
- Add rate limiting
- Sanitize inputs to prevent XSS/SQL injection
- Use helmet and CORS

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


### Callback Vs Promise Vs AsyncAwait

## **Promise vs Async/Await**:
- **Promises**: Use `.then()` and `.catch()` for chaining async calls.
- **Async/Await**: More readable and concise for handling asynchronous operations.
- Promises simplify callbacks but can still become complex.
- **Async/await** allows writing asynchronous code like synchronous code, improving readability.
- Async/await works on top of promises and eliminates `.then()` chains.


| **Aspect**                     | **Callback**                                     | **Promise**                                          | **Async/Await**                                       |
|---------------------------------|--------------------------------------------------|------------------------------------------------------|------------------------------------------------------|
| **Definition**                  | A function passed as an argument to another function and executed once the task is completed. | An object representing the eventual completion (or failure) of an asynchronous operation. | A syntactic sugar over Promises, allowing asynchronous code to look synchronous. |
| **Syntax**                      | `function example(callback) { callback(err, result); }` | `let promise = new Promise((resolve, reject) => {...});` | `async function example() { let result = await promise; }` |
| **Control Flow**                | Hard to read and maintain with nested callbacks (callback hell). | Flat and more readable compared to callbacks.         | More readable and similar to synchronous code with `await`. |
| **Error Handling**              | Errors are handled by checking the `err` parameter in the callback. | Errors are handled using `.catch()`.                  | Errors are handled with `try/catch` blocks.            |
| **Handling Asynchronous Code**  | Each operation is executed after the previous one completes. | Handles asynchronous code by chaining `.then()` for success and `.catch()` for errors. | Allows asynchronous operations to be written like synchronous code using `await`. |
| **Readability**                 | Hard to read, especially with deeply nested callbacks (callback hell). | Easier to read and maintain than callbacks, but still has chaining. | Clean, readable, and close to synchronous code structure. |
| **Error Propagation**           | Requires manual error handling in every callback. | Uses `.catch()` to propagate errors through the chain. | Errors are propagated through `try/catch` blocks. |
| **Nested Operations**           | Leads to callback hell with nested asynchronous operations. | Can chain multiple asynchronous operations using `.then()`. | Simplifies nested asynchronous calls using `await` in a sequential manner. |
| **Chaining**                    | Not supported, but can be manually implemented. | Chaining is built-in with `.then()` and `.catch()`.   | Chaining can be done using `await` for cleaner code. |
| **Best Use Case**               | Simple asynchronous tasks with a single callback. | Complex async operations that require chaining or error handling. | Cleaner async functions, especially with multiple asynchronous operations in a sequence. |
| **Example**                     | ```fs.readFile('file.txt', (err, data) => { console.log(data); });``` | ```fetch(url).then(response => response.json()).then(data => console.log(data));``` | ```async function fetchData() { let data = await fetch(url); console.log(data); }``` |





### **Securing Sensitive Data**

- **Use Environment Variables**  
  Store secrets (e.g., DB passwords, API keys) in environment variables using `.env` files and `dotenv` package.

- **Encryption at Rest and In Transit**  
  - Use **HTTPS** with TLS for data in transit.  
  - Use libraries like `crypto` or `bcrypt` for encrypting sensitive fields (e.g., passwords).

- **Password Hashing**  
  - Never store plain text passwords.  
  - Use **bcrypt** or **argon2** for secure hashing with salting.

- **Access Control and Least Privilege**  
  - Only allow access to sensitive data for authenticated and authorized users.  
  - Enforce **role-based access control (RBAC)**.

- **Secure Storage for Tokens & Secrets**  
  - Store JWTs securely (e.g., in HTTP-only cookies).  
  - Use secret management tools (e.g., HashiCorp Vault, AWS Secrets Manager).

- **Input Validation & Sanitization**  
  - Prevent injection attacks by validating user inputs using `Joi`, `express-validator`, or similar libraries.

- **Avoid Logging Sensitive Info**  
  - Mask or omit sensitive fields from logs (e.g., passwords, tokens, card details).

- **Use Helmet.js**  
  - Adds security headers (e.g., `X-Content-Type-Options`, `X-XSS-Protection`) to protect data integrity.

- **Database-Level Security**  
  - Use parameterized queries or ORMs to prevent SQL Injection.  
  - Encrypt sensitive columns in the database if required.

- **Regular Security Audits**  
  - Run `npm audit` to check for vulnerable dependencies.  
  - Keep dependencies updated.

---













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

### **Scaling Node.js Applications for High Traffic**

- **Stateless Design**:
  - Design APIs and services to be stateless so they can scale horizontally (multiple instances).
- **Load Balancing**:
  - Use **Nginx, AWS ELB**, or **HAProxy** to distribute requests among instances.
- **Caching**:
  - Use **Redis or Memcached** for frequent reads and rate-limiting.
  - Leverage HTTP caching and CDN (like Cloudflare).
- **Database Optimization**:
  - Use indexing, query optimization, and read-replicas.
- **Microservices** (Optional at scale):
  - Break the monolith into smaller, independently deployable services.

---

### **Clustering in Node.js for Performance Improvement**

- **Single-thread Limitation**:
  - Node.js runs on a single thread (event loop), so it can’t fully utilize multi-core CPUs by default.
- **Cluster Module**:
  - The built-in `cluster` module lets you fork multiple worker processes (each on a different CPU core).
  - Each process shares the same server port.
- **Benefits**:
  - Better CPU utilization
  - Increased throughput
  - Fault tolerance – if one worker crashes, others continue
- **Implementation**:
  - Use `cluster.fork()` in the master process.
  - Share sockets among workers using `server.listen(...)`.

---


*



---

###  **Strategies for Improving Performance in Node.js Applications**
- **Use Asynchronous APIs:** Node.js is non-blocking by nature. Leverage asynchronous functions (like `fs.promises` or async/await) instead of blocking operations to keep the event loop responsive.
- **Caching:** Use in-memory caching (e.g., Redis or in-process memory) for frequent and expensive operations like database queries or API responses.
- **Database Optimization:** Use indexing, connection pooling, and ORM optimizations to minimize query response times.
- **Efficient Code Practices:** Avoid synchronous loops or large JSON operations in a single tick. Use streams for large data processing instead of loading all at once.
- **HTTP Compression & Minification:** Enable gzip compression, and minify CSS/JS to reduce response size and speed up load times.

---

###  **Profiling and Optimizing Latency**
- **Tools for Profiling:** Use tools like Chrome DevTools, `node --inspect`, `clinic.js`, or `node-timing` to identify bottlenecks in memory and CPU.
- **Event Loop Monitoring:** Measure the event loop lag with tools like `event-loop-lag` to ensure no function blocks the loop.
- **Code-Level Metrics:** Add monitoring to measure response time, memory usage, garbage collection stats, and slow queries.
- **Lazy Loading and Code Splitting:** Load only necessary modules or parts of code to reduce startup time and memory consumption.

---

###  **Common Performance Pitfalls**
- **Blocking the Event Loop:** Avoid CPU-intensive tasks like hashing, loops, or parsing huge data inside the main thread; offload to worker threads or external services.
- **Memory Leaks:** Unreleased timers, large cache objects, or global variables can lead to high memory usage and slowdowns over time.
- **Unoptimized Middleware Stack:** Too many middlewares or heavy synchronous logic in middleware can slow down requests.
- **Inefficient Logging:** Excessive logging, especially to files synchronously, can severely affect performance.
- **Neglecting Load Balancing:** Without proper load balancing or clustering, a single Node.js process might become a bottleneck under heavy traffic.

---




---

###  **Error Handling in Node.js Applications**
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
- **JWT (JSON Web Token)** is used for stateless authentication in web applications.
- **Login process**: 
  -  after successful login , Server generates a token, using user details and a secret key.
  - The token includes encoded user information and expiration data.
  - The token is sent to the client and stored (usually in `localStorage` or `sessionStorage`).
- **On each request**:
  - The client includes the token in the `Authorization` header (`Bearer <token>`).
  - The server verifies the token using a secret key and grants access to protected resources.
- JWT allows you to scale easily since the server doesn’t need to store session information.
- Commonly used libraries: `jsonwebtoken` for signing and verifying tokens.
- Ensure secure handling of secrets using environment variables, and set token expiration to limit the window for token misuse.


JWT is a compact token format used for securely transmitting info between parties. It’s signed and optionally encrypted.

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

