import React, { useEffect, useState } from "react";

import { listMenuItems } from "../../services/menuItems";
import { MenuItem } from "../../services/types";

import {
	StyledTable,
	StyledTableHead,
	StyledTableHeader,
	StyledTableRow,
	StyledTableCell,
	AddButton,
	CloseButton,
	PopupOverlay, 
	PopupContent,
	BottonWrapper
} from "./styles";

interface SelectMenuPopupProps {
  onClose: () => void;
  onAddItem: (selectedMenuItem: MenuItem) => void;
}

const SelectMenuPopup: React.FC<SelectMenuPopupProps> = ({
	onClose,
	onAddItem,
}) => {
	const tableHeaders = ["Item", "Price", "Select"];
	const [menuList, setMenuList] = useState<MenuItem[]>([]);

	useEffect(() => {
		const fetchOrder = async () => {
			try {
				const menuList = await listMenuItems();
				setMenuList(menuList);
			} catch (error) {
				console.error("Error fetching menu list:", error);
			}
		};

		fetchOrder();
	}, []);

	return (
		<PopupOverlay>
			<PopupContent>
				<StyledTable>
					<StyledTableHead>
						<tr>
							{tableHeaders.map((header, index) => (
								<StyledTableHeader key={index}>{header}</StyledTableHeader>
							))}
						</tr>
					</StyledTableHead>
					<tbody>
						{menuList.map((menu, rowIndex) => (
							<StyledTableRow key={rowIndex}>
								<StyledTableCell>{menu.name}</StyledTableCell>
								<StyledTableCell>{menu.price}</StyledTableCell>
								<StyledTableCell>
									<AddButton onClick={() => {
										onAddItem(menu);
										onClose();
									}}>
                        Select
									</AddButton>
								</StyledTableCell>
							</StyledTableRow>
						))}
					</tbody>
				</StyledTable>
				<BottonWrapper>
					<CloseButton onClick={() => onClose()}> Close </CloseButton>
				</BottonWrapper>
			</PopupContent>
		</PopupOverlay>
	);
};

export default SelectMenuPopup;
