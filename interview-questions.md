# Buddy Deals
1. Is Node Js running in sigle core? then explain
2. How to do Serach text in Mongodb
3. Difference between filter and query in Elastic search 
4.  

# HID Global
1. How Nodejs handles cuncurrency
2. Explain Node.Js event loop
3. How do you write APIs like use of swagger or postman

# Content stack
1. How do you use redis for caching
2. Generic type in type script
3. mongoDB scaling
4. Which database will be better for social media application
5. Create custom stream in nodejs

# Msys

1. Program to count occurance of each letters in a string. Ignore space
2. How to define routes in express. they asked import statement
3. How do you use redis
4. Queuing system like rabbitmq
5. Read content of a file and append something and new content to same file
6. Callback hell
7. Deference between promise and async/await
8. What if i not use await keyword
9. Closure in Javascript
10. ES5 and Es6. Any advantages in ES6
11. Clustering in mongodb
12. Execution of bellow code
```js
    setTimeout(() => {
        console.info('Execution of Timeout Callback Function'); 
    }, 10);
    setImmediate(() => {
        console.info('Execution of Immediate Callback Function'); 
    });
    process.nextTick(() => {
        console.info('Execution of NextTick Callback Function');
    })
    console.info('Execution of Main Module Ends');
```
13. Explain Event loop
14. Deference between $in and $all in mongodb
15. const and object.freeze
16. How to ignore some routes in express middleware
17. 

# CloudSense
```
Write a boolean returning function that takes 2 string arguments - 
filename and pattern - that returns whether the filename matches the
 pattern. The pattern is in the form used in dos/windows/unix shell 
 where * matches any number of characters (0-n).
 
 Filename, pattern -> expected output
'abc', 'a*' -> true
'abc', '*bc' -> true
'abc', 'a*c' -> true
'text.json', 'sample*' -> false
'text.json', 'json*' -> false
'asdsasseacdvscg', '*vscg' -> true
'asdsasseacdvscg', 'abc*' -> false
'asdsasseacdvscg', 'a*s*v*g' -> true
'asdsasseacdvscg', 'a*s*m*g' -> false
'asdsasseacdvscg', '*ds*vs*' -> true
'asdsasseacdvscg', 'a*g*' -> false
'asdsasseacdvscg', '**c*g' -> true

js code to match pattern. not use regex
```
# Coverforce
```
/**
 * Problem: You're tracking the daily price of a stock and need to figure out how many consecutive days, including today, the stock's price has been less than or equal to today's price. This is called the "span."
Each time you get a new price, you return the span of that day.
Class StockSpanner() { 
….
    Func next(int price) //needs to be implemented.
}
Example:
Input:
StockSpanner spanner = new StockSpanner(); 
spanner.next(100) // Returns 1 
spanner.next(80) // Returns 1
 spanner.next(60) // Returns 1 
spanner.next(70) // Returns 2 
spanner.next(60) // Returns 1 
spanner.next(75) // Returns 4 
spanner.next(85) // Returns 6
Output:
[1, 1, 1, 2, 1, 4, 6]

*/

js code for this. i need solution in optimized way with time and space complexity
```
# Infosys

# Ease Commerce

# TCS
1. Event loop
2. Callback hell
3. difference between promise.all and promise.race
4. How would you handle high volume requests
5. difference between import and require
6. How middleware works
7. How do you define database schema
8. State of promises
9. Await usecase

# Cloud destination
1. WHat is API in general
2. What is non blocking
3. How Does JavaScript Work Behind the Scenes
```
Input
let str = `hihelloworldwelcom`;

Output
Find occurrence of each character
```

```
let amounts = [1200, 400, 300, 2000, 1500];
let maxWithdrawLimit = 400;

You are given an array amounts where each element represents the initial amount of money in a person’s wallet. Another variable maxWithdrawLimit specifies the maximum amount a person can withdraw in a single transaction. There are 5 people in a queue, and they take turns withdrawing money one by one. If a person’s remaining balance becomes 0 or negative after a withdrawal, they leave the queue.

Task:
Simulate this withdrawal process and produce two output arrays:

Exit order: The order in which the people leave the queue.
Withdrawal queue: The sequence of people’s indexes who make withdrawals during the process.

The output should be two array that have order of exit and withdrawal queue
exitOrder = [2, 3, 1, 5, 4]
queue = [1, 2, 3, 4, 5, 1, 4, 5, 1, 4, 5, 4, 5, 4]

```

# Clarity TTS
1. Why nodejs single threaded
2. What is Event loop
3. Difference between Process.nextTick() and setImmediate()
4. How to handle CPU intensive task in nodejs
5. What if concurrent CPU intensive requests incoming? should we create separate worker thread for each and every task
6. How to handle memory leak issue in nodejs
7. what is middleware
8. how user authendicated in nodejs
9. Sharding in mongodb
10. replicaset in mongodb
11. Program to find second largest integer in array
12. Remove those values if they are duplicated in array
```
Input: [1,2, 3, 4, 1, 5, 5, 6]
Output: [2, 3, 4, 6]
```

----------------- Solution--------------------
Here are the summarized and organized solutions and explanations to the topics and problems you've provided across different companies and topics.

---

## **Buddy Deals**
1. **Is Node.js running on a single core? Explain.**  
   Yes, Node.js runs on a single core by default. It operates on a single-threaded event loop model, which allows it to handle I/O tasks asynchronously. However, for CPU-intensive operations, Node.js can utilize clustering to spawn child processes and distribute the load across multiple cores.

