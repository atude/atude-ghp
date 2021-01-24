import React from "react";
import "./App.css";
import DrawerCustom from "./components/Drawer.js";
import "typeface-roboto";

const App = () => {
	return (
		<div style={{ overflowX: "hidden" }}>
			{/* 
				DrawerCustom renders everything, check in Drawer.js 
				for redirects into content pages. 
			*/}
			<DrawerCustom />
		</div>
	);
};

export default App;
