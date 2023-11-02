import React from "react";

import {
	StyledTable,
	StyledTableHead,
	StyledTableHeader,
	StyledTableRow,
	StyledTableCell,
	RemoveButton,
	EditableInput,
	EditableSelect,
} from "../styles";
import { Item } from "../../services/types";

interface TableProps {
  items: Item[];
  onRemoveRow: (rowIndex: number) => void;
  onUpdateDescription: (rowIndex: number, newValue: string) => void;
  onUpdateQuantity: (rowIndex: number, newValue: string) => void;
}

const EditableItemTable: React.FC<TableProps> = ({
	items,
	onRemoveRow,
	onUpdateDescription,
	onUpdateQuantity,
}) => {
	const tableHeaders = ["Item", "Description", "Quantity", "Price", "Actions"];

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
						<StyledTableCell>{item.menu_item.name}</StyledTableCell>
						<StyledTableCell>
							<EditableInput
								type="text"
								value={item.description}
								onChange={(e) => onUpdateDescription(rowIndex, e.target.value)}
							/>
						</StyledTableCell>
						<StyledTableCell>
							<EditableSelect
								value={item.quantity.toString()}
								onChange={(e) => onUpdateQuantity(rowIndex, e.target.value)}
							>
								{
									Array.from({ length: 20 }, (_, index) => (
										<option key={index + 1} value={index + 1}>
											{index + 1}
										</option>
									))
								}
							</EditableSelect>
						</StyledTableCell>
						<StyledTableCell>{item.menu_item.price}</StyledTableCell>
						<StyledTableCell>
							<RemoveButton onClick={() => onRemoveRow(rowIndex)}>Remove</RemoveButton>
						</StyledTableCell>
					</StyledTableRow>
				))}
			</tbody>
		</StyledTable>
	);
};

export default EditableItemTable;
