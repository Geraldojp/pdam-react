import { useEffect, useState } from "react";
import {
  Container,
  CustomerButton,
  ItemMenu,
  RightSection,
  SearchIcon,
} from "./styles/NavBar.styled.js";
import logo from "../../assets/logoPdam.svg";
import searchIcon from "../../assets/searchIcon.svg";

const MENU = [
  { href: "#", label: "Beranda" },
  { href: "#", label: "Tentang" },
  { href: "#", label: "Galeri" },
  { href: "#", label: "Blog" },
];
export const NavBar = () => {
  const [bgColor, setBgColor] = useState("transparent");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setBgColor("#157599");
      } else {
        setBgColor("transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container bgColor={bgColor}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        {MENU.map((item) => (
          <ItemMenu href={item.href}>{item.label}</ItemMenu>
        ))}
      </div>
      <RightSection>
        <SearchIcon src={searchIcon} />
        <CustomerButton>Customer Service</CustomerButton>
      </RightSection>
    </Container>
  );
};

export default NavBar;