2. **Search text in MongoDB.**  
   Use the `$text` operator for text searches. Example:  
   ```js
   db.collection.find({ $text: { $search: "searchText" } });
   ```

3. **Difference between filter and query in Elasticsearch.**  
   - **Filter:** Does not affect score; used for exact matches and improves performance as results are cached.  
   - **Query:** Used for full-text searches and relevance scoring.

---

## **HID Global**
1. **How does Node.js handle concurrency?**  
   Node.js handles concurrency via its event loop and non-blocking I/O. It uses a single-threaded model to manage multiple tasks asynchronously.

2. **Explain Node.js event loop.**  
   The event loop is the mechanism in Node.js that handles asynchronous operations. It consists of six phases:  
   - **Timers:** Handles `setTimeout` and `setInterval`.  
   - **Pending callbacks:** Handles deferred I/O callbacks.  
   - **Idle/Prepare:** Internal use.  
   - **Poll:** Fetches I/O events.  
   - **Check:** Executes `setImmediate`.  
   - **Close:** Handles cleanup.

3. **How do you write APIs?**  
   Use tools like Swagger for documentation and Postman for testing. Example with Express:  
   ```js
   const express = require('express');
   const app = express();
   app.get('/api/example', (req, res) => res.json({ message: "Hello World" }));
   ```

---

## **Content Stack**
1. **How do you use Redis for caching?**  
   Use the `redis` package in Node.js. Example:  
   ```js
   const redis = require('redis');
   const client = redis.createClient();
   client.set("key", "value");
   client.get("key", (err, data) => console.log(data));
   ```

2. **Generic type in TypeScript.**  
   ```ts
   function genericFunction<T>(arg: T): T {
       return arg;
   }
   ```

3. **MongoDB Scaling:**  
   - Vertical Scaling: Add more resources to a single server.  
   - Horizontal Scaling: Use sharding to distribute data across multiple servers.

4. **Database for social media app:**  
   A NoSQL database like MongoDB is better for handling large amounts of unstructured data and scaling horizontally.

5. **Custom Stream in Node.js:**  
   Use `stream` module:  
   ```js
   const { Readable } = require('stream');
   class CustomStream extends Readable {
       _read(size) {
           this.push("data chunk");
           this.push(null);
       }
   }
   const stream = new CustomStream();
   stream.pipe(process.stdout);
   ```

---

## **Msys**
1. **Count occurrence of letters:**  
   ```js
   const countChars = str => {
       const result = {};
       for (let char of str.replace(/\s/g, '')) {
           result[char] = (result[char] || 0) + 1;
       }
       return result;
   };
   ```

2. **Define routes in Express:**  
   ```js
   const express = require('express');
   const router = express.Router();
   router.get('/route', (req, res) => res.send('Hello'));
   ```

3. **Callback Hell:**  
   Nesting multiple callbacks causes unreadable code. Use Promises or `async/await`.

4. **Difference between Promise and Async/Await:**  
   - **Promise:** Thenable syntax.  
   - **Async/Await:** Cleaner and synchronous-like syntax.

5. **Event Loop Execution Order:**  
   ```text
   Execution of Main Module Ends  
   Execution of NextTick Callback Function  
   Execution of Immediate Callback Function  
   Execution of Timeout Callback Function
   ```

6. **Difference between `$in` and `$all` in MongoDB:**  
   - `$in`: Matches any value in an array.  
   - `$all`: Matches all values in an array.

7. **Clustering in MongoDB:**  
   Involves sharding to distribute data across multiple nodes.

---

## **CloudSense**
### Boolean Function to Match Filename with Pattern:
```js
function matchPattern(filename, pattern) {
    let i = 0, j = 0, starIdx = -1, match = 0;
    while (i < filename.length) {
        if (j < pattern.length && (pattern[j] === '?' || pattern[j] === filename[i])) {
            i++; j++;
        } else if (j < pattern.length && pattern[j] === '*') {
            starIdx = j++; match = i;
        } else if (starIdx !== -1) {
            j = starIdx + 1; i = ++match;
        } else return false;
    }
    while (j < pattern.length && pattern[j] === '*') j++;
    return j === pattern.length;
}
```

---

## **Coverforce**
### Optimized Stock Span Solution:
```js
class StockSpanner {
    constructor() {
        this.stack = [];
    }
    next(price) {
        let span = 1;
        while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
            span += this.stack.pop()[1];
        }
        this.stack.push([price, span]);
        return span;
    }
}
```
**Time Complexity:** O(n) amortized.  
**Space Complexity:** O(n).

---

## **Clarity TTS**
1. **Second Largest Number in Array:**  
   ```js
   const secondLargest = arr => {
       const unique = [...new Set(arr)].sort((a, b) => b - a);
       return unique[1];
   };
   ```

2. **Remove Duplicated Values:**  
   ```js
   const removeDuplicates = arr => arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
   console.log(removeDuplicates([1, 2, 3, 4, 1, 5, 5, 6])); // [2, 3, 4, 6]
   ```

3. **Handle CPU-Intensive Tasks in Node.js:**  
   Use Worker Threads to offload CPU-heavy operations.

4. **Memory Leak Issues in Node.js:**  
   - Identify using profiling tools.  
   - Avoid global variables.  
   - Use proper garbage collection.

---
