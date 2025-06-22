



- [Project Handled Both Backend and Frontend](#Project-Handled-Both-Backend-and-Frontend)
- [Manage full stack development in sprints](#Manage-full-stack-development-in-sprints)
- [Help junior developers get up to speed](#Help-junior-developers-get-up-to-speed)
- [Handle poor code or performance from a team member](#Handle-poor-code-or-performance-from-a-team-member)
- [Manage requirements when clients frequently change](#Manage-requirements-when-clients-frequently-change)
- [Handle production issues when a client is upset](#Handle-production-issues-when-a-client-is-upset)
- [Track project progress](#track-project-progress)
- [Estimate story points](#estimate-story-points)
- [Conflict with colleague or manager](#conflict-with-colleague-or-manager)
- [Handle negative feedback](#handle-negative-feedback)
- [Performant and Secure Backend APIs](#performant-and-secure-backend-apis)
- [Release gets delayed due to unexpected bugs](#release-gets-delayed-due-to-unexpected-bugs)
- [Leading a team and 2 devs are stuck on different issues](#leading-a-team-and-2-devs-are-stuck-on-different-issues)
- [Security issue on production](#security-issue-on-production)
- [Why join Encora](#why-join-encora)


- [Troubleshooting](#troubleshooting-debugging-and-upgrading-existing-software)

**Microservice Communication** - [Using Queue](#microservice-communication-using-queue) - [Using HTTP](#microservice-communication-using-http)
  
**Upgrade** - [Upgrade Next 12 to Next 13](#upgrade-next-12-to-next-13) - [Upgrade Node.js](#nodejs-upgrade) - [Upgrade TypeScript](#typescript-upgrade)

- [Architectural Decisions](#architectural-decisions)
- [Technical Leadership](#technical-leadership)
- [Mentor and Guide Junior Developers](#mentor-and-guide-junior-developers)
- [Lead Code Reviews](#lead-code-reviews)
- [Optimize Applications](#optimize-applications)
- [SDLC](#sdlc)
- [Cross Functional Collaboration](#cross-functional-collaboration)



### **Troubleshooting Debugging and Upgrading existing software**

- Troubleshooting, debugging, and upgrading existing software are core parts of my development process.
- I approach this systematically to ensure stability and long-term maintainability.

**Troubleshooting & Debugging:**
-  I start by **reproducing the issue** using logs, browser/network tools, or test cases.
-  I use **debugging tools** like Chrome DevTools for frontend (React/Next.js) and built-in debuggers or `console.log`, `node inspect`, or VSCode breakpoints for backend (Node.js).
-  I rely heavily on **monitoring and logging tools** like Sentry, LogRocket, or custom logs to track errors in production.
-  I isolate the bug using a **binary search or divide-and-conquer approach**, especially for complex flows or async issues.

**Upgrade & Refactor:**
-  When upgrading dependencies or frameworks, I first review the **release notes** and **breaking changes** (e.g., when moving from React 17 to 18 or Next.js 12 to 13+ App Router).
-  I perform **impact analysis** to determine which parts of the codebase are affected and update incrementally to avoid regressions.
-  I write **automated tests** or enhance test coverage before and after upgrading to validate core flows.
-  I often use tools like `npm audit` and `npx npm-check-updates` to identify outdated packages and address vulnerabilities or deprecated APIs.
- In one project, after a major Node.js version upgrade, we faced issues with a native module used for image processing. 
- I diagnosed the mismatch, recompiled the dependency, and submitted a patch to ensure compatibility — reducing the app’s crash rate by 30%.
- Ultimately, my goal is not just to fix bugs, but to make the software more robust, secure, and performant over time.

**Tools & Practices You Can Mention**

- **Frontend**: React DevTools, Chrome DevTools, Redux Logger, useErrorBoundary.
- **Backend**: Node.js debugger, Postman, Swagger, winston/morgan for logging.
- **Code Quality**: ESLint, Prettier, TypeScript strict mode.
- **Testing**: Jest, React Testing Library, Supertest for API testing.
- **CI/CD**: GitHub Actions, GitLab CI, Jenkins for automating tests on upgrades.





### **Upgrade Next 12 to Next 13**

**"In one of my recent projects, we upgraded a web application from Next.js 12 to 13 with the new App Router structure."**

**Here’s how I approached it:**

- I first **audited the existing pages and routing logic**, since the transition from `pages` to `app` directory involved significant changes in routing, layouts, and data fetching.

- I created a **separate feature branch**, and started upgrading incrementally — converting legacy pages to new `app/` based components using `Server Components` and `Client Components` where needed.

- One challenge was handling **getServerSideProps migration** — I replaced them with the new `fetch` patterns and React Server Components that run on the edge.

- I also updated dependencies like **React 18**, **TypeScript**, and **tailwind.config.js** for compatibility. During the upgrade, I fixed issues related to **hydration mismatches**, especially in custom layouts and shared UI components.

- To prevent regressions, I added **unit and integration tests** using Jest and React Testing Library for critical flows like login, data fetch, and form submission.

- Finally, I deployed it to a **staging environment**, verified performance improvements (reduced TTFB), and ensured **SEO was intact using the new `<metadata>` API**.

- The end result was a cleaner, more modular codebase and faster performance due to the new streaming architecture in Next.js 13. 
- It also improved long-term maintainability by aligning with the latest ecosystem standards.





Great — here's a **Node.js and TypeScript version upgrade example** written in a professional, interview-ready format. You can use this when asked about experience with software upgrades, handling breaking changes, or improving code maintainability.

---

### **Node.js & TypeScript Upgrade**

- In one of my recent backend projects, I was responsible for upgrading the application from Node.js 14 to Node.js 18 and from TypeScript 4.3 to 5.x.

- **The main goals** were to align with LTS support, take advantage of new language features, and address security vulnerabilities reported by tools like `npm audit`.

#### **Nodejs Upgrade**
- First, I reviewed the **official Node.js release notes** and identified breaking changes in Node.js 16 and 18 (e.g., V8 engine updates, removal of legacy APIs like `fs.promises`, changes in OpenSSL defaults, etc.).
- We had some third-party native modules that were not compatible with Node 18. I used `nvm` to test multiple versions locally and contributed to a minimal patch that resolved compilation issues.
- I also switched some modules to modern alternatives — for example, moved from `request` (deprecated) to `axios` or native `fetch` (available in Node 18).

#### **TypeScript Upgrade**
- For the TypeScript upgrade, I updated the compiler and adjusted `tsconfig.json` to include stricter type checks (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`).
- We had to refactor several parts of the codebase where **implicit `any` types or enum usage** caused new errors.
- I leveraged new TypeScript 5.x features like **const type assertions** and **satisfies operator** to improve code expressiveness and reduce boilerplate.
- I also updated types for third-party libraries using `@types/*` and replaced deprecated types where applicable.

**Testing & CI Pipeline:**
- After the upgrade, I ran the full suite of **unit, integration, and end-to-end tests**, and used `tsc --noEmit` to ensure type safety.
- I updated the CI/CD pipeline (GitHub Actions) to use the latest Node.js LTS and TypeScript versions to match local dev environments.
- Overall, this upgrade not only improved the app’s security and performance but also enhanced code maintainability by enforcing stricter type safety and reducing technical debt.
- As a result, we reduced runtime errors by \~25% in the next release cycle, and onboarding new developers became easier thanks to improved type safety and updated documentation.





### **Architectural Decisions**

- I’ve had the opportunity to participate in key architectural decisions and provide technical leadership across several projects — particularly involving full-stack development with React, Next.js, Node.js, and TypeScript."**
- I help design **scalable and modular architectures** — whether it’s deciding between CSR, SSR, or ISR in Next.js, or structuring backend services using REST or GraphQL.
- I contribute to **data modeling** decisions, ensuring normalized, performant schemas for SQL/NoSQL databases.
- I’ve implemented **middleware-based backend architecture** in Node.js using Express or NestJS, separating concerns like auth, logging, and error handling.
- In frontend projects, I’ve led decisions around **component structure**, **state management (e.g., Redux vs. Context API)**, and **code-splitting strategies** for performance.

### **Technical Leadership**

- I conduct **code reviews** with a focus on readability, performance, and adherence to best practices.
- I mentor junior developers, helping them understand TypeScript, React hooks, and debugging techniques.
- I’ve led **refactoring efforts** to reduce tech debt — like migrating class components to functional components and adopting hooks.
- I define **coding standards**, enforce them via tools like ESLint, Prettier, and set up **CI pipelines** for testing and linting.
- I often act as a bridge between developers and product stakeholders, converting business requirements into scalable technical solutions.
- In one project, we rebuilt a monolithic backend into a modular service-based structure using Node.js and PostgreSQL. 
- I led the initial design, defined API contracts, set up TypeScript interfaces for request/response models, and introduced a central error-handling mechanism. 
- I also guided the team on integrating the new architecture into an existing React frontend with minimal disruption."**
- Overall, I enjoy taking ownership of technical decisions that improve long-term code quality, team velocity, and product reliability.





### **Mentor and guide junior developers**

#### **Onboarding & Knowledge Sharing**

* Helped **onboard new developers** by walking them through the codebase, project architecture, and development workflows.
* Created **internal documentation** and developer setup guides to speed up ramp-up time.
* Conducted **intro sessions on key tech stacks** like React, Node.js, and TypeScript to build foundational knowledge.

#### **Code Reviews & Best Practices**

* Regularly conducted **constructive code reviews**, focusing on:

  * Code readability
  * Type safety (especially in TypeScript)
  * Performance and scalability
  * Aligning with team’s coding standards
* Provided **explanations during reviews**, turning feedback into learning opportunities instead of simple corrections.

#### **Skill Development**

* Identified areas of improvement (e.g., debugging skills, clean code, async programming) and recommended **learning resources, articles, and hands-on tasks**.
* Shared insights on **design patterns**, reusable components, and architecture decisions during team discussions.
* Introduced junior developers to modern tooling (e.g., ESLint, Prettier, Git best practices, VS Code extensions) to improve code quality and workflow.

#### **1-on-1 Mentorship**

* Scheduled regular **check-ins with junior devs** to discuss blockers, clarify concepts, or provide guidance on growth.
* Encouraged open communication to foster a safe learning environment and improve confidence in contributing to the team.

#### **Encouraging Ownership & Growth**

* Assigned **small but meaningful tasks** to help them take ownership and build confidence.
* Guided them on writing tests, thinking in terms of edge cases, and understanding the business impact of their work.
* Encouraged participation in sprint planning, retrospectives, and architecture discussions to build product awareness.

#### **Team Capability Building**

* Hosted **internal workshops or tech talks** on topics like React Hooks, API design in Node.js, or Next.js SSR/ISR.
* Promoted a **culture of continuous learning**, pair programming, and shared accountability across the team.

---







### **Lead Code Reviews**

#### **Code Quality & Best Practices**

* Conducted thorough code reviews to ensure **clean, readable, and maintainable code**.
* Emphasized **SOLID principles**, proper modularization, and avoiding code duplication.
* Reviewed both frontend (React/Next.js) and backend (Node.js/TypeScript) code for adherence to **project architecture and design patterns**.

#### **Consistency & Standards**

* Enforced **consistent code formatting** using tools like **ESLint, Prettier**, and custom rules defined in `.eslintrc`.
* Promoted consistent naming conventions, folder structures, and interface design across the codebase.
* Helped maintain a **centralized style guide** and updated it as the codebase evolved.

#### **Bug Prevention & Edge Case Handling**

* Checked for potential **runtime errors**, improper async/await usage, and unhandled exceptions.
* Identified edge cases and encouraged adding **unit tests or fallback conditions** to improve reliability.
* Validated TypeScript types/interfaces and ensured use of strict typing to avoid hidden bugs.

#### **Knowledge Sharing & Feedback**

* Provided **actionable, respectful feedback** during reviews, treating them as learning opportunities.
* Explained not just *what* to change, but also *why*, to help junior developers understand the reasoning behind best practices.
* Used reviews to mentor teammates on **performance optimization, state management (React), API handling**, and proper use of hooks or middleware.

#### **CI Integration & Review Tools**

* Integrated code review workflows with **CI/CD pipelines** (e.g., GitHub Actions, GitLab CI) to automate linting and testing before merging.
* Used tools like **GitHub PR templates**, **SonarQube**, and **CodeCov** to standardize review checklists and surface code smells or low coverage.

#### **Team Impact**

* Improved team velocity by reducing the number of bugs found in QA through better review coverage.
* Encouraged a **review culture** where everyone contributes to maintaining high-quality code, not just senior devs.

---






### **Optimize applications**

**Front-End**

* Optimized React/Next.js applications for performance by implementing **code-splitting**, **lazy loading**, and **dynamic imports** to reduce initial load time.
* Enhanced responsiveness across devices using **responsive design principles**, **CSS media queries**, and **mobile-first layouts** with Tailwind CSS/Flexbox/Grid.
* Reduced bundle size by removing unused dependencies, using **tree shaking**, and replacing heavy libraries with lightweight alternatives.
* Improved runtime performance by **debouncing user input**, minimizing DOM reflows, and using **memoization** (`React.memo`, `useMemo`, `useCallback`).
* Analyzed and improved app performance using tools like **Lighthouse**, **Chrome DevTools**, and **Web Vitals** (CLS, LCP, FID).
* Ensured high mobile performance by optimizing image delivery using **Next.js Image component**, **WebP formats**, and **responsive image sizes**.
* Implemented server-side rendering (SSR) or incremental static regeneration (ISR) to improve Time to First Byte (TTFB) and SEO for Next.js apps.

**Back-End**

* Optimized Node.js APIs for low latency and high throughput using **asynchronous programming**, **connection pooling**, and **efficient query handling**.
* Improved backend response times by implementing **caching strategies** (e.g., Redis for frequently accessed data, in-memory caching for config/static data).
* Reduced payload sizes and enhanced client performance by **compressing responses** using GZIP and selectively exposing data in APIs.
* Used **lazy loading** and **streaming responses** for large datasets to prevent memory bottlenecks and improve perceived performance on mobile clients.
* Minimized database load by optimizing queries, creating **proper indexes**, and analyzing execution plans (PostgreSQL/MySQL).
* Enabled **HTTP/2 and CDN integration** for faster asset and API delivery, improving performance especially on slow mobile networks.
* Monitored and profiled backend performance using tools like **New Relic**, **PM2**, and **Node.js built-in profiler**, proactively resolving memory leaks and event loop blocking.

---





### **SDLC**

* Led and contributed across all SDLC phases — including **requirement analysis, architecture design, development, testing, deployment, and support**.
* Collaborated with cross-functional teams (Product, QA, DevOps) to define **technical specifications and delivery timelines** for complex features.
* Designed scalable backend architecture using **Node.js, TypeScript**, and RESTful APIs, ensuring long-term maintainability and performance.
* Implemented CI/CD pipelines using **GitHub Actions**, automating testing, linting, and deployment workflows to staging and production.
* Wrote unit and integration tests with **Jest** and **Supertest**, ensuring high test coverage and early defect detection.
* Deployed applications to cloud platforms (e.g., **AWS**, **Azure**) and containerized services using **Docker**, ensuring seamless rollouts and rollback strategies.
* Monitored production systems using **logging (Winston/Morgan)** and performance tools (**PM2**, **New Relic**), ensuring stability and uptime.
* Handled post-deployment maintenance and issue resolution through **incident tracking**, **hotfixes**, and continuous improvement cycles.

---


### **Cross Functional Collaboration**

* Collaborated with **product managers** to refine requirements, prioritize features, and align technical implementation with business goals.
* Worked closely with **UI/UX designers** to translate wireframes and mockups into responsive, accessible, and performant interfaces.
* Coordinated with **frontend and backend developers** to define API contracts, data models, and integration strategies for smooth end-to-end delivery.
* Participated in **agile ceremonies** (daily stand-ups, sprint planning, retrospectives) to ensure continuous alignment and timely delivery of features.
* Provided technical input during feature discussions to highlight feasibility, suggest alternatives, and manage trade-offs.
* Supported QA teams by defining **clear acceptance criteria**, setting up test environments, and assisting in defect triage and resolution.
* Ensured clear communication and documentation throughout the SDLC to avoid blockers and promote team efficiency.







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





## **Project Handled Both Backend and Frontend**

- *"In the **Shoutout** project — a celebrity video shoutout platform — I worked as a **Node.js Backend Developer**, but I also took ownership of several **frontend features** in collaboration with the mobile and web teams.*
-*On the backend, I designed and developed RESTful APIs using **Node.js with Express**, handling core flows such as **user authentication**, **video request lifecycle**, and **payment processing using Razorpay**. I implemented **secure escrow logic**, ensuring funds were held until video delivery and automated the payout release logic after successful delivery.*
- *On the frontend side, although React Native was used for the mobile app, I contributed to **admin web panel screens** using **React**, where I built dashboards for managing celebrity profiles, request statuses, and payout tracking. I also worked closely with the mobile dev team to define API contracts and test UI flows via Postman and mock data sets.*
- *Additionally, I handled **CORS configuration**, **video upload flow** using **signed URLs with Azure Blob Storage**, and coordinated **error handling UX** with the frontend team.*
- *By bridging backend and frontend responsibilities, I ensured a smooth, end-to-end delivery pipeline — from API response structure to user-facing behaviors. This helped reduce integration bugs and improved development velocity by 30% during the final release phase."*

---

## **Manage full stack development in sprints**

- *In the **TANFApp migration project** at IAppsys, we were tasked with modernizing a legacy **MS Access-based application** into a **React + Node.js full-stack web application**. I was responsible for leading and coordinating full-stack development during 2-week sprints.*

**Sprint Planning:** - *We started each sprint by analyzing legacy MS Access forms, VBA logic, and database structure. I then worked with the BA and stakeholders to convert those into **modular user stories** for both frontend and backend teams. For example, one epic like 'Eligibility Determination' was split into UI form design, business rules API, and backend DB mapping logic.*

**Backend Tasks:** - *Using **Node.js + Express**, I created REST APIs that abstracted business rules previously embedded in MS Access queries and VBA. We used **Sequelize ORM** with a new **PostgreSQL schema**, handling validations, lookup table mappings, and user sessions securely with JWT.*

**Frontend Tasks:** - *On the frontend, I used **React with Redux** for state management and built dynamic forms with reusable components. I ensured accessibility (A11Y compliance), form validation using Yup, and controlled form flow matching legacy business logic.*

**Coordination & Integration:** - *I ensured frontend and backend teams were aligned via shared **OpenAPI (Swagger) docs**, created mock APIs for parallel development, and used Postman collections for QA. We maintained our sprint board in **JIRA**, held daily stand-ups, and had weekly reviews with product stakeholders.*

**Outcome:** - *This sprint-driven, structured approach helped us replace 100+ legacy MS Access screens in phased sprints and improved the user onboarding experience. We also reduced page load time by over 60% compared to the old system."*

---


## **Help junior developers get up to speed**

- *"In the **Shoutout project**, where I worked on the Node.js backend, I helped onboard two junior developers who were new to both the codebase and the overall architecture."*
- "To get them up to speed quickly, I followed a structured approach":
  
**1. Knowledge Transfer & Documentation:**
- I created a **developer onboarding guide** that included:
- * API architecture overview
- * Database schema (ER diagrams)
- * Key flows like video request lifecycle, payment via Razorpay, and escrow logic
- * Environment setup steps and useful CLI scripts
    
**2. Pair Programming & Walkthroughs:**
- For the first couple of weeks, I did **pair programming** with them — especially on complex flows like the Razorpay integration and video delivery status updates. I explained async patterns, middleware logic, and error-handling strategies (try/catch, async/await, and centralized error middleware).
  
**3. Small Wins & First PRs:**
- I assigned them small, low-risk tasks initially — like updating logging, adding request validation with `express-validator`, or writing unit tests using Jest. This helped build their confidence.
  
**4. Code Reviews & Feedback:**
- I made sure to review their PRs constructively — offering suggestions on structure, naming, and logic — and also praised clean and thoughtful code. I used comments as coaching tools, not just corrections.
  
**5. Support System:**
- I encouraged them to ask questions freely and even set up a dedicated Slack thread for dev Q\&A. I also created Postman collections so they could test APIs independently.
- As a result, they became independent contributors by the third sprint, owning full features like user notification APIs and booking history retrieval. Our ramp-up time dropped significantly, and team productivity improved by \~30%."\*


## **Handle poor code or performance from a team member**
- *"In the **TANFApp** project at **IAppsys**, we were migrating a legacy MS Access system into a modern full-stack platform using **Node.js and Express** with a **PostgreSQL backend**. During a sprint, I noticed one team member repeatedly wrote inefficient SQL queries within the Node.js service layer — like fetching entire tables and filtering in JS instead of using SQL `WHERE` clauses. This caused increased API response time and unnecessary memory usage.*
- Instead of just flagging the issue, I did a **code walkthrough** with him and pointed out specific anti-patterns — like N+1 queries and missing joins. I also showed how to use **parameterized queries** safely with `pg-promise` to avoid SQL injection and improve performance.\*
To help him improve:
- I created a **query optimization guide** (e.g., using `LIMIT`, `JOIN`, and indexing)
- We pair-programmed to refactor the worst-performing endpoint
- I introduced a **logging wrapper** using `winston` to log query execution times for profiling
- We implemented basic integration tests with realistic data to validate the logic end-to-end
- Within a couple of sprints, his understanding of SQL inside Node.js improved, and he optimized a benefits calculation endpoint, reducing average response time from **4.5 seconds to under 1.2 seconds**. This also helped improve database load handling under peak conditions."\*


## **Manage requirements when clients frequently change**

- *"In the **BITS PSMS** project, I led the frontend (Angular) and helped coordinate full-stack delivery. Our client was BITS faculty and program coordinators — and they often revised requirements based on internal academic policy changes.*
- For example, mid-sprint, they introduced a new rule: students should be able to **edit internship preferences** within a limited time window — a feature not part of the original scope.\*
To handle this smoothly, I followed these steps:

**Document the Change Clearly:**
- I updated the user story in our backlog, documented the new rule in Confluence, and worked with the stakeholder to finalize the logic.
  
**Feature Flag & Config-Based Logic:**
- I modified the Angular app to check configuration flags from the backend and enabled/disabled form fields dynamically. This helped us make changes without hardcoding policy logic.
  
**Backend Adjustments:**
- Coordinated with the backend developer to add time-window validation at the API level to ensure data consistency.
  
**Impact Analysis & Re-prioritization:**
- I reviewed what work had to be paused or rescheduled and discussed the trade-offs during the sprint review. We moved lower-priority items to the next sprint.
- As a result, we were able to integrate the change without missing our demo milestone. 
- Over time, we also added a **‘policy config’ module** to handle such changes more dynamically, reducing the impact of future scope changes."








## **Handle production issues when a client is upset**

- *"In the **TANFApp** project at IAppsys, we had a situation where a **multi-section TANF eligibility form** started throwing errors in production — specifically when users tried to submit a subsection with conditional fields. This affected live data collection for applicants, and the client was understandably upset, as it blocked critical workflows.*

I immediately took the following steps:

**1. Triage and Hotfix:**
- I replicated the issue using production data and found that a recent update had caused form state mismatches — conditional subsections weren’t being saved correctly due to missing null-checks in the Node.js backend. I patched the issue by introducing stricter validation, and we deployed a **hotfix within 3 hours** using our CI/CD pipeline.
**2. Transparent Communication:**
- I informed the client with a quick status update and ETA. I also reassured them that no data was lost and all pending form states were queued safely in the backend. This calmed the situation and helped restore confidence.
**3. RCA and Preventive Measures:**
- I led a **Root Cause Analysis** session and discovered that the issue slipped through due to lack of test coverage on conditional form logic. To prevent this in future:
 * We added **unit and integration tests** for every dynamic section
 * Introduced a **regression checklist** for multi-step forms
 * Enhanced QA coverage for all possible form configurations

- As a result, similar issues never occurred again. The client appreciated our responsiveness, and our team gained credibility for being proactive under pressure."\*
- 


## **Track project progress**

> *"Across all projects, I use **JIRA** for sprint planning, **Slack** for internal comms, and **Confluence** for documentation. In **IAppsys**, we used GitHub Projects and tracked unit test coverage via Jest. Stand-ups and burndown charts helped us stay on track — we consistently delivered 85–90% of committed sprint items."*

---

## **Estimate story points**

> *"I base estimates on prior complexity and edge case handling. In **Shoutout**, a payment module involving Razorpay integration was assigned 8 points due to external dependencies and testing. We balanced velocity over time and maintained historical velocity tracking. This allowed realistic sprint planning and prevented burnout."*

---

## **Conflict with colleague or manager**

> *"During **BITS PSMS**, a teammate insisted on procedural-style coding in Angular services. I preferred DI and RxJS pipelines. I proposed we spike both versions and test with live data. The reactive version proved more scalable. By letting facts guide decisions, we avoided conflict and improved maintainability."*

---

## **Handle negative feedback**

> *"In **LAppsys**, a product owner questioned the value of server-side validation. I explained our decision using security standards and showed logs of previous validation bypass attempts. I also demoed user-facing validation messages. This changed their mind, and we made input handling a reusable module."*

---

## **Performant and Secure Backend APIs**

> *"In **Shoutout**, I optimized Node.js APIs with pagination, indexing, and Redis caching for high-read endpoints like celebrity listings. Security was handled with JWT, IP throttling, and validation via `express-validator`. For video uploads, we used signed URLs with Azure Blob Storage, ensuring time-bound access. We also followed PCI-DSS guidelines for payment flow."*

---

## **Release gets delayed due to unexpected bugs**

> *"In **LAppsys**, a TANF form validation logic crashed for edge cases during UAT. I immediately organized a triage meeting, isolated the logic, wrote test cases to replicate it, and patched the bug. I documented the change, and we pushed a hotfix within 12 hours, avoiding any downstream processing delays."*

---

## **Leading a team and 2 devs are stuck on different issues**

> *"This happened in **Shoutout** — one dev struggled with JWT auth expiry issues, another with payment webhook inconsistencies. I stepped in on the JWT issue directly due to its urgency and paired the webhook task with another mid-level dev. Both issues were resolved in the same day due to delegation and priority handling."*

---

## **security issue on production**

> *"In **Shoutout**, a user discovered they could access other video links using guessable URLs. We hotfixed it by generating UUID-based URLs and restricting access with signed tokens. I added a server-side access check based on user-booking ID, wrote a test case, and enabled Sentry to track any further access attempts."*

---

## **Why join Encora**

> *"Encora’s focus on digital innovation and end-to-end product delivery aligns well with my experience in full-stack leadership roles. I've worked on scalable systems like LAppsys and secure, user-driven platforms like Shoutout. I'm looking for a team where I can continue driving impactful solutions, mentor engineers, and grow with global client exposure."*

---


