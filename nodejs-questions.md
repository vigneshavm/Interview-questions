# Node.js and Architecture Questions
1. How would you handle error handling in a large-scale Node.js application?
2. How does Node.js handle concurrency, and what are the best practices for managing I/O-heavy operations?
3. What are the advantages and disadvantages of using a monolithic architecture versus microservices in Node.js applications?
4. Can you explain the concept of middleware in Node.js and how you would structure them in an Express.js application?
5. How would you design an API using TypeScript in Node.js that efficiently handles large data sets?
6. What are the pros and cons of using async/await versus promises and callbacks in a Node.js environment?
7. How would you design a scalable logging system in a large Node.js application? What tools and practices would you recommend?
8. Explain how the event loop works in Node.js. How can you avoid blocking the event loop in high-throughput scenarios?
9. Describe how you would implement security features in a Node.js REST API (e.g., rate limiting, input validation, JWT, OAuth)?
10. How do you ensure type safety and correctness across multiple services in a microservices architecture when using TypeScript with Node.js?

----------Solution-------------
### **1. How would you handle error handling in a large-scale Node.js application?**
- **Centralized Error Handling**: Use a global error handler middleware in Express.js to catch all errors and format responses.
- **Async Error Handling**: Use `async/await` with a wrapper utility like `express-async-errors` to handle errors in asynchronous routes.
- **Error Logging**: Integrate tools like **Winston** or **Pino** for logging errors to files, databases, or external tools (ELK, Datadog, etc.).
- **Structured Error Classes**: Create custom error classes (e.g., `ValidationError`, `NotFoundError`) that extend the `Error` class.
- **Unhandled Exceptions/Rejections**:
   - Catch unhandled rejections with `process.on('unhandledRejection', callback)`.
   - Catch uncaught exceptions with `process.on('uncaughtException', callback)` and restart the app gracefully.

---

### **2. How does Node.js handle concurrency, and what are best practices for I/O-heavy operations?**
- **Concurrency Model**: Node.js uses an **event loop** and **non-blocking I/O** via the **libuv** library, enabling asynchronous operations.
- **I/O-heavy Operations**:
   - Use **async/await** with `Promise.all` for parallel execution.
   - Avoid synchronous methods (e.g., `fs.readFileSync`).
   - Offload CPU-bound tasks to a worker pool using the **worker threads** module.
   - Use message queues like **RabbitMQ** or **Kafka** for task processing.
   - Optimize database queries with indexing, connection pooling, and query batching.
   - Use caching (Redis) to minimize I/O bottlenecks.

---

### **3. Monolithic vs Microservices in Node.js Applications**
**Monolithic Architecture**:
- **Advantages**:
   - Easier to develop, test, and deploy.
   - Simple debugging and monitoring.
- **Disadvantages**:
   - Scaling requires scaling the entire app.
   - Harder to maintain with growing codebase.

**Microservices**:
- **Advantages**:
   - Independent scaling, deployment, and testing.
   - Technology agnostic: services can use different stacks.
- **Disadvantages**:
   - Increased complexity (communication, deployment).
   - Data consistency issues require careful handling (e.g., Saga patterns).
   - Higher infrastructure cost.

---

### **4. Concept of Middleware in Express.js**
- **Middleware** are functions that execute sequentially between the request and response lifecycle.
- **Types**:
   - Application-level: `app.use()`
   - Router-level: Applied to specific routes.
   - Built-in: e.g., `express.json()`, `express.static()`.
   - Error-handling middleware: Functions with 4 arguments (e.g., `function (err, req, res, next)`).

**Structure**:
```typescript
import express, { Request, Response, NextFunction } from "express";
const app = express();

// Middleware for logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Error-handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
});
```

---

### **5. Designing an API with TypeScript to Handle Large Data Sets**
- **Pagination**: Implement cursor-based or offset-based pagination.
- **Lazy Loading**: Load partial data as required.
- **Streaming**: Use Node.js streams for sending large responses efficiently.
- **Batching**: Combine requests for efficiency.
- **Database Optimization**:
   - Use indexed queries and ORM tools like TypeORM/Prisma.
   - Limit payload size with `SELECT` statements.

**Code Example**:
```typescript
app.get('/large-data', async (req: Request, res: Response) => {
    const limit = Number(req.query.limit) || 100;
    const offset = Number(req.query.offset) || 0;

    const data = await db.table('users').select('*').limit(limit).offset(offset);
    res.json(data);
});
```

---

### **6. Async/Await vs Promises vs Callbacks**
- **Callbacks**:
   - Pros: Simple to start.
   - Cons: Callback hell, hard to debug.
- **Promises**:
   - Pros: Chainable, avoids callback hell.
   - Cons: Still verbose for complex flows.
- **Async/Await**:
   - Pros: Clean, readable, and synchronous-like.
   - Cons: Error handling requires `try/catch`.

**Recommendation**: Use **async/await** for simplicity and maintainability.

---

### **7. Designing a Scalable Logging System**
- Use a logging library like **Winston** or **Pino** for structured logs.
- Separate logs by level: `info`, `error`, `warn`, `debug`.
- Stream logs to external tools like:
   - **ElasticSearch/Logstash/Kibana (ELK)** stack.
   - **Datadog**, **Splunk**, or **AWS CloudWatch**.
- Implement log rotation using `winston-daily-rotate-file`.

**Example**:
```typescript
import winston from 'winston';

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'app.log' }),
    ],
});

logger.info("App started");
logger.error("Error message");
```

---

### **8. Node.js Event Loop**
- **Phases**:
   1. **Timers**: Execute `setTimeout` and `setInterval` callbacks.
   2. **I/O Callbacks**: Handle I/O operations.
   3. **Idle/Prepare**: Internal use.
   4. **Poll**: Retrieve new I/O events.
   5. **Check**: Execute `setImmediate` callbacks.
   6. **Close**: Handle `close` events.

- **Avoid Blocking**:
   - Avoid synchronous methods (e.g., `fs.readFileSync`).
   - Use worker threads for CPU-bound tasks.
   - Split large computations into smaller chunks.

---

### **9. Implementing Security Features in a Node.js REST API**
- **Rate Limiting**: Use `express-rate-limit` to prevent abuse.
- **Input Validation**: Use `Joi` or `express-validator` to sanitize inputs.
- **Authentication**:
   - Use **JWT** for stateless authentication.
   - Use OAuth providers for SSO.
- **HTTPS**: Enforce secure communication.
- **Helmet**: Secure HTTP headers.
- **CORS**: Whitelist trusted origins.

**Example**:
```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);
```

---

### **10. Ensuring Type Safety in Microservices Using TypeScript**
- Use **shared DTOs (Data Transfer Objects)**:
   - Maintain a common package for interfaces and types.
- Use **OpenAPI/Swagger** for API contracts.
- Use tools like **Zod** or **Joi** for runtime type validation.
- Leverage gRPC or GraphQL for strongly typed communication.

**Example** (Shared DTO):
```typescript
// common-types.ts
export interface UserDTO {
    id: number;
    name: string;
    email: string;
}
```

