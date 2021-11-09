import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
	const [formHidden, toggleFormHidden] = useState(true);

	const handleFormHiddenToggle = (e) => {
		toggleFormHidden((prevState) => !prevState);
	};

	let formContent = (
		<button onClick={handleFormHiddenToggle}>Add New Expense</button>
	);

	if (!formHidden) {
		formContent = (
			<ExpenseForm
				onSubmitExpense={(data) => onAddExpense({ ...data })}
				toggleFormHidden={handleFormHiddenToggle}
			/>
		);
	}

	return <div className="new-expense">{formContent}</div>;
};

export default NewExpense;
