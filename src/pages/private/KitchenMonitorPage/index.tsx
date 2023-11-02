import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { listOrders } from "../../../services/orders";
import { Order } from "../../../services/types";
import ItemTable from "../../../components/ItemTable";

const Container = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 1rem;
`;

const CardHeader = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  justify-item: space-between;
  display:flex;
`;

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  height: 20rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  overflow: auto;
`;

const OrderManagementPage: React.FC = () => {
	const [orderList, setOrderList] = useState<Order[]>([]);

	const fetchOrder = async () => {
		try {
			const orders = await listOrders("pending");
			setOrderList(orders);
		} catch (error) {
			console.error("Error fetching Order list:", error);
		}
	};

	// TODO: use Web Socket for more efficiency
	useEffect(() => {
		fetchOrder();

		// Periodically fetch data every 30 seconds
		const intervalId = setInterval(() => {
			fetchOrder();
		}, 30000);

		// Cleanup the interval on unmount or when the component is re-rendered
		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<>
			<Container>
				{orderList.map((order) => (
					<div key={order.id}>
						<CardContainer>
							<CardHeader>Order#{order.id}  {order.order_type}</CardHeader>
							<ItemTable items={order.items} />
						</CardContainer>
					</div>
				))}
			</Container>
		</>
	);
};

export default OrderManagementPage;
