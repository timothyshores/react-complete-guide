import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ items }) => {
	const [year, setYear] = useState("2021");

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter onFilterByYear={(year) => setYear(year)} year={year} />
				{items
					.filter(({ date }) => date.getFullYear().toString() === year)
					.map(({ title, amount, date, id }) => (
						<ExpenseItem key={id} title={title} amount={amount} date={date} />
					))}
			</Card>
		</div>
	);
};

export default Expenses;
