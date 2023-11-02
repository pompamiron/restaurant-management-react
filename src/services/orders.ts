/* eslint-disable no-useless-catch */
import axios from "axios";
import API_URL from "../config";
import { Order, OrderStatus } from "./types";

// Service functions for orders
export const listOrders = async (status?: OrderStatus): Promise<Order[]> => {
	try {
		const accessToken = localStorage.getItem("access_token");
		const response = await axios.get(`${API_URL}/api/orders`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
			params: { status },
		});
		return response.data.data as Order[];
	} catch (error) {
		throw error;
	}
};

export const showOrder = async (orderId: number) => {
	try {
		const accessToken: string | null = localStorage.getItem("access_token");
		const response = await axios.get(`${API_URL}/api/orders/${orderId}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		return response.data.data as Order;
	} catch (error) {
		throw error;
	}
};

export const createOrder = async (orderData: Order) => {
	try {
		const accessToken: string | null = localStorage.getItem("access_token");
		const response = await axios.post(`${API_URL}/api/orders`, orderData, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const updateOrder = async (orderId: number, updatedOrderData: Order) => {
	try {
		const accessToken: string | null = localStorage.getItem("access_token");

		const response = await axios.put(
			`${API_URL}/api/orders/${orderId}`,
			updatedOrderData,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response.data; // Use response.data to access the response body
	} catch (error) {
		throw error;
	}
};
