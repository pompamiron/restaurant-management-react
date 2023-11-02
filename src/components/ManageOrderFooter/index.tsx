import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button";
import { colors } from "../../styles/colors";
import {
	OrderFooter,
	ButtonWrapper,
	PriceContainer,
} from "../styles";

interface FooterProps {
    totalCost: number;
    onSubbmit: () => Promise<void>;
    isDisabledSubmit?: boolean;
  }

const Footer: React.FC<FooterProps> = ({
	totalCost=0,
	onSubbmit,
	isDisabledSubmit=false
}) => {
	const navigate = useNavigate();
	console.log(isDisabledSubmit);
	return (
		<OrderFooter>
			<PriceContainer>
          Total Price: {totalCost.toFixed(2) || "0"}$
			</PriceContainer>
			<ButtonWrapper>
				<Button
					color={colors.danger}
					onClick={() => navigate("/order-management")}
					style={{ margin: "0.4rem", width: "12rem" }}
				>
            Cancel
				</Button>
				<Button
					color={colors.success}
					onClick={() => onSubbmit()}
					style={{ margin: "0.4rem", width: "12rem" }}
					disabled={!isDisabledSubmit}
				>
            Confirm
				</Button>
			</ButtonWrapper>
		</OrderFooter>
	);
};

export default Footer;
