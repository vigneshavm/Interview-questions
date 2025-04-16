| Category                          | Topics                                                                                                                                                                                                                                                                                                                                                                                                             |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Array Operations | • [Find Maximum in an Array](#find-maximum-in-an-array) • [Find Second Largest Element](#find-second-largest-element)  • [Remove Duplicates element from array](#remove-duplicates-element-from-array) • [Remove Duplicates from Sorted Array](#remove-duplicates-from-sorted-array)• [Chunk an Array](#chunk-an-array) • [Flatten Nested Arrays](#flatten-nested-arrays) • [Reverse Words in a Sentence](#reverse-words-in-a-sentence) • [Recursive Sum of Array](#recursive-sum-of-array) • [Merge Sort + Deduplication](#merge-sort) • [Sort Array of Objects by Field](#sort-array-of-objects-by-field) • [sort an array of objects by a nested value](#sort-an-array-of-objects-by-a-nested-value) 
| Arrays & Strings | • [Two Sum](#two-sum)  • [Best Time to Buy and Sell Stock](#best-time-to-buy-and-sell-stock)  • [Move Zeros](#move-zeros)     • [Maximum Subarray](#maximum-subarray)            • [Merge Sorted Arrays](#merge-sorted-arrays)      • [Rotate Array](#rotate-array)         • [Contains Duplicate](#contains-duplicate)    • [Missing Number](#missing-number)      • [Reverse a String / Array](#reverse-a-string--array) • [Palindrome Check](#check-if-a-string-is-a-palindrome)
| Arrays & Strings Adv |  • [Trapping Rain Water](#trapping-rain-water)  • [Maximum Product Subarray](#maximum-product-subarray)  • [Longest Consecutive Sequence](#longest-consecutive-sequence)  • [Set Matrix Zeroes](#set-matrix-zeroes)  • [Spiral Matrix](#spiral-matrix)  • [Subarray Sum Equals K](#subarray-sum-equals-k)
| Hashmaps & Sets |• [Group Anagrams](#group-anagrams)  • [Anagram Checker](#anagram-checker) • [Top K Frequent Elements](#top-k-frequent-elements)  • [Intersection of Two Arrays](#intersection-of-two-arrays)  • [Longest Substring Without Repeating Characters](#longest-substring-without-repeating-characters)  • [Isomorphic Strings](#isomorphic-strings)  • [Count Number of Unique Elements in an Array](#count-number-of-unique-elements-in-an-array)  • [First Non-Repeating Character](#first-non-repeating-character)  
| String Problems | • [Check for Palindrome](#check-for-palindrome) • [Reverse a String](#reverse-a-string) • [Count Vowels in a String](#count-vowels-in-a-string) • [Character Frequency Count](#character-frequency-count) • [First Non-Repeating Character](#first-non-repeating-character) • [Finding the Most Frequent Character in a String](#Finding-the-Most-Frequent-Character-in-a-String) • [Permutation in String](#Permutation-in-String) 
| Object Manipulation | • [Remove Duplicates element from Object](#remove-duplicates-element-from-Object) • [Group by Category or Class](#group-by-category-or-class) • [Group Array of Objects by Key](#group-array-of-objects-by-key) • [Deep Clone an Object](#deep-clone-an-object) • [Count Frequency of Array Elements](#Count-Frequency-of-Array-Element) 
| Recursion & Math | • [Factorial](#factorial) • [Fibonacci](#fibonacci) • [Power Function](#power-function) 
| Algorithms & Patterns | • [Binary Search](#binary-search) • [Stock Span Problem](#Stock-Span-Problem) • [Boolean Function to Match Filename Pattern Without Regex](#Boolean-Function-to-Match-Filename-Pattern-Without-Regex) • [Simulating Wallet Withdrawal Queue](#Simulating-Wallet-Withdrawal-Queue) 
| Functional JavaScript & Concepts | • [Debounce Function](#debounce-function) • [Throttle Function](#throttle-function) • [Custom `map()` Method](#custom-map-method) • [Understanding `var` vs `let` in Loops and Closures](#understanding-var-vs-let-in-loops-and-closures) 
| Promise | • [Retry Promise N Times](#retry-promise-n-times) • [Maximum Sum Subarray of Size K](#Maximum-Sum-Subarray-of-Size-K) • [Longest Substring with K Distinct Characters](#Longest-Substring-with-K-Distinct-Characters)  • [Longest Substring Without Repeating Characters](#Longest-Substring-Without-Repeating-Characters) • [Minimum Window Substring](#Minimum-Window-Substring) • [Max Number of Vowels in Substring](#Max-Number-of-Vowels-in-Substring)
| Searching Problems | • [Binary Search (Recursive/Iterative)](#Binary-Search) • [Search in Rotated Sorted Array](#search-in-rotated-sorted-array) • [Find Peak Element](#find-peak-element) • [Kth Largest Element in Array](#kth-largest-element-in-an-array) • [First and Last Position of Element](#first-and-last-position-of-element) • [Median of Two Sorted Arrays](#median-of-two-sorted-arrays)
| Sorting & Searching | • [Merge Sort](#Merge-Sort) • [Quick Sort](#Quick-Sort) • [Bubble Sort](#Bubble-Sort) • [Insertion Sort](#Insertion-Sort) • [Selection Sort](#Selection-Sort)
| Graph Problems | • [BFS Traversal](#bfs) • [DFS Traversal](#dfs) • [Number of Islands (Matrix BFS/DFS)](#number-of-islands) • [Detect Cycle in Graph (#Detect-Cycle-in-Graph)](#detect-cycle-in-graph) • [Topological Sort (Kahn’s Algorithm)](#topological-sort) • [Clone Graph](#clone-graph) • [Shortest Path in Binary Matrix](#shortest-path-in-binary-matrix) • [Word Ladder](#word-ladder) • [Dijkstra’s Algorithm](#dijkstras-algorithm) 
| Binary Tree | • [Inorder / Preorder / Postorder Traversal](#inorder-preorder-postorder-traversal) • [Level Order Traversal](#level-order-traversal) • [Maximum Depth of Binary Tree](#maximum-depth-of-binary-tree) • [Symmetric Tree](#symmetric-tree) • [Diameter of Binary Tree](#diameter-of-binary-tree) • [Lowest Common Ancestor (BST & Binary Tree)](#lowest-common-ancestor) • [Serialize and Deserialize Binary Tree](#serialize-and-deserialize-binary-tree) • [Path Sum](#path-sum) • [Convert Sorted Array to BST](#convert-sorted-array-to-bst)

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

### 🧠 TypeScript Utilities (Bonus)

| Utility            | Description                             | Example                         | Returns       | Utility            | Description                             | Example                         | Returns       |
|--------------------|-----------------------------------------|----------------------------------|---------------|--------------------|-----------------------------------------|----------------------------------|---------------|
| `as`               | Type assertion                          | `value as string`               | `T` (type-casted) | `typeof`           | Gets variable type                      | `typeof x === "string"`         | `"string"` etc. |
| `keyof`            | Gets union of keys from type            | `keyof typeof obj`              | `'a' | 'b' | ...` | `Record<K, T>`     | Object type with keys `K` and values `T`| `Record<string, number>`        | `{ [k: string]: number }` |
| `Partial<T>`       | All properties optional                 | `Partial<User>`                 | `{ name?: string, ... }` | `Pick<T, K>`       | Picks specific keys                     | `Pick<User, "name">`            | `{ name: string }` |
| `Omit<T, K>`       | Omits specific keys                     | `Omit<User, "password">`        | All except `password` |

---





---

## **Check for Palindrome**  
> A palindrome is a string that reads the same forwards and backwards.  
Example: `"madam"`, `"racecar"` are palindromes.

---

**Using Predefined Functions (`split()`, `reverse()`, `join()`)**

**Pseudocode / Algorithm**
```
1. Convert string to lowercase (optional, to ignore case)
2. Reverse the string using split → reverse → join
3. Compare original string with reversed string
4. If equal, return true; else, false
```

**Code Example**
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

**Pseudocode / Algorithm**
```
1. Convert string to lowercase
2. Initialize two pointers:
   - left = 0
   - right = length - 1
3. While left < right:
   a. If characters at left and right are different, return false
   b. Move left forward, right backward
4. If loop completes, return true
```

**Code Example**
```js
function isPalindromeManual(str) {
  let lowerStr = '';
  // Manual lowercase conversion (optional)
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      lowerStr += String.fromCharCode(code + 32); // A-Z to a-z
    } else {
      lowerStr += str[i];
    }
  }

  let left = 0;
  let right = lowerStr.length - 1;

  while (left < right) {
    if (lowerStr[left] !== lowerStr[right]) {
      return false;
    }
    left++;
    right--;
  }

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



## **Remove Duplicates element from Object**
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

**Pseudocode / Algorithm**
```
1. Create empty result array
2. Loop through each object in original array
3. For each object:
   a. Check if result array already contains object with same id (using some)
   b. If not, push it to result array
4. Return result array
```

**Code Example**
```js
function removeDuplicateObjects(arr) {
  const result = [];
  arr.forEach(obj => {
    if (!result.some(item => item.id === obj.id)) {
      result.push(obj);
    }
  });
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

**Pseudocode / Algorithm**
```
1. Create empty array called result
2. Loop i from 0 to arr.length
   a. Set found = false
   b. Loop j from 0 to result.length
      i. If arr[i].id == result[j].id
         - found = true, break
   c. If found == false
      - Push arr[i] into result
3. Return result
```

**Code Example**
```js
function removeDuplicateObjectsManual(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i].id === result[j].id) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.push(arr[i]);
    }
  }
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



## **Remove Duplicates element from array**

---

**Using Predefined Functions (e.g., `includes`)**
**Pseudocode / Algorithm**
```
1. Initialize empty result array
2. Loop through each element in the input array
3. If element is not in result array (using includes)
    - Add it to result array
4. Return result array
```

**Code Example**
```js
function removeDuplicates(arr) {
  let result = [];
  arr.forEach(item => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
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
**Pseudocode / Algorithm**
```
1. Initialize an empty array called result
2. Loop i from 0 to array.length
   a. Initialize found as false
   b. Loop j from 0 to result.length
      i. If arr[i] == result[j], set found = true and break
   c. If found == false, push arr[i] to result
3. Return result
```

**Code Example**
```js
function removeDuplicatesManual(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicatesManual([1, 2, 2, 3, 1, 4]));
```

 **Output:**
```
[1, 2, 3, 4]
```


### **Remove Duplicates from Sorted Array**
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

 **Example**: let nums = [0,0,1,1,1,2,2,3,3,4];
let len = removeDuplicates(nums); // returns 5
console.log(nums);               // [0,1,2,3,4,2,2,3,3,4] ← in-place modified, extra values remain
console.log(nums.slice(0, len)); // [0,1,2,3,4] ← clean version with only unique values



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

**Pseudocode / Algorithm**
```
1. Create empty result array
2. Loop i from 0 to array.length in steps of chunk size
   a. Use slice(i, i + size) to get a subarray
   b. Push that subarray into result
3. Return result
```

**Code Example**
```js
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size)); // using slice
  }
  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
```

 **Output:**
```js
[[1, 2, 3], [4, 5, 6], [7]]
```

---

**Without Using Predefined Functions**

**Pseudocode / Algorithm**
```
1. Create empty result array
2. Create temporary empty chunk array
3. Loop through each element in input array
   a. Add current element to chunk
   b. If chunk length equals size:
       - Push chunk to result
       - Reset chunk to empty array
4. After loop, if chunk is not empty, push it to result
5. Return result
```

**Code Example**
```js
function chunkArrayManual(arr, size) {
  let result = [];
  let chunk = [];
  let chunkCount = 0;

  for (let i = 0; i < arr.length; i++) {
    chunk[chunkCount] = arr[i];
    chunkCount++;

    if (chunkCount === size) {
      result[result.length] = chunk;
      chunk = [];
      chunkCount = 0;
    }
  }

  if (chunkCount > 0) {
    result[result.length] = chunk;
  }

  return result;
}

console.log(chunkArrayManual([1, 2, 3, 4, 5, 6, 7], 3));
```

 **Output:**
```js
[[1, 2, 3], [4, 5, 6], [7]]
```

---




## **Find Second Largest Element**





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

**Pseudocode / Algorithm**
```
1. Sort the array in descending order
2. Filter out duplicates
3. Return the second element (index 1) from the result
```

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

**Pseudocode / Algorithm**
```
1. Initialize first = -Infinity, second = -Infinity
2. Loop through each element:
   a. If element > first:
       - second = first
       - first = element
   b. Else if element > second AND element != first:
       - second = element
3. Return second
```

**Code Example**
```js
function secondLargestManual(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }

  return second;
}

console.log(secondLargestManual([10, 5, 20, 20, 8, 25]));
```

 **Output:**
```
20
```

---





**Remove Duplicates element from Object**

```js

Input:   [  
  { id: 1, name: "A" },  
  { id: 1, name: "A" },  
  { id: 3, name: "C" }
];

function removeDuplicates(arr) {
  const seen = new Set();
  return arr.filter(item => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

console.log(removeDuplicates(data));

Output:  [ { id: 1, name: 'A' }, { id: 3, name: 'C' } ]

```



**Remove Duplicates element from array**


**From Array without Set**

```js
const removeDuplicates = arr => arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
console.log(removeDuplicates([1, 2, 3, 4, 1, 5, 5, 6])); // [2, 3, 4, 6]
```

**From Array using Set**

```js
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
```




**Remove Duplicates Without Predefined Functions**
```js
function removeDuplicates(arr) {
  const result = [];
  let resultIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    // Check if arr[i] already exists in result[]
    for (let j = 0; j < resultIndex; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }

    // If not found in result[], add it
    if (!isDuplicate) {
      result[resultIndex] = arr[i];
      resultIndex++;
    }
  }

  return result;
}

const array = [4, 2, 5, 3, 4, 2, 1];
const noDupes = removeDuplicates(array);

for (let i = 0; i < noDupes.length; i++) {
  console.log(noDupes[i]); // Output: 4 2 5 3 1
}
```

**Remove Duplicates from an array without using Set**
```js
function removeDuplicates(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {      result.push(arr[i]);    }
```




**Chunk an Array**

```js
function chunkArray(arr, size) {
  let res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}
console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]
```

---


**Check for Palindrome**

```js
function isPalindrome(str) {
  const clean = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return clean === clean.split('').reverse().join('');
}
console.log(isPalindrome("Racecar")); // true
```


---

## **Reverse Words in a Sentence**

> Example input: `"Hello world this is JavaScript"`  
> Expected output: `"JavaScript is this world Hello"`

---

**Using Predefined Functions (`split()`, `reverse()`, `join()`)**

**Pseudocode / Algorithm**
```
1. Split the sentence into an array of words using space
2. Reverse the array
3. Join the words back into a sentence using space
4. Return the result
```

**Code Example**
```js
function reverseWords(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

console.log(reverseWords("Hello world this is JavaScript"));
```

 **Output:**
```
JavaScript is this world Hello
```

---

**Without Using Predefined Functions**

**Pseudocode / Algorithm**
```
1. Create an empty array to hold words
2. Traverse the sentence character by character
   a. Build a word character by character
   b. On space or end of string, push word to array and reset it
3. After collecting all words, reverse the word array manually:
   a. Swap elements from start and end using loop
4. Concatenate the reversed words with spaces
5. Return final string
```

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

## **Count Vowels in a String**

> Vowels = `'a', 'e', 'i', 'o', 'u'` (case-insensitive)  
> Example: `"Hello World"` → **3 vowels** (`e`, `o`, `o`)

---

**Using Predefined Functions (`includes()`, `toLowerCase()`, `split()`)**

**Pseudocode / Algorithm**
```
1. Convert the string to lowercase
2. Initialize vowel count = 0
3. Loop through each character using split()
   a. If the character is in ['a', 'e', 'i', 'o', 'u'], increase count
4. Return vowel count
```

**Code Example**
```js
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str
    .toLowerCase()
    .split('')
    .filter(char => vowels.includes(char)).length;
}

console.log(countVowels("Hello World"));
```

 **Output:**
```
3
```

---

**Without Using Predefined Functions**

**Pseudocode / Algorithm**
```
1. Create a counter = 0
2. Loop through the string character by character
3. Convert each character to lowercase manually
4. Compare character with vowels using if or switch
5. If match found, increment count
6. Return count
```

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



---

## **First Non-Repeating Character**

> Given a string, find the **first character** that doesn't repeat.  
> Example: `"swiss"` → `'w'` (since `'s'` appears 3 times and `'w'` appears only once and first)

---

**Using Predefined Functions**  
(using `.split()`, `.forEach()`, `.charAt()`, `.toLowerCase()`)

**Pseudocode / Algorithm**
```
1. Convert string to lowercase
2. Create empty object for frequency counts
3. Split string into characters and count each one
4. Loop through string again:
   a. Return the first char whose count is 1
```

**Code Example**
```js
function firstNonRepeatingChar(str) {
  const freq = {};
  const lower = str.toLowerCase();

  // Count frequency
  lower.split('').forEach(char => {
    freq[char] = (freq[char] | 0) + 1;
  });

  // Find first non-repeating character
  for (let i = 0; i < lower.length; i++) {
    if (freq[lower[i]] === 1) {
      return str[i]; // return original-case char
    }
  }

  return null; // If none found
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

**Pseudocode / Algorithm**
```
1. Create an empty frequency object
2. Loop through string:
   a. Convert each character to lowercase manually
   b. Count frequency
3. Loop again through string:
   a. Convert to lowercase again
   b. If frequency is 1, return original character
4. If no non-repeating character, return null
```

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

**Pseudocode / Algorithm**
```
1. Create an empty object to hold counts
2. Loop through the array using forEach
3. For each element:
   a. If it exists in object, increment
   b. Else, set to 1
4. Return the object
```

**Code Example**
```js
function countArrayFreq(arr) {
  const freq = {};
  arr.forEach(item => {
    freq[item] = (freq[item] | 0) + 1;
  });
  return freq;
}

console.log(countArrayFreq([1, 2, 2, 3, 1, 4, 2]));
```

 **Output:**
```js
{ 1: 2, 2: 3, 3: 1, 4: 1 }
```

---

**Without Using Predefined Functions**

**Pseudocode / Algorithm**
```
1. Create an empty object for frequency
2. Use a for loop to go through each element of the array
3. For each element:
   a. If it exists in the object, increase count
   b. Else, set to 1
4. Return the object
```

**Code Example**
```js
function countArrayFreqManual(arr) {
  const freq = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (freq[item]) {
      freq[item] = freq[item] + 1;
    } else {
      freq[item] = 1;
    }
  }

  return freq;
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

**Pseudocode / Algorithm**
```
1. Convert string to lowercase
2. Create an empty object for counts
3. Split string into characters
4. Loop through characters using forEach
   a. If char exists in object, increment it
   b. Else, set it to 1
5. Return the object
```

**Code Example**
```js
function charFrequency(str) {
  const freq = {};
  str.toLowerCase().split('').forEach(char => {
    freq[char] = (freq[char] | 0) + 1;
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

**Pseudocode / Algorithm**
```
1. Create an empty object for character counts
2. Loop through each character of the string
3. Convert to lowercase manually
4. If character exists in object, increment it
   Else, set to 1
5. Return the object
```

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

---



---

## **Sort Array of Objects by Field**  
We’ll use the field `age` for clarity, but this approach works for any field like `name`, `price`, etc.

Sample input:
```js
const people = [
  { name: "Alice", age: 32 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 }
];
```

---

** 1. **Using Predefined Functions**

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

** 2. **Without Using Predefined Sort** (Manual sorting)

We’ll manually implement a sorting algorithm. Let’s use **Bubble Sort** for simplicity.

---

** Pseudocode:
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




---

## **Group by Category or Class**

  -  This involves grouping elements of an array based on a shared property (`category`, `class`, etc.)
  -  
---



**Group Products by Category**

**Input:**
```js
const products = [
  { id: 1, name: "Apple", category: "Fruits" },
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


**Group Names by Class**


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











---

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
## **Merge Sort**
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



## Reverse a String
```ts
function reverseString(str: string): string {
  return str.split('').reverse().join('');
}
```
> Splits the string into characters, reverses them, and joins them back.

---


### Find Maximum in an Array



**No Built-ins**

- Initialize `max` with the first element of the array.
- Loop through the rest of the elements.
- If a number is greater than the current `max`, update `max`.
- Return `max` at the end.

**Example**
```ts
const numbers = [45, 3, 67, 89, 12, 99, 34];
Output : 99
```


```ts
function findMaxManual(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }

  let max: number = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
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

### Group Array of Objects by Key

**Input**
```
const people = [
  { name: "Alice", city: "New York" },
  { name: "Bob", city: "Paris" },
  { name: "Charlie", city: "New York" },
  { name: "David", city: "London" },
  { name: "Eve", city: "Paris" },
];
```

**Output**
```
{
  "New York": [
    { name: "Alice", city: "New York" },
    { name: "Charlie", city: "New York" }
  ],
  "Paris": [
    { name: "Bob", city: "Paris" },
    { name: "Eve", city: "Paris" }
  ],
  "London": [
    { name: "David", city: "London" }
  ]
}
```

```ts
type Grouped<T> = Record<string, T[]>;

function groupBy<T>(arr: T[], key: keyof T): Grouped<T> {
  return arr.reduce((acc: Grouped<T>, item) => {
    const groupKey = String(item[key]);
    (acc[groupKey] |= []).push(item);
    return acc;
  }, {});
}
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
async function retry<T>(fn: () => Promise<T>, retries: number): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) throw error;
    return retry(fn, retries - 1);
  }
}
```

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




---

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


## sort an array of objects by a nested value

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



---

## Longest Substring with K Distinct Characters

**Given** a string `s` and an integer `k`, **return the length of the longest substring** that contains **at most `k` distinct characters**.

---

###  Example:

```text
Input: s = "eceba", k = 2  
Output: 3  
Explanation: The longest substring with at most 2 distinct characters is `"ece"`.
```

---

## 💡 Approach: Sliding Window + HashMap (or JS object)

- Use two pointers (`start`, `end`) to define the window.
- Use a HashMap (or JS object) to count the frequency of characters.
- If the number of unique characters > `k`, **shrink** the window from the left.
- Track the **max window size** throughout.

---

##  JavaScript Code:

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

## 📄 Pseudocode:

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

## 🧠 Time Complexity:
- **O(n)** — Each character is visited at most twice.
- **O(k)** — Space for storing up to `k` distinct characters.

---

---

## Longest Substring Without Repeating Characters

> Given a string `s`, find the **length** of the **longest substring without repeating characters**.

---

###  Example:

```txt
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with length 3.
```

---

## 📄 Pseudocode

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
##  JavaScript Code:

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
## 🔍 Dry Run (Input: "abcabcbb")

```
Window: a → ab → abc (max = 3)
Next: a → 'a' is duplicate, move start → bc → bca → bcab (skip)
Keep updating max as you go
```

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

## Max Number of Vowels in Substring

> Given a string `s` and an integer `k`, return the maximum number of vowels in any substring of length `k`.

---

###  Key Idea – Sliding Window:

Instead of checking **every substring of length `k`**, we can use a sliding window of size `k` to **keep track of how many vowels are in the current window**, and just **update the count** as the window slides.

---

###  Optimized Approach:

1. Use a **sliding window** of size `k`.
2. Maintain a `vowelCount` as you move the window.
3. For every character entering the window, check if it's a vowel — if yes, increment the count.
4. For every character exiting the window, check if it's a vowel — if yes, decrement the count.
5. Keep track of the `maxVowels` seen so far.

---

###  JavaScript Code (Clean & Easy to Understand):

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

### 🔍 Example:

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

### ⏱️ Time and Space Complexity:

- **Time:** O(n) – each character is processed once as the window slides.
- **Space:** O(1) – only fixed space is used (for the set of vowels).

---




###  **Binary Search**

#### 🔁 **Iterative Approach**

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

#### 🔁 **Recursive Approach**

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

###  **Merge Sort**  
- Best for large datasets.  
- Uses extra space but gives guaranteed `O(n log n)` performance.

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = arr.length >> 1;
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const merged = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    merged.push(left[i] <= right[j] ? left[i++] : right[j++]);
  }

  return merged.concat(left.slice(i), right.slice(j));
}

// Example
console.log(mergeSort([6, 3, 7, 1, 9])); // [1, 3, 6, 7, 9]
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

### 🧠 Summary: Which to Use?

| Sort           | Best Use Case                        | Time (Avg) | Space |
|----------------|--------------------------------------|------------|--------|
| Merge Sort     | Large datasets, guaranteed speed     | O(n log n) | O(n)   |
| Quick Sort     | General-purpose, fast in practice    | O(n log n) | O(log n) |
| Insertion Sort | Small/nearly sorted arrays           | O(n²)      | O(1)   |
| Bubble Sort    | Educational/sorted check             | O(n²)      | O(1)   |
| Selection Sort | Minimum swaps required               | O(n²)      | O(1)   |


### 🧠 Summary: Which Sort to Use? (with **Real-Time Scenarios**)

| Sort           | Best Use Case                                 | Time (Avg) | Space | Real-Time Scenario |
|----------------|-----------------------------------------------|------------|--------|--------------------|
| **Merge Sort**     | Large datasets, guaranteed speed              | O(n log n) | O(n)   | Used in **databases**, **file sorting**, and **external sorting** where stability and consistency are key. Eg: Sorting logs on disk. |
| **Quick Sort**     | General-purpose, fast in practice             | O(n log n) | O(log n) | Ideal for **in-memory sorting** with good pivot strategy. Used in frameworks like **V8 (Chrome engine)** for `.sort()`. |
| **Insertion Sort** | Small/nearly sorted arrays                   | O(n²)      | O(1)   | Used in **online ticket booking systems** or **real-time dashboards** where elements come in real-time and list is nearly sorted. |
| **Bubble Sort**    | Educational/sorted check                     | O(n²)      | O(1)   | Great for teaching and debugging. Sometimes used for **simple embedded systems** or where code simplicity > performance. |
| **Selection Sort** | Minimum swaps required                       | O(n²)      | O(1)   | Used in **microcontrollers** or **memory-constrained** devices where swap operations are costly but comparisons are cheap. |

---

### 🧩 Visual Analogy:
- **Merge Sort**: Like merging two sorted lines of people into one.
- **Quick Sort**: Like picking a leader (pivot), then organizing people shorter and taller around them.
- **Insertion Sort**: Like sorting cards in your hand while playing.
- **Bubble Sort**: Like repeatedly bubbling up the heaviest item to the end.
- **Selection Sort**: Like selecting the lightest item and placing it at the front each round.

---

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

### **Contains Duplicate**
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

### **Reverse a String / Array**
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

### **Check if a String is a Palindrome**
**Approach**: Clean string + two-pointer check.

```javascript
function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left++] !== s[right--]) return false;
    }
    return true;
}
```

 **Example**: `isPalindrome("A man, a plan, a canal: Panama")` → `true`

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

### **Longest Substring Without Repeating Characters**
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
```javascript
function countUnique(nums) {
    return new Set(nums).size;
}
```
**Input**: `[1, 2, 2, 3, 4, 4]`  
**Output**: `4`

---

### **First Non-Repeating Character**
```javascript
function firstUniqChar(s) {
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) return i;
    }

    return -1;
}
```
**Input**: `"leetcode"`  
**Output**: `0`

---





## **Anagram Checker**

> Check if two strings are **anagrams**:  
> i.e., same characters, same frequency, order doesn't matter.  
> Example: `"listen"` and `"silent"` →  Anagrams

---

### **Anagram Using Predefined Functions**
(using `.split()`, `.sort()`, `.join()`, `.toLowerCase()`)

**Pseudocode / Algorithm**
```
1. Convert both strings to lowercase
2. Split each string into array of characters
3. Sort both arrays
4. Join the sorted arrays back into strings
5. Compare the two resulting strings
```

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

**Pseudocode / Algorithm**
```
1. If lengths of the strings are different → not anagrams
2. Convert both to lowercase manually
3. Create frequency counters (objects) for each string
4. Loop through each string and count characters
5. Compare both frequency maps:
   - If all keys and values match → anagram
   - Else → not anagram
```

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


## **Group Anagrams**
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


