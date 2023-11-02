import React from "react";
import axios from "axios";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import Header from "../components/Header";
import API_BASE_URL from "../config";
import App from "../App";

jest.mock("axios");

describe("Private pages test", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it("should render the header if have access token", async () => {
		localStorage.setItem("user_name", "username");
		localStorage.setItem("access_token", "token");

		await act(async () => {
			render(<Header pathname={"order-management"} authPages={[]} />);
		});
    
		expect(screen.getByText("Logout")).toBeInTheDocument();
	});

	it("should render the auth header if have access token", async () => {
		localStorage.setItem("user_name", "username");
		localStorage.setItem("access_token", "token");

		await act(async () => {
			render(<Header pathname={"order-management"} authPages={[]} />);
		});
    
		expect(screen.getByText("Logout")).toBeInTheDocument();
	});

	it("should render a list of orders", async () => {
		const mockedUsedNavigate = jest.fn();
		localStorage.setItem("user_name", "username");
		localStorage.setItem("access_token", "token");

		jest.mock("react-router-dom", () => ({
			...jest.requireActual("react-router-dom") as any,
			useNavigate: () => mockedUsedNavigate,
		}));

		await act(async () => {
			render(<App />);
		});

		expect(axios.get).toHaveBeenCalledTimes(1);
		expect(axios.get).toHaveBeenCalledWith(`${API_BASE_URL}/api/orders`, {"headers": {"Authorization": "Bearer token"}, "params": {"status": "pending"}});

		expect(screen.getByText("Add New Order")).toBeInTheDocument();
	});
});
