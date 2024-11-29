## 1st round

1. variable hoisting
2. difference between Call, Apply, and Bind Methods in JavaScript
```
array [1, 6, 2, 9, 4, 5, 7, 3]

We need to sort  the array first and find the index of value 3 using binary search tree algorithm
```

Explanation:
Sorting:

The array is sorted using JavaScript's .sort() method with a comparator (a, b) => a - b for numeric sorting.
Example: [7, 2, 5, 3, 8, 1, 6] becomes [1, 2, 3, 5, 6, 7, 8].
Binary Search:

Start with the entire array (left = 0, right = array.length - 1).
Calculate the middle index: mid = Math.floor((left + right) / 2).
Compare array[mid] with the target:
If array[mid] === target, return mid.
If array[mid] > target, search in the left half (right = mid - 1).
If array[mid] < target, search in the right half (left = mid + 1).
Repeat until the target is found or the search space is exhausted.
