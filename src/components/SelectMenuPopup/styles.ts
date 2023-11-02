import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Header = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.text};
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background-color: white;
  position: relative;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 50rem;
  justify-content: center;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const StyledTableHead = styled.thead`
  background-color: #f2f2f2;
  border-bottom: 2px solid #ddd;
`;

export const StyledTableHeader = styled.th`
  padding: 10px;
  text-align: left;
`;

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const StyledTableCell = styled.td`
  padding: 10px;
`;

export const AddButton = styled.button`
  background-color: ${colors.success};
  color: white;
  padding: 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

export const CloseButton = styled.button`
  background-color: ${colors.danger};
  color: white;
  padding: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

export const BottonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;