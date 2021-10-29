import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ expenses }) {
	return (
		<div className="expenses">
			{expenses.map(({ title, date, amount }) => (
				<ExpenseItem title={title} date={date} amount={amount} />
			))}
		</div>
	);
}

export default Expenses;
