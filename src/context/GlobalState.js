import React, { createContext, useReducer, useEffect } from "react";
import IncomeTransactions from "../components/IncomeTrasactions";
import ExpenseTransactions from "../components/IncomeTrasactions";
import AppReducer from "./AppReducer";
const initialState = {
  incomeTransactions: JSON.parse(localStorage.getItem("listOfIncome")) || [],
  expenseTransactions: JSON.parse(localStorage.getItem("listOfExpenses")) || [],
};

export const GlobalContext = createContext(initialState);
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    localStorage.setItem(
      "listOfIncome",
      JSON.stringify(state.incomeTransactions)
    );
    localStorage.setItem(
      "listOfExpenses",
      JSON.stringify(state.expenseTransactions)
    );
  });

  const addIncomeTransaction = (incomeTransaction) => {
    dispatch({
      type: "ADD_INCOME",
      payload: incomeTransaction,
    });
  };
  const addExpenseTransaction = (expenseTransaction) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expenseTransaction,
    });
  };
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncomeTransaction,
        addExpenseTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
