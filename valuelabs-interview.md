### **1. Variable Hoisting in JavaScript**

**Hoisting** is a behavior in JavaScript where variable and function declarations are **moved to the top** of their scope during the compilation phase before code execution.

#### Key Points:
1. **Variable declarations are hoisted**, but their **initialization is not**.
2. Only the **declaration** (e.g., `var x`) is hoisted, not the value assigned to it.
3. Variables declared with `let` and `const` are also hoisted, but they remain in a **temporal dead zone (TDZ)** until the line of code where they're declared.

---

#### **Example of Hoisting with `var`**
```javascript
console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10
```

**Explanation**: 
- `var a` is hoisted to the top of its scope, but the initialization `a = 10` stays in place.
- `console.log(a)` before initialization shows `undefined`.

---

#### **Example of `let` and `const` Hoisting**
```javascript
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

**Explanation**:
- Variables declared with `let` and `const` are hoisted but are in the **TDZ** until they are defined.
- Accessing them before their declaration results in a **ReferenceError**.

---

#### **Function Hoisting**
Functions declared with the `function` keyword are fully hoisted, including their **body**.

```javascript
foo(); // Output: "Hello"
function foo() {
  console.log("Hello");
}
```

- Function `foo()` is hoisted entirely, so it can be called before its declaration.

---



### **2. Difference Between `Call`, `Apply`, and `Bind` Methods**

The `call`, `apply`, and `bind` methods are used to **manipulate the `this` context** of a function and optionally pass arguments.

---

#### **1. `call()`**

- Invokes the function immediately.
- Arguments are passed **individually**.

**Syntax**:
```javascript
function greet(name, age) {
  console.log(`Hello ${name}, you are ${age} years old`);
  console.log(this);
}

const person = { profession: "Developer" };
greet.call(person, "John", 30);
```

**Output**:
```
Hello John, you are 30 years old
{ profession: "Developer" }
```

---

#### **2. `apply()`**

- Invokes the function immediately.
- Arguments are passed as an **array**.

**Syntax**:
```javascript
greet.apply(person, ["Jane", 25]);
```

**Output**:
```
Hello Jane, you are 25 years old
{ profession: "Developer" }
```

---

#### **3. `bind()`**

- **Does not invoke** the function immediately.
- Returns a **new function** with the `this` value set.

**Syntax**:
```javascript
const boundGreet = greet.bind(person, "Smith", 40);
boundGreet(); // Call the new function
```

**Output**:
```
Hello Smith, you are 40 years old
{ profession: "Developer" }
```

---

### **Example Comparing All Three**

```javascript
const obj = { value: 100 };

function example(num1, num2) {
  console.log(this.value + num1 + num2);
}

// call
example.call(obj, 10, 20); // Output: 130

// apply
example.apply(obj, [10, 20]); // Output: 130

// bind
const boundExample = example.bind(obj, 10, 20);
boundExample(); // Output: 130
```

---

### **When to Use?**
1. Use **`call`** when arguments are passed individually.
2. Use **`apply`** when arguments are in an array (useful for dynamic arguments like `Math.max`).
3. Use **`bind`** when you need to create a **new function** with `this` pre-bound for future use.

Let me know if you need further examples or clarification! 🚀


Below is the **step-by-step explanation** of sorting the array and finding the index of a value (`3` in this case) using the **binary search algorithm**:

---

### **Step 1: Sorting the Array**

The given array:
```javascript
let array = [1, 6, 2, 9, 4, 5, 7, 3];
```

To sort the array in **ascending order** (numerically), we use the `sort()` method with a comparator function:

```javascript
array.sort((a, b) => a - b);
```

**Sorted Array**:
```
[1, 2, 3, 4, 5, 6, 7, 9]
```

---

### **Step 2: Binary Search to Find Index of `3`**

Binary search is an efficient algorithm for finding an element in a sorted array. It works by repeatedly dividing the search space into halves until the target value is found.

#### **Steps to Implement Binary Search**:
1. Start with `left` as the first index (0) and `right` as the last index (`array.length - 1`).
2. Find the **middle index**:
   \[
   \text{mid} = \text{Math.floor}((\text{left} + \text{right}) / 2)
   \]
3. Compare `array[mid]` with the target:
   - If `array[mid] === target`, return `mid` (index found).
   - If `array[mid] > target`, search the **left half** of the array (set `right = mid - 1`).
   - If `array[mid] < target`, search the **right half** of the array (set `left = mid + 1`).
4. Repeat until `left > right`.

---

#### **Binary Search Code Implementation**:

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target value found
    } else if (arr[mid] > target) {
      right = mid - 1; // Search left half
    } else {
      left = mid + 1; // Search right half
    }
  }

  return -1; // Target value not found
}

// Example usage
let array = [1, 6, 2, 9, 4, 5, 7, 3];
array.sort((a, b) => a - b); // Sorting the array

let target = 3;
let index = binarySearch(array, target);

console.log("Sorted Array:", array);
console.log(`Index of ${target}:`, index);
```

---

### **Output**:

When the code is run:

```
Sorted Array: [1, 2, 3, 4, 5, 6, 7, 9]
Index of 3: 2
```

---

### **Explanation**:

1. **Sorting**:
   - The array is sorted numerically using the comparator function `(a, b) => a - b`.

2. **Binary Search**:
   - Start with `left = 0` and `right = 7` (last index of the array).
   - Calculate `mid`:
     - `mid = Math.floor((0 + 7) / 2) = 3`.
     - At index `3`, the value is `4`.
   - Since `4 > 3`, search the **left half** (`right = mid - 1 = 2`).
   - Recalculate `mid`:
     - `mid = Math.floor((0 + 2) / 2) = 1`.
     - At index `1`, the value is `2`.
   - Since `2 < 3`, search the **right half** (`left = mid + 1 = 2`).
   - Now `left = 2` and `right = 2`, so `mid = 2`.
   - At index `2`, the value is `3` (target found).

---

### **Complexity Analysis**:
1. **Sorting**: \( O(n \log n) \)
2. **Binary Search**: \( O(\log n) \)

**Total Complexity**: \( O(n \log n) \) (due to sorting).

This approach efficiently sorts the array and finds the index of the target value using binary search. 🚀