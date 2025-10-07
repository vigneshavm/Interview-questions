| **Category**   | **Topics** |
|----------------|------------|
| **Node.js**    | [Middleware for Only Sensitive Routes](#Middleware-for-Only-Sensitive-Routes) , [Location based IP-based restrictions](#Location-based-IP-based-restrictions) , [Build simple API](#Build-simple-API) , [Nodejs API using TypeScript for CRUD operations](#Nodejs-API-using-TypeScript-for-CRUD-operations) , [JWT Auth Flow Overview](#JWT-Auth-Flow-Overview) , [Rate Limiter Middleware](#Rate-Limiter-Middleware) , [Whitelist IPs in Rate Limiter](#Whitelist-IPs-in-Rate-Limiter) , [Node Pagination Search Filter and Sort](#Node-Pagination-Search-Filter-and-Sort) , [Prevent multiple duplicates API calls](#Prevent-multiple-API-calls-Ignore-or-block-duplicates)  - [Simple HTTP Server](#simple-http-server) - [File Read](#file-read) - [Promise](#promise) - [EventEmitter](#eventemitter) - [Custom Middleware](#custom-middleware) - [Async/Await with API Call](#asyncawait-with-api-call) - [REST API Route](#rest-api-route) - [REST API Query parameters](#rest-api-query-parameters) |
| **React**      | [Autocomplete Component](#autocomplete-component) , [Todo List](#todo-list) , [TodoList with Delete](#TodoList) , [Fetch-and-display-list](#React-Fetch-and-display-list-users-with-user-search) , [React Table with Sorting](#react-table-with-sorting) , [React Pagination](#React-pagination) , [Grid View](#Grid-View) , [Infinite Scroll](#infinite-scroll) , [Form with Validation](#form-with-validation) , [Highlight Text](#highlight-text) , [Counter](#Counter) , [React Form API Call](#React-Form-API-Call) , [Handling API Errors in React](#Handling-API-Errors-in-React)  |
| **Angular**    | [Fetch-and-display-list](#Angular-Fetch-and-display-list-users-with-user-search) , [Debounce Input Search](#Angular-Debounce-Input-Search) |
| **Polyfills**  | [ForEach](#ForEach) [Bind](#customBind) , [Map](#arrayprototypemap) , [Filter](#arrayprototypefilter) , [Reduce](#arrayprototypereduce) , [Call](#functionprototypecall) , [Object.create](#objectcreate) , [Promise](#Promise) , [Debounce](#debounce-polyfill) , [Throttle](#throttle-polyfill) , [Memoize](#Memoize) |
| **Custom Hooks**| [useDebounce](#Custom-useDebounce-hook) , [Throttling](#Throttling) , [useToggle](#usetoggle--toggle-a-boolean) , [usePrevious – Track previous value](#useprevious--track-previous-value) , [useFetch – Generic fetch logic](#usefetch--generic-fetch-logic) , [useWindowWidth – Track window width](#usewindowwidth--track-window-width) - [syncs state to localStorage useLocalStorage](#useLocalStorage)|


| 🧩 **Nested Data Utilities**                                                        | 🧾 **Object Utilities**                                           | 🧮 **Array/Object Conversion & Lookup**                                             | 🔍 **Data Cleaning & Aggregation**                                    |  **Compare** | 🧪 **Advanced Transformations**                                                     |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------- |--------------------------------------------------------------------- | - | ----------------------------------------------------------------------------------- |
| [Nested Property – Filter](#nested-property-filter)                                 | [Key Renaming](#key-renaming)                                     | [Nested Array of Objects – Extract Fields](#nested-array-of-objects-extract-fields) | [Extract Unique Values by Key](#extract-unique-values-by-key)         | [Compare JSON objects](#Compare-JSON-objects)  | [Transform Data Based on External Schema](#transform-data-based-on-external-schema) |
| [Nested Property Update Without Mutation](#nested-property-update-without-mutation) | [Grouping Key](#key-grouping)                                     | [Array of Objects into a Lookup Object](#array-of-objects-into-a-lookup-object)     | [Remove Duplicates by Value](#remove-duplicates-by-value)             | [Compare array](#Compare-array)  | [Chainable Data Transform Utility](#chainable-data-transform-utility)               |
| [Nested Object – Flatten](#nested-object-flatten)                                   | [Custom `map()` for Objects](#custom-map-for-objects)             | [Merge Two Arrays by ID](#merge-two-arrays-by-id)                                   |[Group Products by Key then Count](#group-products-by-key-then-count) |   
| [Nested Property – Sort](#nested-property-sort)                                     | [Invert Key-Value Pairs](#invert-key-value-pairs)                 | [Convert Flat List to Tree Structure](#convert-flat-list-to-tree-structure)         |
| [Nested – Find Deepest Key Path](#nested-find-deepest-key-path)                     | [Remove Keys Based on Condition](#remove-keys-based-on-condition) |                                                                                     |
| [Nested Objects – Recursive Merge of Two](#nested-objects-recursive-merge-of-two)   | [Convert Object to Query String](#convert-object-to-query-string) |                                                                                     |

















## **Nested Property Filter**

You have:

```js
const employees = [
  { id: 1, name: 'Alice', role: 'Developer', location: { city: 'NY' } },
  { id: 2, name: 'Bob', role: 'Tester', location: { city: 'LA' } },
  { id: 3, name: 'Charlie', role: 'Developer', location: { city: 'NY' } },
];
```

**Task**: Filter only developers in `'NY'`.

**solution**
```js
const filtered = employees.filter(
  emp => emp.role === 'Developer' && emp.location.city === 'NY'
);
console.log(filtered);
```

**Solution reusable**
```js
const filterEmployees = (employees, dept, minAge) => {
  return employees.filter(emp => 
    emp.dept === dept && emp.age >= minAge
  );
};
console.log(filtered);
```




**Output**
```js
[
  { id: 1, name: 'Alice', role: 'Developer', location: { city: 'NY' } },
  { id: 3, name: 'Charlie', role: 'Developer', location: { city: 'NY' } }
]
```

---

## **Nested Property Update Without Mutation**


```js
const user = {
  id: 1,
  profile: {
    name: 'John Doe',
    address: {
      city: 'New York',
      zip: '10001'
    }
  }
};
```

**Task**: Update the `zip` code to `'20002'` without mutating the original object.

solution
```js
const updatedUser = {
  ...user,
  profile: {
    ...user.profile,
    address: {
      ...user.profile.address,
      zip: '20002'
    }
  }
};
```
console.log(updatedUser);
console.log(user); // original remains unchanged


**Using `lodash` (`_.set` with `cloneDeep`)**

To avoid mutation, clone the object first:

```js
import _ from 'lodash';

const user = {
  id: 1,
  profile: {
    name: 'John Doe',
    address: {
      city: 'New York',
      zip: '10001'
    }
  }
};

const updatedUser = _.set(_.cloneDeep(user), 'profile.address.zip', '20002');

console.log(updatedUser);
console.log(user); // remains unchanged
```

>  `_.set` modifies in place, so we clone first using `_.cloneDeep`.

---

###  **Using `immer`**

Immer lets you write "mutating" code that produces **immutable updates**:

```js
import { produce } from 'immer';

const user = {
  id: 1,
  profile: {
    name: 'John Doe',
    address: {
      city: 'New York',
      zip: '10001'
    }
  }
};

const updatedUser = produce(user, draft => {
  draft.profile.address.zip = '20002';
});

console.log(updatedUser);
console.log(user); // original remains unchanged
```

>  `immer` creates a proxy, tracks changes, and returns a new updated object.

---

 Summary:

| Method   | Pros                              | Cons                                |
| -------- | --------------------------------- | ----------------------------------- |
| Spread   | Native, no deps                   | Verbose for deep objects            |
| `lodash` | Easy path updates                 | Needs `cloneDeep` to avoid mutation |
| `immer`  | Clean syntax, minimal boilerplate | Slightly larger dependency          |

Let me know if you'd like a reusable helper function for deep updates without dependencies.


---


## **Nested Object Flatten**

Given:

```js
const input = {
  name: 'John',
  address: {
    city: 'NY',
    zip: '10001'
  }
};
```

**Output:**

```js
{
  'name': 'John',
  'address.city': 'NY',
  'address.zip': '10001'
}
```

> Create a `flattenObject(obj)` function.

**solution**

```js
function flattenObject(obj, parentKey = '', result = {}) {
  for (const [key, value] of Object.entries(obj)) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      flattenObject(value, newKey, result); // recurse
    } else {
      result[newKey] = value;
    }
  }
  return result;
}
```


---


## **Nested Property Sort**

**Input:**

```js
const students = [
  { id: 1, name: 'Sam', scores: { math: 80, eng: 70 } },
  { id: 2, name: 'John', scores: { math: 90, eng: 60 } }
];
```

**Output**

```js
[
  { id: 2, name: 'John', scores: { math: 90, eng: 60 } },
  { id: 1, name: 'Sam', scores: { math: 80, eng: 70 } }
]
```

**Task**: Return sorted list by math score descending.

You can sort the array of students by their `math` scores in **descending** order using `.sort()`:

---

**Solution**

```js
const sortedByMath = students.slice().sort((a, b) => b.scores.math - a.scores.math);
console.log(sortedByMath);
```


**Notes**

* `.slice()` creates a copy so the original array is not mutated.
* You can easily change the key or direction (e.g., ascending) as needed.



---



## **Nested Find Deepest Key Path**

Input:

```js
const input = {
  a: {
    b: {
      c: {
        d: 'value'
      }
    }
  }
};
```

**Output:**

```js
['a', 'b', 'c', 'd']
```

**solution**
```js
function getKeyPath(obj) {
  const path = [];

  while (typeof obj === 'object' && obj !== null) {
    const [key] = Object.keys(obj);
    path.push(key);
    obj = obj[key];
  }

  return path;
}
```

---

## **Nested Objects Recursive Merge of Two**

```js
const obj1 = {
  user: {
    name: 'John',
    address: { city: 'NY' }
  }
};

const obj2 = {
  user: {
    age: 30,
    address: { zip: '10001' }
  }
};
```

**Output:**

```js
{
  user: {
    name: 'John',
    age: 30,
    address: {
      city: 'NY',
      zip: '10001'
    }
  }
}
```

**solution**
```js
function deepMerge(target, source) {
  for (const key in source) {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key])
    ) {
      if (!target[key] || typeof target[key] !== 'object') {
        target[key] = {};
      }
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}
```

**solution with array merge**
```js
function deepMerge(target, source) {
  for (const key in source) {
    const sourceVal = source[key];
    const targetVal = target[key];

    if (Array.isArray(sourceVal) && Array.isArray(targetVal)) {
      // Merge arrays (you can customize: concat, dedupe, etc.)
      target[key] = [...targetVal, ...sourceVal];
    } else if (
      sourceVal &&
      typeof sourceVal === 'object' &&
      !Array.isArray(sourceVal)
    ) {
      if (!targetVal || typeof targetVal !== 'object') {
        target[key] = {};
      }
      deepMerge(target[key], sourceVal);
    } else {
      target[key] = sourceVal;
    }
  }
  return target;
}
```

---


## **Nested Array of Objects Extract Fields**

```js
const data = [
  {
    id: 1,
    name: 'A',
    children: [{ id: 11, name: 'AA' }]
  },
  {
    id: 2,
    name: 'B',
    children: [{ id: 21, name: 'BB' }]
  }
];
```

**Extract all names** into a flat array:

```js
['A', 'AA', 'B', 'BB']
```


**Solution**
```js
function extractNames(data) {
  const result = [];

  function traverse(items) {
    for (const item of items) {
      result.push(item.name);
      if (item.children) {
        traverse(item.children);
      }
    }
  }

  traverse(data);
  return result;
}

console.log(extractNames(data)); // ['A', 'AA', 'B', 'BB']
```
---





## **Key Renaming**

Transform this object by renaming the keys:

```js
const oldObj = {
  fname: 'John',
  lname: 'Doe',
  dob: '1990-01-01'
};
```

**To:**

```js
const newObj = {
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: '1990-01-01'
};
```

> Implement a dynamic function `renameKeys(obj, mapping)`.

**Solution**
```js

const mapping = {
  fname: 'firstName',
  lname: 'lastName',
  dob: 'dateOfBirth'
};

function renameKeys(obj, mapping) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      mapping[key] || key,
      value
    ])
  );
}
const newObj = renameKeys(oldObj, mapping);
```

**Output**
```js
 {
   firstName: 'John',
   lastName: 'Doe',
   dateOfBirth: '1990-01-01'
 }
```

---


## **Key Grouping**

Group the data based on department:

```js
const employees = [
  { name: 'Alice', dept: 'IT' },
  { name: 'Bob', dept: 'HR' },
  { name: 'Charlie', dept: 'IT' },
];
```

**Output:**

```js
{
  IT: ['Alice', 'Charlie'],
  HR: ['Bob']
}
```
> Bonus: Implement a reusable function `groupByKey(arr, key)`.

**Solution**
```js
function groupByKey(arr, key) {
  return arr.reduce((acc, item) => {
    const group = item[key];
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(item.name); // Customize this if needed
    return acc;
  }, {});
}


const grouped = groupByKey(employees, 'dept');
```


---


## **Array of Objects into a Lookup Object**

Input:

```js
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];
```

**Expected Output:**

```js
{
  1: { id: 1, name: 'Alice' },
  2: { id: 2, name: 'Bob' }
}
```

**solution**
```js
const userMap = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});
```

**Opt solution**
```js
function keyBy(arr, key) {
  return arr.reduce((acc, item) => {
    acc[item[key]] = item;
    return acc;
  }, {});
}

// Usage
const userMap = keyBy(users, 'id');
```

---

## **Merge Two Arrays by ID**

```js
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

const emails = [
  { id: 1, email: 'alice@example.com' },
  { id: 2, email: 'bob@example.com' }
];
```

**Output:**

```js
[
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
]
```

**Solution**
```js
const emailMap = emails.reduce((acc, curr) => {
  acc[curr.id] = curr.email;
  return acc;
}, {});

const merged = users.map(user => ({
  ...user,
  email: emailMap[user.id] || null
}));

console.log(merged);
```

**Optm Solution**
```js

function joinById(primary, secondary, key = 'id', joinKey = 'email') {
  const lookup = secondary.reduce((acc, item) => {
    acc[item[key]] = item[joinKey];
    return acc;
  }, {});
  return primary.map(item => ({
    ...item,
    [joinKey]: lookup[item[key]] || null
  }));
}

// Usage
const merged = joinById(users, emails);
```

---


## **Remove Keys Based on Condition**

Remove all keys from an object where the value is `null`, `undefined`, or `''`.

```js
const input = {
  name: 'Alice',
  age: null,
  city: '',
  country: 'USA'
};
```

**Output:**

```js
{
  name: 'Alice',
  country: 'USA'
}
```

**solution**
```js
function removeEmptyValues(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([_, value]) => value !== null && value !== '' && value !== undefined
    )
  );
}
```

---

## **Convert Object to Query String**

```js
const input = {
  name: 'Alice',
  age: 25,
  city: 'New York'
};
```

**Output:**
`"name=Alice&age=25&city=New%20York"`


**solution**
```js
const queryString = new URLSearchParams(input).toString();
console.log(queryString);
```
**Manual solution**
```js
function toQueryString(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

console.log(toQueryString(input));
```


---


## **Convert Flat List to Tree Structure**

Input:

```js
const items = [
  { id: 1, parent: null, name: 'A' },
  { id: 2, parent: 1, name: 'B' },
  { id: 3, parent: 1, name: 'C' },
  { id: 4, parent: 2, name: 'D' }
];
```

**Expected Output (Tree format):**

```js
[
  {
    id: 1,
    name: 'A',
    children: [
      {
        id: 2,
        name: 'B',
        children: [{ id: 4, name: 'D', children: [] }]
      },
      {
        id: 3,
        name: 'C',
        children: []
      }
    ]
  }
]
```

**solution**
```js

const tree = buildTree(items);


function buildTree(items) {
  const map = new Map();
  const roots = [];

  // Step 1: Initialize nodes with children
  for (const item of items) {
    map.set(item.id, { ...item, children: [] });
  }

  // Step 2: Build the tree structure
  for (const item of items) {
    const node = map.get(item.id);
    if (item.parent === null) {
      roots.push(node);
    } else {
      const parent = map.get(item.parent);
      if (parent) {
        parent.children.push(node);
      }
    }
  }

  return roots;
}
```

---

## **Extract Unique Values by Key**

Input:

```js
const records = [
  { id: 1, tag: 'js' },
  { id: 2, tag: 'react' },
  { id: 3, tag: 'js' },
];
```

**Output:**

```js
['js', 'react']
```

**solution**
```js
const uniqueTags = [...new Set(records.map(r => r.tag))];
console.log(uniqueTags);
```

**solution 2**
```js
const uniqueTags = records.reduce((acc, curr) => {
  if (!acc.includes(curr.tag)) acc.push(curr.tag);
  return acc;
}, []);

console.log(uniqueTags);

```

---

## **Remove Duplicates by Value**

```js
const input = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' }
];
```

**Output:**

```js
[
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
]
```

**solution**
```js
const unique = Array.from(
  new Map(input.map(item => [item.id, item])).values()
);

console.log(unique);
```

**solution 2**
```js
function uniqueBy(arr, key) {
  return Array.from(new Map(arr.map(item => [item[key], item])).values());
}

const result = uniqueBy(input, 'id');


```

> Must be immutable and optimized for performance.

---


## **Custom `map()` for Objects**

Implement your own `mapObject()` function:

```js
mapObject({ a: 1, b: 2 }, (key, value) => [key.toUpperCase(), value * 2])
```

**Output:**

```js
{ A: 2, B: 4 }
```



**Solution**

```js
function mapObject(obj, callback) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => callback(key, value))
  );
}
```

**How it works**

* `Object.entries(obj)` turns the object into `[key, value]` pairs.
* `.map(...)` transforms each entry.
* `Object.fromEntries(...)` converts the modified pairs back into an object.

---

## **Chainable Data Transform Utility**

Design a utility that can chain `.filter()`, `.map()`, `.reduce()` over arrays like:

```js
chain(data)
  .filter(x => x.active)
  .map(x => x.name)
  .value();
```

You can build a simple chaining utility using a wrapper object that stores intermediate data and exposes chainable `.filter()`, `.map()`, `.reduce()`, and `.value()` methods.

---

**`chain()` Utility Implementation**

```js
function chain(data) {
  const wrapper = {
    _value: [...data], // Clone to avoid mutation

    filter(fn) {
      this._value = this._value.filter(fn);
      return this;
    },

    map(fn) {
      this._value = this._value.map(fn);
      return this;
    },

    reduce(fn, init) {
      this._value = [this._value.reduce(fn, init)];
      return this;
    },

    value() {
      return this._value.length === 1 ? this._value[0] : this._value;
    }
  };

  return wrapper;
}
```


**Example Usage**

```js
const data = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Charlie', active: true }
];

const result = chain(data)
  .filter(x => x.active)
  .map(x => x.name)
  .value();

console.log(result); // ['Alice', 'Charlie']
```

---

**Notes**

* You can add `.sort()`, `.find()`, etc., by extending the wrapper.
* `.reduce()` wraps the result back in an array to allow further chaining (if needed).
* `.value()` unwraps the final result.


---

## **Transform Data Based on External Schema**

Given a schema:

```js
const schema = {
  firstName: 'fname',
  lastName: 'lname'
};

const input = { fname: 'John', lname: 'Doe' };
```

**Transform `input` based on `schema` into:**

```js
{ firstName: 'John', lastName: 'Doe' }
```

**solution**
```js


function transformBySchema(input, schema) {
  const result = {};
  for (const [newKey, oldKey] of Object.entries(schema)) {
    if (oldKey in input) {
      result[newKey] = input[oldKey];
    }
  }
  return result;
}

const output = transformBySchema(input, schema);
console.log(output); // { firstName: 'John', lastName: 'Doe' }

```

---

## **Invert Key-Value Pairs**

```js
const input = {
  a: 'x',
  b: 'y'
};
```

**Output:**

```js
{
  x: 'a',
  y: 'b'
}
```

**solution**
```js
function invertObject(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    result[value] = key;
  }
  return result;
}

const output = invertObject(input);

console.log(output); // { x: 'a', y: 'b' }
```

---


## **Group Products by key then count**


**input**
```js
const employees = [
  { id: 1, name: 'Alice', department: 'Engineering', skills: ['JavaScript', 'React'] },
  { id: 2, name: 'Bob', department: 'Engineering', skills: ['JavaScript', 'Node.js'] },
  { id: 3, name: 'Charlie', department: 'HR', skills: ['Communication', 'Recruiting'] },
  { id: 4, name: 'Dave', department: 'Engineering', skills: ['React', 'Node.js'] },
];
```

**output**
```js
{
  Engineering: {
    JavaScript: 2,
    React: 2,
    Node.js: 2
  },
  HR: {
    Communication: 1,
    Recruiting: 1
  }
}
```








**Solution**
```js
function generateSkillReport(employees) {
  return employees.reduce((deptMap, { department, skills }) => {
    // Initialize department entry if not exists
    if (!deptMap[department]) {
      deptMap[department] = {};
    }

    // Count each skill
    for (const skill of skills) {
      deptMap[department][skill] = (deptMap[department][skill] || 0) + 1;
    }

    return deptMap;
  }, {});
}

// Run it
console.log(generateSkillReport(employees));
```
---

## Compare JSON objects

```js
const a = { name: "John", age: 30 };
const b = { name: "John", age: 30 };
const isEqual = JSON.stringify(a) === JSON.stringify(b);
console.log(isEqual); // true 
only if both object same order
Property order matters ({a:1, b:2} ≠ {b:2, a:1}).
Doesn't handle functions, undefined, Date, Set, or Map.
```

Deep comparsion
```js
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" || obj1 === null ||
    typeof obj2 !== "object" || obj2 === null
  ) return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(key => deepEqual(obj1[key], obj2[key]));
}

const objA = { a: 1, b: { c: 2 } };
const objB = { b: { c: 2 }, a: 1 };

console.log(deepEqual(objA, objB)); // true ✅
```




## Compare Array
```js
[1, 2, 3, 4] == [1, 2, 3]; // ❌ false
[1, 2, 3, 4] === [1, 2, 3, 4]; // ❌ false even though content is same
- two arrays have identical content, they are still **different objects in memory — not equal by reference**.
```

- [compare order array](#compare-order-array)
- [Compare unorder array](#compare-unorder-array)
- [Compare Ordered Array of Objects](#compare-ordered-array-of-objects)
- [Compare Unordered Array of Objects](#compare-unordered-array-of-objects)

- ## Compare order array
```js
function compareOrderedArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
```

## Compare unorder array
```js
function compareUnorderedArrays(arr1, arr2) {
  // ✅ First, check if both arrays have the same length
  if (arr1.length !== arr2.length) return false;

  // 📦 Clone and sort both arrays to avoid mutating original inputs
  const sorted1 = [...arr1].sort();
  const sorted2 = [...arr2].sort();

  // 🔁 Compare each element one by one
  return sorted1.every((value, index) => value === sorted2[index]);
}
```

## Compare order array of object
```js
function deepEqual(a, b) {
  // ✅ Fast path: if both references are exactly equal (same value or object)
  if (a === b) return true;

  // ❌ If either is not an object or is null, they can't be equal (excluding typeof null === 'object' quirk)
  if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) {
    return false;
  }

  // 📦 Handle arrays specifically
  if (Array.isArray(a)) {
    // ❌ If only one is an array or lengths mismatch, return false
    if (!Array.isArray(b) || a.length !== b.length) return false;

    // 🔁 Recursively compare each element in the array
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }

    // ✅ All elements matched
    return true;
  }

  // 🧾 Handle plain objects

  // Get keys from both objects
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // ❌ Different number of keys → objects not equal
  if (keysA.length !== keysB.length) return false;

  // 🔁 Check if each key and its value deeply matches
  for (let key of keysA) {
    // ❌ Key missing in other object OR values don't match
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  // ✅ All keys and values matched
  return true;
}

```

## Compare unorder array of object
```js
function deepEqual(a, b) {
  if (a === b) return true;

  if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) {
    return false;
  }

  // Handle arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;

    const used = new Array(b.length).fill(false);

    return a.every(itemA => {
      for (let i = 0; i < b.length; i++) {
        if (!used[i] && deepEqual(itemA, b[i])) {
          used[i] = true;
          return true;
        }
      }
      return false;
    });
  }

  // If one is array and other is not
  if (Array.isArray(a) !== Array.isArray(b)) return false;

  // Handle objects
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  return keysA.every(key => keysB.includes(key) && deepEqual(a[key], b[key]));
}
```







## Grid View

```js
 App.tsx
import UserTable from './components/tableview';
import Grid from './components/Grid';
import './App.css';

function App() {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>React Grid Example</h1>
      <Grid items={data} columns={3} />
      <h1 style={{ textAlign: 'center' }}>Table Grid Example</h1>
      <UserTable />
    </div>
  );
  
}

export default App;
```


##  Table View
```js
Tabview.tsx
import React, { useEffect, useState } from 'react';

type User = { name: string; age: number; profilePic: string; };
const thStyle = { padding: '12px', backgroundColor: '#f4f4f4', borderBottom: '2px solid #ddd', };
const tdStyle = { padding: '10px', borderBottom: '1px solid #ccc', };

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => {
        if (!response.ok) { throw new Error('Failed to fetch users'); }
        return response.json();
      })
      .then(data => {
        const userDetails = data.users.map((user: any) => ({
          name: `${user.firstName} ${user.maidenName} ${user.lastName}`,
          age: user.age,
          profilePic: user.image,
        }));
        setUsers(userDetails);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</p>;
  }

  return (
    <table style={{ width: '60%', margin: 'auto', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={thStyle}>Name</th>
          <th style={thStyle}>Age</th>
          <th style={thStyle}>Profile Pic</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <tr key={i} style={{ textAlign: 'center' }}>
            <td style={tdStyle}>{user.name}</td>
            <td style={tdStyle}>{user.age}</td>
            <td style={tdStyle}>
              <img src={user.profilePic} alt={user.name} width="50" height="50" style={{ borderRadius: '50%' }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};



export default UserTable;
```

```js
Grid.tsx
import React from 'react';
import '../App.css';

type GridProps = { items: string[]; columns?: number; };

const gridContainer: React.CSSProperties = { display: 'grid', gap: '1rem', margin: '20px', };

const gridItem: React.CSSProperties = {
  padding: '20px', backgroundColor: '#f0f0f0', textAlign: 'center',
  borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', fontWeight: 'bold',
};

const Grid: React.FC<GridProps> = ({ items, columns = 3 }) => {
  return (
    <div style={{ ...gridContainer, gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {items.map((item, index) => (
        <div key={index} style={gridItem}>
          {item}
        </div>
      ))}
    </div>
  );
};
export default Grid;
```




## Throttling

Throttling ensures a function runs **at most once every X milliseconds**, no matter how often it's triggered.


```tsx
import React, { useState, useEffect, useRef } from 'react';

// ✅ useThrottle Hook
function useThrottle(value, delay = 500) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const now = Date.now();
    const timeSinceLastExec = now - lastExecuted.current;
    const remainingTime = delay - timeSinceLastExec;

    const handler = setTimeout(() => {
      setThrottledValue(value);
      lastExecuted.current = Date.now();
    }, remainingTime > 0 ? remainingTime : 0);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return throttledValue;
}

export default function ThrottleExample() {
  const [text, setText] = useState('');
  const throttledText = useThrottle(text, 1000);

  useEffect(() => {
    if (throttledText) {
      console.log('🚀 API call with:', throttledText);
    }
  }, [throttledText]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🔁 Throttle Input</h2>
      <input
        type="text"
        placeholder="Type fast..."
        value={text}
        onChange={e => setText(e.target.value)}
        style={{ padding: '0.5rem', width: '300px', fontSize: '1rem' }}
      />
      <p>Throttled Value: <strong>{throttledText}</strong></p>
    </div>
  );
}
```

## **useLocalStorage**.


```tsx
import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  // Read value from localStorage (or use initialValue)
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  // Update localStorage whenever value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn("Error writing to localStorage key:", key, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}
```


**Usage Example**

```tsx
function ThemeToggler() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}
```
 **Key Highlights (for Interview)**

* ✅ Works like `useState` but **persists across reloads**
* ✅ Uses `JSON.parse` and `JSON.stringify` to support complex types (e.g., arrays, objects)
* ✅ Implements **lazy initialization** with `useState(() => {...})`
* ✅ Automatically updates localStorage via `useEffect`
* ✅ Handles **parsing/writing errors gracefully**



## **Custom useDebounce hook**.



```js
import React, { useState, useEffect } from "react";

// 🔁 useDebounce Hook (Inline)
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler); // cleanup on value/delay change
  }, [value, delay]);

  return debouncedValue;
}

// 🔍 Search Component using useDebounce
export default function DebouncedSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Simulate API call
      console.log(debouncedSearchTerm, '🔁 Debounced after 300ms');
    }
  }, [debouncedSearchTerm]);


  return (
    <div style={{ padding: "1rem" }}>
      <h3>🔎 Debounced Search Input</h3>
      <input         type="text"         value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Type to search..."
      />
      <p style={{ marginTop: "0.5rem" }}>         🔁 Debounced Value: <strong>{debouncedSearchTerm}</strong>       </p>
    </div>
  );
}
```

---

## React Form API Call:
```jsx
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormData({ name: "", email: "" });
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000); // hide after 3s
      } else {
        console.error("Failed to submit contact.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ display: "block", marginBottom: 10, width: "100%" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ display: "block", marginBottom: 10, width: "100%" }}
        />

        <button type="submit">Submit</button>
      </form>

      {success && <p style={{ color: "green" }}>Contact submitted successfully!</p>}
    </div>
  );
}

export default ContactForm;
```


---


## Nodejs API using TypeScript for CRUD operations

### 📁 Project Structure
```
my-api/
├── src/
│   ├── models/
│   │   └── Contact.ts
│   ├── routes/
│   │   └── contactRoutes.ts
│   ├── controllers/
│   │   └── contactController.ts
│   ├── app.ts
│   └── server.ts
├── tsconfig.json
├── package.json
```

---

### 1️⃣ `package.json` dependencies

```bash
npm init -y
npm install express mongoose
npm install -D typescript ts-node-dev @types/express @types/node
```

---

### 2️⃣ `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

---

### 3️⃣ MongoDB Model – `src/models/Contact.ts`

```ts
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
});

export const Contact = mongoose.model("Contact", contactSchema);
```

---

### 4️⃣ Controller – `src/controllers/contactController.ts`

```ts
import { Request, Response } from "express";
import { Contact } from "../models/Contact";

export const createContact = async (req: Request, res: Response) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ error: "Failed to create contact" });
  }
};

export const getContacts = async (_req: Request, res: Response) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

export const getContact = async (req: Request, res: Response) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) return res.status(404).json({ error: "Not found" });
  res.json(contact);
};

export const updateContact = async (req: Request, res: Response) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!contact) return res.status(404).json({ error: "Not found" });
  res.json(contact);
};

export const deleteContact = async (req: Request, res: Response) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (!contact) return res.status(404).json({ error: "Not found" });
  res.json({ message: "Contact deleted" });
};
```

---

### 5️⃣ Routes – `src/routes/contactRoutes.ts`

```ts
import express from "express";
import {
  createContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact
} from "../controllers/contactController";

const router = express.Router();

router.post("/", createContact);
router.get("/", getContacts);
router.get("/:id", getContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

export default router;
```

---

### 6️⃣ App – `src/app.ts`

```ts
import express from "express";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/contactDB")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

app.use("/api/contacts", contactRoutes);

export default app;
```

---

### 7️⃣ Start Server – `src/server.ts`

```ts
import app from "./app";

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
```

---

### 🧪 Run the API
In `package.json`, add:
```json
"scripts": {
  "dev": "ts-node-dev src/server.ts"
}
```

Then run:
```bash
npm run dev
```

---




## JWT Auth Flow Overview

1. **User Signup/Login** on React frontend  
2. **API request** to backend (Node.js + Express + MongoDB)  
3. Backend issues a **JWT token** (access token)  
4. Token stored in **HTTP-only cookie** or **localStorage** (based on security needs)  
5. On every request, frontend **sends token**  
6. Backend **verifies token** before processing

---

### 📦 Backend – Node.js + Express + TypeScript

### 1. Install Required Packages

```bash
npm install express mongoose bcryptjs jsonwebtoken cors cookie-parser
npm install -D typescript ts-node-dev @types/node @types/express @types/jsonwebtoken @types/cookie-parser
```

---

### 2. Backend Directory Structure

```
/server
  ├── controllers/
  ├── middleware/
  ├── models/
  ├── routes/
  ├── utils/
  ├── app.ts
  ├── server.ts
```

---

### 3. JWT Auth Functions – `utils/jwt.ts`

```ts
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
```

---

### 4. Middleware to Protect Routes – `middleware/auth.ts`

```ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    (req as any).user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
```

---

### 5. Auth Controller – `controllers/authController.ts`

```ts
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/User";
import { generateToken } from "../utils/jwt";

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: "User exists" });

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });

  const token = generateToken(user._id);
  res.json({ token, user });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(400).json({ message: "Invalid credentials" });

  const token = generateToken(user._id);
  res.json({ token, user });
};
```

---

### 6. User Model – `models/User.ts`

```ts
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});

export default mongoose.model("User", userSchema);
```

---

### 7. Routes – `routes/auth.ts`

```ts
import express from "express";
import { signup, login } from "../controllers/authController";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/verify-token", authenticate, (req, res) => {
  const user = (req as any).user;
  res.json({ message: "Token is valid", user });
});

export default router;
```

---

### 🧑‍🎨 Frontend – React (with Axios & Context)

### 1. Axios Setup with JWT

```tsx
// utils/axios.ts
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
```

---

### 2. Auth Context – `context/AuthContext.tsx`

```tsx
import React, { createContext, useState, useEffect } from "react";
import axios from "../utils/axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const res = await axios.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const signup = async (name, email, password) => {
    const res = await axios.post("/auth/signup", { name, email, password });
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```

---

### 3. Protected Route (Frontend)

```tsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <div>Login required</div>;
  return children;
};
```

---

### 🧪 Try It Out

- Run backend: `npm run dev`
- Run frontend: `npm start`
- Use Signup/Login form → store token → send to protected API

---

## Rate Limiter Middleware
```tsx
import rateLimit from "express-rate-limit";

// Apply to all requests
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                 // Limit each IP to 100 requests per windowMs
  message: {
    status: 429,
    message: "Too many requests, please try again later.",
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false,  // Disable `X-RateLimit-*` headers
});
```


 ## Whitelist IPs in Rate Limiter

```tsx
import rateLimit from "express-rate-limit";
import { Request } from "express";

// Add the IPs you want to whitelist
const WHITELISTED_IPS = ["127.0.0.1", "::1", "192.168.1.100"];

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: {
    status: 429,
    message: "Too many requests, please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,

  // 🛡️ Skip function for whitelisting
  skip: (req: Request): boolean => {
    const ip = req.ip || req.connection.remoteAddress;
    return WHITELISTED_IPS.includes(ip);
  },
});

```
**Without rate limit npm package**
```tsx
const express = require('express');
const app = express();

// ✅ Configuration
const whitelist = ['::1', '127.0.0.1']; // Add allowed IPs (localhost included)
const rateLimitMap = new Map(); // Store per-IP request info
const RATE_LIMIT = 5; // max requests
const WINDOW_MS = 60 * 1000; // 1 minute

// ✅ Rate limiter middleware
function rateLimiter(req, res, next) {
  const ip = req.ip;

  // Allow whitelisted IPs
  if (whitelist.includes(ip)) {
    return next();
  }

  const now = Date.now();
  const record = rateLimitMap.get(ip) || { count: 0, timestamp: now };

  // Reset count if time window has passed
  if (now - record.timestamp > WINDOW_MS) {
    record.count = 1;
    record.timestamp = now;
  } else {
    record.count += 1;
  }

  rateLimitMap.set(ip, record);

  if (record.count > RATE_LIMIT) {
    return res.status(429).json({ message: 'Too many requests. Please try again later.' });
  }

  next();
}

// ✅ Enable if behind a proxy (e.g., nginx, cloud)
app.set('trust proxy', true);

// ✅ Apply the middleware globally
app.use(rateLimiter);

// ✅ Sample endpoint
app.get('/', (req, res) => {
  res.send(`Hello from Express! Your IP ${req.ip} passed the rate limiter.`);
});

// ✅ Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
```

-----
 ## Location based IP-based restrictions
```tsx
 import { Request, Response, NextFunction } from "express";
import geoip from "geoip-lite";

// Set of allowed countries (ISO Alpha-2 codes)
const ALLOWED_COUNTRIES = new Set(["IN", "US", "CA"]); // Example: India, USA, Canada

export const geoBlocker = (req: Request, res: Response, next: NextFunction) => {
  const ip = req.headers["x-forwarded-for"]?.toString().split(",")[0] || req.socket.remoteAddress;

  const geo = geoip.lookup(ip || "");

  if (geo && ALLOWED_COUNTRIES.has(geo.country)) {
    return next(); // Allow
  }

  return res.status(403).json({
    message: "Access denied: Your region is not allowed",
    ip,
    country: geo?.country || "Unknown"
  });
};
```

## Middleware for Only Sensitive Routes

```tsx
import express from "express";
import { geoBlocker } from "./middleware/geoBlocker";

const app = express();

app.use(express.json());

// Public Route — No geo blocking
// 🛡️ Apply geoBlocker to ALL incoming requests
app.use(geoBlocker);

app.get("/api/public", (req, res) => {
  res.send("Even this route is geo-restricted.");
});

app.get("/api/secure", (req, res) => {
  res.send("Secure route with geo restriction.");
});
```
**Or**
```tsx
const geoBypassRoutes = ["/api/health", "/api/version"];

app.use((req, res, next) => {
  if (geoBypassRoutes.includes(req.path)) return next();
  geoBlocker(req, res, next);
});

```






## Build simple API
```tsx
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// In-memory data
let books = [
  { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
  { id: 2, title: "Sapiens", author: "Yuval Noah Harari", publishedYear: 2011 }
];

// GET all books
app.get('/books', (req, res) => {
  res.json(books);
});

// GET a single book
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
});

// POST a new book
app.post('/books', (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT (update) a book
app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const { title, author, publishedYear } = req.body;
  book.title = title ?? book.title;
  book.author = author ?? book.author;
  book.publishedYear = publishedYear ?? book.publishedYear;

  res.json(book);
});

// DELETE a book
app.delete('/books/:id', (req, res) => {
  books = books.filter(b => b.id !== parseInt(req.params.id));
  res.json({ message: 'Book deleted' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

## TodoList
```tsx


import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleAddTodo = () => {
    if (title.trim() === '') {
      setError('Todo title cannot be empty');
      return;
    }
    const newTodo = { id: Date.now(), title };
    setTodos([...todos, newTodo]);
    setTitle('');
    setError('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow-lg rounded-xl bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-grow border p-2 rounded"
          placeholder="Enter todo"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <ul className="space-y-2">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 p-2 rounded"
          >
            <span>{todo.title}</span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
        {todos.length === 0 && <p className="text-gray-500">No todos yet.</p>}
      </ul>
    </div>
  );
};

export default TodoList;
```








 ## React Fetch and display list users with user search


```tsx


import React, { useEffect, useState, useTransition } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  // useTransition for non-urgent updates
  const [isPending, startTransition] = useTransition();

  // Fetch users on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        console.log(data, "user API data");
        setUsers(data);
      } catch (err) {
        console.log("Error fetching user details", err);
      }
    };

    fetchData();
  }, []);

  // Handle search input with startTransition
  const handleSearchChange = (e) => {
    const value = e.target.value;
    startTransition(() => {
      setSearch(value);
    });
  };

  // Filter users based on search
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>User List</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={handleSearchChange}
        style={{ padding: '8px', marginBottom: '10px', width: '100%' }}
      />

      {isPending && <p>Updating list...</p>}

      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <li key={user.id}>
              {user.name} – {user.email}
            </li>
          ))
        ) : (
          <li>No users found</li>
        )}
      </ul>
    </div>
  );
};

export default UserList;
```


## Angular Fetch and display list users with user search

#### **1. app.module.ts** – Import `HttpClientModule` and `FormsModule`

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [AppComponent, UserListComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

---

#### **2. user-list.component.ts**

```ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  search: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => this.users = data,
        error: (err) => console.error('Error fetching users:', err)
      });
  }

  get filteredUsers() {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}
```

---

#### **3. user-list.component.html**

```html
<div style="padding: 20px;">
  <h2>User List</h2>

  <input
    type="text"
    placeholder="Search by name..."
    [(ngModel)]="search"
    style="padding: 8px; margin-bottom: 10px; width: 100%;"
  />

  <ul>
    <li *ngFor="let user of filteredUsers">
      {{ user.name }} – {{ user.email }}
    </li>
    <li *ngIf="filteredUsers.length === 0">No users found</li>
  </ul>
</div>
```

---

### customBind

```js
Function.prototype.customBind = function (context, ...args) {
  const fn = this;
  return function (...innerArgs) {
    return fn.apply(context, [...args, ...innerArgs]);
  };
};

function greet(greeting, name) {
  console.log(`${greeting}, ${name} - from ${this.place}`);
}

const greetFromIndia = greet.customBind({ place: 'India' }, 'Hello');
greetFromIndia('Vignesh'); // Hello, Vignesh - from India
```




---

#### `Array.prototype.map`

```js
Array.prototype.myMap = function (callback) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// ✅ Usage
const nums = [1, 2, 3];
const doubled = nums.myMap(x => x * 2);  // [2, 4, 6]

console.log(doubled,"doubled")
```

---

#### `Array.prototype.filter`

```js
Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// ✅ Usage
const nums = [1, 2, 3, 4];
const evens = nums.myFilter(x => x % 2 === 0);  // [2, 4]
```

---

#### `Array.prototype.reduce`

```js
Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;
  let startIndex = 0;

  if (acc === undefined) {
    acc = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }

  return acc;
};

// ✅ Usage
const total = [1, 2, 3, 4].myReduce((sum, val) => sum + val); // 10
```

---

#### `Function.prototype.call`

```js
Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;
  const fnKey = Symbol();
  context[fnKey] = this;
  const result = context[fnKey](...args);
  delete context[fnKey];
  return result;
};

