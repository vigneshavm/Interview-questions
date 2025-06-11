


## **Deep Property Update Without Mutation**

You have the following object:

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


> **Follow-up**: How would you achieve the same with a utility like `lodash` or `immer`?

Great question! Both `lodash` and `immer` offer elegant solutions to deep updates **without mutating** the original object.

---

### ✅ **Using `lodash` (`_.set` with `cloneDeep`)**

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

> ✅ `_.set` modifies in place, so we clone first using `_.cloneDeep`.

---

### ✅ **Using `immer`**

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

> ✅ `immer` creates a proxy, tracks changes, and returns a new updated object.

---

### 🔍 Summary:

| Method   | Pros                              | Cons                                |
| -------- | --------------------------------- | ----------------------------------- |
| Spread   | Native, no deps                   | Verbose for deep objects            |
| `lodash` | Easy path updates                 | Needs `cloneDeep` to avoid mutation |
| `immer`  | Clean syntax, minimal boilerplate | Slightly larger dependency          |

Let me know if you'd like a reusable helper function for deep updates without dependencies.


---

#### **Q2: Dynamic Key Renaming**

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

---

#### **Q3: Filter Nested Properties**

You have:

```js
const employees = [
  { id: 1, name: 'Alice', role: 'Developer', location: { city: 'NY' } },
  { id: 2, name: 'Bob', role: 'Tester', location: { city: 'LA' } },
  { id: 3, name: 'Charlie', role: 'Developer', location: { city: 'NY' } },
];
```

**Task**: Filter only developers in `'NY'`.

---

#### **Q4: Grouping by Key**

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

---

#### **Q5: Convert Array of Objects into a Lookup Object**

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

---

#### **Q6: Merge Two Arrays by ID**

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

---

#### **Q7: Flatten a Nested Object**

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

---

#### **Q8: Remove Keys Based on Condition**

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

---

#### **Q9: Convert Object to Query String**

```js
const input = {
  name: 'Alice',
  age: 25,
  city: 'New York'
};
```

**Output:**
`"name=Alice&age=25&city=New%20York"`

---

#### **Q10: Transform and Sort Based on Nested Value**

Input:

```js
const students = [
  { id: 1, name: 'Sam', scores: { math: 80, eng: 70 } },
  { id: 2, name: 'John', scores: { math: 90, eng: 60 } }
];
```

**Task**: Return sorted list by math score descending.

---

### 🧠 Bonus: Functional Programming/Immutability

* What is the benefit of immutability in JavaScript object manipulation?
* Difference between `map()`, `forEach()`, and `reduce()` when working with objects?
* How would you deep clone an object with circular references?

---

Absolutely! Here are **additional advanced JavaScript questions** based on **object/array transformation, filtering, and mutation**, ideal for a **10+ years experienced developer** interviewing at EPAM or similar firms.

---

### 🔁 Advanced JS Data Structure Questions (More)

---

#### **Q11: Convert Flat List to Tree Structure**

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

---

#### **Q12: Extract Unique Values by Key from Array of Objects**

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

---

#### **Q13: Find Deepest Nested Key Path**

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

---

#### **Q14: Remove Duplicates from Array of Objects by Value**

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

> Must be immutable and optimized for performance.

---

#### **Q15: Recursive Merge of Two Nested Objects**

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

---

#### **Q16: Custom `map()` for Objects**

Implement your own `mapObject()` function:

```js
mapObject({ a: 1, b: 2 }, (key, value) => [key.toUpperCase(), value * 2])
```

**Output:**

```js
{ A: 2, B: 4 }
```

---

#### **Q17: Chainable Data Transform Utility**

Design a utility that can chain `.filter()`, `.map()`, `.reduce()` over arrays like:

```js
chain(data)
  .filter(x => x.active)
  .map(x => x.name)
  .value();
```

---

#### **Q18: Transform Data Based on External Schema**

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

---

#### **Q19: Invert Key-Value Pairs**

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

---

#### **Q20: Extract Fields from Nested Array of Objects**

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

---

