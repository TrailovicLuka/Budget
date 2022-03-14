import React, { createContext, useReducer } from "react";
import IncomeTransactions from "../components/IncomeTrasactions";
import AppReducer from "./AppReducer";
const initialState = {
  incomeTransactions: [
    { id: 1, incomeText: "Car sold", incomeAmount: 15000 },
    { id: 2, incomeText: "Salary", incomeAmount: 5000 },
    { id: 3, incomeText: "Bonus", incomeAmount: 1300 },
  ],
  expenseTransactions: [{ id: 1, expenseText: "Rent", expenseAmount: 1000 }],
};

export const GlobalContext = createContext(initialState);
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTransaction = (incomeTransaction) => {
    dispatch({
      type: "ADD_INCOME",
      payload: incomeTransaction,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