// ✅ Usage
function greet(greeting) {
  return `${greeting}, ${this.name}`;
}
const person = { name: 'Alice' };
console.log(greet.myCall(person, 'Hello'));  // "Hello, Alice"
```

---

#### `Object.create`

```js
function myCreate(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
}

// ✅ Usage
const parent = { greet: () => 'hi' };
const child = myCreate(parent);
console.log(child.greet()); // "hi"
```

---

#### Debounce Polyfill 

```js
// Define the debounce function that accepts the target function and a delay
function debounce(fn, delay) {
  // This will hold the timeout ID between calls
  let timer = null;

  // Return a new function that wraps the original `fn`
  return function (...args) {
    // Capture the current `this` context to use inside setTimeout
    const context = this;

    // Clear any previously scheduled execution
    clearTimeout(timer);

    // Schedule a new execution after the delay
    timer = setTimeout(() => {
      // Call the original function with the correct context and arguments
      fn.apply(context, args);
    }, delay);
  };
}


// A simple function we want to debounce
function onResize() {
  console.log('Resized:', new Date().toISOString());
}

// Create a debounced version of `onResize`, with 500ms delay
const debouncedResize = debounce(onResize, 500);

// Add event listener to the window's resize event
window.addEventListener('resize', debouncedResize);

```

#### Throttle Polyfill 

```js
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args); // only allow this once per "limit"
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit); // reset lock after delay
    }
  };
}

