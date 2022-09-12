import styled from "styled-components";

const Button = styled.button`
  height: 46px;
  width: 326px;
  background-color: ${(props) => typeof props.active !== 'boolean' || props.active ? "#A328D6" : "#888"};
  color: #FFFFFF;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 18px;
  padding: 14px;
  border-radius: 5px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default Button;