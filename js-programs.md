
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


