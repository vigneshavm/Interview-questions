 - [MongoDB Overview](#mongo-overview)
 - [SQL Overview](#sql-overview)
- [Query Execution order](#Query-Execution-order)

## MongoDB Overview

| **Category**                   | **Topics** |
|-------------------------------|------------|
| **Core Concepts**             | [MongoDB vs Relational Databases](#mongodb-vs--relational-databases) - [MongoDB Document](#mongodb-document) - [Collection](#collection) - [Data Storage Format](#data-storage-format-in-mongodb) - [_id Field](#id-field) - [Supported Data Types](#supported-data-types) - [BSON vs JSON](#bson-vs-json) |
| **Querying & Filtering**      | [find() vs findOne()](#find-vs-findone) - [$in Vs $all](#difference-between-in-and-all-in-mongodb) - [Searching in MongoDB](#searching-in-mongodb) - [upsert](#upsert) - [Update Multiple Documents](#update-multiple-documents-in-mongodb) - [updateOne(), updateMany(), replaceOne()](#updateone-updatemany-and-replaceone) - [MongoDB CRUD Operations](#mongodb-crud-operations) - [Query Operators](#query-operators)  |
| **Indexes**     | [Index](#creating-an-index-in-mongodb) - [Indexing Strategies](#indexing-strategies) - [Indexing Drawbacks](#indexing-drawbacks) - [Multikey and Compound Indexes](#multikey-and-compound-indexes) - [Compound Indexes](#compound-indexes) |
| **Design & Modeling**  | [Modeling Patterns](#modeling-patterns) - [Model Relationships](#model-relationships) - [Embedded and Referenced Documents](#embedded-and-referenced-documents) - [Schema Enforcement](#mongodb-handle-schema-enforcement) |
| **Aggregation**    | [Aggregations](#aggregations-in-mongodb) - [Aggregation Operations](#aggregation-operations) - [Aggregate Examples](#aggregate-examples) - [Transactions](#handle-transactions-in-mongodb) - [Large File Storage (GridFS)](#handle-large-file-storage-in-mongodb-gridfs) |
| **Sharding**    | [Sharding](#sharding) - [Shard Key](#shard-key) - [Scaling MongoDB](#scaling-mongodb) - [Performance Tuning](#performance-tuning-techniques-in-mongodb) - [Which Shard to Use](#which-shard-need-to-use) |
| **Replica & Consistency** | [Replica Set](#replica-set) - [Clustering & Replication](#clustering--replication) - [Replication and Failover](#replication-and-how-failover-works-in-mongodb) - [Durability & Consistency](#mongodb-ensure-durability-and-consistency) - [Write Concerns & Read Preferences](#write-concerns-and-read-preferences) |
| **Special Use Cases**         | [Capped Collection](#capped-collection-in-mongodb) - [Schema Design](#schema-design) - [Working Set](#working-set) - [Schema-less Design Impact](#impact-of-schema-less-design-on-validationconsistency) - [High Availability & Fault Tolerance](#ensuring-high-availability-and-fault-tolerance) - [Optimizing $lookup Operations](#optimizing-multiple-lookup-operations-in-aggregations) - [Data Migration Between Clusters or SQL](#migrating-data-between-clusters-or-from-sql-to-mongodb) - [Production Monitoring & Tuning](#monitoring-and-tuning-mongodb-in-production) - [Audit Log Schema](#design-schema-for-audit-logshistorical-data) |
| **MongoDB & Node.js**         | [MongoDB with Node.js](#mongodb-with-nodejs) - [useNewUrlParser & useUnifiedTopology](#usenewurlparser-and-useunifiedtopology-in-mongoose) - [Mongoose vs Native Driver](#mongoose-vs--mongodb-native-driver) |
| **Limitations & Usecases** | [Limitations](#limitations-of-mongodb-and-how-to-overcome-them) - [Key Limitations](#key-limitations) - [Databases for a Social Media App](#databases-for-a-social-media-app) |






## SQL Overview


| **Category**             | **Topics** |
|--------------------------|------------|
| **Clauses & Joins**      | [WHERE Vs HAVING Vs GROUP BY](#where-vs-having-vs-group-by), [`INNER JOIN` vs `LEFT JOIN` vs `RIGHT JOIN`](#inner-join-vs-left-join-vs-right-join), [Primary Key vs Foreign Key vs Composite Key](#primary-key-vs-foreign-key-vs-composite-key), [Subquery vs Correlated Subquery](#subquery-vs-correlated-subquery) |
| **Security & Advanced Queries** | [Common Table Expression (CTE)](#cte), [Detect and Avoid SQL Injection](#detect-and-avoid-sql-injection), [Insert Unique IDs Without Auto-Increment](#approaches-to-insert-unique-ids-without-auto-increment-or-primary-key), [Delete and Rollback](#delete-and-rollback) |
| **SQL Concepts**         | [Window Functions](#window-functions), [View](#view), [Triggers](#triggers), [Stored Procedure](#stored-procedure), [Triggers vs Stored Procedures](#triggers-vs-stored-procedures), [Constraints](#constraints) |
| **Operators & Indexes**  | [`IN` Operator](#in-operator), [`TRUNCATE` vs `DELETE` vs `DROP`](#truncate-vs-delete-vs-drop), [`UNION` and `UNION ALL`](#union-and-union-all), [Indexes](#indexes), [Index Drawbacks](#index-drawbacks) |
| **SQL Programs**         | [Second Highest Salary](#second-highest-salary), [3rd Largest Value](#3rd-largest-value), [Pagination](#pagination), [Return Records Without NULL `name`](#return-records-without-null-name), [Update Gender Vice Versa](#single-update-gender-vice-versa), [Update Based on Another Table](#update-data-in-one-table-based-on-another) |
| **Duplicates & Aggregation** | [Find Duplicate Rows](#find-duplicate-rows), [Find Duplicate Salaries](#find-duplicate-salaries), [Total Salary by Department](#get-total-salary-by-department), [Rank Salaries by Department (Window Fn)](#window-function-to-rank-salaries-within-departments), [Recursive CTE – Employee Hierarchy](#recursive-cte--build-employee-hierarchy-self-join-style) |



| **Category**             | **Topics** |
|--------------------------|------------|
| **Database Design**      | [Designing a Database](#designing-a-database), [Normalization](#normalization), [Normal Form](#normal-form), [Denormalization](#denormalization), [One to One, One to Many, Many to Many](#one-to-one-one-to-many-many-to-many-relationships) |
| **Database Migration**   | [Database Migration](#database-migration), [Zero Downtime Migration](#zero-downtime-migration), [Rollback Strategy in DB Migration](#rollback-strategy-in-db-migration), [Data Safety During Migrations](#data-safety-during-migrations) - [SQL Feature Comparison](#feature-by-feature)|
| **Theory & Scenarios**        | [CAP Theorem](#cap-theorem) - [Time Series](#time-series) - [ACID Properties](#acid-properties) - [Two-Phase Commit](#two-phase-commit) - [Handling Large Datasets](#handling-large-datasets-efficiently-in-mongodb) - [Scenario-Based Questions for SQL](#scenario-based-questions) 

- [Choosing the Right Isolation Level](#Choosing-the-Right-Isolation-Level) - [Race Conditions](#Race-Conditions) - [Deadlock detection and prevention](#Deadlock-detection-and-prevention) 
- [Handling concurrent](#handling-concurrent-transfers-on-the-same-account) * [Concurrency Control](#implementing-a-money-transfer-with-concurrency-control) * [Implementing idempotency](#implementing-idempotency-in-a-debit-api) * [locking pessimistic vs optimistic](#pessimistic-vs-optimistic-locking-in-financial-applications) 


## Query Execution order

**FROM → JOIN → ON → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT**

For **MongoDB**

### **MongoDB Aggregation Execution Order**

 **\$match** →  (like `WHERE`)
**\$lookup** →  (like `JOIN ... ON`)
**\$unwind** → flattens 
**\$group** →  (like `GROUP BY`)
**\$match (post-group)** → acts like `HAVING`
**\$project** → selects specific fields (like `SELECT`)
**\$sort** → orders results (like `ORDER BY`)
**\$skip / \$limit** → pagination (like `LIMIT / OFFSET`)



👉 Example:
**SQL:**

```sql
SELECT city, COUNT(*)  FROM customers  WHERE age > 25  GROUP BY city  HAVING COUNT(*) > 5  ORDER BY city  LIMIT 10;
```

**MongoDB:**

```js
db.customers.aggregate([
  { $match: { age: { $gt: 25 } } },{ $group: { _id: "$city", count: { $sum: 1 } } }, 
  { $match: { count: { $gt: 5 } } }, { $sort: { _id: 1 } }, { $limit: 10 }                             
])
```



## CAP Theorem



-  The **CAP theorem** states that in a distributed system, we can only guarantee **two out of three**:

- * **Consistency (C)**: Every read gets the latest write
- * **Availability (A)**: Every request gets a response
- * **Partition Tolerance (P)**: System continues despite network failure
- * **MongoDB is CP by default**, sacrificing availability during partitions to maintain consistency.
-  * But with tunable settings, you can strike a balance between **C and A**, based on your app's needs.


---

**So, where does MongoDB fit in?**

-  **By default, MongoDB is a CP system** – it prioritizes **Consistency** and **Partition Tolerance**.
-  That means if there's a **network partition**, MongoDB will **sacrifice Availability** to maintain data integrity.

**Real-world Example:**

-  Imagine you're building an **e-commerce app** using MongoDB Replica Set for high availability.
-  Now, say the **primary node goes down** due to a network partition.
  * MongoDB will **not allow writes** until a **new primary is elected**.
  * During this time, users may experience **errors** or **temporary write failures**.
  * But MongoDB ensures **no inconsistent or stale writes** happen.

-  So here, MongoDB favors **Consistency** over **Availability**.

**Tunable Consistency Options:**

-  MongoDB also provides ways to **tune consistency vs availability** using:
 * **Read Preference** (`primary`, `primaryPreferred`, `secondary`)
 * **Write Concern** (`majority`, `w:1`, etc.)
-  For example, if you set `readPreference: secondary`, you might allow faster reads (favoring **availability**) even if they’re slightly stale.




-----------


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

- Sharding is horizontal partitioning of data across multiple machines for high scalability.
- To handle large data volumes
- Distributes read/write load
- **Sharding** is MongoDB’s method for **horizontally scaling** your database to handle **large amounts of data and high throughput** by **distributing data across multiple servers**.
- Sharding = **Splitting data** across **multiple machines (shards)** to:

* Handle **more data than fits on one server**
* Improve **read/write performance**
* Ensure **high availability** and **scalability**


**Example:**
```js
sh.enableSharding("myDatabase")
sh.shardCollection("myDatabase.users", { userId: 1 })
```

**Key Components of Sharding**

| Component          | Description                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| **Shard**          | A MongoDB server that holds a portion of the data (can be a replica set) |
| **Mongos**         | Query router that routes queries to the correct shard(s)                 |
| **Config Servers** | Store metadata about the cluster and sharded collections                 |

**How Sharding Works**

1. **Choose a collection to shard**
2. **Pick a shard key** (a field used to determine how data is split)
3. MongoDB **splits data into chunks** based on the shard key
4. Each chunk is assigned to a shard

---

###  Shard Key
- A **shard key** is a field (or set of fields) in a MongoDB document that determines how data is **distributed across shards** in a **sharded cluster**.
- The **most important part** of sharding. The right shard key ensures **even distribution** and **query efficiency**.


#### Good Shard Key:
* High **cardinality** (many unique values)
* Even **distribution** across shards
* Frequently used in queries

#### Bad Shard Key:
* Low cardinality (e.g., `gender`)
* Monotonically increasing (e.g., `timestamp` without hashing) → can cause **hotspots**


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


| **Property**    | **Definition**                                                                                                                              | **Real-Time Example**                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Atomicity**   | A transaction is **all-or-nothing**: either every operation within the transaction completes successfully, or none of them do.              | **Money Transfer**: If ₹1000 is deducted from Account A, it must be added to Account B. If B fails, A’s ₹1000 must be restored. |
| **Consistency** | The database must **move from one valid state to another** while maintaining all defined rules (constraints, triggers, foreign keys, etc.). | **Bank Rule**: Account balance must never go below ₹0. If a transfer violates that, the transaction is rejected.                |
| **Isolation**   | **Concurrent transactions** are isolated from each other. Intermediate states are not visible to others.                                    | **Ticket Booking**: Two users trying to book the **last ticket**. Only one should succeed; the other gets a failure or retry.   |
| **Durability**  | Once a transaction is **committed**, it remains so — even if there’s a power failure, crash, or system shutdown.                            | **Order Confirmation**: Once your online payment is completed and you get a success message, your order will **not be lost**.   |


**Scenario**: User transfers ₹10,000 from Account A to Account B

| **Step**                    | **ACID Application**                                                |
| --------------------------- | ------------------------------------------------------------------- |
| Start transaction           | DB prepares to execute in an **atomic** block                       |
| Deduct ₹10,000 from A       | If success, continue; else rollback                                 |
| Add ₹10,000 to B            | If success, continue; else rollback entire transaction              |
| Validate business rules     | Must maintain balance ≥ ₹0 (ensures **consistency**)                |
| Commit transaction          | Changes are **durable** — even after crash, updated balances remain |
| During concurrent transfers | DB ensures **isolation** — other reads won’t see partial results    |

---


| **Database**   | **ACID Support**                              |
| -------------- | --------------------------------------------- |
| PostgreSQL     | Fully ACID-compliant                          |
| MySQL (InnoDB) | ACID-compliant with InnoDB engine             |
| MongoDB        | ACID-compliant (since v4.0 for multi-doc txn) |
| SQLite         | ACID-compliant (single-process use)           |


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


### Atomicity

* **Relational Databases (RDBMS)**:

  * Transactions are **fully atomic**: all operations within a transaction either succeed or fail together.
  * Example: In PostgreSQL or MySQL, `BEGIN`, `COMMIT`, and `ROLLBACK` control atomic execution.

* **MongoDB**:

  * Originally, MongoDB guaranteed atomicity **only at the document level** (a single document update is atomic).
  * Since **MongoDB 4.0+**, **multi-document ACID transactions** are supported for **replica sets** and **sharded clusters** (since v4.2).

---

### Consistency

* **RDBMS**:

  * Strong schema enforcement ensures consistency (e.g., foreign keys, constraints).
  * Violations of constraints prevent transaction commits.

* **MongoDB**:

  * Uses **application-level schema enforcement** (via schema validation or tools like Mongoose).
  * Multi-document transactions maintain consistency, but it’s **developer’s responsibility** to ensure logical consistency.

---

### Isolation

* **RDBMS**:

  * Supports multiple **isolation levels** (Read Uncommitted, Read Committed, Repeatable Read, Serializable).
  * Prevents race conditions, dirty reads, non-repeatable reads.

"Yes, isolation levels control how transactions interact in a multi-user environment. 

* I use **Read Committed** for general reads.
* For **booking/payment**, I use **Serializable** or **Repeatable Read** to ensure data consistency and avoid race conditions.


 🔓 **1. Read Uncommitted**

* **Dirty reads are allowed** — one transaction can see uncommitted changes from another.
* Example: A user’s booking is in progress, but another user sees it as 'Paid' before the transaction commits.
  ➡️ **Risk:** Inaccurate status, duplicate shoutouts.


 📖 **2. Read Committed**

* Only committed data is read.
* Example: While a payment is being processed, another read will **not see the partial state**.
  ➡️ **Prevents dirty reads**, but **allows non-repeatable reads**.


 🔁 **3. Repeatable Read**

* Ensures that if you read a row twice in a transaction, it **doesn't change** mid-way.
* Example: Booking status stays 'Pending' even if another transaction commits a change.
  ➡️ **Prevents dirty and non-repeatable reads**, but **phantom rows** (like new conflicting bookings) may occur.


 🔐 **4. Serializable**

* **Strictest level** — transactions behave as if run one after another.
* Example: Two users trying to book the same celebrity slot are **queued**, ensuring no double booking.
  ➡️ Prevents all anomalies, but may **impact performance** due to locking or retries.





* **MongoDB**:

  * Multi-document transactions provide **snapshot isolation** using an **"all or nothing" commit** model.
  * Internally uses **write-ahead logs and oplog** to maintain isolation.

---

### Durability

* **RDBMS**:

  * Once a transaction is committed, data is persisted, even in the event of power failure (via WAL or redo logs).

* **MongoDB**:

  * Ensures durability via **journaling**.
  * `writeConcern` settings allow configuring durability (e.g., `majority`, `w:1`, `w:0`).






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

#### ✅ Use MongoDB when:

* Schema evolves frequently (e.g., user profiles)
* High write scalability is needed
* Event logs, IoT, product catalogs

#### ❌ Avoid MongoDB when:

* Complex joins, ACID transactions across tables (e.g., banking core)
* Strict schema enforcement (e.g., tax or billing)

> ✅ Evaluate use case: **flexibility vs transactional integrity**

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

- “Indexes in MongoDB are based on a **B-tree structure** and are used to **improve query performance** by avoiding full collection scans.

When we create an index using:

```js
db.users.createIndex({ email: 1 });
```

MongoDB builds a **sorted B-tree** where each node stores:

* The **indexed field value**
* A **pointer to the actual document**

During queries, MongoDB **traverses this B-tree** to locate data efficiently, instead of scanning all documents.”


- **Key Highlights**

* **B-tree structure** for fast lookups
* **Stores field + document pointer**
* **Sorted traversal**, enables efficient search
* **Avoids full scans**, boosts read performance


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

## 📊 **MongoDB Aggregation Pipeline Stages (Core & Advanced)**

| Stage                 | Purpose                                               |
| --------------------- | ----------------------------------------------------- |
| `$match`              | Filters documents (like `find()`)                     |
| `$project`            | Includes/excludes fields, reshapes documents          |
| `$unset`              | Removes specified fields                              |
| `$group`              | Groups documents by a field and performs aggregations |
| `$sort`               | Sorts documents by specified fields                   |
| `$limit`              | Limits the number of output documents                 |
| `$skip`               | Skips specified number of documents                   |
| `$count`              | Returns a count of documents                          |
| `$lookup`             | Joins with another collection                         |
| `$unwind`             | Deconstructs arrays into multiple documents           |
| `$facet`              | Run multiple pipelines in parallel (multi-view)       |
| `$bucket`             | Group into custom ranges (like histogram bins)        |
| `$bucketAuto`         | Automatically determine bucket ranges                 |
| `$sortByCount`        | Groups and counts by field, sorted by count           |
| `$merge`              | Writes aggregation output to a collection             |
| `$out`                | Replaces a collection with aggregation result         |
| `$replaceRoot`        | Promotes a nested field to the document root          |
| `$replaceWith`        | Replaces the entire document                          |
| `$set` / `$addFields` | Adds or modifies fields                               |
| `$graphLookup`        | Performs recursive lookups (hierarchical data)        |
| `$densify`            | Fills in missing data for time-series collections     |
| `$fill`               | Replaces null/missing fields in time-series           |
| `$unionWith`          | Merges results from another collection                |

---

## 🧮 **Accumulator Operators (Used in `$group`, `$setWindowFields`)**

| Operator                     | Purpose                                |
| ---------------------------- | -------------------------------------- |
| `$sum`                       | Sum of numeric values                  |
| `$avg`                       | Average of numeric values              |
| `$min` / `$max`              | Minimum / Maximum value                |
| `$first` / `$last`           | First / Last value based on sort order |
| `$push`                      | Appends values to an array             |
| `$addToSet`                  | Appends unique values to an array      |
| `$stdDevPop` / `$stdDevSamp` | Population/Sample standard deviation   |

---

## 🧠 **Expression Operators**

| Type           | Operators                                                       |
| -------------- | --------------------------------------------------------------- |
| **Arithmetic** | `$add`, `$subtract`, `$multiply`, `$divide`, `$mod`             |
| **String**     | `$concat`, `$substr`, `$toLower`, `$toUpper`, `$trim`, `$split` |
| **Array**      | `$size`, `$filter`, `$map`, `$reduce`, `$slice`, `$arrayElemAt` |
| **Date**       | `$dateToString`, `$year`, `$month`, `$dayOfWeek`, `$dateDiff`   |
| **Boolean**    | `$and`, `$or`, `$not`, `$cond`, `$ifNull`, `$switch`            |
| **Comparison** | `$eq`, `$ne`, `$gt`, `$lt`, `$gte`, `$lte`, `$cmp`              |
| **Type Check** | `$type`, `$isArray`, `$convert`, `$toString`, `$toInt`, etc.    |

---

## ⏳ **Window Functions (MongoDB 5.0+)**

| Operator                                 | Description                                |
| ---------------------------------------- | ------------------------------------------ |
| `$setWindowFields`                       | Defines partitions for windowed operations |
| `$rank`, `$denseRank`, `$documentNumber` | Ranking functions                          |
| `$sum`, `$avg`, `$min`, `$max`           | Used as sliding/window aggregates          |
| `$shift`, `$derivative`, `$integral`     | Time-series and trend-based operations     |

---

## 🧩 **Other Utility Operators**

| Operator      | Purpose                                            |
| ------------- | -------------------------------------------------- |
| `$literal`    | Inserts a static/literal value                     |
| `$expr`       | Allows use of expressions in `find()` and `$match` |
| `$function`   | Executes custom JavaScript functions in pipeline   |
| `$regexMatch` | Applies regular expression inside expressions      |
| `$meta`       | Accesses metadata (e.g., text search score)        |

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

* **Embed** when:

  * Data is tightly coupled (e.g., user and addresses)
  * Reads are more frequent than writes
  * The document won't exceed 16MB
* **Reference** when:

  * There’s a 1\:N or N\:M relationship (e.g., user and orders)
  * Data changes independently
  * You want to avoid document bloat

> ✅ **Rule of thumb**: Read-heavy → embed, write-heavy or large → reference


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
   - [Clustering](#Clustering)
   - [Replication](#Replication)

  - **Replica Set**: Maintains multiple copies of data for high availability.
  - **Sharding**: Distributes data across multiple nodes for scalability.

## **Clustering**

- **Clustering in MongoDB refers to deploying MongoDB in a distributed architecture** to support scalability, high availability, and fault tolerance. 
- MongoDB provides clustering primarily through two mechanisms: **Replica Sets** and **Sharded Clusters** — and both serve different purposes."
- Clustering in MongoDB helps us build **resilient, scalable, and performant** database systems.
- Replica Sets offer **availability**, while Sharded Clusters offer **scalability** — and both can be combined for enterprise-grade solutions.
- "I’d use a **replica set** to ensure high availability in a production app, 
- **sharded cluster** when dealing with **big data**, like logging systems, analytics platforms, or multi-tenant SaaS apps."


---

### **1. Replica Set – High Availability Cluster**

- "A **Replica Set** is a group of MongoDB servers that maintain the same dataset. 
- It consists of a **Primary** node (which handles writes) and one or more **Secondary** nodes (which replicate data from the Primary). 
- If the Primary fails, the Replica Set automatically elects a new Primary — ensuring high availability."

**Key Features:**

* Automatic failover
* Data redundancy
* Read scaling with secondaries (optionally)
* Easy backup and disaster recovery

---

### **2. Sharded Cluster – Horizontal Scalability**

- A **Sharded Cluster** allows MongoDB to scale horizontally by **partitioning data across multiple shards**. 
- Each shard can itself be a replica set.
- MongoDB uses a component called `mongos` to route queries to the correct shard based on a shard key."

**Key Components:**

* **Shards**: Store the actual data
* **Config Servers**: Hold metadata about the cluster
* **mongos**: Query router between client and shards

**Use Case:**

- Ideal for large-scale applications where data size or throughput exceeds the limits of a single machine.


### 🧠 **Common Challenges:**

* Choosing an efficient shard key is **critical** — a poor choice can lead to data imbalance.
* Replication lag in large replica sets.
* Operational complexity in managing and monitoring a sharded cluster.




## **Replication**

- "**Replication in MongoDB** is a mechanism that ensures **high availability and data redundancy** by maintaining multiple copies of the same data across different servers. 
- It's implemented using a structure called a **Replica Set**."
- I use replication in every production deployment. A 3-node replica set is the minimum I recommend for ensuring uptime, fault tolerance, and smooth rollouts or backups.
- Replication lag can occur if Secondaries can't keep up. Also, if you read from secondaries, there's a risk of **eventual consistency** — meaning data might be slightly stale.

**Replica Set**

* **One Primary** node — handles all write operations
* **One or more Secondary** nodes — replicate data from the Primary asynchronously
* An **Arbiter** (optional) — helps in elections but doesn't hold data"

- "In short, MongoDB’s replication through Replica Sets is critical for building resilient, fault-tolerant applications that require zero downtime and reliable data durability."


### **Replication Process:**

- "When a write occurs, it's first applied to the Primary. 
- The Primary records the operation in its **oplog** (operations log), and Secondaries replicate these changes.
- If the Primary fails, an **automatic election** promotes one of the Secondaries to Primary — ensuring zero downtime."

---

### **Key Benefits:**

* High Availability (automatic failover) * Data Redundancy * Read Scalability (read from secondaries) * Disaster Recovery (replica backups)




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


* Use **compound indexes** (`userId + status`)
* Use **partial indexes** to index only active data
* Use **TTL indexes** for expiring session tokens or temp logs
* Use **text indexes** for search across `title`, `description`
* Regularly run `explain()` to assess index use

> ✅ Indexes improve reads but **slow down writes** — find balance


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



* **Shard the collection** using a well-chosen shard key (e.g., `region + timestamp`)
* Use **bucketed time series collections** for log-type data
* Implement **archival** to cold storage (e.g., move old data to S3)
* Index only what you need — over-indexing = memory pressure

> ✅ Scale horizontally and avoid hotspots

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






### **MongoDB CRUD Operations**

| **Operation** | **Method**     | **Description**                    | **Example**                                                          |
| ------------- | -------------- | ---------------------------------- | -------------------------------------------------------------------- |
| **Create**    | `insertOne()`  | Insert a single document           | `db.users.insertOne({ name: "Alice" })`                              |
|               | `insertMany()` | Insert multiple documents          | `db.users.insertMany([...])`                                         |
| **Read**      | `find()`       | Find multiple documents            | `db.users.find({ age: { $gt: 25 } })`                                |
|               | `findOne()`    | Find the first matching document   | `db.users.findOne({ name: "Alice" })`                                |
| **Update**    | `updateOne()`  | Update first matching document     | `db.users.updateOne({ name: "Alice" }, { $set: { age: 30 } })`       |
|               | `updateMany()` | Update all matching documents      | `db.users.updateMany({ active: false }, { $set: { active: true } })` |
|               | `replaceOne()` | Replace a document completely      | `db.users.replaceOne({ _id: 1 }, { name: "Bob" })`                   |
| **Delete**    | `deleteOne()`  | Delete the first matching document | `db.users.deleteOne({ name: "Alice" })`                              |
|               | `deleteMany()` | Delete all matching documents      | `db.users.deleteMany({ active: false })`                             |

---

### **Query Operators**

| **Operator**  | **Purpose**         | **Example**                                |
| ------------- | ------------------- | ------------------------------------------ |
| `$eq`         | Equal               | `{ age: { $eq: 30 } }`                     |
| `$ne`         | Not equal           | `{ age: { $ne: 30 } }`                     |
| `$gt`, `$lt`  | Greater / less than | `{ age: { $gt: 25 } }`                     |
| `$in`         | Value in array      | `{ name: { $in: ["Alice", "Bob"] } }`      |
| `$exists`     | Field exists or not | `{ email: { $exists: true } }`             |
| `$and`, `$or` | Combine conditions  | `{ $or: [{ age: 25 }, { active: true }] }` |

---

### **Aggregation Operations**

| **Stage**  | **Purpose**                  | **Example**                                                                                |
| ---------- | ---------------------------- | ------------------------------------------------------------------------------------------ |
| `$match`   | Filter documents             | `{ $match: { status: "A" } }`                                                              |
| `$group`   | Group by field               | `{ $group: { _id: "$dept", total: { $sum: 1 } } }`                                         |
| `$project` | Include/exclude fields       | `{ $project: { name: 1, age: 1 } }`                                                        |
| `$sort`    | Sort documents               | `{ $sort: { age: -1 } }`                                                                   |
| `$limit`   | Limit number of results      | `{ $limit: 10 }`                                                                           |
| `$lookup`  | Join with another collection | `{ $lookup: { from: "orders", localField: "userId", foreignField: "_id", as: "orders" } }` |




### **Schema Design**

* Use fields like `transactionId`, `userId`, `amount`, `currency`, `status`, `timestamp`
* Add a **unique index on `transactionId`** for idempotency
* **Compound indexes** on `userId + timestamp` for efficient querying
* Store amounts in **minor units** (e.g., paise, cents) to avoid float precision issues

> ✅ Ensures **accuracy**, **traceability**, and **fast user-centric queries**


### **Working set**

* The **working set** is the subset of data and indexes actively used
* If it **fits in RAM**, MongoDB avoids disk I/O → **high performance**
* Use `db.collection.stats()` and `db.serverStatus()` to monitor memory usage

> ✅ **Optimize indexes** and **prune old data** to keep the working set small

---






###  **Impact of schema-less design on validation/consistency?**

* MongoDB is schema-less by default, but:

  * Use **JSON Schema validation** at the collection level (since v3.6)
  * In Mongoose (Node.js), enforce strict schemas and data types
* Helps catch malformed data **early in dev**

> ✅ Schema validation is **critical in financial and enterprise systems**

---

###  **Ensuring high availability and fault tolerance?**

* Use a **replica set**: 1 primary + 2+ secondaries
* Set **write concern** (`w: majority`) and **read preference** (`nearest` or `secondaryPreferred`)
* Automated failover ensures continuity
* Backups via **oplog + snapshots** in MongoDB Atlas or custom tooling

> ✅ **Replica sets** provide durability and high uptime

---

###  **Optimizing multiple `$lookup` operations in aggregations?**

* Keep joined collections **small** (e.g., lookup from `currencies` or `countries`)
* Move `$lookup` **later** in the pipeline to reduce processed docs
* Add **indexes on foreign fields** (e.g., `localField` in `$lookup`)
* Sometimes **denormalize** frequently joined data into source collection

> ✅ `$lookup` can be expensive — keep pipeline stages efficient

---

###  **Migrating data between clusters or from SQL to MongoDB?**

* Used **MongoDB Atlas Live Migration** and **`mongodump`/`mongorestore`**
* Migrated schema using **ETL pipelines** (e.g., with Apache NiFi or custom scripts)
* Ensured **data consistency** using checksums and staging phases
* Cutover done during **low-traffic hours** with rollback plan

> ✅ Minimized downtime and validated integrity post-migration


### **Monitoring and tuning MongoDB in production?**

* Use **MongoDB Atlas** for monitoring slow queries, disk I/O, CPU/memory
* Enable **database profiler** and review slow ops
* Regularly check `db.collection.stats()`, `db.currentOp()`
* Use **connection pooling**, **capped collections**, and **cache sizing**

> ✅ Proactive tuning avoids performance degradation under load


### **Design schema for audit logs/historical data?**

* Use **append-only** model with `eventId`, `timestamp`, `userId`, `action`, `payload`
* Add a **TTL index** (if retention limited) or partition by date (e.g., `audit_2025_07`)
* Store snapshots if the structure evolves (e.g., embed full object)

> ✅ Audit logs should be **immutable**, **timestamped**, and **queryable**





## Which Shard Need To Use

> In a sharded MongoDB cluster, all **client queries go through a `mongos` router**. `mongos` is responsible for routing the **query to the appropriate shard(s) based on the shard key**.**
>
> When a **query has full shard key, `mongos` uses the cluster metadata** — specifically the **`config.chunks` and `config.shards` collections** — to find out exactly which chunk the data falls into, and which shard holds that chunk.**
>
> This allows **MongoDB to perform a *targeted query*, hitting just one shard**. That makes it much faster and more efficient than broadcasting to all shards.
>
> On the other hand, if the **query doesn’t have shard key or includes only part of a compound shard key**, MongoDB has no way to know where the data is, so **`mongos` has to perform a *scatter-gather query* across all shards** and then merge the results. That’s **slower and should be avoided** in performance-critical paths.**
>
> In my past projects, I always designed shard keys based on our most common query patterns to ensure they were used in the majority of our `find` or aggregation operations — which kept queries targeted and performance consistent as we scaled.**"


> “For example, in one of our applications, we sharded the `videos` collection by `uploadedAt`, and we made sure every user-facing query always included that field. We also monitored with `.explain()` to ensure only one shard was used — especially during peak traffic hours.”













## WHERE Vs HAVING Vs GROUP BY

- `WHERE` filters rows **before grouping**,
- `HAVING` filters **after grouping** (used with `GROUP BY`).
- `GROUP BY` It groups rows sharing a property so aggregate functions like `SUM`, `COUNT`, or `AVG` can be applied to each group.



```sql
-- Employees with salary > 50000
SELECT * FROM employees
WHERE salary > 50000;
```


```sql
-- Departments with average salary > 45000
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 45000;
```


```sql
Combining WHERE + HAVING
-- Only consider employees with salary > 30000, then group and filter
SELECT department, COUNT(*) AS total, AVG(salary) AS avg_sal
FROM employees
WHERE salary > 30000
GROUP BY department
HAVING AVG(salary) > 45000;
```





## `INNER JOIN` vs `LEFT JOIN` vs `RIGHT JOIN`


- **`INNER JOIN`**: Returns only rows with **matching keys** in both tables.
- **`LEFT JOIN`**: Returns **all rows from the left** table + matched rows from the right.
- **`RIGHT JOIN`**: Returns **all rows from the right** table + matched rows from the left.
* Use `INNER JOIN` when you need **only matches**.
* Use `LEFT JOIN` when you need **all left rows**, even without matches.
* Use `RIGHT JOIN` when you need **all right rows**, even without matches.

---

### 🧱 Sample Tables



```sql
-- create
CREATE TABLE employ1 (
  id INTEGER PRIMARY KEY,  name TEXT NOT NULL,  gender TEXT NOT NULL
);


CREATE TABLE employ2 (
  id INTEGER PRIMARY KEY,  employ1ID TEXT NOT NULL,  gender TEXT NOT NULL,
  name TEXT NOT NULL
);
```

```sql
-- insert
INSERT INTO employ1 VALUES (1, 'Clark', 'Sales');
INSERT INTO employ1 VALUES (2, 'Dave', 'Accounting');
INSERT INTO employ1 VALUES (3, 'Ava', 'Sales');

INSERT INTO employ2 VALUES (1,4, 'Clark', 'Sales');
INSERT INTO employ2 VALUES (2,3, 'Dave', 'Accounting');
INSERT INTO employ2 VALUES (3,5, 'Ava', 'Sales');
```

```sql
SELECT employ1.id, employ1.name, employ1.gender
FROM employ1
INNER JOIN employ2 ON employ2.employ1ID = employ1.id;

+----+------+--------+
| id | name | gender |
+----+------+--------+
|  3 | Ava  | Sales  |
+----+------+--------+
```

```sql
SELECT employ1.id, employ1.name, employ2.gender
FROM employ1
LEFT JOIN employ2 ON employ2.employ1ID = employ1.id;

+----+-------+--------+
| id | name  | gender |
+----+-------+--------+
|  1 | Clark | NULL   |
|  2 | Dave  | NULL   |
|  3 | Ava   | Dave   |
+----+-------+--------+
```

```sql
SELECT employ2.id, employ2.name, employ2.gender, employ1.id AS employ1_id
FROM employ1
RIGHT JOIN employ2 ON employ2.employ1ID = employ1.id;


+----+------------+--------+------------+
| id | name       | gender | employ1_id |
+----+------------+--------+------------+
|  1 | Sales      | Clark  |       NULL |
|  2 | Accounting | Dave   |          3 |
|  3 | Sales      | Ava    |       NULL |
+----+------------+--------+------------+

SELECT employ1.id, employ1.name, employ2.gender
FROM employ1
RIGHT JOIN employ2 ON employ2.employ1ID = employ1.id;

+------+------+--------+
| id   | name | gender |
+------+------+--------+
| NULL | NULL | Clark  |
|    3 | Ava  | Dave   |
| NULL | NULL | Ava    |
+------+------+--------+
```



#### 🔹 `employees`
| id | name    | dept_id |
|----|---------|---------|
| 1  | Alice   | 10      |
| 2  | Bob     | 20      |
| 3  | Charlie | NULL    |

#### 🔹 `departments`
| id  | dept_name   |
|-----|-------------|
| 10  | IT          |
| 30  | HR          |

---

### ✅ 1. `INNER JOIN`
```sql
SELECT e.name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id;
````

**Output:**

| name  | dept\_name |
| ----- | ---------- |
| Alice | IT         |

---

### ✅ 2. `LEFT JOIN`

```sql
SELECT e.name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id;
```

**Output:**

| name    | dept\_name |
| ------- | ---------- |
| Alice   | IT         |
| Bob     | NULL       |
| Charlie | NULL       |

---

### ✅ 3. `RIGHT JOIN`

```sql
SELECT e.name, d.dept_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.id;
```

**Output:**

| name  | dept\_name |
| ----- | ---------- |
| Alice | IT         |
| NULL  | HR         |

---













## Primary Key vs Foreign Key vs Composite Key

* **Primary key** when one field is enough to identify a record.
* **Foreign key** to create relationships across tables.
* **Composite key** when a combination is required for uniqueness.


### Primary Key
- Uniquely identifies each record in a table.
- Cannot contain `NULL`.
- Only one primary key allowed per table.

```sql
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100)
);
```


### Foreign Key

* References the **primary key** of another table.
* Ensures **referential integrity** between related tables.

```sql
CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);
```


### Composite Key

* A **primary key made of two or more columns**.
* Useful when a single column cannot uniquely identify a row.

```sql
CREATE TABLE student_course (
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    PRIMARY KEY (student_id, course_id)
);
```





## `UNION` and `UNION ALL`

- **`UNION`**: Combines results from two queries and **removes duplicates**.
- **`UNION ALL`**: Combines results and **includes all duplicates**.

| Feature     | `UNION`                          | `UNION ALL`                   |
| ----------- | -------------------------------- | ----------------------------- |
| Duplicates  | Removed                          | Kept                          |
| Performance | Slower (due to sorting)          | Faster (no sorting)           |
| Use case    | When you need **unique** results | When you want **all records** |

---

### ✅ Example

#### 🔹 Table: `employees_2023`
| name    |
|---------|
| Alice   |
| Bob     |

#### 🔹 Table: `employees_2024`
| name    |
|---------|
| Bob     |
| Charlie |

---

### ✅ Using `UNION`
```sql
SELECT name FROM employees_2023
UNION
SELECT name FROM employees_2024;
````

**Result:**

| name    |
| ------- |
| Alice   |
| Bob     |
| Charlie |

> ✅ Duplicates like "Bob" are removed.

---

### ✅ Using `UNION ALL`

```sql
SELECT name FROM employees_2023
UNION ALL
SELECT name FROM employees_2024;
```

**Result:**

| name    |
| ------- |
| Alice   |
| Bob     |
| Bob     |
| Charlie |

> 🔁 Keeps **all occurrences**, including duplicates.

---


 ## Normalization

- A process of organizing data to reduce redundancy and improve data integrity 
- Involves dividing tables into smaller ones and defining relationships.
- Normalization is the process of organizing data to reduce redundancy and dependency.
- It improves data integrity and reduces storage cost. Key normal forms include:

* **1NF**: Eliminate repeating groups, ensure atomicity.
* **2NF**: Remove partial dependencies.
* **3NF**: Remove transitive dependencies.



## Subquery vs Correlated Subquery

| Feature     | Subquery                    | Correlated Subquery                        |
| ----------- | --------------------------- | ------------------------------------------ |
| Execution   | Runs once                   | Runs per row of outer query                |
| Dependency  | Independent                 | Depends on outer query                     |
| Performance | Generally faster            | Can be slower (due to multiple executions) |
| Use Case    | Comparing with fixed result | Row-by-row comparison with context         |


### ✅ Subquery
- A subquery (or nested query) is executed **once**, independently of the outer query, and its result is used by the main query.

```sql
-- Find employees with salary greater than the average salary
SELECT name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary) FROM employees
);
```

🔹 **Explanation**:

* The subquery `SELECT AVG(salary)` runs **once**.
* Its result is compared with each employee's salary.


### ✅ Correlated Subquery

- A correlated subquery **depends on values from the outer query**. It runs **once per row** of the outer query.

```sql
-- Find employees who earn more than the average salary of their department
SELECT e1.name, e1.salary, e1.department_id
FROM employees e1
WHERE e1.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department_id = e1.department_id
);
```

🔹 **Explanation**:

* The subquery uses `e1.department_id` from the outer query.
* It runs **for each row** in the outer query.











## Indexes

- Indexes are special data structures that **speed up read queries** by allowing the database to find data faster—much like a book index.


### 🧠 Why Use Indexes?
- Improve SELECT performance
- Reduce disk I/O
- Help with JOINs, WHERE, ORDER BY, GROUP BY clauses


| Index Type | Purpose                         | Best Use Case                  |
| ---------- | ------------------------------- | ------------------------------ |
| B-tree     | Fast lookup, range scan         | Most general queries           |
| Bitmap     | Compact for few distinct values | Gender, flags (true/false)     |
| Full-text  | Search within large text        | Blog, article search           |
| Composite  | Multi-column filtering          | `(A, B)` WHERE A = ? AND B = ? |
| Unique     | Enforce uniqueness              | Email, usernames               |




### 🛠️ Types of Indexes

#### 🔹 1. **B-tree Index** *(Default in most DBs like MySQL, PostgreSQL)*
- Balanced tree structure.
- Efficient for **range queries**, equality, and sorting.

```sql
CREATE INDEX idx_name ON employees(name);
````

#### 🔹 2. **Bitmap Index**

* Uses bits (0/1) for each distinct value.
* Efficient for **low-cardinality columns** (e.g., gender, status).
* Mostly found in **data warehousing systems** (e.g., Oracle).

```sql
-- Conceptual only: Syntax varies by RDBMS
```

#### 🔹 3. **Full-Text Index**

* Used for searching large blocks of **text** (e.g., articles, descriptions).
* Supports `MATCH()` and `AGAINST()` in MySQL.

```sql
CREATE FULLTEXT INDEX idx_description ON products(description);
```

#### 🔹 4. **Composite Index**

* Index on **multiple columns**.
* Order of columns matters for efficiency.

```sql
CREATE INDEX idx_emp_dept ON employees(department_id, name);
```

#### 🔹 5. **Unique Index**

* Enforces uniqueness in the indexed column(s).
* Automatically created with `PRIMARY KEY` or `UNIQUE`.

```sql
CREATE UNIQUE INDEX idx_email ON users(email);
```



### Index Drawbacks

* Too many indexes can slow down `INSERT`, `UPDATE`, `DELETE`
* Choose indexes based on query patterns
* Use `EXPLAIN` (MySQL) or `EXPLAIN ANALYZE` (Postgres) to monitor index usage
* While indexes improve **read/query performance**, they come with trade-offs.


### 🔻 1. **Slower Write Operations**
- **INSERT**, **UPDATE**, and **DELETE** operations become slower.
- Every time data changes, **indexes must be updated** too.

```txt
More indexes = more overhead during data modifications.
```


### 🔻 2. **Increased Storage Usage**

* Indexes consume additional **disk space**.
* Composite and full-text indexes can take up **significant space**.


### 🔻 3. **Complex Maintenance**

* Need regular **monitoring**, especially in frequently changing data.
* May require **rebuilding** or **analyzing** for performance tuning.

---

### 🔻 4. **Risk of Over-Indexing**

* Too many indexes can **confuse the query planner**.
* May result in suboptimal plans and **slower queries**.

---

### 🔻 5. **Not Always Used**

* The database **may not use an index** if:

  * The table is small.
  * Query doesn’t match the index columns properly.
  * The index is fragmented or outdated.

---

### 🧠 Tip:

- Always design indexes **based on query patterns**, not just table structure.

Use tools like:

```sql
EXPLAIN
EXPLAIN ANALYZE
```
to verify whether your indexes are helping.

















## CTE

- A **CTE** is a **temporary named result set** defined using the `WITH` clause.  
- It simplifies complex queries, especially with **multi-step logic**, **recursive queries**, or **self-joins**.


### ✅ Benefits of Using CTEs
- Improves **readability** and **maintainability**
- Allows **recursion**
- Can be **referenced multiple times** within the same query

---

### 🛠️ Syntax (Non-recursive CTE)
```sql
WITH cte_name AS (
  SELECT column1, column2
  FROM table_name
  WHERE condition
)
SELECT * FROM cte_name
WHERE column1 > 100;
````

---

## Write a Recursive Query Using CTE

- Recursive CTEs are used to handle **hierarchical or tree-structured data**.

---

### 🗂️ Example: Category Hierarchy

Assume a table:

```sql
CREATE TABLE categories (
  id INT,
  parent_id INT
);
```

### 🔄 Recursive CTE Query

```sql
WITH RECURSIVE cte AS (
  -- Anchor member: top-level categories
  SELECT id, parent_id
  FROM categories
  WHERE parent_id IS NULL

  UNION ALL

  -- Recursive member: get children of previous level
  SELECT c.id, c.parent_id
  FROM categories c
  JOIN cte ON c.parent_id = cte.id
)
SELECT * FROM cte;
```


### 📌 Use Cases for Recursive CTEs

* Organization charts
* File/folder hierarchy
* Comment threads
* Dependency chains


 ## **Detect and avoid SQL injection**

- Always use parameterized queries or ORM methods that escape input. 
- Avoid string concatenation in queries.



## Window Functions

- A **window function** performs a calculation across a **set of rows related to the current row**, without collapsing rows like `GROUP BY` does.


**Key Features:**
- Retains **individual rows**.
- Works over a **"window" of rows** defined by `OVER()` clause.
- Useful for **rankings**, **running totals**, **moving averages**, etc.

**Common Window Functions:**
- `ROW_NUMBER()`
- `RANK()`, `DENSE_RANK()`
- `SUM()`, `AVG()` over a partition
- `LEAD()`, `LAG()` for previous/next row access

**Sample Table: `sales`**

| id | salesperson | region | amount |
|----|-------------|--------|--------|
| 1  | Alice       | East   | 500    |
| 2  | Bob         | East   | 700    |
| 3  | Alice       | East   | 600    |
| 4  | Carol       | West   | 300    |
| 5  | Bob         | East   | 400    |



**Example 1: Running Total Using `SUM() OVER()`**

```sql
SELECT
  salesperson,
  amount,
  SUM(amount) OVER (PARTITION BY salesperson ORDER BY id) AS running_total
FROM sales;
````

**🔍 Explanation:**

* `PARTITION BY salesperson`: Window restarts per salesperson
* `ORDER BY id`: Running total in row order


**Example 2: Row Number**

```sql
SELECT
  salesperson,
  amount,
  ROW_NUMBER() OVER (PARTITION BY region ORDER BY amount DESC) AS row_num
FROM sales;
```

**🔍 Explanation:**

* Assigns a unique row number **within each region**, ordered by amount


### 🧠 Summary

| Clause         | Purpose                                                  |
| -------------- | -------------------------------------------------------- |
| `OVER()`       | Defines the window of rows                               |
| `PARTITION BY` | Divides data into groups (like GROUP BY, but keeps rows) |
| `ORDER BY`     | Specifies order within the partition                     |


### 📌 Use Cases:

* Ranking within groups
* Running totals
* Percentiles
* First/Last value per group
* Gap detection using `LEAD()` / `LAG()`



### **3rd Largest Value**

```sql
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 2; -- 3rd highest
```


### **`IN` Operator**

- Used to check if a value is within a list of values.

```sql
SELECT * FROM employees
WHERE department_id IN (1, 3, 5);
```

### **Return records without NULL `name`**

```sql
SELECT * FROM employees
WHERE name IS NOT NULL;
```

### **Pagination**

- Using `LIMIT` and `OFFSET` to paginate results.

```sql
-- Page 2, 10 records per page
SELECT * FROM employees
LIMIT 10 OFFSET 10;
```


### **Single update Gender vice versa**

```sql
UPDATE employees
SET gender = CASE
    WHEN gender = 'M' THEN 'F'
    WHEN gender = 'F' THEN 'M'
    ELSE gender
END;
```



### **Find duplicate rows**
   ```sql
   SELECT column1, COUNT(*) 
   FROM table_name 
   GROUP BY column1 
   HAVING COUNT(*) > 1;
   ```

### **Update data in one table based on another**
   ```sql
   UPDATE t1
   SET t1.column = t2.value
   FROM table1 t1
   JOIN table2 t2 ON t1.id = t2.id;
   ```

### **Second highest salary**
```sql
SELECT MAX(salary)
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
```

### **Find duplicate salaries**

```sql
SELECT salary, COUNT(*) as count
FROM employees
GROUP BY salary
HAVING COUNT(*) > 1;
```

📌 **Output:**

| salary | count |
| ------ | ----- |
| 80000  | 2     |

---

### **Get total salary by department**

```sql
SELECT department, SUM(salary) AS total_salary
FROM employees
GROUP BY department;
```

📌 **Output:**

| department | total\_salary |
| ---------- | ------------- |
| HR         | 110000        |
| IT         | 235000        |
| Finance    | 90000         |

---

### **window function to rank salaries within departments**

```sql
SELECT name, department, salary,
  RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank
FROM employees;
```

📌 **Output:**

| name    | department | salary | dept\_rank |
| ------- | ---------- | ------ | ---------- |
| Alice   | HR         | 60000  | 1          |
| Dave    | HR         | 50000  | 2          |
| Bob     | IT         | 80000  | 1          |
| Frank   | IT         | 80000  | 1          |
| Charlie | IT         | 75000  | 3          |
| Eve     | Finance    | 90000  | 1          |

---

### **Recursive CTE – Build employee hierarchy (self-join style)**

Assume a simplified table:

**`employee_hierarchy`**

| id | name     | manager\_id |
| -- | -------- | ----------- |
| 1  | CEO      | NULL        |
| 2  | VP1      | 1           |
| 3  | VP2      | 1           |
| 4  | Manager1 | 2           |
| 5  | Dev1     | 4           |

```sql
WITH RECURSIVE emp_cte AS (
  SELECT id, name, manager_id, 1 AS level
  FROM employee_hierarchy
  WHERE manager_id IS NULL

  UNION ALL

  SELECT e.id, e.name, e.manager_id, c.level + 1
  FROM employee_hierarchy e
  JOIN emp_cte c ON e.manager_id = c.id
)
SELECT * FROM emp_cte;
```

📌 **Output:**

| id | name     | manager\_id | level |
| -- | -------- | ----------- | ----- |
| 1  | CEO      | NULL        | 1     |
| 2  | VP1      | 1           | 2     |
| 3  | VP2      | 1           | 2     |
| 4  | Manager1 | 2           | 3     |
| 5  | Dev1     | 4           | 4     |

---






## TRUNCATE vs DELETE vs DROP


* Use `DELETE` when you need to **conditionally remove rows**.
* Use `TRUNCATE` for **quickly clearing tables**, especially in staging/testing.
* Use `DROP` when you want to **remove the table entirely**.

| Feature                 | DELETE    | TRUNCATE        | DROP            |
| ----------------------- | --------- | --------------- | --------------- |
| Removes Data            | ✅ Yes     | ✅ Yes           | ✅ Yes           |
| Can Use `WHERE`         | ✅ Yes     | ❌ No            | ❌ No            |
| Rollback Possible       | ✅ Yes     | ⚠ Depends on DB | ❌ Usually No    |
| Fires Triggers          | ✅ Yes     | ❌ No            | ❌ No            |
| Affects Table Structure | ❌ No      | ❌ No            | ✅ Yes           |
| Resets Auto-Increment   | ❌ No      | ✅ Yes           | ✅ N/A (removed) |
| Speed                   | 🐢 Slower | ⚡ Fast          | ⚡ Fastest       |



### ✅ 1. `DELETE`

- Removes **rows** from a table **one by one**.

- Can include a `WHERE` clause
- Can be **rolled back** (if inside a transaction)
- Triggers **are fired**
- Table structure & schema remain

```sql
DELETE FROM employees WHERE department = 'HR';
````

---

### ✅ 2. `TRUNCATE`

- Removes **all rows** from a table **instantly** (bulk operation).

* ❌ No `WHERE` clause allowed
* ⚡ Very fast (less logging)
* ✅ Resets auto-increment counter
* ⚠ Cannot be rolled back in some DBs (e.g., MySQL)
* ❌ Triggers are **not** fired

```sql
TRUNCATE TABLE employees;
```

---

### ✅ 3. `DROP`

- Completely **removes the table structure**, data, and definition.

* Table is **gone** from the database
* ❌ Cannot be rolled back (unless inside a transaction in PostgreSQL)
* ❌ All dependent objects (indexes, constraints) are also removed

```sql
DROP TABLE employees;
```





## Zero Downtime Migration


### Zero-downtime migration
- A deployment or schema change that **does not interrupt service** or break existing functionality — critical for high-availability systems.

### Zero downtime important
- Prevents user disruption
- Ensures 24/7 uptime
- Protects transactional consistency during schema changes

### Challenges in zero-downtime DB migrations
- Schema incompatibility between old and new code
- Data loss or inconsistency
- Long-running locks
- Application crashes due to removed/renamed columns

### Practices for zero-downtime schema changes

| Change Type        | Strategy                                 |
|--------------------|-------------------------------------------|
| Add Column         | ✅ Safe (default nullable)                |
| Remove Column      | ❌ Avoid immediately — use soft-deprecate |
| Rename Column      | ❌ Breaks old code — add alias + migrate  |
| Add NOT NULL Field | Fill with default values in advance       |


### Expand and Contract pattern
- A **3-phase** strategy:
1. **Expand**: Add new columns, tables, or structures
2. **Migrate**: Populate data and dual-write
3. **Contract**: Safely remove old structures once unused


### **Handle column renames with zero downtime**
- Add the **new column** (with default or NULL)
- Update application to **write to both columns**
- Gradually migrate data
- Switch reads to new column
- Drop old column in a later deploy


### **Dual writing**
- Writing to both **old and new schema versions** during transition.
- Ensures backward compatibility
- Used in **blue-green deployments** or gradual cutovers


### **Application compatibility during a migration**
- Use **feature flags**
- Update schema in a **backward-compatible way**
- Deploy code changes in **multiple phases**


### **zero downtime migrations**
- Use **staging environments**
- Run migrations inside a transaction (if supported)
- Test rollback scripts
- Monitor query performance and logs

### **Platforms help with zero-downtime DB migrations**
- **Flyway**, **Liquibase**, **Prisma Migrate**, **Alembic** (Python)
- CI/CD platforms: **GitHub Actions**, **GitLab CI**, **ArgoCD**
- Blue-Green or Canary Deployments with **Kubernetes**


### **TRUNCATE or DROP in zero-downtime migrations**
- ⚠ Generally **not safe**, as they lock or destroy objects. Use:
- `DELETE` in small batches
- Mark columns as deprecated first, drop later


### **Handle long-running migrations**
- **Break into batches**
- **Copy to shadow table** and swap with minimal downtime
- Use **online schema change tools** (e.g., pt-online-schema-change for MySQL)


### **Rollback strategy for schema changes**
- Back up the database before changes
- Write **down** migrations (revert scripts)
- Keep deployments **idempotent**
- Monitor for issues before proceeding to next phase



### Common Mistake Scenarios

| Scenario               | Problem                         | Solution                          |
| ---------------------- | ------------------------------- | --------------------------------- |
| Dropping a column      | Causes app crash                | Use soft deprecate + remove later |
| Renaming column        | Breaks API integration          | Add alias or migration layer      |
| Adding NOT NULL column | Fails if existing rows are null | Fill default values first         |





## Rollback Strategy in DB Migration

- A **rollback strategy** ensures that if something goes wrong during a migration (schema or data), 
- The system can **safely revert** to the previous stable state.


**Why is Rollback Important**
- Prevents data corruption
- Minimizes downtime
- Ensures application stability
- Supports CI/CD and production safety


**Rollback Strategy Components**

**1. Backups Before Migration**
- Always back up the database (snapshot, export, or dump).
```sh
pg_dump db_name > backup.sql
```

**2. Transactional Migrations**

* Wrap schema/data changes inside a **transaction**, so failure auto-rolls back.

```sql
BEGIN;

-- migration steps

COMMIT; -- or ROLLBACK on error
```

✅ Supported in: PostgreSQL, Oracle
❌ Not fully supported in: MySQL (for some DDL operations)

---

**3. Reversible Migrations**

* Write both **`up`** (apply) and **`down`** (revert) migration scripts.

**Example (Flyway or Liquibase style):**

```sql
-- V1__add_email_column.sql (UP)
ALTER TABLE users ADD COLUMN email VARCHAR(100);

-- V1__add_email_column_down.sql (DOWN)
ALTER TABLE users DROP COLUMN email;
```

---

**4. Version Control for DB Schema**

* Use migration tools to version schema (e.g., Flyway, Liquibase, Prisma, Alembic).


**5. Feature Flags**

* Roll out DB changes in conjunction with **code toggles** to isolate new behavior.


**6. Staged/Phased Rollouts**

* Use **dual writes** and **shadow tables**.
* Phase changes to ensure no hard dependency breaks.


## Rollback Considerations

| Scenario                | Rollback Risk/Approach             |
| ----------------------- | ---------------------------------- |
| Dropping a column/table | ✅ Back up or delay — hard to undo  |
| Data transformation     | ✅ Snapshot before change           |
| Renaming columns        | ✅ Use aliasing + phased read/write |
| Large data change       | ✅ Run in chunks + audit logs       |

* ✅ Test migrations & rollbacks in **staging**
* ✅ Monitor logs/queries during migration
* ✅ Document each migration and its fallback plan
* ✅ Avoid irreversible changes in a single deploy


## Data Safety During Migrations

- Data safety ensures that during database schema or data migrations, 
- **no data is lost**, **corrupted**, or made **inconsistent**, especially in production environments.

1. Take backups
2. Use transactions
3. Test in staging
4. Write reversible scripts
5. Monitor during & after



## Database migration

* Moving database schema/data from one version or system to another.
* Includes: schema changes, data transformation, and versioning.
* Use tools like **Flyway**, **Liquibase**, or ORM-based migration systems (e.g., Sequelize, Prisma).
* Use **version-controlled scripts** and CI/CD pipelines.




## **Triggers**


### **Trigger**

* A **stored procedure** that runs **automatically** on `INSERT`, `UPDATE`, or `DELETE`.
* Used for **audit logging**, **data validation**, **auto-updates**, and **business rules**.


### **Trigger Use Case**

* **Audit Log Example**:
  On `BEFORE UPDATE` of a `users` table, insert `OLD.name` and `OLD.email` into `users_audit`.


### **How to Configure a Trigger (MySQL example)**

```sql
DELIMITER $$

CREATE TRIGGER before_user_update
BEFORE UPDATE ON users
FOR EACH ROW
BEGIN
  INSERT INTO users_audit (user_id, old_name, old_email)
  VALUES (OLD.id, OLD.name, OLD.email);
END $$

DELIMITER ;
```


### **Trigger Integration in Node.js**

* Triggers run **automatically** after a DB operation.
* Works with **ORMs like Sequelize** or **raw SQL queries**.
* No special code needed in Node.js.


### **How to Check Triggers**

* **MySQL**: `SHOW TRIGGERS LIKE 'users';`\n
* **PostgreSQL**: Query `information_schema.triggers`.


### **When to Use Triggers**

* Lightweight tasks like:

  * Logging
  * Field auto-population
  * Soft deletes


###  **When *Not* to Use Triggers**

* For **complex business logic** or workflows → better in application layer.
* Hard to test, debug, and version in large systems.


### Best Practices

* Use **`BEFORE`** for validation.
* Use **`AFTER`** for logging.
* Always document and keep logic minimal.
* Test by performing actual data changes and verifying results.



## **Stored Procedure**


###  **Stored Procedure**

* A **precompiled set of SQL statements** stored in the **database**.
* Used to **encapsulate logic** like insert, update, delete, and return values.


###  **Why Use Stored Procedures?**

| Benefit                | Notes                                                |
| ---------------------- | ---------------------------------------------------- |
| 🚀 **Performance**     | Faster execution due to precompilation               |
| 🔁 **Reusability**     | Can be called from multiple app modules              |
| 🔒 **Security**        | Access control via procedure, not directly to tables |
| 🧹 **Maintainability** | Keeps complex logic out of the application layer     |


###  **Real Use Case Example**

* Insert a user and **return the inserted ID** using `LAST_INSERT_ID()` via `OUT` parameter.
* Avoids logic duplication and keeps Node.js code minimal.

### Example
```sql
DELIMITER $$
CREATE PROCEDURE insert_user(
  IN in_name VARCHAR(100),
  IN in_email VARCHAR(100),
  OUT out_id INT
)
BEGIN
  INSERT INTO users(name, email)
  VALUES (in_name, in_email);

  SET out_id = LAST_INSERT_ID();
END $$
DELIMITER ;
```


###  **Node.js Integration**

```js
await db.query('CALL insert_user(?, ?, @id)', ['John', 'john@example.com']);
const [[{ '@id': id }]] = await db.query('SELECT @id');
```

* Works smoothly with `mysql2` or `mysql2/promise`.
* Easy to integrate with async/await workflows.


###  **Best Practices**

* Clear naming of `IN`, `OUT`, `INOUT` parameters.
* Use `DECLARE HANDLER` for error handling inside the procedure.
* Keep the logic focused and efficient.
* Test independently in DB before application integration.


###  **When to Avoid Stored Procedures**

* Complex business logic that needs frequent changes → better in app code.
* Difficult to version and test as part of a CI/CD pipeline.
* Can reduce visibility when using ORMs.




## Approaches to Insert Unique IDs Without Auto Increment or Primary Key

- If I don’t have a primary key or auto-increment
- I usually go with a UUID strategy for global uniqueness or a sequence table for controlled numeric IDs.
- In one project, I used a sequence table with transaction locks to safely generate IDs across inserts. 
- In Node.js, I typically generate UUIDs using the `uuid` package before inserting data.

| Concern               | Recommendation                                   |
| --------------------- | ------------------------------------------------ |
| 🔄 **Uniqueness**     | Enforce uniqueness with a `UNIQUE` constraint    |
| 🔍 **Query Speed**    | Index the custom ID field                        |
| 🔒 **Collision Risk** | Use UUID or sequence to avoid duplicates         |
| 💾 **Readability**    | UUIDs are long; sequences are better for reports |

---

### **UUID (Universally Unique Identifier)**

- Best for distributed systems or when strict ordering is not needed.

#### 💡 SQL Example (MySQL):

```sql
CREATE TABLE users (
  user_id CHAR(36) NOT NULL,
  name VARCHAR(100)
);
```

#### ✅ Insert using `UUID()`:

```sql
INSERT INTO users (user_id, name)
VALUES (UUID(), 'John Doe');
```

#### ✅ From Node.js:

```js
const { v4: uuidv4 } = require('uuid');

const id = uuidv4();
await db.query('INSERT INTO users (user_id, name) VALUES (?, ?)', [id, 'John']);
```

---

### **Custom Sequence Table (Manual Counter)**

✅ Good if you need numeric IDs but don’t have auto-increment.

#### 💡 Create a sequence table:

```sql
CREATE TABLE id_sequence (
  entity_name VARCHAR(50) PRIMARY KEY,
  current_id INT NOT NULL
);

INSERT INTO id_sequence VALUES ('users', 1000);
```

#### 💡 Use Stored Procedure or App Code to Generate ID:

```sql
START TRANSACTION;

UPDATE id_sequence
SET current_id = current_id + 1
WHERE entity_name = 'users';

SELECT current_id FROM id_sequence
WHERE entity_name = 'users';

COMMIT;
```

Then use that `current_id` in your insert.

---

### **Use TIMESTAMP + RANDOM (Low collision but not guaranteed unique)**

```sql
INSERT INTO users (user_id, name)
VALUES (CONCAT(UNIX_TIMESTAMP(), '-', FLOOR(RAND() * 10000)), 'Jane Doe');
```

Not recommended for production-level uniqueness guarantees.

---

### **4. Hash-Based ID (e.g., SHA1 or MD5 of meaningful fields)**

✅ Use when you can hash stable fields like email/username + timestamp.

```sql
INSERT INTO users (user_id, name)
VALUES (SHA1(CONCAT('john@example.com', NOW())), 'John');
```

---




# Normal Form


- I normalize all schemas to at least **3NF** to ensure data integrity. 
- In performance-critical or reporting scenarios, I might denormalize or apply **BCNF**/**4NF** selectively. 
- I also analyze access patterns to balance performance and consistency.”

## ✅ **1NF – First Normal Form (Atomic Columns)**

### 🔸 Rule: No repeating groups or arrays; atomic values only.

### ❌ **Violation Example**:

| StudentID | Name | PhoneNumbers |
| --------- | ---- | ------------ |
| 1         | John | 12345, 67890 |

Here, `PhoneNumbers` has multiple values in one cell – violates 1NF.

### ✅ **1NF Fix**:

| StudentID | Name | PhoneNumber |
| --------- | ---- | ----------- |
| 1         | John | 12345       |
| 1         | John | 67890       |

---

## ✅ **2NF – Second Normal Form (No Partial Dependency)**

### 🔸 Rule: Must be in 1NF and all non-key columns should depend on the whole **composite key**.

### ❌ **Violation Example**:

| OrderID | ProductID | ProductName |
| ------- | --------- | ----------- |

Assume primary key is `(OrderID, ProductID)`
But `ProductName` depends only on `ProductID`, not the full key.

### ✅ **2NF Fix**:

Split into two tables:

1. `Orders(OrderID, ProductID)`
2. `Products(ProductID, ProductName)`

---

## ✅ **3NF – Third Normal Form (No Transitive Dependency)**

### 🔸 Rule: Must be in 2NF and **no transitive dependency** (i.e., A → B → C)

### ❌ **Violation Example**:

| EmpID | EmpName | DeptID | DeptName |
| ----- | ------- | ------ | -------- |

Here, `DeptName` depends on `DeptID`, which depends on `EmpID`.

### ✅ **3NF Fix**:

Split into:

1. `Employees(EmpID, EmpName, DeptID)`
2. `Departments(DeptID, DeptName)`

---

## ✅ **BCNF – Boyce-Codd Normal Form**

### 🔸 Rule: Every determinant must be a candidate key.

### ❌ **Violation Example**:

| Professor | Subject | Department |
| --------- | ------- | ---------- |

Assume:

* A subject is taught by multiple professors
* Each subject belongs to only one department
  So: `Subject → Department` (not a candidate key) → violates BCNF.

### ✅ **BCNF Fix**:

Split into:

1. `Subjects(Subject, Department)`
2. `ProfessorSubjects(Professor, Subject)`

---

## ✅ **4NF – Fourth Normal Form (No Multi-Valued Dependencies)**

### 🔸 Rule: No table should have two independent multi-valued facts.

### ❌ **Violation Example**:

| Student | Language | Hobby    |
| ------- | -------- | -------- |
| John    | English  | Football |
| John    | Hindi    | Football |
| John    | English  | Music    |
| John    | Hindi    | Music    |

Here, `Language` and `Hobby` are independent multi-valued attributes → violates 4NF.

### ✅ **4NF Fix**:

Split into:

1. `StudentLanguages(Student, Language)`
2. `StudentHobbies(Student, Hobby)`

---

## ✅ **5NF – Fifth Normal Form (No Join Dependency Loss)**

### 🔸 Rule: No loss of information when joining decomposed tables.

### ❌ **Example Scenario**:

You decompose a table like:

\| Supplier | Product | Region |

into:

* `SupplierProducts(Supplier, Product)`
* `ProductRegions(Product, Region)`
* `SupplierRegions(Supplier, Region)`

But when joined back, **some combinations may be incorrect**.

### ✅ 5NF ensures:

All original combinations can be derived correctly without loss or incorrect additions.

---

### **Designing a database**

1. **Requirement Analysis** – Understand what data needs to be stored.
2. **Conceptual Design (ER Diagram)** – Identify entities and their relationships.
3. **Logical Design** – Define tables, fields, data types, primary/foreign keys.
4. **Normalization** – Eliminate redundancy and improve consistency.
5. **Physical Design** – Indexes, constraints, performance tuning.
6. **Security and Backup Planning** – Secure sensitive data and define backup strategy.


## Denormalization

Denormalization is the process of combining tables or duplicating data to improve read performance. It’s typically used in:

* Read-heavy systems.
* Reporting and analytics.
* When joins negatively affect performance.











 ## One to One One to Many Many to Many relationships

- In database design, 
- I use One-to-One for tightly coupled data, 
- One-to-Many for hierarchical structures like customers and orders, and 
- Many-to-Many for flexible mappings using a join table — like users and roles, or students and courses.”



## ✅ **1. One-to-One (1:1)**

### 📌 Definition:

Each row in **Table A** is linked to exactly one row in **Table B**, and vice versa.

### 💡 Example:

* Each **User** has **one Profile**.
* Each **Passport** is assigned to **one Person**.

### 🧱 Table Design:

```sql
-- Users Table
UserID | Name
-------|---------
1      | John

-- Profiles Table
ProfileID | UserID | Bio
----------|--------|------------
1         | 1      | "Developer"
```

### 🔗 Relationship:

* `Profiles.UserID` is a **foreign key** to `Users.UserID`.
* It should also be **UNIQUE** to enforce 1:1.

```sql
ALTER TABLE Profiles ADD CONSTRAINT fk_user FOREIGN KEY (UserID) REFERENCES Users(UserID);
ALTER TABLE Profiles ADD CONSTRAINT unique_user UNIQUE (UserID);
```

---

## ✅ **2. One-to-Many (1\:N)**

### 📌 Definition:

Each row in **Table A** can relate to **many rows** in **Table B**, but each row in B belongs to only **one row** in A.

### 💡 Example:

* One **Customer** can have many **Orders**.
* One **Author** writes many **Books**.

### 🧱 Table Design:

```sql
-- Customers Table
CustomerID | Name
-----------|-------
1          | Alice

-- Orders Table
OrderID | CustomerID | Amount
--------|------------|--------
101     | 1          | 500
102     | 1          | 300
```

### 🔗 Relationship:

* `Orders.CustomerID` is a **foreign key** to `Customers.CustomerID`.

```sql
ALTER TABLE Orders ADD CONSTRAINT fk_customer FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID);
```

---

## ✅ **3. Many-to-Many (M\:N)**

### 📌 Definition:

Each row in **Table A** can relate to **many rows** in **Table B**, and vice versa.

### 💡 Example:

* A **Student** can enroll in many **Courses**.
* A **Product** can belong to many **Categories**, and a **Category** can contain many **Products**.

### 🧱 Table Design:

You must use a **junction table** to manage the relationship.

```sql
-- Students Table
StudentID | Name
----------|------
1         | John
2         | Sarah

-- Courses Table
CourseID | Title
---------|---------
101      | Math
102      | Science

-- StudentCourses Table (Junction Table)
StudentID | CourseID
----------|---------
1         | 101
1         | 102
2         | 101
```

### 🔗 Relationships:

* `StudentCourses.StudentID` → `Students.StudentID`
* `StudentCourses.CourseID` → `Courses.CourseID`

```sql
ALTER TABLE StudentCourses
  ADD FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
  ADD FOREIGN KEY (CourseID) REFERENCES Courses(CourseID);
```

## Delete and Rollback

| Option                           | Reversible? | Recommended Use Case                    |
| -------------------------------- | ----------- | --------------------------------------- |
| `START TRANSACTION` + `ROLLBACK` | ✅ Yes       | Short-term manual delete inside session |
| Soft Delete (`is_deleted`)       | ✅ Yes       | Almost always – best practice           |
| Backup Table                     | ✅ Yes       | Batch deletes or scheduled cleanups     |
| Binary Log Recovery              | ✅ Yes       | Production-level undo, needs setup      |
| Trigger for Delete Log           | ✅ Yes       | Real-time audit trail                   |
| Foreign Key Constraints          | ❌ Prevents  | Structural protection, not rollback     |


**Transaction – Delete with Rollback** 
```sql
START TRANSACTION;

DELETE FROM employees WHERE id = 5;

-- Optional: Check if delete worked
SELECT * FROM employees WHERE id = 5;

-- Now rollback the delete
ROLLBACK;

-- Confirm rollback
SELECT * FROM employees WHERE id = 5;
```

**Triggers to Log Deletes**
```sql
CREATE TABLE employees_deleted_log (
  id INT, name VARCHAR(100), deleted_at DATETIME
);

DELIMITER $$
CREATE TRIGGER log_employee_delete
BEFORE DELETE ON employees
FOR EACH ROW
BEGIN
  INSERT INTO employees_deleted_log VALUES (OLD.id, OLD.name, NOW());
END$$
DELIMITER ;
```



## VIEW

- In MySQL, a **VIEW** is a **virtual table** based on the result of an SQL query. 
- It does **not store data** itself but provides a way to simplify complex queries, improve readability, or abstract certain logic.

---

### **Syntax to Create a View**

```sql
CREATE VIEW view_name AS
SELECT columns
FROM tables
WHERE conditions;
```

---

### **Example**

Suppose you have the following tables:

```sql
CREATE TABLE Employees (
    id INT,
    name VARCHAR(50),
    department_id INT
);

CREATE TABLE Departments (
    id INT,
    dept_name VARCHAR(50)
);
```

Insert Sample Data:

```sql
INSERT INTO Employees VALUES (1, 'Alice', 101), (2, 'Bob', 102), (3, 'Carol', 101);
INSERT INTO Departments VALUES (101, 'Engineering'), (102, 'HR');
```

Create a View to show employee name and department:

```sql
CREATE VIEW EmployeeWithDepartment AS
SELECT e.name, d.dept_name
FROM Employees e
JOIN Departments d ON e.department_id = d.id;
```

Use the View:

```sql
SELECT * FROM EmployeeWithDepartment;
```

🧾 **Output:**

```
+--------+--------------+
| name   | dept_name    |
+--------+--------------+
| Alice  | Engineering  |
| Bob    | HR           |
| Carol  | Engineering  |
+--------+--------------+
```

---

### **Additional View Commands**

* **Update a View:**

  ```sql
  CREATE OR REPLACE VIEW view_name AS
  SELECT ...
  ```

* **Drop a View:**

  ```sql
  DROP VIEW view_name;
  ```

* **Check View Definition:**

  ```sql
  SHOW CREATE VIEW view_name;
  ```

---




## **Triggers vs Stored Procedures**

| Feature               | **Trigger**                                                                | **Stored Procedure**                                                               |
| --------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Definition**        | A block of SQL code that **automatically executes** in response to events. | A **named block** of SQL code that executes when **explicitly called**.            |
| **Invocation**        | Automatically triggered by **DML events** (INSERT, UPDATE, DELETE).        | Manually invoked by **application code** or a SQL command (`CALL procedure_name`). |
| **Purpose**           | Used to **enforce business rules**, auditing, or validation at DB level.   | Used for **modularizing logic**, data processing, or repeated DB operations.       |
| **Execution Context** | Tied to a **table or view**. Executes as part of the transaction.          | Independent and can include **complex logic and flow control**.                    |
| **Performance**       | Can be **hard to debug** and impact performance silently.                  | Easier to monitor, test, and optimize.                                             |
| **Parameters**        | Cannot accept parameters.                                                  | Can accept **input/output/inout parameters**.                                      |
| **Use Case Examples** | - Audit table changes<br>- Enforce constraints                             | - Batch updates<br>- Reporting<br>- Encapsulate logic                              |

---

### ✅ **When to Use Which**

* **Use Triggers** when:

  * You need **automatic actions** based on DB changes.
  * Enforcing **auditing, logging, or integrity rules**.

* **Use Stored Procedures** when:

  * You want **reusable logic** with parameters.
  * Performing **multi-step operations** (e.g., data processing, reports).

---


##  **Constraints**

- Constraints **prevent bad data** from entering the system.
- Instead of relying only on application-level validations, they **add a strong layer of enforcement at the database level**, which is more secure and consistent.
- **Constraints** are rules applied to table columns to **enforce data integrity** and **prevent invalid data** from being inserted, updated, or deleted.

---

### 📌 **Types of Constraints**

| Constraint      | Description                                                              | Example Syntax                                    |
| --------------- | ------------------------------------------------------------------------ | ------------------------------------------------- |
| **NOT NULL**    | Ensures a column **cannot have NULL values**.                            | `name VARCHAR(100) NOT NULL`                      |
| **UNIQUE**      | Ensures all values in a column are **distinct**.                         | `email VARCHAR(100) UNIQUE`                       |
| **PRIMARY KEY** | A combination of **NOT NULL + UNIQUE**. Uniquely identifies each row.    | `PRIMARY KEY (id)`                                |
| **FOREIGN KEY** | Ensures referential integrity by linking to another table’s primary key. | `FOREIGN KEY (dept_id) REFERENCES department(id)` |
| **CHECK**       | Ensures values in a column meet a **specific condition**.                | `CHECK (salary >= 0)`                             |
| **DEFAULT**     | Sets a **default value** if no value is provided.                        | `status VARCHAR(10) DEFAULT 'active'`             |

---

### ✅ **Constraint Use Cases**

* Prevent NULLs where not allowed → `NOT NULL`
* Ensure unique identifiers → `PRIMARY KEY`
* Maintain consistent references → `FOREIGN KEY`
* Enforce domain rules → `CHECK`
* Auto-assign values → `DEFAULT`

---

### 🔄 **Example Table with Constraints**

```sql
CREATE TABLE Employee (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  salary DECIMAL(10,2) CHECK (salary > 0),
  dept_id INT,
  status VARCHAR(10) DEFAULT 'active',
  FOREIGN KEY (dept_id) REFERENCES Department(id)
);
```

### **Choosing the Right Isolation Level**

For critical operations like fund transfers, **I prefer SERIALIZABLE or at least REPEATABLE READ** to avoid:

This ensures consistent reads during a **transaction and prevents double-spending**.

* *Dirty Reads* → reading uncommitted changes from another transaction.
* *Non-repeatable Reads* → same query returning different results within one transaction.
* *Phantom Reads* → new rows appear/disappear during a transaction’s query.

* **Higher isolation = better consistency but lower performance** (due to more locking and blocking).
* **Lower isolation = better performance but risk of anomalies**.
* So, you choose the **right isolation level** depending on the **criticality of data vs. performance requirements**.

* But since **SERIALIZABLE can reduce performance**, I often go with **REPEATABLE READ combined with explicit row-level locking** (SELECT FOR UPDATE).

*  This ensures **consistent reads** during a transaction and **prevents double-spending**.

---


## Race Conditions
 - Ensures one withdrawal is processed at a time.


**MYSQL**
* In **MySQL**, use **row-level locking + transactions** (`SELECT … FOR UPDATE`).
* `SELECT … FOR UPDATE` prevents another transaction from reading/updating the same account until the current one finishes.
* Wrapping in `START TRANSACTION … COMMIT` ensures atomicity.
* If two withdrawals come in, the second one **waits** until the first completes.
* If you need maximum safety → set **isolation level = SERIALIZABLE**.

```sql
START TRANSACTION;

-- Lock the row so no other transaction can read/update until commit/rollback
SELECT balance 
FROM accounts 
WHERE account_id = 123 
FOR UPDATE;

-- Check sufficient funds
IF balance >= 8000 THEN
    UPDATE accounts
    SET balance = balance - 8000
    WHERE account_id = 123;
END IF;

COMMIT;
```
**MongoDB**

* In **MongoDB**, prefer **atomic conditional updates** for single-document operations, or use **transactions** for multi-document consistency.


**Single collection**
```javascript
// In MongoDB, you can do this atomically in a single update
db.accounts.updateOne(
  { _id: 123, balance: { $gte: 8000 } }, // condition: balance must be enough
  { $inc: { balance: -8000 } }            // deduct amount
);
```

**Mutiple collection**

```javascript
const session = db.getMongo().startSession();
session.startTransaction();

const accounts = session.getDatabase("bank").accounts;

// Lock-like behavior via transaction
const acc = accounts.findOne({ _id: 123 });

if (acc.balance >= 8000) {
    accounts.updateOne(
        { _id: 123 },
        { $inc: { balance: -8000 } }
    );
    session.getDatabase("bank").transactions.insertOne({
        account_id: 123,
        type: "withdrawal",
        amount: 8000,
        date: new Date()
    });
}

session.commitTransaction();
session.endSession();
```

### Deadlock detection and prevention

* A **deadlock** happens when two or more transactions are **waiting on each other’s locked resources** and none can proceed.
* Databases use **deadlock detection** to avoid permanent blocking.
* The system builds a **wait-for graph** → if there’s a **cycle**, that indicates a deadlock.
* Once detected, the database performs **victim selection**:

  * Chooses a **low-cost / low-priority transaction** as the victim.
  * That transaction is **rolled back**, and others continue.
* Example database behaviors:

  * **MySQL (InnoDB)** → error **1213** (“Deadlock found; try restarting transaction”).
  * **SQL Server** → error **1205**.
  * **Oracle** → error **ORA-00060**.
* To **prevent deadlocks**, I follow best practices:

  * **Consistent resource locking order** (e.g., always lock Account A before Account B).
  * Keep **transactions short**.
  * Use **timeouts** or **lower isolation levels** if acceptable.
  * Implement **retry logic** in the application layer.

👉 In short: **Deadlock detection finds cycles, picks a victim, rolls it back, and allows other transactions to continue smoothly.**




### **Implementing a Money Transfer with Concurrency Control**



In a banking system, money transfer involves **debiting one account and crediting another**. It's critical that this operation is **atomic** — either **both updates happen**, or **neither does**.

I would:

* Use a **database transaction** to ensure **ACID properties**
* Apply **row-level pessimistic locks** using `**SELECT ... FOR UPDATE**`
* **Check balance** on the source account
* **Debit sender, credit receiver**
* **Commit** the transaction
* On failure, **rollback** to prevent partial updates

This ensures **no race conditions** and maintains **consistency** and **isolation**.

---



### **Handling Concurrent Transfers on the Same Account**

To handle this:

* I use **pessimistic locking** via `**SELECT ... FOR UPDATE**` on the account row.
* This ensures **only one transaction** can modify the row at a time.
* **Second transaction waits** until the first completes.

This avoids **overdrafts** and **concurrent deductions**. I also implement **retry logic** or **request deduplication** for safety.

---

### **Pessimistic vs Optimistic Locking in Financial Applications**


* **Pessimistic locking**: Assumes **conflict is likely**. Locks data early.
* **Optimistic locking**: Assumes **conflict is rare**, uses a **version column** to detect conflicts.

In **banking apps**, I prefer **pessimistic locking** for sensitive operations like **fund transfers**, as **correctness is more important than performance**.

For non-critical updates (e.g., user profile), **optimistic locking** can improve throughput.

---



### **Implementing Idempotency in a Debit API**

To make a **debit API idempotent**:

* Require a **unique transaction ID** from the client
* Check for **existing transaction** in DB using that ID
* If found, **return existing result**
* If not, **process the debit** and store the ID

This prevents **duplicate deductions** during **retries or network failures**.

---






