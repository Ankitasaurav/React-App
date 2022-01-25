import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [initial, setInitial] = useState(false);

  const setEditingHandler = () => {
    setInitial(true);
  };

  const stopEditingHandler = () => {
    setInitial(false);
  };
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setInitial(false);
  };

  return (
    <div className="new-expense">
      {!initial && <button onClick={setEditingHandler}>Add New Expense</button>}
      {initial && <ExpenseForm onCancel = {stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
