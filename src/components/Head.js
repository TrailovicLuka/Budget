import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";
import IncomeTransactions from "./IncomeTrasactions";

function formatingNumb(n) {
  var parts = n.toString().split(".");
  const numberPart = parts[0];
  const decimalPart = parts[1];
  const thousands = /\B(?=(\d{3})+(?!\d))/g;
  return (
    numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "")
  );
}

function Head() {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let mY = new Date();
  let monthName = months[mY.getMonth()];
  const current = new Date();
  const date = `${current.getFullYear()}`;
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeAmount
  );
  const expenseAmounts = expenseTransactions.map(
    (expenseTransaction) => expenseTransaction.expenseAmount
  );

  const totalIncome =
    incomeAmounts.reduce((acc, item) => (acc += +item), 0).toFixed(1) * 1;

  const totalExpense =
    expenseAmounts.reduce((acc, item) => (acc += +item), 0).toFixed(1) * 1;

  const incomeFormat = totalIncome - totalExpense;

  return (
    <div>
      <Wrap>
        <BlockHeader className="d-flex">
          <div className="pt-3 pb-3 top-date">
            Available Budget in {monthName} {date}
          </div>
          <div id="money-count">
            <h1>
              {" "}
              {totalIncome > totalExpense ? "+" : ""}
              {formatingNumb(incomeFormat)}.00
            </h1>
          </div>
          <div className="income-top mt-3 ">
            <div>Income</div>

            <div>+ {totalIncome.toFixed(2)}</div>
          </div>
          <div className="expenses-top mt-3">
            <div>Expenses</div>

            <div>-{totalExpense.toFixed(2)} </div>
          </div>
        </BlockHeader>

        <ImageHeader src="/img/header-budget.png" />
      </Wrap>
    </div>
  );
}

export default Head;

const Wrap = styled.div`
  width: 100%;
  height: 280px;
  background: rgb(152, 74, 22);
  background: radial-gradient(
    circle,
    rgba(152, 74, 22, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
`;
const ImageHeader = styled.img`
  width: 300px;
  position: fixed;
  right: 145px;
  top: 0;
  padding-bottom: 50px;
  z-index: 0;
`;
const BlockHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 400px;
  color: white;
  z-index: 10;
`;
