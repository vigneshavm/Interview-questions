# NodeJs questions
1. How do you handle scalability issues in Node.js applications?
2. Could you explain how you ensure data consistency across these distributed services in your Node.js applications?
3. How do you handle potential pitfalls of callback hell in Node.js?
4. Promises are indeed a way to handle callback hell. What about async/await?
5. How do you manage security concerns in Node.js applications?

# AWS questions
1. How do you handle cost optimization in AWS environments?
2. Could you explain strategies for cost optimization in AWS environments?
3. How do you manage security best practices in AWS environments?
4. Could you explain how you manage disaster recovery planning in AWS environments?
5. How do you approach monitoring and logging in AWS environments?
6. Could you explain how you handle infrastructure as code (IaC) in AWS environments?


# Coding exercise
```
You are tasked with developing a system for a busy restaurant to manage its waiting list. The restaurant uses a unique seating strategy: when a table becomes available, they seat the group that has been waiting the longest AND can fit at the table. If no waiting group can fit the available table, it remains empty until a suitable group arrives. Implement a function processWaitingList(waitingGroups, availableTables) that takes two parameters: 1. waitingGroups: A queue of integers representing the size of each waiting group in the order they arrived. 2. availableTables: An array of integers representing the capacity of each available table. The function should return an array of integers representing the size of the groups that were seated, in the order they were seated. If a table remains empty, represent it with a 0 in the output array.

EXAMPLE 1
Input:waitingGroups: [4, 2, 6, 3, 5]
availableTables: [4, 6, 2, 8]

Output:[4, 6, 2, 5]

Explanation:First, a group of 4 is seated at the table for 4. Then, a group of 6 is seated at the table for 6. The group of 2 is seated at the table for 2. Finally, the group of 5 is seated at the table for 8. The group of 3 remains waiting.

EXAMPLE 2
Input:waitingGroups: [2, 3, 4]
availableTables: [2, 4, 6]

Output:[2, 3, 4]

Explanation:All groups are seated in order: 2 at the table for 2, 3 at the table for 4, and 4 at the table for 6.

Requirements
1. Implement the seating logic as described
2. Use appropriate data structures (queue for waiting groups, array for tables)
3. Optimize for efficiency, considering both time and space complexity
4. Handle edge cases, such as when there are more tables than groups or vice versa
5. Ensure the function works correctly for various input sizes and group/table combinations
```
