### **1. Difference Between CommonJS and ES Modules**

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

### **2. Explain Streams in Node.js**

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

### **3. Error Handling in Node.js**

- **Synchronous**: `try-catch`.
- **Asynchronous**: `Error-first callback pattern`, `Promises`, `Async/Await`.

```js
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});
```

---

### **4. Middleware in Express.js**

Middleware functions execute before route handlers. They can perform tasks like logging, authentication, and error handling.

```js
app.use((req, res, next) => {
  console.log("Middleware running");
  next();  // Pass control to the next middleware
});
```

---

### **5. Event Loop Phases**

The Node.js **event loop** manages asynchronous operations and includes these phases:
1. **Timers** (`setTimeout`, `setInterval`)
2. **Pending I/O**
3. **Idle/Prepare**
4. **Poll** (Handles I/O events)
5. **Check** (`setImmediate`)
6. **Close Callbacks**

---

### **6. Authentication vs Authorization**

- **Authentication**: Verifies user identity (e.g., login).
- **Authorization**: Determines what resources a user can access.

---

### **7. JWT (JSON Web Token) Flow**

1. **User logs in** → Server generates JWT.
2. **JWT Structure**: Header (algorithm), Payload (user data), Signature (hash).
3. **Client sends JWT** in the `Authorization` header.
4. **Server verifies** JWT before granting access.

---

### **8. Securing a Node.js App**

- Use **HTTPS**.
- Validate **input data**.
- Use **Helmet** for HTTP headers security.
- Prevent **SQL injection** with ORMs.
- Enable **rate limiting**.
- Run **npm audit** for vulnerabilities.

---

### **9. Performance Optimization**

- Use **caching** (e.g., Redis).
- Optimize **DB queries**.
- Enable **load balancing** and **clustering**.
- Use **Gzip compression**.
- Implement **lazy loading** to optimize resource loading.

---

### **10. Worker Threads in Node.js**

Worker threads offload CPU-intensive tasks to separate threads, ensuring the main thread isn't blocked.

---

### **11. CORS Middleware (Cross-Origin Resource Sharing)**

Use **CORS** to manage cross-origin requests, restricting access to certain origins.

```js
const cors = require('cors');
app.use(cors({ origin: "http://example.com" }));
```

---

### **12. Caching Strategies in Node.js**

- **In-memory Caching**: Use **Redis** for frequently accessed data.
- **Cache Expiration**: Set TTL (Time to Live) to prevent stale data.
- **Lazy Loading**: Cache data only when required.

---

### **13. Microservices Communication**

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

### **14. Load Balancing in Node.js**

Distribute requests across multiple instances using tools like **PM2**, **Nginx**, or **HAProxy**.

```sh
pm2 start app.js -i max  # Start one instance per CPU core
```

---

### **15. Handling Large File Uploads**

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

### **16. Dependency Injection in Node.js**

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

### **17. Database Transactions in Node.js**

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

### **18. Data Validation in Node.js with TypeScript**

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




### 1. **How do you handle scalability issues in Node.js applications?**
   - **Clustering**: Use the `cluster` module to utilize multi-core systems by spawning worker processes.
   - **Load Balancing**: Distribute incoming requests across multiple servers using NGINX, HAProxy, or AWS Elastic Load Balancer.
   - **Horizontal Scaling**: Deploy multiple instances of the application using containers (e.g., Docker) and orchestration tools like Kubernetes.
   - **Caching**: Use Redis or Memcached to cache frequently accessed data.
   - **Optimize Queries**: Use efficient database queries and indexing.

---

### 2. **How do you ensure data consistency across distributed services?**
   - Use distributed transaction mechanisms like **two-phase commit**.
   - Implement **event-driven architecture** with message brokers (e.g., Kafka, RabbitMQ) for eventual consistency.
   - Use database strategies like **write-ahead logs** and **saga patterns** for managing consistency.

---

### 3. **How do you handle callback hell in Node.js?**
   - Use **Promises** to flatten the callback chain.
   - Use **async/await** for better readability and linear flow.
   - Modularize code into smaller functions for better maintainability.

---

### 4. **Promises vs Async/Await**
   - Promises simplify callbacks but can still become complex.
   - **Async/await** allows writing asynchronous code like synchronous code, improving readability.
   - Async/await works on top of promises and eliminates `.then()` chains.

---

### 5. **How do you manage security in Node.js applications?**
   - **Input Validation**: Use libraries like Joi or Express-validator to validate inputs.
   - **Sanitize Data**: Prevent SQL injections and XSS attacks.
   - **Authentication**: Use JWT or OAuth for secure authentication.
   - **Environment Variables**: Store secrets securely using `dotenv` or AWS Secrets Manager.
   - **Rate Limiting**: Use middleware to limit requests (e.g., `express-rate-limit`).
   - **Helmet**: Protect HTTP headers for Express apps.

---

