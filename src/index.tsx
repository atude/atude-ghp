import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "typeface-roboto";
import Drawer from "./components/Drawer";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
	return (
		<div style={{ overflowX: "hidden" }}>
			<ThemeProvider>
				<Drawer />
			</ThemeProvider>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
