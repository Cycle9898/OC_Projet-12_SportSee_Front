import React from "react";
import ReactDOM from "react-dom/client";
import "./style/CSS/normalize.css";
import "./style/SASS/main.scss";
import AppRouter from "./Router";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<AppRouter />
	</React.StrictMode>
);
