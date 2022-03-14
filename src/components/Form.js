import React, { useState, useContext, Component } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

function Form() {
  const { addIncomeTransaction } = useContext(GlobalContext);
  const { addExpenseTransaction } = useContext(GlobalContext);
  const [incButtonColor, setincButtonColor] = useState(false);

  //------------- Income----------------

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const { incomeText, incomeAmount } = income;

  //------------ Expense---------------
  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });
  const { expenseText, expenseAmount } = expense;

  // -----------End Expense------------

  const onChangeHandler = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
    setExpense({ ...expense, [e.target.id]: e.target.value });
  };

  const onSubmitTransaction = (e) => {
    e.preventDefault();
    const SelectedOption = document.getElementById("options").value;
    if (incomeText !== "" || expenseText !== "") {
      if (incomeAmount >= 1 || expenseAmount >= 1) {
        if (SelectedOption == "plus") {
          const newTransaction = {
            id: uuidv4(),
            incomeText,
            incomeAmount,
          };
          addIncomeTransaction(newTransaction);
          setIncome({
            incomeText: "",
            incomeAmount: 0,
          });
        } else if (SelectedOption == "minus") {
          {
            const newTransaction = {
              id: uuidv4(),
              expenseText,
              expenseAmount,
            };

            addExpenseTransaction(newTransaction);
            setIncome({
              incomeText: "",
              incomeAmount: 0,
            });
          }
        }
      }
    }
  };

  return (
    <div>
      <Forma className="forma">
        <form name="forma" id="flex-forma" onSubmit={onSubmitTransaction}>
          <div id="selectOption">
            <select
              name="options"
              id="options"
              onChange={() =>
                document.getElementById("options").value === "plus"
                  ? setincButtonColor(true)
                  : setincButtonColor(false)
              }
            >
              <option value="minus" onChange={() => setincButtonColor(false)}>
                -
              </option>
              <option value="plus">+</option>
            </select>
          </div>
          <div>
            <input
              value={incomeText}
              className="descrption"
              type="text"
              name="incomeText"
              placeholder="Add Description"
              id="expenseText"
              autoComplete="off"
              onChange={onChangeHandler}
              maxLength="50"
              defaultValue="Reset"
            />
          </div>
          <div>
            <input
              value={incomeAmount}
              id="expenseAmount"
              name="incomeAmount"
              type="number"
              className="value"
              placeholder="Value"
              autoComplete="off"
              onChange={onChangeHandler}
              defaultValue="Reset"
            />
          </div>
          <div>
            <button type="submit" value="Submit">
              {incButtonColor ? (
                <i
                  className="fas fa-circle-check buttonBlue"
                  id="submitColor"
                ></i>
              ) : (
                <i
                  className="fas fa-circle-check submitButton"
                  id="submitColor"
                ></i>
              )}
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
