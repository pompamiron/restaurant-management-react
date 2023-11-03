import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/public/LoginPage";
import PrivateHomePage from "./pages/private";

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const storedAccessToken = localStorage.getItem("access_token");
		setIsAuthenticated(Boolean(storedAccessToken));
	}, []);
	return (
		<Router>
			<Routes>
				<Route path="/*" element={isAuthenticated? <PrivateHomePage />: <LoginPage />} />
			</Routes>
		</Router>
	);
}

export default App;
