import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
	const submitExpenseHandler = (data) => onAddExpense({ ...data });

	return (
		<div className="new-expense">
			<ExpenseForm onSubmitExpense={submitExpenseHandler} />
		</div>
	);
};

export default NewExpense;
