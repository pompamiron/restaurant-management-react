import React from "react";

import {
	StyledTable,
	StyledTableHead,
	StyledTableHeader,
	StyledTableRow,
	StyledTableCell,
} from "../styles";
import { Item } from "../../services/types";

interface TableProps {
  items: Item[];
}

const EditableItemTable: React.FC<TableProps> = ({
	items,
}) => {
	const tableHeaders = ["Item", "Description", "Quantity"];

	return (
		<StyledTable>
			<StyledTableHead>
				<tr>
					{tableHeaders.map((header, index) => (
						<StyledTableHeader key={index}>{header}</StyledTableHeader>
					))}
				</tr>
			</StyledTableHead>
			<tbody>
				{items.map((item, rowIndex) => (
					<StyledTableRow key={rowIndex}>
						<StyledTableCell>{item?.menu_item?.name}</StyledTableCell>
						<StyledTableCell>{item.description}</StyledTableCell>
						<StyledTableCell>{item.quantity}</StyledTableCell>
					</StyledTableRow>
				))}
			</tbody>
		</StyledTable>
	);
};

export default EditableItemTable;
