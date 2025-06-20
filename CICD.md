- [CI/CD](#cicd)
- [CI/CD Important](#cicd-important)
- [Tools Used for CI/CD](#tools-used-for-cicd)
- [Set Up a CI/CD Pipeline](#set-up-a-cicd-pipeline)
- [Manage Environment Variables in CI/CD](#manage-environment-variables-in-cicd)
- [Test Both Backend and Frontend in a Pipeline](#test-both-backend-and-frontend-in-a-pipeline)
- [Rollback a Deployment](#rollback-a-deployment)
- [Manage CI/CD for Microservices](#manage-cicd-for-microservices)
- [Handle Frontend and Backend Version Mismatch](#handle-frontend-and-backend-version-mismatch)
- [Zero-Downtime Deployment Strategy](#zero-downtime-deployment-strategy)
- [Integrate Linting, Testing, and Code Quality in CI](#integrate-linting-testing-and-code-quality-in-ci)
- [Notify Your Team About Build/Deploy Status](#notify-your-team-about-builddeploy-status)
- [Bonus Questions](#bonus-questions)


### CI/CD

**Answer**:
CI/CD stands for:

* **Continuous Integration**: Automating the merging and testing of code changes.
* **Continuous Delivery**: Automatically delivering changes to a staging or QA environment.
* **Continuous Deployment**: Automatically deploying changes to production.

---

### CI/CD important

**Answer**:

* Ensures backend and frontend changes are tested and deployed consistently.
* Reduces manual errors.
* Enables rapid feature delivery.
* Provides confidence through automation.

---

### Tools used for CI/CD

**Answer**:
Examples:

* **CI Tools**: Jenkins, GitHub Actions, GitLab CI, CircleCI
* **Build Tools**: Webpack, Babel, npm/yarn, Maven/Gradle
* **Test**: Jest, Mocha, Cypress, JUnit, Postman CLI
* **Deployment**: Docker, Kubernetes, Firebase, Vercel, AWS CodeDeploy

---


### set up a CI/CD pipeline

**Answer**:

Steps:

1. **Trigger**: Push or PR triggers build
2. **Install dependencies**:

   * `npm install` or `mvn install`
3. **Run tests**:

   * Frontend: `jest`, `cypress`
   * Backend: `mocha`, `supertest`
4. **Build app**:

   * Frontend: `npm run build`
   * Backend: transpile/compile if needed
5. **Dockerize (if needed)**: `Dockerfile`, `docker-compose`
6. **Deploy**:

   * To cloud (AWS, Azure, GCP) or platforms like Netlify, Heroku

---

### manage environment variables in CI/CD

**Answer**:

* Store secrets in:

  * Jenkins → Credentials Manager
  * GitHub Actions → Encrypted Secrets
  * Docker → `--env` or `.env` files (excluded via `.gitignore`)
* Use `dotenv` in Node.js and `.env.production` for React builds

---

### test both backend and frontend in a pipeline

**Answer**:

```yaml
# Example GitHub Actions
jobs:
  test:
    steps:
      - run: cd frontend && npm ci && npm run test
      - run: cd backend && npm ci && npm test
```

---

### rollback a deployment

**Answer**:

* Keep previous release artifacts (versioning)
* Use CI/CD tools that support rollback (e.g., GitHub Actions + deployment scripts)
* For Docker/Kubernetes:

  ```bash
  kubectl rollout undo deployment my-app
  ```

---


### manage CI/CD for microservices

**Answer**:

* Each microservice has its own pipeline.
* Use monorepo tools (e.g., Nx, Lerna) or split repos.
* Trigger builds selectively:

  * Use `paths` or change detection to build only affected services.

---

### handle frontend and backend version mismatch

**Answer**:

* Deploy frontend and backend together via a single pipeline (if tightly coupled)
* Use versioning/tagging
* Ensure backend supports multiple API versions if needed

---

### zero-downtime deployment strategy

**Answer**:

* **Blue-Green Deployment**: Deploy to a standby (green) environment, switch traffic once validated.
* **Rolling Deployment**: Gradually replace old pods/instances.
* Use Kubernetes or load balancers to handle routing.

---

### integrate linting, testing, and code quality in CI

**Answer**:
In pipeline:

```bash
npm run lint
npm run test
npx sonar-scanner
```

Fail pipeline if any of these fail.

---

### notify your team about build/deploy status

**Answer**:

* Jenkins: Slack plugin, email notifications
* GitHub Actions: Slack Webhooks
* Also use badges in `README.md` to show build status

---

### BONUS QUESTIONS

| Question                            | Suggested Answer                                                      |
| ----------------------------------- | --------------------------------------------------------------------- |
| How do you handle secrets in CI?    | Use encrypted secrets or secret managers (Vault, AWS Secrets Manager) |
| What is `artifact` in CI/CD?        | Build output (e.g., `.jar`, `.zip`, `dist/`) that can be deployed     |
| How do you version your builds?     | Use Git tags, semantic versioning, or CI build numbers                |
| How do you debug a failed pipeline? | Check logs, run commands locally, isolate failing step                |

---

## ✅ Sample CI/CD Pipeline: React + Node.js (Jenkins)

```groovy
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps { git 'https://github.com/user/repo.git' }
        }
        stage('Frontend Build') {
            steps {
                dir('frontend') {
                    sh 'npm install && npm run build'
                }
            }
        }
        stage('Backend Build & Test') {
            steps {
                dir('backend') {
                    sh 'npm install'
                    sh 'npm test'
                }
            }
        }
        stage('Deploy') {
            steps {
                sh './deploy.sh'
            }
        }
    }
}
```

---

