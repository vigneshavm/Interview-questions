| Questions1 | Questions2 | Questions3 |Questions4 | Questions5 | Questions6 | Questions7 |
| --- | :-- | :-- | :-- | :-- | :-- | :-- |
| [Find Second Largest Element](#find-second-largest-element) | [Remove Duplicates element from array](#remove-duplicates) | [Chunk an Array](#chunk-an-array) | [Merge Sort + Deduplication](#merge-sort--deduplication) | [Flatten Nested Arrays](#flatten-nested-arrays) | [Binary Search](#binary-search) | [Check for Palindrome](#check-for-palindrome)
| [Reverse Words in a Sentence](#reverse-words-in-a-sentence) | [Count Vowels in a String](#count-vowels-in-a-string)  | [Character Frequency Count](#character-frequency-count) | [Count Frequency of Array Elements](#count-frequency-of-array-elements) | [Anagram Checker](#anagram-checker) | [First Non-Repeating Character](#first-non-repeating-character) | [Group by Category or Class](#group-by-category-or-class) | 
[Sort Array of Objects by Field](#sort-array-of-objects-by-field) | [Factorial](#factorial) | [Fibonacci](#fibonacci) | [Recursive Sum of Array](#recursive-sum-of-array) | [Power Function](#power-function) | [Understanding `var` vs `let` in Loops and Closures](#understanding-var-vs-let-in-loops-and-closures) | 


#### **Chunk an Array**

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


#### **Find Second Largest Element**

```js
function secondLargest(arr) {
  const unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique[1];
}
console.log(secondLargest([5, 1, 2, 5, 3])); // 3
```

---


#### **Remove Duplicates**


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

**From Object**

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


#### **Chunk an Array**

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


#### **Check for Palindrome**

```js
function isPalindrome(str) {
  const clean = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return clean === clean.split('').reverse().join('');
}
console.log(isPalindrome("Racecar")); // true
```

---

#### **Reverse Words in a Sentence**

```js
function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}
console.log(reverseWords("Hello world from JS")); // "JS from world Hello"
```

---

#### **Count Vowels in a String**

```js
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("Hello World")); // 3
```

---

#### **First Non-Repeating Character**

```js
function firstUniqueChar(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) return char;
  }
  return null;
}
console.log(firstUniqueChar("swiss")); // "w"
```

**Using TS**
```js
function firstNonRepeatingChar(str: string): string | null {
  const count: Record<string, number> = {};
    for (const ch of str) {    count[ch] = (count[ch] || 0) + 1;  }  
    for (const ch of str) {    if (count[ch] === 1) return ch;  }  
    return null;
  }console.log(firstNonRepeatingChar("swiss")); // "w"
```


#### **Factorial**

```js
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
```

---

#### **Fibonacci**

```js
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // 8
```

---

#### **Recursive Sum of Array**

```js
function recursiveSum(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + recursiveSum(arr.slice(1));
}
console.log(recursiveSum([1, 2, 3, 4])); // 10
```

---

#### **Power Function**

```js
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
console.log(power(2, 4)); // 16
```





#### **Count Frequency of Array Elements**
```js
const nums = [1, 2, 2, 3, 1, 4, 2];
function countFrequency(arr: number[]): Record<number, number> {
  const freq: Record<number, number> = {};
    for (const num of arr) {    freq[num] = (freq[num] || 0) + 1;  }
    return freq;
  }
```

#### **Character Frequency Count**

```js
const countChars = (str) => {
  const result = {};
  for (let char of str.replace(/\s/g, "")) {
    result[char] = (result[char] || 0) + 1;
  }
  return result;
};
```

#### **Sort Array of Objects by Field**
```js
const users = [  { id: 1, age: 30 },  { id: 2, age: 25 },  { id: 3, age: 35 }];
users.sort((a, b) => a.age - b.age);
```
#### **Anagram Checker**
```js
function isAnagram(a: string, b: string): boolean {
  const normalize = (str: string) => str.split('').sort().join('');
    return normalize(a) === normalize(b);
  }
console.log(isAnagram("listen", "silent"));  // true
console.log(isAnagram("abc", "def"));        // false
```
#### **Group by Category or Class**
```js
const products = [
  { id: 1, name: "Apple", category: "Fruits" },
  { id: 2, name: "Carrot", category: "Vegetables" },
  { id: 3, name: "Banana", category: "Fruits" },
];
function groupByCategory(products: { id: number; name: string; category: string }[]) {
  return products.reduce((acc, curr) => {
      acc[curr.category] = acc[curr.category] || [];
        acc[curr.category].push(curr);
        return acc;
      }, {} as Record<string, typeof products>);
  }
console.log(groupByCategory(products));
```





```js
const input = [
  { name: "one", class: 1 },
  { name: "two", class: 2 },
  { name: "three", class: 3 },
  { name: "four", class: 1 },
  { name: "five", class: 2 },
];
```

```js
function groupInputByClass(inputArray) {
  const grouped = inputArray.reduce((acc, curr) => {
    let group = acc.find(g => g.class === curr.class);
    if (group) {
      group.names.push(curr.name);
    } else {
      acc.push({ class: curr.class, names: [curr.name] });
    }

    return acc;
  }, []);

  return grouped;
}
```



#### **Flatten Nested Arrays**
```js
function flattenArray(arr: any[]): any[] {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
  }console.log(flattenArray([1, [2, [3, 4]], 5]));
```
#### **Understanding var vs let in Loops and Closures**
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
#### **Merge Sort + Deduplication**
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



#### **Binary Search**

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

#### **Boolean Function to Match Filename Pattern Without Regex**
```js
function matchPattern(filename, pattern) {
  let i = 0, j = 0, starIdx = -1, match = 0;
  while (i < filename.length) {
    if (j < pattern.length && (pattern[j] === "?" || pattern[j] === filename[i])) {
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

#### **Stock Span Problem (Optimized Solution)**
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

#### **Simulating Wallet Withdrawal Queue**
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
