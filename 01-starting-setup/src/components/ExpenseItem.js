import "./ExpenseItem.css";

function ExpenseItem({ date, title, amount }) {
	const month = date.toLocaleString("en-US", { month: "long" });
	const year = date.getFullYear();
	const day = date.toLocaleString("en-US", { day: "2-digit" });

	return (
		<div className="expense-item">
			<div>{month}</div>
			<div>{year}</div>
			<div>{day}</div>

			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${amount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
