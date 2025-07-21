| **Category**                       | **Topics** |
|------------------------------------|------------|
| **Keys & Operators**      | [WHERE Vs HAVING Vs GROUP BY](#WHERE-Vs-HAVING-Vs-GROUP-BY) , [`INNER JOIN` vs `LEFT JOIN` vs `RIGHT JOIN`](#INNER-JOIN-vs-LEFT-JOIN-vs-RIGHT-JOIN) , [Primary Key vs Foreign Key vs Composite Key](#Primary-Key-vs-Foreign-Key-vs-Composite-Key) , [Subquery vs Correlated Subquery](#Subquery-vs-Correlated-Subquery) , , [Common Table Expression (CTE)](#CTE) , [Detect and Avoid SQL Injection](#Detect-and-avoid-SQL-injection) , [Insert Unique IDs Without Auto-Increment](#Approaches-to-Insert-Unique-IDs-Without-Auto-Increment-or-Primary-Key) , [Triggers vs Stored Procedures](#Triggers-vs-Stored-Procedures) , [Delete and Rollback](#Delete-and-Rollback) |
| **Concepts**             | [Window Functions](#Window-Functions) , [View](#View), [Triggers](#Triggers) , [Stored Procedure](#Stored-Procedure) , [Constraints](#Constraints) |
| **Operator**             | [`IN` Operator](#in-operator)  , [`TRUNCATE` vs `DELETE` vs `DROP`](#TRUNCATE-vs-DELETE-vs-DROP), [`UNION` and `UNION ALL`](#UNION-and-UNION-ALL), [Indexes](#Indexes), [Index Drawbacks](#Index-Drawbacks)  |
| **DB Design**             | [Designing a Database](#Designing-a-database) , [Normalization](#Normalization), [Normal Form](#Normal-Form) , [Denormalization](#denormalization) , [One to One, One to Many, Many to Many](#one-to-one-one-to-many-many-to-many-relationships) |
| **Migration**    | [Database Migration](#Database-migration) , [Zero Downtime Migration](#Zero-Downtime-Migration) , [Rollback Strategy in DB Migration](#Rollback-Strategy-in-DB-Migration) , [Data Safety During Migrations](#Data-Safety-During-Migrations) |
| **Programs**              | [Second Highest Salary](#second-highest-salary), [3rd Largest Value](#3rd-largest-value) , [Pagination](#pagination) , [Return Records Without NULL `name`](#return-records-without-null-name) , [Update Gender Vice Versa](#single-update-gender-vice-versa) , [Update Based on Another Table](#update-data-in-one-table-based-on-another) |
| **Duplicate**              | [Find Duplicate Rows](#find-duplicate-rows), [Find Duplicate Salaries](#find-duplicate-salaries) , [Total Salary by Department](#get-total-salary-by-department) , [Rank Salaries by Department (Window Fn)](#window-function-to-rank-salaries-within-departments) , [Recursive CTE – Employee Hierarchy](#recursive-cte--build-employee-hierarchy-self-join-style) |

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



```sql
-- create
CREATE TABLE employ1 (
  id INTEGER PRIMARY KEY,  name TEXT NOT NULL,  gender TEXT NOT NULL
);


CREATE TABLE employ2 (
  id INTEGER PRIMARY KEY,  employ1ID TEXT NOT NULL,  gender TEXT NOT NULL,
  name TEXT NOT NULL
);
```

```sql
-- insert
INSERT INTO employ1 VALUES (1, 'Clark', 'Sales');
INSERT INTO employ1 VALUES (2, 'Dave', 'Accounting');
INSERT INTO employ1 VALUES (3, 'Ava', 'Sales');

INSERT INTO employ2 VALUES (1,4, 'Clark', 'Sales');
INSERT INTO employ2 VALUES (2,3, 'Dave', 'Accounting');
INSERT INTO employ2 VALUES (3,5, 'Ava', 'Sales');
```

```sql
SELECT employ1.id, employ1.name, employ1.gender
FROM employ1
INNER JOIN employ2 ON employ2.employ1ID = employ1.id;

+----+------+--------+
| id | name | gender |
+----+------+--------+
|  3 | Ava  | Sales  |
+----+------+--------+
```

```sql
SELECT employ1.id, employ1.name, employ2.gender
FROM employ1
LEFT JOIN employ2 ON employ2.employ1ID = employ1.id;

+----+-------+--------+
| id | name  | gender |
+----+-------+--------+
|  1 | Clark | NULL   |
|  2 | Dave  | NULL   |
|  3 | Ava   | Dave   |
+----+-------+--------+
```

```sql
SELECT employ2.id, employ2.name, employ2.gender, employ1.id AS employ1_id
FROM employ1
RIGHT JOIN employ2 ON employ2.employ1ID = employ1.id;


+----+------------+--------+------------+
| id | name       | gender | employ1_id |
+----+------------+--------+------------+
|  1 | Sales      | Clark  |       NULL |
|  2 | Accounting | Dave   |          3 |
|  3 | Sales      | Ava    |       NULL |
+----+------------+--------+------------+

SELECT employ1.id, employ1.name, employ2.gender
FROM employ1
RIGHT JOIN employ2 ON employ2.employ1ID = employ1.id;

+------+------+--------+
| id   | name | gender |
+------+------+--------+
| NULL | NULL | Clark  |
|    3 | Ava  | Dave   |
| NULL | NULL | Ava    |
+------+------+--------+
```



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
- Normalization is the process of organizing data to reduce redundancy and dependency.
- It improves data integrity and reduces storage cost. Key normal forms include:

* **1NF**: Eliminate repeating groups, ensure atomicity.
* **2NF**: Remove partial dependencies.
* **3NF**: Remove transitive dependencies.



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





## Rollback Strategy in DB Migration

- A **rollback strategy** ensures that if something goes wrong during a migration (schema or data), 
- The system can **safely revert** to the previous stable state.


**Why is Rollback Important**
- Prevents data corruption
- Minimizes downtime
- Ensures application stability
- Supports CI/CD and production safety


**Rollback Strategy Components**

**1. Backups Before Migration**
- Always back up the database (snapshot, export, or dump).
```sh
pg_dump db_name > backup.sql
```

**2. Transactional Migrations**

* Wrap schema/data changes inside a **transaction**, so failure auto-rolls back.

```sql
BEGIN;

-- migration steps

COMMIT; -- or ROLLBACK on error
```

✅ Supported in: PostgreSQL, Oracle
❌ Not fully supported in: MySQL (for some DDL operations)

---

**3. Reversible Migrations**

* Write both **`up`** (apply) and **`down`** (revert) migration scripts.

**Example (Flyway or Liquibase style):**

```sql
-- V1__add_email_column.sql (UP)
ALTER TABLE users ADD COLUMN email VARCHAR(100);

-- V1__add_email_column_down.sql (DOWN)
ALTER TABLE users DROP COLUMN email;
```

---

**4. Version Control for DB Schema**

* Use migration tools to version schema (e.g., Flyway, Liquibase, Prisma, Alembic).


**5. Feature Flags**

* Roll out DB changes in conjunction with **code toggles** to isolate new behavior.


**6. Staged/Phased Rollouts**

* Use **dual writes** and **shadow tables**.
* Phase changes to ensure no hard dependency breaks.


## Rollback Considerations

| Scenario                | Rollback Risk/Approach             |
| ----------------------- | ---------------------------------- |
| Dropping a column/table | ✅ Back up or delay — hard to undo  |
| Data transformation     | ✅ Snapshot before change           |
| Renaming columns        | ✅ Use aliasing + phased read/write |
| Large data change       | ✅ Run in chunks + audit logs       |

* ✅ Test migrations & rollbacks in **staging**
* ✅ Monitor logs/queries during migration
* ✅ Document each migration and its fallback plan
* ✅ Avoid irreversible changes in a single deploy


## Data Safety During Migrations

- Data safety ensures that during database schema or data migrations, 
- **no data is lost**, **corrupted**, or made **inconsistent**, especially in production environments.

1. Take backups
2. Use transactions
3. Test in staging
4. Write reversible scripts
5. Monitor during & after



## Database migration

* Moving database schema/data from one version or system to another.
* Includes: schema changes, data transformation, and versioning.
* Use tools like **Flyway**, **Liquibase**, or ORM-based migration systems (e.g., Sequelize, Prisma).
* Use **version-controlled scripts** and CI/CD pipelines.




## **Triggers**


### **Trigger**

* A **stored procedure** that runs **automatically** on `INSERT`, `UPDATE`, or `DELETE`.
* Used for **audit logging**, **data validation**, **auto-updates**, and **business rules**.


### **Trigger Use Case**

* **Audit Log Example**:
  On `BEFORE UPDATE` of a `users` table, insert `OLD.name` and `OLD.email` into `users_audit`.


### **How to Configure a Trigger (MySQL example)**

```sql
DELIMITER $$

CREATE TRIGGER before_user_update
BEFORE UPDATE ON users
FOR EACH ROW
BEGIN
  INSERT INTO users_audit (user_id, old_name, old_email)
  VALUES (OLD.id, OLD.name, OLD.email);
END $$

DELIMITER ;
```


### **Trigger Integration in Node.js**

* Triggers run **automatically** after a DB operation.
* Works with **ORMs like Sequelize** or **raw SQL queries**.
* No special code needed in Node.js.


### **How to Check Triggers**

* **MySQL**: `SHOW TRIGGERS LIKE 'users';`\n
* **PostgreSQL**: Query `information_schema.triggers`.


### **When to Use Triggers**

* Lightweight tasks like:

  * Logging
  * Field auto-population
  * Soft deletes


###  **When *Not* to Use Triggers**

* For **complex business logic** or workflows → better in application layer.
* Hard to test, debug, and version in large systems.


### Best Practices

* Use **`BEFORE`** for validation.
* Use **`AFTER`** for logging.
* Always document and keep logic minimal.
* Test by performing actual data changes and verifying results.



## **Stored Procedure**


###  **Stored Procedure**

* A **precompiled set of SQL statements** stored in the **database**.
* Used to **encapsulate logic** like insert, update, delete, and return values.


###  **Why Use Stored Procedures?**

| Benefit                | Notes                                                |
| ---------------------- | ---------------------------------------------------- |
| 🚀 **Performance**     | Faster execution due to precompilation               |
| 🔁 **Reusability**     | Can be called from multiple app modules              |
| 🔒 **Security**        | Access control via procedure, not directly to tables |
| 🧹 **Maintainability** | Keeps complex logic out of the application layer     |


###  **Real Use Case Example**

* Insert a user and **return the inserted ID** using `LAST_INSERT_ID()` via `OUT` parameter.
* Avoids logic duplication and keeps Node.js code minimal.

### Example
```sql
DELIMITER $$
CREATE PROCEDURE insert_user(
  IN in_name VARCHAR(100),
  IN in_email VARCHAR(100),
  OUT out_id INT
)
BEGIN
  INSERT INTO users(name, email)
  VALUES (in_name, in_email);

  SET out_id = LAST_INSERT_ID();
END $$
DELIMITER ;
```


###  **Node.js Integration**

```js
await db.query('CALL insert_user(?, ?, @id)', ['John', 'john@example.com']);
const [[{ '@id': id }]] = await db.query('SELECT @id');
```

* Works smoothly with `mysql2` or `mysql2/promise`.
* Easy to integrate with async/await workflows.


###  **Best Practices**

* Clear naming of `IN`, `OUT`, `INOUT` parameters.
* Use `DECLARE HANDLER` for error handling inside the procedure.
* Keep the logic focused and efficient.
* Test independently in DB before application integration.


###  **When to Avoid Stored Procedures**

* Complex business logic that needs frequent changes → better in app code.
* Difficult to version and test as part of a CI/CD pipeline.
* Can reduce visibility when using ORMs.




## Approaches to Insert Unique IDs Without Auto Increment or Primary Key

- If I don’t have a primary key or auto-increment
- I usually go with a UUID strategy for global uniqueness or a sequence table for controlled numeric IDs.
- In one project, I used a sequence table with transaction locks to safely generate IDs across inserts. 
- In Node.js, I typically generate UUIDs using the `uuid` package before inserting data.

| Concern               | Recommendation                                   |
| --------------------- | ------------------------------------------------ |
| 🔄 **Uniqueness**     | Enforce uniqueness with a `UNIQUE` constraint    |
| 🔍 **Query Speed**    | Index the custom ID field                        |
| 🔒 **Collision Risk** | Use UUID or sequence to avoid duplicates         |
| 💾 **Readability**    | UUIDs are long; sequences are better for reports |

---

### **UUID (Universally Unique Identifier)**

- Best for distributed systems or when strict ordering is not needed.

#### 💡 SQL Example (MySQL):

```sql
CREATE TABLE users (
  user_id CHAR(36) NOT NULL,
  name VARCHAR(100)
);
```

#### ✅ Insert using `UUID()`:

```sql
INSERT INTO users (user_id, name)
VALUES (UUID(), 'John Doe');
```

#### ✅ From Node.js:

```js
const { v4: uuidv4 } = require('uuid');

const id = uuidv4();
await db.query('INSERT INTO users (user_id, name) VALUES (?, ?)', [id, 'John']);
```

---

### **Custom Sequence Table (Manual Counter)**

✅ Good if you need numeric IDs but don’t have auto-increment.

#### 💡 Create a sequence table:

```sql
CREATE TABLE id_sequence (
  entity_name VARCHAR(50) PRIMARY KEY,
  current_id INT NOT NULL
);

INSERT INTO id_sequence VALUES ('users', 1000);
```

#### 💡 Use Stored Procedure or App Code to Generate ID:

```sql
START TRANSACTION;

UPDATE id_sequence
SET current_id = current_id + 1
WHERE entity_name = 'users';

SELECT current_id FROM id_sequence
WHERE entity_name = 'users';

COMMIT;
```

Then use that `current_id` in your insert.

---

### **Use TIMESTAMP + RANDOM (Low collision but not guaranteed unique)**

```sql
INSERT INTO users (user_id, name)
VALUES (CONCAT(UNIX_TIMESTAMP(), '-', FLOOR(RAND() * 10000)), 'Jane Doe');
```

Not recommended for production-level uniqueness guarantees.

---

### **4. Hash-Based ID (e.g., SHA1 or MD5 of meaningful fields)**

✅ Use when you can hash stable fields like email/username + timestamp.

```sql
INSERT INTO users (user_id, name)
VALUES (SHA1(CONCAT('john@example.com', NOW())), 'John');
```

---




# Normal Form


- I normalize all schemas to at least **3NF** to ensure data integrity. 
- In performance-critical or reporting scenarios, I might denormalize or apply **BCNF**/**4NF** selectively. 
- I also analyze access patterns to balance performance and consistency.”

## ✅ **1NF – First Normal Form (Atomic Columns)**

### 🔸 Rule: No repeating groups or arrays; atomic values only.

### ❌ **Violation Example**:

| StudentID | Name | PhoneNumbers |
| --------- | ---- | ------------ |
| 1         | John | 12345, 67890 |

Here, `PhoneNumbers` has multiple values in one cell – violates 1NF.

### ✅ **1NF Fix**:

| StudentID | Name | PhoneNumber |
| --------- | ---- | ----------- |
| 1         | John | 12345       |
| 1         | John | 67890       |

---

## ✅ **2NF – Second Normal Form (No Partial Dependency)**

### 🔸 Rule: Must be in 1NF and all non-key columns should depend on the whole **composite key**.

### ❌ **Violation Example**:

| OrderID | ProductID | ProductName |
| ------- | --------- | ----------- |

Assume primary key is `(OrderID, ProductID)`
But `ProductName` depends only on `ProductID`, not the full key.

### ✅ **2NF Fix**:

Split into two tables:

1. `Orders(OrderID, ProductID)`
2. `Products(ProductID, ProductName)`

---

## ✅ **3NF – Third Normal Form (No Transitive Dependency)**

### 🔸 Rule: Must be in 2NF and **no transitive dependency** (i.e., A → B → C)

### ❌ **Violation Example**:

| EmpID | EmpName | DeptID | DeptName |
| ----- | ------- | ------ | -------- |

Here, `DeptName` depends on `DeptID`, which depends on `EmpID`.

### ✅ **3NF Fix**:

Split into:

1. `Employees(EmpID, EmpName, DeptID)`
2. `Departments(DeptID, DeptName)`

---

## ✅ **BCNF – Boyce-Codd Normal Form**

### 🔸 Rule: Every determinant must be a candidate key.

### ❌ **Violation Example**:

| Professor | Subject | Department |
| --------- | ------- | ---------- |

Assume:

* A subject is taught by multiple professors
* Each subject belongs to only one department
  So: `Subject → Department` (not a candidate key) → violates BCNF.

### ✅ **BCNF Fix**:

Split into:

1. `Subjects(Subject, Department)`
2. `ProfessorSubjects(Professor, Subject)`

---

## ✅ **4NF – Fourth Normal Form (No Multi-Valued Dependencies)**

### 🔸 Rule: No table should have two independent multi-valued facts.

### ❌ **Violation Example**:

| Student | Language | Hobby    |
| ------- | -------- | -------- |
| John    | English  | Football |
| John    | Hindi    | Football |
| John    | English  | Music    |
| John    | Hindi    | Music    |

Here, `Language` and `Hobby` are independent multi-valued attributes → violates 4NF.

### ✅ **4NF Fix**:

Split into:

1. `StudentLanguages(Student, Language)`
2. `StudentHobbies(Student, Hobby)`

---

## ✅ **5NF – Fifth Normal Form (No Join Dependency Loss)**

### 🔸 Rule: No loss of information when joining decomposed tables.

### ❌ **Example Scenario**:

You decompose a table like:

\| Supplier | Product | Region |

into:

* `SupplierProducts(Supplier, Product)`
* `ProductRegions(Product, Region)`
* `SupplierRegions(Supplier, Region)`

But when joined back, **some combinations may be incorrect**.

### ✅ 5NF ensures:

All original combinations can be derived correctly without loss or incorrect additions.

---

### **Designing a database**

1. **Requirement Analysis** – Understand what data needs to be stored.
2. **Conceptual Design (ER Diagram)** – Identify entities and their relationships.
3. **Logical Design** – Define tables, fields, data types, primary/foreign keys.
4. **Normalization** – Eliminate redundancy and improve consistency.
5. **Physical Design** – Indexes, constraints, performance tuning.
6. **Security and Backup Planning** – Secure sensitive data and define backup strategy.


## Denormalization

Denormalization is the process of combining tables or duplicating data to improve read performance. It’s typically used in:

* Read-heavy systems.
* Reporting and analytics.
* When joins negatively affect performance.











 ## One to One One to Many Many to Many relationships

- In database design, 
- I use One-to-One for tightly coupled data, 
- One-to-Many for hierarchical structures like customers and orders, and 
- Many-to-Many for flexible mappings using a join table — like users and roles, or students and courses.”



## ✅ **1. One-to-One (1:1)**

### 📌 Definition:

Each row in **Table A** is linked to exactly one row in **Table B**, and vice versa.

### 💡 Example:

* Each **User** has **one Profile**.
* Each **Passport** is assigned to **one Person**.

### 🧱 Table Design:

```sql
-- Users Table
UserID | Name
-------|---------
1      | John

-- Profiles Table
ProfileID | UserID | Bio
----------|--------|------------
1         | 1      | "Developer"
```

### 🔗 Relationship:

* `Profiles.UserID` is a **foreign key** to `Users.UserID`.
* It should also be **UNIQUE** to enforce 1:1.

```sql
ALTER TABLE Profiles ADD CONSTRAINT fk_user FOREIGN KEY (UserID) REFERENCES Users(UserID);
ALTER TABLE Profiles ADD CONSTRAINT unique_user UNIQUE (UserID);
```

---

## ✅ **2. One-to-Many (1\:N)**

### 📌 Definition:

Each row in **Table A** can relate to **many rows** in **Table B**, but each row in B belongs to only **one row** in A.

### 💡 Example:

* One **Customer** can have many **Orders**.
* One **Author** writes many **Books**.

### 🧱 Table Design:

```sql
-- Customers Table
CustomerID | Name
-----------|-------
1          | Alice

-- Orders Table
OrderID | CustomerID | Amount
--------|------------|--------
101     | 1          | 500
102     | 1          | 300
```

### 🔗 Relationship:

* `Orders.CustomerID` is a **foreign key** to `Customers.CustomerID`.

```sql
ALTER TABLE Orders ADD CONSTRAINT fk_customer FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID);
```

---

## ✅ **3. Many-to-Many (M\:N)**

### 📌 Definition:

Each row in **Table A** can relate to **many rows** in **Table B**, and vice versa.

### 💡 Example:

* A **Student** can enroll in many **Courses**.
* A **Product** can belong to many **Categories**, and a **Category** can contain many **Products**.

### 🧱 Table Design:

You must use a **junction table** to manage the relationship.

```sql
-- Students Table
StudentID | Name
----------|------
1         | John
2         | Sarah

-- Courses Table
CourseID | Title
---------|---------
101      | Math
102      | Science

-- StudentCourses Table (Junction Table)
StudentID | CourseID
----------|---------
1         | 101
1         | 102
2         | 101
```

### 🔗 Relationships:

* `StudentCourses.StudentID` → `Students.StudentID`
* `StudentCourses.CourseID` → `Courses.CourseID`

```sql
ALTER TABLE StudentCourses
  ADD FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
  ADD FOREIGN KEY (CourseID) REFERENCES Courses(CourseID);
```

## Delete and Rollback

| Option                           | Reversible? | Recommended Use Case                    |
| -------------------------------- | ----------- | --------------------------------------- |
| `START TRANSACTION` + `ROLLBACK` | ✅ Yes       | Short-term manual delete inside session |
| Soft Delete (`is_deleted`)       | ✅ Yes       | Almost always – best practice           |
| Backup Table                     | ✅ Yes       | Batch deletes or scheduled cleanups     |
| Binary Log Recovery              | ✅ Yes       | Production-level undo, needs setup      |
| Trigger for Delete Log           | ✅ Yes       | Real-time audit trail                   |
| Foreign Key Constraints          | ❌ Prevents  | Structural protection, not rollback     |


**Transaction – Delete with Rollback** 
```sql
START TRANSACTION;

DELETE FROM employees WHERE id = 5;

-- Optional: Check if delete worked
SELECT * FROM employees WHERE id = 5;

-- Now rollback the delete
ROLLBACK;

-- Confirm rollback
SELECT * FROM employees WHERE id = 5;
```

**Triggers to Log Deletes**
```sql
CREATE TABLE employees_deleted_log (
  id INT, name VARCHAR(100), deleted_at DATETIME
);

DELIMITER $$
CREATE TRIGGER log_employee_delete
BEFORE DELETE ON employees
FOR EACH ROW
BEGIN
  INSERT INTO employees_deleted_log VALUES (OLD.id, OLD.name, NOW());
END$$
DELIMITER ;
```



## VIEW

- In MySQL, a **VIEW** is a **virtual table** based on the result of an SQL query. 
- It does **not store data** itself but provides a way to simplify complex queries, improve readability, or abstract certain logic.

---

### **Syntax to Create a View**

```sql
CREATE VIEW view_name AS
SELECT columns
FROM tables
WHERE conditions;
```

---

### **Example**

Suppose you have the following tables:

```sql
CREATE TABLE Employees (
    id INT,
    name VARCHAR(50),
    department_id INT
);

CREATE TABLE Departments (
    id INT,
    dept_name VARCHAR(50)
);
```

Insert Sample Data:

```sql
INSERT INTO Employees VALUES (1, 'Alice', 101), (2, 'Bob', 102), (3, 'Carol', 101);
INSERT INTO Departments VALUES (101, 'Engineering'), (102, 'HR');
```

Create a View to show employee name and department:

```sql
CREATE VIEW EmployeeWithDepartment AS
SELECT e.name, d.dept_name
FROM Employees e
JOIN Departments d ON e.department_id = d.id;
```

Use the View:

```sql
SELECT * FROM EmployeeWithDepartment;
```

🧾 **Output:**

```
+--------+--------------+
| name   | dept_name    |
+--------+--------------+
| Alice  | Engineering  |
| Bob    | HR           |
| Carol  | Engineering  |
+--------+--------------+
```

---

### **Additional View Commands**

* **Update a View:**

  ```sql
  CREATE OR REPLACE VIEW view_name AS
  SELECT ...
  ```

* **Drop a View:**

  ```sql
  DROP VIEW view_name;
  ```

* **Check View Definition:**

  ```sql
  SHOW CREATE VIEW view_name;
  ```

---




## **Triggers vs Stored Procedures**

| Feature               | **Trigger**                                                                | **Stored Procedure**                                                               |
| --------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Definition**        | A block of SQL code that **automatically executes** in response to events. | A **named block** of SQL code that executes when **explicitly called**.            |
| **Invocation**        | Automatically triggered by **DML events** (INSERT, UPDATE, DELETE).        | Manually invoked by **application code** or a SQL command (`CALL procedure_name`). |
| **Purpose**           | Used to **enforce business rules**, auditing, or validation at DB level.   | Used for **modularizing logic**, data processing, or repeated DB operations.       |
| **Execution Context** | Tied to a **table or view**. Executes as part of the transaction.          | Independent and can include **complex logic and flow control**.                    |
| **Performance**       | Can be **hard to debug** and impact performance silently.                  | Easier to monitor, test, and optimize.                                             |
| **Parameters**        | Cannot accept parameters.                                                  | Can accept **input/output/inout parameters**.                                      |
| **Use Case Examples** | - Audit table changes<br>- Enforce constraints                             | - Batch updates<br>- Reporting<br>- Encapsulate logic                              |

---

### ✅ **When to Use Which**

* **Use Triggers** when:

  * You need **automatic actions** based on DB changes.
  * Enforcing **auditing, logging, or integrity rules**.

* **Use Stored Procedures** when:

  * You want **reusable logic** with parameters.
  * Performing **multi-step operations** (e.g., data processing, reports).

---


##  **Constraints**

- Constraints **prevent bad data** from entering the system.
- Instead of relying only on application-level validations, they **add a strong layer of enforcement at the database level**, which is more secure and consistent.
- **Constraints** are rules applied to table columns to **enforce data integrity** and **prevent invalid data** from being inserted, updated, or deleted.

---

### 📌 **Types of Constraints**

| Constraint      | Description                                                              | Example Syntax                                    |
| --------------- | ------------------------------------------------------------------------ | ------------------------------------------------- |
| **NOT NULL**    | Ensures a column **cannot have NULL values**.                            | `name VARCHAR(100) NOT NULL`                      |
| **UNIQUE**      | Ensures all values in a column are **distinct**.                         | `email VARCHAR(100) UNIQUE`                       |
| **PRIMARY KEY** | A combination of **NOT NULL + UNIQUE**. Uniquely identifies each row.    | `PRIMARY KEY (id)`                                |
| **FOREIGN KEY** | Ensures referential integrity by linking to another table’s primary key. | `FOREIGN KEY (dept_id) REFERENCES department(id)` |
| **CHECK**       | Ensures values in a column meet a **specific condition**.                | `CHECK (salary >= 0)`                             |
| **DEFAULT**     | Sets a **default value** if no value is provided.                        | `status VARCHAR(10) DEFAULT 'active'`             |

---

### ✅ **Constraint Use Cases**

* Prevent NULLs where not allowed → `NOT NULL`
* Ensure unique identifiers → `PRIMARY KEY`
* Maintain consistent references → `FOREIGN KEY`
* Enforce domain rules → `CHECK`
* Auto-assign values → `DEFAULT`

---

### 🔄 **Example Table with Constraints**

```sql
CREATE TABLE Employee (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  salary DECIMAL(10,2) CHECK (salary > 0),
  dept_id INT,
  status VARCHAR(10) DEFAULT 'active',
  FOREIGN KEY (dept_id) REFERENCES Department(id)
);
```



