import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.div`
  width: 147px;
  height: 50px;
  margin-bottom: 24px;
  font-family: 'Saira Stencil One';
  font-size: 32px;
  line-height: 50px;
  color: #FFFFFF;
`;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #8C11BE;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  height: 18px;
  margin-top: 36px;
  font-family: 'Raleway';
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  text-decoration: none;
`;

export {
  Title,
  Container,
  StyledLink
}