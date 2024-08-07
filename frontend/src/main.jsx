import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/styles/main.scss";
import "svgxuse/svgxuse.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>
);
