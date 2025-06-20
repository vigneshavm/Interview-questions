
- [WHERE Vs HAVING Vs GROUP BY](#WHERE-Vs-HAVING-Vs-GROUP-BY)
- [`INNER JOIN` vs `LEFT JOIN` vs `RIGHT JOIN`](#INNER-JOIN-vs-LEFT-JOIN-vs-RIGHT-JOIN)
- [Primary Key vs Foreign Key vs Composite Key](#Primary-Key-vs-Foreign-Key-vs-Composite-Key)


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

