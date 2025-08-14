**CI/CD**

| **Category**                            | **Topics**                                                                                                                                                                                                                                  |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Fundamentals**                     | - [CI/CD](#cicd) - [CI/CD Important](#cicd-important) - [Tools Used for CI/CD](#tools-used-for-cicd)                                                                                                                                  |
| **Pipeline Setup & Configuration**   | - [Set Up a CI/CD Pipeline](#set-up-a-cicd-pipeline) - [Manage Environment Variables in CI/CD](#manage-environment-variables-in-cicd) - [Test Both Backend and Frontend in a Pipeline](#test-both-backend-and-frontend-in-a-pipeline) |
| **Advanced Deployment Practices**    | -[Rollback Strategies](#Rollback-Strategies)        |
| **Microservices & Team Integration** | - [Manage CI/CD for Microservices](#manage-cicd-for-microservices) - [Notify Your Team About Build/Deploy Status](#notify-your-team-about-builddeploy-status)                                                                            |
| **Quality & Automation**             | - [Integrate Linting, Testing, and Code Quality in CI](#integrate-linting-testing-and-code-quality-in-ci)                                                                                                                                   |
| **Extras**                           | - [Bonus Questions](#bonus-questions)                                                                                                                                                                                                       |

**GIT**

| **Category**             | **Topics** |
|--------------------------|------------|
| **Basics**               | [Git Basics](#git-basics), [Git vs GitHub](#Git-vs-GitHub), [git fetch vs git pull](#git-fetch-vs-git-pull) - [Git Commands](#Git-Commands) |
| **Undoing Commits**      | [Undoing Commits](#undoing-commits), [Revert a Commit](#revert-a-commit), [Revert the Last 10 Commits](#revert-the-last-10-commits), [View Last 10 Commits](#view-last-10-commits) |
| **Branching & Merging**  | [.gitignore](#gitignore), [Git Branches](#git-branches), [Merge vs Rebase](#merge-vs-rebase), [Pull Requests](#pull-requests), [git stash](#git-stash) |
| **Strategies**           | [GitFlow vs GitHub Flow](#gitflow-vs-github-flow), [Branching Strategies](#branching-strategies), [Release Branch Strategy](#release-branch-strategy) |
| **Conflict & CI/CD**     | [Resolving Merge Conflicts](#resolving-merge-conflicts), [Git + Jenkins Integration](#git--jenkins-integration) |
| **Release Management**   | [Tagging Releases](#tagging-releases), [Bonus Git Interview Questions](#bonus-git-interview-questions) |

---


### CI/CD

CI/CD stands for:

* **Continuous Integration**: Automating the merging and testing of code changes.
* **Continuous Delivery**: Automatically delivering changes to a staging or QA environment.
* **Continuous Deployment**: Automatically deploying changes to production.
**CI/CD (Continuous Integration/Continuous Deployment)** is a DevOps practice that enables teams to integrate, test, and deploy code frequently and reliably using automation.
---

### CI/CD important


* Ensures backend and frontend changes are tested and deployed consistently.
* Reduces manual errors.
* Enables rapid feature delivery.
* Provides confidence through automation.
* Reduces human errors through automation.
* Enables faster feedback via tests.
* Speeds up delivery of features and bug fixes.
* Ensures consistent and repeatable deployments.

---

### Tools used for CI/CD


Examples:

* **CI Tools**: Jenkins, GitHub Actions, GitLab CI, CircleCI
* **Build Tools**: Webpack, Babel, npm/yarn, Maven/Gradle
* **Test**: Jest, Mocha, Cypress, JUnit, Postman CLI
* **Deployment**: Docker, Kubernetes, Firebase, Vercel, AWS CodeDeploy

| Category      | Tools                                                   |
| ------------- | ------------------------------------------------------- |
| CI/CD Server  | Jenkins, GitHub Actions, GitLab CI, CircleCI, Travis CI |
| Build Tools   | Webpack, Babel, Maven, Gradle                           |
| Test Tools    | Jest, Mocha, Cypress, JUnit                             |
| Deployment    | Docker, Kubernetes, Firebase, AWS CodeDeploy, Vercel    |
| Notifications | Slack, Email, Microsoft Teams                           |
| Monitoring    | Prometheus, Grafana, ELK                                |

---


### set up a CI/CD pipeline



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
  
Typical steps:

1. **Trigger**: On code push or PR.
2. **Checkout code**: From Git repo.
3. **Install dependencies**: `npm install`, `mvn install`, etc.
4. **Run Tests**: Backend and frontend unit/integration tests.
5. **Linting and Code Quality**: Enforce code standards.
6. **Build**: `npm run build`, compile backend code.
7. **Package & Artifact**: Store build output.
8. **Deploy**: Push to server, container registry, or cloud.
9. **Health Check**: Validate post-deployment.

---

### manage environment variables in CI/CD



* Store secrets in:

  * Jenkins → Credentials Manager
  * GitHub Actions → Encrypted Secrets
  * Docker → `--env` or `.env` files (excluded via `.gitignore`)
* Use `dotenv` in Node.js and `.env.production` for React builds

---

### test both backend and frontend in a pipeline



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



* Keep previous release artifacts (versioning)
* Use CI/CD tools that support rollback (e.g., GitHub Actions + deployment scripts)
* For Docker/Kubernetes:

  ```bash
  kubectl rollout undo deployment my-app
  ```

---


### manage CI/CD for microservices



* Each microservice has its own pipeline.
* Use monorepo tools (e.g., Nx, Lerna) or split repos.
* Trigger builds selectively:

  * Use `paths` or change detection to build only affected services.

---

### handle frontend and backend version mismatch



* Deploy frontend and backend together via a single pipeline (if tightly coupled)
* Use versioning/tagging
* Ensure backend supports multiple API versions if needed

---

### zero-downtime deployment strategy



* **Blue-Green Deployment**: Deploy to a standby (green) environment, switch traffic once validated.
* **Rolling Deployment**: Gradually replace old pods/instances.
* Use Kubernetes or load balancers to handle routing.

---

### integrate linting, testing, and code quality in CI


In pipeline:

```bash
npm run lint
npm run test
npx sonar-scanner
```

Fail pipeline if any of these fail.

---

### notify your team about build/deploy status



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





### **Rollback Strategies**

- [Zero-Downtime Deployment Strategy](#zero-downtime-deployment-strategy) 
- [Rollback a Deployment](#rollback-a-deployment)
- [Handle Frontend and Backend Version Mismatch](#handle-frontend-and-backend-version-mismatch)    

| **#** | **Strategy**                 | **Description**                                                            | **Tools Used**               | **Rollback Steps**                                                              |
| ----- | ---------------------------- | -------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------- |
| 1️⃣   | **Manual Backup Rollback**   | Backup current build before deploying new one (timestamped folders)        | Shell scripts, PM2, Nginx    | Switch to backup folder → Restart PM2 → Reload Nginx                            |
| 2️⃣   | **PM2 Process Rollback**     | Run new version in parallel (different PM2 process) and switch on success  | PM2, Nginx                   | Stop faulty process → Restart previous stable PM2 process                       |
| 3️⃣   | **Blue-Green Deployment**    | Maintain two versions (`blue` and `green`); switch traffic post-validation | Nginx, PM2, Folder structure | Update Nginx config to point to previous color → Reload Nginx → PM2 restart     |
| 4️⃣   | **Git-Based Rollback**       | Tag stable releases; revert to older version via `git checkout`            | Git, PM2, Nginx              | Checkout tag → Rebuild → Restart with PM2 → Reload Nginx                        |
| 5️⃣   | **Frontend Cache Rollback**  | Ensure browser doesn't serve old/corrupted files after rollback            | Nginx, Build script          | Switch Nginx root → Clear browser cache or use versioned build folders          |
| 6️⃣   | **Automated CI/CD Rollback** | Some CI/CD tools allow automated rollback on test or health check failure  | GitHub Actions (optional)    | Use pre-configured rollback step in pipeline (requires scripting/health checks) |





## Git vs GitHub 

- **Git** - Tracks code changes, supports branching, merging 
- **GitHub** - Hosts remote Git repositories, enables collaboration

* **Git** is the **engine** (version control).
* **GitHub** is the **garage** (online collaboration & storage).

* Yes. Git is a fully functional local version control system.
* **We can use Git without GitHub**
* GitHub is only needed for remote hosting or collaboration. You can work, commit, and manage history offline using just Git.


| Task                | Git Required | GitHub Required |
| ------------------- | ------------ | --------------- |
| Local versioning    | ✅ Yes        | ❌ No            |
| Collaboration       | ✅ Yes        | ✅ Yes           |
| Branching & Merging | ✅ Yes        | ❌ No            |
| Online Backup       | ❌ No         | ✅ Yes           |


### 🔧 **Git** – Version Control Tool

| Feature          | Description                                      |
| ---------------- | ------------------------------------------------ |
| **Type**         | Command-line version control tool                |
| **Purpose**      | Tracks code changes, supports branching, merging |
| **Runs On**      | Local machine (fully offline capable)            |
| **Key Commands** | `git init`, `git add`, `git commit`, `git merge` |
| **Created By**   | Linus Torvalds (2005)                            |
| **Dependency**   | Works independently, GitHub is optional          |

🧪 **Example:**
You can `git commit` changes locally without any internet access.

---

### 🌐 **GitHub** – Git Repository Hosting Platform

| Feature          | Description                                          |
| ---------------- | ---------------------------------------------------- |
| **Type**         | Cloud-based platform                                 |
| **Purpose**      | Hosts remote Git repositories, enables collaboration |
| **Runs On**      | Internet (cloud)                                     |
| **Key Features** | Pull Requests, Issues, CI/CD, Code Review            |
| **Created By**   | GitHub, Inc. (acquired by Microsoft)                 |
| **Dependency**   | Requires Git to function                             |

🧪 **Example:**
Push your code using `git push origin main` and collaborate with others via pull requests.

---

### 🧠 Simple Analogy




---

### 🧪 Git Without GitHub – Example Workflow

```bash
git init
echo "Hello" > app.py
git add app.py
git commit -m "Initial commit"
git checkout -b feature-x
git checkout main
git merge feature-x
```

👉 All local. No GitHub involved.

---

### 🔄 Alternatives to GitHub
* **GitLab** – Open-source and self-hosted options
* **Bitbucket** – By Atlassian, integrates with Jira
* **Azure Repos** – For Microsoft ecosystem





### Git Basics

* Git is a **distributed version control system** for tracking code changes.
* It enables **collaboration**, **branching**, **merging**, and **rollback** across teams.

---

### git fetch vs git pull

| Command     | Description                                       |
| ----------- | ------------------------------------------------- |
| `git fetch` | Downloads changes from the remote (no merging).   |
| `git pull`  | Fetches and **automatically merges** the changes. |

---

### Undoing Commits

#### Revert a Commit (Safe)

```bash
git revert <commit_hash>
```

* Creates a new commit that undoes the specified commit.
* Safe for **shared branches**.

#### Reset a Commit (Destructive)

```bash
git reset --hard <commit_hash>
```

* Moves `HEAD` to the specified commit.
* **Deletes** all commits after that point — use with caution.

---

### Revert the Last 10 Commits

#### 🔸 Safe Way (Preferred in Teams):

```bash
git revert HEAD~9..HEAD
```

* Reverts the last 10 commits (inclusive).
* Keeps history and creates undo commits.

#### 🔸 Destructive Way (Local Branch Only):

```bash
git reset --hard HEAD~10
```

* Deletes the last 10 commits.
* Use only on non-shared branches.

#### 🔸 Soft Reset (Preserve Changes):

```bash
git reset --soft HEAD~10
```

* Moves `HEAD` back, but keeps changes in staging.

---

### View Last 10 Commits

```bash
git log -n 10 --oneline
```

* Shows the most recent 10 commits.

---

### .gitignore

* Lists files/folders Git should **ignore**.
* Example entries:

```
node_modules/
.env
dist/
```

---

### Git Branches

* A branch is an **independent line of development**.
* Common practice:

```bash
git checkout -b feature/login
```

* Merge it into `main` via Pull Request.

---

### Merge vs Rebase

| Operation | Description                                   | Use Case                   |
| --------- | --------------------------------------------- | -------------------------- |
| `merge`   | Combines branches, **preserves history**      | Safer for teamwork         |
| `rebase`  | Rewrites history, applies commits on new base | Clean history before merge |

---

### Pull Requests

* A **Pull Request (PR)** proposes merging one branch into another.
* Used for **code review**, **testing**, and **approval** before merging.

---

### git stash

* Temporarily store local changes without committing:

```bash
git stash           # Save changes
git stash pop       # Apply and remove from stash
```

---

### GitFlow vs GitHub Flow

| Feature       | GitFlow                        | GitHub Flow             |
| ------------- | ------------------------------ | ----------------------- |
| Main Branches | `main`, `develop`, `feature/*` | `main`, `feature/*`     |
| Ideal For     | Release-driven teams           | Continuous deployment   |
| Merge Path    | `feature → develop → main`     | `feature → main` via PR |

---

### Resolving Merge Conflicts

1. Git marks conflicts in code with:

```text
<<<<<<< HEAD
// your code
=======
 // incoming code
>>>>>>> feature-branch
```

2. Manually edit and resolve.
3. Finalize with:

```bash
git add <filename>
git commit
```

---

### Release Branch Strategy

* Create `release/x.y.z` from `develop`.
* Freeze features and QA the branch.
* Urgent fixes go via `hotfix/*` → merged to both `main` and `develop`.

---

### Git + Jenkins Integration

* Use **webhooks** or polling to trigger Jenkins jobs on:

  * Git push
  * PR merge
  * Tag creation

* Jenkins uses branch names or commit messages to trigger appropriate pipelines.

---

### Branching Strategies

Use either **GitFlow** or **Trunk-Based Development**:

* `main`: Always production-ready.
* `feature/*`: Feature branches (short-lived).
* `release/*`, `hotfix/*`: For releases and urgent fixes.
* Protect `main` with:

  * PR approvals
  * CI checks
  * Merge restrictions

---

### Tagging Releases

```bash
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

* Tags are used in CI/CD for **versioned deployments**.

---

## Bonus Git Interview Questions

| Question               | Answer                                                       |
| ---------------------- | ------------------------------------------------------------ |
| `origin` vs `upstream` | `origin`: Your repo; `upstream`: Original source repo        |
| Detached HEAD          | HEAD points to a commit instead of a branch                  |
| Undo a `git push`      | `git reset <commit>` + `git push --force` (use with caution) |
| git stash apply vs pop | `pop` removes stash; `apply` keeps it for later use          |
| git cherry-pick        | Applies a specific commit from another branch                |
| git reflog             | Shows recent updates to HEAD (recover lost commits)          |

---






### **Git Commands**

| **Command**                   | **When to Use It (Example Scenario)**                                                                |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| `git init`                    | Starting a **new project locally** that you want to version control.                                 |
| `git clone <url>`             | Getting the **codebase from a remote repo** (e.g., GitHub/Azure DevOps) for the first time.          |
| `git status`                  | To check which files have been modified, staged, or untracked before committing.                     |
| `git add <file>`              | After editing a file (e.g., `index.js`), stage it for a commit.                                      |
| `git commit -m "msg"`         | After staging changes, commit them with a meaningful message like "Fix login API bug".               |
| `git commit --amend`          | Forgot to add something to the last commit? Use this to update the previous commit.                  |
| `git branch <new-branch>`     | Creating a new feature branch like `feature/user-auth` from main.                                    |
| `git switch -c <branch>`      | Create and switch to a new branch in one step (replaces older `checkout -b`).                        |
| `git switch <branch>`         | Switching from `feature/cart-ui` back to `main` after finishing work.                                |
| `git merge <branch>`          | Merging `feature/login` into `main` once the feature is complete and tested.                         |
| `git rebase <branch>`         | You want to **replay your changes** on top of the latest `main` branch to keep history clean.        |
| `git pull`                    | You’re about to start work — fetch and merge the latest changes from origin.                         |
| `git fetch`                   | Get the latest remote changes **without** modifying your current branch (safe before rebasing).      |
| `git push`                    | You’ve committed your changes and now want to **push them to GitHub or remote repo**.                |
| `git push -u origin <branch>` | You created a new branch locally and want to **push and set upstream tracking**.                     |
| `git stash`                   | You’re in the middle of work but need to switch branches — stash your uncommitted changes.           |
| `git stash pop`               | After switching back, reapply your stashed changes.                                                  |
| `git clean -fd`               | Remove untracked files (e.g., compiled files or logs) from your working directory.                   |
| `git tag v1.0.0`              | Mark a **production-ready release** or deployment point.                                             |
| `git revert <commit>`         | You pushed a bad commit — use this to undo it **without rewriting history** (safe for shared repos). |
| `git reset --soft HEAD~1`     | You want to **undo the last commit but keep your changes** to edit or re-commit.                     |
| `git reset --hard HEAD~1`     | You want to completely **discard** the last commit and changes (be careful!).                        |
| `git reflog`                  | You accidentally deleted a branch or did a reset — use this to **recover lost commits**.             |






