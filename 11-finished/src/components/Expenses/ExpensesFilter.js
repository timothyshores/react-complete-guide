import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = ({ onFilterByYear, year }) => {
	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select
					onChange={({ target }) => onFilterByYear(target.value)}
					value={year}
				>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
