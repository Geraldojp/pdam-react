import styled from "styled-components";
import Button from "../../styles/Button.styled.js";

// const styles = {
//   container: (bgColor) => {
//     return {
//       height: 80,
//       display: "flex",
//       backgroundColor: bgColor,
//       justifyContent: "space-between",
//       alignItems: "center",
//       padding: "0 70px",
//       position: "fixed",
//       width: "100%",
//       zIndex: 1000,
//       transition: "background-color 0.5s ease-in-out",
//     };
//   },
//   menu: {
//     fontFamily: "Lato",
//     fontStyle: "normal",
//     fontWeight: "700",
//     fontSize: "20px",
//     lineHeight: "22px",
//     color: "#FFFFFF",
//     margin: "0 15px",
//     textDecoration: "none",
//   },
//   searchIcon: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 8,
//     padding: 13,
//   },
//   button: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 8,
//     border: "none",
//     fontFamily: "Lato",
//     fontStyle: "normal",
//     fontWeight: "700",
//     fontSize: "20px",
//     color: "#157599",
//     padding: 10,
//   },
//   rightSection: {
//     display: "flex",
//     alignItems: "center",
//     gap: 10,
//   },
// };
// export default styles;

export const Container = styled.div`
  height: 80px;
  display: flex;
  background-color: ${(props) => props.bgColor};
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;
  position: fixed;
  width: 100%;
  z-index: 999;
  transition: background-color 0.5s ease-in-out;
`;

export const ItemMenu = styled.a`
  font-family: Lato, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: #fff;
  margin: 0 15px;
  text-decoration: none;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SearchIcon = styled.img`
  background-color: #fff;
  border-radius: 8px;
  padding: 13px;
`;

export const CustomerButton = styled(Button)`
  background-color: #fff;
  border-radius: 8px;
  border: none;
  font-family: Lato, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #157599;
  padding: 10px;
`;
