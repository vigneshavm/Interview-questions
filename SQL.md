## **WHERE Vs HAVING Vs**

- `WHERE` filters rows **before grouping**,
- `HAVING` filters **after grouping** (used with `GROUP BY`).
- `GROUP BY` It groups rows sharing a property so aggregate functions like `SUM`, `COUNT`, or `AVG` can be applied to each group.


-- Employees with salary > 50000
```sql
SELECT * FROM employees
WHERE salary > 50000;
```

-- Departments with average salary > 45000
```sql
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 45000;
```

Combining WHERE + HAVING
-- Only consider employees with salary > 30000, then group and filter
```sql
SELECT department, COUNT(*) AS total, AVG(salary) AS avg_sal
FROM employees
WHERE salary > 30000
GROUP BY department
HAVING AVG(salary) > 45000;
```
