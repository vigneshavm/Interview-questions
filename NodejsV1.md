

##  **Node.js Architecture**

- Node.js uses a **single-threaded** event loop architecture.
- Built on **Chrome's V8** JavaScript engine.
- Uses **libuv** to handle asynchronous I/O.
- Designed for **non-blocking**, **event-driven** applications.

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

##  **Event Loop**

- Core of Node.js concurrency model.
- Handles asynchronous operations using a queue system.
- Executes callbacks from timers, I/O events, etc.

 Code Sample
```js
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('End');
```

**Output:**
```
Start
End
Timeout
```

---

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

##  **Middleware in Express**

- Functions that execute during the request-response cycle.
- Can modify request, response objects.

 Code Sample
```js
const express = require('express');
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);

app.get('/', (req, res) => {
  res.send('Home');
});

app.listen(3000);
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

##  **Streams (Readable, Writable, Duplex, Transform)**

 

- Streams are memory-efficient for reading/writing large data.
- Types:
  - **Readable**: Used for reading operations.
  - **Writable**: Used for writing operations.
  - **Duplex**: Both read and write.
  - **Transform**: Modify data while reading/writing.



```js
const fs = require('fs');
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

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

##  **CORS in Node.js**

 

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


## ** Difference Between CommonJS and ES Modules**

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

---

## ** Explain Streams in Node.js**

Streams process large data efficiently by handling it in chunks, avoiding memory overload.

- **Readable**: Data source (e.g., `fs.createReadStream()`).
- **Writable**: Data destination (e.g., `fs.createWriteStream()`).
- **Duplex**: Both readable and writable.
- **Transform**: Modify data as it flows.

```js
const fs = require("fs");
const readStream = fs.createReadStream("file.txt");
readStream.on("data", chunk => console.log(chunk));
```

---

## ** Error Handling in Node.js**

- **Synchronous**: `try-catch`.
- **Asynchronous**: `Error-first callback pattern`, `Promises`, `Async/Await`.

```js
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});
```

---

## ** Middleware in Express.js**

Middleware functions execute before route handlers. They can perform tasks like logging, authentication, and error handling.

```js
app.use((req, res, next) => {
  console.log("Middleware running");
  next();  // Pass control to the next middleware
});
```

---

## ** Event Loop Phases**

The Node.js **event loop** manages asynchronous operations and includes these phases:
 **Timers** (`setTimeout`, `setInterval`)
 **Pending I/O**
 **Idle/Prepare**
 **Poll** (Handles I/O events)
 **Check** (`setImmediate`)
 **Close Callbacks**

---

## ** Authentication vs Authorization**

- **Authentication**: Verifies user identity (e.g., login).
- **Authorization**: Determines what resources a user can access.

---

## ** JWT (JSON Web Token) Flow**

 **User logs in** → Server generates JWT.
 **JWT Structure**: Header (algorithm), Payload (user data), Signature (hash).
 **Client sends JWT** in the `Authorization` header.
 **Server verifies** JWT before granting access.

---

## ** Securing a Node.js App**

- Use **HTTPS**.
- Validate **input data**.
- Use **Helmet** for HTTP headers security.
- Prevent **SQL injection** with ORMs.
- Enable **rate limiting**.
- Run **npm audit** for vulnerabilities.

---

## ** Performance Optimization**

- Use **caching** (e.g., Redis).
- Optimize **DB queries**.
- Enable **load balancing** and **clustering**.
- Use **Gzip compression**.
- Implement **lazy loading** to optimize resource loading.

---

## ** Worker Threads in Node.js**

Worker threads offload CPU-intensive tasks to separate threads, ensuring the main thread isn't blocked.

---

## ** CORS Middleware (Cross-Origin Resource Sharing)**

Use **CORS** to manage cross-origin requests, restricting access to certain origins.

```js
const cors = require('cors');
app.use(cors({ origin: "http://example.com" }));
```

---

## ** Caching Strategies in Node.js**

- **In-memory Caching**: Use **Redis** for frequently accessed data.
- **Cache Expiration**: Set TTL (Time to Live) to prevent stale data.
- **Lazy Loading**: Cache data only when required.

---

## ** Microservices Communication**

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

## ** Load Balancing in Node.js**

Distribute requests across multiple instances using tools like **PM2**, **Nginx**, or **HAProxy**.

```sh
pm2 start app.js -i max  # Start one instance per CPU core
```

---

## ** Handling Large File Uploads**

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

## ** Dependency Injection in Node.js**

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

## ** Database Transactions in Node.js**

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

## ** Data Validation in Node.js with TypeScript**

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


