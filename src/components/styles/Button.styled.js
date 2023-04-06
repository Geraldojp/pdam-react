import styled from "styled-components";

const Button = styled.button`
  background: ${props => props.bg};
  border: ${props => props.border};
  border-radius: ${props=> props.radius || '8px'};
  padding: ${props => props.padding};
  color: ${props => props.color};
  cursor: pointer;
`
export default Button