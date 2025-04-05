**Remove Duplicates from Array of Objects by**
```js
const data = [  { id: 1, name: "A" },   { id: 1, name: "A" },  { id: 3, name: "C" }];
function removeDuplicates(arr:any) {
  const seen = new Set<number>();
    return arr.filter((item:any) => {
      if (seen.has(item.id)) return false;
        seen.add(item.id);    return true;
      });}
```
**Count Frequency of Elements in an Array**
```js
const nums = [1, 2, 2, 3, 1, 4, 2];
function countFrequency(arr: number[]): Record<number, number> {
  const freq: Record<number, number> = {};
    for (const num of arr) {    freq[num] = (freq[num] || 0) + 1;  }
    return freq;
  }
```
**Sort an Array of Objects by a Field**
```js
const users = [  { id: 1, age: 30 },  { id: 2, age: 25 },  { id: 3, age: 35 }];
users.sort((a, b) => a.age - b.age);
```
**Anagram Checker**
```js
function isAnagram(a: string, b: string): boolean {
  const normalize = (str: string) => str.split('').sort().join('');
    return normalize(a) === normalize(b);
  }
console.log(isAnagram("listen", "silent"));  // true
console.log(isAnagram("abc", "def"));        // false
```
**Grouping Items by Property**
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
**Find First Non-Repeating Character**
```js
function firstNonRepeatingChar(str: string): string | null {
  const count: Record<string, number> = {};
    for (const ch of str) {    count[ch] = (count[ch] || 0) + 1;  }  
    for (const ch of str) {    if (count[ch] === 1) return ch;  }  
    return null;
  }console.log(firstNonRepeatingChar("swiss")); // "w"
```
**Flatten a Nested Array**
```js
function flattenArray(arr: any[]): any[] {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
  }console.log(flattenArray([1, [2, [3, 4]], 5]));
```
**Output Order of Asynchronous Code Using var**
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
**Remove Duplicates & Sort Using Merge Sort**
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
  }
  return result;
}

const array = [4, 2, 5, 3, 4, 2, 1];
console.log(removeDuplicates(array)); // [4, 2, 5, 3, 1]
```
