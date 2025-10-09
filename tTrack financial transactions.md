Simple financial tracker_

You are going to build a simple tool to track financial transactions and execute computations on top of them.


Requirements
You can write a class or multiple functions to satisfy the requirements
You are free to use stateless or stateful functions
The term “function” is used to refer generally to a function or a method
Write unit tests for each function to verify its behavior
Prioritize completing the exercise in full  and, for any variables, functions, methods and class names, use a mix of snake case or prefixing with “the_”


Exercise 
Track transactions
Write a function to track transactions
It should accept a transaction as input and add it to a list of transactions
Transactions should be represented as objects with properties:
date: either a string or a Date object
amount: a number representing the monetary value of the transaction
A positive value represents income
A negative value represents expenses
From now on, we will use this list of transactions as our baseline (dates are in format dd/MM/yyyy):
{ date: '01/01/2025', amount: 200 }
{ date: '01/03/2025', amount: 1000 }
{ date: '01/05/2025', amount: -500 }
{ date: '15/05/2025', amount: 1500 }
{ date: '01/06/2025', amount: -2000 }
{ date: '02/07/2025', amount: 150 }
{ date: '02/07/2025', amount: 1000 }
{ date: '05/07/2025', amount: 500 }
{ date: '31/07/2025', amount: -500 }
{ date: '30/08/2025', amount: -200 }

Retrieve and clear transactions
Write a function which returns an array/list containing all the transactions tracked in the previous step
Write a function which allows clearing the list of transactions

Calculate balance
Write a function that can calculate the balance of the account
➡️ In the baseline, the account balance should be: 1150


Handle out-of-order transactions and insufficient balance
Modify the function which tracks transactions so that it throws/raises an error when:
A transaction has a date that is before the date of the last transaction, for example:
➡️ { date: '01/02/2025', amount: 1 }
A transaction has a negative amount that would bring the account balance below zero, for example:
➡️ { date: '01/12/2025', amount: -10000 }


Identify spending patterns
Create a function to classify spending patterns, by grouping expenses into small, medium and large
Small expenses are below 500 (in absolute value)
Medium expenses are below 1000
Large expenses are greater than or equal to 1000 
Return an object/dictionary containing the overall amount of such expenses for each category. 
In the baseline, the output should be:
➡️ { small: -200, medium: -1000, large: -2000 }

Monthly income and expense analysis
Create a function to calculate income, expenses and balance of a provided month
The function should take as input a month such as '07/2025' and return an object/dictionary containing: expenses, income, and balance. 
In this case, using the baseline data, the output should be:
➡️ { income: 1650, expenses: -500, balance: 1150 }
	
