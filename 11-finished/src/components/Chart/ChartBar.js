import "./ChartBar.css";

const ChartBar = ({ label, value, maxValue }) => {
	let barFillHeight =
		maxValue > 0 ? `${Math.round(value / maxValue) * 100}%` : "0%";

	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div
					className="chart_bar__fill"
					style={{ height: barFillHeight }}
				></div>
			</div>
			<div className="chart-bar__label">{label}</div>
		</div>
	);
};

export default ChartBar;
