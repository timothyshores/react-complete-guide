import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = ({ data }) => {
	return (
		<div className="chart">
			{data.map(({ value, label }) => (
				<ChartBar value={value} maxValue={null} label={label} key={label} />
			))}
		</div>
	);
};

export default Chart;
