• [Nested Property – Filter](#nested-property-filter)  • [Nested Property Update Without Mutation](#nested-property-update-without-mutation)

• [Nested Object – Flatten](#nested-object-flatten)  • [Nested Property – Sort](#nested-property-sort)

• [Nested – Find Deepest Key Path](#nested-find-deepest-key-path)  • [Nested Objects – Recursive Merge of Two](#nested-objects-recursive-merge-of-two)

• [Nested Array of Objects – Extract Fields](#nested-array-of-objects-extract-fields) 

• [Array of Objects into a Lookup Object](#array-of-objects-into-a-lookup-object)

• [Merge Two Arrays by ID](#merge-two-arrays-by-id) • [Remove Keys Based on Condition](#remove-keys-based-on-condition)

• [Convert Object to Query String](#convert-object-to-query-string)  • [Convert Flat List to Tree Structure](#convert-flat-list-to-tree-structure)

• [Extract Unique Values by Key](#extract-unique-values-by-key)  • [Remove Duplicates by Value](#remove-duplicates-by-value)

• [Custom `map()` for Objects](#custom-map-for-objects)  • [Chainable Data Transform Utility](#chainable-data-transform-utility)

• [Transform Data Based on External Schema](#transform-data-based-on-external-schema)  • [Invert Key-Value Pairs](#invert-key-value-pairs)

• [Group Products by Key then Count](#group-products-by-key-then-count)  • [Grouping Key](#key-grouping)  • [Key Renaming](#key-renaming)  














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







