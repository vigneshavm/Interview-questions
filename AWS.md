


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

### 🟦 **Topic: Triggers That Can Invoke AWS Lambda**

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



### 🟦 **Topic: Typical Architecture of Using AWS Lambda for APIs**

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



###  Handle Large File Uploads in AWS 

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


###  How does Lambda scale?

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


### 🟦 **Topic: What is Provisioned Concurrency in AWS Lambda?**

**Provisioned Concurrency** is an AWS Lambda feature that **pre-warms** a specified number of Lambda instances so they are **ready to respond immediately**—eliminating cold starts.

---

### 🚀 **Why Use Provisioned Concurrency?**

Cold starts can cause latency in:

* User-facing APIs (e.g., mobile or web)
* Real-time processing apps
* Low-latency or predictable workloads

Provisioned concurrency **ensures consistent performance** for such use cases.

---

### ⚙️ **How It Works**

* You specify the **number of warm Lambda instances** to keep ready.
* AWS **initializes those instances ahead of time** (including runtime, init code).
* When requests come in, they're routed to these **already-initialized** instances.

> ✅ Great for predictable traffic
> ❌ More expensive than regular Lambda (you pay for the "warm" time)

---

### 📌 **Key Properties**

| Property              | Value                                                                       |
| --------------------- | --------------------------------------------------------------------------- |
| Startup latency       | Near zero (no cold start)                                                   |
| Use case              | Predictable traffic, real-time apps                                         |
| Billing               | You pay **per second** for provisioned time + invocations                   |
| Configuration options | Set via Console, CLI, or Infrastructure as Code (e.g., CloudFormation, CDK) |

---

### 🧪 **Example – Enabling via AWS CLI**

```bash
aws lambda put-provisioned-concurrency-config \
  --function-name my-function \
  --qualifier production \
  --provisioned-concurrent-executions 10
```

> This reserves **10 warm instances** on the `production` version of your function.

---

### 📊 **Billing Comparison**

| Type                    | Billed For                           |
| ----------------------- | ------------------------------------ |
| On-demand Lambda        | Execution time only                  |
| Provisioned Concurrency | Pre-warmed time **+** execution time |

---

### ✅ **When to Use It**

* Cold start latency is not acceptable
* You have **predictable traffic patterns**
* You're calling Lambda from **API Gateway, ALB, Step Functions**, etc.

---



###  How do you handle errors in Lambda?

* Use **try/catch** in your code
* Configure **DLQs (Dead Letter Queues)** for asynchronous invocations
* Enable **Lambda Destinations** (on-success / on-failure)
* Use **CloudWatch Logs** for debugging

---

###  How do you monitor Lambda functions?

**Answer:**
Use:

* **CloudWatch Logs**: View logs using `console.log` or equivalents
* **CloudWatch Metrics**: Invocations, errors, duration, throttles
* **AWS X-Ray**: Distributed tracing

---


###  How do you assign permissions to Lambda?

**Answer:**
You assign an **IAM execution role** to the Lambda function. This role defines what AWS services (e.g., S3, DynamoDB) the function can access.

---

###  How can you securely store secrets in Lambda?

**Answer:**

* Use **AWS Secrets Manager** or **SSM Parameter Store**
* Use **IAM policies** to restrict access to secrets
* Never hard-code secrets in the code or environment variables

---


###  What are Lambda Layers?

**Answer:**
Lambda Layers allow you to **package and share code libraries or dependencies** (e.g., Node.js modules, Python packages) across multiple Lambda functions.

---

###  What is the maximum deployment package size?

* **Direct upload (console or API):** 50 MB (zipped)
* **With S3 upload:** 250 MB (zipped)
* **Unzipped code in execution:** 250 MB
* **Layers:** Max 5 layers, 50 MB each

---


###  Describe how you would build a serverless video upload and processing system using Lambda.

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






## ✅ **Basic Interview Questions**

###  What is AWS API Gateway?

