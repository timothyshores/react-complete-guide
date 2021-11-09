import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ items }) => {
	const [year, setYear] = useState("2021");

	const filteredExpenses = items.filter(
		({ date }) => date.getFullYear().toString() === year
	);

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter onFilterByYear={(year) => setYear(year)} year={year} />
				<ExpensesList expenses={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
