import React, { useState } from "react";

import { login } from "../../../services/auth";

import { LoginForm, TextInput, LoginFormWrap, Header, SubmitButton} from "./styles";

const LoginPage: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
  

	const handleLogin = async () => {
		try {
			await login({ email, password });
			window.location.reload();
		} catch (error) {
			setError("Login failed. Please check your email and password.");
			console.error("Login failed:", error);
		}
	};

	return (
		<LoginFormWrap>
			<Header>Login</Header>
			<LoginForm>
				<TextInput
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextInput
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{error && <p style={{ color: "red" }}>{error}</p>}
				<SubmitButton onClick={handleLogin}>Login</SubmitButton>
			</LoginForm>
		</LoginFormWrap>
	);
};

export default LoginPage;
