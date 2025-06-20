
- [WHERE Vs HAVING Vs GROUP BY](#WHERE-Vs-HAVING-Vs-GROUP-BY)
- [`INNER JOIN` vs `LEFT JOIN` vs `RIGHT JOIN`](#INNER-JOIN-vs-LEFT-JOIN-vs-RIGHT-JOIN)
- [Primary Key vs Foreign Key vs Composite Key](#Primary-Key-vs-Foreign-Key-vs-Composite-Key)
- [`UNION` and `UNION ALL`](#UNION-and-UNION-ALL)
- [Subquery vs Correlated Subquery](#Subquery-vs-Correlated-Subquery)
- [Normalization](#Normalization)
- [Indexes](#Indexes)  - [Index Drawbacks](#Index-Drawbacks)
- [Common Table Expression](#Common-Table-Expression)


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