**Answer:**
AWS API Gateway is a fully managed service that makes it easy to **create, publish, maintain, monitor, and secure REST, HTTP, and WebSocket APIs** at any scale. It acts as a **gateway between clients and backend services** (e.g., AWS Lambda, EC2, etc.).

---

###  What types of APIs are supported by API Gateway?

**Answer:**

* **REST APIs** – Full-featured APIs with caching, throttling, etc.
* **HTTP APIs** – Lightweight, low-latency APIs for Lambda, ALB, etc.
* **WebSocket APIs** – For real-time communication (chat, gaming, etc.)

---

###  What is the difference between REST API and HTTP API?

| Feature     | REST API                          | HTTP API                     |
| ----------- | --------------------------------- | ---------------------------- |
| Features    | Full (auth, usage plans, etc.)    | Lightweight, cheaper         |
| Cost        | Higher                            | Lower                        |
| Performance | Slightly slower                   | Faster                       |
| Use case    | Legacy systems, advanced features | Modern APIs with fewer needs |

---


###  What are the integration types supported by API Gateway?

**Answer:**

1. **AWS Lambda** – Most common for serverless
2. **HTTP/HTTPS Endpoints** – Proxy to external APIs
3. **Mock Integration** – For testing responses
4. **AWS Service Proxy** – Directly call AWS services (e.g., DynamoDB, SNS)

---

###  How does API Gateway integrate with AWS Lambda?

**Answer:**

* API Gateway acts as a **trigger** for the Lambda function.
* You define **methods** (GET, POST, etc.) and **routes**, and map them to the Lambda.
* Data is passed to Lambda in the **event object**.

---

###  What is a stage in API Gateway?

**Answer:**
A **stage** is a named reference to a deployment of your API (e.g., `dev`, `staging`, `prod`). It allows versioning and separates environments.

---

###  What are usage plans in API Gateway?

**Answer:**
Usage plans allow you to:

* **Throttle** API requests (rate + burst)
* **Quota** requests per day/month
* **Associate API keys** with consumers

---

###  What is throttling in API Gateway?

**Answer:**
Throttling controls how many requests can be handled:

* **Rate**: requests per second
* **Burst**: max requests in a short burst

Prevents abuse and ensures backend stability.

---


###  How can you secure your API in API Gateway?

**Answer:**

* **API Keys + Usage Plans**
* **IAM-based access** (SigV4 signing)
* **Cognito User Pools** (JWT-based auth)
* **Lambda Authorizers (Custom Authorizers)**
* **Resource Policies** (restrict access by IP or VPC)

---

###  What is a Lambda Authorizer?

**Answer:**
A Lambda Authorizer (previously known as a custom authorizer) is a Lambda function that controls access to your API by **validating headers, tokens, or other context** before the main handler runs.

---

###  Can API Gateway serve static content?

**Answer:**
No, API Gateway doesn’t serve static files. You should serve static assets like HTML, CSS, JS, or videos from **Amazon S3 with CloudFront**. API Gateway is best for dynamic APIs.

---

###  What is the payload limit for API Gateway?

**Answer:**

* **Request payload size limit:** 10 MB for REST/HTTP APIs
* For larger file uploads, use **presigned S3 URLs** instead of going through API Gateway.

---


###  How would you build a secure video upload system?

**Answer:**

1. API Gateway + Lambda generates a **presigned S3 URL**.
2. Client uses that URL to upload the video **directly to S3**.
3. S3 triggers a **Lambda** for processing/validation.
4. API Gateway serves status or metadata via REST endpoints.

---

###  How do you handle CORS in API Gateway?

**Answer:**

* Enable **CORS headers** (`Access-Control-Allow-Origin`, etc.) in method response.
* For Lambda integration, ensure the Lambda returns these headers as part of its response.
* For preflight requests, explicitly handle `OPTIONS` method.

---

###  How does API Gateway handle caching?

**Answer:**

* You can enable **response caching** at the method level (for REST APIs).
* Cached data is stored in **edge locations**, reducing backend load.
* TTL (time-to-live) can be configured per method.

---

