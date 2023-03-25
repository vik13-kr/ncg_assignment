/** @format */

import "./App.css";
import Menubar from "./components/Menubar/Menubar";
import Step2Comp from "./components/Step2/Step2Comp";
import Step3Comp from "./components/Step3/Step3Comp";
import Step4Comp from "./components/Step4/Step4Comp";
import { useLocation } from "react-router-dom";

function App() {
	const { pathname } = useLocation();

	const renderComponent = () => {
		switch (pathname) {
			case "/step-1":
				return <div>Step1</div>;
			case "/step-2":
				return <Step2Comp />;
			case "/step-3":
				return <Step3Comp />;
			case "/step-4":
				return <Step4Comp />;
			default:
				return <div>Step1</div>;
		}
	};
	console.log(pathname);

	return (
		<div className="App">
			<Menubar />
			<div className="main-content">{renderComponent()}</div>
		</div>
	);
}

export default App;
