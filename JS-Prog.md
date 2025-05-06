| Category                          | Topics                                                                                                                                                                                                                                                                                                                                                                                                             |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Array 1 | • [Find Largest value](#Find-Largest-value)  • [Remove Duplicates element](#Remove-Duplicates-element) • [Group Array of Objects](#Group-Array-of-Objects) • [Count - Unique Elements](#count-number-of-unique-elements-in-an-array)  • [Find Peak Element](#find-peak-element)
| Array 2 |  • [Recursive Sum of Array](#recursive-sum-of-array)  • [Flat Nested Array](#flatten-nested-arrays)  • [Chunk Array](#chunk-an-array) • [Array Contains Duplicate Value](#Array-Contains-Duplicate-Value) • [Missing Number](#missing-number) • [First and Last Position - Element](#first-and-last-position-of-element-in-Sorted-Array) • [Flatten Nested Arrays](#Flatten-Nested-Arrays)
| Sort |   • [Sort an array of objects](#Sort-an-array-of-objects) • [Merge Sort](#Merge-Sort) • [Quick Sort](#Quick-Sort) • [Bubble Sort](#Bubble-Sort) • [Insertion Sort](#Insertion-Sort) • [Selection Sort](#Selection-Sort) • [Topological Sort](#topological-sort)
| Arrays | • [Two Sum](#two-sum)  • [Move Zeros](#move-zeros)     • [Maximum Subarray](#maximum-subarray)            • [Merge Sorted Arrays](#merge-sorted-arrays)  • [Rotate Array](#rotate-array)      • [Maximum Sum Subarray of Size K](#Maximum-Sum-Subarray-of-Size-K) 
| Advance | • [Memoize](#Memoize) • [Type Coercion](#Type-Coercion) • [Trapping Rain Water](#trapping-rain-water)  • [Maximum Product Subarray](#maximum-product-subarray)  • [Longest Consecutive Sequence](#longest-consecutive-sequence)  • [Set Matrix Zeroes](#set-matrix-zeroes)  • [Spiral Matrix](#spiral-matrix)  • [Subarray Sum Equals K](#subarray-sum-equals-k)
| Hash & Sets |• [Intersection of Two Arrays](#intersection-of-two-arrays)  • [Deep Clone an Object](#deep-clone-an-object) • [Custom `map()` Method](#custom-map-method) • [`var` vs `let` in Loops](#understanding-var-vs-let-in-loops-and-closures)  • [Retry Promise N Times](#retry-promise-n-times) 
| String  | • [Palindrome](#palindrome) • [Reverse](#reverse-a-string) • [Anagrams](#anagrams)  • [Vowels](#vowels)   • [First Non-Repeating Character](#first-non-repeating-character) • [Permutation](#Permutation-in-String) • [Isomorphic Strings](#isomorphic-strings)  • [Longest Substring](#Longest-Substring) • [Interleave characters](#Interleave-the-characters-from-both-strings) 
| Frequent |  • [Top K Frequent Elements](#top-k-frequent-elements)  • [Character Frequency Count](#character-frequency-count) • [Most Frequent Character](#Most-Frequent-Character-in-a-String) • [Count Frequency - Array](#Count-Frequency-of-Array-Element) • [Minimum Window Substring](#Minimum-Window-Substring) 
| Functions |   • [Factorial](#factorial) • [Fibonacci](#fibonacci) • [Power Function](#power-function) • [Debounce Function](#debounce-function) • [Throttle Function](#throttle-function) • [Binary Search](#Binary-Search) 
| Patterns | • [Stock Span Problem](#Stock-Span-Problem) • [Boolean Function to Match Filename Pattern Without Regex](#Boolean-Function-to-Match-Filename-Pattern-Without-Regex) • [Simulating Wallet Withdrawal Queue](#Simulating-Wallet-Withdrawal-Queue) 
| Searching |  • [Search in Rotated Sorted Array](#search-in-rotated-sorted-array)    • [Median of Two Sorted Arrays](#median-of-two-sorted-arrays)
| Graph Problems | • [BFS Traversal](#bfs) • [DFS Traversal](#dfs) • [Number of Islands (Matrix BFS/DFS)](#number-of-islands) • [Detect Cycle in Graph](#detect-cycle-in-graph)  • [Clone Graph](#clone-graph) • [Shortest Path in Binary Matrix](#shortest-path-in-binary-matrix) • [Word Ladder](#word-ladder) • [Dijkstra’s Algorithm](#dijkstras-algorithm) • [LRU](#LRU)
| Binary Tree | • [Inorder / Preorder / Postorder Traversal](#inorder-preorder-postorder-traversal) • [Level Order Traversal](#level-order-traversal) • [Maximum Depth of Binary Tree](#maximum-depth-of-binary-tree) • [Symmetric Tree](#symmetric-tree) • [Diameter of Binary Tree](#diameter-of-binary-tree) • [Lowest Common Ancestor (BST & Binary Tree)](#lowest-common-ancestor) • [Serialize and Deserialize Binary Tree](#serialize-and-deserialize-binary-tree) • [Path Sum](#path-sum) • [Convert Sorted Array to BST](#convert-sorted-array-to-bst) • [Best Time to Buy and Sell Stock](#best-time-to-buy-and-sell-stock)  

---

| **Function**            | **Description**                             | **Example Usage**                                     | **Returns**       | **Function**            | **Description**                             | **Example Usage**                                     | **Returns**       |
|------------------------|---------------------------------------------|-------------------------------------------------------|-------------------|------------------------|---------------------------------------------|-------------------------------------------------------|-------------------|
| `eval()`               | Executes a string as JS code *(⚠️ avoid)*   | `eval("2 + 2")`                                       | Result of eval    | `parseInt()`           | Converts string to integer                  | `parseInt("10px")`                                    | `number`          |
| `parseFloat()`         | Converts string to float                    | `parseFloat("3.14")`                                  | `number`          | `isNaN()`              | Checks if value is NaN                      | `isNaN("abc")`                                        | `boolean`         |
| `isFinite()`           | Checks if value is a finite number          | `isFinite(5)`                                         | `boolean`         | `encodeURI()`          | Encodes entire URI                          | `encodeURI("https://a.com?q=hello world")`            | `string`          |
| `decodeURI()`          | Decodes an encoded URI                      | `decodeURI("https%3A%2F%2Fa.com")`                    | `string`          | `encodeURIComponent()` | Encodes URI component                       | `encodeURIComponent("hello world")`                   | `string`          |
| `decodeURIComponent()` | Decodes URI component                       | `decodeURIComponent("hello%20world")`                 | `string`          | `Object.keys()`        | Gets object’s keys                          | `Object.keys({a:1,b:2})`                              | `string[]`        |
| `Object.values()`      | Gets object’s values                        | `Object.values({a:1,b:2})`                            | `any[]`           | `Object.entries()`     | Gets key-value pairs as arrays              | `Object.entries({a:1})`                               | `[string, any][]` |
| `Object.assign()`      | Copies properties to another object         | `Object.assign({}, {a:1})`                            | `object`          | `Object.hasOwn()`      | Checks if object has a property             | `Object.hasOwn(obj, "prop")`                          | `boolean`         |
| `push()`               | Adds item(s) to end of array                | `arr.push(4)`                                         | `number` (new length) | `pop()`                | Removes last item from array                | `arr.pop()`                                           | `any`             |
| `shift()`              | Removes first item from array               | `arr.shift()`                                         | `any`             | `unshift()`            | Adds item(s) to start of array              | `arr.unshift(0)`                                      | `number` (new length) |
| `slice()`              | Extracts part of string/array               | `"hello".slice(1, 4)`                                 | `string` / `array` | `map()`                | Transforms array items                      | `arr.map(x => x * 2)`                                 | `any[]`           |
| `filter()`             | Filters array based on condition            | `arr.filter(x => x > 5)`                              | `any[]`           | `reduce()`             | Reduces array to single value               | `arr.reduce((a, b) => a + b)`                         | `any`             |
| `forEach()`            | Iterates over array                         | `arr.forEach(console.log)`                            | `void`            | `find()`               | Finds first item matching condition         | `arr.find(x => x > 10)`                               | `any`             |
| `includes()` (array)   | Checks if array contains value              | `arr.includes(3)`                                     | `boolean`         | `some()`               | Checks if **any** item matches condition    | `arr.some(x => x > 10)`                               | `boolean`         |
| `every()`              | Checks if **all** items match condition     | `arr.every(x => x > 0)`                               | `boolean`         | `charAt()`             | Gets character at index                     | `"abc".charAt(1)`                                     | `string`          |
| `toUpperCase()`        | Converts string to uppercase                | `"abc".toUpperCase()`                                 | `string`          | `toLowerCase()`        | Converts string to lowercase                | `"ABC".toLowerCase()`                                 | `string`          |
| `trim()`               | Removes whitespace from ends                | `"  hello ".trim()`                                   | `string`          | `split()`              | Splits string into array                    | `"a,b".split(",")`                                    | `string[]`        |
| `includes()` (string)  | Checks if substring exists in string        | `"hello".includes("ell")`                             | `boolean`         |

---

**TypeScript Utilities (Bonus)**

| Utility            | Description                             | Example                         | Returns       | Utility            | Description                             | Example                         | Returns       |
|--------------------|-----------------------------------------|----------------------------------|---------------|--------------------|-----------------------------------------|----------------------------------|---------------|
| `as`               | Type assertion                          | `value as string`               | `T` (type-casted) | `typeof`           | Gets variable type                      | `typeof x === "string"`         | `"string"` etc. |
| `keyof`            | Gets union of keys from type            | `keyof typeof obj`              | `'a' | 'b' | ...` | `Record<K, T>`     | Object type with keys `K` and values `T`| `Record<string, number>`        | `{ [k: string]: number }` |
| `Partial<T>`       | All properties optional                 | `Partial<User>`                 | `{ name?: string, ... }` | `Pick<T, K>`       | Picks specific keys                     | `Pick<User, "name">`            | `{ name: string }` |
| `Omit<T, K>`       | Omits specific keys                     | `Omit<User, "password">`        | All except `password` |

---


## Find Largest value
- [Find Largest value](#find-maximum-in-an-array) 
- [Find Second Largest value](#find-second-largest-element)
- [Kth Largest value](#kth-largest-element-in-an-array)

### Find Maximum in an Array


**Example**
```ts
const numbers = [45, 3, 67, 89, 12, 99, 34];
Output : 99
```


```ts
function findMaxManual(arr: number[]): number {
  
  if (arr.length === 0) {               // Step 1: Check if the array is empty
    throw new Error("Array is empty");  // Handle edge case by throwing an error
  }
  let max: number = arr[0];   // Step 2: Initialize the maximum value with the first element of the array
  
  for (let i = 1; i < arr.length; i++) { // Step 3: Loop through the rest of the array starting from index 1
    if (arr[i] > max) {  // Step 4: If the current element is greater than max, update max
      max = arr[i];
    }
  }
  
  return max;     // Step 5: After the loop, return the maximum value found
}

```

**Using Built-ins**


```ts
function findMax(arr: number[]): number {
  return Math.max(...arr);
}
```
> Uses ES6 spread with `Math.max`.

---

### Find Second Largest Element

Given input:
```js
[10, 5, 20, 20, 8, 25]
```

Expected output:
```
Second Largest: 20
```

---

**Using Predefined Functions (`sort()`, `filter()`, etc.)**



**Code Example**
```js
function secondLargestUsingSort(arr) {
  const unique = arr.filter((val, index, self) => self.indexOf(val) === index);
  unique.sort((a, b) => b - a); // descending
  return unique[1];
}

console.log(secondLargestUsingSort([10, 5, 20, 20, 8, 25]));
```

 **Output:**
```
20
```

---

**Without Using Predefined Functions**


**Code Example**
```js
function secondLargestManual(arr) {
  // Step 1: Initialize first and second with the lowest possible value
  let first = -Infinity;
  let second = -Infinity;

  // Step 2: Loop through the array
  for (let i = 0; i < arr.length; i++) {
    // Step 3: If current element is greater than first, update both first and second
    if (arr[i] > first) {
      second = first;   // Move the current first to second
      first = arr[i];   // Update first with the new maximum
    } 
    // Step 4: If current element is not equal to first, but greater than second
    else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];  // Update second
    }
  }

  // Step 5: Return the second largest value
  return second;
}


console.log(secondLargestManual([10, 5, 20, 20, 8, 25]));
```

 **Output:**
```
20
```

---

### Kth Largest Element in an Array

**Non-Optimized**
```js
function findKthLargest(nums, k) {
  nums.sort((a, b) => b - a); // Descending order
  return nums[k - 1];
}
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5
```

**Approach**: Sort the array in descending order and pick the (k-1)th element.

🧠 *Optimized solution can use Min Heap or QuickSelect for O(n) average time.*

**Optimized**

```js
function findKthLargest(nums, k) {
  // Step 1: The target index is the kth largest element's index in sorted order.
  // We need to find the element that corresponds to the target index in the partitioned array.
  const target = nums.length - k;

  // Step 2: Recursive quickSelect function to find the kth largest element
  function quickSelect(left, right) {
    // Partition the array and get the pivot index
    const pivotIndex = partition(left, right);

    // Step 3: If the pivot index matches the target, we've found the kth largest element
    if (pivotIndex === target) {
      return nums[pivotIndex];
    } 
    // Step 4: If the pivot index is smaller than the target, search the right half
    else if (pivotIndex < target) {
      return quickSelect(pivotIndex + 1, right);
    } 
    // Step 5: If the pivot index is greater than the target, search the left half
    else {
      return quickSelect(left, pivotIndex - 1);
    }
  }

  // Step 6: Partition function to perform the partitioning process (like in QuickSort)
  function partition(left, right) {
    const pivot = nums[right]; // Choose the rightmost element as the pivot
    let i = left; // Initialize the pointer for the smaller element

    // Step 7: Rearranging elements so that elements smaller than pivot are on the left, larger on the right
    for (let j = left; j < right; j++) {
      if (nums[j] <= pivot) { // If current element is smaller than or equal to pivot
        [nums[i], nums[j]] = [nums[j], nums[i]]; // Swap elements
        i++; // Increment the smaller element pointer
      }
    }
    // Step 8: Place the pivot in the correct sorted position
    [nums[i], nums[right]] = [nums[right], nums[i]];

    // Step 9: Return the index of the pivot after partitioning
    return i;
  }

  // Step 10: Call quickSelect to find the kth largest element
  return quickSelect(0, nums.length - 1);
}

```

---





## Remove Duplicates element

• [Remove Duplicates element from array](#remove-duplicates-element-from-array) 
• [Remove Duplicates from Sorted Array](#remove-duplicates-from-sorted-array) 
• [Remove Duplicates element from Object](#remove-duplicates-element-from-Object)

### Remove Duplicates element from array

---

**Using Predefined Functions (e.g., `includes`)**

**Code Example**
```js
function removeDuplicates(arr) {
  // Step 1: Initialize an empty array `result` to store unique elements
  let result = [];

  // Step 2: Iterate over each item in the input array `arr`
  arr.forEach(item => {
    // Step 3: Check if the item is already in the `result` array
    if (!result.includes(item)) {
      // Step 4: If the item is not in the result, add it to `result`
      result.push(item);
    }
  });

  // Step 5: Return the `result` array, which contains only unique elements
  return result;
}


console.log(removeDuplicates([1, 2, 2, 3, 1, 4]));
```

 **Output:**
```
[1, 2, 3, 4]
```

---

**Without Using Predefined Functions**


**Code Example**
```js
function removeDuplicatesManual(arr) {
  // Step 1: Initialize an empty array `result` to store unique elements
  let result = [];

  // Step 2: Iterate through the input array `arr` with index `i`
  for (let i = 0; i < arr.length; i++) {
    // Step 3: Initialize a flag `found` to track whether the current item is already in `result`
    let found = false;

    // Step 4: Loop through the `result` array with index `j` to check for duplicates
    for (let j = 0; j < result.length; j++) {
      // Step 5: If the current item already exists in `result`, set `found` to true and break out of the loop
      if (arr[i] === result[j]) {
        found = true;
        break;
      }
    }

    // Step 6: If the item was not found in `result`, push it to the `result` array
    if (!found) {
      result.push(arr[i]);
    }
  }

  // Step 7: Return the `result` array containing only unique elements
  return result;
}


console.log(removeDuplicatesManual([1, 2, 2, 3, 1, 4]));
```

 **Output:**
```
[1, 2, 3, 4]
```


### Remove Duplicates from Sorted Array
**Approach**: Use two pointers to overwrite duplicates in-place.

```javascript
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) nums[++i] = nums[j];
    }
    return i + 1;
}
```

 **Example**: 
 ```
let nums = [0,0,1,1,1,2,2,3,3,4];
let len = removeDuplicates(nums); // returns 5
console.log(nums);               // [0,1,2,3,4,2,2,3,3,4] ← in-place modified, extra values remain
console.log(nums.slice(0, len)); // [0,1,2,3,4] ← clean version with only unique values
```


---


### Remove Duplicates element from Object
For example: remove duplicates based on `id`.

Given input:
```js
[
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 1, name: 'A2' },
  { id: 3, name: 'C' },
]
```

Expected output:
```js
[
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' },
]
```

---

**Using Predefined Functions (`.filter()`, `.some()`)**



**Code Example**
```js
function removeDuplicateObjects(arr) {
  // Step 1: Initialize an empty array `result` to store unique objects
  const result = [];

  // Step 2: Iterate through the input array `arr` with `forEach`
  arr.forEach(obj => {
    // Step 3: Use `some()` to check if an object with the same `id` already exists in `result`
    if (!result.some(item => item.id === obj.id)) {
      // Step 4: If no object with the same `id` is found, push the current object to `result`
      result.push(obj);
    }
  });

  // Step 5: Return the `result` array containing unique objects by `id`
  return result;
}


const input = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 1, name: 'A2' },
  { id: 3, name: 'C' }
];

console.log(removeDuplicateObjects(input));
```

 **Output:**
```js
[
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' }
]
```

---

**Without Using Predefined Functions**



**Code Example**
```js
function removeDuplicateObjectsManual(arr) {
  // Step 1: Initialize an empty array `result` to store unique objects
  let result = [];

  // Step 2: Iterate over each object in the input array `arr`
  for (let i = 0; i < arr.length; i++) {
    // Step 3: Initialize a flag `exists` to track if the object already exists in the `result`
    let exists = false;

    // Step 4: Loop through the `result` array to check for duplicates by `id`
    for (let j = 0; j < result.length; j++) {
      // Step 5: If an object with the same `id` exists in `result`, set `exists` to true and break out of the loop
      if (arr[i].id === result[j].id) {
        exists = true;
        break;
      }
    }

    // Step 6: If no duplicate object was found, push the current object to the `result`
    if (!exists) {
      result.push(arr[i]);
    }
  }

  // Step 7: Return the `result` array containing only unique objects
  return result;
}


const input = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 1, name: 'A2' },
  { id: 3, name: 'C' }
];

console.log(removeDuplicateObjectsManual(input));
```

 **Output:**
```js
[
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' }
]
```

---





## Group Array of Objects

• [Group Products by key](#Group-Products-by-key) 
• [Group into array](#Group-into-array) 

### Group Products by key


**Input:**
```js
const products = [   { id: 1, name: "Apple", category: "Fruits" },
  { id: 2, name: "Carrot", category: "Vegetables" },
  { id: 3, name: "Banana", category: "Fruits" },
];
```

**Output:**
```js
{
  Fruits: [
    { id: 1, name: 'Apple', category: 'Fruits' },
    { id: 3, name: 'Banana', category: 'Fruits' }
  ],
  Vegetables: [
    { id: 2, name: 'Carrot', category: 'Vegetables' }
  ]
}
```

```js
function groupByCategory(products) {
  return products.reduce((acc, curr) => {
    acc[curr.category] = acc[curr.category] | [];
    acc[curr.category].push(curr);
    return acc;
  }, {});
}

console.log(groupByCategory(products));
```



---
### Group into array



**Input:**
```js
const input = [
  { name: "one", class: 1 },
  { name: "two", class: 2 },
  { name: "three", class: 3 },
  { name: "four", class: 1 },
  { name: "five", class: 2 },
];
```

**Output:**
```js
[
  { class: 1, names: [ 'one', 'four' ] },
  { class: 2, names: [ 'two', 'five' ] },
  { class: 3, names: [ 'three' ] }
]
```

```js
function groupInputByClass(inputArray) {
  return inputArray.reduce((acc, curr) => {
    let group = acc.find(g => g.class === curr.class);
    if (group) {
      group.names.push(curr.name);
    } else {
      acc.push({ class: curr.class, names: [curr.name] });
    }
    return acc;
  }, []);
}

console.log(groupInputByClass(input));
```
---




### Debounce Function
```ts
function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
```

---

### Throttle Function
```ts
function throttle<T extends (...args: any[]) => void>(fn: T, limit: number): (...args: Parameters<T>) => void {
  let lastRun = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastRun >= limit) {
      lastRun = now;
      fn(...args);
    }
  };
}
```

---

### Retry Promise N Times
```ts
// Generic async retry function that attempts to execute a promise-returning function with retry logic
async function retry<T>(fn: () => Promise<T>, retries: number): Promise<T> {
  try {
    // Attempt to execute the function and wait for its result
    return await fn();
  } catch (error) {
    // If an error occurs and no retries are left, throw the error
    if (retries <= 0) throw error;

    // Otherwise, retry the function by calling 'retry' again with one fewer attempt
    return retry(fn, retries - 1);
  }
}


const fetchData = () => fetch("https://api.example.com/data").then(res => res.json());

retry(fetchData, 3); // Tries to fetch data up to 3 times if it fails


```



---

```ts
// A utility function to fetch a URL with retry logic
async function fetchWithRetry(
  url: string,                    // URL to fetch
  options: RequestInit = {},      // Fetch options like method, headers, body
  maxRetries: number = 3,         // Maximum number of retry attempts (default is 3)
  delayMs: number = 1000          // Delay between retries in milliseconds (default is 1000ms)
): Promise<Response> {
  let attempt = 0;                // Tracks the number of retry attempts

  // Retry loop: will keep trying until maxRetries is reached
  while (attempt < maxRetries) {
    try {
      const response = await fetch(url, options);  // Try to make the fetch call

      if (!response.ok) {        // Check if the response status is not in the 200–299 range
        throw new Error(`HTTP error! status: ${response.status}`);  // Force retry for failed responses
      }

      return response;           // If successful, return the response immediately

    } catch (error) {
      attempt++;                 // Increment the retry attempt count

      // If we've reached the maximum retries, throw the final error
      if (attempt >= maxRetries) {
        throw new Error(`Failed after ${maxRetries} retries: ${(error as Error).message}`);
      }

      // Log the retry attempt to the console
      console.warn(`Retrying (${attempt}/${maxRetries})...`);

      // Wait for delayMs milliseconds before retrying
      await new Promise((res) => setTimeout(res, delayMs));
    }
  }

  // This should never be reached, but is a fallback safeguard
  throw new Error('Unexpected error in fetchWithRetry');
}
```

---

### ✅ Key Concepts:

* **Retry logic** ensures the function attempts a fetch again if it fails due to network or server issues.
* **Response status check** ensures that even HTTP errors like 500 trigger retries.
* **Delay between retries** prevents hammering the server with back-to-back retries.
* **Typed error handling** and default values make the function robust and easy to reuse.



---

### Custom `map()` Method
```ts
declare global {
  interface Array<T> {
    myMap<U>(callback: (value: T, index: number, array: T[]) => U): U[];
  }
}

Array.prototype.myMap = function<T, U>(this: T[], callback: (value: T, index: number, array: T[]) => U): U[] {
  const result: U[] = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
```

---

### Deep Clone an Object
```ts
function deepClone<T>(obj: T): T {
  return structuredClone(obj); // Native browser/Node 17+
}
```

> For older environments:
```ts
function deepCloneLegacy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
```

---






## **Palindrome**  
> A palindrome is a string that reads the same forwards and backwards.  
Example: `"madam"`, `"racecar"` are palindromes.

---

**Using Predefined Functions (`split()`, `reverse()`, `join()`)**


**Code Example**

```javascript
function isPalindrome(s) {
  // Step 1: Normalize the string by converting it to lowercase and removing non-alphanumeric characters
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Step 2: Initialize two pointers: one at the beginning (left) and one at the end (right) of the string
  let left = 0, right = s.length - 1;

  // Step 3: Iterate while the left pointer is less than the right pointer
  while (left < right) {
    // Step 4: Compare the characters at the left and right pointers
    if (s[left++] !== s[right--]) {
      // If they don't match, it's not a palindrome, so return false
      return false;
    }
  }

  // Step 5: If we finish the loop without returning false, the string is a palindrome
  return true;
}

```

 **Example**: `isPalindrome("A man, a plan, a canal: Panama")` → `true`

```js
function isPalindrome(str) {
  const clean = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return clean === clean.split('').reverse().join('');
}
console.log(isPalindrome("Racecar")); // true
```

```js
function isPalindrome(str) {
  str = str.toLowerCase(); // optional
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("madam"));    // true
console.log(isPalindrome("hello"));    // false
```

 **Output:**
```
true
false
```

---

**Without Using Predefined Functions**



**Code Example**
```js
function isPalindromeManual(str) {
  // Step 1: Initialize an empty string to store the manually converted lowercase string
  let lowerStr = '';

  // Step 2: Manually convert the string to lowercase
  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);  // Get the Unicode of the character
    if (code >= 65 && code <= 90) { // Check if the character is an uppercase letter (A-Z)
      // Convert uppercase to lowercase by adding 32 to the char code (A -> a, B -> b, etc.)
      lowerStr += String.fromCharCode(code + 32);
    } else {
      // If the character is already lowercase or non-alphabetic, just add it as is
      lowerStr += str[i];
    }
  }

  // Step 3: Initialize two pointers: one at the beginning (left) and one at the end (right)
  let left = 0;
  let right = lowerStr.length - 1;

  // Step 4: Compare characters from both ends of the string, moving inward
  while (left < right) {
    if (lowerStr[left] !== lowerStr[right]) {
      // If characters don't match, it's not a palindrome
      return false;
    }
    left++;  // Move the left pointer towards the center
    right--; // Move the right pointer towards the center
  }

  // Step 5: If we complete the loop without finding any mismatch, it's a palindrome
  return true;
}


console.log(isPalindromeManual("Racecar"));  // true
console.log(isPalindromeManual("Hello"));    // false
```

 **Output:**
```
true
false
```

---

## **Chunk an Array**

---
Given:
```js
array = [1, 2, 3, 4, 5, 6, 7]
chunk size = 3
```

Expected Output:
```js
[[1, 2, 3], [4, 5, 6], [7]]
```

---

**Using Predefined Functions (`slice()`, `push()`)**



**Code Example**
```js
function chunkArray(arr, size) {
  const result = [];  // Initialize an empty array to store the chunks

  // Iterate through the array with steps of 'size' to break it into chunks
  for (let i = 0; i < arr.length; i += size) {
    // Slice the array from index 'i' to 'i + size', creating a new chunk
    result.push(arr.slice(i, i + size));  // Push the chunk to the result array
  }

  return result;  // Return the array containing all chunks
}

// Example usage:
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));

```

 **Output:**
```js
[[1, 2, 3], [4, 5, 6], [7]]
```

---

**Without Using Predefined Functions**



**Code Example**
```js
function chunkArrayManual(arr, size) {
  let result = [];       // Array to store the resulting chunks
  let chunk = [];        // Temporary array to store the current chunk
  let chunkCount = 0;    // Counter to track the number of elements in the current chunk

  // Iterate through the original array
  for (let i = 0; i < arr.length; i++) {
    chunk[chunkCount] = arr[i];  // Add the current element to the chunk
    chunkCount++;                // Increment the chunk counter

    // If the chunk has reached the desired size, push it to the result array
    if (chunkCount === size) {
      result[result.length] = chunk;  // Add the chunk to the result array
      chunk = [];                     // Reset the chunk array for the next group
      chunkCount = 0;                 // Reset the chunk counter for the next group
    }
  }

  // If there are any leftover elements in the chunk (less than the specified size)
  if (chunkCount > 0) {
    result[result.length] = chunk;  // Push the last chunk to the result array
  }

  return result;  // Return the array containing all chunks
}


console.log(chunkArrayManual([1, 2, 3, 4, 5, 6, 7], 3));
```

 **Output:**
```js
[[1, 2, 3], [4, 5, 6], [7]]
```

---


## **Reverse a String**
**Approach**: Two-pointer swap.

```javascript
function reverseString(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
}
```

 **Example**: `reverseString(["h","e","l","l","o"])` → `["o","l","l","e","h"]`

---

## Reverse a String
```ts
function reverseString(str: string): string {
  return str.split('').reverse().join('');
}
```
> Splits the string into characters, reverses them, and joins them back.


## **Reverse Words in a Sentence**

> Example input: `"Hello world this is JavaScript"`  
> Expected output: `"JavaScript is this world Hello"`

---

**Using Predefined Functions (`split()`, `reverse()`, `join()`)**



**Code Example**
```js
function reverseWords(sentence) {
  return sentence.split(' ')    // Split the sentence into an array of words
    .reverse()                  // Reverse the array of words
    .join(' ');                 // Join the reversed array back into a sentence
}


console.log(reverseWords("Hello world this is JavaScript"));
```

 **Output:**
```
JavaScript is this world Hello
```

---

**Without Using Predefined Functions**


**Code Example**
```js
function reverseWordsManual(sentence) {
  let words = [];
  let word = "";
  let wordIndex = 0;

  // Step 1: Split sentence into words manually
  for (let i = 0; i <= sentence.length; i++) {
    let char = sentence[i];
    if (char === " " | i === sentence.length) {
      words[wordIndex] = word;
      wordIndex++;
      word = "";
    } else {
      word += char;
    }
  }

  // Step 2: Reverse the words array manually
  for (let i = 0; i < words.length / 2; i++) {
    let temp = words[i];
    words[i] = words[words.length - 1 - i];
    words[words.length - 1 - i] = temp;
  }

  // Step 3: Join words into sentence manually
  let reversedSentence = "";
  for (let i = 0; i < words.length; i++) {
    reversedSentence += words[i];
    if (i !== words.length - 1) reversedSentence += " ";
  }

  return reversedSentence;
}

console.log(reverseWordsManual("Hello world this is JavaScript"));
```

 **Output:**
```
JavaScript is this world Hello
```

---



---


## **Vowels**

> Vowels = `'a', 'e', 'i', 'o', 'u'` (case-insensitive)  



- [Count Vowels Using Predefined Functions](#count-vowels-using-predefined-functions)
- [Count Vowels Without Using Predefined Functions](#count-vowels-without-using-predefined-functions)
- [Max Number of Vowels in Substring](#max-number-of-vowels-in-substring)



---

### **Count Vowels Using Predefined Functions**



**Code Example**
```js
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];  // Array of vowels
  return str
    .toLowerCase()                      // Convert the string to lowercase
    .split('')                           // Split the string into an array of characters
    .filter(char => vowels.includes(char)) // Filter out only the vowels
    .length;                             // Return the count of vowels
}


console.log(countVowels("Hello World"));
```

```js
function countVowels(str) {
  const vowels = 'aeiou';
  let count = 0;
  
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}
```

 **Output:**
```
3
```

---

### **Count Vowels Without Using Predefined Functions**



**Code Example**
```js
function countVowelsManual(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    // Convert to lowercase manually if uppercase
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      ch = String.fromCharCode(code + 32); // A-Z → a-z
    }

    if (
      ch === 'a' |
      ch === 'e' |
      ch === 'i' |
      ch === 'o' |
      ch === 'u'
    ) {
      count++;
    }
  }

  return count;
}

console.log(countVowelsManual("Hello World"));
```

 **Output:**
```
3
```

---



### Max Number of Vowels in Substring

> Given a string `s` and an integer `k`, return the maximum number of vowels in any substring of length `k`.

---
> Instead of checking **every substring of length `k`**, we can use a sliding window of size `k` to **keep track of how many vowels are in the current window**, and just **update the count** as the window slides.

---

**Optimized Approach**

1. Use a **sliding window** of size `k`.
2. Maintain a `vowelCount` as you move the window.
3. For every character entering the window, check if it's a vowel — if yes, increment the count.
4. For every character exiting the window, check if it's a vowel — if yes, decrement the count.
5. Keep track of the `maxVowels` seen so far.

---

**JavaScript Code**

```js
function maxVowels(s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;
  let maxCount = 0;

  // Initial window of size k
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) count++;
  }

  maxCount = count;

  // Slide the window
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i - k])) count--; // remove left char
    if (vowels.has(s[i])) count++;     // add right char
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}
```

---

**Example**

```js
s = "abciiidef", k = 3

Window: "abc" → 1 vowel  
Window: "bci" → 1 vowel  
Window: "cii" → 2 vowels  
Window: "iii" → 3 vowels   
...
Final Answer: 3
```

---

**Time and Space Complexity**

- **Time:** O(n) – each character is processed once as the window slides.
- **Space:** O(1) – only fixed space is used (for the set of vowels).

---




## **First Non-Repeating Character**

> Given a string, find the **first character** that doesn't repeat.  
> Example: `"swiss"` → `'w'` (since `'s'` appears 3 times and `'w'` appears only once and first)

---

```javascript
function firstUniqChar(s) {
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) return `Postion - ${i} Value - ${s[i]}`; 
    }

    return -1;
}

console.log(firstUniqChar('ceetcode'));

```
**Input**: `"leetcode"`  
**Output**: `0`

---

**Using Predefined Functions**  
(using `.split()`, `.forEach()`, `.charAt()`, `.toLowerCase()`)



**Code Example**
```js
function firstNonRepeatingChar(str) {
  const freq = {};                    // Object to store the frequency of characters
  const lower = str.toLowerCase();    // Convert string to lowercase for case-insensitive comparison

  // Count frequency of each character
  lower.split('').forEach(char => {
    freq[char] = (freq[char] | 0) + 1; // Increment count for each character
  });

  // Find the first non-repeating character in original case
  for (let i = 0; i < lower.length; i++) {
    if (freq[lower[i]] === 1) {        // If the character appears only once
      return str[i];                   // Return the character in its original case
    }
  }

  return null;                         // Return null if no non-repeating character is found
}


console.log(firstNonRepeatingChar("swiss"));   // 'w'
console.log(firstNonRepeatingChar("level"));   // 'v'
```

 **Output:**
```
'w'
'v'
```

---

**Without Using Predefined Functions**



**Code Example**
```js
function firstNonRepeatingCharManual(str) {
  const freq = {};

  // First pass: count characters
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    let code = str.charCodeAt(i);

    // Manual toLowerCase
    if (code >= 65 && code <= 90) {
      ch = String.fromCharCode(code + 32);
    }

    if (freq[ch]) {
      freq[ch] = freq[ch] + 1;
    } else {
      freq[ch] = 1;
    }
  }

  // Second pass: find first non-repeating
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      ch = String.fromCharCode(code + 32);
    }

    if (freq[ch] === 1) {
      return str[i]; // return original-case character
    }
  }

  return null;
}

console.log(firstNonRepeatingCharManual("swiss"));  // 'w'
console.log(firstNonRepeatingCharManual("Teeter")); // 'r'
```

 **Output:**
```
'w'
'r'
```

---




## Factorial

### Using Iteration (Loop)

```js
function factorialManual(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialManual(5)); // Output: 120
```

---

### Using Recursion

```js
function factorialRecursive(n) {
  if (n === 0 | n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5)); // Output: 120
```

---

**Sample Input and Output**

| Input | Output |
|-------|--------|
| `0`   | `1`    |
| `1`   | `1`    |
| `4`   | `24`   |
| `5`   | `120`  |

---



---


## Fibonacci

### Iterative Manual Logic (no `.push`, etc.)

```js
function fibonacciManual(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

console.log(fibonacciManual(6)); // Output: 8
```

---

### Recursive Manual

```js
function fibonacciRecursive(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(6)); // Output: 8
```

> ⚠️ Recursive version is simple but **inefficient** for large `n` due to repeated calculations.

---

**Sample Inputs and Outputs:

| `n` | Output `F(n)` |
|-----|---------------|
| 0   | 0             |
| 1   | 1             |
| 2   | 1             |
| 3   | 2             |
| 4   | 3             |
| 5   | 5             |
| 6   | 8             |

---




---

## 	Recursive Sum of Array:  
Given an array of numbers, compute the sum using recursion.

📌 Example:
```js
Input: [1, 2, 3, 4, 5]
Output: 15
```

---

### Using Predefined Function (`.reduce()`)

```js
function sumUsingReduce(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

console.log(sumUsingReduce([1, 2, 3, 4, 5])); // Output: 15
```

---

### Without Using Any Predefined Functions (Pure Recursion)

```js
function recursiveSum(arr, index = 0) {
  if (index >= arr.length) return 0;
  return arr[index] + recursiveSum(arr, index + 1);
}

console.log(recursiveSum([1, 2, 3, 4, 5])); // Output: 15
```

---

**Sample Inputs and Outputs:

| Input               | Output |
|--------------------|--------|
| `[1, 2, 3]`         | 6      |
| `[10, 20, 30, 40]`  | 100    |
| `[]`                | 0      |
| `[7]`               | 7      |

---




---

## Power Function:  
Calculate the result of `base` raised to the power of `exponent` → `base^exponent`

📌 Example:
```js
Input: base = 2, exponent = 4
Output: 16 // because 2 * 2 * 2 * 2 = 16
```

---

### Using Predefined Function (`Math.pow()`)

```js
function powerUsingMath(base, exponent) {
  return Math.pow(base, exponent);
}

console.log(powerUsingMath(2, 4)); // Output: 16
```

---

### Without Using Any Predefined Functions

###  A. Iterative Approach

```js
function powerIterative(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

console.log(powerIterative(2, 4)); // Output: 16
```

---

###  B. Recursive Approach

```js
function powerRecursive(base, exponent) {
  if (exponent === 0) return 1;
  return base * powerRecursive(base, exponent - 1);
}

console.log(powerRecursive(2, 4)); // Output: 16
```

---

**Sample Inputs and Outputs:

| Base | Exponent | Output |
|------|----------|--------|
| 2    | 0        | 1      |
| 2    | 3        | 8      |
| 3    | 2        | 9      |
| 5    | 4        | 625    |

> Note: These assume **positive integers** for the exponent. Let me know if you'd like to include handling for negative exponents or decimal powers!

---



---

## **Count Frequency of Array Element**

> Given an array like `[1, 2, 2, 3, 1, 4, 2]`, output frequency:  
> `{ 1: 2, 2: 3, 3: 1, 4: 1 }`

---

**Using Predefined Functions (`forEach()`, object access, etc.)**



**Code Example**
```js
function countArrayFreq(arr) {
  const freq = {};  // Object to store frequency of items
  arr.forEach(item => {
    freq[item] = (freq[item] | 0) + 1;  // Increment frequency count for the item
  });
  return freq;  // Return the frequency object
}


console.log(countArrayFreq([1, 2, 2, 3, 1, 4, 2]));
```

 **Output:**
```js
{ 1: 2, 2: 3, 3: 1, 4: 1 }
```

---

**Without Using Predefined Functions**


**Code Example**
```js
function countArrayFreqManual(arr) {
  const freq = {};  // Object to store frequencies of items

  for (let i = 0; i < arr.length; i++) {  // Loop through each item in the array
    const item = arr[i];  // Get the current item

    // Check if the item is already in the freq object
    if (freq[item]) {
      freq[item] = freq[item] + 1;  // If it exists, increment the count
    } else {
      freq[item] = 1;  // If it doesn't exist, set the count to 1
    }
  }

  return freq;  // Return the frequency object
}


console.log(countArrayFreqManual([1, 2, 2, 3, 1, 4, 2]));
```

 **Output:**
```js
{ 1: 2, 2: 3, 3: 1, 4: 1 }
```

---


## **Character Frequency Count**

> Count how many times each character appears in a string (including spaces and punctuation unless filtered).  
> Example: `"hello"` → `{ h: 1, e: 1, l: 2, o: 1 }`

---

**Using Predefined Functions (`toLowerCase()`, `split()`, `forEach()` / `reduce()` / object access)**



**Code Example**
```js
function charFrequency(str) {
  const freq = {}; // Initialize an empty object to store frequencies
  str.toLowerCase().split('').forEach(char => {
    freq[char] = (freq[char] | 0) + 1; // Bitwise OR handles undefined values as 0
  });
  return freq;
}


console.log(charFrequency("hello"));
```

 **Output:**
```js
{ h: 1, e: 1, l: 2, o: 1 }
```

---

**Without Using Predefined Functions**


**Code Example**
```js
function charFrequencyManual(str) {
  const freq = {};

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    let code = str.charCodeAt(i);

    // Manual toLowerCase
    if (code >= 65 && code <= 90) {
      ch = String.fromCharCode(code + 32); // A-Z → a-z
    }

    if (freq[ch]) {
      freq[ch] = freq[ch] + 1;
    } else {
      freq[ch] = 1;
    }
  }

  return freq;
}

console.log(charFrequencyManual("Hello"));
```

 **Output:**
```js
{ h: 1, e: 1, l: 2, o: 1 }
```



## Flatten Nested Arrays  
Given a nested array, return a new array with all values flattened (one level or deeply).

📌 Example:
```js
Input: [1, [2, [3, [4]], 5]]
Output: [1, 2, 3, 4, 5]
```

---


### Using `.flat(Infinity)`
```js
function flattenUsingFlat(arr) {
  return arr.flat(Infinity);
}

console.log(flattenUsingFlat([1, [2, [3, [4]], 5]])); // Output: [1, 2, 3, 4, 5]
```

---

### Using `.reduce()` and `.concat()`
```js
function flattenUsingReduce(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flattenUsingReduce(val) : val);
  }, []);
}

console.log(flattenUsingReduce([1, [2, [3, [4]], 5]])); // Output: [1, 2, 3, 4, 5]
```

---


### Without Using Any Predefined Functions (No `.flat()`, `.reduce()`, `.concat()`)
```js
function manualFlatten(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object" && arr[i] instanceof Array) {
      const flatInner = manualFlatten(arr[i]); // recursively flatten
      for (let j = 0; j < flatInner.length; j++) {
        result[result.length] = flatInner[j]; // push manually
      }
    } else {
      result[result.length] = arr[i];
    }
  }

  return result;
}

console.log(manualFlatten([1, [2, [3, [4]], 5]])); // Output: [1, 2, 3, 4, 5]
```

---

**Sample Inputs and Outputs:

| Input                      | Output              |
|---------------------------|---------------------|
| `[1, 2, [3]]`              | `[1, 2, 3]`         |
| `[1, [2, [3, 4]], 5]`      | `[1, 2, 3, 4, 5]`   |
| `[[[1]], 2, [[3, 4]], 5]`  | `[1, 2, 3, 4, 5]`   |

---


## **Understanding var vs let in Loops and Closures**
```js
for (var i = 0; i < 5; i++) {
  console.log(i);  setTimeout(() => console.log(i), 0);
  } 
Output - 0  1  2  3  4  5  5  5  5  5
```
Use let (block scope)
```js
for (let i = 0; i < 5; i++) {
  console.log(i);  setTimeout(() => console.log(i), 0);
}
Output - 0  1  2  3  4  0  1  2  3  4
```
Use a closure with IIFE
```js
for (var i = 0; i < 5; i++) {
  (function(i) {    setTimeout(() => console.log(i), 0);  })(i);
}
```

| Feature                     | `let`                                | `var`                             |
| --------------------------- | ------------------------------------ | --------------------------------- |
| **Scope**                   | Block-scoped                         | Function-scoped                   |
| **Binding per iteration**   | ✅ New binding each time              | ❌ One shared binding              |
| **Closure behavior**        | Remembers correct value              | Remembers same reference          |
| **What `setTimeout` sees**  | Each callback sees its own `i` value | All callbacks see final `i` value |
| **Loop Output (Immediate)** | `0 1 2 3 4`                          | `0 1 2 3 4`                       |
| **`setTimeout` Output**     | `0 1 2 3 4`                          | `5 5 5 5 5`                       |
| **Fix for `var`**           | Not needed                           | Use IIFE or convert to `let`      |

## **Boolean Function to Match Filename Pattern Without Regex**
```js
function matchPattern(filename, pattern) {
  let i = 0, j = 0, starIdx = -1, match = 0;
  while (i < filename.length) {
    if (j < pattern.length && (pattern[j] === "?" | pattern[j] === filename[i])) {
      i++; j++;
    } else if (j < pattern.length && pattern[j] === "*") {
      starIdx = j++; match = i;
    } else if (starIdx !== -1) {
      j = starIdx + 1; i = ++match;
    } else return false;
  }
  while (j < pattern.length && pattern[j] === "*") j++;
  return j === pattern.length;
}
```

## **Stock Span Problem**
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
- **Time Complexity**: **O(n) amortized**
- **Space Complexity**: **O(n)**

```

## **Simulating Wallet Withdrawal Queue**
```js
function withdrawQueue(amounts, maxLimit) {
  let exitOrder = [], queue = [], i = 0;
  while (amounts.some(a => a > 0)) {
    if (amounts[i] > 0) {
      queue.push(i + 1);
      amounts[i] -= Math.min(amounts[i], maxLimit);
      if (amounts[i] <= 0) exitOrder.push(i + 1);
    }
    i = (i + 1) % amounts.length;
  }
  return { exitOrder, queue };
}
console.log(withdrawQueue([1200, 400, 300, 2000, 1500], 400));
```



## **Most Frequent Character in a String**.

### 🔁 Example:
```js
Input: "abbcccddddeee"
Output: "d"
```

---

###  Solution (with Explanation):

```js
function getMaxOccurringChar(str) {
  const freqMap = {};
  let maxChar = '';
  let maxCount = 0;

  for (let char of str) {
    freqMap[char] = (freqMap[char] || 0) + 1;

    if (freqMap[char] > maxCount) {
      maxCount = freqMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
```

---

### 🧪 Test the Function:
```js
console.log(getMaxOccurringChar("abbcccddddeee")); // d
console.log(getMaxOccurringChar("aabbbccde"));     // b
console.log(getMaxOccurringChar("xyz"));           // x (all are 1, returns first)
```

---

### 🧠 How it Works:
- We loop through each character and build a **frequency map** (`freqMap`).
- While building it, we **track the character** with the highest frequency in `maxChar`.
- Finally, return `maxChar`.

---




##  **Maximum Sum Subarray of Size K** 
---

###  Pseudocode:

```
Function MaxSumSubarray(arr, k):
    Initialize windowSum to 0
    Initialize maxSum to 0

    // Step 1: Calculate the sum of the first 'k' elements
    For i from 0 to k - 1:
        windowSum = windowSum + arr[i]
    
    Set maxSum = windowSum

    // Step 2: Slide the window through the rest of the array
    For i from k to length of arr - 1:
        // Add the new element and remove the old one
        windowSum = windowSum + arr[i] - arr[i - k]

        // Update maxSum if needed
        If windowSum > maxSum:
            maxSum = windowSum

    Return maxSum
```

---

###  Example (Dry Run):
For `arr = [2, 1, 5, 1, 3, 2]` and `k = 3`:
- First window: `2 + 1 + 5 = 8`
- Slide:
  - Add 1, remove 2 → windowSum = 7
  - Add 3, remove 1 → windowSum = 9 (new max)
  - Add 2, remove 5 → windowSum = 6
- Result: **maxSum = 9**


###  Program:
  ```javascript
function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  // First window sum
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  // Slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}
  ```
---



### Longest Substring

 - [Longest Substring with K Distinct Characters](#Longest-Substring-with-K-Distinct-Characters)  
 - [Longest Substring Without Repeating Characters](#Longest-Substring-Without-Repeating-Characters)


### Longest Substring with K Distinct Characters

**Given** a string `s` and an integer `k`, **return the length of the longest substring** that contains **at most `k` distinct characters**.

---

**Example**

```text
Input: s = "eceba", k = 2  
Output: 3  
Explanation: The longest substring with at most 2 distinct characters is `"ece"`.
```

---

**Approach: Sliding Window + HashMap (or JS object)**

- Use two pointers (`start`, `end`) to define the window.
- Use a HashMap (or JS object) to count the frequency of characters.
- If the number of unique characters > `k`, **shrink** the window from the left.
- Track the **max window size** throughout.

---

**JavaScript Code**

```js
function longestSubstringWithKDistinct(s, k) {
  if (s.length === 0 || k === 0) return 0;

  let start = 0;
  let maxLength = 0;
  let charMap = new Map();

  for (let end = 0; end < s.length; end++) {
    const endChar = s[end];
    charMap.set(endChar, (charMap.get(endChar) || 0) + 1);

    while (charMap.size > k) {
      const startChar = s[start];
      charMap.set(startChar, charMap.get(startChar) - 1);
      if (charMap.get(startChar) === 0) {
        charMap.delete(startChar);
      }
      start++; // shrink window
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
```

---

**Pseudocode**

```
Function LongestSubstringWithKDistinct(s, k):
    If s is empty or k is 0:
        Return 0

    Initialize start = 0
    Initialize maxLength = 0
    Initialize charMap as empty map

    For end in range 0 to length of s:
        Add s[end] to charMap with count

        While charMap size > k:
            Decrease count of s[start]
            If count becomes 0:
                Remove s[start] from charMap
            Move start pointer forward

        Update maxLength = max(maxLength, end - start + 1)

    Return maxLength
```

---

**Time Complexity**
- **O(n)** — Each character is visited at most twice.
- **O(k)** — Space for storing up to `k` distinct characters.

---

---

### Longest Substring Without Repeating Characters

> Given a string `s`, find the **length** of the **longest substring without repeating characters**.

---

**Example**

```txt
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with length 3.
```

---

**Pseudocode**

```
Function LengthOfLongestSubstring(s):
    Initialize start = 0
    Initialize maxLen = 0
    Initialize map = empty

    For end from 0 to len(s) - 1:
        If s[end] is in map and map[s[end]] >= start:
            Move start to map[s[end]] + 1

        Update map[s[end]] = end
        maxLen = max(maxLen, end - start + 1)

    Return maxLen
```

---
**JavaScript Code**

```js
function lengthOfLongestSubstring(s) {
  let start = 0;
  let maxLen = 0;
  const seen = new Map();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    // If char already exists in map and is in current window
    if (seen.has(char) && seen.get(char) >= start) {
      start = seen.get(char) + 1; // Move start to one after last occurrence
    }

    seen.set(char, end); // Update or add current char index
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}
```

---
**Dry Run (Input: "abcabcbb")**

```
Window: a → ab → abc (max = 3)
Next: a → 'a' is duplicate, move start → bc → bca → bcab (skip)
Keep updating max as you go
```


```javascript
function lengthOfLongestSubstring(s) {
    const map = new Map();
    let left = 0, maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left);
        }
        map.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}
```
**Input**: `"abcabcbb"`  
**Output**: `3`

---

## **Minimum Window Substring**##
  ```javascript
function minWindow(s, t) {
  // Edge case: if either string is empty, return ""
  if (s.length === 0 || t.length === 0) return "";

  // Step 1: Create a frequency map for characters in `t`
  const tMap = new Map();
  for (let char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }

  // `required` = number of unique characters in `t` that must be present in window
  let required = tMap.size;

  // `formed` = how many of those required characters (with exact frequency) are currently satisfied in the window
  let formed = 0;

  // Frequency map for the current window
  const windowCounts = new Map();

  // Sliding window pointers and result tracking
  let left = 0, right = 0;
  let minLen = Infinity; // Smallest length found so far
  let minStart = 0;      // Start index of the minimum window

  // Step 2: Start expanding the right pointer of the window
  while (right < s.length) {
    const char = s[right];

    // Add current character to window frequency map
    windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

    // If this character is in `tMap` and its required count is now matched
    if (tMap.has(char) && windowCounts.get(char) === tMap.get(char)) {
      formed++;
    }

    // Step 3: Try to shrink the window from the left as long as it is valid
    while (left <= right && formed === required) {
      // Update the result if this window is smaller
      const windowSize = right - left + 1;
      if (windowSize < minLen) {
        minLen = windowSize;
        minStart = left;
      }

      // Remove the leftmost character from the window
      const leftChar = s[left];
      windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);

      // If the character was required and its count drops below needed, reduce `formed`
      if (tMap.has(leftChar) && windowCounts.get(leftChar) < tMap.get(leftChar)) {
        formed--;
      }

      // Shrink the window from the left
      left++;
    }

    // Expand window from the right
    right++;
  }

  // Step 4: Return the minimum window substring found, or "" if none found
  return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}
  ```


## **Permutation in String**

**(non optimize)Sliding Window + Frequency Count**

  ```javascript
function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;

  const s1Map = new Array(26).fill(0);
  const s2Map = new Array(26).fill(0);

  // Fill initial frequency map for s1 and the first window of s2
  for (let i = 0; i < s1.length; i++) {
    s1Map[s1.charCodeAt(i) - 97]++;
    s2Map[s2.charCodeAt(i) - 97]++;
  }

  // Helper function to compare frequency arrays
  const matches = (a, b) => a.every((val, idx) => val === b[idx]);

  // Slide the window across s2
  for (let i = s1.length; i < s2.length; i++) {
    if (matches(s1Map, s2Map)) return true;

    // Slide window: remove left char, add right char
    s2Map[s2.charCodeAt(i) - 97]++;
    s2Map[s2.charCodeAt(i - s1.length) - 97]--;
  }

  // Final window check
  return matches(s1Map, s2Map);
}
  ```

**(optimize)Hash Map**

  ```javascript
function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false; // Edge case: s1 is longer than s2

  // Frequency map for s1
  const s1Map = new Map();
  for (let char of s1) {
    s1Map.set(char, (s1Map.get(char) || 0) + 1);
  }

  // Sliding window on s2: initialize the first window
  const windowMap = new Map();
  let matchCount = 0;
  const requiredMatches = s1Map.size;  // We need all characters of s1 to match

  for (let i = 0; i < s1.length; i++) {
    const char = s2[i];
    windowMap.set(char, (windowMap.get(char) || 0) + 1);

    // Check if we have a perfect match of the current character in the window
    if (windowMap.get(char) === s1Map.get(char)) {
      matchCount++;
    }
  }

  // If the initial window has a match, return true
  if (matchCount === requiredMatches) {
    return true;
  }

  // Now slide the window across s2
  for (let i = s1.length; i < s2.length; i++) {
    const newChar = s2[i];
    const oldChar = s2[i - s1.length];

    // Add new character to window map
    windowMap.set(newChar, (windowMap.get(newChar) || 0) + 1);

    // Check if the new character matches the frequency in s1
    if (windowMap.get(newChar) === s1Map.get(newChar)) {
      matchCount++;
    } else if (windowMap.get(newChar) === s1Map.get(newChar) + 1) {
      matchCount--;
    }

    // Remove the old character from the window map
    windowMap.set(oldChar, windowMap.get(oldChar) - 1);

    // Check if removing the old character makes it unmatch
    if (windowMap.get(oldChar) === s1Map.get(oldChar) - 1) {
      matchCount--;
    } else if (windowMap.get(oldChar) === s1Map.get(oldChar)) {
      matchCount++;
    }

    // If all characters match, return true
    if (matchCount === requiredMatches) {
      return true;
    }
  }

  // No match found
  return false;
}

  ```

---

## **Binary Search**

sort the array:
```js
let arr = [1, 6, 2, 9, 4, 5, 7, 3];
arr.sort((a, b) => a - b); // Ascending sort
// arr = [1, 2, 3, 4, 5, 6, 7, 9]
```
binary search to find index of value `3`:
```js
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1; // Not found
}
const index = binarySearch(arr, 3);
console.log("Sorted Array:", arr);
console.log("Index of 3:", index);
console.log(removeDuplicates(array)); // [4, 2, 5, 3, 1]
```

### **Iterative Approach**

```js
function binarySearchIterative(arr, target) {
  let left = 0, right = arr.length - 1;

  // Keep narrowing the search range
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1; // Not found
}

// Example:
console.log(binarySearchIterative([1, 3, 5, 7, 9], 5)); // Output: 2
```

**Approach**: Use a loop to divide the search range in half until the target is found or the range is empty.

---

### **Recursive Approach**

```js
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;
  else if (arr[mid] < target)
    return binarySearchRecursive(arr, target, mid + 1, right);
  else
    return binarySearchRecursive(arr, target, left, mid - 1);
}

// Example:
console.log(binarySearchRecursive([2, 4, 6, 8, 10], 8)); // Output: 3
```

**Approach**: Same idea as iterative, but it uses function calls instead of a loop.

---

###  **Search in Rotated Sorted Array**

```js
function searchRotatedArray(nums, target) {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // Determine which side is sorted
    if (nums[left] <= nums[mid]) {
      // Left part is sorted
      if (target >= nums[left] && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      // Right part is sorted
      if (target > nums[mid] && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }

  return -1;
}

// Example:
console.log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
```

**Approach**: Modified binary search. Find which half is sorted and decide which direction to move.

---

###  **Find Peak Element**

```js
function findPeakElement(nums) {
  let left = 0, right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // If mid is greater than next, peak lies to the left
    if (nums[mid] > nums[mid + 1]) right = mid;
    else left = mid + 1;
  }

  return left; // or right, both point to a peak
}

// Example:
console.log(findPeakElement([1, 2, 3, 1])); // Output: 2 (index of 3)
```

**Approach**: Binary search on slope. Always move toward the greater side since a peak exists there.

---

###  **Kth Largest Element in an Array**

```js
function findKthLargest(nums, k) {
  nums.sort((a, b) => b - a); // Descending order
  return nums[k - 1];
}


// Example:
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5
```

**Approach**: Sort the array in descending order and pick the (k-1)th element.

🧠 *Optimized solution can use Min Heap or QuickSelect for O(n) average time.*

---

###  **First and Last Position of Element in Sorted Array**

```js
function searchRange(nums, target) {
  function findBound(isFirst) {
    let left = 0, right = nums.length - 1, result = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        result = mid;
        if (isFirst) right = mid - 1; // Keep going left
        else left = mid + 1;          // Keep going right
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }

  return [findBound(true), findBound(false)];
}

// Example:
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
```

**Approach**: Use two binary searches – one for first occurrence, one for last.

---

###  **Median of Two Sorted Arrays**

```js
function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

  let x = nums1.length, y = nums2.length;
  let low = 0, high = x;

  while (low <= high) {
    let partitionX = Math.floor((low + high) / 2);
    let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

    let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    let minRightX = partitionX === x ? Infinity : nums1[partitionX];

    let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    let minRightY = partitionY === y ? Infinity : nums2[partitionY];

    // Correct partition found
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((x + y) % 2 === 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      high = partitionX - 1; // move left
    } else {
      low = partitionX + 1;  // move right
    }
  }

  return 0;
}

// Example:
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
```

**Approach**: Binary search the smaller array to find the correct partition between the two arrays.  
📌 Time Complexity: `O(log(min(n, m)))`





---



### Sort an array of objects

- [Sort Array of Objects Using Predefined Functions](#sort-array-of-objects-using-predefined-functions)  
- [Sort Array of Objects Without Using Predefined Sort](#sort-array-of-objects-without-using-predefined-sort)  
- [Sort Array of Objects by a Nested Value](#sort-array-of-objects-by-a-nested-value)


#### Sort Array of Objects Using Predefined Functions

We’ll use the built-in `.sort()` method.

** Code Example:

```js
const people = [
  { name: "Alice", age: 32 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 }
];

const sortedByAge = people.sort((a, b) => a.age - b.age);

console.log(sortedByAge);
```

 **Output:**
```js
[
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 30 },
  { name: 'Alice', age: 32 }
]
```

---
#### Sort Array of Objects Without Using Predefined Sort
#### Sort Array of Objects by a Nested Value

```js
const users = [
  { name: "John", address: { city: "Mumbai" } },
  { name: "Sara", address: { city: "Delhi" } },
  { name: "Alex", address: { city: "Bangalore" } }
];

const ascending = [...users].sort((a, b) => {
  const cityA = a.address.city.toLowerCase();
  const cityB = b.address.city.toLowerCase();
  
  if (cityA < cityB) return -1;
  if (cityA > cityB) return 1;
  return 0;
});

console.log("Ascending:");
console.log(ascending);
```

---



We’ll manually implement a sorting algorithm. Let’s use **Bubble Sort** for simplicity.

---

**Pseudocode**
```
1. Loop over array (outer loop)
2. Inside loop, compare current object age with next object age
3. If current > next, swap the two objects
4. Repeat until array is sorted
```

---

** Code Example (Manual Bubble Sort):

```js
function sortByAgeManual(arr) {
  const people = [...arr]; // copy to avoid mutating original
  const n = people.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (people[j].age > people[j + 1].age) {
        // Swap
        const temp = people[j];
        people[j] = people[j + 1];
        people[j + 1] = temp;
      }
    }
  }

  return people;
}

const people = [
  { name: "Alice", age: 32 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 }
];

console.log(sortByAgeManual(people));
```

 **Output:**
```js
[
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 30 },
  { name: 'Alice', age: 32 }
]
```

---


###  **Merge Sort**  
- Best for large datasets.  
- Uses extra space but gives guaranteed `O(n log n)` performance.

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  let result = [], i = 0, j = 0;

  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  }
  return result.concat(left.slice(i), right.slice(j));
}

function removeDuplicatesAndSort(arr) {
  return mergeSort([...new Set(arr)]); // Using Set to remove duplicates
}

const array = [4, 2, 5, 3, 4, 2, 1];
console.log(removeDuplicatesAndSort(array)); // [1, 2, 3, 4, 5]
```

---

###  **Quick Sort**  
- Choose a **random pivot** to reduce worst-case risk (`O(n²)` becomes rare).  
- Tail recursion removed via slicing.

```js
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(Math.random() * arr.length)];
  const left = [], right = [], equal = [];

  for (let num of arr) {
    if (num < pivot) left.push(num);
    else if (num > pivot) right.push(num);
    else equal.push(num);
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Example
console.log(quickSort([9, 4, 6, 2, 8, 3])); // [2, 3, 4, 6, 8, 9]
```

---

### **Bubble Sort**  
- Early exit if the array is already sorted.

```js
function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break; // Optimization: already sorted
  }

  return arr;
}

// Example
console.log(bubbleSort([5, 1, 4, 2, 8])); // [1, 2, 4, 5, 8]
```

---

###  **Insertion Sort**  
- Great for small or nearly sorted arrays.  
- Reduced assignments when shifting.

```js
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i], j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]; // Shift
      j--;
    }

    arr[j + 1] = key; // Insert
  }

  return arr;
}

// Example
console.log(insertionSort([9, 5, 1, 4, 3])); // [1, 3, 4, 5, 9]
```

---

###  **Selection Sort**  
- Always does `n-1` swaps at most.

```js
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }

    if (i !== minIdx) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }

  return arr;
}

// Example
console.log(selectionSort([29, 10, 14, 37, 13])); // [10, 13, 14, 29, 37]
```

---

###  **Sort Which to Use**

| Sort           | Best Use Case                        | Time (Avg) | Space |
|----------------|--------------------------------------|------------|--------|
| Merge Sort     | Large datasets, guaranteed speed     | O(n log n) | O(n)   |
| Quick Sort     | General-purpose, fast in practice    | O(n log n) | O(log n) |
| Insertion Sort | Small/nearly sorted arrays           | O(n²)      | O(1)   |
| Bubble Sort    | Educational/sorted check             | O(n²)      | O(1)   |
| Selection Sort | Minimum swaps required               | O(n²)      | O(1)   |



| Sort           | Best Use Case                                 | Time (Avg) | Space | Real-Time Scenario |
|----------------|-----------------------------------------------|------------|--------|--------------------|
| **Merge Sort**     | Large datasets, guaranteed speed              | O(n log n) | O(n)   | Used in **databases**, **file sorting**, and **external sorting** where stability and consistency are key. Eg: Sorting logs on disk. |
| **Quick Sort**     | General-purpose, fast in practice             | O(n log n) | O(log n) | Ideal for **in-memory sorting** with good pivot strategy. Used in frameworks like **V8 (Chrome engine)** for `.sort()`. |
| **Insertion Sort** | Small/nearly sorted arrays                   | O(n²)      | O(1)   | Used in **online ticket booking systems** or **real-time dashboards** where elements come in real-time and list is nearly sorted. |
| **Bubble Sort**    | Educational/sorted check                     | O(n²)      | O(1)   | Great for teaching and debugging. Sometimes used for **simple embedded systems** or where code simplicity > performance. |
| **Selection Sort** | Minimum swaps required                       | O(n²)      | O(1)   | Used in **microcontrollers** or **memory-constrained** devices where swap operations are costly but comparisons are cheap. |

---

### **Sort Visual Analogy**
- **Merge Sort**: Like merging two sorted lines of people into one.
- **Quick Sort**: Like picking a leader (pivot), then organizing people shorter and taller around them.
- **Insertion Sort**: Like sorting cards in your hand while playing.
- **Bubble Sort**: Like repeatedly bubbling up the heaviest item to the end.
- **Selection Sort**: Like selecting the lightest item and placing it at the front each round.

---


###  BFS 

**Approach**: Use a queue, visit neighbors level by level.

```js
function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];

  while (queue.length) {
    const node = queue.shift();
    if (!visited.has(node)) {
      console.log(node); // process
      visited.add(node);
      for (let neighbor of graph[node]) {
        queue.push(neighbor);
      }
    }
  }
}
```

###  DFS 

**Approach**: Use recursion or a stack to go deep.

```js
function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return;
  console.log(node); // process
  visited.add(node);
  for (let neighbor of graph[node]) {
    dfs(graph, neighbor, visited);
  }
}
```

---

##  **Number of Islands**

```js
function numIslands(grid) {
  const rows = grid.length, cols = grid[0].length;
  let count = 0;

  function dfs(r, c) {
    if (
      r < 0 || c < 0 || r >= rows || c >= cols ||
      grid[r][c] === '0'
    ) return;
    grid[r][c] = '0';
    dfs(r + 1, c); dfs(r - 1, c);
    dfs(r, c + 1); dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
}
```

**Input**:  
```js
numIslands([
  ["1","1","0"],
  ["0","1","0"],
  ["1","0","1"]
]); // Output: 3
```

---


##  Detect Cycle in Graph

```js
function hasCycle(edges, n) {
  const parent = Array(n).fill(0).map((_, i) => i);

  function find(x) {
    if (x !== parent[x]) parent[x] = find(parent[x]);
    return parent[x];
  }

  function union(x, y) {
    const rootX = find(x), rootY = find(y);
    if (rootX === rootY) return false;
    parent[rootX] = rootY;
    return true;
  }

  for (let [u, v] of edges) {
    if (!union(u, v)) return true;
  }
  return false;
}
```

---

## **Topological Sort**

```js
function topologicalSort(graph) {
  const inDegree = {}, result = [], queue = [];

  for (let node in graph) {
    inDegree[node] = 0;
  }

  for (let node in graph) {
    for (let neighbor of graph[node]) {
      inDegree[neighbor]++;
    }
  }

  for (let node in inDegree) {
    if (inDegree[node] === 0) queue.push(node);
  }

  while (queue.length) {
    const node = queue.shift();
    result.push(node);
    for (let neighbor of graph[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return result.length === Object.keys(graph).length ? result : [];
}
```

---

## **Clone Graph**

```js
function cloneGraph(node) {
  if (!node) return null;

  const map = new Map();

  function dfs(n) {
    if (map.has(n)) return map.get(n);

    const clone = { val: n.val, neighbors: [] };
    map.set(n, clone);

    for (let neighbor of n.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  }

  return dfs(node);
}
```

---

## **Shortest Path in Binary Matrix**

```js
function shortestPathBinaryMatrix(grid) {
  const n = grid.length;
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;

  const queue = [[0, 0, 1]];
  const dirs = [[0,1],[1,0],[1,1],[0,-1],[-1,0],[-1,-1],[1,-1],[-1,1]];
  const visited = Array(n).fill().map(() => Array(n).fill(false));
  visited[0][0] = true;

  while (queue.length) {
    const [r, c, dist] = queue.shift();
    if (r === n - 1 && c === n - 1) return dist;

    for (let [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (
        nr >= 0 && nc >= 0 && nr < n && nc < n &&
        grid[nr][nc] === 0 && !visited[nr][nc]
      ) {
        visited[nr][nc] = true;
        queue.push([nr, nc, dist + 1]);
      }
    }
  }

  return -1;
}
```

---

## **Word Ladder**

```js
function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue = [[beginWord, 1]];

  while (queue.length) {
    const [word, level] = queue.shift();

    for (let i = 0; i < word.length; i++) {
      for (let c of 'abcdefghijklmnopqrstuvwxyz') {
        const next = word.slice(0, i) + c + word.slice(i + 1);
        if (next === endWord) return level + 1;

        if (wordSet.has(next)) {
          queue.push([next, level + 1]);
          wordSet.delete(next);
        }
      }
    }
  }

  return 0;
}
```

---

## **Dijkstras Algorithm**

```js
function dijkstra(graph, start) {
  const dist = {};
  const visited = new Set();
  const pq = [[0, start]];

  for (let node in graph) dist[node] = Infinity;
  dist[start] = 0;

  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [cost, node] = pq.shift();
    if (visited.has(node)) continue;
    visited.add(node);

    for (let [neighbor, weight] of graph[node]) {
      const newDist = cost + weight;
      if (newDist < dist[neighbor]) {
        dist[neighbor] = newDist;
        pq.push([newDist, neighbor]);
      }
    }
  }

  return dist;
}
```

---


### Inorder Preorder Postorder Traversal

**Inorder Traversal:**
```javascript
function inorderTraversal(root) {
    const result = [];
    if (!root) return result;
    result.push(...inorderTraversal(root.left));
    result.push(root.val);
    result.push(...inorderTraversal(root.right));
    return result;
}
```

**Preorder Traversal:**
```javascript
function preorderTraversal(root) {
    const result = [];
    if (!root) return result;
    result.push(root.val);
    result.push(...preorderTraversal(root.left));
    result.push(...preorderTraversal(root.right));
    return result;
}
```

**Postorder Traversal:**
```javascript
function postorderTraversal(root) {
    const result = [];
    if (!root) return result;
    result.push(...postorderTraversal(root.left));
    result.push(...postorderTraversal(root.right));
    result.push(root.val);
    return result;
}
```

### Level Order Traversal

```javascript
function levelOrder(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];

    while (queue.length) {
        const level = [];
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level);
    }

    return result;
}
```

### Maximum Depth of Binary Tree

```javascript
function maxDepth(root) {
    if (!root) return 0;
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
}
```

### Symmetric Tree

```javascript
function isSymmetric(root) {
    if (!root) return true;

    function isMirror(t1, t2) {
        if (!t1 && !t2) return true;
        if (!t1 || !t2) return false;
        return t1.val === t2.val &&
            isMirror(t1.left, t2.right) &&
            isMirror(t1.right, t2.left);
    }

    return isMirror(root.left, root.right);
}
```

### Diameter of Binary Tree

```javascript
function diameterOfBinaryTree(root) {
    let diameter = 0;

    function depth(node) {
        if (!node) return 0;
        const left = depth(node.left);
        const right = depth(node.right);
        diameter = Math.max(diameter, left + right);
        return Math.max(left, right) + 1;
    }

    depth(root);
    return diameter;
}
```

### Lowest Common Ancestor

```javascript
// For Binary Search Tree (BST)
function lowestCommonAncestorBST(root, p, q) {
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestorBST(root.left, p, q);
    } else if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestorBST(root.right, p, q);
    }
    return root;
}

// For Binary Tree (non-BST)
function lowestCommonAncestor(root, p, q) {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left && right) return root;
    return left ? left : right;
}
```

### Serialize and Deserialize Binary Tree

```javascript
// Serialize
function serialize(root) {
    if (!root) return 'null';
    return root.val + ',' + serialize(root.left) + ',' + serialize(root.right);
}

// Deserialize
function deserialize(data) {
    const list = data.split(',');
    function buildTree() {
        const val = list.shift();
        if (val === 'null') return null;
        const node = new TreeNode(Number(val));
        node.left = buildTree();
        node.right = buildTree();
        return node;
    }
    return buildTree();
}
```

### Path Sum

```javascript
function hasPathSum(root, sum) {
    if (!root) return false;
    if (!root.left && !root.right) return root.val === sum;
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}
```

### Convert Sorted Array to BST

```javascript
function sortedArrayToBST(nums) {
    if (nums.length === 0) return null;

    const mid = Math.floor(nums.length / 2);
    const node = new TreeNode(nums[mid]);

    node.left = sortedArrayToBST(nums.slice(0, mid));
    node.right = sortedArrayToBST(nums.slice(mid + 1));

    return node;
}
```


---

## **Two Sum**
> Given an array `nums` and a `target`, return the **indices** of the two numbers that add up to the target.

Example:
```js
Input: nums = [2, 7, 11, 15], target = 9  
Output: [0, 1] // because nums[0] + nums[1] == 2 + 7 == 9
```

---

### ✅ Approach 1: **Using Map (Optimized)**  
⏱ Time: O(n)  
📦 Space: O(n)

```js
function twoSum(nums, target) {
    const map = new Map(); // store number → index

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
}
```

### 🔍 How It Works:
- Loop through array once
- For each `nums[i]`, calculate the difference `target - nums[i]`
- If that difference is **already in the map**, return its index and current index.
- Else, store the current number and its index in the map.

---

### ✅ Approach 2: **Without Map (Brute Force)**  
⏱ Time: O(n²)  
📦 Space: O(1)

```js
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}
```

### 🔍 How It Works:
- Two nested loops: try **every pair** of elements.
- Return the pair of indices that add up to the target.

---

### 💡 Summary:

| Approach         | Time Complexity | Space Complexity | Notes                    |
|------------------|------------------|--------------------|---------------------------|
| Using Map        | O(n)             | O(n)               | Most efficient, 1-pass    |
| Without Map      | O(n²)            | O(1)               | Simpler but slower        |

---


### **Best Time to Buy and Sell Stock**
**Approach**: Track minimum price, and calculate max profit on the go.

```javascript
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}
```

 **Example**: `maxProfit([7, 1, 5, 3, 6, 4])` → `5`

---



### **Move Zeros**
**Approach**: Use pointer to track insert position, fill rest with 0.

```javascript
function moveZeroes(nums) {
    let insertPos = 0;
    for (let num of nums) {
        if (num !== 0) nums[insertPos++] = num;
    }
    while (insertPos < nums.length) nums[insertPos++] = 0;
}
```

 **Example**: `moveZeroes([0, 1, 0, 3, 12])` → `[1, 3, 12, 0, 0]`

---

### **Maximum Subarray (Kadane’s Algorithm)**
**Approach**: Dynamic programming to track current and max sum.

```javascript
function maxSubArray(nums) {
    let curr = nums[0], max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        curr = Math.max(nums[i], curr + nums[i]);
        max = Math.max(max, curr);
    }
    return max;
}
```

 **Example**: `maxSubArray([-2,1,-3,4,-1,2,1,-5,4])` → `6`

---

### **Merge Sorted Arrays**
**Approach**: Merge from the end to avoid overwriting.

```javascript
function merge(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (j >= 0) {
        nums1[k--] = (i >= 0 && nums1[i] > nums2[j]) ? nums1[i--] : nums2[j--];
    }
}
```

 **Example**: `merge([1,2,3,0,0,0], 3, [2,5,6], 3)` → `[1,2,2,3,5,6]`

---

### **Rotate Array**
**Approach**: Reverse the whole array, then reverse parts.
 - Reverse the whole array.
 - Reverse the first k elements.
 - Reverse the remaining elements.

```javascript
function rotate(nums, k) {
    k %= nums.length;
    nums.reverse();
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);

    function reverse(arr, left, right) {
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
}
```

 **Example**: `rotate([1,2,3,4,5,6,7], 3)` → `[5,6,7,1,2,3,4]`

---

### **Array Contains Duplicate Value**
**Approach**: Use a Set to track visited elements.

```javascript
function containsDuplicate(nums) {
    const seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}
```

```javascript
function containsDuplicate(nums) {
    const map = {}; // empty object to track occurrences

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            return true; // duplicate found
        } else {
            map[nums[i]] = true; // mark the number as seen
        }
    }

    return false; // no duplicates
}

```

 **Example**: `containsDuplicate([1,2,3,1])` → `true`

---

### **Missing Number**
**Approach**: Math formula to find sum difference.

```javascript
function missingNumber(nums) {
    let n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = nums.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}
```

 **Example**: `missingNumber([3, 0, 1])` → `2`

---








---

###  **Trapping Rain Water**
**Approach**: Two-pointer + track left/right max height.

```javascript
function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0, water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= leftMax ? leftMax = height[left] : water += leftMax - height[left];
            left++;
        } else {
            height[right] >= rightMax ? rightMax = height[right] : water += rightMax - height[right];
            right--;
        }
    }

    return water;
}
```

 **Example**: `trap([0,1,0,2,1,0,1,3,2,1,2,1])` → `6`

---

###  **Maximum Product Subarray**
**Approach**: Track max/min product to handle negatives.

```javascript
function maxProduct(nums) {
    let maxProd = nums[0], minProd = nums[0], result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const curr = nums[i];
        const tempMax = Math.max(curr, maxProd * curr, minProd * curr);
        minProd = Math.min(curr, maxProd * curr, minProd * curr);
        maxProd = tempMax;
        result = Math.max(result, maxProd);
    }

    return result;
}
```

 **Example**: `maxProduct([2,3,-2,4])` → `6`

---

###  **Longest Consecutive Sequence**
**Approach**: Use a Set and check only starts of sequences.

```javascript
function longestConsecutive(nums) {
    const set = new Set(nums);
    let maxLen = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            let streak = 1;
            while (set.has(current + 1)) {
                current++;
                streak++;
            }
            maxLen = Math.max(maxLen, streak);
        }
    }

    return maxLen;
}
```

 **Example**: `longestConsecutive([100,4,200,1,3,2])` → `4`

---

###  **Set Matrix Zeroes**
**Approach**: Use first row/col as flags to mark zeros.

```javascript
function setZeroes(matrix) {
    const m = matrix.length, n = matrix[0].length;
    let firstRowZero = false, firstColZero = false;

    for (let i = 0; i < m; i++) if (matrix[i][0] === 0) firstColZero = true;
    for (let j = 0; j < n; j++) if (matrix[0][j] === 0) firstRowZero = true;

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
        }
    }

    if (firstRowZero) for (let j = 0; j < n; j++) matrix[0][j] = 0;
    if (firstColZero) for (let i = 0; i < m; i++) matrix[i][0] = 0;
}
```

 **Example**:
```js
Input: [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
```

---

###  **Spiral Matrix**
**Approach**: Use boundaries and traverse layer-by-layer.

```javascript
function spiralOrder(matrix) {
    const res = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) res.push(matrix[top][i]);
        top++;
        for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
        right--;
        if (top <= bottom) {
            for (let i = right; i >= left; i--) res.push(matrix[bottom][i]);
            bottom--;
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
            left++;
        }
    }

    return res;
}
```

 **Example**:
```js
Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
```

---

### **Subarray Sum Equals K**
**Approach**: Prefix sum + hash map to track sum counts.

```javascript
function subarraySum(nums, k) {
    const map = new Map();
    map.set(0, 1);
    let count = 0, sum = 0;

    for (let num of nums) {
        sum += num;
        if (map.has(sum - k)) count += map.get(sum - k);
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}
```

 **Example**: `subarraySum([1,1,1], 2)` → `2`

---







### **Top K Frequent Elements**
```javascript
function topKFrequent(nums, k) {
    const map = new Map();
    for (let n of nums) map.set(n, (map.get(n) || 0) + 1);

    const buckets = Array(nums.length + 1).fill().map(() => []);
    for (let [num, freq] of map.entries()) {
        buckets[freq].push(num);
    }

    const res = [];
    for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
        res.push(...buckets[i]);
    }

    return res.slice(0, k);
}
```
**Input**: `[1,1,1,2,2,3], k = 2`  
**Output**: `[1,2]`

---



### **Intersection of Two Arrays**
```javascript
function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    return [...set1].filter(x => set2.has(x));
}
```
**Input**: `[1,2,2,1], [2,2]`  
**Output**: `[2]`

---


### **Isomorphic Strings**
```javascript
function isIsomorphic(s, t) {
    const mapST = new Map();
    const mapTS = new Map();

    for (let i = 0; i < s.length; i++) {
        const a = s[i], b = t[i];
        if ((mapST.has(a) && mapST.get(a) !== b) || (mapTS.has(b) && mapTS.get(b) !== a)) {
            return false;
        }
        mapST.set(a, b);
        mapTS.set(b, a);
    }

    return true;
}
```
**Input**: `"egg", "add"`  
**Output**: `true`

---

### **Count Number of Unique Elements in an Array**

#### ✅ Example: Using `Set`

```javascript
function countUniqueElements(arr) {
  const uniqueSet = new Set(arr); // Step 1: Create a Set from the array // A Set automatically removes duplicate values
  return uniqueSet.size;  // Step 2: Return the size of the Set, which gives us the number of unique elements
}

// Test cases to demonstrate
console.log(countUniqueElements([1, 2, 2, 3, 4, 4, 5])); // Output: 5 (unique elements are 1, 2, 3, 4, 5)
console.log(countUniqueElements([]));                   // Output: 0 (no elements)
console.log(countUniqueElements([9, 9, 9]));            // Output: 1 (only one unique element, 9)

```

#### 🔍 How it works:

* A `Set` automatically filters out duplicates.
* `.size` gives the count of unique elements.

---

#### ✅ Without using `Set`

```javascript
function countUniqueElements(arr) {
  const seen = {};    // Step 1: Initialize an empty object `seen` to track elements we've encountered
  let count = 0;        // Step 2: Initialize a counter `count` to track the number of unique elements
  for (const num of arr) {  // Step 3: Loop through each number in the array
    if (!seen[num]) {   // Step 4: If the number hasn't been seen before (i.e., not in `seen` object)
      seen[num] = true;   // Step 5: Mark the number as seen by adding it to the `seen` object
      count++;    // Step 6: Increment the count since it's a unique number
    }
  }
  return count;  // Step 7: Return the count of unique elements
}

// Test cases to demonstrate
console.log(countUniqueElements([1, 2, 2, 3, 4, 4, 5])); // Output: 5 (unique elements are 1, 2, 3, 4, 5)
console.log(countUniqueElements([]));                   // Output: 0 (no elements)
console.log(countUniqueElements([9, 9, 9]));            // Output: 1 (only one unique element, 9)

```






## Anagram

> Check if two strings are **anagrams**:  
> i.e., same characters, same frequency, order doesn't matter.  
> Example: `"listen"` and `"silent"` →  Anagrams

- [Anagram Using Predefined Functions](#anagram-using-predefined-functions)
- [Anagram Without Using Predefined Functions](#anagram-without-using-predefined-functions)
- [Anagram using Map](#anagram-using-map)
- [Group Anagrams](#group-anagrams)


### **Anagram Using Predefined Functions**
(using `.split()`, `.sort()`, `.join()`, `.toLowerCase()`)

**Code Example**
```js
function isAnagram(str1, str2) {
  return str1.toLowerCase().split('').sort().join('') ===
         str2.toLowerCase().split('').sort().join('');
}

console.log(isAnagram("listen", "silent"));  // true
console.log(isAnagram("hello", "world"));    // false
```

 **Output:**
```
true
false
```

---

### **Anagram Without Using Predefined Functions**
(manual comparison using frequency count)


**Code Example**
```js
function isAnagramManual(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freq1 = {};
  const freq2 = {};

  for (let i = 0; i < str1.length; i++) {
    let ch1 = str1[i];
    let ch2 = str2[i];

    // Convert to lowercase manually
    let code1 = str1.charCodeAt(i);
    let code2 = str2.charCodeAt(i);
    if (code1 >= 65 && code1 <= 90) ch1 = String.fromCharCode(code1 + 32);
    if (code2 >= 65 && code2 <= 90) ch2 = String.fromCharCode(code2 + 32);

    freq1[ch1] = (freq1[ch1] | 0) + 1;
    freq2[ch2] = (freq2[ch2] | 0) + 1;
  }

  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) return false;
  }

  return true;
}

console.log(isAnagramManual("listen", "silent"));  // true
console.log(isAnagramManual("hello", "world"));    // false
```

 **Output:**
```
true
false
```

---



### **Anagram using Map**
```javascript
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    
    const count = new Map();
    for (let c of s) count.set(c, (count.get(c) || 0) + 1);
    for (let c of t) {
        if (!count.has(c)) return false;
        count.set(c, count.get(c) - 1);
        if (count.get(c) === 0) count.delete(c);
    }
    
    return count.size === 0;
}
```
**Input**: `s = "anagram", t = "nagaram"`  
**Output**: `true`

---


### **Group Anagrams**
```javascript
function groupAnagrams(strs) {
    const map = new Map();

    for (let str of strs) {
        const key = str.split('').sort().join('');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(str);
    }

    return Array.from(map.values());
}
```
**Input**: `["eat","tea","tan","ate","nat","bat"]`  
**Output**: `[["eat","tea","ate"],["tan","nat"],["bat"]]`

---



### Memoize


---

## ✅ 1. Basic Version (using `Object` as cache)

```javascript
function memoizeAdd() {
  const cache = {};  // Step 1: Create an empty cache object

  return function(a, b) {  // Step 2: Return a closure that "remembers" the cache
    const key = `${a},${b}`;  // Step 3: Create a unique key for the input arguments
    if (cache[key] !== undefined) {  // Step 4: Check if the result for this key is already cached
      return cache[key];  // Step 5: Return the cached result if found
    }
    const result = a + b;  // Step 6: If not cached, calculate the result
    cache[key] = result;   // Step 7: Store the calculated result in the cache
    return result;         // Step 8: Return the calculated result
  };
}
```

### 🔹 Pros:

* Simple and readable.
* Works fine for small, string-keyed arguments.

### 🔹 Cons:

* Converts arguments to strings – might cause **key collisions** (e.g., `1 + "2"` vs `"1" + 2`).
* Only works well with **primitive arguments**.
* Can’t handle objects or arrays as keys.

---

## ✅ 2. Optimized Version (using `Map`)

```javascript
function memoizeAdd() {
  const cache = new Map();  // Step 1: Setup cache

  return function(a, b) {   // Step 2: Return a function that uses the cache
    const key = `${a},${b}`;  // Step 3: Generate a unique key from inputs
    if (cache.has(key)) {     // Step 4: Check if result is already cached
      return cache.get(key);  // Step 5: Return cached result if available
    }
    const result = a + b;     // Step 6: Compute result if not cached
    cache.set(key, result);   // Step 7: Set/store result in the cache
    return result;            // Step 8: Return the computed result
  };
}

```

> Slightly better than using `{}`: `Map` has no prototype collisions and is optimized for key-based lookups.

---

## ✅ 3. Fully Generalized Optimized Memoization (for **any function**, any arguments)

```javascript
function memoize(fn) {
  const cache = new Map(); // ✅ SETUP: Create a new Map to hold cached results

  return function(...args) {  // Wrapper function can take any number of arguments
    const key = JSON.stringify(args); // Convert arguments to a string key

    if (cache.has(key)) { // 🔍 GET: Check if the key is already cached
      return cache.get(key); // Return cached result
    }

    const result = fn(...args); // Compute the result if not cached
    cache.set(key, result);     // ✅ SET: Store result in the cache with key
    return result;              // Return the result
  };
}


// Usage:
const add = memoize((a, b) => a + b);
console.log(add(2, 3)); // Computes
console.log(add(2, 3)); // Cached
```

### 🔹 Advantages:

* Works for **any number and type of arguments**.
* Avoids polluting the global scope.
* Uses `Map`, which performs better for many lookups.

### 🔹 Trade-off:

* `JSON.stringify(args)` can be **slow for large or nested objects**, and it’s not always reliable (e.g., functions or circular references).

---

## ⚖️ Summary Comparison

| Feature                   | Object `{}`         | `Map`                                    | `Map + JSON.stringify`                 |
| ------------------------- | ------------------- | ---------------------------------------- | -------------------------------------- |
| Key type support          | Strings only        | Any value (but still using strings here) | Any argument types (via serialization) |
| Performance               | Fast for small sets | Optimized for lookup                     | Slightly slower (stringify)            |
| Suitable for primitives?  | ✅                   | ✅                                        | ✅                                      |
| Suitable for complex args | ❌                   | ❌ (unless you tweak)                     | ✅                                      |
| Risk of key collisions    | Yes                 | Less likely                              | Very low                               |

---




### LRU

**LRU** stands for **Least Recently Used** — it's a **caching algorithm** used to manage memory efficiently by discarding the **least recently used items** when the cache reaches its capacity.


• [LRU TTL](#LRU-TTL)
---

### ✅ Use Case

In high-performance systems (like API servers, browsers, or databases), we can't store everything in memory. So, when memory is full, **LRU removes the "least recently accessed" item** to make space for a new one.

---

### 📦 How It Works

* You store items in a **cache** (usually a Map or LinkedHashMap).
* When you **access** or **add** an item:

  * That item becomes the **most recently used**.
* When the cache exceeds its **maximum size**, it evicts the **least recently used** item.

---

### 🧑‍💻 Example in JavaScript (Simple LRU Cache):

```ts
class LRUCache<K, V> {
  private cache = new Map<K, V>();

  constructor(private capacity: number = 5) {}

  get(key: K): V | undefined {
    if (!this.cache.has(key)) return undefined;

    // Move the key to the end (most recently used)
    const value = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key); // remove old entry
    } else if (this.cache.size >= this.capacity) {
      // Remove the least recently used (first item)
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    // Insert as most recently used
    this.cache.set(key, value);
  }

  print(): void {
    console.log([...this.cache.entries()]);
  }
}

```

---

### 🧪 Usage:

```ts
const cache = new LRUCache<string, number>(5);

cache.put('a', 1);
cache.put('b', 2);
cache.put('c', 3);
cache.put('d', 4);
cache.put('e', 5);
cache.print(); // Shows all 5

cache.get('b'); // 'b' becomes most recently used
cache.put('f', 6); // 'a' gets evicted (least recently used)

cache.print(); // Should show b, c, d, e, f

```

---


* **LRU**: Removes the least recently accessed item when the cache reaches capacity.
* **TTL**: Invalidates an item after a specific time duration, regardless of access.

### LRU TTL

This hybrid cache is useful when:

* You want to **limit memory** usage (via LRU).
* You want to **ensure freshness** of data (via TTL).

---

### ✅ Implementation Strategy (High-Level)

You can implement this in most languages using:

1. **Doubly Linked List** – for O(1) insertion/removal.
2. **Hash Map** – for O(1) access by key.
3. **Timestamps** – to track TTL expiry.

---

### ✅ TypeScript / JavaScript Example

```ts
class LRUCacheWithTTL<K, V> {
  private cache: Map<K, { value: V; expiry: number }>;
  private capacity: number;
  private ttl: number;

  constructor(capacity: number, ttl: number) {
    this.capacity = capacity;
    this.ttl = ttl; // in milliseconds
    this.cache = new Map();
  }

  get(key: K): V | undefined {
    const item = this.cache.get(key);
    if (!item) return undefined;

    const now = Date.now();
    if (item.expiry < now) {
      this.cache.delete(key);
      return undefined;
    }

    // Refresh item as most recently used
    this.cache.delete(key);
    this.cache.set(key, item);
    return item.value;
  }

  set(key: K, value: V): void {
    const now = Date.now();

    if (this.cache.has(key)) {
      this.cache.delete(key); // refresh position
    } else if (this.cache.size >= this.capacity) {
      // Remove least recently used (first inserted)
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    this.cache.set(key, {
      value,
      expiry: now + this.ttl
    });
  }
}
```

---

### 🧪 Usage

```ts
const cache = new LRUCacheWithTTL<string, string>(3, 5000); // max 3 items, 5 sec TTL
cache.set("a", "value1");
console.log(cache.get("a")); // "value1"
setTimeout(() => console.log(cache.get("a")), 6000); // undefined (expired)
```

---


### Type Coercion



| **Example**                             | **Code**                                                                                                                                                                                                                              | **Explanation**                                                                                                          | **Output**                                                                                     |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| **Adding Boolean and Number**           | `console.log(true + 1);` <br> `console.log(false + 1);`                                                                                                                                                                               | `true` is coerced to 1 and `false` is coerced to 0 in arithmetic operations.                                             | `2` <br> `1`                                                                                   |
| **Comparing `null` and `undefined`**    | `console.log(null == undefined);` <br> `console.log(null === undefined);`                                                                                                                                                             | `==` allows type coercion, so `null == undefined` is true. `===` does not allow coercion, so it’s false.                 | `true` <br> `false`                                                                            |
| **Comparing Arrays**                    | `console.log([] == []);` <br> `console.log([] === []);`                                                                                                                                                                               | Arrays are compared by reference. Both arrays are different objects in memory.                                           | `false` <br> `false`                                                                           |
| **Division by Zero**                    | `console.log(5 / 0);` <br> `console.log(-5 / 0);` <br> `console.log(0 / 0);`                                                                                                                                                          | Division by zero results in `Infinity` or `-Infinity`. Division of zero by zero gives `NaN`.                             | `Infinity` <br> `-Infinity` <br> `NaN`                                                         |
| **`parseInt` with Non-Numeric String**  | `console.log(parseInt("123abc"));` <br> `console.log(parseInt("abc123"));` <br> `console.log(parseInt("0xFF"));`                                                                                                                      | `parseInt` converts numeric strings, stops at first non-numeric character. `"0xFF"` is treated as hex.                   | `123` <br> `NaN` <br> `255`                                                                    |
| **`typeof` with Different Values**      | `console.log(typeof null);` <br> `console.log(typeof NaN);` <br> `console.log(typeof "Hello");` <br> `console.log(typeof 42);` <br> `console.log(typeof {});` <br> `console.log(typeof []);` <br> `console.log(typeof function(){});` | `null` returns "object" due to a JavaScript quirk. `NaN` is a number, arrays are objects. Functions are type "function". | `object` <br> `number` <br> `string` <br> `number` <br> `object` <br> `object` <br> `function` |
| **`==` vs `===` (Equality Comparison)** | `console.log(1 == "1");` <br> `console.log(1 === "1");` <br> `console.log(0 == false);` <br> `console.log(0 === false);`                                                                                                              | `==` performs type coercion, `===` checks strict equality.                                                               | `true` <br> `false` <br> `true` <br> `false`                                                   |
| **Falsy Values**                        | `console.log(Boolean(""));` <br> `console.log(Boolean(0));` <br> `console.log(Boolean(NaN));` <br> `console.log(Boolean(null));` <br> `console.log(Boolean(undefined));` <br> `console.log(Boolean(false));`                          | Falsy values in JavaScript: `""`, `0`, `NaN`, `null`, `undefined`, `false` all convert to `false`.                       | `false` <br> `false` <br> `false` <br> `false` <br> `false` <br> `false`                       |
| **Increment Operator (`++`)**           | `let x = 10;` <br> `console.log(x++);` <br> `console.log(x);` <br> `let y = 10;` <br> `console.log(++y);` <br> `console.log(y);`                                                                                                      | `x++` is post-increment (returns value first, then increments). `++y` is pre-increment (increments first).               | `10` <br> `11` <br> `11` <br> `11` <br> `11`                                                   |

---



## Interleave the characters from both strings

```ts
var a = 'abc';
var b = '123';
// Output: "a1b2c3"
var result = '';

// Loop through the characters of both strings until the shortest string length
for (var i = 0; i < Math.min(a.length, b.length); i++) {
  result += a[i] + b[i];  // Add character from 'a' and 'b'
}

// Add the remaining characters from the longer string
if (a.length > b.length) {
  result += a.slice(b.length);  // Add remaining characters from 'a'
} else if (b.length > a.length) {
  result += b.slice(a.length);  // Add remaining characters from 'b'
}

console.log(result);  // Output: "a1b2c3c46"
```
