/** @format */

import React from "react";
import { step4_data } from "./data";
import "../../styles/Step4.css";

function Step4Comp() {
	return (
		<div className="table-container">
			<table id="table">
				<thead>
					<tr>
						<th>Year</th>
						<th>Sum of Sales (€million)</th>
						<th>Sum of Capex (€million)</th>
						<th>Sum of Profits (€million)</th>
						<th>Sum of Market cap (€million)</th>
					</tr>
				</thead>
				<tbody>
					{step4_data?.map((item) => (
						<tr key={item.Year}>
							<td className="first-column">{item.Year}</td>
							<td>{item.Sales}</td>
							<td>{item.Capex}</td>
							<td>{item.Profits}</td>
							<td>{item.Market_Cap}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Step4Comp;
