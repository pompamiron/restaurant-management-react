import styled from 'styled-components';

import { colors } from '../styles/colors';

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  border-radius: 4px;
  
  &::placeholder {
    color: #8a8b8e;
  }
`;

export const TextInput = styled(Input)`
  width: 100%;
  margin: 1 0rem;
  padding: 5px;
  border: 1px solid #c2c0ca;
  font-style: normal;
  font-size: 16px;

  &:focus {
    border-color: #3ca9e2;
  }
`;

export const FormSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  width: 200px;
  margin-right: 10px;
`;

export const StyledSelect = styled.select`
  padding: 5px;
  width: 100%;
`;

export const SelectButton = styled.select`
  padding: 5px;
`;

export const SwitchButton = styled.select`
  padding: 5px;
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

export const EditableInput = styled.input`
  width: 100%;
  padding: 5px;
`;

export const EditableSelect = styled.select`
  width: 100%;
  padding: 5px;
`;

export const RemoveButton = styled.button`
  background-color: #ff4136;
  color: white;
  padding: 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

export const OrderFooter = styled.div`
  background-color: ${colors.primary};
  position: fixed; /* Set to fixed position */
  bottom: 0; /* Position at the bottom of the viewport */
  width: 100%; /* Take up the full width of the viewport */
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  text-align: center;
`;

export const PriceContainer = styled.div`
  font-size: 30px;
  font-weight: bold;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
