

##  MongoDB vs  Relational Databases

MongoDB is a **NoSQL, document-oriented database**. It stores data in flexible, JSON-like documents instead of rows and columns.


| Feature              | MongoDB                     | Relational DB (RDBMS)        |
|----------------------|-----------------------------|------------------------------|
| Data Format          | BSON (Binary JSON)          | Tables with rows & columns   |
| Schema               | Schema-less / dynamic       | Strict schema                |
| Joins                | Limited (via `$lookup`)     | Native JOIN support          |
| Scalability          | Horizontal (sharding)       | Mostly vertical              |
| Transactions         | Available since v4.0        | Built-in                     |

---

## MongoDB Document

A **document** is the basic unit of data in MongoDB. It's a JSON-like object made of key-value pairs.

```js
{
  _id: 1,
  name: "Alice",
  age: 28,
  email: "alice@example.com"
}
```

Each document can have a different structure — no strict schema.

---

## Collection

A **collection** is a group of related documents. It's similar to a table in RDBMS, but without a fixed schema.

```js
db.users.insertOne({ name: "John", age: 30 })
```

Here, `users` is the collection name.

---

## Data Storage Format in MongoDB

Data is stored in **BSON** (Binary JSON) format, which is optimized for speed and supports additional data types.

- Efficient binary encoding
- Supports types like `Date`, `ObjectId`, `Binary`
- Faster traversal and indexing

---

##  _id Field

Each MongoDB document automatically gets an `_id` field, which acts as a **primary key**.

```js
{
  _id: ObjectId("624bc..."),
  name: "Ravi"
}
```

You can also assign your own custom `_id`:

```js
db.users.insertOne({ _id: "user123", name: "Raj" })
```

---

## find() vs findOne()

- `find()` returns **all matching documents** (cursor).
- `findOne()` returns **the first matching document**.

```js
db.users.find({ age: { $gt: 25 } })     // All users older than 25

db.users.findOne({ age: { $gt: 25 } })  // First match only
```

---

## Supported Data Types

MongoDB supports many BSON types:

- `String`
- `Number` (Int32, Int64, Double)
- `Boolean`
- `Date`
- `Array`
- `Object`
- `Null`
- `ObjectId`
- `Binary`
- `Timestamp`
- `Decimal128`

```js
{
  name: "Anu",
  age: 24,
  isVerified: true,
  hobbies: ["reading", "coding"],
  createdAt: new Date()
}
```

---

## BSON vs JSON

**BSON** (Binary JSON) is a binary-encoded format used by MongoDB to store documents.

| Feature     | BSON                            | JSON                      |
|-------------|----------------------------------|---------------------------|
| Format      | Binary                          | Text-based                |
| Speed       | Faster to parse in MongoDB      | Slower                    |
| Data Types  | Supports extra types (Date, Bin) | Limited (string, number) |
| Size        | Slightly larger                 | Compact                   |

> MongoDB uses BSON internally for better performance and rich data types.

---



## Creating an Index in MongoDB
**Answer:** Use the `createIndex()` method to improve query performance.

```js
db.users.createIndex({ email: 1 })  // Ascending index on email
```

---

### Types of Indexes in MongoDB
**Answer:**

| Index Type        | Description                                     |
|-------------------|-------------------------------------------------|
| Single Field      | Index on one field                              |
| Compound          | Index on multiple fields                        |
| Multikey          | Indexes arrays                                  |
| Text              | For text search in strings                      |
| Hashed            | Hash-based, used for sharding                   |
| Geospatial        | For location-based data (`2d`, `2dsphere`)      |
| Wildcard (`$**`)  | Indexes all fields or dynamic fields            |

---


## Performing Aggregations in MongoDB


**✅ Answer:**  
- Aggregation in MongoDB is used to process data and return computed results, similar to SQL `GROUP BY` and other data transformations. 
- MongoDB provides the **aggregation pipeline** to perform complex transformations and computations.
- The **aggregation pipeline** is a series of stages that process documents. Each stage transforms the document and passes it to the next stage.

Basic Syntax:

```js
db.collection.aggregate([
  { stage1 },
  { stage2 },
  { stage3 },
  ...
])
```

## Common Aggregation Stages:

1. **`$match`** – Filters documents to pass only those that match the specified condition(s).
   - Similar to a `WHERE` clause in SQL.

   ```js
   db.orders.aggregate([
     { $match: { status: "shipped" } }
   ])
   ```

2. **`$group`** – Groups documents by some identifier and performs aggregation on them (e.g., sum, average).
   - Similar to `GROUP BY` in SQL.

   ```js
   db.orders.aggregate([
     { $group: { _id: "$customerId", totalAmount: { $sum: "$amount" } } }
   ])
   ```

