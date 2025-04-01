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
