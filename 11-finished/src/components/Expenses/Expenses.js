import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ items }) => {
	const [year, setYear] = useState("2021");

	const filteredExpenses = items.filter(
		({ date }) => date.getFullYear().toString() === year
	);

	let expensesContent = <p>No expenses found</p>;

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map(({ title, amount, date, id }) => (
			<ExpenseItem key={id} title={title} amount={amount} date={date} />
		));
	}

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter onFilterByYear={(year) => setYear(year)} year={year} />
				{expensesContent}
			</Card>
		</div>
	);
};

export default Expenses;
