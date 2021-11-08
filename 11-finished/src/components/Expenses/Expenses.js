import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ items }) => {
	const [expenses, setItems] = useState(items);

	const handleFilterByYear = (year) => {
		console.log("Expenses.js filterByYear", year);
	};

	return (
		<div>
			<ExpensesFilter onFilterByYear={handleFilterByYear} />
			<Card className="expenses">
				<ExpenseItem
					title={expenses[0].title}
					amount={expenses[0].amount}
					date={expenses[0].date}
				/>
				<ExpenseItem
					title={expenses[1].title}
					amount={expenses[1].amount}
					date={expenses[1].date}
				/>
				<ExpenseItem
					title={expenses[2].title}
					amount={expenses[2].amount}
					date={expenses[2].date}
				/>
				<ExpenseItem
					title={expenses[3].title}
					amount={expenses[3].amount}
					date={expenses[3].date}
				/>
			</Card>
		</div>
	);
};

export default Expenses;
