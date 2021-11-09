import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = ({ onSubmitExpense }) => {
	const [userInput, setUserInput] = useState({
		title: "",
		amount: "",
		date: "",
	});

	const [hideInputFields, toggleHideInputField] = useState(true);

	const titleChangeHandler = (e) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				title: e.target.value,
			};
		});
	};

	const amountChangeHandler = (e) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				amount: e.target.value,
			};
		});
	};

	const dateChangeHandler = (e) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				date: e.target.value,
			};
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const { title, amount, date } = userInput;

		onSubmitExpense({
			title,
			amount,
			date: new Date(date),
			id: Date.now(),
		});

		setUserInput({ title: "", amount: "", date: "" });
	};

	const { title, amount, date } = userInput;

	const handleAddExpense = (e) => {
		if (Object.values(userInput).every((value) => value === "")) {
			e.preventDefault();
			toggleHideInputField((prevState) => !prevState);
		} else {
			submitHandler(e);
		}
	};

	const handleCancel = (e) => {
		e.preventDefault();
		toggleHideInputField((prevState) => !prevState);
	};

	return (
		<form onSubmit={submitHandler}>
			{!hideInputFields && (
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>Title</label>
						<input type="text" value={title} onChange={titleChangeHandler} />
					</div>
					<div className="new-expense__control">
						<label>Amount</label>
						<input
							type="number"
							value={amount}
							min="0.01"
							step="0.01"
							onChange={amountChangeHandler}
						/>
					</div>
					<div className="new-expense__control">
						<label>Date</label>
						<input
							type="date"
							value={date}
							min="2019-01-01"
							max="2031-12-31"
							onChange={dateChangeHandler}
						/>
					</div>
				</div>
			)}
			<div className="new-expense__actions">
				{!hideInputFields && (
					<button type="submit" onClick={handleCancel}>
						Cancel
					</button>
				)}
				<button type="submit" onClick={handleAddExpense}>
					Add {hideInputFields && "New"} Expense
				</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
