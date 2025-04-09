| Questions1 | Questions2 | Questions3 |Questions4 | Questions5 | Questions6 | Questions7 |
| --- | :-- | :-- | :-- | :-- | :-- | :-- |
| [Find Maximum in an Array](#find-maximum-in-an-array) | [Find Second Largest Element](#find-second-largest-element) | [Remove Duplicates element from array](#remove-duplicates-element-from-array) | [Remove Duplicates element from Object](#remove-duplicates-element-from-Object) | [Chunk an Array](#chunk-an-array) | [Understanding `var` vs `let` in Loops and Closures](#understanding-var-vs-let-in-loops-and-closures) | [Flatten Nested Arrays](#flatten-nested-arrays)
| [Binary Search](#binary-search) | [Check for Palindrome](#check-for-palindrome) | [Reverse Words in a Sentence](#reverse-words-in-a-sentence) | [Reverse a String](#reverse-a-string)| [Count Vowels in a String](#count-vowels-in-a-string)  | [Character Frequency Count](#character-frequency-count) | [Deep Clone an Object](#deep-clone-an-object)
| [Count Frequency of Array Elements](#Count-Frequency-of-Array-Element) | [Anagram Checker](#anagram-checker) | [First Non-Repeating Character](#first-non-repeating-character) | [Group by Category or Class](#group-by-category-or-class) | [Group Array of Objects by Key](#group-array-of-objects-by-key)| [Sort Array of Objects by Field](#sort-array-of-objects-by-field) | [Factorial](#factorial) 
| [Fibonacci](#fibonacci) | [Debounce Function](#debounce-function)| [Throttle Function](#throttle-function)| [Recursive Sum of Array](#recursive-sum-of-array) | [Power Function](#power-function) | [Merge Sort + Deduplication](#merge-sort)| [Simulating Wallet Withdrawal Queue](#Simulating-Wallet-Withdrawal-Queue) 
| [Stock Span Problem](#Stock-Span-Problem) | [Boolean Function to Match Filename Pattern Without Regex](#Boolean-Function-to-Match-Filename-Pattern-Without-Regex) | [Binary Search](#Binary-Search) | [Retry Promise N Times](#retry-promise-n-times)| [Custom `map()` Method](#custom-map-method)




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
    if (char === " " || i === sentence.length) {
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
      ch === 'a' ||
      ch === 'e' ||
      ch === 'i' ||
      ch === 'o' ||
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
    freq[char] = (freq[char] || 0) + 1;
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
  if (n === 0 || n === 1) return 1;
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
    freq[item] = (freq[item] || 0) + 1;
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
    freq[char] = (freq[char] || 0) + 1;
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



## **Anagram Checker**

> Check if two strings are **anagrams**:  
> i.e., same characters, same frequency, order doesn't matter.  
> Example: `"listen"` and `"silent"` → ✅ Anagrams

---

**Using Predefined Functions**  
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

**Without Using Predefined Functions**  
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

    freq1[ch1] = (freq1[ch1] || 0) + 1;
    freq2[ch2] = (freq2[ch2] || 0) + 1;
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
    acc[curr.category] = acc[curr.category] || [];
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


**Understanding var vs let in Loops and Closures**
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
```ts
function findMax(arr: number[]): number {
  return Math.max(...arr);
}
```
> Uses ES6 spread with `Math.max`.

---

---

### Group Array of Objects by Key

**Input**
const people = [
  { name: "Alice", city: "New York" },
  { name: "Bob", city: "Paris" },
  { name: "Charlie", city: "New York" },
  { name: "David", city: "London" },
  { name: "Eve", city: "Paris" },
];

**Output**
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

```ts
type Grouped<T> = Record<string, T[]>;

function groupBy<T>(arr: T[], key: keyof T): Grouped<T> {
  return arr.reduce((acc: Grouped<T>, item) => {
    const groupKey = String(item[key]);
    (acc[groupKey] ||= []).push(item);
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

