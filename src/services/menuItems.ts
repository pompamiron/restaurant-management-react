import axios from "axios";

import API_URL from "../config";

import { MenuItem } from "./types";

// Service functions for menu items
export const listMenuItems = async (): Promise<MenuItem[]> => {
  const accessToken = localStorage.getItem('access_token');

  const response = await axios.get(`${API_URL}/api/menu-items`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
