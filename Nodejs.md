# **Node.js Interview Questions & Answers**  

### **1. What is the difference between CommonJS and ES Modules?**  
**Answer:**  
CommonJS and ES Modules are two different module systems used in JavaScript.  

- **CommonJS (`require`)** - Used in Node.js by default.  
- **ES Modules (`import/export`)** - Introduced in ES6 and is standard for modern JavaScript.  

**Example: CommonJS (Node.js Default)**  
```js
const fs = require("fs");
module.exports = { greet };
```

**Example: ES Modules**  
```js
export function greet() { console.log("Hello!"); }
import { greet } from "./module.js";
```

---

### **2. Explain Streams in Node.js.**  
**Answer:**  
Streams handle large amounts of data efficiently by processing chunks instead of loading everything into memory.  

- **Readable Streams** - Data source (e.g., `fs.createReadStream()`).  
- **Writable Streams** - Destination (e.g., `fs.createWriteStream()`).  
- **Duplex Streams** - Both readable and writable.  
- **Transform Streams** - Modify data as it passes through.  

```js
const fs = require("fs");
const readStream = fs.createReadStream("file.txt");
readStream.on("data", chunk => console.log(chunk));
```

---

### **3. How do you handle errors in Node.js?**  
**Answer:**  
Error handling in Node.js is done using:  
1. **Try-Catch Blocks (For synchronous code)**  
2. **Callbacks (Error-first pattern)**  
3. **Promises & `.catch()`**  
4. **Async/Await with Try-Catch**  

```js
// Callback Error Handling
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});
```

---

### **4. Explain Middleware in Express.js.**  
**Answer:**  
Middleware functions in Express.js are functions executed in sequence before sending the response.  

```js
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});

app.get("/", (req, res) => res.send("Hello World"));
app.listen(3000, () => console.log("Server started"));
```




---

### **Node.js Concepts**

#### **7. Node.js Architecture**  
- **Event-Driven, Non-Blocking I/O**  
- Components:  
  - **Event Loop** (Handles async operations)  
  - **Libuv** (Thread pool)  
  - **V8 Engine** (Executes JS)  
  - **C++ Bindings** (OS access)  

#### **8. Event Loop Phases**  
1. **Timers** (`setTimeout`, `setInterval`)  
2. **Pending I/O**  
3. **Idle/Prepare**  
4. **Poll** (New I/O events)  
5. **Check** (`setImmediate`)  
6. **Close Callbacks**  

#### **9. Worker Threads in Node.js**  
- **Offloads CPU-intensive tasks** to separate threads, preventing main thread blocking.  

#### **10. Securing a Node.js App**  
✅ Use **HTTPS**  
✅ Validate **input data**  
✅ Use **Helmet** for security headers  
✅ Prevent **SQL injection** with ORMs  
✅ Use **rate limiting**  
✅ Run **npm audit** for security checks  

#### **11. Performance Optimization**  
- Use **caching** (Redis)  
- Optimize **DB queries**  
- Use **clustering/load balancing**  
- Enable **Gzip compression**  
- Implement **lazy loading**  

#### **12. Helmet Middleware (Security Headers)**  
```js
const helmet = require('helmet');
app.use(helmet());
```

#### **13. CORS Middleware (Cross-Origin Requests)**  
```js
const cors = require('cors');
app.use(cors({ origin: "http://example.com" }));
```

---

### **Authentication & Authorization**

#### **9. Authentication vs Authorization**  
- **Authentication**: Verifies identity (e.g., login).  
- **Authorization**: Determines permissions (e.g., access control).  

#### **11. How JWT Works**  
1. **User logs in → Server generates JWT**  
2. **JWT structure**:  
   - **Header** (Algorithm & type)  
   - **Payload** (User data)  
   - **Signature** (Hash with secret key)  
3. **Client sends JWT in Authorization header**  
4. **Server verifies JWT before authorizing request**  

---

### **Express.js Middleware**

#### **10. Middleware in Express.js**  
- Functions executed before reaching the route handler.  
```js
app.use((req, res, next) => {
  console.log("Middleware running");
  next();
});
```


### **Node.js and Architecture Interview Questions & Answers** (Continued)

### 11. Load Balancing in Node.js Applications
- **Horizontal Scaling:** Distribute incoming requests across multiple instances of the application using a **load balancer**.
- **Tools for Load Balancing:**
  - **Nginx**: Acts as a reverse proxy and load balancer.
  - **PM2**: Node.js process manager that handles clustering and load balancing.
  - **HAProxy**: Advanced load balancing for complex setups.
- **Round-robin Strategy:** Distributes requests equally among available servers.

```sh
pm2 start app.js -i max  # Automatically spawns one instance per CPU core.
```

