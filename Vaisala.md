

- [Serverless Architecture](#1️⃣-serverless-architecture)
- [Microservice Architecture](#2️⃣-microservice-architecture)
- [Deployment using EC2](#3️⃣-deployment-using-ec2)
- [AWS CDK](#4️⃣-aws-cdk)
- [CI/CD](#5️⃣-cicd)
- [Increasing Lambda Memory](#6️⃣-increasing-lambda-memory)
- [Passing Parameters in Lambda](#7️⃣-passing-parameters-in-lambda)
- [AWS Console vs AWS CLI vs AWS CDK (Terraform)](#8️⃣-aws-console-vs-aws-cli-vs-aws-cdk-terraform)
- [Dead Letter Queue ](#9️⃣-dead-letter-queue-dlq)
- [SQS – Duplicate Processing & Retry Handling](#-sqs--duplicate-processing--retry-handling)
- [Cold Start in AWS Lambda](#1️⃣1️⃣-cold-start-in-aws-lambda)


## 1️⃣ Serverless Architecture

**Q: What is Serverless Architecture?**  
Serverless means you don’t manage or provision servers manually. AWS handles the infrastructure, scaling, and availability behind the scenes. As a developer, you focus purely on writing business logic — typically in the form of functions.

**Example:**  
A typical serverless stack might include **AWS Lambda**, **API Gateway**, **DynamoDB**, and **S3**. For instance, in our Shoutout project, we used Lambda to process videos when files were uploaded to S3.


**Q: Which AWS services are serverless?**  
Some key serverless services include:

- **AWS Lambda** - **Amazon S3** - **DynamoDB** - **API Gateway** - **Step Functions** - **SNS** - **SQS**

These services scale automatically and follow a pay-per-use model.


**Q: How do serverless applications scale?**  
They scale **automatically**. AWS provisions new containers or instances based on incoming traffic or events. For example, if 1000 users hit an API, Lambda can spin up 1000 concurrent executions without manual intervention.


**Q: What are the key benefits of serverless?**  
- **No server management**  - **Automatic scaling** - **Pay only for execution time**   - **Faster development and deployment** - **Built-in fault tolerance**


**Q: When would you avoid serverless?**  
Serverless isn’t ideal for:

- **Long-running jobs** - **Heavy CPU or memory workloads** - **Low-latency requirements** - **Complex networking needs**

In such cases, **EC2**, **ECS**, or **EKS** might be more suitable.

**Example:**  
In our Shoutout project, we used Lambda to compress videos on S3 upload and send notifications via SNS. But for longer transcoding jobs, we considered moving to ECS for better control.




---

## 2️⃣ Microservice Architecture



**Q: What is Microservice Architecture?**  
Microservice architecture breaks down an application into **small, independent services**, each responsible for a specific business capability. These services can be developed, deployed, and scaled independently.

**Example:**  
In our Shoutout project, we had separate services for:

- **User Management**   - **Payment Processing**   - **Notifications**  - **Video Upload & Processing**

Each service was deployed independently using containers (ECS/EKS) or serverless functions (Lambda).



**Q: How do microservices communicate?**  
Microservices communicate either:

- **Synchronously** using REST APIs or gRPC  
- **Asynchronously** using messaging systems like **SQS**, **SNS**, or **Kafka**

The choice depends on latency requirements and coupling between services.



**Q: What are common challenges with microservices?**  
Some of the key challenges include:

- **Service discovery**    - **Data consistency across services** - **Inter-service communication**   - **Monitoring and debugging distributed systems**


**Q: How do you ensure fault isolation?**  
We deploy each service in **separate containers or Lambda functions**, so a failure in one doesn’t affect others.  
We also use **circuit breakers** (like Hystrix or Resilience4j) to prevent cascading failures and ensure graceful degradation.



**Q: How did you apply this in your project?**  
In the Shoutout project, we adopted a microservices approach:

- **User Service** handled authentication and profiles  
- **Payment Service** managed subscriptions  
- **Notification Service** sent alerts via email/SNS  
- **Video Service** processed uploads and triggered Lambda functions

This allowed us to scale each component independently and deploy updates without affecting the entire system.

---


---

## 3️⃣ Deployment using EC2


**Q: How do you deploy an application on EC2?**  
To deploy on EC2, I follow these steps:

1. **Launch an EC2 instance** (Linux or Windows based on the app)
2. **Install required runtime** — for example, Node.js, Python, Nginx, etc.
3. **Pull the application code** from GitHub or a CI/CD pipeline
4. **Configure environment variables** either manually or via `.env` files
5. **Run the application** using **PM2** (for Node.js) or **Docker** for containerized apps
6. **Set up Nginx** as a reverse proxy to route traffic and handle SSL
7. **Attach a Load Balancer and Auto Scaling Group** for high availability and scalability

**Example:**  
In one of our projects, we deployed backend APIs on EC2 using **PM2** for process management and **Nginx** for reverse proxy and SSL termination.



**Q: Why do you use PM2?**  
PM2 is great for:

- Managing Node.js processes  - Auto-restarting on crashes  - Zero-downtime reloads    - Monitoring and logging



**Q: Why is Nginx used in front of the app?**  
Nginx acts as a **reverse proxy**, which:

- Routes incoming traffic to the app
- Handles **SSL termination**
- Improves performance via **caching**
- Adds a layer of security and flexibility



**Q: How do you secure EC2 deployments?**  
Security is critical. I ensure:

- **SSH access is restricted** using key pairs and security groups
- **IAM roles** are attached to EC2 for secure access to AWS resources
- **Secrets** are stored in **AWS Secrets Manager** or **Parameter Store**
- **HTTPS** is enforced using **ACM certificates** via Load Balancer or Nginx

---



## 4️⃣ AWS CDK



**Q: What is AWS CDK and why would you use it?**  
AWS CDK (Cloud Development Kit) is an open-source framework that lets you define AWS infrastructure using familiar programming languages like **TypeScript**, **Python**, or **Java** — instead of writing raw YAML or JSON CloudFormation templates.

**Benefits include:**

- **Code reuse and modularity**
- **Easier maintenance and readability**
- **Strong typing and IDE support**
- **Auto-generates CloudFormation templates**

**Example:**  
In our Shoutout project, we used CDK to define and deploy resources like **Lambda functions**, **S3 buckets**, and **SQS queues** — all programmatically and consistently across environments.



**Q: How is CDK different from Terraform?**  
- **CDK** is **AWS-native** and compiles down to CloudFormation templates.  
- **Terraform** is **cloud-agnostic** and uses its own engine and state management.

Both support Infrastructure as Code, but CDK integrates more tightly with AWS services and developer tooling.



**Q: What’s inside a CDK Stack?**  
A CDK Stack contains **constructs** — reusable components that represent AWS resources.  
Examples include:

- `lambda.Function`
- `s3.Bucket`
- `sns.Topic`
- `sqs.Queue`

These constructs are organized into stacks and apps for deployment.



**Q: How do you deploy infrastructure using CDK?**  
Typical commands:

```bash
cdk synth     # Generates CloudFormation template
cdk deploy    # Deploys the stack to AWS
```

This makes deployments reproducible and version-controlled.



**Q: What’s the advantage over manual console setup?**  
- **Consistency across environments**
- **Version control via Git**
- **Faster onboarding for teams**
- **Easier rollback and change tracking**

Manual setup is error-prone and hard to maintain, especially in large-scale environments.



---

## 5️⃣ CI/CD


**Q: How do you implement CI/CD for AWS-based apps?**  
I typically set up CI/CD pipelines using tools like **GitHub Actions**, **Jenkins**, or **AWS CodePipeline**.

- **CI (Continuous Integration):**  
  When code is pushed to the repository (e.g., `main` branch), the pipeline triggers:
  - **Builds the code**
  - **Runs unit/integration tests**
  - **Packages artifacts** (e.g., ZIP for Lambda or Docker image for ECS)

- **CD (Continuous Deployment):**  
  The pipeline then:
  - **Pushes Docker images to ECR**
  - **Deploys to ECS, EC2, or Lambda** using **AWS CodeDeploy** or **CDK Pipelines**

**Example:**  
In our Shoutout project, when code is pushed to `main`, GitHub Actions builds a Docker image → pushes it to **ECR** → deploys it to an **ECS Fargate service**.



**Q: What tools can you use for CI/CD?**  
Some commonly used tools include:

- **AWS CodePipeline**
- **GitHub Actions**
- **Jenkins**
- **GitLab CI**
- **Bitbucket Pipelines**

Each integrates well with AWS services and supports custom workflows.



**Q: How do you manage secrets in the pipeline?**  
Secrets are stored securely using:

- **AWS Secrets Manager** or **SSM Parameter Store** for runtime access
- **GitHub Encrypted Secrets** for CI/CD workflows

IAM roles and scoped permissions ensure secure access during deployment.



**Q: What’s your rollback strategy?**  
We use **versioned artifacts**:

- For ECS: Docker image tags (e.g., `v1.2.3`)
- For Lambda: Published versions and aliases

If a deployment fails or metrics drop, we can **revert to a previous version** quickly using automation or manual triggers.

---

## 6️⃣ Increasing Lambda Memory

Q: How do you increase Lambda memory?
A:

From Console:
Go to Lambda → Configuration → General Configuration → Edit → Increase Memory (128 MB to 10 GB)

From CDK:

new lambda.Function(this, 'MyFn', {
  memorySize: 2048
});

> Increasing memory also increases CPU proportionally.

Follow-Up Qs:

Q: How can you do it via CDK?

new lambda.Function(this, 'Fn', { memorySize: 2048 });

Q: Does increasing memory increase cost?
A: Yes, cost increases linearly with memory and execution time.

Q: What’s the impact on cold start?
A: Slightly longer cold start but higher runtime performance.



---

## 7️⃣ Passing Parameters in Lambda



**Q: How can you pass parameters to an AWS Lambda function?**  
There are three main ways to pass parameters to a Lambda function:

1. **Through the event object**  
   - This is common when Lambda is triggered by services like **API Gateway**, **SQS**, or **SNS**.  
   - The event payload contains the parameters.

2. **Through environment variables**  
   - These are set at deployment time and are useful for configuration values like DB connection strings, stage names, or feature flags.

3. **Through direct invocation using AWS SDK**  
   - You can pass parameters using the `Payload` field in the `lambda.invoke()` method.



**Q: Can you give an example using the AWS SDK?**  
Yes. Here's a Node.js example:

```js
lambda.invoke({
  FunctionName: 'myLambda',
  Payload: JSON.stringify({ id: 123 })
});
```

This sends `{ id: 123 }` as the event payload to the Lambda function.



**Q: When would you use environment variables?**  
Environment variables are ideal for **configuration data** that doesn’t change per invocation—like database credentials, environment stage (`dev`, `prod`), or third-party API keys.

In AWS CDK, you can define them like this:

```ts
environment: {
  NODE_ENV: 'production'
}
```


**Q: How do you secure sensitive parameters?**  
Instead of hardcoding secrets, you should store them in **AWS Systems Manager Parameter Store** or **AWS Secrets Manager**.  
At runtime, the Lambda function can fetch these securely using IAM permissions.



---

## 8️⃣ AWS Console vs AWS CLI vs AWS CDK (Terraform)

#### **What’s the difference between AWS Console, CLI, and CDK/Terraform?**  
The main difference lies in how you interact with AWS and manage infrastructure:

- **AWS Console** is a **UI-based** interface. It’s great for quick manual setups, testing, or exploring services.
- **AWS CLI** is a **command-line tool** used for scripting and automation. It’s ideal for one-off tasks or integrating into shell scripts.
- **AWS CDK/Terraform** are **Infrastructure as Code (IaC)** tools. They allow you to define infrastructure in code, making it version-controlled, repeatable, and suitable for production environments.


#### **Can you give an example of each?**  
Sure:

- **Console:** Manually create an S3 bucket via the web interface  
- **CLI:** `aws s3 mb s3://mybucket` — creates a bucket via command line  
- **CDK:** `new s3.Bucket(this, 'Bucket')` — defines a bucket in code using AWS CDK

#### **Which one would you prefer for production?**  
For production, I’d prefer **CDK or Terraform**. They support version control, automation, and team collaboration. They also reduce human error and make deployments consistent across environments.


#### **What’s one advantage of CLI over CDK?**  
CLI is faster for **quick one-off operations**. For example, if I need to list EC2 instances or create a bucket urgently, I can do it instantly without writing code.


---

## 9️⃣ Dead Letter Queue (DLQ)




#### **What is a Dead Letter Queue in AWS?**  
A Dead Letter Queue, or DLQ, is a mechanism used to capture messages that fail to be processed successfully after a defined number of retries. It helps prevent data loss and allows for safe debugging and reprocessing.

**Example:**  
Let’s say an SQS queue triggers a Lambda function. If the Lambda fails to process a message after 3 attempts, that message is automatically moved to the DLQ. This allows engineers to inspect and handle it manually.

#### **Which AWS services support DLQ?**  
DLQs are supported in several AWS services, including:

- **Lambda** (for asynchronous invocations)
- **SQS**
- **SNS**
- **EventBridge**

Each of these can be configured to route failed messages to an SQS queue or SNS topic depending on the use case.


#### **How do you configure DLQ in Lambda?**  
In the Lambda console, under **Asynchronous Invocation settings**, you can specify a DLQ target—either an SQS queue or an SNS topic. You also define the maximum retry attempts. Once that threshold is reached, the message is sent to the DLQ.


#### **What are the benefits of using DLQ?**  
- **Avoids silent data loss**
- **Helps identify and isolate problematic messages**
- **Enables safe debugging and manual reprocessing**
- **Improves system reliability and observability**

**Example:**  
In a video processing pipeline, if a transcoding job fails repeatedly, the message is sent to the DLQ. This allows the team to inspect the payload, understand the failure, and retry manually if needed.


---

## 🔟 SQS – Duplicate Processing & Retry Handling

Q: How to handle duplicate messages and retries in SQS?
A:

Use Message Deduplication ID (for FIFO queues)

Enable Visibility Timeout to prevent reprocessing

Design Idempotent Lambdas (safe to re-run)

Configure Retry + DLQ


Example:
Lambda processes payment messages → uses transaction ID to check if already processed.

Follow-Up Qs:

Q: What’s an Idempotent Lambda?
A: A function that produces the same result even if executed multiple times (checks existing transaction before insert).

Q: How to handle retries?
A: Configure Redrive Policy (maxReceiveCount + DLQ).

Q: What’s Visibility Timeout?
A: Time during which a message is invisible to other consumers after being picked up.

---

## 1️⃣1️⃣ Cold Start in AWS Lambda

Q: What is a Cold Start in Lambda?
A: A cold start happens when AWS initializes a new container to run your function (first call or scale-up).

Causes:

First invocation

Scale-out events


Optimization:

Keep functions warm using CloudWatch scheduled events

Use smaller dependencies

Enable Provisioned Concurrency for critical functions


Follow-Up Qs:

Q: When do cold starts occur?
A: On first invocation or scale-out events.

Q: How can you reduce cold start time?
A:

Use Provisioned Concurrency

Reduce dependency size

Use lightweight runtimes (Node.js, Go)

Keep warm using CloudWatch scheduled events


Q: What’s warm start?
A: When Lambda reuses an existing container; no initialization delay.


Example:
In Shoutout, we used a scheduled Lambda every 10 min to keep critical APIs warm.

---

⚡ Example Discussion (Shoutout Project)

Interviewer: How did you handle scaling in your video delivery service?
You: We used a mix of serverless and microservice patterns — Lambda for video processing, S3 for storage, and SQS for decoupled messaging.
AWS CDK defined all infra, and CI/CD via GitHub Actions automated deployments to ECS and Lambda.

---

⚡ Example Discussion (Shoutout Project)

Interviewer: How did you handle scaling in your video delivery service?
You: We followed a hybrid model — serverless for video processing (Lambda, S3, SNS) and microservices (ECS) for user and payment APIs. CDK managed the infra, and CI/CD handled automated deployment through GitHub Actions.

Interviewer: How did you ensure reliability and fault tolerance?
You: SQS + DLQ for message durability, retries, and async processing. Each Lambda was idempotent, and failed jobs were logged to CloudWatch and retried manually.

Interviewer: How did you monitor Lambda performance?
You: Used AWS CloudWatch for metrics (Duration, Invocations, Errors) and X-Ray for tracing to identify cold start delays.


---
