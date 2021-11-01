import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

function Expenses({ expenses }) {
	return (
		<Card className="expenses">
			{expenses.map(({ title, date, amount }) => (
				<ExpenseItem title={title} date={date} amount={amount} />
			))}
		</Card>
	);
}

export default Expenses;
