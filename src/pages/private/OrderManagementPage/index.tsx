import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { listOrders } from "../../../services/orders";
import CardOrder from "../../../components/OrderCard";
import { Order } from "../../../services/types";
import { colors } from "../../../styles/colors";
import Button from "../../../components/Button";

const CardContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 1rem;
`;

const OrderWrapper = styled.div`
  &:hover {
    background-color: ${colors.primary};
  }
`;

const ButtonWrapper = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const OrderManagementPage: React.FC = () => {
	const navigate = useNavigate();
	const [orderList, setOrderList] = useState<Order[]>([]);

	useEffect(() => {
		const fetchOrder = async () => {
			try {
				const orders = await listOrders("pending");
				setOrderList(orders);
			} catch (error) {
				console.error("Error fetching Order list:", error);
			}
		};
		fetchOrder();
	}, []);

	return (
		<>
			<ButtonWrapper>
				<Button
					color={colors.success}
					onClick={() => navigate("/order/create")}
					style={{ margin: "0.25rem", width: "12rem", fontSize: "1.25rem" }}
				>
          Add New Order
				</Button>
			</ButtonWrapper>
			<CardContainer>
				{orderList.map((order) => (
					<OrderWrapper key={order.id} onClick={() => navigate(`/order/${order.id}`)}>
						<CardOrder order={order} />
					</OrderWrapper>
				))}
			</CardContainer>
		</>
	);
};

export default OrderManagementPage;
