
## **2nd Round Interview Answers**

### **1. Output Order of Asynchronous Code**
```js
for (var i = 0; i < 5; i++) {
  console.log(i);
  setTimeout(() => console.log(i), 0);
}
```
**Output:**  
```
0  
1  
2  
3  
4  
5  
5  
5  
5  
5  
```
**Explanation:**  
- `var i` is **global**; after the loop, `i = 5`.  
- `setTimeout` runs **after the loop finishes**, printing `5` repeatedly.  

### **2. Write a Common Function for Both Cases**
```js
function sum(a, b) {
  if (b !== undefined) return a + b;
  return (c) => a + c;
}

console.log(sum(2, 3)); // 5
console.log(sum(2)(3)); // 5
```

### **3. Remove Duplicates & Sort Using Merge Sort**
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
  return mergeSort([...new Set(arr)]);
}

const array = [4, 2, 5, 3, 4, 2, 1];
console.log(removeDuplicatesAndSort(array)); // [1, 2, 3, 4, 5]
```
---

### **JavaScript Functional Programming**

#### **7. Promises**
- A **Promise** represents a value that may not be available yet but will be resolved in the future.
- It can be in one of three states: **Pending**, **Resolved**, or **Rejected**.
  
```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 1000); // resolve after 1 second
});

promise.then(console.log).catch(console.error);
```

---

#### **8. Remove Duplicates & Sort Using Merge Sort**
- A custom implementation of the **Merge Sort** algorithm to remove duplicates and sort an array.

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

#### **9. Output Order of Asynchronous Code**
- Due to JavaScript’s **event loop**, asynchronous code execution can be tricky. 

```js
for (var i = 0; i < 5; i++) {
  console.log(i);
  setTimeout(() => console.log(i), 0); // Prints 5 repeatedly
}
```
**Explanation**: `setTimeout` is asynchronous, and `var i` is globally scoped. After the loop ends, `i` is `5`, and all the timeouts execute with the final value of `i`.

---


