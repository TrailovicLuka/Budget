import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function ExpenseTransactions({ expenseTransaction }) {
  const [hover, setHover] = useState(false);
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li
      key={expenseTransaction.id}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <i
          className="fa-solid fa-rectangle-xmark hoverTrash"
          onClick={() => deleteTransaction(expenseTransaction.id)}
        ></i>
      ) : null}
      <span id="td">{expenseTransaction.expenseText}</span>
      <span className="li-expense">{expenseTransaction.expenseAmount}</span>
    </li>
  );
}

export default ExpenseTransactions;
