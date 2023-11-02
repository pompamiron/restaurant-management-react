import styled from 'styled-components';

import { colors } from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

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

export const ButtonWrapper = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddButton = styled.button`
  background-color: ${colors.success};
  color: white;
  padding: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

