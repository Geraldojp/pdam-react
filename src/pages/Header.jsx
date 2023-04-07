import Phone from '../assets/phone.svg';
import FacebookIcon from '../assets/facebook.svg';
import InstagramIcon from '../assets/instagram.svg';
import TwitterIcon from '../assets/twitter.svg';
import YoutubeIcon from '../assets/youtube.svg';
import SocialMedia from '../assets/socmedtext.svg';
import Background from '../assets/background.jpg';
import {IconLink} from "../components/IconLink.jsx";
import styles from "../pages/Header.styles.js";
const ICON_PROPS = [
    {
      iconSrc: SocialMedia,
      to: "#"
    },
    {
        iconSrc: FacebookIcon,
        to: "https://facebook.com"
    },
    {
        iconSrc: InstagramIcon,
        to: "https://instagram.com"
    },
    {
        iconSrc: TwitterIcon,
        to: "https://twitter.com"
    },
    {
        iconSrc: YoutubeIcon,
        to: "https://youtube.com"
    },

]

const Header = () => {
    return(
        <div style={styles.container}>
            <div style={styles.itemContainer}>
                <div style={styles.leftSection}>
                    <h1 style={styles.title}>
                        Menjadi Perusahaan Air Minum Modern
                    </h1>
                    <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                    <button style={styles.buttonPhone}>
                        <img src={Phone}/>
                        <span style={styles.textButton}>
                            Hubungi Kami
                        </span>

                    </button>
                </div>
                <div style={styles.rightSection}>
                    {
                        ICON_PROPS.map((iconProp, index) => {
                            return (
                                <IconLink
                                    key={index}
                                    iconSrc={iconProp.iconSrc}
                                    to={iconProp.to}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )


}
export default Header;