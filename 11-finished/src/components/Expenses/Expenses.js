import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ items }) => {
	const [year, setYear] = useState("2021");
	const [expenses, setExpenses] = useState(items);

	const handleFilterByYear = (year) => {
		console.log("Expenses.js filterByYear", year);
		setYear(year);
		// setExpenses(expenses.filter((expense) => expense.date.year === year));
	};

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter onFilterByYear={handleFilterByYear} year={year} />
				{expenses.map(({ title, amount, date }) => (
					<ExpenseItem title={title} amount={amount} date={date} />
				))}
			</Card>
		</div>
	);
};

export default Expenses;
