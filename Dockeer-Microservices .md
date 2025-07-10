
**Docker**
| **Category**               | **Topics**                                                                                                                                                                                                 |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Basics**                | [Docker Basics](#docker-basics) · [Docker vs VM](#docker-vs-vm) · [Images vs Containers](#images-vs-containers) · [Alpine Image](#alpine-image) · [Docker Layers](#docker-layers) · [Optimize Docker Layers](#optimize-docker-layers) |
| **Commands and File**     | [Common Docker Commands](#common-docker-commands) · [Dockerfile](#dockerfile) · [Docker Compose](#docker-compose) · [Volumes and Bind Mounts](#volumes-and-bind-mounts)                                   |
| **Network and Lifecycle** | [Networking in Docker](#networking-in-docker) · [Container Lifecycle](#container-lifecycle) · [Docker Architecture](#docker-architecture) · [Docker in CI/CD](#docker-in-cicd)                             |
| **Cross-Platform Images** | [Security Best Practices](#security-best-practices) · [Bonus: Real-World Scenarios](#bonus-real-world-scenarios) · [Linux Docker Image on Windows](#linux-docker-image-on-a-windows-machine) · [Windows Docker Image on Linux](#windows-docker-image-on-a-linux-machine) |



**Microservice**
| **Category**               | **Topics** |
|----------------------------|------------|
| **API Design & Interface** | [Versioning & Backward Compatibility](#versioning--backward-compatibility) - [Swagger](#swagger)  - [Manage multiple service endpoints](#manage-multiple-service-endpoints) |
| **Reliability & Resilience** | [Rate Limiting & Throttling](#rate-limiting--throttling) - [Circuit Breaker](#circuit-breaker) - [Error Handling & Fault Tolerance](#error-handling--fault-tolerance) - [Logs and Tracing](#logs-and-tracing) |
| **Patterns & Orchestration** | [SAGA Pattern](#saga-pattern) - [Observer Pattern](#observer-pattern) - [Service Discovery](#service-discovery) - [API Gateway](#api-gateway) |
| **Code & Configuration** | [Shared Libraries & Code Reuse](#shared-libraries--code-reuse) - [Configuration Management](#configuration-management) |
| **Scaling & Operations** | [Scalability & Handle Load](#scalability--handle-load) - [DevOps & Deployment](#devops--deployment) - [Microservices Architecture](#microservices-architecture) |
| **Quality & Security** | [Testing Strategy](#testing-strategy) - [Authentication & Authorization](#authentication--authorization) |
| **Cross-Cutting Topics** | [Microservices Communication](#microservices-communication) - [Monolithic vs Microservices](#monolithic-vs-microservices) - [Logging System](#logging-system) - [Type Safety Across Multiple Services](#type-safety-across-multiple-services) - [Distributed Data Consistency](#data-consistency-across-distributed-services) - [Microservices overview](#Microservice-overview)

## **Microservices Architecture**

- In my microservices architecture with Node.js, 
- I focus on defining clear service boundaries, 
- using async messaging for decoupling, 
- ensuring observability, and enabling robust CI/CD pipelines. 
- I design for failure, scale horizontally, and 
- adhere to 12-factor principles to keep services lightweight, portable, and easy to maintain.”

---

###  **Define microservices**

* I design services around bounded contexts and avoid tight coupling.
* **Define services by business capability** (e.g., user-service, order-service).
* Use [**Domain-Driven Design (DDD)**](#Domain-Driven-Design) for modeling.
* Avoid shared databases — **each service owns its data**.



### **Manage multiple service endpoints**

* API gateways simplify client interaction and centralize cross-cutting concerns.
* Use **API Gateway** (e.g., Kong, NGINX, Express Gateway).`
* Handle **rate limiting, authentication, request routing** centrally.


### **Data Management and consistency**

* I ensure data integrity using eventual consistency and event sourcing patterns.
* Use **database-per-service** pattern.
* For cross-service consistency, implement **event-driven architecture** with **eventual consistency**.
* Use **Sagas or outbox patterns** for transactional workflows.

- In microservices, I always apply the database-per-service principle and model schema based on domain boundaries. 
- I use async events and patterns like Saga to handle distributed consistency, 
- Ensuring that each service is independently deployable and scalable.

| Concern                   | Solution/Pattern                 |
| ------------------------- | -------------------------------- |
| DB per service            | Use isolated DB per microservice |
| Cross-service data access | Use APIs or events               |
| Distributed transactions  | Saga Pattern                     |
| Joins                     | API Gateway or CQRS              |
| Event propagation         | Event Bus + Outbox Pattern       |
| DB selection              | Polyglot persistence             |




### **Authentication & Authorization**

* I apply centralized authentication and decentralized authorization.
* Implement **JWT tokens** or **OAuth 2.0**.
* Use **shared identity provider** (like Auth0, Keycloak).
* Validate tokens in API gateway or service layer.




### **Logs and Tracing**

* I instrument services for full observability from the start.
* Implement **structured logging** (e.g., Winston, Pino).
* Use tools like **Prometheus + Grafana**, **ELK**, or **Jaeger for tracing**.
* Correlate logs via **trace IDs** or **correlation IDs**.

---


### **Error Handling & Fault Tolerance**

* I design for failure with retry policies, timeouts, and fallback logic.
* Use **circuit breakers** (e.g., `opossum`), **bulkheads**, and **fallbacks**.
* Return **proper HTTP codes**, propagate meaningful errors.
* Design for **graceful degradation**.


---



### **DevOps & Deployment**


I enable automated deployments with **zero-downtime strategies** using containerization, CI/CD, and progressive delivery techniques.


**Containerization & Orchestration**

* Containerize applications using **Docker**.
* Orchestrate and manage deployments via **Kubernetes** (K8s).


**CI/CD Pipelines**

* Automate build, test, and deployment flows using:
  * **GitHub Actions**   * **Jenkins**
* Integrate quality gates, smoke tests, and rollback mechanisms.


**Blue-Green Deployment**

* Maintain **two environments**:
  * **Blue**: Currently live ,   * **Green**: Staging for new release
* **Steps**:
  * Deploy new version to Green.
  * Run automated & smoke tests.
  * Route traffic to Green after validation.
  * Rollback instantly by switching back to Blue if needed.


**Canary Releases**

* Gradual rollout of new versions to a **small % of users**.
* Monitor:
  * **Error rates** ,   * **Latency** ,  * **CPU/memory usage**
* If stable → Increase rollout.
  If issues arise → Roll back safely.



---




### **Scalability & handle load**


I profile services early and scale horizontally to meet demand.
* Horizontally scale stateless services.
* Cache aggressively with **Redis** or **memory-cache**.
* Load test services using **Artillery or K6**.


---



### **Shared Libraries & Code Reuse**

* I balance reuse with autonomy using versioned shared packages.
* Use **npm private packages** for shared utilities (logging, auth).
* Avoid coupling services by sharing only what's necessary.


---



### **Versioning & Backward Compatibility**

* I maintain backward compatibility and phase out deprecated endpoints gracefully.
* Version APIs using **URI versioning** (`/v1/endpoint`) or **header-based**.
* Deprecate gradually with proper alerts.


---

### **Testing Strategy**

* I rely on layered testing and automate testing in CI pipelines.
* Write **unit tests** (Jest, Mocha), **integration tests**, and **contract tests** (Pact).
* Mock downstream services in tests.




### **Rate Limiting & Throttling**

* I enforce limits to preserve service health and avoid overload.
* Use **rate limiters** like `express-rate-limit` or through the API Gateway.
* Throttle abusive traffic to avoid cascading failures.


---

### **Configuration Management**

* I keep configuration outside the code and encrypted where necessary.
* Use **12-Factor App** principles.
* Externalize configs with tools like **dotenv**, **Vault**, or **Config Server**.



### **Observer Pattern**

* **Purpose:** Enables one-to-many dependency — observers auto-notified on subject state change.
* **Use Case:** Real-time updates (e.g., notifications, stock prices, chat apps).
* **Key Benefits:**

  * Decouples publisher and subscriber logic.
  * Promotes event-driven architecture.
* **Tech Stack:** `RxJS`, `EventEmitter` (Node.js), `Kafka` for async events.
* **Example:** When a blog is published, all subscribed users are notified automatically.

---



### **SAGA Pattern**

* **Purpose:** Manages **long-running transactions** in distributed microservices without 2PC.
* **Patterns:**

  * **Choreography:** Services listen/respond to events (no central controller).
  * **Orchestration:** Central coordinator commands each service.
* **Use Case:** E-commerce flow — Order → Payment → Inventory → Shipping.
* **Key Benefits:**

  * Maintains data consistency.
  * Supports compensation (rollback) on failure.
* **Tools:** Kafka (for choreography), Node.js orchestrator, AWS Step Functions.
* **Highlight:** Promotes eventual consistency in microservices.

---



### **Circuit Breaker**

* **Purpose:** Prevents cascading failures when a service is slow or unresponsive.
* **States:**

  * **Closed:** Normal operation.
  * **Open:** Block requests temporarily.
  * **Half-open:** Trial requests to check recovery.
* **Use Case:** Protect calling service from failures in payment gateway / 3rd party APIs.
* **Key Benefits:**

  * Increases system resilience.
  * Provides graceful degradation.
* **Libraries:** `Resilience4j`, `Hystrix`, `opossum` (Node.js).

---


### **API Gateway**

* **Purpose:** Single entry point to a microservices architecture.
* **Responsibilities:**

  * Routing, authentication, rate limiting, response transformation, aggregation.
* **Use Case:** Unified access layer for mobile/web apps in social or e-commerce platforms.
* **Key Benefits:**

  * Simplifies clients (aggregates multiple APIs).
  * Centralizes cross-cutting concerns (security, logging).
* **Tools:** `Kong`, `NGINX`, `AWS API Gateway`, `Express Gateway`.

---


### **Service Discovery**

* **Purpose:** Enables services to find each other dynamically — no hardcoded IPs.
* **Types:**

  * **Client-side:** Clients query registry (e.g., Eureka).
  * **Server-side:** Load balancer handles discovery (e.g., AWS ELB).
* **Use Case:** In Kubernetes, services discover each other via DNS even as pods scale.
* **Key Benefits:**

  * Increases scalability and automation.
  * Supports dynamic environments (containers, cloud).
* **Tools:** `Kubernetes DNS`, `Consul`, `Eureka`, `AWS Cloud Map`.

---

### ✅ Quick Comparison

| Pattern               | Problem Solved                         | Key Benefit                        | Tools/Libraries                 |
| --------------------- | -------------------------------------- | ---------------------------------- | ------------------------------- |
| **Observer**          | Event propagation                      | Decoupled real-time communication  | RxJS, Kafka, EventEmitter       |
| **SAGA**              | Distributed transaction handling       | Data consistency, fault tolerance  | Kafka, Orchestrator, Step Funcs |
| **Circuit Breaker**   | Service resilience during failures     | Prevents cascading failures        | Resilience4j, Hystrix, opossum  |
| **API Gateway**       | Unified API access and control         | Centralized auth, routing, logging | Kong, NGINX, AWS Gateway        |
| **Service Discovery** | Dynamic service registration/discovery | No hardcoding, dynamic scaling     | Eureka, Consul, Kubernetes DNS  |

---



## **Swagger**

When building APIs in Node.js, I ensure they are **well-structured**, **self-documented**, and **testable** using tools like **Swagger (OpenAPI)** and **Postman**. Here's my approach:



| Tool              | Purpose                               |
| ----------------- | ------------------------------------- |
| **Express.js**    | Build RESTful APIs in Node.js         |
| **Swagger UI**    | Auto-generate interactive API docs    |
| **swagger-jsdoc** | Generate docs from comments           |
| **Postman**       | Manual/automated testing of endpoints |
| **OpenAPI**       | Standardized API contract for tooling |
| **TypeScript**    | Ensures type safety across services   |



### 🔹 1. **API Design First Approach (Optional)**

* Before writing code, I often **design the API contract** using **Swagger Editor** or **Stoplight** (OpenAPI).
* This ensures frontend/backend teams align early.
* It helps generate **stubs and mocks** if needed.

---

### 🔹 2. **Building REST APIs (Express + TypeScript/JS)**

* I usually use `Express.js` or `Fastify` for performance.
* For type safety and structure, I prefer **TypeScript**.
* Folder structure:

  ```
  /routes
  /controllers
  /models
  /services
  /middlewares
  ```

**Sample setup:**

```ts
// route/user.ts
router.get('/users/:id', userController.getUser);

// controller/user.ts
export const getUser = async (req, res) => {
  const user = await userService.findUser(req.params.id);
  res.json(user);
};
```

---

### 🔹 3. **API Documentation with Swagger**

#### ➤ Using `swagger-jsdoc` + `swagger-ui-express`

* I write **JSDoc-style comments** above routes and generate Swagger docs dynamically.

**Installation:**

```bash
npm install swagger-jsdoc swagger-ui-express
```

**Setup:**

```js
// swagger.js
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "User API", version: "1.0.0" },
  },
  apis: ["./routes/*.js"], // or .ts
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
```

**JSDoc Example in route:**

```js
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: User found
 */
```

➡️ **Result:** Access Swagger UI at `http://localhost:3000/api-docs`.

---

### 🔹 4. **Testing APIs with Postman**

* After developing and documenting APIs, I use **Postman** for:

  * Manual Testing (CRUD operations, auth)
  * **Collections** for saved requests
  * **Environment Variables** (e.g., base URLs, tokens)
  * **Automated Tests** using Postman scripts
  * **Mock servers** and **monitors** for uptime and staging

➡️ I often export collections for QA and frontend teams to consume.

---

### 🔹 5. **Bonus: OpenAPI + Code Generation**

* For large projects, I use OpenAPI to:

  * Auto-generate API clients (using tools like `openapi-generator`)
  * Generate TypeScript types from Swagger
  * Sync frontend/backend types and contracts

---

### 🔹 6. **Best Practices I Follow**

* Versioned routes: `/api/v1/users`
* Consistent error schema: `{ errorCode, message }`
* Middleware for validation (`Joi`, `Zod`)
* Logging requests & responses (`morgan`, `winston`)
* Unit + Integration tests with `supertest` + `jest/mocha`

---





## **Microservices Communication**

* I choose communication strategies based on performance and reliability needs.
* Prefer **async messaging (RabbitMQ, Kafka)** for scalability.
* Use **REST** or **gRPC** for synchronous needs.
* **Retry logic**, **circuit breakers**, and **timeouts** are essential for resiliency.


- [Using Queue](#microservice-communication-using-queue)
- [Using HTTP](#microservice-communication-using-http)

**Synchronous Communication (HTTP)**

* Services expose **REST APIs** using **Express** or **Fastify**.
* Internal services interact via **HTTP clients** like `axios` or `node-fetch`.
* For reliability:
  * Implement **timeouts**, **retries**, and **circuit breakers** using libraries like `opossum`.
* Best suited for real-time, request/response workflows (e.g., user login, fetching profile).

**Asynchronous Communication (Messaging/Event-Driven)**
* Use **message queues** or **event brokers** like:
  * **RabbitMQ** (`amqplib`)   * **Kafka** (`kafkajs`)   * **Redis Pub/Sub** (`ioredis`)
* Services **publish events** or **enqueue jobs**, and consumers process them independently.
* Ideal for background processing like:
  * Notifications   * Video rendering   * Order fulfillment

**Monitoring, Logging & Tracing**
* Use **correlation IDs** to trace requests across services. ```js  res.setHeader('X-Correlation-ID', correlationId);```
* Logging: **Winston**, **Pino**


* `video-request-service`: Publishes a message when a user requests a video.
* `media-processor-service`: Listens to the queue and processes the video request.


**Folder Structure**
```
video-request-service/── src/── publisher/── videoPublisher.ts
media-processor-service── src/── consumer/── videoConsumer.ts
```


### ✅ Step 1: **video-request-service** – RabbitMQ Publisher

```ts
// video-request-service/src/publisher/videoPublisher.ts
import amqplib from 'amqplib';
const QUEUE_NAME = 'video_jobs';
export async function publishVideoJob(data: { userId: string; videoUrl: string }) {
  const connection = await amqplib.connect('amqp://localhost');
  const channel = await connection.createChannel();
  await channel.assertQueue(QUEUE_NAME, { durable: true });
  const messageBuffer = Buffer.from(JSON.stringify(data));
  channel.sendToQueue(QUEUE_NAME, messageBuffer, { persistent: true });
  console.log('📤 Job sent to queue:', data);
  setTimeout(() => {     connection.close();  }, 500);
}
```

#### 🔸 Usage in controller

```ts
await publishVideoJob({ userId: '123', videoUrl: 'http://cdn.com/raw.mp4' });
```

---

### 🛠️ Step 2: **media-processor-service** – RabbitMQ Consumer

```ts
// media-processor-service/src/consumer/videoConsumer.ts
import amqplib from 'amqplib';
const QUEUE_NAME = 'video_jobs';
async function startConsumer() {
  const connection = await amqplib.connect('amqp://localhost');
  const channel = await connection.createChannel();
  await channel.assertQueue(QUEUE_NAME, { durable: true });
  console.log('🎧 Waiting for messages in queue:', QUEUE_NAME);
  channel.consume(QUEUE_NAME, async (msg) => {
    if (msg !== null) {
      const content = JSON.parse(msg.content.toString());
      console.log('📥 Received job:', content);
      // Simulate video processing
      await new Promise((res) => setTimeout(res, 3000));
      console.log(`✅ Processed video for user ${content.userId}`);
      channel.ack(msg); // acknowledge message
    }
  });
}
startConsumer().catch(console.error);
```


### 🧠 Key Notes

| Component          | Tool          | Responsibility                          |
| ------------------ | ------------- | --------------------------------------- |
| Publisher          | `amqplib`     | Sends job messages to RabbitMQ          |
| Consumer           | `amqplib`     | Listens and processes jobs              |
| Broker             | RabbitMQ      | Queues and buffers messages             |
| Message Durability | `persistent`  | Ensures messages survive broker restart |
| Reliability        | `channel.ack` | Acknowledge messages after processing   |

---




### **monolithic vs microservices**

**Monolithic (Pros)**:

* Easier to develop and deploy initially
* Simplified testing and local development
* Lower operational overhead

**Monolithic (Cons)**:

* Tight coupling, harder to scale parts independently
* Codebase grows messy over time
* Single point of failure

**Microservices (Pros)**:

* Decoupled services; independent deployments
* Easier horizontal scaling
* Teams can own services end-to-end

**Microservices (Cons)**:

* Higher complexity (orchestration, service discovery)
* Requires distributed tracing, API gateway, versioning
* Communication overhead (network latency, message queue dependencies)

I prefer **modular monolith** early on, and split to microservices only when the business and scaling needs justify it.

---


### **Type safety across multiple services**

* Use **shared packages** via private npm packages or mono-repos (e.g., `@myorg/contracts`)
* Define **OpenAPI/Swagger** schemas and auto-generate TypeScript clients using tools like `openapi-generator` or `swagger-typescript-api`
* Use **gRPC** with `protobuf` for strongly typed contracts
* Use `Zod` or `io-ts` to validate external data even if TypeScript types exist
* Ensure CI/CD includes **contract tests** and **schema validation**
* Use tools like `ts-prune`, `tsc --noEmit`, and `eslint` to catch type mismatches early

This ensures that breaking changes between services are caught during build time, not runtime.

---




### **Logging system**

* Use **structured logging** (`pino` for performance, or `winston`)
* Include **correlation IDs** (request ID) to trace requests across services
* Use **log levels** (info, warn, error, debug)
* Log to **stdout** in containers and ship to tools like:

  * **Elastic Stack** (ELK)
  * **Grafana Loki**
  * **Datadog**, **New Relic**
* For production, logs go to a centralized service over syslog or HTTP.
* Example:

  ```ts
  logger.info({ reqId, userId, action: 'UserLogin' }, 'User login request received');
  ```

Log rotation, redaction of PII, and alerting thresholds are all part of the strategy.

---



##  **Data consistency across distributed services?**
   - Use distributed transaction mechanisms like **two-phase commit**.
   - Implement **event-driven architecture** with message brokers (e.g., Kafka, RabbitMQ) for eventual consistency.
   - Use database strategies like **write-ahead logs** and **saga patterns** for managing consistency.





In microservices or distributed architectures, **data consistency** is a key concern due to independent databases, async communication, and partial failures. 


| Technique       | Purpose                                      |
| --------------- | -------------------------------------------- |
| SAGA Pattern    | Handle long-running distributed transactions |
| Message Queues  | Async communication with durability          |
| Outbox Pattern  | Reliable event publishing after DB commit    |
| Idempotent APIs | Prevent double execution                     |
| CDC             | Sync data changes across services            |
| Monitoring      | Detect and react to inconsistencies early    |

### 🔹 1. **Use of the SAGA Pattern**

* I implement the **SAGA pattern** (either **choreography** or **orchestration**) to maintain consistency across services for long-running transactions.
* For example, in an e-commerce system:

  * Order Service → Payment Service → Inventory Service → Notification Service.
  * If payment fails, I trigger compensating transactions to cancel the order and restock inventory.

**Tools/Stack:**

* Kafka for event bus (choreography)
* Custom orchestrator in Node.js using `Bull` (queues) or express logic
* Idempotent APIs to allow retries

---

### 🔹 2. **Event-Driven Architecture with Durable Message Queues**

* I decouple services using **message queues** (Kafka, RabbitMQ, NATS).
* Messages are durable, persisted, and **acknowledged explicitly** to avoid message loss.
* Enables **eventual consistency**.

**Best practices:**

* Use unique event IDs to ensure **idempotency**.
* Implement retry and DLQ (Dead Letter Queues).
* Store event logs in a reliable event store for reprocessing.

---

### 🔹 3. **Outbox Pattern**

* I use the **Outbox Pattern** to safely publish events only after a DB transaction succeeds.
* The service writes to an `outbox_events` table in the same DB transaction.
* A background process (poller or Kafka producer) reads and publishes these events.

**Benefits:**

* Guarantees that only committed changes produce events.
* Solves dual-write problems.

---

### 🔹 4. **Database-Level Strategies**

* In some cases, where strong consistency is needed, I enforce:

  * **Foreign keys** and **transactions** in single-service scope.
  * **Optimistic locking** with version fields (`rowVersion`, `updatedAt`) to prevent lost updates.
  * **Change Data Capture (CDC)** using tools like Debezium for sync.

---

### 🔹 5. **API Contracts & Validation**

* Use **Protobuf/JSON Schema** to ensure consistent data shape across services.
* Validate data at the boundaries using Joi or Zod in Node.js.

---

### 🔹 6. **Idempotent APIs and Retry Logic**

* All critical APIs (like payment, order placement) are **idempotent**.
* I use **request IDs**, **deduplication keys**, or **status flags** in DB to ensure retries don’t corrupt data.

---

### 🔹 7. **Monitoring & Observability**

* I monitor **message delivery, state transitions, and inconsistencies** using:

  * Distributed tracing (OpenTelemetry)
  * Log aggregation and alerting (ELK, Grafana, Prometheus)
  * State machine audit trails for workflows

---

### 🔹 8. **Custom Consistency Layer (if needed)**

* In complex domains, I design a **custom coordinator** that tracks states across services using a **state machine pattern**.
* This ensures that the whole process reaches a valid end state or rolls back safely.

---


## Microservice overview

> "I have **extensive experience designing, developing, and deploying microservices-based systems**,
>  **enterprise systems shifted from monoliths to microservices."**
> **Application is structured as a collection of loosely coupled, independently deployable services**.
> Each service is aligned to a specific business domain and can be developed, deployed, and scaled independently.

**Real Time Example**
> “In one of my projects, we migrated a legacy monolith into 12 microservices, each handling a core function like billing, user management, notifications, etc. This improved release velocity, allowed independent team ownership, and significantly reduced production downtime.”

* **Design & Decomposition**: Broke down large monolithic applications into modular, domain-driven microservices. Followed **Domain-Driven Design (DDD)** to define clear **bounded contexts**.

* **Technology Stack**: Built microservices using **Node.js**, **Express**. Frontend with **React/Angular**, backend REST APIs, and GraphQL where appropriate.

* **Service Communication**:   Used **REST**, **gRPC**, and **event-driven communication** via **RabbitMQ** for async flows.

* **API Gateway & Routing**:  Integrated with **API Gateway** (e.g., **AWS API Gateway**) for routing, throttling, and central auth handling.

* **Auth & Security**:  Implemented **JWT-based authentication**, **OAuth2**, **SSO**, and service-to-service auth with **mTLS** or API keys.

* **Database per Service**:  Followed the **Database per Service** principle using **PostgreSQL**, **MongoDB**, or **Redis** depending on the use case. Ensured **data consistency** using **sagas** and **eventual consistency** patterns.

* **CI/CD & DevOps**:  Containerized services using **Docker**, deployed on **Kubernetes (K8s)** or **AWS ECS/EKS**. Automated deployments via **GitHub Actions**, **Jenkins**, or **GitLab CI/CD**.

* **Observability & Monitoring**:  Integrated centralized **logging (Datalogs)**

* **Resilience & Fault Tolerance**:  Used **circuit breakers (e.g., with Hystrix or custom middleware)**, **rate limiting**, **retry patterns**, and **bulkheads** to build robust systems.

* **Challenges Handled**:

  * Managing distributed transactions using **SAGA pattern**.
  * Ensuring backward compatibility and **zero-downtime deployments**.
  * Standardizing APIs with **Swagger** documentation.

---





### Docker Basics

**Docker?**
Docker is an open-source platform for **building, packaging, and running applications** in containers.
It ensures consistency across different environments (dev, test, prod).

**Docker container**
A lightweight, standalone, and executable software package that includes everything needed to run a piece of software: code, runtime, system tools, libraries.

---

### Images vs Containers

| Concept    | Image                           | Container                         |
| ---------- | ------------------------------- | --------------------------------- |
| Definition | Read-only template              | Running instance of an image      |
| Lifecycle  | Created once, reused many times | Starts/stops/destroys dynamically |
| Example    | `nginx:latest`                  | `container running nginx:latest`  |

---

### Docker Architecture

* **Docker CLI** – Command line interface
* **Docker Daemon** – Runs on the host and manages images/containers
* **Docker Images** – Templates for containers
* **Docker Registry** – Stores and distributes images (e.g., Docker Hub)

---


### Docker Compose


A tool to **define and run multi-container applications** using `docker-compose.yml`.

Example:

```yaml
version: '3'
services:
  web:
    image: nginx
    ports:
      - "8080:80"
  app:
    build: .
    depends_on:
      - db
  db:
    image: postgres
```

Run with:

```bash
docker-compose up -d
```

---

### Volumes and Bind Mounts

| Type       | Description                                    |
| ---------- | ---------------------------------------------- |
| Volume     | Managed by Docker, stored in `/var/lib/docker` |
| Bind Mount | Maps a specific path on host to container      |

**Q6. Why use volumes?**
To persist data across container restarts and decouple data from image.

---

### Networking in Docker




> Docker provides multiple networking drivers to control how containers communicate with each other and the outside world.
> I’ve worked with all four — `bridge`, `host`, `none`, and `overlay` — depending on the deployment scenario.


| Mode      | Used For                                        | Scope          |
| --------- | ----------------------------------------------- | -------------- |
| `bridge`  | Local/internal microservices on one host        | Isolated, NAT  |
| `host`    | Host-level access, monitoring, low-latency apps | Shared host    |
| `none`    | Networkless secure workloads                    | Fully isolated |
| `overlay` | Swarm/multi-host communication                  | Cross-host     |

---

> So in short, I choose the network mode based on the **isolation level**, **performance requirement**, and whether the app needs to **talk across hosts**.


**Bridge Network**

> **Definition**:
> This is the **default network** used by Docker. It creates a private virtual network on the host, and containers can communicate via their container names.

> **Real-world use**:
> In local development, I ran a set of microservices like a **Node.js backend**, **MongoDB**, and **Redis**. I connected them using a custom bridge network to allow internal communication while keeping them isolated from the host.

```bash
docker network create my-bridge-net
docker run --network my-bridge-net node-app
docker run --network my-bridge-net mongo
```

✅ Ideal for **single-host apps** that need to talk internally.

---

### **Host Network**

> **Definition**:
> This mode **bypasses Docker’s virtual network** and lets the container share the **host’s network stack directly**.

> **Real-world use**:
> When I deployed **Prometheus Node Exporter**, I used the `host` network so it could expose system metrics on the host’s native interface without any NAT or port mapping.

```bash
docker run --network host prom/node-exporter
```

✅ I use it when I need **maximum performance or direct access to host ports**, such as monitoring agents or real-time event processors.

---

### **None Network**

> **Definition**:
> Completely disables networking for the container — no internet, no internal communication.

> **Real-world use**:
> I used this in a **secure batch processing container** where the requirement was full network isolation (e.g., in fintech environments), to prevent any accidental external calls.

```bash
docker run --network none my-secure-job
```

✅ Perfect for **air-gapped**, **zero-trust** jobs or unit tests that don’t need the network.

---

### **Overlay Network**

> **Definition**:
> This is used for **multi-host communication** across Docker Swarm nodes. It creates a distributed network spanning multiple machines.

> **Real-world use**:
> In a **Docker Swarm setup**, I deployed services like `auth-service` and `order-service` across multiple VMs. Overlay networking allowed them to securely talk to each other across the cluster.

```bash
docker network create --driver overlay app-network
docker service create --network app-network auth-service
```

✅ Best for **production microservices**, where containers span across multiple nodes.

---


---

### Container Lifecycle

**Common states:**

* Created
* Running
* Paused
* Exited
* Dead

**Q8. Restart policies:**

```bash
docker run --restart always ...
```

* `no`: Do not restart (default)
* `on-failure`: Restart only on error
* `always`: Always restart
* `unless-stopped`: Restart unless manually stopped

---

### Common Docker Commands

| Task                   | Command Example                            |
| ---------------------- | ------------------------------------------ |
| Build image            | `docker build -t myapp .`                  |
| Run container          | `docker run -d -p 8080:80 nginx`           |
| List containers        | `docker ps -a`                             |
| Stop container         | `docker stop <container_id>`               |
| Remove container       | `docker rm <container_id>`                 |
| List images            | `docker images`                            |
| Remove image           | `docker rmi <image_id>`                    |
| Access container shell | `docker exec -it <container_id> /bin/bash` |
| View logs              | `docker logs <container_id>`               |
| Prune unused data      | `docker system prune`                      |

---

### Docker in CI/CD

**Q9. How is Docker used in CI/CD pipelines?**

* Build Docker images during CI.
* Push to registry (Docker Hub, GitHub Container Registry, etc.).
* Deploy containers in CD step (Kubernetes, ECS, etc.).

---

### Security Best Practices

* Use **official base images**.
* Minimize image size with multi-stage builds.
* Use `docker scan` or **Snyk** to check for vulnerabilities.
* Run containers as **non-root** users.
* Set resource limits: `--memory`, `--cpus`

---

### Bonus: Real-World Scenarios

**Q10. How to troubleshoot a failed container?**

* `docker logs <container>`
* `docker inspect <container>`
* Check Dockerfile/CMD for issues

**Q11. Difference between `ENTRYPOINT` and `CMD`?**

| Feature     | `ENTRYPOINT`                     | `CMD`                 |
| ----------- | -------------------------------- | --------------------- |
| Purpose     | Defines executable               | Provides default args |
| Overridable | No (unless using `--entrypoint`) | Yes (via CLI)         |
| Example     | `ENTRYPOINT ["node", "app.js"]`  | `CMD ["app.js"]`      |

---



### **Docker vs VM**

- **"Docker and Virtual Machines both allow you to run applications in isolated environments, but they do so in fundamentally different ways.**

- Virtual Machines use **hardware-level virtualization**. Each VM runs its own full operating system on top of a hypervisor like VMware or VirtualBox. This provides **strong isolation**, but it comes at the cost of **higher resource usage and slower startup times**—since each VM includes a full OS.

- On the other hand, **Docker uses OS-level virtualization**. Instead of running a full OS per instance, Docker containers **share the host's kernel**, making them **much lighter and faster**. They can start in seconds and consume fewer resources, which makes Docker ideal for **microservices, CI/CD pipelines, and scalable deployments**.

- That said, Docker has **less isolation compared to VMs**, because it runs as processes on the host OS. If security or OS-level separation is a strict requirement—like in multi-tenant environments—VMs might be more suitable.

 So, in short:
 * **Docker is best for lightweight, fast, scalable applications.**
 * **VMs are better for full-stack OS environments or when stronger isolation is needed."**

#### **Key Points to Emphasize in Interview:**

| Feature        | Highlight in Interview                                |
| -------------- | ----------------------------------------------------- |
| Startup Time   | Docker is faster (seconds vs. minutes)                |
| Resource Usage | Docker is lighter; more efficient use of host         |
| Isolation      | VMs offer stronger isolation                          |
| Use Cases      | Docker: CI/CD, microservices; VM: legacy, secure apps |

---



### **Alpine image**

- **"An Alpine image is a minimal Docker base image built on Alpine Linux, which is a security-focused, lightweight Linux distribution. It's very small in size—typically around 5MB—compared to standard base images like Ubuntu or Debian, which can be 100MB or more.**

- This makes Alpine ideal for reducing Docker image size, speeding up build times, and improving overall efficiency in CI/CD pipelines. I often use Alpine in production when I want fast deployment and minimal overhead, especially for microservices or APIs.

- For example, in Node.js projects, I use `node:alpine` as the base image, which significantly reduces image size and startup time. I then install only the necessary dependencies using Alpine’s package manager `apk`.

- However, one important consideration is that Alpine uses `musl` instead of `glibc`, so some native libraries or binaries might not work out of the box. In such cases, I test thoroughly or switch to a slightly larger image if compatibility becomes an issue.

- So in summary, **Alpine is great for lightweight, secure, and efficient Docker containers**, but it’s important to evaluate library compatibility during the build process."

---

####  Bonus: Key Phrases to Highlight

* "Minimal base image (\~5MB)"
* "Faster build and deployment times"
* "Used `apk` to install only required packages"
* "Be cautious with `glibc` vs `musl` for native dependencies"
* "Ideal for microservices and production efficiency"

---

### **Windows Docker Image on a Linux Machine**

- **No, we cannot directly run a Windows Docker image on a Linux host.**

- **"Windows Docker images are built for the Windows kernel**,
- while **Linux Docker images rely on the Linux kernel**.
- Since **containers share the host OS kernel, a Linux host cannot run a Windows container natively.**

- Docker does not emulate operating systems;
- it isolates applications at the OS level.
- This is why a Windows container needs a Windows kernel, and a Linux container needs a Linux kernel.

 However, if I absolutely need to run Windows containers on a Linux machine, I’d explore two options:

- 1. **Use a Windows VM** on the Linux machine using something like Hyper-V, VirtualBox, or VMware, and run Docker inside that Windows VM.
- 2. **Use Windows containers in the cloud**, like on Azure or AWS ECS with Windows support.

 But in general, if portability is a concern, I try to stick with **Linux-based images**, since they are more cross-platform and better supported on most Docker hosts."

---

#### Key Points for Interviews

| Concept           | Summary                                                                |
| ----------------- | ---------------------------------------------------------------------- |
| Kernel dependency | Containers share the **host OS kernel**                                |
| Incompatibility   | Windows kernel ≠ Linux kernel → can't run one type on the other        |
| Workaround        | Use a VM or cloud-based Windows host if you need to run Windows images |
| Best practice     | Prefer Linux images for cross-platform portability                     |

---


### **Linux Docker Image on a Windows Machine**

- **Yes, Run Linux Docker images on a Windows machine**
- but only if you’re **using Docker with WSL 2 or a Linux VM under the hood.**


- **"Yes, it's possible to run Linux Docker images on a Windows machine, and this is a common practice.
- However, it's important to understand that Windows cannot natively run Linux containers because containers share the host OS kernel, and Linux containers require a Linux kernel.**

- To solve this, Docker Desktop for Windows uses **WSL 2 (Windows Subsystem for Linux)** or **a lightweight Linux VM** (previously Hyper-V) to provide a Linux kernel environment. This allows Docker to run Linux containers seamlessly on Windows.

- In my setup, I typically enable Docker to use WSL 2 as the backend. This gives me near-native Linux performance on a Windows laptop, along with support for standard Linux Docker images like `node:alpine` or `python:3.10`.

- So while Windows can't run Linux containers natively, tools like Docker Desktop abstract that away using virtualization under the hood — making it feel native to the user."


####  Key Points

| Concept                  | Details                                                             |
| ------------------------ | ------------------------------------------------------------------- |
| Containers use OS kernel | Linux containers need Linux kernel                                  |
| Windows ≠ Linux kernel   | So Docker Desktop uses **WSL 2** or **Linux VM** internally         |
| Docker Desktop backend   | WSL 2 is default; older versions used Hyper-V                       |
| Result                   | You can run Linux containers *transparently* on Windows with Docker |


### Docker Layers

- In Docker, **layers** are the building blocks of images.
- Each instruction in a `Dockerfile` (like `RUN`, `COPY`, or `ADD`) creates a **new image layer**,
- which builds on the one before it.

---

#### **How Docker Layers Work**

1. Docker builds images **layer by layer**.
2. Each layer is **cached**, so if nothing has changed, Docker **reuses** it.
3. Layers are **read-only**, but the top container layer is writable when the container runs.

---

#### **Example: Dockerfile with Layers**

```Dockerfile
FROM node:18-alpine     # Layer 1: Base image
WORKDIR /app            # Layer 2: Set working directory
COPY package.json .     # Layer 3: Copy package file
RUN npm install         # Layer 4: Install dependencies
COPY . .                # Layer 5: Copy app source
CMD ["node", "index.js"]# Layer 6: Command to run app
```

Each instruction creates a **new layer**, and Docker stores these layers in a **layered filesystem** (like OverlayFS).

---

#### Benefits of Layers

| Feature           | Explanation                                               |
| ----------------- | --------------------------------------------------------- |
| 🧠 **Caching**    | Reuses unchanged layers to speed up builds                |
| 💾 **Efficiency** | Shared layers between images reduce disk usage            |
| 🚀 **Speed**      | Only changed layers need to be rebuilt                    |
| 📦 **Modularity** | Layered changes make debugging and version control easier |

---

#### Layering Best Practices

| Tip                      | Why                                                    |
| ------------------------ | ------------------------------------------------------ |
| Combine `RUN` commands   | Reduces layer count and improves caching               |
| Order commands carefully | Place least-changing commands first to maximize reuse  |
| Use `.dockerignore`      | Prevent unnecessary file copies from affecting caching |
| Keep images small        | Smaller images = faster builds, less attack surface    |

---

#### Visual Summary

```
Image = Layer 1 (FROM)
       + Layer 2 (WORKDIR)
       + Layer 3 (COPY)
       + Layer 4 (RUN)
       + Layer 5 (COPY)
       + Layer 6 (CMD)
```

---
x





## Microservice Communication Using Queue

* Node.js + Express.js
* REST API (for synchronous calls)
* RabbitMQ (for async/event-based communication)

---

**Microservices**
**Order Service** -  Creates an order then Notifies Payment Service
**Payment Service** - Listens for new order events then Processes the payment


**Folder Structure**

```
/order-service
  - index.js
  - package.json

/payment-service
  - index.js
  - package.json

/shared
  - rabbitmq.js
```


**shared/rabbitmq.js – RabbitMQ connection**

```js
// shared/rabbitmq.js
const amqp = require('amqplib');

let channel, connection;

async function connect() {
  connection = await amqp.connect('amqp://localhost');
  channel = await connection.createChannel();
  await channel.assertQueue('ORDER_CREATED');
}

function publishToQueue(queue, data) {
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)));
}

function subscribe(queue, callback) {
  channel.consume(queue, msg => {
    const data = JSON.parse(msg.content.toString());
    callback(data);
    channel.ack(msg);
  });
}

module.exports = { connect, publishToQueue, subscribe };
```

---

**order-service/index.js**

```js
// order-service/index.js
const express = require('express');
const { connect, publishToQueue } = require('../shared/rabbitmq');
const app = express();
app.use(express.json());

app.post('/order', async (req, res) => {
  const order = {
    orderId: Math.floor(Math.random() * 10000),
    userId: req.body.userId,
    amount: req.body.amount,
  };

  console.log('Order Created:', order);

  // Publish order created event
  publishToQueue('ORDER_CREATED', order);

  res.send({ message: 'Order Created', order });
});

connect().then(() => {
  app.listen(3001, () => {
    console.log('Order Service listening on port 3001');
  });
});
```

**payment-service/index.js**

```js
// payment-service/index.js
const { connect, subscribe } = require('../shared/rabbitmq');

function processPayment(order) {
  console.log(`Processing payment for order ${order.orderId}, Amount: ${order.amount}`);
  // Simulate DB save or API call here
}

connect().then(() => {
  subscribe('ORDER_CREATED', processPayment);
  console.log('Payment Service listening for ORDER_CREATED events');
});
```


**How to Run**

1. Install RabbitMQ locally or use Docker:

```bash
docker run -d --hostname rabbit --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

2. Install dependencies in both services:

```bash
cd order-service && npm install express amqplib
cd ../payment-service && npm install amqplib
```

3. Run both services:

```bash
Terminal 1
node order-service/index.js

Terminal 2
node payment-service/index.js
```

4. Trigger an order:

```bash
curl -X POST http://localhost:3001/order \
  -H "Content-Type: application/json" \
  -d '{"userId":1,"amount":200}'
```

You’ll see the **Order Service** logs order creation, and **Payment Service** logs payment processing.

---









## microservice communication using HTTP
**Two microservices** communicate using **HTTP (REST)** in **Node.js** — a common, synchronous communication method.

---

**Scenario: Orders & Payments via HTTP**

* **Order Service** creates an order and **calls Payment Service** over HTTP to process the payment.
* **Payment Service** exposes a `/pay` endpoint.
* Communication is **synchronous**: Order waits for a response from Payment.

---

**Folder Structure**

```
/order-service
  - index.js
  - package.json

/payment-service
  - index.js
  - package.json
```

---

**payment-service/index.js**

```js
// payment-service/index.js
const express = require('express');
const app = express();
app.use(express.json());

app.post('/pay', (req, res) => {
  const { orderId, amount, userId } = req.body;

  console.log(`✅ Payment received for order ${orderId}, amount ₹${amount}, user ${userId}`);

  // Simulate payment success
  res.status(200).json({
    message: 'Payment successful',
    paymentId: Math.floor(Math.random() * 100000),
  });
});

app.listen(3002, () => {
  console.log('🟢 Payment Service running on http://localhost:3002');
});
```

---

**order-service/index.js**

```js
// order-service/index.js
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/order', async (req, res) => {
  const order = {
    orderId: Math.floor(Math.random() * 10000),
    userId: req.body.userId,
    amount: req.body.amount,
  };

  console.log(`📝 Order Created: ${JSON.stringify(order)}`);

  try {
    // Communicate with Payment Service over HTTP
    const response = await axios.post('http://localhost:3002/pay', order);

    console.log('💵 Payment Service Response:', response.data);

    res.status(200).json({
      message: 'Order placed and payment processed',
      order,
      payment: response.data,
    });
  } catch (error) {
    console.error('❌ Payment Service Error:', error.message);
    res.status(500).json({ message: 'Payment failed', error: error.message });
  }
});

app.listen(3001, () => {
  console.log('🟡 Order Service running on http://localhost:3001');
});
```

---

**Test the Setup**

1. Install dependencies:

```bash
cd order-service && npm install express axios
cd ../payment-service && npm install express
```

2. Run both services in separate terminals:

```bash
node payment-service/index.js
node order-service/index.js
```

3. Make a POST request to the Order Service:

```bash
curl -X POST http://localhost:3001/order \
  -H "Content-Type: application/json" \
  -d '{"userId": 101, "amount": 500}'
```

**Expected Output:**

* **Order Service** logs the order and calls Payment.
* **Payment Service** logs the payment.
* Response includes both order and payment confirmation.

---

**Summary**

| Component       | Port | Responsibility                    |
| --------------- | ---- | --------------------------------- |
| Order Service   | 3001 | Accepts orders, calls Payment API |
| Payment Service | 3002 | Handles payment logic             |








Great topic! Here's an **interview-ready explanation** of **Docker layers** and how to **optimize them** — ideal for a full-stack developer with 10+ years of experience.


## **Docker Layers**

- Each instruction in a Dockerfile (`FROM`, `COPY`, `RUN`, etc.) creates a **new image layer**.
- Docker uses a **layered file system** where layers are cached and reused to speed up builds and reduce image size.
- Docker **caches layers by instruction**. So reordering Dockerfile commands or **placing frequently changing content early in the Dockerfile invalidates the cache** — leading to longer builds."




### 🔹 **Types of Layers**

* **Base Layer** → `FROM node:18-alpine`
* **Dependency Layer** → `COPY package.json` + `RUN npm install`
* **Application Layer** → `COPY . .`
* **Build Layer** → `RUN npm run build`, etc.



## **Optimize Docker Layers**


### 1. **Minimize the Number of Layers**

> Combine multiple `RUN` statements into one:

```Dockerfile
# Bad:
RUN apt-get update
RUN apt-get install -y curl

# Good:
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*
```

---

### 2. **Leverage Layer Caching**

> Place **less frequently changing instructions** first:

```Dockerfile
# Efficient
COPY package*.json ./
RUN npm install

# Inefficient (rebuilds on every file change)
COPY . . 
RUN npm install
```

---

### 3. **Use `.dockerignore`**

> Prevent unnecessary files from being copied (e.g., `node_modules`, `.git`, `logs`, etc.).

---

### 4. **Use Multi-stage Builds**

> Separate build-time dependencies from runtime:

```Dockerfile
# Stage 1: Build
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Stage 2: Runtime
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/app.js"]
```

✅ Results in **smaller, cleaner images** with only production code.

---

### 5. **Choose a Minimal Base Image**

> Use `alpine`, `distroless`, or language-specific slim images:

```Dockerfile
FROM node:18-alpine
```

---

### 6. **Clean Up After Installing**

> Remove temp files, package lists, or caches in the same `RUN` step to avoid creating a new layer with leftover data.

---



### Dockerfile

A text file containing **instructions to build a Docker image**.


| Command   | Purpose                             |
| --------- | ----------------------------------- |
| `FROM`    | Base image                          |
| `COPY`    | Copy files into image               |
| `RUN`     | Execute commands in build process   |
| `CMD`     | Default command when container runs |
| `EXPOSE`  | Open a port                         |
| `ENV`     | Set environment variables           |
| `WORKDIR` | Set working directory               |

`order-service` and `payment-service` — each with its **own Dockerfile** and optional `docker-compose.yml` to run them together in a microservices environment.

```ts
project-root/
├── order-service/
│   ├── Dockerfile
│   ├── package.json
│   └── index.js
├── payment-service/
│   ├── Dockerfile
│   ├── package.json
│   └── index.js
└── docker-compose.yml
```


**`order-service/Dockerfile`**

```Dockerfile
# Use Node.js as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install

COPY . .

# Expose port and start app
EXPOSE 3001
CMD ["node", "index.js"]
```


**`payment-service/Dockerfile`**

```Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3002
CMD ["node", "index.js"]
```


**`docker-compose.yml` (at root level)**

```yaml
version: '3.8'

services:
  order-service:
    build:
      context: ./order-service
    ports:
      - "3001:3001"
    networks:
      - app-network

  payment-service:
    build:
      context: ./payment-service
    ports:
      - "3002:3002"
    networks:
      - app-network

networks:
  app-network:
```



```bash
docker-compose up --build
```


**Sample `index.js` for `order-service`**

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Order Service Running'));
app.listen(3001, () => console.log('Order Service on port 3001'));
```

**Sample `index.js` for `payment-service`**

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Payment Service Running'));
app.listen(3002, () => console.log('Payment Service on port 3002'));
```

