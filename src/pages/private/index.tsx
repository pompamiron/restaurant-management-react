import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "../../components/Header";

import OrderManagementPage from "./OrderManagementPage";
import HandleOrderPage from "./HandleOrderPage";
import CreateOrderPage from "./CreateOrderPage";
import KitchenMonitorPage from "./KitchenMonitorPage";

export interface Page {
  name: string;
  path: string; 
  element: JSX.Element
}

export const authPages: Page[] = [
	{ name: "Order Management", path: "/order-management", element: <OrderManagementPage /> },
	{ name: "Kitchen Monitor", path: "/kitchen-monitor", element: <KitchenMonitorPage /> },
];

const AuthHomePage: React.FC= () => {
	const location = useLocation();

	return (
		<>
			<Header pathname={location.pathname} authPages={authPages} />
			<Routes>
				{authPages.map((page) => (
					<Route key={page.path} path={page.path} element={page.element} />
				))}
				<Route path="/order/:orderId" element={<HandleOrderPage />} />
				<Route path="/order/create" element={<CreateOrderPage />} />
				<Route path="/*" element={<OrderManagementPage />} />
			</Routes>
		</>
	);
};

export default AuthHomePage;