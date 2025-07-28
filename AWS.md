

**Azure** - [Azure](#Azure)

- [Fan-out architecture using AWS SQS and SNS](#fan-out-architecture-using-aws-sqs-and-sns) - [Azure Service Bus handles dead-letter messages](#azure-service-bus-handles-dead-letter-messages)
- [Difference between Kafka and SQS](#kafka-and-sqs) - [Using Pushpin to broadcast real-time messages](#pushpin-to-broadcast-real-time-messages)
- [Handling message duplication or retries](#handling-message-duplication-or-retries) - [Scaling a queue-based system under high load](#scaling-a-queue-based-system-under-high-load) - [Trade-offs when choosing Kafka over SQS](#trade-offs-when-choosing-kafka-over-sqs)

- [SQS](#SQS) - [SQS Best Practice](#SQS-Best-Practice)
- [SNS](#SNS) - [SNS Best Practice](#SNS-Best-Practice)
- [Amazon Kinesis Data Streams](#amazon-kinesis-data-streams) -[Lambda](#Lambda)


| **Category**           | **Topics** |
|------------------------|------------|
| **AWS API Gateway**    | [API Gateway](#aws-api-gateway), [Types of APIs](#types-of-apis-in-api-gateway), [REST vs HTTP API](#rest-api-vs-http-api), [Integration Types](#integration-types-supported-by-api-gateway), [Lambda Integration](#how-api-gateway-integrates-with-aws-lambda), [Stages](#stages-in-api-gateway), [Usage Plans](#usage-plans-in-api-gateway), [Throttling](#throttling-in-api-gateway), [Security](#securing-your-api-in-api-gateway), [Lambda Authorizer](#lambda-authorizer), [Static Content](#can-api-gateway-serve-static-content), [Payload Limit](#payload-limit-for-api-gateway), [Secure Video Upload](#building-a-secure-video-upload-system), [CORS](#handling-cors-in-api-gateway), [Caching](#how-api-gateway-handles-caching) |
| **Amazon DynamoDB**    | [DynamoDB Overview](#amazon-dynamodb), [Features](#dynamodb-features), [Durability & Availability](#dynamodb-ensure-data-durability-and-availability), [Query](#perform-a-query-in-dynamodb), [Security](#secure-dynamodb-data), [Table Design](#best-practice-for-designing-dynamodb-tables), [Query vs Scan](#difference-between-query-and-scan-in-dynamodb), [Limits](#limits-of-dynamodb), [Transactions](#handle-transactions-in-dynamodb), [Capacity Modes](#readwrite-capacity-modes-in-dynamodb), [Streams](#dynamodb-streams), [Scaling](#dynamodb-handle-scaling), [GSI vs LSI](#global-secondary-index-gsi-and-local-secondary-index-lsi), [Partition vs Sort Key](#difference-between-a-partition-key-and-a-sort-key), [Primary Key Types](#primary-keys-types), [Primary Key](#primary-key-in-dynamodb), [MongoDB vs DynamoDB](#MongoDB-vs-Amazon-DynamoDB) |
| **Amazon S3**          | [Bucket Policy](#s3-bucket-policy), [IAM vs Bucket Policy](#bucket-policy-different-from-iam-policy), [Controlled Actions](#common-actions-controlled-by-s3-policies), [Restrict by IP](#restrict-access-to-an-s3-bucket-to-a-specific-ip-range), [Public Access](#s3-bucket-publicly-accessible), [Block Public Access](#purpose-of-block-public-access-settings), [ACLs](#s3-access-control-lists-acls), [ACLs vs Policies](#bucket-policies-vs-acls), [S3 CORS](#s3-cross-origin-resource-sharing-cors), [Encryption](#encrypt-objects-in-s3), [Pre-Signed URLs](#pre-signed-url-in-s3), [Lifecycle Policies](#s3-lifecycle-policies-work), [Storage Classes](#common-s3-storage-classes), [S3 Security](#secure-s3-buckets), [Versioning](#s3-handle-versioning), [Large Uploads](#handle-large-file-uploads-in-s3), [Transfer Acceleration](#s3-transfer-acceleration), [Event Notifications](#s3-event-notifications-work), [Prevent Deletion](#prevent-unauthorized-deletion-of-objects), [Max Object Size](#maximum-size-of-an-s3-object) |


## Lambda

| **Category**                  | **Topics**                                                                                                                                                                                                                              | **Category**                  | **Topics**                                                                                                                                                                                                                              | **Category**                  | **Topics**                                                                                                                                                                                                                              |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Core Lambda Concepts**     | - [AWS Lambda](#aws-lambda)<br>- [Supported Languages](#aws-lambda-supported-languages)<br>- [Lambda Layers](#lambda-layers)  - [Calling AWS Lambda](#Calling-AWS-Lambda)| **Use Cases & Architectures** | - [Use Cases](#use-cases)<br>- [Lambda for APIs](#typical-architecture-of-using-aws-lambda-for-apis)<br>- [Serverless Video System](#building-a-serverless-video-upload-and-processing-system-using-lambda) | **Triggers & Data Handling**  | - [Triggers](#triggers-that-can-invoke-aws-lambda)<br>- [Passing Data](#passing-data-to-an-aws-lambda-function)<br>- [Large File Uploads](#handling-large-file-uploads-in-aws) |
| **Pricing**                  | - [Lambda Priced](#lambda-priced)<br>-[Step Functions](#Step-Functions)<br>-[Asynchronous Lambda Invocation](#Asynchronous-Lambda-Invocation)                                                                                                                                                                                                 | **Deployment & Configuration** | - [Deploy Code to Lambda](#deploy-code-to-lambda)<br>- [Environment-Specific Configuration](#environment-specific-configuration)                                                                                                        | **Security**                 | - [Secure a Lambda Function](#secure-a-lambda-function)<br>- [Permissions](#assigning-permissions-to-lambda-functions)<br> |
| **Monitoring & Debugging**   | - [Monitoring](#monitoring-lambda-functions)                                                                                                              | **Cold Start & Optimization** | - [Cold Start Issue](#cold-start-issue)<br> - [Provisioned Concurrency](#provisioned-concurrency)<br>- [Optimize Performance](#optimize-performance)                                                      | **Scaling**                  | - [Lambda Scale](#lambda-scale)<br> |
| **Messaging Patterns**       | - [Messaging Patterns – Key Points](#messaging-patterns--key-points)                                                                                                                                                                     |      |                                                                                                                    |            **Max**                  |     - [Max Execution Time](#maximum-execution-time-of-an-aws-lambda-function)<br>- [Max Package Size](#maximum-deployment-package-size)<br>                                                                                                                     



| **Interview Question**                                          | **Optimized Answer**                                                                                                                                                                                                      |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **AWS Lambda?**                                         | **AWS Lambda** is a **serverless compute service** that runs code in response to events without managing servers. It supports **auto-scaling**, is **event-driven**, and you **pay only for compute time used**.          |
| **Invoke a Lambda function?**                        | Lambda can be invoked **synchronously** (e.g., via **API Gateway**, SDK), **asynchronously** (`InvocationType: "Event"`), or through **event sources** like **S3**, **SNS**, **DynamoDB Streams**, or **Step Functions**. |
| **Use asynchronous invocation?**                 | I use it for **fire-and-forget tasks**, **background jobs**, or to **decouple services**. AWS automatically **queues and retries** if the function fails.                                                                 |
| **Call Lambda from a Node.js app?**                  | Using the **AWS SDK** (`@aws-sdk/client-lambda`), I create a **LambdaClient**, prepare an **InvokeCommand**, and send the request with a JSON **payload**.                                                                |
| **Handle retries and failures in async invocation?** | AWS Lambda **automatically retries** async invocations **twice**. I use a **Dead Letter Queue (DLQ)** like **SQS** or **SNS** to capture persistent failures and monitor via **CloudWatch**.                              |
| **Cold start in Lambda?**                               | A **cold start** happens when Lambda **spins up a new container**, adding **initial latency**. It usually affects functions not recently invoked or attached to a **VPC**.                                                |
| **Reduce cold starts?**                              | Use **provisioned concurrency**, avoid large dependencies, keep **package size small**, and minimize **blocking code** inside the handler.                                                                                |
| **Structure large applications in Lambda?**          | I split logic into **multiple Lambda functions**, use **microservices architecture**, orchestrate via **Step Functions**, and reuse code through **Lambda Layers**.                                                       |
| **Step Functions work with Lambda?**                     | **Step Functions** allow me to orchestrate multiple Lambdas into a **visual, state-driven workflow**, with **retries**, **branching**, **parallelism**, and **auditability**.                                             |
| **Secure Lambda functions?**                         | I apply **least-privilege IAM roles**, use **KMS-encrypted environment variables**, restrict triggers, and integrate **API Gateway with authorizers** (e.g., JWT).                                                        |
| **Use of Lambda Layers?**                            | **Lambda Layers** help **share common dependencies** (like libraries or config) across functions, enabling **code reuse** and easier **maintenance**.                                                                     |
| **Monitor Lambda performance?**                      | I use **Amazon CloudWatch** for **logs and metrics** (duration, errors, throttles), and **AWS X-Ray** for **tracing** and **performance diagnostics**.                                                                    |
| **Can a Lambda function call another Lambda?**                  | Yes, using the **AWS SDK**, **Step Functions**, or **EventBridge**. It's common for **microservice-style architectures** or **fan-out patterns**.                                                                         |
| **How do you handle long-running processes?**                   | I split them into **smaller steps**, use **Step Functions** for orchestration, or queue tasks using **SQS** to avoid timeout limits.                                                                                      |
| **Lambda concurrency limits?**                         | AWS provides **1,000 concurrent executions per region** by default. I can set **reserved concurrency per function** to control usage and avoid throttling.                                                                |

| **Managing Shared Dependencies**            | I use **Lambda Layers** to package shared libraries, configs, or binaries. This avoids code duplication and simplifies deployments. Layers are versioned and reused across multiple functions.                     |
| **Implementing Idempotency in Lambda**      | I use a **unique request ID** (e.g., order ID or booking ID) and store processing state in **DynamoDB or Redis**. Before executing, the Lambda checks if the request has already been processed.                   |
| **Debugging Lambda Failures in Production** | I use **structured logging** with **correlation IDs**, **CloudWatch Logs Insights** for filtering, and **AWS X-Ray** for tracing. I also configure **DLQs** for async failures and correlate errors to requests.   |
| **Handling Long-Running Processes**         | I break processes into **smaller, time-bound steps** using **Step Functions** or queue them with **SQS**. I persist intermediate state and ensure each Lambda respects the 15-minute execution limit.              |
| **Implementing Fan-out Architecture**       | I use **SNS** or **EventBridge** to fan out a message to multiple Lambdas. Each Lambda handles a separate task like notification, logging, or processing. This ensures decoupling and scalability.                 |
| **Securing Environment Variables**          | I encrypt environment variables with **KMS**, follow **least-privilege IAM**, and prefer **Secrets Manager** for dynamic credentials. Runtime decryption is done using SDK calls or built-in support.              |
| **Reducing Latency in User-Facing Lambdas** | I use **provisioned concurrency** to reduce cold starts, keep dependencies small, preload modules outside the handler, and use **CloudFront or Lambda\@Edge** for global delivery.                                 |
| **Understanding Lambda vs Lambda\@Edge**    | **Lambda\@Edge** runs closer to the user (at CloudFront edge locations), enabling low-latency request/response manipulation. I use it for header rewrites, redirects, or A/B testing at the edge.                  |
| **CI/CD and Deployment Strategies**         | I use **Serverless Framework**, **AWS SAM**, or **Terraform** to manage deployments. For versioning, I use **aliases** and implement **blue-green or canary deployments** using **CodeDeploy**.                    |
| **Controlling Concurrency and Throttling**  | I use **reserved concurrency** to limit invocation rates, add **SQS buffering**, and apply **API Gateway throttling** or **WAF rules** to prevent overwhelming Lambda or downstream systems.                       |
| **Synchronous vs Asynchronous Invocation**  | **Sync** is used for request/response use cases (e.g., API Gateway), while **async** is ideal for background jobs or decoupled flows. Async includes **retries** and optional **DLQ support**.                     |
| **Canary & Blue-Green Deployment Strategy** | I attach **aliases to versions** and use **weighted traffic shifting** (e.g., 10% traffic to new version, then shift gradually). I configure rollback conditions in **CodeDeploy**.                                |
| **Cost Optimization Techniques**            | I tune **memory settings**, monitor **invocation time**, reduce **payload sizes**, and choose **event-driven patterns**. Async or batched processing also helps reduce cost per transaction.                       |
| **Decoupling Services Using Events**        | I decouple functions using **SNS**, **SQS**, or **EventBridge**. This allows teams to deploy and scale independently. For complex workflows, I use **Step Functions** for orchestration.                           |
| **Logging & Observability Best Practices**  | I implement **structured logging** with correlation IDs, enable **X-Ray tracing**, use **CloudWatch dashboards**, and send logs to **OpenSearch or third-party observability platforms** (like Datadog or Lumigo). |











## SQS




| **Question**                               | **Answer**                                                                                                                                                                                         |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AWS SQS?                           | Amazon **Simple Queue Service (SQS)** is a **fully managed**, **highly available**, **decoupled messaging service** used to build scalable and resilient systems.                                  |
| **Types of SQS queues**?          | 1. **Standard Queue** – **High throughput**, **at-least-once delivery**, **best-effort ordering**.<br>2. **FIFO Queue** – **Guaranteed order**, **exactly-once delivery**, **limited throughput**. |
| **message retention** in SQS?          | Messages are retained for up to **14 days**. The **default retention** is **4 days**.                                                                                                              |
| the **max message size** in SQS?       | The maximum message size is **256 KB**.                                                                                                                                                            |
| the **default visibility timeout**?    | Default is **30 seconds**, and can be set from **0 to 12 hours**.                                                                                                                                  |
| the **purpose of visibility timeout**? | It ensures that **once a message is read**, it is **hidden from other consumers** for a period to **avoid duplicate processing**.                                                                  |
|  **SQS ensure message delivery**? | SQS uses **at-least-once delivery**. **Duplicates can occur**, so **consumers must be idempotent**. **FIFO queues** support **exactly-once delivery**. |
| **long polling** in SQS?          | **Long polling waits (up to 20 sec)** for messages, reducing **empty responses** and **API costs**.                                                    |
| **short polling**?                | **Short polling returns immediately**, may return **no messages**, and is **less efficient** than long polling.                                        |
| a **Dead Letter Queue (DLQ)**?    | A **DLQ captures failed messages** that exceed the **MaxReceiveCount** for **troubleshooting** and **failure isolation**.                              |
| Can **SQS trigger Lambda**?               | Yes, SQS can **directly trigger AWS Lambda**, useful in **serverless architectures**.                                                                  |
| Difference **between SNS and SQS**?       | **SNS = push-based, pub/sub model**.<br>**SQS = pull-based, queue model**. SNS **broadcasts**, SQS **stores until consumed**.                          |
|  **implement deduplication in FIFO queues**?    | Use **MessageDeduplicationId** (custom or content-based). SQS uses it to **detect and prevent duplicates** within a **5-minute window**.                    |
| **batching** in SQS?                          | You can **send or receive up to 10 messages** in a **single API call** using **SendMessageBatch** or **ReceiveMessage** for **efficiency and cost saving**. |
| What are the **throughput limits for FIFO queues**?   | FIFO supports **300 messages/sec** by default. Can scale to **3,000/sec with batching** and **MessageGroupId** usage.                                       |
|  you **handle message duplication**?            | By building **idempotent consumers**, using **unique IDs**, or **deduplication logic**.                                                                     |
|  **SQS ensure durability**?                   | Messages are stored **across multiple Availability Zones (AZs)** for **high durability and availability**.                                                  |
|  **message ordering preserved in FIFO queues**? | Using **MessageGroupId**, which guarantees **strict message order within the same group**.                                                                  |

## SQS Best Practice

| **Best Practice**                   | **Why it Matters**                                                                            |
| ----------------------------------- | --------------------------------------------------------------------------------------------- |
| Use **Dead Letter Queues (DLQ)**    | Helps in **debugging failed message processing** and **isolating issues**.                    |
| Set **visibility timeout wisely**   | Prevents **duplicate processing** while allowing **retry after timeout**.                     |
| Enable **long polling**             | **Reduces cost**, **improves efficiency** by reducing empty receives.                         |
| Use **message attributes**          | Pass **lightweight metadata** (e.g., type, ID) **without bloating message body**.             |
| Ensure **idempotency in consumers** | Prevents **side effects from duplicate messages**.                                            |
| Monitor with **CloudWatch metrics** | Track **queue depth**, **message age**, and **failed messages** for **alerting and scaling**. |


## SNS


| **Question**                                   | **Answer**                                                                                                                                                                                    |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What is Amazon SNS?                            | Amazon **Simple Notification Service (SNS)** is a **fully managed**, **pub/sub messaging** service for **decoupling microservices**, **distributing messages**, and **triggering workflows**. |
| What are the main components of SNS?           | 1. **Topic** – a communication channel.<br>2. **Publisher** – sends messages to the topic.<br>3. **Subscriber** – receives messages (e.g., email, SMS, Lambda, SQS).                          |
| What types of protocols does SNS support?      | **HTTP/HTTPS**, **Email/Email-JSON**, **SMS**, **Lambda**, **SQS**, **Platform Applications** (mobile push).                                                                                  |
| Difference between SNS and SQS?                | **SNS is push-based**, ideal for **broadcasting**.<br>**SQS is pull-based**, ideal for **decoupling and queuing**.                                                                            |
| Can SNS send messages to multiple subscribers? | Yes, SNS supports **fan-out** – one message to **multiple endpoints** (e.g., SQS + Lambda + Email).                                                                                           |
| What is a topic in SNS?               | A **topic is a logical access point** for **grouping multiple subscribers**. Messages published to a topic are **delivered to all subscribers**.                         |
| How does SNS ensure message delivery? | SNS **tries multiple retries**, with **exponential backoff** for failed HTTP/S subscribers. For Lambda and SQS, **messages are delivered reliably**.                     |
| Can you filter messages in SNS?       | Yes, using **Message Attributes + Subscription Filter Policies**, subscribers receive only **relevant messages**.                                                        |
| How can SNS trigger Lambda?           | By **subscribing a Lambda function** to an SNS topic. When a message is published, **Lambda is invoked** automatically.                                                  |
| How to secure SNS?                    | - Use **access policies** (resource-based IAM).<br>- Enable **encryption (KMS)**.<br>- Use **VPC endpoints** for private access.<br>- Use **HTTPS** for secure delivery. |
| How does SNS handle message retries?                   | For HTTP/S endpoints, SNS uses **retries with exponential backoff**. After failure, messages are sent to a **Dead Letter Queue (DLQ)** if configured. |
| What is message filtering in SNS?                      | **Subscribers can filter messages** using **filter policies** based on **message attributes**, reducing unnecessary traffic.                          |
| How does SNS integrate with mobile push notifications? | SNS supports **Platform Applications** (e.g., APNS, FCM). You register **device tokens**, and SNS sends push notifications.                           |
| Can SNS be used across AWS accounts?                   | Yes, using **cross-account access policies**, SNS topics can be shared across accounts.                                                               |
| What is the delivery guarantee in SNS?                 | - **Best-effort** for HTTP/HTTPS and Email.<br>- **At-least-once** delivery for SQS and Lambda subscribers.                                           |

## SNS Best Practice

| **Best Practice**                          | **Why it Matters**                                            |
| ------------------------------------------ | ------------------------------------------------------------- |
| Use **filter policies**                    | Reduce **unnecessary processing** for subscribers.            |
| Use **Dead Letter Queues** with Lambda/SQS | Helps **capture failed deliveries** for **troubleshooting**.  |
| Enable **encryption**                      | Use **KMS encryption** to secure messages at rest.            |
| Prefer **fan-out** architecture            | **Decouples services** and improves **scalability**.          |
| Use **CloudWatch metrics**                 | Monitor **delivery success/failure**, **message throughput**. |
| Set **message attributes wisely**          | Adds **contextual metadata** for **targeted filtering**.      |






###  AWS Lambda


* AWS Lambda is a **serverless compute service**.
* Runs code in response to **events** (e.g., HTTP requests, file uploads).
* **No server management** required — fully managed by AWS.
* **Auto-scales** and you only pay for the **actual execution time** (per millisecond).



###  AWS Lambda Supported Languages

* **Officially supported runtimes**:

  * Node.js
  * Python
  * Java
  * Go
  * Ruby
  * .NET Core
* **Custom runtimes** via Lambda Layers (e.g., PHP, Rust, etc.)


###  Maximum Execution Time of an AWS Lambda Function


* Maximum execution time: **15 minutes (900 seconds)**.
* Configurable from **1 second to 900 seconds**.
* If the function exceeds the timeout, it is **terminated automatically**.
* Set timeout based on expected execution time to avoid unnecessary cost.
- AWS Lambda functions have a **maximum allowed execution time (timeout)** of **15 minutes (900 seconds)** per invocation.
* If the function runs longer than this timeout, AWS Lambda **automatically terminates** the execution and returns a timeout error.
* You can configure the timeout duration for each Lambda function anywhere between **1 second and 900 seconds** depending on your workload needs.
* It's important to set an appropriate timeout to balance between completing your task and avoiding unnecessary charges or delays.



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

Lambda can be triggered by various AWS services:

* **API Gateway** → HTTP API requests
* **S3** → File/object creation, deletion, or update
* **DynamoDB Streams** → Data change events
* **SNS** → Pub/Sub notifications
* **SQS** → Message queues
* **CloudWatch Events / EventBridge** → Scheduled or custom events
* **CloudWatch Logs** → Log processing
* **Cognito** → Authentication-related events (e.g., pre-signup, post-login)
* **Kinesis** → Real-time data streams
* **Alexa Skills Kit**, **IoT Core**, and more


---


###  Typical Architecture of Using AWS Lambda for APIs

A common serverless API architecture with AWS Lambda includes the following components:

* **Client**: Web app or mobile app initiates the request
* **API Gateway**:
  * Entry point for HTTP(S) requests
  * Handles routing, security (auth), rate limiting
* **AWS Lambda**:

  * Executes backend logic on demand
  * Stateless and short-lived
* **Database (DynamoDB/RDS)**:

  * Lambda reads/writes app data
* **S3 (Optional)**:

  * Used for storing assets like images, videos, or documents
* **Other Services (Optional)**:

  * **SNS/SQS** for messaging
  * **CloudWatch** for logging/monitoring

```
Client
  ↓
API Gateway
  ↓
Lambda (Business logic)
  ↓
DynamoDB / S3 (Data Layer)
  ↑
  Return response
  ↑
API Gateway
  ↑
Client receives response
```


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







###  Provisioned concurrency

| **Aspect**       | **Details**                                                   |
| ---------------- | ------------------------------------------------------------- |
| **Purpose**      | Avoid cold starts for latency-sensitive workloads             |
| **How it works** | Pre-warms Lambda instances with runtime + init code           |
| **Setup**        | Console, CLI, or IaC (e.g., CDK, CloudFormation)              |
| **Billing**      | Charged per second for warm time **+** execution              |
| **When to use**  | Predictable traffic, APIs, gaming, ML inference, etc.         |
| **Limitation**   | **More expensive**, not ideal for bursty or irregular traffic |


- Provisioned Concurrency is a feature in AWS Lambda that helps **eliminate cold starts** by **pre-warming a set number of Lambda instances**. 
- This is especially useful for **latency-sensitive applications** like APIs or real-time systems.
- When we enable Provisioned Concurrency, AWS **initializes the runtime and dependencies ahead of time**, so the function is **ready to respond instantly** when triggered. 
- This gives **near-zero startup latency**, unlike the usual cold start that happens when the Lambda hasn't been invoked for a while or during scale-out.
- We configure Provisioned Concurrency by specifying the **number of concurrent executions** we want to keep warm. AWS **prepares those instances** in advance, including **runtime boot-up and code initialization**.

- I'd use it when:
  * The application needs **consistent low latency**
  * Traffic is **predictable**, like during business hours
  * The Lambda is triggered by **API Gateway, ALB, or Step Functions**

- For example, in a real-time bidding platform or ML inference service, even **100ms of cold start** can degrade UX, so **Provisioned Concurrency helps maintain SLA**.


**Trade-offs**

- The main trade-off is **cost**. 
- With Provisioned Concurrency, you pay for the **provisioned "warm time"** in addition to the **execution time**. 
- So, it's best suited for **predictable workloads** where the performance gains justify the extra cost.



**Example – Enabling via AWS CLI**

```bash
aws lambda put-provisioned-concurrency-config \
  --function-name my-function \
  --qualifier production \
  --provisioned-concurrent-executions 10
```




####  How do you handle errors in Lambda?

* Use **try/catch** in your code
* Configure **DLQs (Dead Letter Queues)** for asynchronous invocations
* Enable **Lambda Destinations** (on-success / on-failure)
* Use **CloudWatch Logs** for debugging

---

###  Monitoring Lambda Functions

- “For observability and debugging in my AWS Lambda functions, I use a combination of tools provided by AWS:

* 🔍 **CloudWatch Logs**:
  I use `console.log` or equivalent logging methods, which automatically stream logs to **CloudWatch Logs**. This helps me **trace execution flow**, **inspect variables**, and **capture runtime errors**.

* 📊 **CloudWatch Metrics & Alarms**:
  I monitor key metrics like **invocation count**, **error rates**, **duration**, and **throttle count**. I also configure **CloudWatch Alarms** to get alerted when **thresholds are breached**—for example, **high error rate** or **slow response time**.

* 🧩 **AWS X-Ray**:
  For deeper observability, especially in distributed systems, I enable **X-Ray tracing**. This helps me **visualize request flow**, **identify performance bottlenecks**, and understand **latency in the application stack**.

* 🗂️ **Structured Logging**:
  I prefer using **JSON-based structured logs**. This makes it easier to **parse logs**, **filter specific fields**, and **integrate with external log analysis tools**.


**🔑 Key Benefits:**

* ✅ **Cloud-native, fully managed observability**
* ✅ **Logs and metrics auto-integrated** without extra agents
* ✅ **X-Ray provides end-to-end traceability**
* ✅ **Quick diagnosis** of errors and performance issues

- In short, these tools help me **proactively monitor**, **troubleshoot**, and **improve reliability and performance** of serverless applications.”

---


###  Assigning Permissions to Lambda Functions


You assign an **IAM execution role** to the Lambda function. This role defines what AWS services (e.g., S3, DynamoDB) the function can access.

---




###  Lambda Layers


Lambda Layers allow you to **package and share code libraries or dependencies** (e.g., Node.js modules, Python packages) across multiple Lambda functions.

---

###  maximum deployment package size

* **Direct upload (console or API):** 50 MB (zipped)
* **With S3 upload:** 250 MB (zipped)
* **Unzipped code in execution:** 250 MB
* **Layers:** Max 5 layers, 50 MB each

---

###  Building a Serverless Video Upload and Processing System Using Lambda



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


AWS API Gateway is a fully managed service that makes it easy to **create, publish, maintain, monitor, and secure REST, HTTP, and WebSocket APIs** at any scale. It acts as a **gateway between clients and backend services** (e.g., AWS Lambda, EC2, etc.).

---

###  Types of APIs in API Gateway



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



1. **AWS Lambda** – Most common for serverless
2. **HTTP/HTTPS Endpoints** – Proxy to external APIs
3. **Mock Integration** – For testing responses
4. **AWS Service Proxy** – Directly call AWS services (e.g., DynamoDB, SNS)

---
###  How API Gateway Integrates with AWS Lambda



* API Gateway acts as a **trigger** for the Lambda function.
* You define **methods** (GET, POST, etc.) and **routes**, and map them to the Lambda.
* Data is passed to Lambda in the **event object**.

---
###  Stages in API Gateway


A **stage** is a named reference to a deployment of your API (e.g., `dev`, `staging`, `prod`). It allows versioning and separates environments.

---

###  usage plans in API Gateway


Usage plans allow you to:

* **Throttle** API requests (rate + burst)
* **Quota** requests per day/month
* **Associate API keys** with consumers

---

###  throttling in API Gateway


Throttling controls how many requests can be handled:

* **Rate**: requests per second
* **Burst**: max requests in a short burst

Prevents abuse and ensures backend stability.

---


###  Securing Your API in API Gateway



* **API Keys + Usage Plans**
* **IAM-based access** (SigV4 signing)
* **Cognito User Pools** (JWT-based auth)
* **Lambda Authorizers (Custom Authorizers)**
* **Resource Policies** (restrict access by IP or VPC)

---

###  Lambda Authorizer


A Lambda Authorizer (previously known as a custom authorizer) is a Lambda function that controls access to your API by **validating headers, tokens, or other context** before the main handler runs.

---

###  Can API Gateway serve static content


No, API Gateway doesn’t serve static files. You should serve static assets like HTML, CSS, JS, or videos from **Amazon S3 with CloudFront**. API Gateway is best for dynamic APIs.

---

###  payload limit for API Gateway



* **Request payload size limit:** 10 MB for REST/HTTP APIs
* For larger file uploads, use **presigned S3 URLs** instead of going through API Gateway.

---


###  Building a Secure Video Upload System



1. API Gateway + Lambda generates a **presigned S3 URL**.
2. Client uses that URL to upload the video **directly to S3**.
3. S3 triggers a **Lambda** for processing/validation.
4. API Gateway serves status or metadata via REST endpoints.

---

###  Handling CORS in API Gateway



* Enable **CORS headers** (`Access-Control-Allow-Origin`, etc.) in method response.
* For Lambda integration, ensure the Lambda returns these headers as part of its response.
* For preflight requests, explicitly handle `OPTIONS` method.

---

###  How API Gateway Handles Caching


* You can enable **response caching** at the method level (for REST APIs).
* Cached data is stored in **edge locations**, reducing backend load.
* TTL (time-to-live) can be configured per method.

---







---

### Amazon DynamoDB


Amazon DynamoDB is a fully managed NoSQL database service provided by AWS that offers fast and predictable performance with seamless scalability. It stores data as key-value pairs and supports document data structures, making it suitable for applications that require low latency and flexible schema design.

---

### DynamoDB features



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


The primary key uniquely identifies each item in a DynamoDB table. There are two types:


### primary keys types
* **Partition Key (Simple Primary Key):** A single attribute used to distribute data across partitions.
* **Partition Key + Sort Key (Composite Primary Key):** A combination of two attributes where the partition key defines the partition and the sort key orders items within the partition.

---

### difference between a partition key and a sort key



* The **partition key** determines the partition (physical storage) where data is stored and must be unique if no sort key is present.
* The **sort key** allows multiple items with the same partition key but different sort keys, enabling sorted data retrieval within a partition.

---

### Global Secondary Index (GSI) and Local Secondary Index (LSI)



* **Global Secondary Index (GSI):** An index with a partition key and optional sort key different from the base table’s primary key. It can span all partitions and supports eventually consistent reads.
* **Local Secondary Index (LSI):** An index that uses the same partition key as the base table but a different sort key. It is limited to 5 LSIs per table and supports strongly consistent reads.

---

### DynamoDB handle scaling


DynamoDB supports **automatic scaling** by adjusting read and write throughput capacity based on demand. It also supports **on-demand capacity mode**, which allows the table to scale instantly without pre-provisioning.

---

### DynamoDB Streams


DynamoDB Streams capture a time-ordered sequence of item-level changes in a DynamoDB table. It can be used to trigger AWS Lambda functions or other processing tasks for event-driven architectures.

---

### read/write capacity modes in DynamoDB



* **Provisioned Capacity:** You specify the number of reads and writes per second (RCUs and WCUs) you need.
* **On-Demand Capacity:** DynamoDB automatically scales to handle any amount of traffic without capacity planning.

---

### handle transactions in DynamoDB


DynamoDB supports ACID transactions using **TransactWriteItems** and **TransactGetItems** APIs that allow multiple Put, Update, Delete, and ConditionCheck operations in a single all-or-nothing operation.

---

### limits of DynamoDB



* Maximum item size: 400 KB
* Maximum provisioned throughput per table varies by region but can be scaled
* Maximum 5 Local Secondary Indexes per table
* Up to 20 Global Secondary Indexes per table

---

### DynamoDB ensure data durability and availability


DynamoDB replicates data across multiple Availability Zones in an AWS region to provide high availability and durability. For global applications, **Global Tables** replicate data across multiple regions.

---

### perform a query in DynamoDB


You use the **Query** API to retrieve items based on the partition key and optionally filter by the sort key. Queries are efficient because they only search within a single partition.

---

### difference between Query and Scan in DynamoDB



* **Query:** Retrieves items based on primary key values, efficient and fast.
* **Scan:** Reads every item in the table, which can be expensive and slow for large tables.

---

### secure DynamoDB data



* Use IAM policies to control access
* Enable encryption at rest (AWS-managed or customer-managed keys via KMS)
* Use VPC endpoints to restrict access
* Enable encryption in transit using HTTPS/TLS

---

### best practice for designing DynamoDB tables



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


A bucket policy is a JSON-based access policy attached to an S3 bucket that defines permissions for principals (users, accounts, or services) to perform actions on that bucket and its objects.

---

###  Bucket Policy different from IAM Policy



* **Bucket Policy:** Attached directly to a bucket, controls access to that bucket’s objects.
* **IAM Policy:** Attached to users, groups, or roles, controls what AWS resources those identities can access.

---

### common actions controlled by S3 policies


Examples include: `s3:GetObject`, `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket`, `s3:GetBucketPolicy`.

---

### restrict access to an S3 bucket to a specific IP range


Use a condition in the bucket policy with the `IpAddress` operator specifying the allowed IP range under `"Condition"`.

---

### S3 bucket publicly accessible


Add a bucket policy allowing `"Principal": "*"` and `"Action": "s3:GetObject"` on the bucket’s resource. Also, ensure **Block Public Access** settings are disabled.

---

### purpose of **Block Public Access** settings


To prevent accidental public exposure of S3 buckets or objects by blocking public policies and ACLs.

---

### S3 Access Control Lists (ACLs)


ACLs are legacy access control mechanisms allowing you to grant read/write permissions on buckets or objects to AWS accounts and predefined groups.

---
### Bucket Policies vs ACLs


Use bucket policies for fine-grained, scalable permissions. ACLs are generally discouraged except for legacy support or cross-account access.

---

### S3 Cross-Origin Resource Sharing (CORS)


CORS enables browsers to make cross-origin requests to S3 buckets. You configure allowed origins, methods, and headers in a CORS configuration on the bucket.

---

### encrypt objects in S3


Options include:

* Server-side encryption with Amazon S3-managed keys (SSE-S3)
* Server-side encryption with AWS KMS-managed keys (SSE-KMS)
* Client-side encryption before upload

---

### Pre-Signed URL in S3


A URL generated with a signature that allows temporary access to private objects without requiring AWS credentials.

---
### S3 lifecycle policies work


Lifecycle policies automate moving objects between storage classes or deleting them after a set period.

---

### common S3 storage classes



* STANDARD
* STANDARD\_IA (Infrequent Access)
* ONEZONE\_IA
* INTELLIGENT\_TIERING
* GLACIER
* DEEP\_ARCHIVE

---

### secure S3 buckets



* Use IAM policies and bucket policies with least privilege
* Enable Block Public Access
* Use encryption (SSE-S3, SSE-KMS)
* Enable logging and monitoring (CloudTrail, S3 access logs)
* Enable MFA Delete on versioned buckets

---

### S3 handle versioning


Versioning keeps multiple variants of an object in the same bucket, enabling recovery from unintended overwrites or deletions.

---
### handle large file uploads in S3


Use Multipart Upload to upload parts in parallel, improving efficiency and reliability.

---

### S3 Transfer Acceleration


A feature to speed up content transfers to S3 using optimized network paths via Amazon CloudFront edge locations.

---

### S3 event notifications work


S3 can send event notifications to AWS Lambda, SNS, or SQS when specified events happen (e.g., object created, deleted).

---

### prevent unauthorized deletion of objects


Enable **MFA Delete** (for versioned buckets) and use IAM/bucket policies to restrict `s3:DeleteObject`.

---

### maximum size of an S3 object


5 TB per object. For objects larger than 5 GB, Multipart Upload is recommended.

---




### **Azure**

---

#### **Deployment & Environment Management**

* Use **Azure App Services** for quick Node.js deployments.
* Handle configs securely with **App Settings** and **Azure Key Vault**.
* Use **Managed Identity** to avoid exposing secrets.

---

#### **CI/CD and DevOps (Azure DevOps + Node.js)**

* Set up **YAML-based pipelines** in Azure DevOps.
* Automate build, test, and deploy stages.
* Implement **approvals, rollback, environment variables**, and **stage gates**.
* Use **GitHub Actions** as an alternative CI/CD strategy.

---

#### **Monitoring & Logging**

* Integrate **Azure Application Insights** using the `applicationinsights` package.
* Capture:

  * Request durations,
  * Exceptions,
  * Custom metrics.
* Use **Live Metrics** and **Kusto Queries (KQL)** for deep diagnostics.

---

#### **Scalability & Serverless**

* Use **Azure Functions** for event-driven, cost-effective workloads.
* Design for scalability using **AKS** or **App Service autoscale**.
* Offload tasks with **Azure Service Bus**, **Event Grid**, or **Queue Storage**.

---

#### **Data Engineering with Node.js**

* Upload and manage files in **Azure Blob Storage / Data Lake** using `@azure/storage-*` SDKs.
* Trigger and monitor **Azure Data Factory pipelines** from Node.js.
* Stream and preprocess large datasets using **Node streams**.

---

#### **Cosmos DB Integration (with Node.js)**

* Use `@azure/cosmos` SDK for CRUD and querying.
* Always pass **partition key** for performance.
* Optimize throughput (RU/s), indexing, and **bulk operations**.
* Handle **consistency levels** and **conflict resolution** in distributed systems.
* Secure access via **RBAC, IP firewall**, and **Key Vault** or **Managed Identity**.

---

#### **Resilience & Architecture**

* Design multi-region apps using **Azure Traffic Manager** or **Front Door**.
* Apply **retry patterns**, **circuit breakers**, and **graceful fallbacks** in Node.js.
* Use **Cosmos DB multi-region** setup and **Redis** for caching.

---

#### **Security & Compliance**

* Avoid hardcoded secrets – use **Azure Key Vault**.
* Leverage **Azure AD tokens** for secure API access.
* Apply **RBAC, network restrictions**, and **auditing policies**.

---











### **Fan-out architecture using AWS SQS and SNS?**


* Use **Amazon SNS** as the publisher (topic).
* Create **multiple SQS queues** as subscribers.
* Subscribe each queue to the SNS topic.
* SNS sends a copy of the message to all queues simultaneously (**fan-out**).
* Each consumer (e.g., Lambda or EC2) pulls messages from its respective queue independently.
* Configure **DLQs** per SQS for failure handling and **visibility timeouts** to avoid duplicate processing.

> ✅ This decouples producers from consumers and allows parallel, independent processing.


### **Azure Service Bus handles dead-letter messages**


* Azure Service Bus automatically moves messages to the **dead-letter queue (DLQ)** when:

  * Max delivery attempts are exceeded.
  * Message expiration occurs.
  * The receiver explicitly dead-letters the message.
* Each queue/topic has a subqueue named `$DeadLetterQueue`.
* You process DLQ messages by reading from:

  ```
  <queue-name>/$DeadLetterQueue
  ```
* Best practices:

  * Use DLQs to isolate and analyze failed messages.
  * Set up a **reprocessing pipeline** or admin tool to fix and requeue messages.

---

### **Kafka and SQS?**


| Feature           | Kafka                                   | SQS                                  |
| ----------------- | --------------------------------------- | ------------------------------------ |
| Model             | Distributed log                         | Message queue                        |
| Message Retention | Time-based or size-based                | Until consumed or expired            |
| Ordering          | Guaranteed per partition                | FIFO optional, otherwise best-effort |
| Consumers         | Pull-based (consumer groups)            | Polling-based                        |
| Replay            | ✅ Yes (via offset)                      | ❌ Not natively                       |
| Use Case          | High-throughput streaming, ETL, logging | Simple queueing, background jobs     |

> Kafka is ideal for event sourcing and stream processing.
> SQS is better for decoupled, serverless workflows.

---

### **Pushpin to broadcast real-time messages?**


* Pushpin acts as a **real-time reverse proxy** supporting WebSockets, HTTP streaming, and SSE.
* Backend services publish messages to a pub/sub system (e.g., Redis, ZeroMQ).
* Pushpin **listens to channels** (e.g., `channel:<user_id>`) and pushes messages to connected clients.
* Use **GRIP (General Realtime Intermediary Protocol)** to manage subscriptions.
* To scale:

  * Deploy **multiple Pushpin nodes** behind a load balancer.
  * Use a **shared pub/sub backend** (e.g., Redis or NATS) to distribute messages.

> 🔄 Ideal for live dashboards, chat apps, multiplayer games, etc.

---

### **Handled message duplication or retries.**

**Answer Example:**

> In a microservices system, we used AWS SQS with Lambda. Due to network retries, some messages were delivered multiple times. To handle this, we:

* Added **deduplication logic** using **idempotent keys** (message IDs stored in Redis).
* Configured **FIFO queues** where ordering and deduplication are guaranteed.
* Used **visibility timeouts** and **DLQs** for retry handling.

> Result: No double-processing even under load, and failed messages were traceable.

---

### **Scale a queue-based system under high load?**



> In a log processing system using Kafka, we faced spikes of 100K+ messages/sec.

* We scaled by:

  * Increasing Kafka **partitions** for parallelism.
  * Using **consumer groups** to horizontally scale processing.
  * Tuning **batch sizes** and **poll intervals**.
  * Offloading heavy processing to **worker pools** behind the consumers.
  * Enabling **backpressure** with circuit breakers to avoid crashes.

> We maintained real-time throughput while keeping latency under control.

---

### **Trade-offs consider choosing Kafka over SQS?**



* **Kafka** chosen when:

  * Replay capability is critical.
  * High-throughput ingestion (millions/day).
  * Event-driven microservices need shared event logs.
* **SQS** chosen when:

  * Serverless, low-maintenance.
  * Short-lived tasks with basic queueing.
  * Simpler retry and DLQ mechanisms are sufficient.

> ✅ Kafka offers flexibility and performance.
> ✅ SQS is easier to manage for simpler workflows.

---


> “I don’t just consume queues — I design the entire **event-driven architecture**: decoupling services, handling failures gracefully, managing retries and deduplication, and tuning performance at scale.”





###  **AWS Lambda?**


AWS Lambda is a **serverless compute service** that lets you run code without provisioning or managing servers. You simply upload your code, and Lambda automatically scales it in response to events — such as HTTP requests, S3 uploads, or DynamoDB changes.

🔑 **Key Points:**

* Event-driven
* Auto-scalable
* Pay-per-use (based on invocations and execution time)
* No server management

---

###  **Use cases**


I've used Lambda for:

* REST APIs (with API Gateway)
* Data processing (triggered by S3 or Kinesis)
* Scheduled jobs (via EventBridge cron rules)
* Notifications and alerts (via SNS and SES)
* Backend glue logic in microservices

🔑 **Key Points:**

* Used with API Gateway, S3, DynamoDB
* Works well for real-time and async workloads

---

###  **Lambda priced?**


**Key Points to Say in Interview**

* **Lambda is pay-as-you-go** – you're billed for usage, not idle time.
* **No cost when functions are idle** — great for spiky or low-traffic workloads.
* **Granular billing** (per ms) lets you tightly control execution costs.
* **Memory tuning** can reduce both **latency and cost** — balance is key.

| **Aspect**             | **Explanation**                                                            |
| ---------------------- | -------------------------------------------------------------------------- |
| **Pricing Metrics**    | Based on **number of invocations**, **duration**, and **memory allocated** |
| **Memory Range**       | **128 MB to 10 GB**, billed in 1 ms increments                             |
| **Free Tier**          | **1 million invocations & 400,000 GB-seconds/month** included              |
| **Idle Charges**       | **No charge when idle** – you only pay for actual compute usage            |
| **Duration Billing**   | **Billed per millisecond**, after a 1ms minimum (rounded to nearest ms)    |
| **Cost Optimization**  | **Optimizing memory = better cost/performance balance**                    |
| **Concurrency Impact** | More concurrent executions = more cost (watch quotas and optimize logic)   |

---

###  **Deploy code to Lambda?**


Multiple ways:

* **Manual**: Upload ZIP or use the AWS Console
* **CLI/CDK/SAM**: For infrastructure-as-code
* **CI/CD pipelines**: Using CodePipeline or GitHub Actions
* **Container images**: Using ECR for large or complex runtimes

🔑 **Key Points:**

* Prefer automated deployments via CI/CD
* Use CDK/SAM for repeatable and version-controlled deployments

---


###  **Cold start issue?**

A **cold start** occurs when **AWS Lambda initializes a new container** to handle a request. This typically happens when:

* The function is **invoked after a period of inactivity**
* There is **scaling**, and Lambda needs to **create new instances**

**Key Points to Say in Interview**

* **Cold starts happen due to idle time or scaling events**
* **They increase latency due to new container setup**
* **Provisioned concurrency** is the primary mitigation strategy
* Use **lightweight runtimes** and **minimize initialization logic**
* **Cold vs. Warm** difference mainly lies in **container reuse**

**Cold Start Workflow**

1. **Container Provisioning** – AWS sets up the runtime environment
2. **Code Initialization** – Dependencies are loaded, global code runs
3. **Handler Execution** – Your actual function logic runs

**Impacts of Cold Starts**

* **Increased latency** during the first invocation
* **Unpredictable performance** for real-time or low-latency applications
* **More noticeable** for:

  * **VPC-connected Lambdas**
  * **Large packages** (e.g., with heavy dependencies)


**Cold Start vs. Warm Start**

| **Aspect**         | **Cold Start**                        | **Warm Start**                            |
| ------------------ | ------------------------------------- | ----------------------------------------- |
| **Startup Time**   | **Slower** (100ms to several seconds) | **Faster** (a few milliseconds)           |
| **Initialization** | **New container + runtime setup**     | **Reuses existing Lambda instance**       |
| **Trigger Cause**  | **Inactivity or scaling**             | **Previously initialized container used** |


**How to Reduce Cold Starts**

| **Technique**                        | **Impact**                                  |
| ------------------------------------ | ------------------------------------------- |
| **Provisioned Concurrency**          | Keeps Lambda instances warm at all times    |
| **Keep functions warm (CloudWatch)** | Periodic pings prevent idle shutdown        |
| **Optimize code initialization**     | Avoid heavy logic outside the handler       |
| **Use lightweight runtimes**         | Node.js or Python have faster startup times |
| **Minimize package size**            | Smaller deployment = faster container boot  |

---

###  **Environment-specific configuration?**


I use **environment variables** for configuration and secrets, and inject values via:

* Lambda console/CLI
* Parameter Store or Secrets Manager for sensitive data

For secure config:

* Encrypt secrets using **KMS**
* Access config via IAM-secured API calls

🔑 **Key Points:**

* Use env vars for config
* Use Secrets Manager for sensitive data

---

###  **Optimize performance**



* **Tune memory and timeout** settings for faster execution
* **Minimize dependencies** and package size
* Use **Node.js async handlers** efficiently
* Cache data using **/tmp** storage or external cache (e.g., Redis)
* For repeated calls, use **provisioned concurrency**

🔑 **Key Points:**

* Balance memory vs cost
* Reduce cold start impact
* Avoid over-fetching data or doing heavy computation inline

---

###  **Lambda scale?**

* **Lambda scales automatically and horizontally**
* **No server management or provisioning required**
* Use **Reserved Concurrency** to throttle or protect functions
* Use **Provisioned Concurrency** to avoid **cold starts**
* **Stateless design** is a must—no persistence between invocations
* **Monitor usage via CloudWatch metrics** and set alerts
* Exceeding limits leads to **throttling (HTTP 429)**

| **Aspect**                 | **Details**                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------ |
| **Scaling Type**           | Lambda scales **automatically and horizontally** by creating **parallel instances** per request. |
| **Default Concurrency**    | **1,000 concurrent executions per region** *(can be increased via AWS Support)*                  |
| **Manual Intervention**    | **Not required** – scaling is **fully managed by AWS**                                           |
| **Instance Handling**      | **Each request gets its own container** (function instance)                                      |
| **Cold Start Handling**    | Use **Provisioned Concurrency** to **pre-warm instances**                                        |
| **Reserved Concurrency**   | Used to **allocate concurrency to specific functions** or **throttle** others                    |
| **Concurrency Throttling** | If concurrency limit is hit, **extra requests are throttled** (HTTP 429 error)                   |

**Scaling Behavior by Event Type**

| **Event Type**                          | **Scaling Behavior**                                                |
| --------------------------------------- | ------------------------------------------------------------------- |
| **Synchronous**<br>(API Gateway, ALB)   | **Scales instantly** – one request = one instance                   |
| **Asynchronous**<br>(S3, SNS)           | Events are **queued and retried** automatically                     |
| **Stream-based**<br>(Kinesis, DynamoDB) | Scales with **number of shards**, controlled and predictable growth |

---






### Messaging Patterns – Key Points

| **Pattern**               | **Key Points**                                                                                   | **Pattern**               | **Key Points**                                                                                   |
|---------------------------|--------------------------------------------------------------------------------------------------|---------------------------|--------------------------------------------------------------------------------------------------|
| **Point-to-Point**        | ✅ **One-to-one messaging**<br>✅ **Producer → SQS → Consumer**<br>✅ **Decouples components**       | **Pub/Sub (Fan-out)**     | ✅ **One-to-many messaging**<br>✅ **SNS → SQS/Lambda**<br>✅ **Parallel processing, scalability** |
| **Message Filtering**     | ✅ **SNS + filter policies**<br>✅ **Attribute-based delivery**<br>✅ **Reduces noise per subscriber** | **Queue Chaining**        | ✅ **Break down workflows into steps**<br>✅ **Sequential processing using multiple queues**      |
| **Priority Queues**       | ✅ **Separate SQS queues by priority (High/Med/Low)**<br>✅ **Process high priority first**         | **Dead Letter Queue (DLQ)** | ✅ **Capture failed messages**<br>✅ **Prevent blocking main queue**<br>✅ **Useful for debugging** |
| **Event Sourcing**        | ✅ **Track all state changes as events**<br>✅ **Use SNS + Lambda + DynamoDB Streams**              | **Request-Reply**         | ✅ **Async reply pattern using response queue**<br>✅ **Use Correlation ID for matching**         |
| **Event Replay**          | ✅ **Persist events in S3**<br>✅ **Reprocess anytime**<br>✅ **Enables recovery or analysis**        | **Serverless Pipeline**   | ✅ **SNS → Lambda → SQS → Lambda**<br>✅ **Reliable & scalable flow**<br>✅ **Fully serverless**     |

---

### **Security & Resilience – Essentials**

* 🔑 **Use IAM roles** for least-privilege access
* 🔒 **Encrypt messages** using KMS
* 🧼 **Use DLQs** for retries and failure isolation
* 🔁 **Enable long polling** to reduce cost
* 🧠 **Idempotent consumers** = safe reprocessing
* 📈 **Monitor queues** with CloudWatch metrics
* Mention **decoupling**, **scalability**, and **fault tolerance**.
* Know **SNS → multiple SQS** = **fan-out pattern**.
* FIFO queues = **exactly-once + order**, but **limited throughput**.
* Use **DLQ + CloudWatch alarms** for robust production setup.
* For **high throughput + multi-subscriber**, go:  👉 SNS → SQS → Lambda


## Secure a Lambda Function

**Key Points for Interview**

* **Use IAM roles with least privilege** – don’t over-assign permissions
* **Encrypt environment variables** with **KMS**
* **Store secrets in Secrets Manager**, not in your code
* **Restrict who can invoke** your Lambda (API Gateway, EventBridge, etc.)
* Be careful with **third-party layers** – they can introduce **security risks**


* **Decoupling** improves fault isolation and horizontal scalability
* **DLQs** help isolate poisoned messages without losing the queue
* **KMS** secures your messages at rest
* **Idempotent consumers** prevent duplicate processing issues
* **SNS + SQS** enables **fan-out**, highly scalable and durable
* **FIFO** ensures strict **ordering and exactly-once**, ideal for financial/critical workflows
* Use **CloudWatch** for real-time visibility and automated alerting


| **Security Aspect**       | **Explanation**                                                                 |
| ------------------------- | ------------------------------------------------------------------------------- |
| **IAM Roles & Policies**  | Attach **least-privilege IAM roles** to limit access to only needed services    |
| **VPC Integration**       | Run Lambda inside a **VPC** to securely access **RDS**, **ElastiCache**, etc.   |
| **Function Invocation**   | Use **resource policies** to **control who can invoke** (e.g., API Gateway, S3) |
| **Code Signing**          | Enable **code signing** to **verify code integrity** before deployment          |
| **Environment Variables** | Use **KMS encryption** for sensitive config and secrets                         |
| **Layers & Dependencies** | Only use **trusted layers**, avoid unnecessary third-party packages             |
| **Secrets Manager / SSM Store** | Store secrets securely in **AWS Secrets Manager** or **SSM Parameter Store** |
| **IAM Access Control**          | Use **tight IAM permissions** to allow Lambda access only to needed secrets  |
| **Avoid Hardcoding**            | **Never hardcode secrets** in source code or plain env variables             |


| **Topic**                             | **Best Practices / Concepts**                                                     |
| ------------------------------------- | --------------------------------------------------------------------------------- |
| **IAM Roles**                         | Use **least-privilege IAM roles** for producers and consumers                     |
| **Encryption (at-rest & in-transit)** | Use **AWS KMS** to **encrypt messages** in SQS/SNS                                |
| **Dead Letter Queues (DLQs)**         | Configure **DLQs** for **error isolation and retry analysis**                     |
| **Long Polling**                      | Enable **long polling** to **reduce empty receives and lower cost**               |
| **Idempotency**                       | Design **idempotent consumers** to safely handle **reprocessing**                 |
| **CloudWatch Metrics & Alarms**       | Monitor queue depth, age of oldest message, and error count with **CloudWatch**   |
| **Decoupling**                        | Use SQS/SNS to **decouple services**, improving **resilience and scalability**    |
| **Scalability / Fan-out**             | Use **SNS → multiple SQS** for **fan-out to many consumers**                      |
| **FIFO Queues**                       | Guarantee **exactly-once delivery and message order** (but with lower throughput) |
| **Production Hardening**              | Combine **DLQ + CloudWatch Alarms** to create a **robust, alert-driven setup**    |
| **High Throughput Architecture**      | For **high concurrency & multi-targets**: use 👉 **SNS → SQS → Lambda**           |






### **Amazon Kinesis Data Streams**


**Key Points for Interview**

* **Real-time streaming** solution for ingesting high-throughput data
* **Scales via shards** (horizontal scaling model)
* **Ordering and durability** built-in
* Integrates with **Lambda, Firehose, S3, Redshift, Elasticsearch, etc.**
* Supports **fan-out to multiple consumers** (shared or enhanced)
* Use **KCL** for checkpointing and fault-tolerant consumer apps
* **Managed Kafka alternative**, but lacks self-hosted customizability
* Use **Firehose** if you want auto-delivery to S3/Redshift without building consumers


| **Topic**                 | **Details**                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------ |
| **What is Kinesis?**      | A **real-time streaming service** to collect, process, and analyze data at scale     |
| **Core Component**        | **Kinesis Data Streams** – for ingesting and storing streaming data                  |
| **Use Cases**             | Real-time analytics, log/event processing, clickstream analysis, IoT, ML pipelines   |
| **Data Unit**             | **Records** (each with partition key, sequence number, and data blob)                |
| **Shard**                 | Unit of scaling: **1 shard = 1 MB/sec in, 2 MB/sec out**                             |
| **Retention**             | Default: **24 hours**, extendable up to **365 days**                                 |
| **Consumers**             | - **Shared fan-out** (5 transactions/sec/consumer)                                   |
|                           | - **Enhanced fan-out** (dedicated throughput per consumer)                           |
| **Checkpointing**         | Track processed records using **Kinesis Client Library (KCL)** with **DynamoDB**     |
| **Ordering Guarantee**    | **Ordering is preserved within each shard**                                          |
| **Durability**            | Data replicated across **3 AZs** for fault tolerance                                 |
| **Latency**               | Low latency (\~**200 ms** from ingest to read)                                       |
| **Pricing**               | Based on **shard hours + PUT payload units + enhanced fan-out (if used)**            |
| **Comparison with Kafka** | Fully managed alternative to Kafka; **no cluster management**, but **less flexible** |

---



### **Calling AWS Lambda**

* To call an **AWS Lambda function from a Node.js application**, I use the **AWS SDK — preferably v3** (`@aws-sdk/client-lambda`) for its **modular structure** and **better tree-shaking**.
* It allows **direct invocation** without exposing an **HTTP endpoint**.
* I typically use direct invocation for **internal service-to-service communication** or **background processing**, where **latency is critical** and exposing an HTTP endpoint is unnecessary.

---


**My Approach:**
1. **Initialize the Lambda client** with region and credentials (usually from environment variables, IAM roles, or shared config).
2. **Construct the payload** and use `InvokeCommand` to call the function.
3. **Parse the response** and handle edge cases like timeouts, throttling, or malformed responses.

**Code Example (SDK v3):**

```js
import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";

const client = new LambdaClient({ region: "us-east-1" });

const command = new InvokeCommand({
  FunctionName: "myLambdaFunction",
  Payload: Buffer.from(JSON.stringify({ userId: 123 })),
});

const response = await client.send(command);
const result = JSON.parse(Buffer.from(response.Payload).toString());
```

**Security & Best Practices:**

* I ensure **least-privilege IAM permissions** (`lambda:InvokeFunction`).
* For **cross-account calls**, I configure **resource-based policies** on the target Lambda.
* In production, I wrap calls in **retry logic**, integrate with **CloudWatch**, and ensure **timeouts** are configured properly.




### **Step Functions?**

* **Stateful orchestration**: Tracks long-running shoutout requests across multiple systems (e.g., payment, notifications, storage).
* **Error handling**: Built-in retries, fallback on failure (e.g., retry payment service or alert admin).
* **Visual debugging**: Execution history helped in understanding user journey and debugging live issues.
* **Clean separation of concerns**: Each Lambda did one job — payment, notification, video status, etc.


- “We even used the **Map state** for parallel delivery — when one user requested shoutouts from multiple celebrities, we processed each in parallel and aggregated the final result.”


- “Using **Step Functions** allowed us to build a **modular, fault-tolerant, and traceable shoutout flow** without wiring complex state logic in code. It also helped us meet our SLA targets by monitoring pending and failed states in near real-time.”




### **Asynchronous Lambda Invocation**

- **"Asynchronous invocation in AWS Lambda** is a pattern I use when I don’t need an immediate response from the function — typically for **decoupling**, **background processing**, and **event-driven workflows**. AWS automatically queues the event and retries on failure without blocking the caller."\*\*


- “Async invocation in Lambda gives me **fire-and-forget execution** with **built-in retry logic**, perfect for **loosely coupled workflows**. It plays a key role in making our shoutout app **responsive and resilient**, especially for tasks that don’t need to block the user experience.”

**When I Use Async Invocation**

* **Fire-and-forget** tasks (e.g., sending notifications)
* **Workflow triggers** (e.g., processing shoutout requests after payment)
* **Fan-out** patterns (e.g., calling multiple Lambdas per celebrity)
* Offloading **non-critical, long-running logic** from the main user request

**Best Practices I Follow:**

* **Idempotency**: Since Lambda may retry, I make sure the handler is idempotent (e.g., deduplicating by `bookingId`)
* **DLQ (Dead Letter Queue)**: I attach an SQS or SNS DLQ for capturing failed invocations
* **Monitoring**: I use **CloudWatch Alarms** on invocation errors and throttle limits


**App Example:**

> *When a user submits a request and completes payment, I invoke a Lambda function **asynchronously** to handle downstream tasks like:*
>
> * Notifying the celebrity
> * Recording the request in audit logs
> * Scheduling a 48-hour response window
> * Sending follow-up reminders

All of this happens without slowing down the user-facing API.


**How I Invoke Asynchronously (Node.js SDK v3)**

```js
import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";

const client = new LambdaClient({ region: "us-east-1" });

const command = new InvokeCommand({
  FunctionName: "handleShoutoutRequest",
  InvocationType: "Event", // <-- this makes it async
  Payload: Buffer.from(JSON.stringify({ bookingId: "1234" })),
});

await client.send(command); // Returns immediately
```

* `InvocationType: "Event"` triggers **async mode**
* AWS queues the request and **automatically retries** if the function fails
* No result is returned — just a 202 Accepted response

---

