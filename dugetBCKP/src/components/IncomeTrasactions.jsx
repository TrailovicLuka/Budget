import React from "react";

function IncomeTransactions({ incomeTransaction }) {
  return (
    <li key={incomeTransaction.id}>
      <span id="td">{incomeTransaction.incomeText}</span>
      <span className="li-expense">{incomeTransaction.incomeAmount}</span>
    </li>
  );
}

export default IncomeTransactions;
