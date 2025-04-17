

| **Category**                               | **Topics**                                                                                                                                                                        |
|--------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Node.js Basics**                         | [Create Node App using JS](#create-node-app-using-js), [Create Node App using TypeScript](#create-node-app-using-typescript), [Node.js with TypeScript](#nodejs-with-typescript) |
| **Node.js Architecture**                   | [Node.js Architecture](#nodejs-architecture), [Node.js handle multiple requests](#nodejs-handle-multiple-requests), [Single-Threaded Nature](#single-threaded-nature), [Scalability issues](#scalability-issues)                                       |
| **Asynchronous Programming**               | [Callback Hell](#callback-hell), [Promise](#promise), [Promise vs Async/Await](#promise-vs-asyncawait),  [Promise Type](#Promise-Type)           |
| **Concurrency & Processes**                | [Event Loop](#event-loop), [Worker Threads](#worker-threads), [Child Processes](#child-processes), [Cluster Module](#cluster-module)                                            |
| **Event Handling**                         | [Event Emitters](#event-emitters), [Process Object](#process-object)           [WebSockets](#websockets-socketio-basics),                                                             |
| **Security**                    | [Secure Node.js App](#secure-nodejs-app),  [HTTP Methods](#http-methods--use-cases), [HTTP Status Codes](#status-codes)   ,                [CORS](#cors) , [Middleware](#middleware), [Helmet](#Helmet)  ,[Rate Limiting APIs](#rate-limiting-apis)  |
| **Authentication & Authorization**         | [Authentication vs Authorization](#authentication-vs-authorization), [JWT](#jwt),[Refresh Tokens](#refresh-tokens), [JWT in Cookies vs Headers](#jwt-in-cookies-vs-headers), [Protected Route](#protected-route), [Role-Based Access Control](#role-based-access-control-rbac)                    |
| **Caching & Optimization**                 | [Caching Strategies](#caching-strategies), [Node.js with Redis (Caching)](#nodejs-with-redis-caching), [Performance Optimization](#performance-optimization)                     |
| **API Design & Development**               | [REST API](#rest-api),[Secure REST APIs](#secure-rest-apis), [Pagination REST API](#implement-pagination-in-a-rest-api), [Clean RESTful Folder Structure](#clean-restful-folder-structure)|
| **Error Handling & Validation**            | [Error handling in REST APIs](#error-handling-in-rest-apis), [Error Handling](#error-handling), [Data Validation](#data-validation)                                            |
| **Package Json**                        |  [package json](#package-json)   , [package.json vs package-lock.json](#packagejson-vs-package-lockjson)                                                                         |
| **Database & Transactions**                | [Database Transactions](#database-transactions), [Data consistency across distributed services](#data-consistency-across-distributed-services)                                |
| **Deployment & Scaling**                   | [Load Balancing](#load-balancing),  [Microservices Communication](#microservices-communication)        |
| **Garbage Collection**                   | [Garbage Collection](#Garbage-Collection)|





---


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

##  **Node.js Architecture**

- Node.js is a runtime environment that allows JavaScript to run on the server side.
- Built on Chrome's V8 JavaScript engine.
- Uses libuv to handle asynchronous I/O.
- Designed for non-blocking, event-driven, and single-threaded applications.
- Ideal for scalable network applications.

Node.js is **event-driven, single-threaded, and asynchronous**, built on top of:

- **Chrome's V8 engine** – executes JavaScript code.
- **libuv** – handles the event loop, thread pool, and asynchronous I/O.
- **C/C++ bindings** – for low-level system operations.

---

### 🧠 **Core Components**

| Component         | Role                                                                 |
|------------------|----------------------------------------------------------------------|
| **V8 Engine**     | Converts JS to machine code (Just-in-Time compilation)               |
| **Event Loop**    | Orchestrates execution, handles non-blocking I/O using events/callbacks |
| **libuv**         | Provides multi-threaded support for I/O tasks, timers, etc.          |
| **Thread Pool**   | Background worker threads to offload blocking I/O operations         |
| **Callback Queue**| Stores callbacks ready for execution                                 |
| **Microtask Queue**| Promises, process.nextTick tasks                                     |
| **Node APIs**     | HTTP, fs, crypto, etc. expose native functionality to JS layer       |


---

## **Node.js Request Handling Flow**


---
### **1️⃣ Client Sends an HTTP Request**
### **2️⃣ Node.js Accepts the Request (via HTTP Module or Express)**
Express handles this using Node's internal HTTP module.
### **3️⃣ Request Goes Through Middleware**
### **4️⃣ Route Handler is Matched**
### **5️⃣ If Synchronous → Executes on the Call Stack**
```js
app.get('/ping', (req, res) => {
  res.send('pong'); // Simple sync response
});
```
- Quick code runs directly on the **call stack**
- Response is sent immediately
---
### **6️⃣ If Asynchronous → Delegated to libuv**
```js
app.get('/users', async (req, res) => {
  const users = await db.getAllUsers();  // Async DB call
  res.json(users);
});
```
- `db.getAllUsers()` is an async operation (e.g., DB query)
- Node offloads it to the **libuv thread pool**
- Doesn’t block other incoming requests
- When ready, the result is sent to the **callback queue**
---
### **7️⃣ Event Loop Watches Call Stack and Callback Queue**
- Event loop keeps checking:
  - Is the call stack empty?
  - Are there callbacks ready to run?
- If yes, it pushes them into the **call stack**
This is how non-blocking works.
---
### **8️⃣ Callback Runs → Response is Sent**
Once the async operation is ready:
```js
res.json(users); // Sends JSON response back to client
```
The event loop pushes this function onto the stack, and Node.js sends the response.
---
---

### 🔄 **Node.js Execution Flow (In Detail)**

#### 1. **Incoming Request**
   - Client sends an HTTP request to the server.

#### 2. **Call Stack Execution**
   - If the code is synchronous, it runs immediately on the **call stack**.

#### 3. **Asynchronous Code Delegation**
   - For async tasks (e.g., file system access, DB calls, timers, crypto), Node.js delegates them to:
     - `libuv` thread pool (for file I/O, DNS, crypto, etc.)
     - OS kernel (e.g., TCP sockets) for network operations.

#### 4. **Event Loop Phases**
Node.js Event Loop runs in **phases**, executing tasks based on their type:

| Phase                 | Handles                                 |
|----------------------|------------------------------------------|
| **1. Timers**        | `setTimeout`, `setInterval` callbacks     |
| **2. Pending Callbacks** | Some system-level operations              |
| **3. Idle/Prepare**  | Internal use                             |
| **4. Poll**          | Checks I/O (file, network, etc.)         |
| **5. Check**         | Executes `setImmediate()` callbacks       |
| **6. Close Callbacks** | Handles things like `socket.on('close')` |

💡 **Microtasks queue** (`Promise.then`, `process.nextTick`) is handled **after every phase**, giving them high priority.

#### 5. **Callback Execution**
   - Once an async task completes, its callback is queued in the **Callback Queue** (or Microtask Queue).
   - Event Loop picks it up when the call stack is clear.

#### 6. **Response Sent**
   - The callback logic eventually sends a response back to the client.

---

### 🎯 Example: File Read API

```js
const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
  console.log('File content:', data);
});

console.log('Request received!');
```

### 🎯 Example: HTTP Server
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

#### Behind the scenes:

1. `fs.readFile` is async → delegated to thread pool via libuv.
2. `console.log('Request received!')` runs immediately.
3. Once file is read, callback is pushed to Event Queue.
4. Event Loop picks it up and executes `console.log('File content:', data)`.

---

### 🧵 Thread Pool (libuv – 4 threads by default)

Used for:

- File system operations
- DNS (without cache)
- Some crypto operations
- Compression

You can configure it via:
```bash
UV_THREADPOOL_SIZE=8 node app.js
```

---

### 🚀 Why Node.js is Fast (Even Though It's Single-threaded):

- It doesn't block the main thread.
- It offloads heavy tasks.
- It handles **10,000+ concurrent connections** using async callbacks, not threads per request like Java/Apache.

---

### 🧩 Real-World Use Cases

| Use Case                  | Why Node.js is Ideal                                 |
|---------------------------|------------------------------------------------------|
| Real-time apps (chat, games) | Event-driven, WebSocket support                     |
| REST APIs                  | Lightweight, fast response with async I/O           |
| Microservices              | Easy to scale, non-blocking                         |
| Proxy servers              | Handle high concurrency with minimal resources      |
| Streaming services         | Built-in Stream API for reading/writing in chunks   |

---

---

## **Node.js with TypeScript?**

- TypeScript adds static typing to JavaScript, helping developers catch errors during development, improve code readability, and enable better IDE support.
- This is particularly helpful in large-scale Node.js projects.

---

## **Event Loop**

**Phases of the Event Loop:**
-  **Timers**: Executes the callbacks for `setTimeout` and `setInterval`.
-  **Pending Callbacks**: Handles I/O callbacks (e.g., TCP callbacks).
-  **Idle/Prepare**: Internal phase for system operations.
-  **Poll**: Waits for new I/O events and executes callbacks when ready.
-  **Check**: Executes `setImmediate` callbacks.
-  **Close Callbacks**: Handles events such as `close` event listeners.

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


##  **Event Emitters**

- Node.js uses `EventEmitter` class to handle events.
- You can create, emit, and listen to custom events.

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

##  **Child Processes**

- Enables spawning of subprocesses.
- Useful for CPU-intensive tasks.

 Code Sample
```js
const { exec } = require('child_process');

exec('ls', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
```

---

##  **Cluster Module**

- Enables creation of child processes that share server ports.
- Used to utilize multi-core systems.

 Code Sample
```js
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World');
  }).listen(8000);
}
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

- **Authentication**: Verifies user identity (e.g., login).
- **Authorization**: Determines what resources a user can access.

---




## JWT
JWT is a compact token format used for securely transmitting info between parties. It’s signed and optionally encrypted.

---

## **JWT Auth Works**
1. User logs in → Server validates credentials
2. Server generates a token (signed with a secret)
3. Client sends the token with each request (usually in `Authorization` header)
4. Server verifies the token before processing the request

---


## **JWT Flow**

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

 🧪 Testing

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

## **JWT in Cookies vs Headers**

| Method | ✅ Pros | ❌ Cons |
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

| ✅ **Practice** | 📋 **Explanation** | 🛠️ **Example / Tool** |
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

Worker threads offload CPU-intensive tasks to separate threads, ensuring the main thread isn't blocked.

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
- Can modify request, response objects.
- Middleware functions execute before route handlers. They can perform tasks like logging, authentication, and error handling.

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


## **Promise vs Async/Await**:
- **Promises**: Use `.then()` and `.catch()` for chaining async calls.
- **Async/Await**: More readable and concise for handling asynchronous operations.
- Promises simplify callbacks but can still become complex.
- **Async/await** allows writing asynchronous code like synchronous code, improving readability.
- Async/await works on top of promises and eliminates `.then()` chains.

## **Promise Type**:

| Function             | Description                                                                 | Use Case |
|----------------------|-----------------------------------------------------------------------------|----------|
| `Promise.resolve()`  | Creates a **fulfilled** promise with a value                                | Simulating success |
| `Promise.reject()`   | Creates a **rejected** promise with a reason                                | Simulating error |
| `Promise.all()`      | Waits for **all** promises to resolve (or one to reject)                    | Run multiple tasks together |
| `Promise.allSettled()` | Waits for all promises to settle (fulfilled or rejected)                  | Get results of all, including errors |
| `Promise.race()`     | Resolves/rejects as soon as **one** promise(resolves or rejects) settles    | Timeout or fastest response |
| `Promise.any()`      | Resolves as soon as **any one succeeds** (ignores rejections)              | Get first successful result |




#### ✅ `Promise.resolve()`

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

✅ Output:
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
| `PUT` | Update/replace existing data |
| `PATCH` | Partially update data |
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

### 🔹 **1xx – Informational**

| Code | When to Return                                     |
|------|----------------------------------------------------|
| 100  | Used internally by some HTTP clients (rarely used manually) |
| 101  | When switching protocols (e.g., HTTP → WebSocket)  |

---

### 🔹 **2xx – Success**

| Code | When to Return | Example |
|------|----------------|---------|
| **200 OK** | Standard response for successful GET, PUT, or PATCH request | `GET /users/5` returns user info |
| **201 Created** | Resource successfully created | `POST /users` to add a new user |
| **202 Accepted** | Request accepted but processing happens asynchronously | Upload processing |
| **204 No Content** | Successful request but no content to return | `DELETE /users/5` or `PUT` with no change |

---

### 🔹 **3xx – Redirection**

| Code | When to Return | Example |
|------|----------------|---------|
| **301 Moved Permanently** | Resource has permanently moved to a new URL | Redirecting from old domain |
| **302 Found** | Temporarily redirect to another URL | Login redirects temporarily |
| **304 Not Modified** | Use cached version, no update since last fetch | Used with ETags or `If-Modified-Since` header |

---

### 🔹 **4xx – Client Errors**

| Code | When to Return | Example |
|------|----------------|---------|
| **400 Bad Request** | Invalid data from client | Missing required fields, bad JSON |
| **401 Unauthorized** | No or invalid authentication token | User not logged in (User isn’t authenticated) |
| **403 Forbidden** | Authenticated but not allowed to access the resource | User role not allowed(User is authenticated, but doesn’t have permission) |
| **404 Not Found** | Requested resource doesn’t exist | `GET /products/999` where product doesn’t exist |
| **409 Conflict** | Request conflicts with current state of server | Creating user with already-used email |
| **422 Unprocessable Entity** | Validation failed | Name too short, invalid email format |

---

### 🔹 **5xx – Server Errors**

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




## Protected Route
```ts
app.get('/profile', authenticateJWT, (req: Request, res: Response) => {
  res.json({ message: 'Secure user data' });
});
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

### 🔹 **1. `package.json`** – _The Project Manifest_

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

### 🔹 **2. `package-lock.json`** – _The Dependency Snapshot_

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
| Human editable?        | ✅ Yes                                  | ❌ No (auto-generated)                   |
| Version flexibility    | ✅ Allows version ranges                | ❌ Uses exact versions                   |
| Purpose                | Project definition & top-level deps    | Lock exact dependency tree              |
| Used in deployment?    | ✅ Yes                                  | ✅ Yes                                   |
| Required in Git repo?  | ✅ Yes                                  | ✅ Yes (for consistent builds)           |

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

## 🧪 Bonus Practical Questions

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

### 🔐 What Does Helmet Do?

| 🛡️ **Header**                | 🔍 **Purpose**                                                  |
|-----------------------------|------------------------------------------------------------------|
| `Content-Security-Policy`   | Prevents XSS by restricting sources of content                  |
| `X-Frame-Options`           | Prevents clickjacking by disallowing iframe embedding           |
| `Strict-Transport-Security` | Enforces HTTPS connections only                                 |
| `X-Content-Type-Options`    | Prevents browsers from MIME-type sniffing                       |
| `Referrer-Policy`           | Controls the amount of referrer info sent                       |
| `Cross-Origin-Embedder-Policy` | Required for using SharedArrayBuffer securely               |

---

### 🧪 Customizing Helmet:

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




