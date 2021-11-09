import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ expenses }) => {
	if (expenses.length === 0) {
		return <h2 className="expenses-list__fallback">Found no expenses</h2>;
	}

	return (
		<ul className="expenses-list">
			{expenses.map(({ title, amount, date, id }) => (
				<ExpenseItem key={id} title={title} amount={amount} date={date} />
			))}
		</ul>
	);
};

export default ExpensesList;
