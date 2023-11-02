import axios from "axios";

import API_URL from "../config";

import { User, AccessToken } from "./types";

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  user: User;
  access_token: AccessToken;
};

export const login = async ({
	email,
	password,
}: LoginRequest): Promise<LoginResponse> => {
	const requestData: LoginRequest = { email, password };

	try {
		const response = await axios.post<LoginResponse>(
			`${API_URL}/api/login`,
			requestData
		);

		localStorage.setItem("user_name", response.data.user.name);
		localStorage.setItem("access_token", response.data.access_token);

		return response.data;
	} catch (error) {
		throw error;
	}
};

export const logout = async (): Promise<void> => {
	try {
		const accessToken: string|null = localStorage.getItem("access_token");
		const response = await axios.post(`${API_URL}/logout`, null, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};
