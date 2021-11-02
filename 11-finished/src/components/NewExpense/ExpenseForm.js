import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
    // const [title, setTitle] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');

    const [userInput, setUserInput] = useState({title: '', amount: '', date:''})
    

	const titleChangeHandler = e => {
        setUserInput({
            title: e.target.value,
            ...userInput
        });
    };
    
    const amountChangeHandler = e => {
        setUserInput({
            amount: e.target.value,
            ...userInput
        });
    };
    
    const dateChangeHandler = e => {
        setUserInput({ date: e.target.value , 
            ...userInput
        });
	};

	return (
		<form>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" onChange={titleChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" min="0.01" step="0.01" onChange={amountChangeHandler/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" min="2021-01-01" max="2031-12-31" onChange={dateChangeHandler/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
