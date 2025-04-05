
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

## 1. What is Sharding and Why is it Used?

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

## 2. Explain Replication and How Failover Works in MongoDB

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

## 3. What is a Replica Set?

**Concept:**  
A replica set is a group of MongoDB servers that replicate data.

- One primary
- Multiple secondaries
- Self-healing and high-availability system

---

## 4. How Would You Handle Transactions in MongoDB? (v4.0+)

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

## 5. Explain Write Concerns and Read Preferences

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

## 6. What Are Some Performance Tuning Techniques in MongoDB?

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

## 7. How Would You Handle Large File Storage in MongoDB? (GridFS)

**Concept:**  
GridFS stores files >16MB by splitting into chunks.

- Metadata in `fs.files`
- File chunks in `fs.chunks`

**Upload Example:**
```bash
mongofiles -d mydb put video.mp4
```

---

## 8. How Does MongoDB Ensure Durability and Consistency?

- **Durability:** Journaling, replica sets, write concern
- **Consistency:** Transactions & atomic operations per document

---

## 9. CAP Theorem in MongoDB Context

**CAP Theorem:**
- **C**onsistency
- **A**vailability
- **P**artition Tolerance

MongoDB is **CP by default**, with options to tune for **AP** using read preferences.

---

## 10. What Are the Limitations of MongoDB and How to Overcome Them?

| Limitation                       | Solution                              |
|----------------------------------|----------------------------------------|
| 16MB Document Limit              | Use GridFS                            |
| No Native Joins (before $lookup) | Use `$lookup`, embed docs             |
| Eventual Consistency in Shards  | Use write concern: `majority`         |
| Limited Indexes per Collection  | Use compound indexes wisely           |
| Aggregation Memory Limit        | Use `allowDiskUse: true`              |

---

```


