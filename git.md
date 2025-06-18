
---

### Git Basics

* Git is a **distributed version control system** that tracks changes in source code.
* It allows multiple developers to collaborate, merge, and manage code efficiently.

---

### git fetch vs git pull

* `git fetch`: Downloads changes from the remote **without merging**.
* `git pull`: Fetches and **automatically merges** into the current branch.

---

### Revert a Commit

* To undo a specific commit:

  ```bash
  git revert <commit_hash>   # Creates a new commit that undoes changes
  git reset --hard <commit_hash>  # Resets to a previous state (destructive)
  ```

---

### Revert the Last 10 Commits

#### Safe Way (Creates Reverting Commits):

```bash
git revert HEAD~9..HEAD
```

* `HEAD`: Latest commit
* `HEAD~9`: 10th last commit
* Reverts commits from 10th to latest (in order)
* **Creates new commits** — ideal for shared branches

---

#### Destructive Way (Local Branch Only):

```bash
git reset --hard HEAD~10
```

* Removes last 10 commits from history
* Use **only if no one else relies on this branch**

---

#### Soft Reset (Keep Code Changes):

```bash
git reset --soft HEAD~10
```

* Moves `HEAD` back by 10 commits
* Code changes remain in staging

---

### View Last 10 Commits

```bash
git log -n 10 --oneline
```

To revert a specific commit:

```bash
git revert <commit_hash>
```

> **Best practice for teams**: Use `git revert HEAD~9..HEAD` to preserve history and avoid conflicts.

---

### .gitignore

* Lists files or directories Git should **exclude** from tracking.
* Common examples: `node_modules/`, `.env`, `dist/`

---

### Git Branches

* Branches are **isolated lines of development**.
* Ideal for working on features independently before merging into `main`.

---

### Merge vs Rebase

| Operation | Description                                     | When to Use            |
| --------- | ----------------------------------------------- | ---------------------- |
| `merge`   | Combines branches, preserves commit history     | In collaborative teams |
| `rebase`  | Rewrites history by placing your commits on top | For a clean PR history |

---

### Pull Request

* A way to **propose changes** from one branch to another (e.g., `feature → main`)
* Enables code review and testing before merging.

---

### git stash

* Temporarily saves local changes without committing:

```bash
git stash
git stash pop
```

---

### GitFlow vs GitHub Flow

| Feature       | GitFlow                        | GitHub Flow           |
| ------------- | ------------------------------ | --------------------- |
| Main Branches | `main`, `develop`, `feature/*` | `main`, `feature/*`   |
| Use Case      | Structured release cycles      | Continuous deployment |
| Merge Style   | Feature → develop → main       | Direct PR to `main`   |

---

### Resolving Merge Conflicts

1. Git highlights conflicting files.
2. Manually edit conflicts marked by:

   ```
   <<<<<<< HEAD
   =======
   >>>>>>> branch
   ```
3. After resolving:

   ```bash
   git add <filename>
   git commit
   ```

---

### Release Branch Strategy

* Create `release/x.y.z` branches from `develop`
* Freeze changes during QA
* Use `hotfix/*` branches for urgent fixes; merge them into both `main` and `develop`

---

### Git + Jenkins Integration

* Jenkins pulls code via **webhooks** or **polling**
* Triggers CI/CD pipeline on push or PR merge
* Uses branch names and commit messages for automated deployment

---

### Branching Strategies

* Use **GitFlow** or **Trunk-Based Development**:

  * `main`: Production-ready code
  * `feature/*`: Short-lived development branches
  * `release/*`, `hotfix/*`: For release and patch handling
  * Protect `main` with PR reviews and CI checks

---

### Tagging Releases

```bash
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

* Used in CI/CD for versioned deployments

---

## Bonus Git Interview Questions

| Question                                   | Quick Answer                                                          |
| ------------------------------------------ | --------------------------------------------------------------------- |
| Difference between `origin` and `upstream` | `origin`: Your fork/clone; `upstream`: The source/original repository |
| What is a detached HEAD?                   | Git points to a specific commit instead of a branch                   |
| How to undo a `git push`?                  | `git reset` + `git push --force` (use with caution!)                  |

---

Let me know if you’d like this formatted as a PDF or Markdown document.
