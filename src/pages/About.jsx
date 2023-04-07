import Quotes from '../assets/quotes.svg';
import Photo from '../assets/foto.svg';

const styles = {
    container: {
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
        padding: '7%',
        boxSizing: 'border-box',
        justifyContent: 'space-between'
    },
    itemContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        padding: '0 220px 0 113px',
        boxSizing: 'border-box'
    },
    quotes: {
        display: 'flex',
        marginLeft: '150'
    },
    text: {
        display: 'flex',
        width: '462px',
        height: '110px',
        fontFamily: 'Quicksand',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '40px',
        lineHeight: '50px',
        marginLeft: '60px'
    },
    card: {
        background: '#FFFFFF',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        borderRadius: '5px',
        width: '529px',
        height: '600px',
        margin: '0 50px',
        marginRight: '100px',
        padding: '20px'
    },
    paragraph: {
        width: '449px',
        height: '576px',
        margin: '24px 40px',
        fontFamily: 'Quicksand',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '20px',
        lineHeight: '48px'
    },
    photo: {
        width: '529px',
        height: '575px',
        marginTop: '175px'

    }
};

const About = () => {
    return (
        <div style={styles.container}>
            <div style={styles.itemContainer}>
                <div>
                    <img src={Quotes} style={styles.quotes} />
                    <span style={styles.text}>Mari Kenali Kami dan Perjalanan Kami</span>
                    <div style={styles.card}>
                        <p style={styles.paragraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={Photo} style={styles.photo} />
                    <span>Test</span>
                    <span>test</span>
                </div>
            </div>
            <button>Test</button>
        </div>
    );
};

export default About;
