



| Questions1 | Questions2 | Questions3 |Questions4 | Questions5 | Questions6 | Questions7 | Questions8 |
| --- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| [Create Node App using JS](#create-node-app-using-js) | [Create Node App using TypeScript](#create-node-app-using-typescript) | [.ts vs .d.ts files](#ts-vs-dts-files) | [ts-node](#ts-node) | [Node.js with TypeScript](#nodejs-with-typescript) | [Node.js Architecture](#nodejs-architecture) | [Streams](#streams) | [Buffer](#buffer) |
| [Single-Threaded Nature](#single-threaded-nature) | [Handling CPU-Intensive Tasks](#handling-cpu-intensive-tasks) | [Event Loop](#event-loop) | [Event Emitters](#event-emitters)  [Process Object](#process-object) | [Child Processes](#child-processes) | [Cluster Module](#cluster-module) | [Process & Threads](#process--threads) | [Middleware](#middleware) |
| [Worker Threads](#worker-threads) | [Scalability issues](#scalability-issues) | [Data consistency across distributed services](#data-consistency-across-distributed-services) | [Performance Optimization](#performance-optimization) | [Load Balancing](#load-balancing) | [Manage security](#manage-security) | [Secure REST APIs](#secure-rest-apis) |[Type safety across layers](#type-safety-across-layers) |
| [JWT in Cookies vs Headers](#jwt-in-cookies-vs-headers) | [Secure Node.js App](#secure-nodejs-app) | [REST API](#rest-api) | [HTTP methods & use cases](#http-methods--use-cases) | [RESTful structure](#restful-structure) | [REST API design principles](#rest-api-design-principles) | [Versioning in REST APIs](#versioning-in-rest-apis) | [Handling Large File Uploads](#handling-large-file-uploads) |
| [Pagination REST API](#implement-pagination-in-a-rest-api)| [Status codes](#status-codes) | [Error handling in REST APIs](#error-handling-in-rest-apis) | [Clean RESTful Folder Structure](#clean-restful-folder-structure) | [JWT](#jwt) | [JWT Auth Works](#jwt-auth-works) | [Protected Route](#protected-route) | [Role-Based Access Control](#role-based-access-control-rbac) | [Refresh Tokens](#refresh-tokens) |
| [Authentication vs Authorization](#authentication-vs-authorization) | [JWT Flow](#jwt-flow)| [WebSockets](#websockets-socketio-basics) | [CORS](#cors) | [CORS Middleware](#cors-middleware) | [Rate Limiting APIs](#rate-limiting-apis) | [Environment Variables and dotenv](#environment-variables-and-dotenv)| [Node.js with Redis (Caching)](#nodejs-with-redis-caching) | [Caching Strategies](#caching-strategies)| [CommonJS vs ES Modules](#commonjs-vs-es-modules) |
| [Error Handling](#error-handling)| [Dependency Injection](#dependency-injection) | [Microservices Communication](#microservices-communication)| [Database Transactions](#database-transactions) | [Data Validation](#data-validation) | [Asynchronous operations](#asynchronous-operations) | [Callback Hell](#callback-hell) | [Promise vs Async/Await](#promise-vs-asyncawait) | [Promise.all() vs Promise.race()](#promiseall-vs-promiserace) | [Express request/response objects](#express-requestresponse-objects) 
  

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

 Code Sample
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

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


---

## **Secure Node.js App**

- Use **HTTPS**.
- Validate **input data**.
- Use **Helmet** for HTTP headers security.
- Prevent **SQL injection** with ORMs.
- Enable **rate limiting**.
- Run **npm audit** for vulnerabilities.

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

## **Promise vs Async/Await**:
- **Promises**: Use `.then()` and `.catch()` for chaining async calls.
- **Async/Await**: More readable and concise for handling asynchronous operations.
- Promises simplify callbacks but can still become complex.
- **Async/await** allows writing asynchronous code like synchronous code, improving readability.
- Async/await works on top of promises and eliminates `.then()` chains.

## **`Promise.all()` vs `Promise.race()`**:
- **`Promise.all()`**: Resolves when **all** promises are completed.
- **`Promise.race()`**: Resolves when **the first** promise resolves or rejects.


##  **Scalability issues ?**
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

##  **Manage security**
   - **Input Validation**: Use libraries like Joi or Express-validator to validate inputs.
   - **Sanitize Data**: Prevent SQL injections and XSS attacks.
   - **Authentication**: Use JWT or OAuth for secure authentication.
   - **Environment Variables**: Store secrets securely using `dotenv` or AWS Secrets Manager.
   - **Rate Limiting**: Use middleware to limit requests (e.g., `express-rate-limit`).
   - **Helmet**: Protect HTTP headers for Express apps.

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



## JWT
JWT is a compact token format used for securely transmitting info between parties. It’s signed and optionally encrypted.

---

## **JWT Auth Works**
1. User logs in → Server validates credentials
2. Server generates a token (signed with a secret)
3. Client sends the token with each request (usually in `Authorization` header)
4. Server verifies the token before processing the request

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




