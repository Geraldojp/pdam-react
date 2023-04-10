import styled from 'styled-components';
import Button from '../../styles/Button.styled.js';

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
    font-size: 18px;
    line-height: 22px;
    color: ${(props) =>
        props.activeMenu === props.index ? '#fff' : 'rgba(255, 255, 255, 0.8)'};
    margin: 0 15px;
    text-decoration: none;
    border-bottom: ${(props) =>
        props.activeMenu === props.index ? '3px solid white' : ''};
    padding-bottom: 8px;
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
