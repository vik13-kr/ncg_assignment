/** @format */

import React from "react";
import { step2_data } from "./data";
import Chart from "react-apexcharts";

function Step2Comp() {
	const series = [
		{
			name: "Sum of Sales (€million)",
			data: step2_data.map((item) => parseFloat(item.value)),
		},
	];

	const options = {
		chart: {
			// height: 350,
			type: "line",
			zoom: {
				enabled: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: "straight",
			width: 4,
		},

		markers: {
			size: 6,
		},

		grid: {
			row: {
				colors: ["#0072AA", "transparent"], // takes an array which will be repeated on columns
				opacity: 0.1,
			},
		},
		xaxis: {
			categories: step2_data.map((item) => item.label),
			title: {
				text: "Year",
			},
		},
		yaxis: {
			title: {
				text: "Sum of Sales (€million)",
			},
		},

		legend: {
			show: true,
		},
	};

	return (
		<div>
			<Chart options={options} series={series} type="line" height={500} />
		</div>
	);
}

export default Step2Comp;