3. **`$sort`** – Sorts documents by a specified field.

   ```js
   db.orders.aggregate([
     { $sort: { totalAmount: -1 } }
   ])
   ```

4. **`$project`** – Used to reshape the documents by including, excluding, or adding new fields.

   ```js
   db.orders.aggregate([
     { $project: { orderId: 1, customerId: 1, totalAmount: 1 } }
   ])
   ```

5. **`$limit`** – Limits the number of documents returned.

   ```js
   db.orders.aggregate([
     { $limit: 5 }
   ])
   ```

6. **`$skip`** – Skips a specified number of documents.

   ```js
   db.orders.aggregate([
     { $skip: 10 }
   ])
   ```

7. **`$unwind`** – Deconstructs an array field from the input document to output a document for each element in the array.

   ```js
   db.orders.aggregate([
     { $unwind: "$items" }
   ])
   ```

8. **`$lookup`** – Performs a left outer join to combine documents from two collections.

   ```js
   db.orders.aggregate([
     { $lookup: {
         from: "customers",
         localField: "customerId",
         foreignField: "_id",
         as: "customerDetails"
     }}
   ])
   ```

9. **`$addFields`** – Adds new fields to the documents.

   ```js
   db.orders.aggregate([
     { $addFields: { discountAmount: { $multiply: ["$totalAmount", 0.1] } } }
   ])
   ```



```js
db.orders.aggregate([
  { $match: { status: "shipped" } },  // Filter for shipped orders
  { $group: { _id: "$customerId", totalAmount: { $sum: "$amount" } } },  // Group by customerId
  { $sort: { totalAmount: -1 } },  // Sort by totalAmount in descending order
  { $limit: 5 }  // Get top 5 customers
])
```

## Aggregation Operators:
- **`$sum`** – Sums values.
- **`$avg`** – Averages values.
- **`$min`** – Returns the minimum value.
- **`$max`** – Returns the maximum value.
- **`$push`** – Creates an array of values.

---



---

## `$lookup` stage in aggregation and how is it used for joins?
**Answer:** `$lookup` joins documents from another collection, similar to SQL joins.

```js
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customerId",
      foreignField: "_id",
      as: "customerInfo"
    }
  }
])
```

---

## Model relationships (one-to-one, one-to-many, many-to-many) in MongoDB?
**Answer:**

| Type           | Description                       | Approach             |
|----------------|-----------------------------------|----------------------|
| One-to-One     | User ↔ Profile                    | Embedded or Ref      |
| One-to-Many    | Blog ↔ Comments                   | Embed or Ref IDs     |
| Many-to-Many   | Students ↔ Courses                | Array of IDs in both |

```js
// One-to-Many Referencing Example
{ _id: 1, title: "Post A", commentIds: [101, 102] }
{ _id: 101, content: "Nice!" }
```

---

## Embedded and Referenced documents?
**Answer:**

| Feature       | Embedded                         | Referenced                        |
|---------------|----------------------------------|-----------------------------------|
| Structure     | Nested within parent             | Separate collection with linkage  |
| Performance   | Faster reads                     | Slower, needs additional query    |
| Flexibility   | Less flexible                    | Highly flexible                   |

```js
// Embedded
{ name: "John", address: { city: "Hyd", pin: 500001 } }

// Referenced
{ _id: 1, name: "John", addressId: 101 }
```

---

## Capped collection in MongoDB?
**Answer:** A **capped collection** is a fixed-size, high-performance collection like a circular queue.

```js
db.createCollection("logs", { capped: true, size: 100000 })
```

---

## MongoDB handle schema enforcement?
**Answer:** MongoDB is **schema-less by default**, but schema validation can be added via **JSON Schema**.

```js
db.createCollection("products", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "price"],
      properties: {
        name: { bsonType: "string" },
        price: { bsonType: "number" }
      }
    }
  }
})
```

---

## Update multiple documents in MongoDB?
**Answer:** Use the `updateMany()` method.

```js
db.users.updateMany(
  { country: "India" },
  { $set: { active: true } }
)
```

---

## updateOne(), updateMany(), and replaceOne()
**Answer:**

| Method         | Description                          | Example                              |
|----------------|--------------------------------------|--------------------------------------|
| `updateOne()`   | Updates the first matching document  | `{ $set: { age: 30 } }`              |
| `updateMany()`  | Updates all matching documents       | `{ $set: { verified: true } }`       |
| `replaceOne()`  | Replaces an entire document          | `{ name: "Raj", age: 25 }`           |

```js
db.users.updateOne({ name: "Raj" }, { $set: { age: 30 } })
db.users.updateMany({ country: "IN" }, { $set: { verified: true } })
db.users.replaceOne({ _id: 1 }, { name: "Anu", age: 24 }) // full replace
```

