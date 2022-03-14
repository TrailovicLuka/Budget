import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeTransactions({ incomeTransaction }) {
  const [hover, setHover] = useState(false);
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li
      key={incomeTransaction.id}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <i
          className="fa-solid fa-rectangle-xmark hoverTrash"
          onClick={() => deleteTransaction(incomeTransaction.id)}
        ></i>
      ) : null}
      <span id="td">{incomeTransaction.incomeText}</span>
      <span className="li-expense">{incomeTransaction.incomeAmount}</span>
    </li>
  );
}

export default IncomeTransactions;
