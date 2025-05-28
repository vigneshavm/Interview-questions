
---

**AWS Lambda**

* [AWS Lambda](#aws-lambda)   * [AWS Lambda Supported Languages](#aws-lambda-supported-languages)    * [Maximum Execution Time of an AWS Lambda Function](#maximum-execution-time-of-an-aws-lambda-function)
* [Triggers That Can Invoke AWS Lambda](#triggers-that-can-invoke-aws-lambda) * [Typical Architecture of Using AWS Lambda for APIs](#typical-architecture-of-using-aws-lambda-for-apis)
* [Passing Data to an AWS Lambda Function](#passing-data-to-an-aws-lambda-function) * [Handling Large File Uploads in AWS](#handling-large-file-uploads-in-aws)
* [Cold Start](#cold-start) * [How Lambda Scales](#how-lambda-scales) * [Provisioned Concurrency](#provisioned-concurrency)
* [Monitoring Lambda Functions](#monitoring-lambda-functions) * [Assigning Permissions to Lambda Functions](#assigning-permissions-to-lambda-functions)
* [Securely Storing Secrets in Lambda](#securely-storing-secrets-in-lambda) * [Lambda Layers](#lambda-layers)
* [Maximum Deployment Package Size](#maximum-deployment-package-size) * [Building a Serverless Video Upload and Processing System Using Lambda](#building-a-serverless-video-upload-and-processing-system-using-lambda)


---

**AWS API Gateway**

* [AWS API Gateway](#aws-api-gateway) * [Types of APIs in API Gateway](#types-of-apis-in-api-gateway) * [REST API vs HTTP API](#rest-api-vs-http-api)
* [Integration Types Supported by API Gateway](#integration-types-supported-by-api-gateway) * [How API Gateway Integrates with AWS Lambda](#how-api-gateway-integrates-with-aws-lambda)
* [Stages in API Gateway](#stages-in-api-gateway) * [Usage Plans in API Gateway](#usage-plans-in-api-gateway)
* [Throttling in API Gateway](#throttling-in-api-gateway) * [Securing Your API in API Gateway](#securing-your-api-in-api-gateway)
* [Lambda Authorizer](#lambda-authorizer) * [Can API Gateway Serve Static Content](#can-api-gateway-serve-static-content)
* [Payload Limit for API Gateway](#payload-limit-for-api-gateway) * [Building a Secure Video Upload System](#building-a-secure-video-upload-system)
* [Handling CORS in API Gateway](#handling-cors-in-api-gateway) * [How API Gateway Handles Caching](#how-api-gateway-handles-caching)

---


**Amazon DynamoDB**


- [Amazon DynamoDB](#amazon-dynamodb)  - [DynamoDB features](#dynamodb-features) - [DynamoDB ensure data durability and availability](#dynamodb-ensure-data-durability-and-availability)
- [Perform a query in DynamoDB](#perform-a-query-in-dynamodb) - [Secure DynamoDB data](#secure-dynamodb-data)
- [Best practice for designing DynamoDB tables](#best-practice-for-designing-dynamodb-tables) - [Difference between Query and Scan in DynamoDB](#difference-between-query-and-scan-in-dynamodb)
- [Limits of DynamoDB](#limits-of-dynamodb) - [Handle transactions in DynamoDB](#handle-transactions-in-dynamodb) - [Read/write capacity modes in DynamoDB](#readwrite-capacity-modes-in-dynamodb)
- [DynamoDB Streams](#dynamodb-streams) - [DynamoDB handle scaling](#dynamodb-handle-scaling)
- [Global Secondary Index (GSI) and Local Secondary Index (LSI)](#global-secondary-index-gsi-and-local-secondary-index-lsi)
- [Difference between a partition key and a sort key](#difference-between-a-partition-key-and-a-sort-key)
- [Primary keys types](#primary-keys-types) - [Primary key in DynamoDB](#primary-key-in-dynamodb) - [MongoDB vs Amazon DynamoDB](#MongoDB-vs-Amazon-DynamoDB)

**S3**
- [S3 Bucket Policy](#s3-bucket-policy)
- [Bucket Policy different from IAM Policy](#bucket-policy-different-from-iam-policy)
- [Common actions controlled by S3 policies](#common-actions-controlled-by-s3-policies)
- [Restrict access to an S3 bucket to a specific IP range](#restrict-access-to-an-s3-bucket-to-a-specific-ip-range)
- [S3 bucket publicly accessible](#s3-bucket-publicly-accessible)
- [Purpose of Block Public Access settings](#purpose-of-block-public-access-settings)
- [S3 Access Control Lists (ACLs)](#s3-access-control-lists-acls)
- [Bucket Policies vs ACLs](#bucket-policies-vs-acls)
- [S3 Cross-Origin Resource Sharing (CORS)](#s3-cross-origin-resource-sharing-cors)
- [Encrypt objects in S3](#encrypt-objects-in-s3)
- [Pre-Signed URL in S3](#pre-signed-url-in-s3)
- [S3 lifecycle policies work](#s3-lifecycle-policies-work)
- [Common S3 storage classes](#common-s3-storage-classes)
- [Secure S3 buckets](#secure-s3-buckets)
- [S3 handle versioning](#s3-handle-versioning)
- [Handle large file uploads in S3](#handle-large-file-uploads-in-s3)
- [S3 Transfer Acceleration](#s3-transfer-acceleration)
- [S3 event notifications work](#s3-event-notifications-work)
- [Prevent unauthorized deletion of objects](#prevent-unauthorized-deletion-of-objects)
- [Maximum size of an S3 object](#maximum-size-of-an-s3-object)



###  AWS Lambda

**Answer:**
AWS Lambda is a **serverless compute service** that lets you run code in response to events (e.g., HTTP requests, S3 uploads, DynamoDB updates) **without managing servers**. You only pay for the execution time.

---

###  AWS Lambda Supported Languages

**Answer:**
Officially supported:

* Node.js
* Python
* Java
* Go
* Ruby
* .NET Core
* Custom runtimes via Lambda Layers (e.g., PHP, Rust)

---

###  Maximum Execution Time of an AWS Lambda Function


AWS Lambda functions have a **maximum allowed execution time (timeout)** of **15 minutes (900 seconds)** per invocation.

* If the function runs longer than this timeout, AWS Lambda **automatically terminates** the execution and returns a timeout error.
* You can configure the timeout duration for each Lambda function anywhere between **1 second and 900 seconds** depending on your workload needs.
* It's important to set an appropriate timeout to balance between completing your task and avoiding unnecessary charges or delays.

---

Let me know if you want details on how to configure timeout or best practices for handling long-running tasks in Lambda!


---

###  Triggers That Can Invoke AWS Lambda


AWS Lambda can be invoked by a variety of event sources (triggers), enabling it to run code in response to many types of events. Common triggers include:

* **API Gateway:** HTTP requests to REST or HTTP APIs trigger Lambda functions.
* **AWS S3:** Object creation, deletion, or modification events (e.g., file upload).
* **AWS DynamoDB Streams:** Triggered on data changes in DynamoDB tables.
* **AWS SNS (Simple Notification Service):** Pub/sub messaging triggers Lambda.
* **AWS SQS (Simple Queue Service):** Message queue triggers Lambda for async processing.
* **AWS CloudWatch Events / EventBridge:** Scheduled tasks or system events trigger Lambda.
* **AWS CloudWatch Logs:** Log ingestion can trigger Lambda for log processing.
* **AWS Cognito:** User pool events can trigger Lambda (e.g., pre-signup).
* **AWS Kinesis:** Data stream ingestion triggers Lambda.
* **Alexa Skills Kit:** Voice commands invoke Lambda functions.
* **AWS IoT Core:** IoT device events can trigger Lambda.

---


###  Typical Architecture of Using AWS Lambda for APIs


A common serverless API architecture with AWS Lambda includes the following components:

1. **Client Application:**
   Mobile app, web frontend, or any client sending API requests.

2. **API Gateway:**
   Acts as the **front door** for API requests. It receives HTTP(S) calls from clients, handles routing, authorization, throttling, and request/response transformations.

3. **AWS Lambda Functions:**
   The core **backend logic** lives here. Lambda functions execute code in response to API Gateway triggers. They process requests, interact with databases, and return responses.

4. **Database (e.g., DynamoDB):**
   Lambda functions read/write data to a database like **DynamoDB** for storing application data, request states, user info, etc.

5. **S3 (Optional):**
   Used for storing and serving static assets like images, videos, or files that might be uploaded or requested by the client.

6. **Additional Services (Optional):**
   Could include services like **SNS, SQS, CloudWatch**, or third-party APIs depending on use cases.

---

**Flow Summary:**
Client → API Gateway → Lambda → DynamoDB/S3 → Lambda returns response → API Gateway sends back to client

---


```
Client
  ↓
API Gateway
  ↓
Lambda (Node.js, Python, etc.)
  ↓
DynamoDB / S3 / RDS (Data store)
```

This is a **serverless backend** pattern.

---

###  Passing Data to an AWS Lambda Function

Data is passed to a Lambda function through the **`event` object**, which varies depending on the source that triggers the function.


#### 🔁 **1. Direct Invocation (CLI, SDK, or Console)**

You can pass a **JSON payload** directly:

```bash
aws lambda invoke \
  --function-name myFunction \
  --payload '{"key1": "value1", "key2": "value2"}' \
  response.json
```

➡️ In Lambda:

```javascript
exports.handler = async (event) => {
  console.log(event.key1); // "value1"
};
```

---

#### 🌐 **2. API Gateway → Lambda (HTTP API or REST API)**

When using API Gateway as a trigger, it passes request data like:

```json
{
  "resource": "/",
  "path": "/",
  "httpMethod": "POST",
  "headers": { },
  "queryStringParameters": { },
  "body": "{\"name\": \"Alice\"}",
  ...
}
```

➡️ In Lambda (Node.js):

```javascript
const body = JSON.parse(event.body);
console.log(body.name); // "Alice"
```

---

#### 📦 **3. S3 → Lambda (File Uploads, etc.)**

S3 sends event data when a file is uploaded:

```json
{
  "Records": [
    {
      "s3": {
        "bucket": { "name": "my-bucket" },
        "object": { "key": "video.mp4" }
      }
    }
  ]
}
```

➡️ Lambda can then fetch the file from S3 using the bucket and key.

---

#### 🧾 **4. SNS, SQS, DynamoDB Streams, EventBridge**

Each has a specific format, but all pass data through the `event` object.

Example for SNS:

```json
{
  "Records": [
    {
      "Sns": {
        "Message": "{\"email\": \"user@example.com\"}"
      }
    }
  ]
}
```

➡️ Lambda parses this message to process it.

---

#### ✅ Summary

| **Trigger Source** | **Data Format in `event`**                          |
| ------------------ | --------------------------------------------------- |
| Direct             | Plain JSON                                          |
| API Gateway        | JSON with headers, method, body, query params, etc. |
| S3                 | Bucket and object info                              |
| SNS/SQS            | Messages in `Records[]`                             |
| EventBridge        | Event structure with `detail`, `source`, etc.       |

---



###  Handling Large File Uploads in AWS

**Answer:**
Do **not** upload directly via Lambda. Instead:

1. Client requests a **presigned S3 URL** via Lambda
2. Client uploads directly to S3
3. (Optional) S3 triggers another Lambda to process


When dealing with **large file uploads** (like videos), the best practice is to **bypass Lambda** for the upload itself and instead use **S3 pre-signed URLs**. This avoids memory and timeout limitations in Lambda and keeps your architecture scalable and efficient.


#### **1. Client Requests Upload URL**

* The client (mobile/web app) sends a request to an API (via API Gateway + Lambda).
* The Lambda function generates a **pre-signed S3 URL**.

```js
// Node.js Example
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const params = {
  Bucket: 'your-bucket-name',
  Key: 'uploads/filename.mp4',
  Expires: 300, // 5 minutes
  ContentType: 'video/mp4',
};

const url = s3.getSignedUrl('putObject', params);
```

#### **2. Client Uploads File Directly to S3**

* Using the pre-signed URL, the client uploads the large file **directly to S3**.
* No need to route the file through Lambda.

#### **3. S3 Notifies Lambda (Optional)**

* After upload, S3 can trigger a **Lambda function** (e.g., via S3 event) for:

  * Post-processing (e.g., transcoding)
  * Saving metadata to DynamoDB
  * Sending confirmation to the user

---

#### 🧠 **Why This Approach?**

| Challenge                      | Solution                              |
| ------------------------------ | ------------------------------------- |
| Lambda has a 15-minute timeout | Avoid using Lambda for file transfers |
| Lambda has memory limits       | Upload directly to S3                 |
| Need secure upload URLs        | Use **pre-signed S3 URLs**            |

---

#### 🔐 Bonus: Add Security

* Use IAM roles and bucket policies to restrict access.
* Validate file type/size on client and in post-upload Lambda processing.

---



###  Cold Start 

**Answer:**
A **cold start** occurs when Lambda needs to **initialize a new container**, which causes additional latency. Common with the **first invocation** or after idle time. Can be reduced using:

* Provisioned concurrency
* Keeping functions warm via CloudWatch


A **cold start** occurs when AWS Lambda **initializes a new instance** of your function to handle an incoming request. This usually happens when:

* The function is **invoked after a period of inactivity**
* There is **scaling**, and new instances are needed to handle additional load

---

#### 🔄 **Cold Start vs. Warm Start**

| Aspect         | Cold Start                        | Warm Start                             |
| -------------- | --------------------------------- | -------------------------------------- |
| Startup Time   | Slower (100ms to several seconds) | Faster (few milliseconds)              |
| Initialization | Creates new container and runtime | Reuses existing Lambda instance        |
| Cause          | New invocation or scale-up        | Reuse of previously initialized Lambda |

---

#### 🚀 **Cold Start Workflow**

1. **Container Provisioning** (for the runtime environment)
2. **Code Initialization** (e.g., importing libraries)
3. **Handler Execution** (your actual function logic runs)

---

#### 📌 **Impacts of Cold Starts**

* **Latency:** Users may experience slightly longer wait times
* **Unpredictability:** Especially for real-time or latency-sensitive apps
* **More noticeable** in VPC-connected Lambdas or with large dependencies

---

#### 🧊 **How to Reduce Cold Starts**

* Use **provisioned concurrency** (pre-warms Lambda instances)
* Minimize heavy imports and initialization code
* Choose **lighter runtimes** (e.g., Node.js, Python)
* Keep functions **small and focused**

---


###  How Lambda Scales

**Answer:**
Lambda scales **automatically and horizontally** by running multiple instances in parallel. By default:


AWS Lambda automatically and **horizontally scales** your application **by running more instances of your function in parallel** to handle incoming requests.


* Up to 1,000 concurrent executions per region (can be increased via request)



---

#### ⚙️ **How Lambda Scaling Works**

1. **Each request is handled by a separate instance** of your function.
2. AWS **automatically creates new instances** as needed, based on request volume.
3. **No manual intervention** is required—scaling is automatic and fully managed.

---

#### 📈 **Scaling Behavior**

| Event Type                           | Scaling Behavior                                                                    |
| ------------------------------------ | ----------------------------------------------------------------------------------- |
| **Synchronous** (API Gateway, ALB)   | Scales instantly per request — one request = one instance (max concurrency applies) |
| **Asynchronous** (S3, SNS)           | Queues events and processes them using **Lambda’s internal retry logic**            |
| **Stream-based** (DynamoDB, Kinesis) | Scales with number of shards and batch size — more predictable and controlled       |

---

#### 🔢 **Concurrency Limits**

* **Default concurrent executions per region**: 1,000 (can be increased via AWS Support).
* **Reserved concurrency**: You can reserve a portion of that limit for specific functions.
* **Provisioned concurrency**: Keeps a specified number of Lambda instances warm, reducing cold starts.

---

#### 🧠 **Key Points**

* **Stateless design** is essential. Lambda doesn't retain state between executions.
* **Execution duration and memory** also affect scaling speed and cost.
* If all concurrent executions are in use, additional requests are throttled (HTTP 429).

---

#### 📊 **Example**

If your API receives 5000 requests per second:

* Lambda will spin up to 5000 parallel executions (if within your account's concurrency limit).
* You don’t need to manage or provision any servers manually.

---


###  provisioned concurrency

**Answer:**
It ensures a **pre-warmed number of Lambda instances**, eliminating cold starts. It’s suitable for latency-sensitive workloads (e.g., APIs, gaming, ML inference).



**Provisioned Concurrency** is an AWS Lambda feature that **pre-warms** a specified number of Lambda instances so they are **ready to respond immediately**—eliminating cold starts.

---

#### 🚀 **Why Use Provisioned Concurrency?**

Cold starts can cause latency in:

* User-facing APIs (e.g., mobile or web)
* Real-time processing apps
* Low-latency or predictable workloads

Provisioned concurrency **ensures consistent performance** for such use cases.

---

#### ⚙️ **How It Works**

* You specify the **number of warm Lambda instances** to keep ready.
* AWS **initializes those instances ahead of time** (including runtime, init code).
* When requests come in, they're routed to these **already-initialized** instances.

> ✅ Great for predictable traffic
> ❌ More expensive than regular Lambda (you pay for the "warm" time)

---

#### 📌 **Key Properties**

| Property              | Value                                                                       |
| --------------------- | --------------------------------------------------------------------------- |
| Startup latency       | Near zero (no cold start)                                                   |
| Use case              | Predictable traffic, real-time apps                                         |
| Billing               | You pay **per second** for provisioned time + invocations                   |
| Configuration options | Set via Console, CLI, or Infrastructure as Code (e.g., CloudFormation, CDK) |

---

#### 🧪 **Example – Enabling via AWS CLI**

```bash
aws lambda put-provisioned-concurrency-config \
  --function-name my-function \
  --qualifier production \
  --provisioned-concurrent-executions 10
```

> This reserves **10 warm instances** on the `production` version of your function.

---

#### 📊 **Billing Comparison**

| Type                    | Billed For                           |
| ----------------------- | ------------------------------------ |
| On-demand Lambda        | Execution time only                  |
| Provisioned Concurrency | Pre-warmed time **+** execution time |

---

#### ✅ **When to Use It**

* Cold start latency is not acceptable
* You have **predictable traffic patterns**
* You're calling Lambda from **API Gateway, ALB, Step Functions**, etc.

---



####  How do you handle errors in Lambda?

* Use **try/catch** in your code
* Configure **DLQs (Dead Letter Queues)** for asynchronous invocations
* Enable **Lambda Destinations** (on-success / on-failure)
* Use **CloudWatch Logs** for debugging

---

###  Monitoring Lambda Functions

**Answer:**
Use:

* **CloudWatch Logs**: View logs using `console.log` or equivalents
* **CloudWatch Metrics**: Invocations, errors, duration, throttles
* **AWS X-Ray**: Distributed tracing

---


###  Assigning Permissions to Lambda Functions

**Answer:**
You assign an **IAM execution role** to the Lambda function. This role defines what AWS services (e.g., S3, DynamoDB) the function can access.

---

###  Securely Storing Secrets in Lambda

**Answer:**

* Use **AWS Secrets Manager** or **SSM Parameter Store**
* Use **IAM policies** to restrict access to secrets
* Never hard-code secrets in the code or environment variables

---


###  Lambda Layers

**Answer:**
Lambda Layers allow you to **package and share code libraries or dependencies** (e.g., Node.js modules, Python packages) across multiple Lambda functions.

---

###  maximum deployment package size

* **Direct upload (console or API):** 50 MB (zipped)
* **With S3 upload:** 250 MB (zipped)
* **Unzipped code in execution:** 250 MB
* **Layers:** Max 5 layers, 50 MB each

---

###  Building a Serverless Video Upload and Processing System Using Lambda

**Answer:**

1. **Client uploads** to S3 via **presigned URL**
2. **S3 triggers Lambda** on upload (`sObjectCreated`)
3. Lambda:

   * Validates/Resizes/Transcodes video
   * Stores metadata in **DynamoDB**
   * Sends email/SNS notification
4. **Client polls or listens via WebSocket**

---

Would you like me to generate **practice coding questions**, a **mock interview**, or dive deeper into specific topics like **S3 + Lambda integrations** or **API Gateway security**?







###   AWS API Gateway

**Answer:**
AWS API Gateway is a fully managed service that makes it easy to **create, publish, maintain, monitor, and secure REST, HTTP, and WebSocket APIs** at any scale. It acts as a **gateway between clients and backend services** (e.g., AWS Lambda, EC2, etc.).

---

###  Types of APIs in API Gateway

**Answer:**

* **REST APIs** – Full-featured APIs with caching, throttling, etc.
* **HTTP APIs** – Lightweight, low-latency APIs for Lambda, ALB, etc.
* **WebSocket APIs** – For real-time communication (chat, gaming, etc.)

---

###  REST API Vs HTTP API

| Feature     | REST API                          | HTTP API                     |
| ----------- | --------------------------------- | ---------------------------- |
| Features    | Full (auth, usage plans, etc.)    | Lightweight, cheaper         |
| Cost        | Higher                            | Lower                        |
| Performance | Slightly slower                   | Faster                       |
| Use case    | Legacy systems, advanced features | Modern APIs with fewer needs |

---


###  integration types supported by API Gateway

**Answer:**

1. **AWS Lambda** – Most common for serverless
2. **HTTP/HTTPS Endpoints** – Proxy to external APIs
3. **Mock Integration** – For testing responses
4. **AWS Service Proxy** – Directly call AWS services (e.g., DynamoDB, SNS)

---
###  How API Gateway Integrates with AWS Lambda

**Answer:**

* API Gateway acts as a **trigger** for the Lambda function.
* You define **methods** (GET, POST, etc.) and **routes**, and map them to the Lambda.
* Data is passed to Lambda in the **event object**.

---
###  Stages in API Gateway

**Answer:**
A **stage** is a named reference to a deployment of your API (e.g., `dev`, `staging`, `prod`). It allows versioning and separates environments.

---

###  usage plans in API Gateway

**Answer:**
Usage plans allow you to:

* **Throttle** API requests (rate + burst)
* **Quota** requests per day/month
* **Associate API keys** with consumers

---

###  throttling in API Gateway

**Answer:**
Throttling controls how many requests can be handled:

* **Rate**: requests per second
* **Burst**: max requests in a short burst

Prevents abuse and ensures backend stability.

---


###  Securing Your API in API Gateway

**Answer:**

* **API Keys + Usage Plans**
* **IAM-based access** (SigV4 signing)
* **Cognito User Pools** (JWT-based auth)
* **Lambda Authorizers (Custom Authorizers)**
* **Resource Policies** (restrict access by IP or VPC)

---

###  Lambda Authorizer

**Answer:**
A Lambda Authorizer (previously known as a custom authorizer) is a Lambda function that controls access to your API by **validating headers, tokens, or other context** before the main handler runs.

---

###  Can API Gateway serve static content

**Answer:**
No, API Gateway doesn’t serve static files. You should serve static assets like HTML, CSS, JS, or videos from **Amazon S3 with CloudFront**. API Gateway is best for dynamic APIs.

---

###  payload limit for API Gateway

**Answer:**

* **Request payload size limit:** 10 MB for REST/HTTP APIs
* For larger file uploads, use **presigned S3 URLs** instead of going through API Gateway.

---


###  Building a Secure Video Upload System

**Answer:**

1. API Gateway + Lambda generates a **presigned S3 URL**.
2. Client uses that URL to upload the video **directly to S3**.
3. S3 triggers a **Lambda** for processing/validation.
4. API Gateway serves status or metadata via REST endpoints.

---

###  Handling CORS in API Gateway

**Answer:**

* Enable **CORS headers** (`Access-Control-Allow-Origin`, etc.) in method response.
* For Lambda integration, ensure the Lambda returns these headers as part of its response.
* For preflight requests, explicitly handle `OPTIONS` method.

---

###  How API Gateway Handles Caching
**Answer:**

* You can enable **response caching** at the method level (for REST APIs).
* Cached data is stored in **edge locations**, reducing backend load.
* TTL (time-to-live) can be configured per method.

---







---

### Amazon DynamoDB

**Answer:**
Amazon DynamoDB is a fully managed NoSQL database service provided by AWS that offers fast and predictable performance with seamless scalability. It stores data as key-value pairs and supports document data structures, making it suitable for applications that require low latency and flexible schema design.

---

### DynamoDB features

**Answer:**

* Fully managed and serverless
* Single-digit millisecond latency
* Supports key-value and document data models
* Auto-scaling for throughput capacity
* Built-in security with encryption at rest and in transit
* Global tables for multi-region replication
* Fine-grained access control with IAM policies
* Event-driven programming via DynamoDB Streams

---

### primary key in DynamoDB

**Answer:**
The primary key uniquely identifies each item in a DynamoDB table. There are two types:


### primary keys types
* **Partition Key (Simple Primary Key):** A single attribute used to distribute data across partitions.
* **Partition Key + Sort Key (Composite Primary Key):** A combination of two attributes where the partition key defines the partition and the sort key orders items within the partition.

---

### difference between a partition key and a sort key

**Answer:**

* The **partition key** determines the partition (physical storage) where data is stored and must be unique if no sort key is present.
* The **sort key** allows multiple items with the same partition key but different sort keys, enabling sorted data retrieval within a partition.

---

### Global Secondary Index (GSI) and Local Secondary Index (LSI)

**Answer:**

* **Global Secondary Index (GSI):** An index with a partition key and optional sort key different from the base table’s primary key. It can span all partitions and supports eventually consistent reads.
* **Local Secondary Index (LSI):** An index that uses the same partition key as the base table but a different sort key. It is limited to 5 LSIs per table and supports strongly consistent reads.

---

### DynamoDB handle scaling

**Answer:**
DynamoDB supports **automatic scaling** by adjusting read and write throughput capacity based on demand. It also supports **on-demand capacity mode**, which allows the table to scale instantly without pre-provisioning.

---

### DynamoDB Streams

**Answer:**
DynamoDB Streams capture a time-ordered sequence of item-level changes in a DynamoDB table. It can be used to trigger AWS Lambda functions or other processing tasks for event-driven architectures.

---

### read/write capacity modes in DynamoDB

**Answer:**

* **Provisioned Capacity:** You specify the number of reads and writes per second (RCUs and WCUs) you need.
* **On-Demand Capacity:** DynamoDB automatically scales to handle any amount of traffic without capacity planning.

---

### handle transactions in DynamoDB

**Answer:**
DynamoDB supports ACID transactions using **TransactWriteItems** and **TransactGetItems** APIs that allow multiple Put, Update, Delete, and ConditionCheck operations in a single all-or-nothing operation.

---

### limits of DynamoDB

**Answer:**

* Maximum item size: 400 KB
* Maximum provisioned throughput per table varies by region but can be scaled
* Maximum 5 Local Secondary Indexes per table
* Up to 20 Global Secondary Indexes per table

---

### DynamoDB ensure data durability and availability

**Answer:**
DynamoDB replicates data across multiple Availability Zones in an AWS region to provide high availability and durability. For global applications, **Global Tables** replicate data across multiple regions.

---

### perform a query in DynamoDB

**Answer:**
You use the **Query** API to retrieve items based on the partition key and optionally filter by the sort key. Queries are efficient because they only search within a single partition.

---

### difference between Query and Scan in DynamoDB

**Answer:**

* **Query:** Retrieves items based on primary key values, efficient and fast.
* **Scan:** Reads every item in the table, which can be expensive and slow for large tables.

---

### secure DynamoDB data

**Answer:**

* Use IAM policies to control access
* Enable encryption at rest (AWS-managed or customer-managed keys via KMS)
* Use VPC endpoints to restrict access
* Enable encryption in transit using HTTPS/TLS

---

### best practice for designing DynamoDB tables

**Answer:**

* Use composite keys for efficient data access
* Design your table and indexes based on query patterns
* Avoid hot partitions by distributing data evenly using good partition keys
* Use GSIs/LSIs to support additional query patterns
* Prefer on-demand capacity mode if unpredictable traffic is expected

---





---

### MongoDB vs Amazon DynamoDB

| Feature                 | MongoDB                                                    | Amazon DynamoDB                                                                  |
| ----------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Type**                | Document-oriented NoSQL database                           | Fully managed key-value and document NoSQL database                              |
| **Deployment**          | Self-managed (on-prem/cloud) or managed via Atlas          | Fully managed serverless service by AWS                                          |
| **Data Model**          | BSON documents with flexible schema                        | Key-value and document model with schema-less design                             |
| **Scalability**         | Sharding across multiple nodes, manual configuration       | Auto-scaling with built-in partitioning                                          |
| **Performance**         | Depends on deployment, generally low latency               | Single-digit millisecond latency at scale                                        |
| **Query Language**      | Rich query language, supports ad hoc queries, aggregation  | Supports key-based queries, limited ad hoc querying via secondary indexes        |
| **Transactions**        | Multi-document ACID transactions supported                 | ACID transactions supported (since 2018) but limited to 25 items                 |
| **Consistency Model**   | Eventual consistency by default, configurable              | Strong or eventual consistency (configurable per request)                        |
| **Indexing**            | Supports various indexes (compound, text, geospatial)      | Supports primary keys, Global Secondary Index (GSI), Local Secondary Index (LSI) |
| **Pricing Model**       | Pay for infrastructure or MongoDB Atlas usage              | Pay-per-request or provisioned throughput pricing                                |
| **Backup and Recovery** | Manual or via MongoDB Atlas services                       | Automated backups and point-in-time recovery                                     |
| **Integration**         | Wide ecosystem, supports multiple languages and frameworks | Deeply integrated with AWS services                                              |
| **Use Cases**           | Complex querying, flexible schemas, analytics              | High throughput, low latency, simple access patterns                             |

---

### When to choose MongoDB?

* You need rich, complex queries and aggregations
* You want flexibility in schema design and relationships
* You manage your own infrastructure or use MongoDB Atlas
* You require advanced indexing or geospatial queries

### When to choose DynamoDB?

* You want a fully managed, serverless NoSQL service with automatic scaling
* Your workload requires high throughput and low latency at scale
* You prefer tight AWS ecosystem integration (Lambda, API Gateway, IAM)
* Your access patterns are primarily key-value with predictable query patterns

---



## Amazon S3 Policies & Interview Questions

### S3 Bucket Policy

**Answer:**
A bucket policy is a JSON-based access policy attached to an S3 bucket that defines permissions for principals (users, accounts, or services) to perform actions on that bucket and its objects.

---

###  Bucket Policy different from IAM Policy

**Answer:**

* **Bucket Policy:** Attached directly to a bucket, controls access to that bucket’s objects.
* **IAM Policy:** Attached to users, groups, or roles, controls what AWS resources those identities can access.

---

### common actions controlled by S3 policies

**Answer:**
Examples include: `s3:GetObject`, `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket`, `s3:GetBucketPolicy`.

---

### restrict access to an S3 bucket to a specific IP range

**Answer:**
Use a condition in the bucket policy with the `IpAddress` operator specifying the allowed IP range under `"Condition"`.

---

### S3 bucket publicly accessible

**Answer:**
Add a bucket policy allowing `"Principal": "*"` and `"Action": "s3:GetObject"` on the bucket’s resource. Also, ensure **Block Public Access** settings are disabled.

---

### purpose of **Block Public Access** settings

**Answer:**
To prevent accidental public exposure of S3 buckets or objects by blocking public policies and ACLs.

---

### S3 Access Control Lists (ACLs)

**Answer:**
ACLs are legacy access control mechanisms allowing you to grant read/write permissions on buckets or objects to AWS accounts and predefined groups.

---
### Bucket Policies vs ACLs

**Answer:**
Use bucket policies for fine-grained, scalable permissions. ACLs are generally discouraged except for legacy support or cross-account access.

---

### S3 Cross-Origin Resource Sharing (CORS)

**Answer:**
CORS enables browsers to make cross-origin requests to S3 buckets. You configure allowed origins, methods, and headers in a CORS configuration on the bucket.

---

### encrypt objects in S3

**Answer:**
Options include:

* Server-side encryption with Amazon S3-managed keys (SSE-S3)
* Server-side encryption with AWS KMS-managed keys (SSE-KMS)
* Client-side encryption before upload

---

### Pre-Signed URL in S3

**Answer:**
A URL generated with a signature that allows temporary access to private objects without requiring AWS credentials.

---
### S3 lifecycle policies work

**Answer:**
Lifecycle policies automate moving objects between storage classes or deleting them after a set period.

---

### common S3 storage classes

**Answer:**

* STANDARD
* STANDARD\_IA (Infrequent Access)
* ONEZONE\_IA
* INTELLIGENT\_TIERING
* GLACIER
* DEEP\_ARCHIVE

---

### secure S3 buckets

**Answer:**

* Use IAM policies and bucket policies with least privilege
* Enable Block Public Access
* Use encryption (SSE-S3, SSE-KMS)
* Enable logging and monitoring (CloudTrail, S3 access logs)
* Enable MFA Delete on versioned buckets

---

### S3 handle versioning

**Answer:**
Versioning keeps multiple variants of an object in the same bucket, enabling recovery from unintended overwrites or deletions.

---
### handle large file uploads in S3

**Answer:**
Use Multipart Upload to upload parts in parallel, improving efficiency and reliability.

---

### S3 Transfer Acceleration

**Answer:**
A feature to speed up content transfers to S3 using optimized network paths via Amazon CloudFront edge locations.

---

### S3 event notifications work

**Answer:**
S3 can send event notifications to AWS Lambda, SNS, or SQS when specified events happen (e.g., object created, deleted).

---

### prevent unauthorized deletion of objects

**Answer:**
Enable **MFA Delete** (for versioned buckets) and use IAM/bucket policies to restrict `s3:DeleteObject`.

---

### maximum size of an S3 object

**Answer:**
5 TB per object. For objects larger than 5 GB, Multipart Upload is recommended.

---