---
```



## **Scaling MongoDB**:
  - **Vertical Scaling**: Adding more resources (CPU, memory) to a single server.
  - **Horizontal Scaling**: Using **sharding** to distribute data across multiple servers.

## Clustering & Replication**:
  - **Replica Set**: Maintains multiple copies of data for high availability.
  - **Sharding**: Distributes data across multiple nodes for scalability.

## Difference Between `$in` and `$all` in MongoDB**:
- `$in`: Matches if the value is in the provided array.
- `$all`: Matches if the value contains all of the provided elements in the array.

## Searching in MongoDB**:
```js
db.collection.find({ $text: { $search: "searchText" } });
```

## **Databases for a Social Media App**
- **MongoDB** is a good fit for unstructured or semi-structured data (large-scale).


---

## Sharding and Why is it Used?

**Concept:**  
Sharding is horizontal partitioning of data across multiple machines for high scalability.

**Why it's used:**
- To handle large data volumes
- Distributes read/write load

**Example:**
```js
sh.enableSharding("myDatabase")
sh.shardCollection("myDatabase.users", { userId: 1 })
```

---

## Replication and How Failover Works in MongoDB

**Concept:**  
Replication copies data across multiple servers for redundancy and high availability.

- One primary node (read/write)
- Multiple secondary nodes (replicas)
- Auto-failover to secondary if primary fails

**Example:**
```js
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "mongo1:27017" },
    { _id: 1, host: "mongo2:27017" },
    { _id: 2, host: "mongo3:27017" }
  ]
})
```

---

## Replica Set?

**Concept:**  
A replica set is a group of MongoDB servers that replicate data.

- One primary
- Multiple secondaries
- Self-healing and high-availability system

---

## Handle Transactions in MongoDB? (v4.0+)

**Concept:**  
MongoDB supports ACID-compliant transactions across multiple documents.

**Example:**
```js
const session = db.getMongo().startSession();
session.startTransaction();
try {
  db.users.updateOne({ _id: 1 }, { $inc: { balance: -100 } }, { session });
  db.accounts.updateOne({ _id: 2 }, { $inc: { balance: 100 } }, { session });
  session.commitTransaction();
} catch (error) {
  session.abortTransaction();
}
```

---

## Write Concerns and Read Preferences

**Write Concern:**  
Specifies acknowledgment level for write operations (e.g., `w: 1`, `w: majority`).

**Read Preference:**  
Controls where read queries go (e.g., `primary`, `secondaryPreferred`).

**Example:**
```js
db.collection.insertOne({ x: 1 }, { writeConcern: { w: "majority" } })
db.collection.find().readPref("secondaryPreferred")
```

---

## Performance Tuning Techniques in MongoDB?

**Tips:**
- Use proper indexes
- Avoid full collection scans
- Use projection to limit fields
- Avoid large documents
- Use `allowDiskUse` in aggregation

**Index Example:**
```js
db.products.createIndex({ category: 1, price: -1 })
```

---

## Handle Large File Storage in MongoDB? (GridFS)

**Concept:**  
GridFS stores files >16MB by splitting into chunks.

- Metadata in `fs.files`
- File chunks in `fs.chunks`

**Upload Example:**
```bash
mongofiles -d mydb put video.mp4
```

---

## MongoDB Ensure Durability and Consistency?

- **Durability:** Journaling, replica sets, write concern
- **Consistency:** Transactions & atomic operations per document

---

## CAP Theorem in MongoDB Context

**CAP Theorem:**
- **C**onsistency
- **A**vailability
- **P**artition Tolerance

MongoDB is **CP by default**, with options to tune for **AP** using read preferences.

---

## Limitations of MongoDB and How to Overcome Them?

| Limitation                       | Solution                              |
|----------------------------------|----------------------------------------|
| 16MB Document Limit              | Use GridFS                            |
| No Native Joins (before $lookup) | Use `$lookup`, embed docs             |
| Eventual Consistency in Shards  | Use write concern: `majority`         |
| Limited Indexes per Collection  | Use compound indexes wisely           |
| Aggregation Memory Limit        | Use `allowDiskUse: true`              |

---





## MongoDB with Node.js


- Using the official MongoDB Node.js driver or an ODM like Mongoose. Example (using Mongoose):

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
```

---

## `useNewUrlParser` and `useUnifiedTopology` in Mongoose?


- These are options to handle MongoDB's newer connection logic:
- `useNewUrlParser`: Parses MongoDB connection strings using the new parser.  
- `useUnifiedTopology`: Enables the new unified topology layer for monitoring servers.

---

## 3. Mongoose Vs  MongoDB native driver?


- **Mongoose** is an ODM (Object Document Mapper) that provides schema, models, and built-in validation.  
- **MongoDB native driver** is low-level, offering direct access to the database. It is more flexible but less structured.
```
