/** @format */

import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import { step3_data } from "./data";

charts(FusionCharts);

const dataSource = {
	chart: {
		caption: "Sectors and Profit",
		yaxisname: "Sum of Profits (€million)",
		xaxisname: "Industrial Sector",
		showvalues: "1",
		numberprefix: "€",
		theme: "candy",
	},

	data: step3_data,
};

function Step3Comp() {
	return (
		<div>
			<ReactFusioncharts
				type="bar3d"
				width="100%"
				height="100%"
				dataFormat="JSON"
				dataSource={dataSource}
			/>
		</div>
	);
}

export default Step3Comp;
