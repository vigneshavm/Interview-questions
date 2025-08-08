### Apache Kafka Interview Questions and Answers

---

### Index

| **Column 1**                                                                           | **Column 2**                                                     | **Column 3**                                                       |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------ |
| [1. What is Kafka?](#1-what-is-kafka)                                                  | [12. Offset Management](#12-offset-management)                   | [23. Handling Large Messages](#23-handling-large-messages)         |
| [2. Kafka vs Traditional Messaging Systems](#2-kafka-vs-traditional-messaging-systems) | [13. Consumer Rebalancing](#13-consumer-rebalancing)             | [24. Log Compaction vs Retention](#24-log-compaction-vs-retention) |
| [3. Kafka Architecture](#3-kafka-architecture)                                         | [14. Polling and Processing](#14-polling-and-processing)         | [25. Kafka in Microservices](#25-kafka-in-microservices)           |
| [4. Message Format and Serialization](#4-message-format-and-serialization)             | [15. Consumer Lag](#15-consumer-lag)                             | [26. Schema Registry](#26-schema-registry)                         |
| [5. Retention Policy](#5-retention-policy)                                             | [16. Zookeeper vs KRaft Mode](#16-zookeeper-vs-kraft-mode)       | [27. Multi-Datacenter Kafka](#27-multi-datacenter-kafka)           |
| [6. Topic Creation and Configuration](#6-topic-creation-and-configuration)             | [17. Delivery Semantics](#17-delivery-semantics)                 | [28. Transactional API](#28-transactional-api)                     |
| [7. Partitioning Strategy and Keys](#7-partitioning-strategy-and-keys)                 | [18. Kafka Streams vs Consumers](#18-kafka-streams-vs-consumers) | [29. Backpressure Handling](#29-backpressure-handling)             |
| [8. Replication Factor and Leader Election](#8-replication-factor-and-leader-election) | [19. Kafka Connect](#19-kafka-connect)                           | [30. Common Scenarios](#30-common-scenarios)                       |
| [9. Producer Configuration](#9-producer-configuration)                                 | [20. Security Features](#20-security-features)                   |                                                                    |
| [10. Idempotent Producer](#10-idempotent-producer)                                     | [21. Monitoring Kafka](#21-monitoring-kafka)                     |                                                                    |
| [11. Consumer Groups](#11-consumer-groups)                                             | [22. Kafka Admin CLI](#22-kafka-admin-cli)                       |                                                                    |


| **Column 1**                                                                                                           | **Column 2**                                                                                                  | **Column 3**                                                                               |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [Handle Ordering and Duplicates](#do-you-handle-ordering-and-duplicates)                                               | [Kafka Transactions](#do-you-use-kafka-transactions)                                                          | [Notifications Handled Using Kafka](#how-are-notifications-handled-using-kafka)            |
| [Kafka in Your Current Project](#how-are-you-using-kafka-in-your-current-shoutout-project)                             | [Ensure a Request Isn’t Processed More Than Once](#how-do-you-ensure-a-request-isnt-processed-more-than-once) | [Kafka Help Manage Concurrency](#how-does-kafka-help-manage-concurrency-in-fund-transfers) |
| [Kafka Used in the Video Upload and Delivery Lifecycle](#how-is-kafka-used-in-the-video-upload-and-delivery-lifecycle) | [Tools You Are Using to Monitor Kafka](#what-tools-are-you-using-to-monitor-kafka)                            | [Retry Strategy if a Consumer Fails](#whats-your-retry-strategy-if-a-consumer-fails)       |




###  How are you using Kafka in your current Shoutout project?

In the Shoutout project, Kafka is used for **decoupling critical flows** and enabling **real-time event tracking**. Key use cases include:

* **Video delivery tracking** (`video-uploaded`, `video-delivered` topics)
* **Escrow transaction events** (`payment-initiated`, `payment-released`)
* **Notification pipeline** for WhatsApp/SMS alerts
* Ensuring **idempotency** and **resilience** in microservices

Kafka gives us **asynchronous**, **durable**, and **scalable messaging**, critical for a system involving money and timed responses.

---

###  How does Kafka help manage concurrency in fund transfers?



We use Kafka to **serialize fund-related events** using **account/user ID as the partition key**. This ensures:

* **Ordered processing per user/celebrity**
* **Avoiding race conditions** (e.g., double withdrawal or double credit)
* Kafka ensures **single-threaded consumption per partition**, which helps manage **concurrent bookings** and **payment releases**

---

###  How do you ensure a request isn't processed more than once?



We make all downstream services **idempotent**.

For example:

* The **payment service** checks if a `BookingID` has already been paid before releasing funds.
* **Video delivery events** are stored with a unique `DeliveryID`. If an event with the same ID is received again, it’s ignored.
* Kafka offsets are managed carefully, and we **avoid committing offsets** until downstream actions are confirmed.

---

###  Do you use Kafka transactions?



Yes — for **critical flows like escrow fund release**, we use Kafka transactions to:

* Publish a `payment-released` message
* At the same time, update the DB within a **single atomic unit**

This guarantees **exactly-once processing**, which is essential when **moving money or releasing payments to celebrities**.

---

###  How is Kafka used in the video upload and delivery lifecycle?



When a celebrity uploads a video:

1. The **upload service** emits a `video-uploaded` Kafka event.
2. The **delivery processor** listens, verifies the format, compresses it (via Mux), and stores it in Azure Blob.
3. Once complete, it emits `video-delivered`.
4. This triggers:

   * Status update to user
   * Fund release to celebrity
   * Notification via WhatsApp

Kafka enables us to **orchestrate multiple services** around this flow without tight coupling.

---

###  What’s your retry strategy if a consumer fails?



We use a **retry topic pattern**:

* If processing fails, the event is moved to a **retry topic** with backoff (e.g., `video-delivered-retry-5m`)
* After N retries, it's sent to a **DLT (Dead Letter Topic)**
* DLT events are monitored and reviewed by the ops team

We also make sure all services are **idempotent**, so re-processing doesn’t affect correctness.

---

###  How are notifications handled using Kafka?



When a `video-delivered` or `payment-released` event is published:

* A **notification service** listens and sends updates via **WhatsApp/SMS** using **Sinch**
* We maintain **notification categories** (user-requested, admin-triggered, system alerts) and push only relevant types
* Kafka ensures **guaranteed delivery**, **tracking**, and **auditability** of notifications

---

###  Do you handle ordering and duplicates?



Yes:

* **Ordering:** We use **partition keys** like `BookingID`, `UserID`, or `CelebrityID` so that all events for a particular actor go to the same partition.
* **Deduplication:** We maintain **event IDs** or **operation IDs** in a store and reject duplicates during consumption.
* We also implement **database-level unique constraints** as a last safety net.

---

###  What tools are you using to monitor Kafka?



We use:

* **Confluent Control Center** and **Kafka UI**
* **Prometheus + Grafana** for lag and broker metrics
* Alerts for:

  * Consumer lag thresholds
  * Retry/DLT spike
  * Throughput drop on hot partitions

This helps us **proactively manage reliability** and **performance bottlenecks**.

---

Would you like this formatted as a **PDF for interview prep**, or need a **Kafka flow diagram** for the Shoutout app?


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