// A simple function we want to debounce
function onResize() {
  console.log('Resized:', new Date().toISOString());
}
// Create a debounced version of `onResize`, with 500ms delay
const debouncedResize = debounce(onResize, 500);
// Add event listener to the window's resize event
window.addEventListener('resize', debouncedResize);
```
**Breakdown**
- inThrottle: Acts like a lock.
- First call: Executes the function.
- Locks further calls for limit ms (e.g., 1000ms).
- After that, unlocks and allows one more call.


#### Promise

```js
(function (global) {
  if (typeof global.Promise !== 'undefined') return;

  function MyPromise(executor) {
    var self = this;
    self.status = 'pending';
    self.value = undefined;
    self.reason = undefined;
    self.onFulfilled = [];
    self.onRejected = [];

    function resolve(value) {
      if (self.status === 'pending') {
        self.status = 'fulfilled';
        self.value = value;
        self.onFulfilled.forEach(function (fn) {
          fn(self.value);
        });
      }
    }

    function reject(reason) {
      if (self.status === 'pending') {
        self.status = 'rejected';
        self.reason = reason;
        self.onRejected.forEach(function (fn) {
          fn(self.reason);
        });
      }
    }

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  MyPromise.prototype.then = function (onFulfilled, onRejected) {
    var self = this;
    return new MyPromise(function (resolve, reject) {
      if (self.status === 'fulfilled') {
        try {
          var result = onFulfilled ? onFulfilled(self.value) : self.value;
          resolve(result);
        } catch (err) {
          reject(err);
        }
      } else if (self.status === 'rejected') {
        try {
          var result = onRejected ? onRejected(self.reason) : self.reason;
          reject(result);
        } catch (err) {
          reject(err);
        }
      } else {
        self.onFulfilled.push(function (value) {
          try {
            var result = onFulfilled ? onFulfilled(value) : value;
            resolve(result);
          } catch (err) {
            reject(err);
          }
        });

        self.onRejected.push(function (reason) {
          try {
            var result = onRejected ? onRejected(reason) : reason;
            reject(result);
          } catch (err) {
            reject(err);
          }
        });
      }
    });
  };

  MyPromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
  };

  global.Promise = MyPromise;
})(this);
```


## Handling API Errors in React
```js
import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://api.example.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchUsers();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```




