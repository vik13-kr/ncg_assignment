/** @format */

import React from "react";
import "../../styles/menubar.css";
import { Link } from "react-router-dom";

function Menubar() {
	return (
		<div className="menubar-container">
			<div className="logo-container">NCG</div>
			<div className="menu_items_container">
				<span>
					<Link to={`/step-1`}>Step 1</Link>
				</span>
				<span>
					<Link to={`/step-2`}>Step 2</Link>
				</span>
				<span>
					<Link to={`/step-3`}>Step 3</Link>
				</span>
				<span>
					<Link to={`/step-4`}>Step 4</Link>
				</span>
				{/* <span>Step 2</span>
				<span>Step 3</span>
				<span>Step 4</span> */}
			</div>
		</div>
	);
}

export default Menubar;
