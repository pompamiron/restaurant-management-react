import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import EditableItemTable from "../../../components/EditableItemTable";
import { createOrder, showOrder, updateOrder } from "../../../services/orders";
import { Item, MenuItem, OrderType, OrderStatus,PaymentStatus } from "../../../services/types";
import SelectMenuPopup from "../../../components/SelectMenuPopup";
import Footer from "../../../components/ManageOrderFooter";

import { Container, TextInput, Label, StyledSelect, FormSection, ButtonWrapper, AddButton } from "./styles";

interface OrderManagementPageProps {
  isCreatePage?: boolean;
}

const OrderManagementPage: React.FC<OrderManagementPageProps> = ({
	isCreatePage,
}) => {
	const { orderId } = useParams();
	const [isSelectMenuPopupOpen, setIsSelectMenuPopupOpen] = useState(false);
	const [items, setItems] = useState<Item[]>([]);
	const [description, setDescription] = useState<string>("");
	const [orderType, setOrderType] = useState<OrderType>("Dine-In");
	const [status, setStatus] = useState<OrderStatus>("pending");
	const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("unpaid");
	const navigate = useNavigate();

	useEffect(() => {
		const fetchOrder = async () => {
			try {
				if (!isCreatePage && orderId) {
					const orderData = await showOrder(parseInt(orderId, 10));
					if (orderData.items) setItems(orderData.items);
					setDescription(orderData.description ?? "");
					setOrderType(orderData.order_type);
					setStatus(orderData.status);
					setPaymentStatus(orderData.payment_status);
				}
			} catch (error) {
				console.error("Error fetching order:", error);
			}
		};

		fetchOrder();
	}, [isCreatePage, orderId]);

	const handleCreateOrder = async () => {
		try {
			const orderData = {
				description,
				order_type: orderType,
				status,
				payment_status: paymentStatus,
				items,
			};
			await createOrder(orderData);
			navigate("/order-management");
		} catch (error) {
			console.error("Error creating order:", error);
		}
	};

	const calculateTotalPrice = () => {
		let totalPrice = 0;
		for (const item of items) {
			totalPrice += item.menu_item.price * item.quantity;
		}
		return totalPrice;
	};

	const updateOrderAndItems = async () => {
		try {
			if (orderId) {
				const orderData = {
					description,
					order_type: orderType,
					status,
					payment_status: paymentStatus,
					items,
				};

				await updateOrder(parseInt(orderId, 10), orderData);
				navigate("/order-management");
			}
		} catch (error) {
			console.error("Error updating order:", error);
		}
	};

	const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDescription(e.target.value);
	};

	const handleOrderTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setOrderType(e.target.value as OrderType);
	};

	const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setStatus(e.target.value as OrderStatus);
	};

	const handlePaymentStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setPaymentStatus(e.target.value as PaymentStatus);
	};

	const handleRemoveRow = (rowIndex: number) => {
		const updatedItems = [...items];
		updatedItems.splice(rowIndex, 1);
		setItems(updatedItems);
	};
  
	const handleUpdateDescription = (rowIndex: number, newValue: string) => {
		const updatedItems = [...items];
		updatedItems[rowIndex].description = newValue;
		setItems(updatedItems);
	};
  
	const handleUpdateQuantity = (rowIndex: number, newValue: string) => {
		const updatedItems = [...items];
		updatedItems[rowIndex].quantity = parseInt(newValue, 10); // Convert newValue to a number if needed
		setItems(updatedItems);
	};

	const handleOpenSelectMenuPopup = () => {
		setIsSelectMenuPopupOpen(true);
	};

	const handleCloseSelectMenuPopup = () => {
		setIsSelectMenuPopupOpen(false);
	};

	const handleAddItem = (selectedMenuItem: MenuItem) => {
		const newItem: Item = {
			id: undefined, 
			order_id: undefined, 
			menu_item_id: selectedMenuItem.id,
			quantity: 1, 
			description: "", 
			menu_item: selectedMenuItem,
		};
  
		setItems((prevItems) => [...prevItems, newItem]);
	};

	return (
		<>
			<Container>
				<h3>Order# {orderId}</h3>
				<FormSection>
					<Label>Description:</Label>
					<TextInput
						type="text"
						placeholder="Description"
						value={description}
						onChange={handleDescriptionChange}
					/>
				</FormSection>
				<FormSection>
					<Label>Order Type:</Label>
					<StyledSelect value={orderType} onChange={handleOrderTypeChange}>
						<option value="Dine-In">Dine-In</option>
						<option value="To-Go">To-Go</option>
					</StyledSelect>
				</FormSection>
				<FormSection>
					<Label>Status:</Label>
					<StyledSelect value={status} onChange={handleStatusChange}>
						<option value="pending">Pending</option>
						<option value="completed">Completed</option>
						<option value="canceled">Canceled</option>
					</StyledSelect>
				</FormSection>
				<FormSection>
					<Label>Payment Status:</Label>
					<StyledSelect value={paymentStatus} onChange={handlePaymentStatusChange}>
						<option value="unpaid">Unpaid</option>
						<option value="paid">Paid</option>
					</StyledSelect>
				</FormSection>
				<EditableItemTable items={items} onUpdateQuantity={handleUpdateQuantity} onUpdateDescription={handleUpdateDescription} onRemoveRow={handleRemoveRow} />
				<ButtonWrapper>
					<AddButton onClick={()=> handleOpenSelectMenuPopup()}> Add Menu </AddButton>
				</ButtonWrapper>
				{isSelectMenuPopupOpen && 
        <SelectMenuPopup onAddItem={handleAddItem} onClose={handleCloseSelectMenuPopup}/>}
			</Container>
			<Footer totalCost={calculateTotalPrice()} onSubbmit={isCreatePage?handleCreateOrder : updateOrderAndItems} isDisabledSubmit={Boolean(items.length)}/>
		</>
	);
};

export default OrderManagementPage;
