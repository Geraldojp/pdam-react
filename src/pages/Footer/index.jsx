import React from 'react'
import logoPDAM from "../../assets/logoPdam2.svg"
import facebookIcon from "../../assets/facebook.svg"
import twitterIcon from "../../assets/twitter.svg"
import instagramIcon from "../../assets/instagram.svg"
import youtubeIcon from "../../assets/youtube.svg"
import locationIcon from "../../assets/carbon_location-filled.svg"
import waIcon from "../../assets/dashicons_whatsapp.svg"
import emailIcon from "../../assets/ic_round-email.svg"
import styles from './styles/Footer.styled'

import IconLink from '../../components/IconLink/IconLink'

const ICON_PROPS = [
    {src: facebookIcon, href: "https://facebook.com"},
    {src: twitterIcon, href: "https://twitter.com"},
    {src: instagramIcon, href: "https://instagram.com"},
    {src: youtubeIcon, href: "https://youtube.com"}

]

const MENU = [
    {href: "#", label: "Home"},
    {href: "#", label: "Tentang Kami"},
    {href: "#", label: "Blog"},
    {href: "#", label: "Karir"},
    {href: "#", label: "Galeri"}
]

const KONTAK = [
    {
        src: locationIcon,
        text: "Jl. Gajah Mada No.3, Jetis Selatan, Purwodadi, Kec.Purwodadi, Kabupaten Grobogan,Jawa Tengah 58111"
    },
    {src: waIcon, text: "+62 896 666 666"},
    {src: emailIcon, text: "hallo@purwatirtadharma.com"}
]

function Footer() {
    return (
        <div className="footer" style={styles.container}>
            <div style={styles.containerSection}>
                <div style={{...styles.section,alignItems:"flex-end"}}>
                    <img style={{...styles.logoPDAM}} src={logoPDAM}/>
                </div>
                <div style={{...styles.section,alignItems:"flex-end"}}>
                    <h3 style={styles.title}>NAVIGASI</h3>
                </div>
                <div style={{...styles.section,alignItems:"flex-end"}}>
                    <h3 style={styles.title}>KONTAK</h3>
                </div>
            </div>
            <div style={styles.containerSection}>
                <div style={styles.section}>
                    <div className='left' style={{
                        display: "flex",
                        alignItems: "flex-start",
                        flexDirection: "column",
                        marginTop: "0.75em",
                        gap: "1rem"
                    }}>
                        <p style={styles.description}>
                            PDAM Purwa Tirta Dharma
                            Menyediakan air bersih yang
                            sehat yang mampu memberikan
                            kontribusi PAD pada kabupaten
                            Grobogan
                        </p>
                        <div style={styles.Icon}>
                            {
                                ICON_PROPS.map((item, idx) => {
                                    return (
                                        <IconLink key={idx}
                                                  iconSrc={item.src}
                                                  to={item.href}
                                                  style={{width: "30px"}}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div style={styles.section}>
                    <div style={{display: "flex", alignItems: "flex-start", flexDirection: "column", gap: "0.75em"}}>
                        {MENU.map((item, idx) => (
                            <a href={item.href} key={idx} style={styles.navigasi}>
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
                <div style={{...styles.section,flexDirection:"column",justifyContent:"flex-start",gap:"1rem"}}>
                    {KONTAK.map((item, idx) => {
                        return (
                            <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom : "20px"}}>
                                <img src={item.src}/>
                                <p style={{color:"white"}}>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer