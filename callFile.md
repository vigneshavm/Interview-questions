const { TransactionTracker } = require("./transactionTracker");

const tracker = new TransactionTracker();

// Add baseline transactions
tracker.addTransaction({ date: "01/01/2025", amount: 200 });    // income
tracker.addTransaction({ date: "01/03/2025", amount: 1000 });   // income
tracker.addTransaction({ date: "01/05/2025", amount: -500 });   // expense
tracker.addTransaction({ date: "15/05/2025", amount: 1500 });   // income
tracker.addTransaction({ date: "01/06/2025", amount: -2000 });  // expense

console.log("All Transactions:", tracker.getAllTransactions());
console.log("Balance:", tracker.getBalance()); 
// Output: 1150 (baseline)

console.log("Spending patterns:", tracker.classifyExpenses()); 
// Output: { small: 0, medium: -500, large: -2000 }

console.log("Monthly summary May 2025:", tracker.getMonthlySummary("05/2025")); 
// Output: { income: 1500, expenses: -500, balance: 1000 }

console.log("Monthly summary June 2025:", tracker.getMonthlySummary("06/2025")); 
// Output: { income: 0, expenses: -2000, balance: -2000 }

// Attempt invalid transaction (insufficient balance)
try {
  tracker.addTransaction({ date: "01/07/2025", amount: -5000 });
} catch (e) {
  console.error(e.message); // Insufficient balance ...
}

// Attempt out-of-order transaction
try {
  tracker.addTransaction({ date: "01/04/2025", amount: 100 });
} catch (e) {
  console.error(e.message); // Transaction date ... is before last transaction date ...
}
