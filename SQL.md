
- [WHERE Vs HAVING Vs GROUP BY](#WHERE-Vs-HAVING-Vs-GROUP-BY)  - [`INNER JOIN` vs `LEFT JOIN` vs `RIGHT JOIN`](#INNER-JOIN-vs-LEFT-JOIN-vs-RIGHT-JOIN)
- [Primary Key vs Foreign Key vs Composite Key](#Primary-Key-vs-Foreign-Key-vs-Composite-Key)
- [`UNION` and `UNION ALL`](#UNION-and-UNION-ALL)  - [`IN` Operator](#in-operator) - [`TRUNCATE` vs `DELETE` vs `DROP`](#TRUNCATE-vs-DELETE-vs-DROP)
- [Subquery vs Correlated Subquery](#Subquery-vs-Correlated-Subquery) - [Normalization](#Normalization) - [Indexes](#Indexes)  - [Index Drawbacks](#Index-Drawbacks)
- [Common Table Expression](#CTE) - [Detect and avoid SQL injection](#Detect-and-avoid-SQL-injection) - [Window Functions](#Window-Functions)

- [Zero Downtime Migration](#Zero-Downtime-Migration)

**Program**

- [Second Highest Salary](#second-highest-salary) - [3rd Largest Value](#3rd-largest-value) - [Pagination](#pagination) - [Return Records Without NULL `name`](#return-records-without-null-name) - [Update Gender Vice Versa](#single-update-gender-vice-versa)  - [Update Data in One Table Based on Another](#update-data-in-one-table-based-on-another) - [Find Duplicate Rows](#find-duplicate-rows) - [Find Duplicate Salaries](#find-duplicate-salaries)
- [Get Total Salary by Department](#get-total-salary-by-department) - [Window Function to Rank Salaries Within Departments](#window-function-to-rank-salaries-within-departments) - [Recursive CTE – Build Employee Hierarchy (Self-Join Style)](#recursive-cte--build-employee-hierarchy-self-join-style)


## WHERE Vs HAVING Vs GROUP BY

- `WHERE` filters rows **before grouping**,
- `HAVING` filters **after grouping** (used with `GROUP BY`).
- `GROUP BY` It groups rows sharing a property so aggregate functions like `SUM`, `COUNT`, or `AVG` can be applied to each group.



```sql
-- Employees with salary > 50000
SELECT * FROM employees
WHERE salary > 50000;
```


```sql
-- Departments with average salary > 45000
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 45000;
```


```sql
Combining WHERE + HAVING
-- Only consider employees with salary > 30000, then group and filter
SELECT department, COUNT(*) AS total, AVG(salary) AS avg_sal
FROM employees
WHERE salary > 30000
GROUP BY department
HAVING AVG(salary) > 45000;
```





## `INNER JOIN` vs `LEFT JOIN` vs `RIGHT JOIN`


- **`INNER JOIN`**: Returns only rows with **matching keys** in both tables.
- **`LEFT JOIN`**: Returns **all rows from the left** table + matched rows from the right.
- **`RIGHT JOIN`**: Returns **all rows from the right** table + matched rows from the left.
* Use `INNER JOIN` when you need **only matches**.
* Use `LEFT JOIN` when you need **all left rows**, even without matches.
* Use `RIGHT JOIN` when you need **all right rows**, even without matches.

---

### 🧱 Sample Tables

#### 🔹 `employees`
| id | name    | dept_id |
|----|---------|---------|
| 1  | Alice   | 10      |
| 2  | Bob     | 20      |
| 3  | Charlie | NULL    |

#### 🔹 `departments`
| id  | dept_name   |
|-----|-------------|
| 10  | IT          |
| 30  | HR          |

---

### ✅ 1. `INNER JOIN`
```sql
SELECT e.name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id;
````

**Output:**

| name  | dept\_name |
| ----- | ---------- |
| Alice | IT         |

---

### ✅ 2. `LEFT JOIN`

```sql
SELECT e.name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id;
```

**Output:**

| name    | dept\_name |
| ------- | ---------- |
| Alice   | IT         |
| Bob     | NULL       |
| Charlie | NULL       |

---

### ✅ 3. `RIGHT JOIN`

```sql
SELECT e.name, d.dept_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.id;
```

**Output:**

| name  | dept\_name |
| ----- | ---------- |
| Alice | IT         |
| NULL  | HR         |

---













## Primary Key vs Foreign Key vs Composite Key

* **Primary key** when one field is enough to identify a record.
* **Foreign key** to create relationships across tables.
* **Composite key** when a combination is required for uniqueness.


### Primary Key
- Uniquely identifies each record in a table.
- Cannot contain `NULL`.
- Only one primary key allowed per table.

```sql
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100)
);
```


### Foreign Key

* References the **primary key** of another table.
* Ensures **referential integrity** between related tables.

```sql
CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);
```


### Composite Key

* A **primary key made of two or more columns**.
* Useful when a single column cannot uniquely identify a row.

```sql
CREATE TABLE student_course (
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    PRIMARY KEY (student_id, course_id)
);
```





## `UNION` and `UNION ALL`

- **`UNION`**: Combines results from two queries and **removes duplicates**.
- **`UNION ALL`**: Combines results and **includes all duplicates**.

| Feature     | `UNION`                          | `UNION ALL`                   |
| ----------- | -------------------------------- | ----------------------------- |
| Duplicates  | Removed                          | Kept                          |
| Performance | Slower (due to sorting)          | Faster (no sorting)           |
| Use case    | When you need **unique** results | When you want **all records** |

---

### ✅ Example

#### 🔹 Table: `employees_2023`
| name    |
|---------|
| Alice   |
| Bob     |

#### 🔹 Table: `employees_2024`
| name    |
|---------|
| Bob     |
| Charlie |

---

### ✅ Using `UNION`
```sql
SELECT name FROM employees_2023
UNION
SELECT name FROM employees_2024;
````

**Result:**

| name    |
| ------- |
| Alice   |
| Bob     |
| Charlie |

> ✅ Duplicates like "Bob" are removed.

---

### ✅ Using `UNION ALL`

```sql
SELECT name FROM employees_2023
UNION ALL
SELECT name FROM employees_2024;
```

**Result:**

| name    |
| ------- |
| Alice   |
| Bob     |
| Bob     |
| Charlie |

> 🔁 Keeps **all occurrences**, including duplicates.

---


 ## Normalization

- A process of organizing data to reduce redundancy and improve data integrity 
- Involves dividing tables into smaller ones and defining relationships.



## Subquery vs Correlated Subquery

| Feature     | Subquery                    | Correlated Subquery                        |
| ----------- | --------------------------- | ------------------------------------------ |
| Execution   | Runs once                   | Runs per row of outer query                |
| Dependency  | Independent                 | Depends on outer query                     |
| Performance | Generally faster            | Can be slower (due to multiple executions) |
| Use Case    | Comparing with fixed result | Row-by-row comparison with context         |


### ✅ Subquery
- A subquery (or nested query) is executed **once**, independently of the outer query, and its result is used by the main query.

```sql
-- Find employees with salary greater than the average salary
SELECT name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary) FROM employees
);
```

🔹 **Explanation**:

* The subquery `SELECT AVG(salary)` runs **once**.
* Its result is compared with each employee's salary.


### ✅ Correlated Subquery

- A correlated subquery **depends on values from the outer query**. It runs **once per row** of the outer query.

```sql
-- Find employees who earn more than the average salary of their department
SELECT e1.name, e1.salary, e1.department_id
FROM employees e1
WHERE e1.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department_id = e1.department_id
);
```

🔹 **Explanation**:

* The subquery uses `e1.department_id` from the outer query.
* It runs **for each row** in the outer query.











## Indexes

- Indexes are special data structures that **speed up read queries** by allowing the database to find data faster—much like a book index.


### 🧠 Why Use Indexes?
- Improve SELECT performance
- Reduce disk I/O
- Help with JOINs, WHERE, ORDER BY, GROUP BY clauses


| Index Type | Purpose                         | Best Use Case                  |
| ---------- | ------------------------------- | ------------------------------ |
| B-tree     | Fast lookup, range scan         | Most general queries           |
| Bitmap     | Compact for few distinct values | Gender, flags (true/false)     |
| Full-text  | Search within large text        | Blog, article search           |
| Composite  | Multi-column filtering          | `(A, B)` WHERE A = ? AND B = ? |
| Unique     | Enforce uniqueness              | Email, usernames               |




### 🛠️ Types of Indexes

#### 🔹 1. **B-tree Index** *(Default in most DBs like MySQL, PostgreSQL)*
- Balanced tree structure.
- Efficient for **range queries**, equality, and sorting.

```sql
CREATE INDEX idx_name ON employees(name);
````

#### 🔹 2. **Bitmap Index**

* Uses bits (0/1) for each distinct value.
* Efficient for **low-cardinality columns** (e.g., gender, status).
* Mostly found in **data warehousing systems** (e.g., Oracle).

```sql
-- Conceptual only: Syntax varies by RDBMS
```

#### 🔹 3. **Full-Text Index**

* Used for searching large blocks of **text** (e.g., articles, descriptions).
* Supports `MATCH()` and `AGAINST()` in MySQL.

```sql
CREATE FULLTEXT INDEX idx_description ON products(description);
```

#### 🔹 4. **Composite Index**

* Index on **multiple columns**.
* Order of columns matters for efficiency.

```sql
CREATE INDEX idx_emp_dept ON employees(department_id, name);
```

#### 🔹 5. **Unique Index**

* Enforces uniqueness in the indexed column(s).
* Automatically created with `PRIMARY KEY` or `UNIQUE`.

```sql
CREATE UNIQUE INDEX idx_email ON users(email);
```



### Index Drawbacks

* Too many indexes can slow down `INSERT`, `UPDATE`, `DELETE`
* Choose indexes based on query patterns
* Use `EXPLAIN` (MySQL) or `EXPLAIN ANALYZE` (Postgres) to monitor index usage
* While indexes improve **read/query performance**, they come with trade-offs.


### 🔻 1. **Slower Write Operations**
- **INSERT**, **UPDATE**, and **DELETE** operations become slower.
- Every time data changes, **indexes must be updated** too.

```txt
More indexes = more overhead during data modifications.
```


### 🔻 2. **Increased Storage Usage**

* Indexes consume additional **disk space**.
* Composite and full-text indexes can take up **significant space**.


### 🔻 3. **Complex Maintenance**

* Need regular **monitoring**, especially in frequently changing data.
* May require **rebuilding** or **analyzing** for performance tuning.

---

### 🔻 4. **Risk of Over-Indexing**

* Too many indexes can **confuse the query planner**.
* May result in suboptimal plans and **slower queries**.

---

### 🔻 5. **Not Always Used**

* The database **may not use an index** if:

  * The table is small.
  * Query doesn’t match the index columns properly.
  * The index is fragmented or outdated.

---

### 🧠 Tip:

- Always design indexes **based on query patterns**, not just table structure.

Use tools like:

```sql
EXPLAIN
EXPLAIN ANALYZE
```
to verify whether your indexes are helping.

















## CTE

- A **CTE** is a **temporary named result set** defined using the `WITH` clause.  
- It simplifies complex queries, especially with **multi-step logic**, **recursive queries**, or **self-joins**.


### ✅ Benefits of Using CTEs
- Improves **readability** and **maintainability**
- Allows **recursion**
- Can be **referenced multiple times** within the same query

---

### 🛠️ Syntax (Non-recursive CTE)
```sql
WITH cte_name AS (
  SELECT column1, column2
  FROM table_name
  WHERE condition
)
SELECT * FROM cte_name
WHERE column1 > 100;
````

---

## Write a Recursive Query Using CTE

- Recursive CTEs are used to handle **hierarchical or tree-structured data**.

---

### 🗂️ Example: Category Hierarchy

Assume a table:

```sql
CREATE TABLE categories (
  id INT,
  parent_id INT
);
```

### 🔄 Recursive CTE Query

```sql
WITH RECURSIVE cte AS (
  -- Anchor member: top-level categories
  SELECT id, parent_id
  FROM categories
  WHERE parent_id IS NULL

  UNION ALL

  -- Recursive member: get children of previous level
  SELECT c.id, c.parent_id
  FROM categories c
  JOIN cte ON c.parent_id = cte.id
)
SELECT * FROM cte;
```


### 📌 Use Cases for Recursive CTEs

* Organization charts
* File/folder hierarchy
* Comment threads
* Dependency chains


 ## **Detect and avoid SQL injection**

- Always use parameterized queries or ORM methods that escape input. 
- Avoid string concatenation in queries.



## Window Functions

- A **window function** performs a calculation across a **set of rows related to the current row**, 
- without collapsing rows like `GROUP BY` does.

---

### 🔍 Key Features:
- Retains **individual rows**.
- Works over a **"window" of rows** defined by `OVER()` clause.
- Useful for **rankings**, **running totals**, **moving averages**, etc.

---

### 🗂️ Common Window Functions:
- `ROW_NUMBER()`
- `RANK()`, `DENSE_RANK()`
- `SUM()`, `AVG()` over a partition
- `LEAD()`, `LAG()` for previous/next row access

---

### 🧱 Sample Table: `sales`

| id | salesperson | region | amount |
|----|-------------|--------|--------|
| 1  | Alice       | East   | 500    |
| 2  | Bob         | East   | 700    |
| 3  | Alice       | East   | 600    |
| 4  | Carol       | West   | 300    |
| 5  | Bob         | East   | 400    |

---

### ✅ Example 1: Running Total Using `SUM() OVER()`

```sql
SELECT
  salesperson,
  amount,
  SUM(amount) OVER (PARTITION BY salesperson ORDER BY id) AS running_total
FROM sales;
````

**🔍 Explanation:**

* `PARTITION BY salesperson`: Window restarts per salesperson
* `ORDER BY id`: Running total in row order

---

### ✅ Example 2: Row Number

```sql
SELECT
  salesperson,
  amount,
  ROW_NUMBER() OVER (PARTITION BY region ORDER BY amount DESC) AS row_num
FROM sales;
```

**🔍 Explanation:**

* Assigns a unique row number **within each region**, ordered by amount


### 🧠 Summary

| Clause         | Purpose                                                  |
| -------------- | -------------------------------------------------------- |
| `OVER()`       | Defines the window of rows                               |
| `PARTITION BY` | Divides data into groups (like GROUP BY, but keeps rows) |
| `ORDER BY`     | Specifies order within the partition                     |


### 📌 Use Cases:

* Ranking within groups
* Running totals
* Percentiles
* First/Last value per group
* Gap detection using `LEAD()` / `LAG()`



### **3rd Largest Value**

```sql
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 2; -- 3rd highest
```


### **`IN` Operator**

- Used to check if a value is within a list of values.

```sql
SELECT * FROM employees
WHERE department_id IN (1, 3, 5);
```

### **Return records without NULL `name`**

```sql
SELECT * FROM employees
WHERE name IS NOT NULL;
```

### **Pagination**

- Using `LIMIT` and `OFFSET` to paginate results.

```sql
-- Page 2, 10 records per page
SELECT * FROM employees
LIMIT 10 OFFSET 10;
```


### **Single update Gender vice versa**

```sql
UPDATE employees
SET gender = CASE
    WHEN gender = 'M' THEN 'F'
    WHEN gender = 'F' THEN 'M'
    ELSE gender
END;
```



### **Find duplicate rows**
   ```sql
   SELECT column1, COUNT(*) 
   FROM table_name 
   GROUP BY column1 
   HAVING COUNT(*) > 1;
   ```

### **Update data in one table based on another**
   ```sql
   UPDATE t1
   SET t1.column = t2.value
   FROM table1 t1
   JOIN table2 t2 ON t1.id = t2.id;
   ```

### **Second highest salary**
```sql
SELECT MAX(salary)
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
```

### **Find duplicate salaries**

```sql
SELECT salary, COUNT(*) as count
FROM employees
GROUP BY salary
HAVING COUNT(*) > 1;
```

📌 **Output:**

| salary | count |
| ------ | ----- |
| 80000  | 2     |

---

### **Get total salary by department**

```sql
SELECT department, SUM(salary) AS total_salary
FROM employees
GROUP BY department;
```

📌 **Output:**

| department | total\_salary |
| ---------- | ------------- |
| HR         | 110000        |
| IT         | 235000        |
| Finance    | 90000         |

---

### **window function to rank salaries within departments**

```sql
SELECT name, department, salary,
  RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank
FROM employees;
```

📌 **Output:**

| name    | department | salary | dept\_rank |
| ------- | ---------- | ------ | ---------- |
| Alice   | HR         | 60000  | 1          |
| Dave    | HR         | 50000  | 2          |
| Bob     | IT         | 80000  | 1          |
| Frank   | IT         | 80000  | 1          |
| Charlie | IT         | 75000  | 3          |
| Eve     | Finance    | 90000  | 1          |

---

### **Recursive CTE – Build employee hierarchy (self-join style)**

Assume a simplified table:

**`employee_hierarchy`**

| id | name     | manager\_id |
| -- | -------- | ----------- |
| 1  | CEO      | NULL        |
| 2  | VP1      | 1           |
| 3  | VP2      | 1           |
| 4  | Manager1 | 2           |
| 5  | Dev1     | 4           |

```sql
WITH RECURSIVE emp_cte AS (
  SELECT id, name, manager_id, 1 AS level
  FROM employee_hierarchy
  WHERE manager_id IS NULL

  UNION ALL

  SELECT e.id, e.name, e.manager_id, c.level + 1
  FROM employee_hierarchy e
  JOIN emp_cte c ON e.manager_id = c.id
)
SELECT * FROM emp_cte;
```

📌 **Output:**

| id | name     | manager\_id | level |
| -- | -------- | ----------- | ----- |
| 1  | CEO      | NULL        | 1     |
| 2  | VP1      | 1           | 2     |
| 3  | VP2      | 1           | 2     |
| 4  | Manager1 | 2           | 3     |
| 5  | Dev1     | 4           | 4     |

---






## TRUNCATE vs DELETE vs DROP


* Use `DELETE` when you need to **conditionally remove rows**.
* Use `TRUNCATE` for **quickly clearing tables**, especially in staging/testing.
* Use `DROP` when you want to **remove the table entirely**.

| Feature                 | DELETE    | TRUNCATE        | DROP            |
| ----------------------- | --------- | --------------- | --------------- |
| Removes Data            | ✅ Yes     | ✅ Yes           | ✅ Yes           |
| Can Use `WHERE`         | ✅ Yes     | ❌ No            | ❌ No            |
| Rollback Possible       | ✅ Yes     | ⚠ Depends on DB | ❌ Usually No    |
| Fires Triggers          | ✅ Yes     | ❌ No            | ❌ No            |
| Affects Table Structure | ❌ No      | ❌ No            | ✅ Yes           |
| Resets Auto-Increment   | ❌ No      | ✅ Yes           | ✅ N/A (removed) |
| Speed                   | 🐢 Slower | ⚡ Fast          | ⚡ Fastest       |



### ✅ 1. `DELETE`

- Removes **rows** from a table **one by one**.

- Can include a `WHERE` clause
- Can be **rolled back** (if inside a transaction)
- Triggers **are fired**
- Table structure & schema remain

```sql
DELETE FROM employees WHERE department = 'HR';
````

---

### ✅ 2. `TRUNCATE`

- Removes **all rows** from a table **instantly** (bulk operation).

* ❌ No `WHERE` clause allowed
* ⚡ Very fast (less logging)
* ✅ Resets auto-increment counter
* ⚠ Cannot be rolled back in some DBs (e.g., MySQL)
* ❌ Triggers are **not** fired

```sql
TRUNCATE TABLE employees;
```

---

### ✅ 3. `DROP`

- Completely **removes the table structure**, data, and definition.

* Table is **gone** from the database
* ❌ Cannot be rolled back (unless inside a transaction in PostgreSQL)
* ❌ All dependent objects (indexes, constraints) are also removed

```sql
DROP TABLE employees;
```





## Zero Downtime Migration


### Zero-downtime migration
- A deployment or schema change that **does not interrupt service** or break existing functionality — critical for high-availability systems.

### Zero downtime important
- Prevents user disruption
- Ensures 24/7 uptime
- Protects transactional consistency during schema changes

### Challenges in zero-downtime DB migrations
- Schema incompatibility between old and new code
- Data loss or inconsistency
- Long-running locks
- Application crashes due to removed/renamed columns

### Practices for zero-downtime schema changes

| Change Type        | Strategy                                 |
|--------------------|-------------------------------------------|
| Add Column         | ✅ Safe (default nullable)                |
| Remove Column      | ❌ Avoid immediately — use soft-deprecate |
| Rename Column      | ❌ Breaks old code — add alias + migrate  |
| Add NOT NULL Field | Fill with default values in advance       |


### Expand and Contract pattern
- A **3-phase** strategy:
1. **Expand**: Add new columns, tables, or structures
2. **Migrate**: Populate data and dual-write
3. **Contract**: Safely remove old structures once unused


### **Handle column renames with zero downtime**
- Add the **new column** (with default or NULL)
- Update application to **write to both columns**
- Gradually migrate data
- Switch reads to new column
- Drop old column in a later deploy


### **Dual writing**
- Writing to both **old and new schema versions** during transition.
- Ensures backward compatibility
- Used in **blue-green deployments** or gradual cutovers


### **Application compatibility during a migration**
- Use **feature flags**
- Update schema in a **backward-compatible way**
- Deploy code changes in **multiple phases**


### **zero downtime migrations**
- Use **staging environments**
- Run migrations inside a transaction (if supported)
- Test rollback scripts
- Monitor query performance and logs

### **Platforms help with zero-downtime DB migrations**
- **Flyway**, **Liquibase**, **Prisma Migrate**, **Alembic** (Python)
- CI/CD platforms: **GitHub Actions**, **GitLab CI**, **ArgoCD**
- Blue-Green or Canary Deployments with **Kubernetes**


### **TRUNCATE or DROP in zero-downtime migrations**
- ⚠ Generally **not safe**, as they lock or destroy objects. Use:
- `DELETE` in small batches
- Mark columns as deprecated first, drop later


### **Handle long-running migrations**
- **Break into batches**
- **Copy to shadow table** and swap with minimal downtime
- Use **online schema change tools** (e.g., pt-online-schema-change for MySQL)


### **Rollback strategy for schema changes**
- Back up the database before changes
- Write **down** migrations (revert scripts)
- Keep deployments **idempotent**
- Monitor for issues before proceeding to next phase



### Common Mistake Scenarios

| Scenario               | Problem                         | Solution                          |
| ---------------------- | ------------------------------- | --------------------------------- |
| Dropping a column      | Causes app crash                | Use soft deprecate + remove later |
| Renaming column        | Breaks API integration          | Add alias or migration layer      |
| Adding NOT NULL column | Fails if existing rows are null | Fill default values first         |





