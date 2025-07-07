
| **Category**             | **Topics** |
|--------------------------|------------|
| **Basics**               | [Git Basics](#git-basics), [Git vs GitHub](#Git-vs-GitHub), [git fetch vs git pull](#git-fetch-vs-git-pull) |
| **Undoing Commits**      | [Undoing Commits](#undoing-commits), [Revert a Commit](#revert-a-commit), [Revert the Last 10 Commits](#revert-the-last-10-commits), [View Last 10 Commits](#view-last-10-commits) |
| **Branching & Merging**  | [.gitignore](#gitignore), [Git Branches](#git-branches), [Merge vs Rebase](#merge-vs-rebase), [Pull Requests](#pull-requests), [git stash](#git-stash) |
| **Strategies**           | [GitFlow vs GitHub Flow](#gitflow-vs-github-flow), [Branching Strategies](#branching-strategies), [Release Branch Strategy](#release-branch-strategy) |
| **Conflict & CI/CD**     | [Resolving Merge Conflicts](#resolving-merge-conflicts), [Git + Jenkins Integration](#git--jenkins-integration) |
| **Release Management**   | [Tagging Releases](#tagging-releases), [Bonus Git Interview Questions](#bonus-git-interview-questions) |

---

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

