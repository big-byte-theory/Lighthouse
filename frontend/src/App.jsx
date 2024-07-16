import { Routes, Route } from "react-router-dom";

import Catalogue from "./pages/Catalogue";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/catalogue" element={<Catalogue />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};
export default App;
