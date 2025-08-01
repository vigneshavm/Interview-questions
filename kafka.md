### Apache Kafka Interview Questions and Answers

---

#### 1. **What is Kafka?**

Kafka is a distributed event streaming platform used for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications. It allows you to publish, subscribe to, store, and process streams of records in real time.

---

#### 2. **Kafka vs Traditional Messaging Systems**

* **Kafka** is distributed, persistent, and highly scalable.
* **Traditional systems (e.g., RabbitMQ)** are message-oriented with different delivery guarantees and are not designed for large-scale distributed systems.

---

#### 3. **Kafka Architecture**

* **Producer**: Publishes data to topics.
* **Broker**: Stores and serves data.
* **Topic**: Logical channel to which data is published.
* **Partition**: Topic is split into partitions for scalability.
* **Consumer**: Subscribes to topics.
* **Consumer Group**: Set of consumers sharing workload.
* **Zookeeper (optional)**: Manages cluster metadata (replaced by KRaft in newer versions).

---

#### 4. **Message Format and Serialization**

* Kafka stores messages as byte arrays.
* Serialization formats include JSON, Avro, Protobuf, etc.

---

#### 5. **Retention Policy**

* Configurable per topic.
* Messages are retained for a specific time or size limit, even after being consumed.

---

#### 6. **Topic Creation and Configuration**

* Created manually or auto-created.
* Configurable parameters: replication factor, partitions, cleanup.policy, etc.

---

#### 7. **Partitioning Strategy and Keys**

* If key is provided, Kafka uses a hash to determine the partition.
* If no key is provided, round-robin partitioning is used.

---

#### 8. **Replication Factor and Leader Election**

* Each partition has a leader and followers.
* Replication provides fault tolerance.
* Leader handles all reads/writes.

---

#### 9. **Producer Configuration**

* `acks=0|1|all` controls durability.
* Batching, compression (gzip, snappy), retries, and idempotence are common options.

---

#### 10. **Idempotent Producer**

* Ensures exactly-once write to a partition even on retries.
* Enabled with `enable.idempotence=true`.

---

#### 11. **Consumer Groups**

* Consumers in the same group share partitions.
* Each partition is read by only one consumer in a group.

---

#### 12. **Offset Management**

* Kafka tracks offsets per partition per consumer group.
* Auto or manual commit supported.

---

#### 13. **Consumer Rebalancing**

* Happens when consumers join/leave or topics change.
* Kafka reassigns partitions to consumers.

---

#### 14. **Polling and Processing**

* Consumers poll for messages.
* Must call `poll()` periodically or risk being kicked out of group.

---

#### 15. **Consumer Lag**

* Difference between the last offset in a partition and the consumer’s committed offset.
* Monitored to ensure consumers are keeping up.

---

#### 16. **Zookeeper vs KRaft Mode**

* Zookeeper: legacy mode for metadata management.
* KRaft: Kafka Raft Metadata mode (no external Zookeeper).

---

#### 17. **Delivery Semantics**

* **At-most-once**: No retries, possible loss.
* **At-least-once**: Retries with potential duplicates.
* **Exactly-once**: Requires idempotent producer and transactional semantics.

---

#### 18. **Kafka Streams vs Consumers**

* Streams API processes events with state, joins, windows.
* Simple consumers fetch messages; Streams adds high-level operations.

---

#### 19. **Kafka Connect**

* Used to integrate Kafka with databases, file systems, etc.
* Uses Source (read into Kafka) and Sink (write from Kafka) connectors.

---

#### 20. **Security Features**

* **Authentication**: SSL, SASL.
* **Authorization**: ACL-based.
* **Encryption**: TLS for data in transit.

---

#### 21. **Monitoring Kafka**

* Monitor consumer lag, broker health, partition under-replication.
* Use JMX metrics, Prometheus, Grafana, etc.

---

#### 22. **Kafka Admin CLI**

* `kafka-topics.sh` to manage topics.
* `kafka-consumer-groups.sh` to monitor consumer groups.
* `kafka-configs.sh` to update broker/topic configs.

---

#### 23. **Handling Large Messages**

* Increase `message.max.bytes` on broker and producer.
* Consider using external storage + metadata in Kafka.

---

#### 24. **Log Compaction vs Retention**

* **Retention**: Deletes messages after TTL.
* **Compaction**: Keeps latest message per key.

---

#### 25. **Kafka in Microservices**

* Decouples services, provides async communication.
* Use Kafka for event-driven architectures.

---

#### 26. **Schema Registry**

* Manages Avro/Protobuf schemas.
* Ensures compatibility between producers and consumers.

---

#### 27. **Multi-Datacenter Kafka**

* Use MirrorMaker or Confluent Replicator.
* Design for latency, consistency, and failover.

---

#### 28. **Transactional API**

* Used to guarantee atomic writes to multiple partitions.
* Combine producer and consumer logic in a transaction.

---

#### 29. **Backpressure Handling**

* Use consumer pause/resume APIs.
* Tune producer rate or buffer size.

---

#### 30. **Common Scenarios**

* **Broker Failure**: Leader election triggers.
* **Consumer Group Scaling**: Partitions evenly distributed.
* **Slow Consumers**: Can increase lag and cause rebalance.

---

Let me know if you want scenario-based Q\&A or real-world examples next.
