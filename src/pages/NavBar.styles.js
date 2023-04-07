const styles = {
    container: bgColor => {
        return {
            height: 80,
            display: 'flex',
            backgroundColor: bgColor,
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 70px',
            position: 'fixed',
            width: '100%',
            zIndex: 1000,
            transition: 'background-color 0.5s ease-in-out'
        }
    },
    menu: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '22px',
        color: '#FFFFFF',
        margin: '0 15px',
        textDecoration: 'none'
    },
    searchIcon: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 13,

    },
    button: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        border: 'none',
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '20px',
        color: '#157599',
        padding: 10,
    },
    rightSection: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
    }
}
export default styles;