

 | **Category**                 | **Topics**                                                                                                                                           |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Basics & Core Concepts**  | [MongoDB vs Relational Databases](#mongodb-vs--relational-databases) - [MongoDB Document](#mongodb-document) - [Collection](#collection) - [Data Storage Format in MongoDB](#data-storage-format-in-mongodb) - [_id Field](#id-field) - [Supported Data Types](#supported-data-types) - [BSON vs JSON](#bson-vs-json) |
| **Querying**                | [find() vs findOne()](#find-vs-findone) - [$in Vs $all](#difference-between-in-and-all-in-mongodb) - [Searching in MongoDB](#searching-in-mongodb)                              |
| **Indexing**                | [Index](#creating-an-index-in-mongodb) - [Indexing strategies](#indexing-strategies) - [Indexing Drawbacks](#indexing-drawbacks) - [Multikey and Compound indexes](#Multikey-and-Compound-indexes) - [Compound Indexes](#Compound-Indexes) |
| **CRUD Operations**         | [upsert](#upsert) - [Update Multiple Documents](#update-multiple-documents-in-mongodb) - [updateOne(), updateMany(), replaceOne()](#updateone-updatemany-and-replaceone)        |
| **Relationships & Schema**  | [Modeling patterns](#Modeling-patterns) - [Model Relationships](#model-relationships) - [Embedded and Referenced Documents](#embedded-and-referenced-documents) - [Schema Enforcement](#mongodb-handle-schema-enforcement) |
| **Advanced Features**       | [Aggregations in MongoDB](#aggregations-in-mongodb) - [Aggregate examples](#Aggregate-examples) - [Handle Transactions in MongoDB](#handle-transactions-in-mongodb) - [Large File Storage (GridFS)](#handle-large-file-storage-in-mongodb-gridfs) |
| **Scaling & Performance**   | [Sharding](#Sharding) - [Scaling MongoDB](#scaling-mongodb) - [Performance Tuning Techniques in MongoDB](#performance-tuning-techniques-in-mongodb)                             |
| **Replication & Durability**| [Replica Set](#replica-set) - [Clustering & Replication](#clustering--replication) - [Replication and How Failover Works in MongoDB](#replication-and-how-failover-works-in-mongodb) - [Durability & Consistency](#mongodb-ensure-durability-and-consistency) - [Write Concerns & Read Preferences](#write-concerns-and-read-preferences) |
| **Special Collections**     | [Capped Collection in MongoDB](#capped-collection-in-mongodb)                                                                                         |
| **MongoDB with Node.js**    | [MongoDB with Node.js](#mongodb-with-nodejs) - [useNewUrlParser & useUnifiedTopology in Mongoose](#usenewurlparser-and-useunifiedtopology-in-mongoose) - [Mongoose vs MongoDB Native Driver](#mongoose-vs--mongodb-native-driver) |
| **Limitations & Considerations** | [Limitations of MongoDB and How to Overcome Them](#limitations-of-mongodb-and-how-to-overcome-them) -[Key Limitations](#Key-Limitations)  - [Databases for a Social Media App](#databases-for-a-social-media-app)                                                                                 |
| **Other Topics**            | [CAP Theorem](#CAP-Theorem) - [Time Series](#Time-Series) - [ACID properties](#ACID-properties) - [Two-Phase Commit](#Two-Phase-Commit) - [Handling large datasets efficiently in MongoDB](#Handling-large-datasets-efficiently-in-MongoDB) - [Scenario Based Questions](#Scenario-Based-Questions) - [SQL feature by feature](#feature-by-feature)
|



---






## CAP Theorem


- MongoDB follows the **CAP Theorem**, which states that in a distributed system, we can only guarantee **two out of three** properties at any given time:

-  **Consistency (C)** – Every read receives the most recent write
- **Availability (A)** – Every request gets a response (success or failure)
- **Partition Tolerance (P)** – The system continues to operate despite network failures

-  MongoDB is **CP by default**, with options to tune for **AP** using read preferences.


#### 📌 MongoDB as CP or AP:

* **By default, MongoDB is CP (Consistency + Partition Tolerance)** in a partitioned network.

  * It prioritizes **data consistency** over availability.
  * If a **primary node is unreachable**, MongoDB will not accept writes until a new primary is elected — ensuring no stale data is written.

#### 🔁 Tunable Consistency:

* MongoDB offers **tunable consistency** and **write concerns**:

  * You can configure **read preference** (e.g., `primary`, `primaryPreferred`, `secondary`) and **write concern** (e.g., `majority`) to balance between **C and A** based on your use case.

#### 🧠 Example:

> In a replicated setup, if a network partition occurs:
>
> * **MongoDB blocks writes** until a new primary is elected (favoring **Consistency**)
> * Clients may receive errors during this time (sacrificing **Availability**)

---

### 📝 Conclusion:

> So, MongoDB is generally considered a **CP system** under CAP theorem, with options to **tune between C and A** depending on your application's needs.

---





## Time Series
 - **Time Series Data in MongoDB** is a **first-class feature** introduced in **MongoDB 5.0** (and enhanced in 5.1+).
 - It allows you to efficiently store and query time-based data (e.g., IoT data, sensor readings, stock prices, logs) using **optimized internal storage**.
 - Data where each entry is associated with a **timestamp**, typically ordered chronologically.
    Examples:
        * Temperature readings every second
        * Stock prices every minute
        * Server logs with timestamps

---

### 🧰 MongoDB Time Series Collections

MongoDB provides **time series collections** to:

* Optimize storage
* Improve query performance
* Reduce indexing and I/O overhead

---

### ✅ How to Create a Time Series Collection

```js
db.createCollection("sensorData", {
  timeseries: {
    timeField: "timestamp",       // Required: Field that stores time
    metaField: "deviceId",        // Optional: Metadata (e.g., sensor ID)
    granularity: "seconds"        // Can be "seconds", "minutes", or "hours"
  }
})
```

* **`timeField`**: Required. Stores the timestamp.
* **`metaField`**: Optional. Groups time series data by metadata (like a device or user).
* **`granularity`**: Optional. Hints at frequency (improves compression and performance).

---

### 📥 Example Document

```json
{
  "timestamp": ISODate("2025-05-28T10:00:00Z"),
  "deviceId": "sensor-42",
  "temperature": 26.5,
  "humidity": 68
}
```

---

### 📈 Querying Time Series Data

Query by timestamp range:

```js
db.sensorData.find({
  timestamp: {
    $gte: ISODate("2025-05-28T00:00:00Z"),
    $lt: ISODate("2025-05-29T00:00:00Z")
  }
})
```

Group and aggregate (e.g., average temperature per hour):

```js
db.sensorData.aggregate([
  {
    $group: {
      _id: {
        hour: { $hour: "$timestamp" }
      },
      avgTemp: { $avg: "$temperature" }
    }
  }
])
```

---

### 🚀 Benefits of MongoDB Time Series Collections

* **Highly compressed internal schema**
* **Optimized for inserts and range queries**
* **Built-in support for automatic bucketing**
* **Indexing on `metaField` and `timeField`**

---

### ⚠️ Limitations (as of MongoDB 6.0+)

* Documents **must be inserted in order** of timeField (monotonic increasing).
* No support for updates that change the `timeField`.
* TTL (Time-To-Live) works, but needs to be configured.

---

### 🛠️ TTL on Time Series Collections

Expire old data automatically:

```js
db.createCollection("sensorData", {
  timeseries: {
    timeField: "timestamp"
  },
  expireAfterSeconds: 86400  // Expire documents after 24 hours
})
```

---

### 🔚 Summary

| Feature                | Support in MongoDB      |
| ---------------------- | ----------------------- |
| Native time series     | ✅ Since MongoDB 5.0     |
| Efficient storage      | ✅ Compressed buckets    |
| Fast inserts & queries | ✅ Optimized performance |
| TTL support            | ✅ For auto-expiry       |
| Metadata grouping      | ✅ Via `metaField`       |

Would you like a sample Node.js script or MongoDB Compass steps for this?






## Sharding



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

**Sharding** is MongoDB’s method for **horizontally scaling** your database to handle **large amounts of data and high throughput** by **distributing data across multiple servers**.

---

### What is Sharding?

Sharding = **Splitting data** across **multiple machines (shards)** to:

* Handle **more data than fits on one server**
* Improve **read/write performance**
* Ensure **high availability** and **scalability**

---

### 🛠️ Key Components of Sharding

| Component          | Description                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| **Shard**          | A MongoDB server that holds a portion of the data (can be a replica set) |
| **Mongos**         | Query router that routes queries to the correct shard(s)                 |
| **Config Servers** | Store metadata about the cluster and sharded collections                 |

---

### 🧭 How Sharding Works

1. **Choose a collection to shard**
2. **Pick a shard key** (a field used to determine how data is split)
3. MongoDB **splits data into chunks** based on the shard key
4. Each chunk is assigned to a shard

---

### 🔑 Shard Key

The **most important part** of sharding. The right shard key ensures **even distribution** and **query efficiency**.

#### Good Shard Key:

* High **cardinality** (many unique values)
* Even **distribution** across shards
* Frequently used in queries

#### Bad Shard Key:

* Low cardinality (e.g., `gender`)
* Monotonically increasing (e.g., `timestamp` without hashing) → can cause **hotspots**

---

### 📦 Sharding Strategies

1. **Range-Based Sharding**

   * Documents with nearby values go to the same shard.
   * Risk: **Hotspots** if most writes go to one range.

2. **Hashed Sharding**

   * MongoDB hashes the shard key value → even distribution.
   * Best for **uniform write distribution**, not ideal for range queries.

3. **Zone Sharding (Tag Aware)**

   * Assign certain ranges of shard keys to specific shards.
   * Good for **geographically aware** or **regulatory partitioning**.

---

### ✅ Pros of Sharding

* Scales **reads/writes horizontally**
* Can store **massive data** sets
* Supports **geographically distributed workloads**
* Increases **availability** with replica sets in shards

---

### ⚠️ Challenges with Sharding

* Must **choose the shard key carefully**
* Complexity in setup and maintenance
* Certain operations like **joins** or **multi-document transactions** are more complex across shards

---

### 🧪 Example Setup

```js
// Enable sharding on database
sh.enableSharding("mydb")

// Shard a collection
sh.shardCollection("mydb.users", { userId: "hashed" })
```

---

### 🧠 Summary

| Feature        | Description                                 |
| -------------- | ------------------------------------------- |
| Sharding       | Horizontal partitioning of data             |
| Shard Key      | Field used to distribute data across shards |
| Mongos         | Routes client queries to the right shard(s) |
| Config Servers | Store metadata for sharded cluster          |
| Best for       | Big data, high traffic, distributed systems |

---


### 📦 Real-World Use Case: E-commerce Platform

### Scenario:

An e-commerce app has a `Orders` collection that stores millions of orders. Each document includes:

```json
{
  "orderId": "ORD123456",
  "userId": "USR7890",
  "productId": "PRD456",
  "orderDate": "2025-05-27T14:23:00Z",
  "amount": 2999,
  "status": "delivered"
}
```

### ❓Problem:

* Orders keep growing → DB size exceeds server capacity
* High traffic → write operations becoming a bottleneck
* Need to **scale horizontally** and ensure **high availability**

### ✅ Solution: Use MongoDB **Sharding**

---

### 📈 Diagram of Sharded Cluster

```
                     +-------------------+
                     |     Application   |
                     +--------+----------+
                              |
                              v
                        +-----------+
                        |   mongos  |  <-- Query Router
                        +-----+-----+
                              |
          +-------------------+-------------------+
          |                   |                   |
    +-----------+       +-----------+       +-----------+
    | Shard 1   |       | Shard 2   |       | Shard 3   |
    | (replica) |       | (replica) |       | (replica) |
    +-----------+       +-----------+       +-----------+
          ^                   ^                   ^
    +------------+     +------------+     +------------+
    | Config DB1 |     | Config DB2 |     | Config DB3 |
    +------------+     +------------+     +------------+
```

---

### 🛠️ Step-by-Step Setup (Simulation)

Assuming a 3-node sharded cluster is up, here's how you would enable and shard a collection.

### 1. Connect to `mongos`

```bash
mongo --host mongos-host:27017
```

### 2. Enable Sharding on the Database

```js
sh.enableSharding("ecommerce")
```

### 3. Choose a Shard Key

Let's choose `userId` (hashed) for uniform distribution:

```js
sh.shardCollection("ecommerce.orders", { userId: "hashed" })
```

> ✅ Hashed key ensures even writes across shards.

---

### 📊 How Data Is Distributed

MongoDB breaks data into **chunks** (e.g., 64MB) and uses the **shard key** to place each chunk on the appropriate shard.

If 30% of orders belong to one user and you used `userId` as a **non-hashed range key**, you would get a **hotspot**. With **hashed sharding**, writes spread evenly.

---

### 🧪 Sample Query Through `mongos`

```js
db.orders.find({ userId: "USR7890" })
```

> `mongos` routes this to the correct shard(s) based on the shard key value.

---

### 🧠 Tips for Choosing a Shard Key

| Do ✅                              | Avoid ❌                                        |
| --------------------------------- | ---------------------------------------------- |
| Use high-cardinality fields       | Low-cardinality fields                         |
| Use hashed keys for write scaling | Monotonically increasing keys (e.g. timestamp) |
| Choose frequently queried fields  | Rarely used or internal fields                 |

---

### 🔐 Production Tips

* Run shards as **replica sets** for high availability.
* Monitor chunks with `sh.status()` or `db.collection.getShardDistribution()`
* Rebalance data with `balancer` if shards become uneven

---







## Two Phase Commit

The **Two-Phase Commit (2PC)** is a protocol used to ensure **atomicity** (all-or-nothing behavior) for **multi-document** or **distributed transactions** — especially across multiple shards or databases.

---

#### 💡 Why Use Two-Phase Commit?

 - MongoDB (or any DB) doesn’t guarantee atomic writes across **multiple collections** or **shards** by default.
 - To maintain **consistency** across these operations, we use **2PC**.


#### 🧠 Summary

| Feature               | Description                                       |
| --------------------- | ------------------------------------------------- |
| Two-Phase Commit      | Protocol for atomic multi-source operations       |
| Phase 1: Prepare      | Participants prepare and vote                     |
| Phase 2: Commit/Abort | Commit if all agree; otherwise abort              |
| Supported in MongoDB  | Yes (from v4.0 on replica sets, 4.2+ for sharded) |
| Use with Transactions | Yes — `startSession()` and `startTransaction()`   |

---

---

#### 🧩 How Two-Phase Commit Works

2PC has **two phases**:

##### 1. Prepare Phase

##### 2. Commit Phase

Let’s break it down:

---

##### 🥇 Phase 1: Prepare

* The coordinator (usually the app or a controller) sends a **"prepare"** request to all participants (e.g., collections or shards).
* Each participant:

  * Executes the operation **without committing** it.
  * Writes a temporary state like `status: "pending"`.
  * Replies with a "Ready to commit" or "Abort" message.

---

##### 🥈 Phase 2: Commit or Abort

* If **all participants respond OK**, the coordinator sends a **"commit"** command.
* If **any participant fails**, the coordinator sends a **"rollback"** command.
* Participants finalize the operation or discard the changes based on this decision.

---

#### 🧪 Example in MongoDB

Suppose you're transferring money between two collections:

```js
db.accounts.insertMany([
  { _id: "Alice", balance: 100 },
  { _id: "Bob", balance: 50 }
])
```

##### Step 1: Start a Session + Transaction

```js
const session = await client.startSession();
session.startTransaction();
```

##### Step 2: Perform Operations in "prepare" phase

```js
try {
  await db.accounts.updateOne(
    { _id: "Alice" },
    { $inc: { balance: -30 } },
    { session }
  );

  await db.accounts.updateOne(
    { _id: "Bob" },
    { $inc: { balance: 30 } },
    { session }
  );
```

##### Step 3: Commit if all goes well

```js
  await session.commitTransaction();
} catch (e) {
  await session.abortTransaction();
}
finally {
  session.endSession();
}
```

> ✅ MongoDB automatically handles 2PC-like behavior under the hood when using **multi-document transactions** in **replica sets** and **sharded clusters** (MongoDB 4.2+).

---

#### 🔐 Use Cases

| Use Case                           | Why 2PC Helps                        |
| ---------------------------------- | ------------------------------------ |
| Money transfers                    | Avoid partial updates                |
| Booking systems                    | Prevent double booking               |
| Inventory + Order updates          | Consistent state between collections |
| Cross-shard updates (MongoDB 4.2+) | Atomic across multiple shards        |

---

#### ⚠️ Downsides of 2PC

| Drawback             | Details                                           |
| -------------------- | ------------------------------------------------- |
| Performance Overhead | More round trips, locks, and metadata             |
| Complexity           | More moving parts; needs error handling           |
| Blocking             | If a coordinator crashes mid-process, it can hang |

---







## ACID properties

 - **ACID** stands for **Atomicity, Consistency, Isolation, and Durability**. 
 - These are the four key properties that guarantee reliable processing of database transactions.

---

### 🔹 1. Atomicity

* **Relational Databases (RDBMS)**:

  * Transactions are **fully atomic**: all operations within a transaction either succeed or fail together.
  * Example: In PostgreSQL or MySQL, `BEGIN`, `COMMIT`, and `ROLLBACK` control atomic execution.

* **MongoDB**:

  * Originally, MongoDB guaranteed atomicity **only at the document level** (a single document update is atomic).
  * Since **MongoDB 4.0+**, **multi-document ACID transactions** are supported for **replica sets** and **sharded clusters** (since v4.2).

---

### 🔹 2. Consistency

* **RDBMS**:

  * Strong schema enforcement ensures consistency (e.g., foreign keys, constraints).
  * Violations of constraints prevent transaction commits.

* **MongoDB**:

  * Uses **application-level schema enforcement** (via schema validation or tools like Mongoose).
  * Multi-document transactions maintain consistency, but it’s **developer’s responsibility** to ensure logical consistency.

---

### 🔹 3. Isolation

* **RDBMS**:

  * Supports multiple **isolation levels** (Read Uncommitted, Read Committed, Repeatable Read, Serializable).
  * Prevents race conditions, dirty reads, non-repeatable reads.

* **MongoDB**:

  * Multi-document transactions provide **snapshot isolation** using an **"all or nothing" commit** model.
  * Internally uses **write-ahead logs and oplog** to maintain isolation.

---

### 🔹 4. Durability

* **RDBMS**:

  * Once a transaction is committed, data is persisted, even in the event of power failure (via WAL or redo logs).

* **MongoDB**:

  * Ensures durability via **journaling**.
  * `writeConcern` settings allow configuring durability (e.g., `majority`, `w:1`, `w:0`).

---

### 🧠 Summary:

| Property    | RDBMS                    | MongoDB                             |
| ----------- | ------------------------ | ----------------------------------- |
| Atomicity   | Full (multi-statement)   | Document-level; Multi-doc since 4.0 |
| Consistency | Enforced via schema      | Tunable; application-enforced       |
| Isolation   | Various isolation levels | Snapshot isolation in transactions  |
| Durability  | WAL / redo logs          | Journaling, `writeConcern`          |

---

### 📝 Final Statement:

> So while **RDBMS have long supported full ACID compliance**, MongoDB has **evolved** to support **multi-document ACID transactions** while still maintaining the flexibility of its document model — making it suitable for applications that require both high performance and transactional guarantees.

---





## Multikey and Compound indexes
- In MongoDB, **indexes improve query performance**, and two common types are **multikey indexes** and **compound indexes**.
- **multikey indexes** are essential for efficient querying of array fields, 
 - **compound indexes** optimize performance across multiple fields — especially when **field order is aligned** with query patterns. 

---

### 🔹 **Multikey Index**

* A **multikey index** is created when **indexing an array field**.
* MongoDB **automatically creates multiple index entries** per document — one for each element in the array.

#### 🔧 Example:

```js
{ _id: 1, tags: ["mongodb", "nosql", "indexing"] }
```

Creating a multikey index:

```js
db.posts.createIndex({ tags: 1 })
```

> MongoDB will index each tag in the array as a separate key.

#### ⚠️ Constraints:

* You **cannot create a compound multikey index** if **more than one field** in the index is an array.
* Queries that use `$elemMatch` on arrays benefit from multikey indexes.

---

### 🔹 **Compound Index**

* A **compound index** includes **multiple fields** in a single index.
* It supports queries that filter or sort by **any prefix** of the indexed fields.

#### 🔧 Example:

```js
db.orders.createIndex({ customerId: 1, orderDate: -1 })
```

> This index supports queries like:

```js
db.orders.find({ customerId: 123 })
db.orders.find({ customerId: 123 }).sort({ orderDate: -1 })
```

#### ⚠️ Key Point: **Field order matters**

* `{ a: 1, b: 1 } ≠ { b: 1, a: 1 }`
* Only queries starting with `a` (the first field) will benefit from the index.

---

### 🔍 Multikey vs Compound — At a Glance:

| Feature            | Multikey Index                     | Compound Index                     |
| ------------------ | ---------------------------------- | ---------------------------------- |
| Indexed Field Type | Array                              | Multiple scalar fields             |
| Index Entries      | One per array element              | One per document                   |
| Supports Arrays    | Yes (single array field only)      | Yes (if only **one** array field)  |
| Query Use Cases    | `$in`, `$elemMatch`, array matches | Multiple field filtering & sorting |

---






##  Compound Indexes

- In MongoDB, **compound indexes** are indexes that include **multiple fields**, and the **order of the fields is critical** because it defines how the index is used for query optimization.

- In MongoDB, the **sequence of fields in a compound index defines the access pattern**. 
- Indexes are only used when the query starts with the **prefix fields** in the same order, so designing the **right field sequence** is key to maximizing performance.

---

### 🔹 Why Order Matters

Compound indexes support queries based on a **prefix subset** of the fields — starting from the **leftmost field** in the index definition.

#### 🔧 Example:

```js
db.users.createIndex({ country: 1, city: 1, age: -1 })
```

* This index supports:

  * ✅ `find({ country: "India" })`
  * ✅ `find({ country: "India", city: "Chennai" })`
  * ✅ `find({ country: "India" }).sort({ city: 1 })`
* ❌ Does **not** support:

  * `find({ city: "Chennai" })` – Skips the first indexed field
  * `find({ age: 30 })` – Skips both `country` and `city`

> **Field order in the index must match the field order in the query** for MongoDB to use the index efficiently.

---

### 🔄 Choosing the Right Order

When designing compound indexes, choose the field order based on:

1. **Query frequency** – Fields queried most often should come first.
2. **Selectivity** – More selective fields (that reduce result size) should come earlier.
3. **Sort order** – If you also sort on fields, include them in the index in the required order.

---

### 🧠 Summary:

| Index Definition        | Efficient For                               | Not Efficient For     |
| ----------------------- | ------------------------------------------- | --------------------- |
| `{ a: 1, b: 1 }`        | `find({ a: 10 })`, `find({ a: 10, b: 20 })` | `find({ b: 20 })`     |
| `{ a: 1, b: 1, c: -1 }` | Sorting on `a`, `b`, and `c`                | Filtering only on `c` |

---








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


## Indexing Drawbacks
---

### **1. Increased Storage Requirements**
- **Indexes consume disk space**, sometimes as much or more than the actual data.
- Each index is stored separately and takes up additional memory and disk space.
- This can become problematic in large datasets with multiple indexes.

---

### **2. Slower Write Operations (Insert, Update, Delete)**
- Every time a document is written, updated, or deleted, all relevant indexes must be updated too.
- This causes **additional overhead**, especially when multiple indexes are in place.
- Example: Inserting 1 million records with 5 indexes will be **significantly slower** than with 1 or 2 indexes.

---

### **3. Risk of Using Wrong Index**
- MongoDB’s query planner may **choose a suboptimal index**, especially if indexes overlap.
- This can lead to **poor query performance**, worse than a collection scan in some cases.

---

### **4. Indexes Must Be Maintained**
- During bulk imports or frequent schema changes, indexes need to be rebuilt or dropped/re-created.
- Managing indexes across collections with varying access patterns can be complex.

---

### **5. RAM Pressure**
- MongoDB loads index data into RAM. If your working set (data + indexes) exceeds RAM, **page faults** occur.
- This causes performance degradation as MongoDB has to fetch data from disk repeatedly.

---

### **6. Complexity in Index Selection**
- Over-indexing or creating compound indexes without understanding query patterns can **degrade performance**.
- Careful planning is needed to balance between **read optimization** and **write performance**.

---

### **7. Index Build Time**
- For large collections, **creating indexes can be time-consuming**, even if built in the background (`background: true` in older versions or `hidden`/`partial` in newer).
- This might lock operations or slow down the database temporarily.

---

### **8. Doesn't Help with Every Query**
- Indexes don’t help if:
  - Your query doesn’t match the index field order.
  - You’re doing regex or `$where` queries.
  - You’re returning a large portion of the collection anyway.

---



##  Aggregations in MongoDB


** Answer:**  
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

### Common Aggregation Stages:

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

10. **`$lookup`** – joins documents from another collection, similar to SQL join

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

```js
db.orders.aggregate([
  { $match: { status: "shipped" } },  // Filter for shipped orders
  { $group: { _id: "$customerId", totalAmount: { $sum: "$amount" } } },  // Group by customerId
  { $sort: { totalAmount: -1 } },  // Sort by totalAmount in descending order
  { $limit: 5 }  // Get top 5 customers
])
```

### Aggregation Operators:
- **`$sum`** – Sums values.
- **`$avg`** – Averages values.
- **`$min`** – Returns the minimum value.
- **`$max`** – Returns the maximum value.
- **`$push`** – Creates an array of values.

---


---

## Model relationships
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

## Handle Transactions in MongoDB?

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

## Mongoose Vs  MongoDB native driver?


- **Mongoose** is an ODM (Object Document Mapper) that provides schema, models, and built-in validation.  
- **MongoDB native driver** is low-level, offering direct access to the database. It is more flexible but less structured.





## upsert

In **MongoDB**, an **upsert** is a combination of **update** and **insert**:

> If the document **exists**, it gets **updated**.  
> If it **doesn't exist**, a **new document** is **inserted**.



###  Example using Native MongoDB Driver

```js
await db.collection("users").updateOne(
  { email: "user@example.com" },
  { $set: { name: "John Doe" } },
  { upsert: true }
);
```

---

###  `findOneAndUpdate` with Upsert (Mongoose)

If you want to return the **new or updated document**:

```js
const result = await User.findOneAndUpdate(
  { email: "user@example.com" },
  { $set: { name: "John Doe" } },
  { upsert: true, new: true }
);
```

---

### 🔁 Common Use Case:
Saving user profile on login/registration:
```js
await User.updateOne(
  { googleId: profile.id },
  { $set: { name: profile.name, email: profile.email } },
  { upsert: true }
);
```


##  **Indexing strategies**

---

In my experience working with **NoSQL (MongoDB)** and **SQL databases**, indexing has been a crucial tool to improve query performance—especially in high-traffic enterprise applications.

---

###  **1. Single Field Indexes**

I commonly use **single-field indexes** on:

* **Frequently queried fields** (e.g., `userID`, `email`, `status`)
* Fields used in **filter conditions** (`find({ status: 'active' })`)

This drastically reduces scan time and improves response speed.

---

###  **2. Compound Indexes**

When multiple fields are queried together, I use **compound indexes**.

Example (MongoDB):

```js
db.orders.createIndex({ userID: 1, orderDate: -1 })
```

* Helps optimize queries like:
  `db.orders.find({ userID: 123 }).sort({ orderDate: -1 })`

---

###  **3. Unique Indexes**

I use **unique indexes** to ensure data integrity (e.g., for `email`, `username`) and speed up exact-match queries.

Example:

```js
db.users.createIndex({ email: 1 }, { unique: true })
```

---

###  **4. Text Indexes (for Search)**

In scenarios where we implemented **search features**, I used **text indexes** on fields like `title`, `description`.

```js
db.products.createIndex({ title: "text", description: "text" })
```

---

###  **5. Partial Indexes**

For large datasets with frequent filters on specific values (e.g., `status: 'active'`), I used **partial indexes**:

```js
db.bookings.createIndex({ status: 1 }, { partialFilterExpression: { status: 'active' } })
```

This saves storage and speeds up targeted queries.

---

###  **6. TTL Indexes (MongoDB)**

Used for auto-deletion of logs, sessions, OTPs:

```js
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })
```

Improves performance by reducing dataset size over time.

---

###  **7. Covering Indexes**

When queries only need indexed fields, I ensure the index **covers** the query so MongoDB/SQL doesn’t need to fetch full documents/rows.

Example:

```js
db.orders.createIndex({ userID: 1, amount: 1 })
```

Query:

```js
db.orders.find({ userID: 123 }, { amount: 1, _id: 0 })
```

---

### 🔍 **Real Use Case**

In an analytics module, I had a dashboard that queried `userID`, `eventType`, and `createdAt`. Initially slow, I added:

```js
db.events.createIndex({ userID: 1, eventType: 1, createdAt: -1 })
```

This improved performance from \~1.2s to <200ms.

---

### 📌 **Best Practices I Follow**

* Regularly monitor **slow query logs** or use **MongoDB Atlas Profiler**.
* Avoid over-indexing—indexes increase write cost and storage.
* Rebuild indexes when data shape or access pattern changes.

---







## Handling large datasets efficiently in MongoDB




 - To handle large datasets efficiently in MongoDB, I focus on proper schema design to avoid unnecessary joins,
 -  I use compound indexes on frequently queried fields to minimize collection scans.
 -  I leverage the aggregation pipeline with early filtering and projections, and use range-based pagination for deep data traversal.
 -  For high-scale systems, I use sharding with a well-chosen shard key. Additionally, I monitor query performance using `explain()` and tools like MongoDB Atlas to continuously optimize queries and indexes."


### ✅ **1. Schema Design Optimization**

* **Embed vs. Reference**:

  * Use **embedding** for related data that is accessed together (reduces joins).
  * Use **referencing** for large or unrelated sub-documents.
* **Avoid deeply nested documents** (max nesting depth is 100) and documents >16MB.

---

### ✅ **2. Indexing Strategies**

* Create **indexes** on frequently queried fields (especially filters and sorts).
* Use **compound indexes** for multi-field queries.
* **Covered queries** (when index includes all needed fields) improve performance.
* Use **TTL indexes** for expiring old data automatically (e.g., logs).

---

### ✅ **3. Efficient Query Design**

* Use **projection** to return only necessary fields.
* Avoid full collection scans – always aim for indexed queries.
* Use **`$match` early** in aggregations to reduce document processing.
* Avoid **`$where`** or JS functions in queries – they're slow and non-indexed.

---

### ✅ **4. Aggregation Framework Best Practices**

* Use `$facet` and `$bucket` wisely for grouped processing.
* Move **filters (`$match`) and projections (`$project`)** as early as possible.
* Use **allowDiskUse: true** for large aggregations.

---

### ✅ **5. Pagination Techniques**

* For deep pagination, **`skip` becomes expensive**.

  * Use **range-based pagination** with `_id` or a timestamp.
  * Example: Instead of `skip`, use `{ _id: { $gt: lastSeenId } }`.

---

### ✅ **6. Sharding (for Huge Collections)**

* **Sharding** splits large collections across multiple servers.
* Choose a **good shard key** (high cardinality, even distribution).
* Ensures horizontal scaling for reads and writes.

---

### ✅ **7. Bulk Operations**

* Use **bulkWrite()** for large inserts or updates – more efficient than individual calls.
* Use **`batchSize`** and **`limit`** while fetching large datasets in batches.

---

### ✅ **8. Monitoring & Tuning**

* Use **MongoDB Atlas**, `explain()`, or `db.currentOp()` to analyze slow queries.
* Monitor **working set size** – ideally fits in RAM for fast access.
* Watch for **page faults, CPU spikes, index misses**.

---

## Aggregate examples

Group orders by customer and calculate total spend per customer


```js
db.orders.aggregate([
  {
    $match: {
      status: "completed" // Optional filter if you want only successful orders
    }
  },
  {
    $group: {
      _id: "$customerId",               // Group by customerId
      totalSpend: { $sum: "$amount" },  // Sum up the amount field
      orderCount: { $sum: 1 }           // Optional: count number of orders
    }
  },
  {
    $sort: { totalSpend: -1 }           // Optional: sort by highest spenders
  }
])
```js



Great! To **join the `orders` collection with the `customers` collection** using MongoDB’s `$lookup`, we’ll enhance the previous aggregation query.

---

## 🔄 **Goal:**

* Group `orders` by `customerId`
* Calculate `totalSpend` and `orderCount`
* Join with `customers` to fetch customer details like `name`, `email`, etc.

---

## 🗃️ **Assumptions**

### `orders` collection:

```json
{
  "_id": ObjectId("..."),
  "customerId": "CUST123",
  "amount": 250.50,
  "status": "completed"
}
```

### `customers` collection:

```json
{
  "_id": "CUST123",
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

## 📘 **Aggregation Pipeline with `$lookup`**

```js
db.orders.aggregate([
  {
    $match: {
      status: "completed"
    }
  },
  {
    $group: {
      _id: "$customerId",
      totalSpend: { $sum: "$amount" },
      orderCount: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "customers",
      localField: "_id",         // _id from $group, which is customerId
      foreignField: "_id",       // _id in the customers collection
      as: "customerDetails"
    }
  },
  {
    $unwind: "$customerDetails" // Flatten the customerDetails array
  },
  {
    $project: {
      _id: 0,
      customerId: "$_id",
      name: "$customerDetails.name",
      email: "$customerDetails.email",
      totalSpend: 1,
      orderCount: 1
    }
  },
  {
    $sort: { totalSpend: -1 } // Optional: top spenders first
  }
])
```

---

## ✅ **Sample Output**

```json
[
  {
    "customerId": "CUST123",
    "name": "John Doe",
    "email": "john@example.com",
    "totalSpend": 1025.75,
    "orderCount": 4
  }
]
```

---

## 📌 Notes

* `$lookup` acts like a **left outer join**.
* `$unwind` is used to convert the joined array into a single object.
* `$project` formats the output nicely.

---



---

## Scenario Based Questions

### 18. Find users who haven't logged in for 30+ days

```js
db.users.find({
  lastLogin: { $lt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
});
```

---

### 19. Find products between price 100 and 500, and in stock

```js
db.products.find({
  price: { $gte: 100, $lte: 500 },
  stock: { $gt: 0 }
});
```

---

### 20. Query array of objects by nested field

```js
db.orders.find({
  "items.productId": ObjectId("...")
});
```

---

### 21. Update documents conditionally

```js
db.users.updateMany(
  { status: "inactive" },
  { $set: { archived: true } }
);
```

---

### 22. Pagination using `skip()` and `limit()`

```js
db.users.find().skip(10).limit(10);
```





## **feature by feature** 

---




### ✅ Summary Table

| Feature     | MySQL Usage         | Vehicle Mgmt Example              |
| ----------- | ------------------- | --------------------------------- |
| Stored Proc | `CREATE PROCEDURE`  | Fetch active vehicles by city     |
| View        | `CREATE VIEW`       | Real-time trip view for dashboard |
| Trigger     | `CREATE TRIGGER`    | Log vehicle status change         |
| UDF         | `CREATE FUNCTION`   | Trip duration calculation         |
| Index       | `CREATE INDEX`      | Fast location retrieval           |
| Transaction | `START TRANSACTION` | Atomic trip assignment process    |

---


## 🚗 Project: **Vehicle Management System**

---

### 🔹 1. **Stored Procedures**

📌 **Use Case**: Get all **active vehicles in a specific city** with last known location and status — useful for operations teams.

#### ✅ Procedure:

```sql
DELIMITER //
CREATE PROCEDURE GetActiveVehiclesByCity(IN cityName VARCHAR(100))
BEGIN
  SELECT vehicle_id, driver_name, last_location, status
  FROM vehicles
  WHERE city = cityName AND status = 'active';
END //
DELIMITER ;
```

🧠 **Interview Insight**:

> *"Stored procedures allow us to package business logic within the database. In our vehicle system, we used them to fetch reports like active vehicles by city, reducing backend code duplication."*

---

### 🔹 2. **Views**

📌 **Use Case**: Create a **summary view** for dashboard — vehicles currently on trip, assigned drivers, and trip details.

#### ✅ View:

```sql
CREATE VIEW live_vehicle_status AS
SELECT v.vehicle_id, v.city, d.name AS driver_name, t.trip_id, t.start_time
FROM vehicles v
JOIN drivers d ON v.driver_id = d.id
LEFT JOIN trips t ON v.vehicle_id = t.vehicle_id
WHERE v.status = 'on_trip';
```

🧠 **Interview Insight**:

> *"We used views to simplify data retrieval for dashboards. For example, a `live_vehicle_status` view avoided complex joins on every frontend request."*

---

### 🔹 3. **Triggers**

📌 **Use Case**: Log every time a vehicle’s status changes — for audits or troubleshooting.

#### ✅ Trigger:

```sql
CREATE TRIGGER log_vehicle_status_change
AFTER UPDATE ON vehicles
FOR EACH ROW
BEGIN
  IF OLD.status <> NEW.status THEN
    INSERT INTO vehicle_status_log(vehicle_id, old_status, new_status, changed_at)
    VALUES (OLD.vehicle_id, OLD.status, NEW.status, NOW());
  END IF;
END;
```

🧠 **Interview Insight**:

> *"We used triggers to auto-capture status changes — like from 'idle' to 'on\_trip' — which helped in generating accurate audit logs."*

---

### 🔹 4. **User-Defined Functions (UDF)**

📌 **Use Case**: Calculate **trip duration in minutes** from start and end time.

#### ✅ UDF:

```sql
CREATE FUNCTION get_trip_duration(start DATETIME, end DATETIME)
RETURNS INT
DETERMINISTIC
RETURN TIMESTAMPDIFF(MINUTE, start, end);
```

#### Usage:

```sql
SELECT get_trip_duration('2025-06-09 08:00:00', '2025-06-09 08:45:00'); -- returns 45
```

🧠 **Interview Insight**:

> *"Our app needed duration calculations across hundreds of trips. A UDF made it reusable across reports, billing, and analytics."*

---

### 🔹 5. **Indexes**

📌 **Use Case**: Improve performance when querying **location history** by vehicle and time.

#### ✅ Index:

```sql
CREATE INDEX idx_vehicle_time ON location_logs(vehicle_id, recorded_at DESC);
```

#### Query:

```sql
SELECT * FROM location_logs
WHERE vehicle_id = 'VHC123'
ORDER BY recorded_at DESC
LIMIT 1;
```

🧠 **Interview Insight**:

> *"Indexing `vehicle_id` and `recorded_at` improved our live tracking response time by 80%."*

---

### 🔹 6. **Transactions**

📌 **Use Case**: Start trip — must update vehicle status, insert trip, and assign driver. **All or nothing**.

#### ✅ Transaction:

```sql
START TRANSACTION;

UPDATE vehicles SET status = 'on_trip' WHERE vehicle_id = 'VHC123';

INSERT INTO trips(vehicle_id, driver_id, start_time)
VALUES ('VHC123', 101, NOW());

UPDATE drivers SET is_available = FALSE WHERE id = 101;

COMMIT;
```

🧠 **Interview Insight**:

> *"We used transactions to maintain data integrity — starting a trip affects 3 tables, and a failure in any step rolls back the operation."*

---

### 🧩 Bonus: Combine All Features in a Flow

📈 **Scenario**: Admin dashboard displays current trips in Mumbai, duration of each trip, and logs status updates.

| Feature     | Function                                                      |
| ----------- | ------------------------------------------------------------- |
| Procedure   | Fetch vehicles in Mumbai (`GetActiveVehiclesByCity`)          |
| View        | Show live trip data (`live_vehicle_status`)                   |
| UDF         | Show trip durations (`get_trip_duration`)                     |
| Trigger     | Log every vehicle status update (`log_vehicle_status_change`) |
| Transaction | Start trip: update vehicle, driver, and insert trip safely    |
| Index       | Speed up latest location fetch from millions of records       |

---

## Modeling patterns

| Pattern     | Use Case                   | Pros                              | Cons                            |
| ----------- | -------------------------- | --------------------------------- | ------------------------------- |
| Embedded    | One-to-few, tight coupling | Fast access                       | Document size limit             |
| Referenced  | One-to-many/many-to-many   | Normalized, reusable              | Needs joins/lookups             |
| Bucket      | Time-series, logs          | Reduces write load                | Complex querying                |
| Outlier     | Unbalanced subdocuments    | Prevents bloated base docs        | More queries                    |
| Polymorphic | Heterogeneous records      | Single collection for varied data | Schema enforcement is difficult |

### **Embedded Pattern**

**Use When:** Data is tightly coupled and queried together frequently.

**Example:** A user with an address.

```js
// Collection: users
{
  _id: ObjectId("..."),
  name: "Alice",
  email: "alice@example.com",
  address: {
    street: "123 Main St",
    city: "Chennai",
    zip: "600001"
  }
}
```

✅ **Pros**: Fast read/write, fewer joins
⚠️ **Limit**: Data duplication if embedded repeatedly, document size cap (16MB)

---

### **Referenced Pattern**

**Use When:** One-to-many or many-to-many where embedded docs would grow large or be reused.

**Example:** Orders referencing users and products.

```js
// Collection: orders
{
  _id: ObjectId("..."),
  userId: ObjectId("user123"),
  productIds: [ObjectId("prod1"), ObjectId("prod2")],
  orderDate: ISODate("2025-06-26")
}
```

```js
// Collection: users
{ _id: ObjectId("user123"), name: "Alice" }

// Collection: products
{ _id: ObjectId("prod1"), name: "Shoes", price: 1999 }
```

✅ **Pros**: Normalized, avoids duplication
⚠️ **Cons**: Requires additional queries or `$lookup`

---

### **Bucket Pattern**

**Use When:** Storing time-series or high-frequency data (IoT, logs).

**Example:** Sensor readings bucketed per day.

```js
// Collection: sensor_readings
{
  _id: ObjectId("..."),
  sensorId: "sensor-001",
  date: "2025-06-25",
  readings: [
    { time: "10:00", value: 20 },
    { time: "10:05", value: 21 },
    { time: "10:10", value: 19 }
  ]
}
```

✅ **Pros**: Efficient writes, avoids write amplification
⚠️ **Cons**: Harder to query individual readings

---

### **Outlier Pattern**

**Use When:** A subset of documents has much larger subfields.

**Example:** Some users have too many login attempts or comments.

```js
// Collection: users
{
  _id: ObjectId("..."),
  name: "John",
  loginAttemptId: ObjectId("attempt123") // outlier
}
```

```js
// Collection: login_attempts
{
  _id: ObjectId("attempt123"),
  attempts: [
    { date: "2025-06-25", ip: "1.2.3.4" },
    { date: "2025-06-26", ip: "5.6.7.8" }
  ]
}
```

✅ **Pros**: Keeps main document light
⚠️ **Cons**: Extra queries for outlier fields

---

### **Polymorphic Pattern**

**Use When:** Storing different types of related objects in one collection.

**Example:** A log system storing various event types.

```js
// Collection: events
{
  _id: ObjectId("..."),
  type: "purchase",
  data: {
    productId: "abc",
    amount: 299
  }
}
```

```js
{
  _id: ObjectId("..."),
  type: "login",
  data: {
    userId: "xyz",
    ip: "1.2.3.4"
  }
}
```

✅ **Pros**: Unified querying
⚠️ **Cons**: Harder to enforce schema rules

---

## Key Limitations
- 16MB Document Size – Forces decisions on when to embed vs reference.
- No Native Transactions (pre-4.0) – In older versions, atomicity was limited to a single document.
- Indexing Limits:
- 64 indexes per collection.
- Index key limit of 1024 bytes.
- Indexes on large arrays can cause performance degradation.
- Joins are expensive – $lookup should be used carefully on large datasets.
- Write Amplification – With large documents, frequent updates can be inefficient.


