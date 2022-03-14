import React, { useState, useContext } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

function Form() {
  const { addTransaction } = useContext(GlobalContext);
  // ----Income-----

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
    console.log(income);
  };
  //------------ Expense---------------
  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });
  const { expenseText, expenseAmount } = expense;
  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
    console.log(expense);
  };
  // -----------End Expense------------

  const onSubmitTransaction = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: uuidv4(),
      incomeText,
      incomeAmount,
    };
    console.log(newTransaction);
    addTransaction(newTransaction);
  };

  return (
    <div>
      <Forma>
        <form id="flex-forma" onSubmit={onSubmitTransaction}>
          <div>
            <select name="options" id="options">
              <option value="minus">-</option>
              <option value="plus">+</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              name="incomeText"
              placeholder="Add Description"
              id="descrption"
              autoComplete="off"
              onChange={onChangeIncome}
            />
          </div>
          <div>
            <input
              name="incomeAmount"
              type="number"
              id="value"
              placeholder="Value"
              autoComplete="off"
              onChange={onChangeIncome}
            />
          </div>
          <div>
            <button type="submit" value="Submit">
              <i className="fas fa-circle-check"></i>
            </button>
          </div>
        </form>
      </Forma>
    </div>
  );
}
export default Form;

const Forma = styled.div`
  width: 100%;
  height: 60px;
  background-color: #eaf5f3;
  border-bottom: 1px solid #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
