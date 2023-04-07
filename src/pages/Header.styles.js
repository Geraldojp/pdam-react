import Background from "../assets/background.jpg";

const styles = {
    container: {
        backgroundImage: `url(${Background})`,
        maxHeight: '693px',
        padding:'169px 75px',
        boxSizing: 'border-box',
    },
    itemContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: 'Quicksand',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: '50px',
        color: '#FFFFFF',
    },
    paragraph: {
        fontFamily: 'Quicksand',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: '30px',
        color: '#FFFFFF',
        margin: '22px 0'
    },
    buttonPhone: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        border: 'none',
        width: 261,
        height: 71,
        backgroundColor: '#FFFFFF',
    },
    textButton: {

        fontFamily: 'Quicksand',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: '25px',
        color: '#157599',
        paddingLeft: 20
    },
    phoneIcon: {
        width: 20,
        height: 20,
        alignItems: 'left',
    },
    leftSection: {
        flex:1
    },
    rightSection: {
        flex:2.15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    }
}
export default styles;