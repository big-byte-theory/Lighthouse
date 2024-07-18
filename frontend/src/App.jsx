import { Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";
import { loggedIn } from "./services/AuthUserService";
import Catalogue from "./pages/Catalogue";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/catalogue" element={<Catalogue />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/llm/:id" element={<Details />} />
				<Route path="/sign-up" element={<Login />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};
export default App;
