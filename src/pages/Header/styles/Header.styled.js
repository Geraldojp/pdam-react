import Background from "../../../assets/background.jpg";
import styled from "styled-components";
import Button from "../../../components/styles/Button.styled";

// const styles = {
//     container: {
//         backgroundImage: `url(${Background})`,
//         maxHeight: '693px',
//         padding:'169px 75px',
//         boxSizing: 'border-box',
//     },
//     itemContainer: {
//         display: 'flex',
//         justifyContent: 'space-between',
//     },
//     title: {
//         fontFamily: 'Quicksand',
//         fontStyle: "normal",
//         fontWeight: 700,
//         fontSize: '50px',
//         color: '#FFFFFF',
//     },
//     paragraph: {
//         fontFamily: 'Quicksand',
//         fontStyle: "normal",
//         fontWeight: 400,
//         fontSize: '30px',
//         color: '#FFFFFF',
//         margin: '22px 0'
//     },
//     buttonPhone: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
//         borderRadius: '8px',
//         border: 'none',
//         width: 261,
//         height: 71,
//         backgroundColor: '#FFFFFF',
//     },
//     textButton: {
//
//         fontFamily: 'Quicksand',
//         fontStyle: "normal",
//         fontWeight: 700,
//         fontSize: '25px',
//         color: '#157599',
//         paddingLeft: 20
//     },
//     phoneIcon: {
//         width: 20,
//         height: 20,
//         alignItems: 'left',
//     },
//     leftSection: {
//         flex:1
//     },
//     rightSection: {
//         flex:2.15,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-end',
//         justifyContent: 'space-between',
//
//     }
// }
//
//
// export default styles;

export const Container = styled.div`
  background-image: url(${Background});
  max-height: 693px;
  padding: 169px 75px;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftSection = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 50px;
  color: #ffffff;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 30px;
  color: #ffffff;
  margin: 22px 0;
`;

export const ButtonPhone = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  width: 261px;
  height: 71px;
  background-color: #ffffff;
`;

export const TextButton = styled.span`
  font-weight: 700;
  font-size: 25px;
  color: #157599;
  padding-left: 20px;
`;

export const RightSection = styled.div`
  flex: 2.15;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
