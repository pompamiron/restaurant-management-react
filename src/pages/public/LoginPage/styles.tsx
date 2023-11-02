import styled from 'styled-components';

export const Header = styled.h2`
  font-weight: 300;
  text-align: center;
`;

export const LoginFormWrap = styled.div`
  background-color: #fff;
  max-width: 50rem;
  margin: 5rem auto; /* Center the element horizontally */
  text-align: center;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 30px 50px 0px rgba(0, 0, 0, 0.2);
  
  /* Responsive styles */
  @media (max-width: 768px) {
    max-width: 90%;
    margin: 10% auto;
    box-shadow: none;
  }
`;

export const LoginForm = styled.div`
  padding: 2rem;

  > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  height: 60px;
  line-height: 60px;
  border-radius: 4px;
  
  &::placeholder {
    color: #8a8b8e;
  }
`;

export const TextInput = styled(Input)`
  width: 100%;
  margin: 1 0rem;
  padding: 1rem;
  border: 1px solid #c2c0ca;
  font-style: normal;
  font-size: 16px;

  &:focus {
    border-color: #3ca9e2;
  }
`;

export const SubmitButton = styled.button`
  border: none;
  display: block;
  background-color: #3ca9e2;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 18px;
  text-align: center;
  width: 100%;
  padding: 1.5rem;
  &:hover {
    background-color: #329dd5;
  }
`;
