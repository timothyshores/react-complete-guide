import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
	return (
		<div className="new-expense">
			<ExpenseForm onSubmitExpense={(data) => onAddExpense({ ...data })} />
		</div>
	);
};

export default NewExpense;
