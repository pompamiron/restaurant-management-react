import React from "react";
import { render, screen } from "@testing-library/react";
import LoginPage from "../pages/public/LoginPage";
import { act } from "react-dom/test-utils";

jest.mock("axios");

describe("LoginPage", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it("should render the login form", async () => {
		await act(async () => {
			render(<LoginPage />);
		});
    
		expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();

	});
});