### **Angular Debounce Input Search**

#### 🔧 **1. Setup (Using RxJS `Subject`)**

```ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-debounced-search',
  templateUrl: './debounced-search.component.html'
})
export class DebouncedSearchComponent implements OnInit, OnDestroy {
  searchInput$ = new Subject<string>();
  subscription!: Subscription;
  searchTerm = '';

  ngOnInit(): void {
    this.subscription = this.searchInput$
      .pipe(
        debounceTime(300),            // wait for 300ms pause in events
        distinctUntilChanged()        // only emit if value is different
      )
      .subscribe(value => {
        this.searchTerm = value;
        console.log('Search triggered with:', value);
        // call API or filter here
      });
  }

  onSearchChange(value: string): void {
    this.searchInput$.next(value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
```

---

#### 📄 **2. Template: `debounced-search.component.html`**

```html
<input
  type="text"
  placeholder="Search..."
  (input)="onSearchChange($event.target.value)"
  style="padding: 8px; width: 100%;"
/>

<p *ngIf="searchTerm">You searched for: {{ searchTerm }}</p>
```

---

### 🧠 **How It Works:**

* `(input)="onSearchChange(...)"` emits every keystroke.
* The `Subject` pipes the values through:

  * `debounceTime(300)` → waits 300ms of silence before emitting
  * `distinctUntilChanged()` → skips if same value


---







## Autocomplete Component
```ts
function Autocomplete() {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      const res = await fetch(`/api/suggest?q=${input}`);
      const data = await res.json();
      setSuggestions(data);
    };
    if (input) fetchSuggestions();
  }, [input]);

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <ul>
        {suggestions.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  );
}
```
## Todo List
```ts
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (!task) return;
    setTodos([...todos, { id: Date.now(), text: task, done: false }]);
    setTask('');
  };

  const toggleDone = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
  };

  return (
    <div>
      <input value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(t => (
          <li key={t.id} style={{ textDecoration: t.done ? 'line-through' : '' }} onClick={() => toggleDone(t.id)}>
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
```
## React Table with Sorting
```ts
function SortableTable({ data }) {
  const [sortKey, setSortKey] = useState(null);
  const [asc, setAsc] = useState(true);

  const sorted = [...data].sort((a, b) => {
    if (!sortKey) return 0;
    return asc ? a[sortKey] > b[sortKey] ? 1 : -1 : a[sortKey] < b[sortKey] ? 1 : -1;
  });

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0] || {}).map(k => (
            <th key={k} onClick={() => { setSortKey(k); setAsc(!asc); }}>{k}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sorted.map((row, i) => (
          <tr key={i}>
            {Object.values(row).map((cell, j) => <td key={j}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```
