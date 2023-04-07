import logo from '../assets/logoPdam.svg'
import searchIcon from '../assets/searchIcon.svg'
import styles from "./NavBar.styles.js";
import {useEffect, useState} from "react";

const MENU = [
    {href: '#', label: 'Beranda'},
    {href: '#', label: 'Tentang'},
    {href: '#', label: 'Galeri'},
    {href: '#', label: 'Blog'}
]
export const NavBar = () => {

    const [bgColor, setBgColor] = useState("transparent")
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setBgColor("#157599")
            } else {
                setBgColor("transparent")
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    return (
        <div style={styles.container(bgColor)}>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div>
                {MENU.map((item) => (
                    <a href={item.href} style={styles.menu}>{item.label}</a>
                ))}
            </div>
            <div style={styles.rightSection}>
                <img src={searchIcon} style={styles.searchIcon}/>
                <button style={styles.button}>Customer Service</button>
            </div>
        </div>
    )
}