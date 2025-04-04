Great! Let's break this down step by step:

---

### 🔁 1. **Variable Hoisting in JavaScript**
**Hoisting** is JavaScript's default behavior of moving declarations to the top of their scope (before code execution).

```js
console.log(x); // undefined
var x = 5;
```

JavaScript *hoists* the `var x` declaration like this:

```js
var x;
console.log(x); // undefined
x = 5;
```

💡 **Important Notes:**
- `var` declarations are hoisted and initialized with `undefined`.
- `let` and `const` are hoisted too, but they are not initialized, and accessing them before declaration throws a **ReferenceError**.

---

### 📞 2. **Difference between `call()`, `apply()`, and `bind()`**

All three methods allow you to set the `this` context for a function.

```js
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Alice" };
```

| Method  | Syntax | Behavior |
|---------|--------|----------|
| `call`  | `greet.call(person, "Hello", "!")` | Calls the function immediately with `this = person` |
| `apply` | `greet.apply(person, ["Hello", "!"])` | Same as `call`, but takes arguments as an array |
| `bind`  | `const greetAlice = greet.bind(person, "Hello", "!")`<br>`greetAlice()` | Returns a new function with bound `this` (can call later) |

---

### 🌲 3. Binary Search for Value 3

Let's first **sort** the array:
```js
let arr = [1, 6, 2, 9, 4, 5, 7, 3];
arr.sort((a, b) => a - b); // Ascending sort
// arr = [1, 2, 3, 4, 5, 6, 7, 9]
```

Now let's implement **binary search** to find index of value `3`:

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
```

✅ Output:
```
Sorted Array: [1, 2, 3, 4, 5, 6, 7, 9]
Index of 3: 2
```

---

Want me to explain the binary search tree variant too (inserting into a BST and then searching)?
