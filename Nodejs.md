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