## Infinite Scroll
```ts
function InfiniteScrollList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const fetchMore = async () => {
    const res = await fetch(`/api/items?page=${page}`);
    const data = await res.json();
    setItems(prev => [...prev, ...data]);
  };

  useEffect(() => {
    fetchMore();
  }, [page]);

  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        setPage(p => p + 1);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>;
}  
```




## Form with Validation
```ts
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email.includes('@')) newErrors.email = 'Invalid email';
    if (password.length < 6) newErrors.password = 'Too short';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) setErrors(errs);
    else console.log('Login success');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      {errors.email && <div>{errors.email}</div>}
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      {errors.password && <div>{errors.password}</div>}
      <button type="submit">Login</button>
    </form>
  );
}
```
## Highlight Text
```ts
function Highlight({ text, highlight }) {
  if (!highlight) return <span>{text}</span>;
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return <span>{parts.map((part, i) => part.toLowerCase() === highlight.toLowerCase() ? <mark key={i}>{part}</mark> : part)}</span>;
}
```

## Counter

```ts
import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() =>
        setSeconds(prev => {
          if (prev + 1 === 10) {
            return 0;
          }
          return prev + 1;
        }), 1000
      );
    }

    return () => clearInterval(timerRef.current); // cleanup on unmount or isRunning change
  }, [isRunning]);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const pause = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const stop = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <h2>Timer: {seconds} secs</h2>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
```


