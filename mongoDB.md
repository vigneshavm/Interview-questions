
### **Scaling MongoDB**:
  - **Vertical Scaling**: Adding more resources (CPU, memory) to a single server.
  - **Horizontal Scaling**: Using **sharding** to distribute data across multiple servers.

### Clustering & Replication**:
  - **Replica Set**: Maintains multiple copies of data for high availability.
  - **Sharding**: Distributes data across multiple nodes for scalability.

### Difference Between `$in` and `$all` in MongoDB**:
- `$in`: Matches if the value is in the provided array.
- `$all`: Matches if the value contains all of the provided elements in the array.

### Searching in MongoDB**:
```js
db.collection.find({ $text: { $search: "searchText" } });
```

### **Databases for a Social Media App**
- **MongoDB** is a good fit for unstructured or semi-structured data (large-scale).
