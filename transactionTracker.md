

class TransactionTracker {
  constructor() {
    this.transactions = [];
  }

  /**
   * Add a new transaction
   * @param {{ date: string | Date, amount: number }} transaction
   */
  addTransaction(transaction) {
    if (
      !transaction ||
      typeof transaction.amount !== "number" ||
      (!transaction.date && !(transaction.date instanceof Date))
    ) {
      throw new Error("Invalid transaction object");
    }

    const dateObj =
      transaction.date instanceof Date
        ? transaction.date
        : this.parseDate(transaction.date);

    // Out-of-order transaction check
    const lastTx = this.transactions[this.transactions.length - 1];
    if (lastTx && dateObj < lastTx.date) {
      throw new Error(
        `Transaction date ${dateObj.toDateString()} is before last transaction date ${lastTx.date.toDateString()}`
      );
    }

    // Insufficient balance check
    const projectedBalance = this.getBalance() + transaction.amount;
    if (projectedBalance < 0) {
      throw new Error(
        `Insufficient balance. Current: ${this.getBalance()}, attempted transaction: ${transaction.amount}`
      );
    }

    this.transactions.push({ date: dateObj, amount: transaction.amount });
  }

  /**
   * Return all transactions
   * @returns {Array<{date: Date, amount: number}>}
   */
  getAllTransactions() {
    return [...this.transactions];
  }

  /**
   * Clear all transactions
   */
  clearTransactions() {
    this.transactions = [];
  }

  /**
   * Calculate total account balance
   * @returns {number}
   */
  getBalance() {
    return this.transactions.reduce((sum, t) => sum + t.amount, 0);
  }

  /**
   * Classify expenses into small, medium, large
   * @returns {{ small: number, medium: number, large: number }}
   */
  classifyExpenses() {
    const categories = { small: 0, medium: 0, large: 0 };
    this.transactions
      .filter(t => t.amount < 0)
      .forEach(expense => {
        const absAmount = Math.abs(expense.amount);
        if (absAmount < 500) categories.small += expense.amount;
        else if (absAmount < 1000) categories.medium += expense.amount;
        else categories.large += expense.amount;
      });
    return categories;
  }

  /**
   * Get monthly summary for a given month/year (format 'MM/YYYY')
   * @param {string} monthYear
   * @returns {{ income: number, expenses: number, balance: number }}
   */
  getMonthlySummary(monthYear) {
    const [month, year] = monthYear.split("/").map(Number);

    const monthlyTransactions = this.transactions.filter(t => {
      return t.date.getMonth() + 1 === month && t.date.getFullYear() === year;
    });

    const income = monthlyTransactions
      .filter(t => t.amount > 0)
      .reduce((sum, t) => sum + t.amount, 0);

    const expenses = monthlyTransactions
      .filter(t => t.amount < 0)
      .reduce((sum, t) => sum + t.amount, 0);

    return { income, expenses, balance: income + expenses };
  }

  /**
   * Parse dd/MM/yyyy into Date
   * @param {string} dateStr
   * @returns {Date}
   */
  parseDate(dateStr) {
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day);
  }
}

// Export the class for use in Node.js
module.exports = { TransactionTracker };