## React Pagination


```ts
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Sam Wilson', email: 'sam.wilson@example.com', role: 'Moderator', status: 'Active' },
    { id: 4, name: 'Emily Davis', email: 'emily.davis@example.com', role: 'User', status: 'Active' },
    { id: 5, name: 'Michael Brown', email: 'michael.brown@example.com', role: 'Admin', status: 'Inactive' },
    { id: 6, name: 'Sarah Johnson', email: 'sarah.johnson@example.com', role: 'User', status: 'Active' },
    { id: 7, name: 'Chris Lee', email: 'chris.lee@example.com', role: 'Moderator', status: 'Active' },
    { id: 8, name: 'Anna Martinez', email: 'anna.martinez@example.com', role: 'Admin', status: 'Inactive' },
    { id: 9, name: 'David Clark', email: 'david.clark@example.com', role: 'User', status: 'Active' },
    { id: 10, name: 'Sophia Lopez', email: 'sophia.lopez@example.com', role: 'Moderator', status: 'Inactive' },
    { id: 11, name: 'Daniel Harris', email: 'daniel.harris@example.com', role: 'User', status: 'Active' },
    { id: 12, name: 'Olivia Moore', email: 'olivia.moore@example.com', role: 'Admin', status: 'Active' },
  ]);

  const [displayCount, setDisplayCount] = useState(3); // Start with 3 records
  const limit = 2;

  const showMore = () => {
    // Don't go beyond data length
    setDisplayCount((prev) => Math.min(prev + limit, data.length));
  };

  const showLess = () => {
    // Don't go below 3
    setDisplayCount((prev) => Math.max(3, prev - limit));
  };

  const styles = {
    main: { padding: '20px' },
    title: { color: '#5C6AC4' },
  };

  return (
    <div style={styles.main}>
      <h1 style={styles.title}>User List</h1>
      <ul>
        {data.slice(0, displayCount).map((record) => (
          <li key={record.id}>
            {record.name} - {record.status}
          </li>
        ))}
      </ul>
      <div>
        {displayCount < data.length && (
          <button onClick={showMore}>Show More</button>
        )}
        {displayCount > 3 && (
          <button onClick={showLess}>Show Less</button>
        )}
      </div>
    </div>
  );
}

export default App;


```

## Node Pagination Search Filter and Sort


