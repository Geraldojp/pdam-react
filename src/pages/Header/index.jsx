import Phone from '../../assets/phone.svg';
import IconLink from '../../components/IconLink/IconLink.jsx';
import {
    Container,
    ItemContainer,
    LeftSection,
    Title,
    ButtonPhone,
    Paragraph,
    RightSection,
    TextButton,
} from './styles/Header.styled.js';
import SocialMedia from '../../assets/socmedtext.svg';
import FacebookIcon from '../../assets/facebook.svg';
import InstagramIcon from '../../assets/instagram.svg';
import TwitterIcon from '../../assets/twitter.svg';
import YoutubeIcon from '../../assets/youtube.svg';

const ICON_PROPS = [
    {
        iconSrc: SocialMedia,
        to: '#',
    },
    {
        iconSrc: FacebookIcon,
        to: 'https://facebook.com',
    },
    {
        iconSrc: InstagramIcon,
        to: 'https://instagram.com',
    },
    {
        iconSrc: TwitterIcon,
        to: 'https://twitter.com',
    },
    {
        iconSrc: YoutubeIcon,
        to: 'https://youtube.com',
    },
];

function Header() {
    return (
        <Container>
            <ItemContainer>
                <LeftSection>
                    <Title>Menjadi Perusahaan Air Minum Modern</Title>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                    </Paragraph>
                    <ButtonPhone>
                        <img src={Phone} />
                        <TextButton>Hubungi Kami</TextButton>
                    </ButtonPhone>
                </LeftSection>
                <RightSection>
                    {ICON_PROPS.map((iconProp, index) => (
                        <IconLink
                            key={index}
                            iconSrc={iconProp.iconSrc}
                            to={iconProp.to}
                        />
                    ))}
                </RightSection>
            </ItemContainer>
        </Container>
    );
}

export default Header;
