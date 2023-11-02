import axios from "axios";

import API_URL from "../config";

// Service functions for order items
export const createOrderItem = async (orderItemData: {
  menu_item_id: number;
  quantity: number;
  description?: string;
}) => {
  try {
    const accessToken = localStorage.getItem("access_token");
    const response = await axios.post(`${API_URL}/order-items`, orderItemData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateOrderItem = async (
  accessToken: string,
  orderItemId: number,
  updatedOrderItemData: {
    quantity?: number;
    description?: string;
  },
) => {
  try {
    const response = await axios.put(
      `${API_URL}/order-items/${orderItemId}`,
      updatedOrderItemData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