### 12. Database Transactions in Node.js
- **Transactional Integrity:** Use **ACID** properties to ensure data consistency.
- **Libraries to Handle Transactions:**
  - **Sequelize** (ORM for SQL databases): Manages transactions and commits/rollbacks.
  - **Mongoose**: For MongoDB transactions (since version 4.x).

Example using Sequelize:
```ts
const { sequelize } = require("./models");

async function performTransaction() {
  const t = await sequelize.transaction();

  try {
    await User.create({ name: 'John' }, { transaction: t });
    await Order.create({ userId: 1, total: 100 }, { transaction: t });

    await t.commit();  // Commit the transaction
  } catch (error) {
    await t.rollback();  // Rollback if an error occurs
  }
}
```

### 13. Caching Strategies in Node.js
- **In-memory Caching:** Use **Redis** to cache frequently accessed data.
- **Cache Expiration:** Set TTL (Time to Live) to avoid stale data.
- **Lazy Caching:** Cache data only when necessary to prevent unnecessary data storage.

```ts
import redis from 'redis';
const client = redis.createClient();

// Set cache with expiration time (TTL)
client.setex('user:123', 3600, JSON.stringify(userData));

// Get cached data
client.get('user:123', (err, data) => {
  if (data) {
    console.log('Cache hit:', JSON.parse(data));
  } else {
    console.log('Cache miss');
  }
});
```

### 14. Optimizing Performance in Node.js Applications
- **Database Optimizations:**
  - Use **indexing** for fast queries.
  - Use **pagination** for large datasets to minimize the data fetched at once.
- **Memory Management:**
  - Monitor memory usage using `process.memoryUsage()` to prevent memory leaks.
  - Optimize large JSON objects by using **streams** to process data in chunks.
- **Cluster Mode:** Use Node's built-in clustering to take advantage of multiple CPU cores.

Example of using a stream:
```ts
import fs from 'fs';
import readline from 'readline';

const fileStream = fs.createReadStream('largefile.txt');
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

rl.on('line', (line) => {
  console.log(`Processing line: ${line}`);
});
```

### 15. Microservices Communication Patterns
- **Synchronous Communication:**
  - **HTTP REST**: Commonly used for simple, synchronous requests.
  - **gRPC**: Fast and efficient communication for microservices with strongly-typed contracts.
- **Asynchronous Communication:**
  - **Message Queues** (RabbitMQ, Kafka): Used for decoupling microservices and handling background jobs.
  - **Event-Driven Architecture**: Microservices emit events for other services to consume, often using event brokers like Kafka.

Example of an event-driven communication:
```ts
// Producer (Event emitter)
import { EventEmitter } from 'events';

const emitter = new EventEmitter();
emitter.emit('userCreated', { userId: 1, name: 'John' });

// Consumer (Event listener)
emitter.on('userCreated', (data) => {
  console.log('User created event received:', data);
});
```

### 16. Design Patterns in Node.js
- **Singleton Pattern:** Ensures only one instance of a service or module is created.
- **Factory Pattern:** Provides a way to instantiate different types of objects based on conditions.
- **Observer Pattern:** A pattern for event-driven communication, typically using an event emitter.

Example of Singleton Pattern:
```ts
class DatabaseConnection {
  private static instance: DatabaseConnection;

  private constructor() {}

  static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }
}
```

### 17. Dependency Injection in Node.js
- **Dependency Injection (DI)**: A design pattern that helps manage the dependencies of services within the application.
- **Libraries for DI:**
  - **InversifyJS**: A powerful library for implementing DI in TypeScript.
  - **Awilix**: Another DI container for Node.js.
- **Benefits**: Simplifies testing and decouples service logic.

Example using InversifyJS:
```ts
import { Container, inject, injectable } from 'inversify';

@injectable()
class UserService {
  private db: any;
  constructor(@inject('Database') db: any) {
    this.db = db;
  }
  getUser(id: string) {
    return this.db.findUser(id);
  }
}

const container = new Container();
container.bind('Database').toConstantValue(new DatabaseConnection());
container.bind(UserService).toSelf();

const userService = container.get(UserService);
userService.getUser('123');
```

### 18. Data Validation in Node.js with TypeScript
- Use **Joi** or **express-validator** to validate request data in APIs.
- **Joi** supports complex validations with a fluent API.

Example using Joi:
```ts
import Joi from 'joi';

const userSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(18).required(),
});

const { error, value } = userSchema.validate({ name: 'John', email: 'john@example.com', age: 25 });
if (error) {
  console.error('Validation Error:', error.details);
} else {
  console.log('Validated Data:', value);
}
```

### 19. Handling Large File Uploads in Node.js
- Use **multer** for handling multipart file uploads.
- Store large files in cloud storage (AWS S3, Google Cloud Storage) to offload the file handling from the server.

Example using Multer for file uploads:
```ts
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  console.log('File uploaded:', req.file);
  res.send('File uploaded successfully');
});
```

---



