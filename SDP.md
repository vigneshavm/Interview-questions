

| **Topic**                           | **Anchor Links / Subtopics**                                                                                                                                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **OOP Principles**                  | - [SOLID Principles](#solid-principles)  -  Inheritance vs Composition  -  Abstraction vs Encapsulation  -  Polymorphism (Compile-time vs Runtime)  -  Interface vs Abstract Class |
| **Design Patterns**                 | - Singleton, Factory, Builder  -  Strategy, Observer, Decorator  -  Adapter vs Facade  -  Command, Mediator, Proxy  -  When to use each pattern               |
| **Software Architecture**           | - Monolith vs Microservices  -  Layered Architecture  -  Hexagonal/Clean Architecture  -  Dependency Injection  -  MVC / MVVM                                 |
| **Testing Principles**              | - Unit Testing, Integration Testing  -  Test-Driven Development (TDD)  -  Mocking & Stubbing  -  Code Coverage vs Code Quality                                   |
| **Concurrency & Multithreading**    | - Race Condition, Deadlock, Starvation  -  Mutex vs Semaphore  -  Thread-safe Data Structures  -  Producer-Consumer  -  Async vs Parallelism                  |
| **Memory Management**               | - Stack vs Heap  -  Garbage Collection (GC)  -  Memory Leaks  -  Smart Pointers (C++)  -  Object Lifecycle                                                    |
| **Code Quality & Maintainability**  | - DRY, KISS, YAGNI principles  -  Code Smells  -  Refactoring Techniques  -  Cyclomatic Complexity  -  Clean Code Practices                                   |
| **Error Handling & Debugging**      | - Exception Handling vs Error Codes  -  Try-Catch Best Practices  -  Debugging Tools & Logs  -  Fail-fast vs Fail-safe                                           |
| **Version Control & Collaboration** | - Git Basics (commit, push, pull, merge)  -  Rebase vs Merge  -  GitFlow Workflow  -  Resolving Conflicts  -  Code Reviews (PR Best Practices)                |
| **API Design Principles**           | - RESTful APIs vs GraphQL  -  Idempotency, Rate Limiting  -  OpenAPI / Swagger  -  Pagination, Filtering  -  HTTP Status Codes, Headers                       |
| **Secure Coding**                   | - OWASP Top 10  -  Input Validation & Sanitization  -  SQL Injection, XSS, CSRF  -  Authentication vs Authorization  -  Token-based Auth (JWT, OAuth2)        |
| **Build & Deployment**              | - CI/CD Basics  -  Docker / Containerization  -  Build Tools (Maven, Gradle, Webpack)  -  DevOps Integration  -  Rollbacks and Blue-Green Deployments         |
| **Logging & Monitoring**            | - Structured Logging  -  Log Levels (INFO, WARN, ERROR)  -  Metrics & Health Checks  -  Tracing & Correlation IDs  -  Tools: ELK, Prometheus, Grafana         |
| **Agile & SDLC Methodologies**      | - Scrum, Kanban  -  Sprint Planning, Retrospectives  -  User Stories, Acceptance Criteria  -  Estimation Techniques  -  Continuous Feedback Loops             |
| **Front End**      | - [Microfrontend design pattern](#Microfrontend-design-pattern)             |



## Circuit Breaker

- The **Circuit Breaker** is a **resilience pattern** used in distributed systems to **prevent cascading failures** and allow systems to recover gracefully when a downstream service is failing or unresponsive.

- The **Circuit Breaker pattern** is a crucial component in **fault-tolerant microservices**, helping isolate failures and allowing systems to degrade gracefully instead of collapsing entirely.


### 🧠 Why It's Important:

* Prevents **system overload** from repeated failed calls.
* Enables **fast failure**, improving user experience.
* Allows **recovery** without restarting the entire service.

---

### 📦 Example (Microservices):

Service A calls Service B. If B is down:

* With Circuit Breaker:

  * A stops calling B after repeated failures.
  * It retries after a delay instead of hammering B continuously.

---

### 🔌 Real-World Analogy:

Think of it like an electrical circuit breaker — it “trips” to **prevent overload or damage** when something goes wrong.

---

### 🔁 How It Works:

The circuit breaker can be in one of **three states**:

1. **Closed**:

   * All requests pass through.
   * If failures exceed a threshold, it **trips** (moves to Open).

2. **Open**:

   * Requests are **immediately rejected** (fail fast).
   * A timeout begins (cool-down period).

3. **Half-Open**:

   * A limited number of requests are allowed to check if the service has recovered.
   * If successful, the circuit **closes**; otherwise, it goes back to **Open**.

---


### 🛠️ Tools/Libraries:

* **Node.js**: `opossum`








---



## SOLID principles
 - The **SOLID principles** are **five design principles** that help you write **better, cleaner, more maintainable** code 
 - not only in JavaScript but in any object-oriented or structured programming language.  
---

| Principle | Key Idea                                   |
|:---------- |:------------------------------------------ |
| SRP        | One responsibility per function/class     |
| OCP        | Open to extend, closed to modify           |
| LSP        | Subtypes can substitute base types         |
| ISP        | Prefer many small interfaces               |
| DIP        | Depend on abstractions, not concretions    |


### S — Single Responsibility Principle (SRP)

- **Definition**: A class/module/function should **have only one reason to change** — meaning it should **do only one thing**.
- **In JS**: Keep functions small and focused.

```javascript
// Bad: function doing too many things
function manageUser(user) {
  saveToDatabase(user);
  sendWelcomeEmail(user.email);
}

// Good: each function has one responsibility
function saveUser(user) {
  // Save user to database
}

function sendWelcomeEmail(email) {
  // Send email
}
```

---

### O — Open/Closed Principle (OCP)

- **Definition**: Software entities (classes, modules, functions) should be **open for extension but closed for modification**.
- **In JS**: You should be able to **add new behavior without modifying existing code**.

```javascript
// Bad
function getArea(shape) {
  if (shape.type === 'circle') {
    return Math.PI * shape.radius ** 2;
  } else if (shape.type === 'square') {
    return shape.length * shape.length;
  }
}

// Good: Use polymorphism
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Square {
  constructor(length) {
    this.length = length;
  }
  area() {
    return this.length * this.length;
  }
}

function getArea(shape) {
  return shape.area();
}
```

---

### L — Liskov Substitution Principle (LSP)

- **Definition**: Subtypes must be **substitutable for their base types** without breaking the program.
- **In JS**: Derived classes should fully behave like their base class.

```javascript
class Bird {
  fly() {
    console.log('Flying');
  }
}

class Duck extends Bird {
  quack() {
    console.log('Quack!');
  }
}

function makeBirdFly(bird) {
  bird.fly();
}

const duck = new Duck();
makeBirdFly(duck);  // Works correctly 
```

---

### I — Interface Segregation Principle (ISP)

- **Definition**: Clients should **not be forced to depend on interfaces they do not use**.
- **In JS**: Break large interfaces into smaller, specific ones.

```javascript
// Bad: too much responsibility
class BadPrinter {
  print() {}
  scan() {}
  fax() {}
}

// Good: split interfaces
class Printer {
  print() {}
}

class Scanner {
  scan() {}
}
```
> So if a class only needs "print", it doesn't have to implement "fax" or "scan".

---

### D — Dependency Inversion Principle (DIP)

- **Definition**: High-level modules should not depend on low-level modules. Both should depend on abstractions.
- **In JS**: Depend on **interfaces or abstractions**, not concrete implementations.

```javascript
// Bad
class MySQLDatabase {
  save(data) {
    console.log('Saving to MySQL', data);
  }
}

class UserService {
  constructor() {
    this.database = new MySQLDatabase();
  }
  saveUser(user) {
    this.database.save(user);
  }
}

// Good
class UserService {
  constructor(database) {
    this.database = database;
  }
  saveUser(user) {
    this.database.save(user);
  }
}

const mysqlDB = new MySQLDatabase();
const userService = new UserService(mysqlDB);
```
> Now you can easily switch from `MySQLDatabase` to `MongoDatabase` without changing `UserService`.

---



##  **Microfrontend design pattern**


- The **Microfrontend** design pattern applies the concept of **microservices to the frontend**.
- It breaks a large monolithic frontend into **smaller, independent, and loosely coupled applications**
- Each owned by different teams and responsible for a specific business feature.

Each microfrontend can:

- * Be developed using **different frameworks** (e.g., React, Angular, Vue)
- * Be **deployed independently**
- * Integrate at runtime into a **shell or container app**

- This pattern improves **team autonomy**, **scalability**, and allows **incremental upgrades** without rewriting the entire app.


- In my experience, microfrontends work best when the organization is structured for it — with cross-functional teams owning features end-to-end. 
- I've used tools like Webpack Module Federation to integrate and deploy independent React apps into a container seamlessly.

---

###  **Example:**

In an e-commerce platform:

* The **Product page** might be a React app,
* The **Cart module** might be built in Angular,
* The **User profile** in Vue — all loaded into one unified frontend.

---

### 🔧 **Common Tools & Technologies:**

* **Webpack Module Federation** – for sharing code and modules at runtime
* **Single-SPA** – for orchestrating microfrontends
* **Web Components** – for framework-agnostic encapsulation
* **Nx or Turborepo** – for monorepo support

---

### 🚧 **Challenges & Solutions:**

| Challenge        | Solution                                         |
| ---------------- | ------------------------------------------------ |
| Shared state     | Use global events, Redux, or shared context APIs |
| CSS conflicts    | Use CSS Modules or Shadow DOM                    |
| Auth/session     | Centralized auth layer or shared tokens          |
| Version mismatch | Align shared dependencies via Module Federation  |

---

###  **When to use:**

* Large teams working on different frontend features
* Need for independent deployment
* Migrating from monolith to modular

### ❌ **Avoid when:**

* The app is small or single-team owned — adds unnecessary complexity

---


### 🚀 Tips

* You need to enable CORS for cross-origin loading.
* Each app should use `publicPath: 'auto'` for dynamic asset loading.
* You can deploy these apps independently (e.g., on different S3 buckets or subdomains).

---

### 🔧 Architecture Overview

| App                | Tech    | Port |
| ------------------ | ------- | ---- |
| `container`        | React   | 3000 |
| `app1` (Header)    | React   | 3001 |
| `app2` (Profile)   | Vue 3   | 3002 |
| `app3` (Dashboard) | Angular | 3003 |

All apps expose a component via Module Federation, and the **container** consumes them dynamically.

---

### 1️⃣ `app1` – React (Header)

#### 📁 Exposed Component

```jsx
// src/Header.js
export default function Header() {
  return <h1>This is Header from App1 (React)</h1>;
}
```

#### 🛠 webpack.config.js

```js
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  devServer: { port: 3001 },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app1',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/Header',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};
```

---

### 2️⃣ `app2` – Vue (Profile)

#### 📁 Exposed Component

```vue
<!-- src/components/Profile.vue -->
<template><div>This is Profile from App2 (Vue)</div></template>
<script>
export default {
  name: "Profile"
}
</script>
```

#### 🛠 webpack.config.js

```js
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  devServer: { port: 3002 },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      exposes: {
        './Profile': './src/components/Profile.vue',
      },
      shared: ['vue'],
    }),
  ],
};
```

---

### 3️⃣ `app3` – Angular (Dashboard)

#### 📁 Exposed Component

```ts
// dashboard.component.ts
@Component({
  selector: 'app-dashboard',
  template: `<div>This is Dashboard from App3 (Angular)</div>`
})
export class DashboardComponent {}
```

#### 🛠 webpack.config.js (via Angular CLI)

```ts
// webpack.config.js (custom for Angular with Module Federation)
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: { publicPath: "auto" },
  devServer: { port: 3003 },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app3',
      filename: 'remoteEntry.js',
      exposes: {
        './Dashboard': './src/app/dashboard/dashboard.component.ts',
      },
      shared: {
        "@angular/core": { singleton: true },
        "@angular/common": { singleton: true },
      },
    }),
  ],
};
```

---

### 🧩 `container` – React (Main App)

#### 🛠 webpack.config.js

```js
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  devServer: { port: 3000 },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        app1: 'app1@http://localhost:3001/remoteEntry.js',
        app2: 'app2@http://localhost:3002/remoteEntry.js',
        app3: 'app3@http://localhost:3003/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};
```

#### 📁 Usage in Container App

```jsx
const Header = React.lazy(() => import('app1/Header'));
const Profile = React.lazy(() => import('app2/Profile'));
const Dashboard = React.lazy(() => import('app3/Dashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Profile />
      <Dashboard />
    </Suspense>
  );
}
```

---


