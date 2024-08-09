import { Routes, Route } from "react-router-dom";

import Catalogue from "./pages/Catalogue";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import Login from "./pages/Login";
import NewLlm from "./pages/NewLlm";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const App = () => {
	const user = localStorage.getItem("user");

	return (
		<>
			<Routes>
				<Route path="/catalogue" element={<Catalogue user={user} />} />
				<Route path="/dashboard" element={<Dashboard user={user} />} />
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/llm/:id" element={<Details user={user} />} />
				<Route path="/llm/add" element={<NewLlm user={user} />} />
				<Route path="/matrix" element={<Matrix />} />
				<Route path="/sign-up" element={<Login />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};
export default App;
