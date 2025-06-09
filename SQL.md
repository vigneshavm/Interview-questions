
 ## **What is the difference between `WHERE` and `HAVING`?**

   - `WHERE` filters rows **before grouping**, while `HAVING` filters **after grouping** (used with `GROUP BY`).

   ## **What is the difference between `INNER JOIN`, `LEFT JOIN`, and `RIGHT JOIN`?**

   - `INNER JOIN`: returns matching rows.
   - `LEFT JOIN`: all rows from the left table + matched rows from right.
   - `RIGHT JOIN`: all rows from right + matched rows from left.

 ## **What is a primary key and a foreign key?**

   - `Primary key`: uniquely identifies a record in a table.
   - `Foreign key`: refers to the primary key in another table to maintain referential integrity.

 ## **What does `GROUP BY` do in SQL?**

   - It groups rows sharing a property so aggregate functions like `SUM`, `COUNT`, or `AVG` can be applied to each group.

 ## **What is normalization?**

   - A process of organizing data to reduce redundancy and improve data integrity — involves dividing tables into smaller ones and defining relationships.

---



 ## **What is the difference between `UNION` and `UNION ALL`?**

   - `UNION` removes duplicates, while `UNION ALL` keeps all records including duplicates.

    ## **How do you find duplicate rows in a table?**

   ```sql
   SELECT column1, COUNT(*) 
   FROM table_name 
   GROUP BY column1 
   HAVING COUNT(*) > 1;
   ```

    ## **How can you update data in one table based on another?**

   ```sql
   UPDATE t1
   SET t1.column = t2.value
   FROM table1 t1
   JOIN table2 t2 ON t1.id = t2.id;
   ```

    ## **What is a subquery vs. a correlated subquery?**

   > Subquery: executes independently and returns a result.
   > Correlated subquery: depends on the outer query for its value — runs per row.

 ## **Explain indexes. What types of indexes are there?**

> Indexes speed up read queries.

* B-tree index (default),
* Bitmap index (useful for low-cardinality),
* Full-text index (search in text),
* Composite index (multiple columns).

---


 ## **What is a CTE (Common Table Expression) and when would you use it?**

> A temporary result set defined with `WITH` — useful for simplifying complex joins or recursive queries.

 ## **How do you write a recursive query using CTE?**

```sql
WITH RECURSIVE cte AS (
  SELECT id, parent_id FROM categories WHERE parent_id IS NULL
  UNION ALL
  SELECT c.id, c.parent_id FROM categories c
  JOIN cte ON c.parent_id = cte.id
)
SELECT * FROM cte;
```

 ## **How would you find the second highest salary?**

```sql
SELECT MAX(salary)
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
```

 ## **How to detect and avoid SQL injection?**

> Always use parameterized queries or ORM methods that escape input. Avoid string concatenation in queries.

 ## **Explain window functions with an example.**

```sql
SELECT name, department, salary,
  RANK() OVER (PARTITION BY department ORDER BY salary DESC) as dept_rank
FROM employees;
```














## 🧩 **Sample Tables**

We’ll use these two tables throughout:

### 📘 `employees`

| id | name    | department | salary |
| -- | ------- | ---------- | ------ |
| 1  | Alice   | HR         | 60000  |
| 2  | Bob     | IT         | 80000  |
| 3  | Charlie | IT         | 75000  |
| 4  | Dave    | HR         | 50000  |
| 5  | Eve     | Finance    | 90000  |
| 6  | Frank   | IT         | 80000  |

### 📗 `departments`

| dept\_id | dept\_name |
| -------- | ---------- |
| 1        | HR         |
| 2        | IT         |
| 3        | Finance    |

---

## ✅ 1. **Find the second highest salary**

```sql
SELECT MAX(salary) AS second_highest
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
```

📌 **Output:**

| second\_highest |
| --------------- |
| 80000           |

---

## ✅ 2. **List employees and their department names using JOIN**

```sql
SELECT e.name, d.dept_name
FROM employees e
JOIN departments d ON e.department = d.dept_name;
```

📌 **Output:**

| name    | dept\_name |
| ------- | ---------- |
| Alice   | HR         |
| Bob     | IT         |
| Charlie | IT         |
| Dave    | HR         |
| Eve     | Finance    |
| Frank   | IT         |

---

## ✅ 3. **Find duplicate salaries**

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

## ✅ 4. **Get total salary by department**

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

## ✅ 5. **Use a window function to rank salaries within departments**

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

## ✅ 6. **Recursive CTE – Build employee hierarchy (self-join style)**

Assume a simplified table:

### 📘 `employee_hierarchy`

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

