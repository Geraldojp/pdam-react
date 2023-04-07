// import Card from "../index.jsx"
import styled from "styled-components";
import Button from "../../styles/Button.styled.js";

export const Container = styled.div`
  background: #efefef;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 30px 30px 17px 30px;
`;

export const Text = styled.p`
  width: 300px;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: #000000;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ButtonCard = styled(Button)`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;
