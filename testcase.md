// transactionTracker.test.js
const { TransactionTracker } = require("../transactionTracker");

describe("TransactionTracker Full Feature Test Suite", () => {
  let tracker;

  beforeEach(() => {
    tracker = new TransactionTracker();
  });

  test("should add transactions and calculate balance correctly", () => {
    tracker.addTransaction({ date: "01/01/2025", amount: 200 });
    tracker.addTransaction({ date: "01/03/2025", amount: 1000 });
    tracker.addTransaction({ date: "01/05/2025", amount: -500 });
    tracker.addTransaction({ date: "15/05/2025", amount: 1500 });
    tracker.addTransaction({ date: "01/06/2025", amount: -2000 });

    expect(tracker.getBalance()).toBe(1150);
    expect(tracker.getAllTransactions().length).toBe(5);
  });

  test("should throw error for out-of-order transaction", () => {
    tracker.addTransaction({ date: "01/01/2025", amount: 200 });
    tracker.addTransaction({ date: "01/03/2025", amount: 1000 });

    expect(() =>
      tracker.addTransaction({ date: "01/02/2025", amount: 1 })
    ).toThrow("Transaction date");
  });

  test("should throw error for transaction causing negative balance", () => {
    tracker.addTransaction({ date: "01/01/2025", amount: 200 });
    tracker.addTransaction({ date: "01/03/2025", amount: 1000 });
    tracker.addTransaction({ date: "01/05/2025", amount: -50 });

    expect(() =>
      tracker.addTransaction({ date: "01/12/2025", amount: -10000 })
    ).toThrow("Insufficient balance");
  });

  test("should classify spending patterns correctly", () => {
    tracker.addTransaction({ date: "01/01/2025", amount: -200 });   // small
    tracker.addTransaction({ date: "01/03/2025", amount: -1000 });  // medium
    tracker.addTransaction({ date: "01/05/2025", amount: -2000 });  // large

    const patterns = tracker.classifyExpenses();
    expect(patterns).toEqual({ small: -200, medium: -1000, large: -2000 });
  });

  test("should calculate monthly summary correctly", () => {
    tracker.addTransaction({ date: "01/05/2025", amount: -500 });
    tracker.addTransaction({ date: "15/05/2025", amount: 1500 });
    tracker.addTransaction({ date: "01/06/2025", amount: -2000 });
    tracker.addTransaction({ date: "01/06/2025", amount: 1650 });

    const may = tracker.getMonthlySummary("05/2025");
    expect(may).toEqual({ income: 1500, expenses: -500, balance: 1000 });

    const june = tracker.getMonthlySummary("06/2025");
    expect(june).toEqual({ income: 1650, expenses: -2000, balance: -350 });
  });

  test("should clear all transactions", () => {
    tracker.addTransaction({ date: "01/01/2025", amount: 200 });
    tracker.addTransaction({ date: "01/03/2025", amount: 1000 });

    tracker.clearTransactions();

    expect(tracker.getAllTransactions()).toEqual([]);
    expect(tracker.getBalance()).toBe(0);
    expect(tracker.classifyExpenses()).toEqual({ small: 0, medium: 0, large: 0 });
  });

  test("should allow valid transactions after previous transactions", () => {
    tracker.addTransaction({ date: "01/01/2025", amount: 200 });
    tracker.addTransaction({ date: "01/03/2025", amount: 1000 });
    tracker.addTransaction({ date: "01/05/2025", amount: -50 });

    tracker.addTransaction({ date: "15/05/2025", amount: 1500 });

    expect(tracker.getBalance()).toBe(2650);
    expect(tracker.getAllTransactions().length).toBe(4);
  });
});
