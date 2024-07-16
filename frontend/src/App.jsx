import { Routes, Route } from "react-router-dom";

import Catalogue from "./pages/Catalogue";
import Dashboard from "./pages/Dashboard";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/catalogue" element={<Catalogue />} />
			</Routes>
		</>
	);
};
export default App;
