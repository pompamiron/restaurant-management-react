import React from "react";
import { useParams } from "react-router-dom";

import OrderManagementPage from "../HandleOrderPage";

const OrderPage: React.FC = () => {
	const { orderId } = useParams();
	const isCreatePage = !orderId;

	return (
		<OrderManagementPage isCreatePage={isCreatePage} />
	);
};

export default OrderPage;