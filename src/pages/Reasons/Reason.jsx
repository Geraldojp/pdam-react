import Professional from '../../assets/Professional.svg'
import Headphone from '../../assets/Headphone.svg'
import Hours from '../../assets/24 H.svg'
import styles from "./styles/Reason.styled.js";

const reasonData = [
    {
        reasonIcon: Professional,
        reasonText: 'Professional',
        backgroundColor: '#157599',

    },
    {
        reasonIcon: Hours,
        reasonText: '24H Non-Stop',
        backgroundColor: '#2093BE',

    },
    {
        reasonIcon: Headphone,
        reasonText: 'Full Support',
        backgroundColor: '#2BB0D4',
    }

]


export const Reason = () => {
    return (
        <div style={styles.container}>
            <div style={styles.firstBox}>
                <div>
                    <h1 style={styles.title}>Kenapa Memilih Kami?</h1>
                    <p style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor </p>
                </div>
            </div>
            {reasonData.map((item, index) => {
                return (
                    <div key={index}
                         style={{
                             backgroundColor: item.backgroundColor,
                             display: 'flex',
                             flexDirection: 'column',
                             flex: 1,
                             justifyContent: 'center',
                             alignItems: 'center',

                         }}>
                        <img src={item.reasonIcon} style={{width: 100}}/>
                        <p style={styles.logoText}>{item.reasonText}</p>
                    </div>
                )
            })}
        </div>
    )
}