```ts
const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'John Doe', status: 'Active' },
  { id: 2, name: 'Jane Smith', status: 'Inactive' },
  { id: 3, name: 'Sam Wilson', status: 'Active' },
  { id: 4, name: 'Emily Davis', status: 'Active' },
  { id: 5, name: 'Michael Brown', status: 'Inactive' },
  { id: 6, name: 'Sarah Johnson', status: 'Active' },
  { id: 7, name: 'Chris Lee', status: 'Active' },
  { id: 8, name: 'Anna Martinez', status: 'Inactive' },
  { id: 9, name: 'David Clark', status: 'Active' },
  { id: 10, name: 'Sophia Lopez', status: 'Inactive' },
];

// GET /users?page=1&limit=3&search=sam&status=Active&sort=name
app.get('/users', (req, res) => {
  let { page = 1, limit = 3, search = '', status, sort } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);

  let filtered = [...users];

  // 🔍 Search by name
  if (search) {
    filtered = filtered.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // 🎯 Filter by status
  if (status) {
    filtered = filtered.filter(user => user.status.toLowerCase() === status.toLowerCase());
  }

  // 🔃 Sorting
  if (sort) {
    const isDescending = sort.startsWith('-');
    const sortField = isDescending ? sort.slice(1) : sort;

    filtered.sort((a, b) => {
      const aVal = a[sortField]?.toLowerCase?.() || '';
      const bVal = b[sortField]?.toLowerCase?.() || '';

      if (aVal < bVal) return isDescending ? 1 : -1;
      if (aVal > bVal) return isDescending ? -1 : 1;
      return 0;
    });
  }

  // 📄 Pagination
  const totalUsers = filtered.length;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const results = filtered.slice(startIndex, endIndex);

  res.json({
    page,
    limit,
    totalUsers,
    totalPages: Math.ceil(totalUsers / limit),
    data: results
  });
});

app.listen(3000, () => {
  console.log('✅ Server running on http://localhost:3000');
});
```


## **Prevent multiple API calls Ignore or block duplicates**.


**Node.js**

**1.Debounce / Ignore If In Progress (Per User)**

Use an **in-memory map** to track active payment requests per user or session.

```ts
// paymentController.ts
const paymentInProgress = new Map<string, boolean>();

app.post('/pay', async (req, res) => {
  const userId = req.body.userId;

  if (paymentInProgress.get(userId)) {
    return res.status(429).json({ message: 'Payment already in progress' });
  }

  paymentInProgress.set(userId, true);

  try {
    // simulate payment processing
    await processPayment(req.body);

    res.json({ message: 'Payment successful' });
  } catch (err) {
    res.status(500).json({ message: 'Payment failed' });
  } finally {
    paymentInProgress.set(userId, false);
  }
});
```

> ✅ Works per user. Replace `userId` with session or IP if needed.

---

**2. Use Unique Transaction ID (Idempotency Key)**

Let frontend send a `transactionId` or `idempotencyKey` with the request and store the result on the backend.

```ts
const processedTransactions = new Set<string>();

app.post('/pay', async (req, res) => {
  const key = req.body.idempotencyKey;

  if (processedTransactions.has(key)) {
    return res.status(409).json({ message: 'Duplicate payment attempt' });
  }

  processedTransactions.add(key);

  try {
    await processPayment(req.body);
    res.json({ message: 'Payment processed' });
  } catch (err) {
    res.status(500).json({ message: 'Payment error' });
    processedTransactions.delete(key); // allow retry
  }
});
```

> ✅ Can also be persisted in DB for robustness and horizontal scaling.

---

### 🔸 3. **Lock Using Redis (For Multiple Servers)**

If running multiple Node.js instances, use a **Redis lock**.

```ts
// Using 'redlock' package
const Redlock = require('redlock');
const redis = require('ioredis');
const redlock = new Redlock([new redis()]);

app.post('/pay', async (req, res) => {
  const userKey = `lock:user:${req.body.userId}`;

  try {
    const lock = await redlock.acquire([userKey], 5000);

    await processPayment(req.body);

    await lock.release();
    res.json({ message: 'Payment successful' });
  } catch (e) {
    res.status(429).json({ message: 'Payment is already processing' });
  }
});
```



### useWindowWidth – Track window width
```jsx
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

// Usage:
function App() {
  const width = useWindowWidth();
  return <p>Window width: {width}px</p>;
}
```


---
### useFetch – Generic fetch logic
```jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (isMounted) {
          setData(data);
          setLoading(false);
        }
      });

    return () => { isMounted = false };
  }, [url]);

  return { data, loading };
}

// Usage:
function Posts() {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');
  if (loading) return <p>Loading...</p>;
  return <ul>{data.slice(0, 5).map(post => <li key={post.id}>{post.title}</li>)}</ul>;
}
```

---
### useToggle – Toggle a boolean


```jsx

function useToggle(initial = false) {
  const [state, setState] = useState(initial);
  const toggle = () => setState(prev => !prev);
  return [state, toggle];
}

// Usage:
function ToggleExample() {
  const [on, toggle] = useToggle();
  return <button onClick={toggle}>{on ? 'ON' : 'OFF'}</button>;
}
```

---




### usePrevious – Track previous value
```jsx
import { useRef, useEffect } from 'react';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// Usage:
function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return (
    <>
      <p>Now: {count}, Before: {prevCount}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </>
  );
}
```

---


### Memoize


```js
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const slowAdd = (a, b) => {
  console.log('Computing...');
  return a + b;
};

const memoizedAdd = memoize(slowAdd);

console.log(memoizedAdd(1, 2)); // Computing... 3
console.log(memoizedAdd(1, 2)); // From cache: 3
```


## ForEach
```js
Array.prototype.myForEach = function (callback, thisArg) {
  if (this == null) throw new TypeError('Array is null or undefined');
  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

  const arr = Object(this);         // In case it's not a real array
  const len = arr.length >>> 0;     // Ensure length is a valid uint32

  for (let i = 0; i < len; i++) {
    if (i in arr) {
      callback.call(thisArg, arr[i], i, arr);  // ✅ thisArg becomes 'this' inside callback
    }
  }
};


[1, 2, 3].myForEach(function (value, index, array) {
  console.log('Value:', value, 'Index:', index, 'Array:', array);
});


const context = { prefix: 'Num' };
[10, 20, 30].myForEach(function (val, idx) {
  console.log(`${this.prefix} ${idx} = ${val}`);
}, context);

```




### **Simple HTTP Server**

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js server!\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

---

### **File Read**

```js
const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file', err);
    return;
  }
  console.log('File content:', data);
});
```

---

### **Promise**

```js
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(1000).then(() => {
  console.log('Executed after 1 second');
});
```

---

### **EventEmitter**

```js
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.emit('greet', 'Vignesh');
```

---

### **Custom Middleware**

```js
const express = require('express');
const app = express();

const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(loggerMiddleware);

app.get('/', (req, res) => {
  res.send('Middleware Example');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

### **Async/Await with API Call**

```js
const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://api.github.com');
    console.log(response.data);
  } catch (error) {
    console.error('API error:', error);
  }
}

fetchData();
```

---

### **REST API Route**

```js
const express = require('express');
const app = express();

app.use(express.json());

app.post('/user', (req, res) => {
  const { name, age } = req.body;
  res.status(201).send(`User ${name} created, age: ${age}`);
});

app.listen(4000, () => console.log('Server on 4000'));
```

### **REST API Query parameters**

```js
const express = require('express');
const app = express();

app.get('/add', (req, res) => {
  const { a, b } = req.query;

  // Check if both a and b are provided
  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: 'Missing required query parameters: a and b' });
  }

  // Validate if both are numbers
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Query parameters must be valid numbers' });
  }

  const sum = Number(a) + Number(b);
  res.json({ result: sum });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```
