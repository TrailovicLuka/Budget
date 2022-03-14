import React from "react";

function ExpenseTransactions({ expenseTransaction }) {
  return (
    <li key={expenseTransaction.id}>
      <span id="td">{expenseTransaction.expenseText}</span>
      <span className="li-expense">{expenseTransaction.expenseAmount}</span>
    </li>
  );
}

export default ExpenseTransactions;
