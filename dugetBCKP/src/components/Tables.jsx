import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";
import IncomeTransaction from "./IncomeTrasactions";
import ExpenseTransaction from "./ExpenseTransactions";

function Tables() {
  const { incomeTransactions } = useContext(GlobalContext);
  const { expenseTransactions } = useContext(GlobalContext);

  return (
    <div className="container">
      <div className="d-flex justify-content-around p-5 ">
        <IncomeTable>
          <div className="table-hover">
            <div id="incomeTableHead">
              <span id="th">Income</span>
            </div>

            <ul>
              {incomeTransactions.map((incomeTransaction) => (
                <IncomeTransaction
                  key={incomeTransaction.id}
                  incomeTransaction={incomeTransaction}
                />
              ))}
            </ul>
          </div>
        </IncomeTable>
        <ExpenseTable>
          <div className=" table-hover">
            <div id="expenseTableHead" className="d-flex justify-start">
              <span id="th">Expense</span>
            </div>
            <div id="output">
              <ul>
                {expenseTransactions.map((expenseTransaction) => (
                  <ExpenseTransaction
                    key={expenseTransaction.id}
                    expenseTransaction={expenseTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </ExpenseTable>
      </div>
    </div>
  );
}

export default Tables;

const IncomeTable = styled.div``;
const ExpenseTable = styled.div``;
