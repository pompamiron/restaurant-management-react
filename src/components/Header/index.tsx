import React from "react";
import styled from "styled-components";

import { colors } from "../../styles/colors";
import { Page } from "../../pages/private";

interface HeaderProps {
    pathname: string;
    authPages: Page[];
}

interface StyledLinkProps {
  colorlink: string;
}
  

const StyledLink = styled.a<StyledLinkProps>`
  color: ${(props) => (props.colorlink)};
  text-decoration: none;
  margin-right: 20px;
`;

const HeaderContainer = styled.header`
  background-color: ${colors.primary};
  color: ${colors.text};;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const HeaderTitle = styled.h3`
  margin: 0;
`;

const HeaderLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
`;

const HeaderLink = styled.li`
  margin-right: 20px;
`;

const LogoutButton = styled.button`
  border: none;
  display: block;
  background-color: #3ca9e2;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  width: 150px;
  padding: 16px;
  &:hover {
    background-color: #329dd5;
  }
`;

const Header : React.FC<HeaderProps> = ({pathname, authPages}: HeaderProps) => {
	const userName = localStorage.getItem("user_name");

	const handleLogout = async () => {
		localStorage.setItem("user_name", "");
		localStorage.setItem("access_token", "");
		window.location.reload();
	};

	return (
		<HeaderContainer>
			<HeaderContent>
				<HeaderTitle>Hello {userName}!</HeaderTitle>
				<HeaderLinks>
					{authPages.map((page) => (
						<HeaderLink key={page.path}>
							<StyledLink href={page.path} colorlink={pathname === page.path? colors.secondary : colors.text}>
								{page.name}
							</StyledLink>
						</HeaderLink>
					))}
					<LogoutButton onClick={() => handleLogout()}>Logout</LogoutButton>
				</HeaderLinks>
			</HeaderContent>
		</HeaderContainer>
	);
};
  
export default Header;
