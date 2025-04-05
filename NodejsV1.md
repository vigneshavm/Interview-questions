

## 1. **Node.js Architecture**

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

## 2. **Event Loop**

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

## 3. **Event Emitters**

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

## 4. **Streams**

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

## 5. **Buffer**

- Represents binary data.
- Useful when dealing with streams.

 Code Sample
```js
const buf = Buffer.from('Hello');
console.log(buf); // <Buffer 48 65 6c 6c 6f>
console.log(buf.toString()); // Hello
```

---

## 6. **Middleware in Express**

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

## 7. **Process Object**

- Global object for current Node.js process.
- Access environment variables, exit process, etc.

 Code Sample
```js
console.log(`PID: ${process.pid}`);
console.log(`Platform: ${process.platform}`);
```

---

## 8. **Child Processes**

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

## 9. **Cluster Module**

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

## 10. **Global Objects**

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

## 1. **Process & Threads**

 

- Node.js runs on a single-threaded event loop architecture.
- It uses **libuv** under the hood for managing asynchronous operations via a pool of worker threads.
- CPU-bound tasks should be offloaded to child processes or worker threads.
- Suitable for I/O-bound, not CPU-bound applications.

### 💡 Sample Code

```js
console.log(`Main process PID: ${process.pid}`);
setTimeout(() => console.log('Async operation'), 1000);
```

---

## 2. **Cluster Module**

 

- Used to create child processes (workers) that share the same server port.
- Improves performance on multi-core systems.
- Each worker runs in its own thread/process.

### 💡 Sample Code

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

## 3. **Streams (Readable, Writable, Duplex, Transform)**

 

- Streams are memory-efficient for reading/writing large data.
- Types:
  - **Readable**: Used for reading operations.
  - **Writable**: Used for writing operations.
  - **Duplex**: Both read and write.
  - **Transform**: Modify data while reading/writing.

### 💡 Sample Code

```js
const fs = require('fs');
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);
```

---

## 4. **WebSockets (Socket.IO Basics)**

 

- Enables two-way, real-time communication between client and server.
- Used in chats, games, real-time dashboards.
- Socket.IO simplifies WebSocket implementation with fallback mechanisms.

### 💡 Sample Code

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

## 5. **CORS in Node.js**

 

- Cross-Origin Resource Sharing (CORS) is a browser security feature.
- Node.js needs to set appropriate headers for cross-domain requests.
- Easily managed using the `cors` npm package.

### 💡 Sample Code

```js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/', (req, res) => res.send('CORS Enabled'));
app.listen(3000);
```

---

## 6. **Environment Variables and dotenv**

 

- Secure and manage configuration outside of the source code.
- The `dotenv` package loads `.env` file variables into `process.env`.

### 💡 Sample Code

```env
PORT=3000
API_KEY=123456
```

```js
require('dotenv').config();
console.log(process.env.API_KEY);
```

---

## 7. **Rate Limiting APIs**

 

- Protects APIs from abuse or brute-force attacks.
- Implemented using middleware like `express-rate-limit`.

### 💡 Sample Code

```js
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100, // Limit each IP to 100 requests
});

app.use(limiter);
```

---

## 8. **Node.js with Redis (Caching)**

 

- Redis is used for caching, session storage, pub/sub.
- Reduces DB load by storing frequently accessed data.

### 💡 Sample Code

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

