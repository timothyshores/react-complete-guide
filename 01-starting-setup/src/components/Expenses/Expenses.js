import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
	return (
		<Card className="expenses">
			{expenses.map(({ title, date, amount }) => (
				<ExpenseItem title={title} date={date} amount={amount} />
			))}
		</Card>
	);
};

export default Expenses;
