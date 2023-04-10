import Quotes from '../../assets/quotes.svg';
import Photo from '../../assets/foto.svg';
import styles from './About.Style.js';

function About() {
    return (
        <div style={styles.container}>
            <div style={styles.itemContainer}>
                <div>
                    <img src={Quotes} style={styles.quotes} />
                    <span style={styles.text}>
                        Mari Kenali Kami dan Perjalanan Kami
                    </span>
                    <div style={styles.card}>
                        <p style={styles.paragraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={Photo} style={styles.photo} />
                    <span style={styles.nametext}>
                        Ir.H.Ady Setiawan.SH
                        <br />
                    </span>
                    <span style={styles.departmenttext}>
                        President of PDAM Purwa Tirta Dharma
                    </span>
                </div>
            </div>
            <button style={styles.button}>
                <span style={styles.textButton}>Lebih Lengkap</span>
            </button>
        </div>
    );
}

export default About;
