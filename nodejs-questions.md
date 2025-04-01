**Node.js and Architecture Interview Questions & Answers**

### 1. Error Handling in Large-Scale Node.js Applications
- **Centralized Error Handling:** Use Express.js middleware to catch and format errors globally.
- **Async Error Handling:** Use `express-async-errors` to manage async route errors.
- **Error Logging:** Utilize **Winston** or **Pino** for logging errors.
- **Structured Error Classes:** Implement custom error classes like `ValidationError` and `NotFoundError`.
- **Unhandled Exceptions:** 
  ```ts
  process.on('unhandledRejection', (reason, promise) => {...});
  process.on('uncaughtException', (error) => {...});
  ```

### 2. Handling Concurrency & I/O Operations in Node.js
- **Non-blocking I/O:** Uses event loop + `libuv` for async operations.
- **Best Practices:**
  - Use `async/await` with `Promise.all()` for parallel execution.
  - Offload CPU-bound tasks using `worker_threads`.
  - Use **message queues** (RabbitMQ, Kafka) for task distribution.
  - Optimize DB queries with indexing and **connection pooling**.
  - Implement caching (**Redis**) to reduce database load.

### 3. Monolithic vs. Microservices Architecture in Node.js
| **Aspect**        | **Monolithic**                                      | **Microservices**                                   |
|------------------|--------------------------------------------------|-------------------------------------------------|
| **Scalability**  | Scale entire app together                        | Independently scalable services                 |
| **Maintenance**  | Harder with growing codebase                     | Easier, modular services                        |
| **Deployment**   | Single deployable unit                           | Independent deployments                         |
| **Complexity**   | Simpler                                         | Requires service communication, orchestration  |
| **Tech Stack**   | Single stack                                    | Can use different technologies per service     |

### 4. Middleware in Express.js
Middleware functions execute in the request-response cycle.
- **Types:**
  - Application-level: `app.use(loggingMiddleware)`
  - Router-level: `router.use(middleware)`
  - Error-handling: `app.use((err, req, res, next) => {...})`

```ts
import express, { Request, Response, NextFunction } from 'express';
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).json({ error: "Internal Server Error" });
});
```

### 5. Designing an API in TypeScript for Large Data Sets
- **Best Practices:**
  - **Pagination:** Cursor-based or offset-based.
  - **Lazy Loading:** Fetch only required data.
  - **Streaming:** Use Node.js streams.
  - **Batching:** Process multiple requests efficiently.

```ts
app.get('/large-data', async (req: Request, res: Response) => {
  const limit = Number(req.query.limit) || 100;
  const offset = Number(req.query.offset) || 0;
  const data = await db('users').select('*').limit(limit).offset(offset);
  res.json(data);
});
```

### 6. Async/Await vs Promises vs Callbacks
| **Method**  | **Pros**                           | **Cons**                    |
|------------|---------------------------------|----------------------------|
| Callbacks  | Simple to start                 | Callback hell, difficult debugging |
| Promises   | Chainable, avoids callback hell | More verbose                |
| Async/Await | Cleaner, synchronous-like      | Requires `try/catch` for errors |
- **Best Practice:** Use `async/await` for readability and maintainability.

### 7. Scalable Logging System in Node.js
- Use **Winston** or **Pino**.
- Separate logs by levels (`info`, `error`, `debug`).
- Stream logs to **ELK Stack**, **Datadog**, or **AWS CloudWatch**.
- Implement log rotation (`winston-daily-rotate-file`).

```ts
import winston from 'winston';
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
  ],
});
logger.info("App started");
logger.error("Error message");
```

### 8. Event Loop in Node.js
- **Phases:**
  1. **Timers**: Executes `setTimeout/setInterval` callbacks.
  2. **I/O Callbacks**: Executes async I/O operations.
  3. **Idle/Prepare**: Internal tasks.
  4. **Poll**: Retrieves new I/O events.
  5. **Check**: Executes `setImmediate` callbacks.
  6. **Close**: Handles `close` events.
- **Avoid Blocking:**
  - Use async methods (`fs.readFile()` instead of `fs.readFileSync()`).
  - Use **worker_threads** for CPU-intensive tasks.
  - Split heavy computations into chunks.

### 9. Security Features in a Node.js REST API
- **Rate Limiting:** Prevent abuse with `express-rate-limit`.
- **Input Validation:** Use `Joi` or `express-validator`.
- **Authentication:**
  - Use **JWT** for stateless authentication.
  - Use **OAuth** for Single Sign-On (SSO).
- **Security Best Practices:**
  - Use **Helmet** for HTTP headers security.
  - Enforce HTTPS.
  - Enable CORS for whitelisted domains.

```ts
import rateLimit from 'express-rate-limit';
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);
```

### 10. Type Safety in Microservices with TypeScript
- **Use Shared DTOs:** Define common interfaces in a shared package.
- **API Contracts:** Use OpenAPI/Swagger.
- **Runtime Validation:** Use `Zod` or `Joi`.
- **Communication:** Prefer **gRPC** or **GraphQL** for strong typing.

```ts
// shared-types.ts
export interface UserDTO {
  id: number;
  name: string;
  email: string;
}
```

