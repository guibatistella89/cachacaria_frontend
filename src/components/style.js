const styles = {
    header: {
        width: '100%',
        padding: '10px 20px',
        backgroundColor: '#3d2e1e',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    logo: {
        height: '80px',
        cursor: 'pointer',
    },
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#e8d5b7',
        borderRadius: '25px',
        padding: '5px 10px',
        width: '50%',
    },
    searchInput: {
        border: 'none',
        outline: 'none',
        width: '100%',
        padding: '5px',
        backgroundColor: 'transparent',
    },
    searchButton: {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
    },
    menuContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    },
    menuLink: {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '14px',
    },
    navBar: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#4a3a2a',
        padding: '10px 0',
    },
    navList: {
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
    navItemWithBorder: {
        display: 'flex',
        alignItems: 'center',
        borderRight: '1px solid #ffffff', // Barra vertical alinhada ao centro
        paddingRight: '15px',
        marginRight: '15px',
    },
    navLink: {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '16px',
        padding: '0 10px', // Espaçamento para a barra
    },
    lastNavItem: {
        display: 'flex',
        alignItems: 'center',
    },
};

export default styles;
