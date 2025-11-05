

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

**Q:** What is Serverless Architecture?  
**A:** Serverless means you don’t manage servers — AWS handles infrastructure scaling automatically. You focus only on code (functions).  

**Example:** AWS Lambda + API Gateway + DynamoDB + S3.  

**Advantages:**
- Pay only for execution time  
- Scales automatically  
- No server maintenance  

**Use case:** Shoutout project video processing using Lambda triggers when file uploads to S3.

- **Q:** Which AWS services are serverless?  
  **A:** AWS Lambda, DynamoDB, API Gateway, S3, Step Functions, SNS, SQS.

- **Q:** How do serverless apps scale?  
  **A:** Automatically — AWS provisions new containers based on incoming requests.

- **Q:** What are key benefits?  
  **A:** No server management, automatic scaling, pay-per-use, faster deployment.

- **Q:** When would you avoid serverless?  
  **A:** Long-running jobs or heavy CPU workloads — better suited for EC2 or ECS.

**Example:**  
In the *Shoutout project*, we used Lambda to compress videos on S3 upload and send notifications via SNS.


---

## 2️⃣ Microservice Architecture

**Q:** What is Microservice Architecture?  
**A:** It breaks an application into small, independent services — each focusing on a single business capability.

**Example:**
- User service  
- Payment service  
- Notification service  
- Video upload service  

Each runs in its own container (ECS/EKS) or function.

**Benefits:**
- Independent deployment  
- Fault isolation  
- Technology flexibility


- **Q:** How do microservices communicate?  
  **A:** Synchronously via REST/gRPC or asynchronously via SQS/Kafka.

- **Q:** What are common challenges?  
  **A:** Service discovery, data consistency, and inter-service communication.

- **Q:** How do you ensure fault isolation?  
  **A:** Deploy each service in separate containers or Lambda functions; use circuit breakers (Hystrix/Resilience4j).

- **Q:** How did you apply this in your project?  
  **A:** We split Shoutout into services: *User*, *Payment*, *Notification*, and *Video Processing*, each deployed separately.

---

## 3️⃣ Deployment using EC2

**Q:** How do you deploy on EC2?  
**A:**  
1. Create an EC2 instance (Linux/Windows)  
2. Install required runtime (Node.js, Nginx, etc.)  
3. Pull code from GitHub  
4. Configure environment variables  
5. Use PM2 or Docker for running services  
6. Add load balancer + Auto Scaling Group for HA (high availability)  

**Example:** Backend APIs deployed on EC2 with PM2 and Nginx reverse proxy.

**Follow-Up Qs:**

- **Q:** Why PM2?  
  **A:** Handles process management, restarts on crash, and supports zero-downtime reloads.

- **Q:** Why Nginx in front?  
  **A:** Acts as reverse proxy, improves caching, handles SSL termination.

- **Q:** How do you secure EC2 deployment?  
  **A:** Limit SSH access, use IAM roles, Secrets Manager, and HTTPS via ACM.

---

## 4️⃣ AWS CDK

**Q:** What is AWS CDK and why use it?  
**A:** AWS Cloud Development Kit (CDK) lets you define AWS infrastructure using code (TypeScript, Python, etc.) instead of YAML/JSON.  

**Benefits:**
- Code reuse and modularity  
- Easier maintenance  
- Auto-synthesizes to CloudFormation templates  

**Example:**  
In Shoutout, CDK defines Lambda, S3, SQS setup programmatically and deploys in one command:


**Follow-Up Qs:**

- **Q:** How is CDK different from Terraform?  
  **A:** CDK is AWS-native and compiles to CloudFormation; Terraform is cloud-agnostic with its own engine.

- **Q:** What’s inside a CDK Stack?  
  **A:** Constructs like `lambda.Function`, `s3.Bucket`, `sns.Topic`.

- **Q:** Example command to deploy infra?  
  **A:**
  ```bash
  cdk synth
  cdk deploy
  ```

Q: What’s the advantage over manual console setup?
A: Reproducible, version-controlled, consistent across environments.

```bash
cdk deploy
```


---

## 5️⃣ CI/CD

Q: How do you implement CI/CD for AWS-based apps?
A:

CI (Continuous Integration): GitHub Actions or Jenkins builds → run tests → package artifacts

CD (Continuous Deployment): Deploy to EC2/ECS/Lambda via AWS CodeDeploy or CDK pipelines


Example: When code is pushed to main, the pipeline builds Docker image → pushes to ECR → deploys to ECS service.
Q: What tools can you use for CI/CD?
A: AWS CodePipeline, Jenkins, GitHub Actions, GitLab CI.

Q: How do you manage secrets in pipeline?
A: Store in AWS Secrets Manager or GitHub Encrypted Secrets.

Q: What’s your rollback strategy?
A: Use versioned artifacts (ECR image tags or Lambda versions) and revert deployment if failure detected.

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

Q: How can you pass parameters to a Lambda function?
A:

Through event object (API Gateway / SQS trigger)

Through environment variables

Through AWS SDK call:


lambda.invoke({
  FunctionName: 'myLambda',
  Payload: JSON.stringify({ id: 123 })
});

In CDK:

environment: { NODE_ENV: 'production' }

Follow-Up Qs:

Q: Example using SDK?

lambda.invoke({
  FunctionName: 'myLambda',
  Payload: JSON.stringify({ id: 123 })
});

Q: When to use environment variables?
A: For configuration data (DB connection, stage, secrets).

Q: How to secure parameters?
A: Store in AWS Parameter Store or Secrets Manager, then inject at runtime.

---

## 8️⃣ AWS Console vs AWS CLI vs AWS CDK (Terraform)

Q: What’s the difference between AWS Console, CLI, and CDK/Terraform?

Tool	Description	Use Case

AWS Console	UI-based	Quick manual setup/testing
AWS CLI	Command line tool	Scripting, automation
AWS CDK/Terraform	Infrastructure as Code	Version-controlled, repeatable infra


Example:

Console: Create S3 bucket manually

CLI: aws s3 mb s3://mybucket

CDK: new s3.Bucket(this, 'Bucket')

Follow-Up Qs:

Q: Which one would you prefer for production?
A: CDK or Terraform — for version control and automation.

Q: What’s one advantage of CLI over CDK?
A: Quick one-off operations without writing code.


---

## 9️⃣ Dead Letter Queue (DLQ)

Q: What is a Dead Letter Queue in AWS?
A: DLQ stores failed messages that couldn’t be processed successfully after multiple retries.

Example:
SQS triggers Lambda → if Lambda fails 3 times → message goes to DLQ for manual inspection.

Benefits:

Avoid data loss

Identify problematic messages

Debug failed events safely

Follow-Up Qs:

Q: Which AWS services can use DLQ?
A: Lambda, SQS, SNS, EventBridge.

Q: How do you configure DLQ in Lambda?
A: Under "Asynchronous invocation" → specify SQS or SNS target.

Q: What’s the benefit?
A: Prevent message loss, helps debug and reprocess failed events.


Example:
If video transcoding fails thrice, the message is moved to DLQ for manual retry.


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
