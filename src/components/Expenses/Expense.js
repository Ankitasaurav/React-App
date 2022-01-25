import React, { useState } from "react";

import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
  // const expenses = props.items;

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (single) => single.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter defaultYear={filteredYear} onFilter={filterHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filtered={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
