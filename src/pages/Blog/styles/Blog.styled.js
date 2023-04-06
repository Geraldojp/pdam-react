import styled from "styled-components";
import Button from "../../../components/styles/Button.styled.js";

export const Container = styled.div`
  background-color: #f3f3f3;
  padding-bottom: 138px;
`;

export const TItleSection = styled.div`
    text-align: center;
  margin-bottom: 1rem;
  padding-top: 82px;
`;

export const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #3F3F3F;
  margin-bottom: 1rem;
`

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #3F3F3F;
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 70px;
`

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

export const PillButton = styled(Button)`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  max-width: 130px;
  border-radius: 10px;
  text-align: center;
  margin: auto;
`
