const styles = {
    footer: {
        marginTop: '5%',
        display: 'flex',
        flexDirection: 'column', // Coloca tudo em coluna
        alignItems: 'center',
        backgroundColor: '#3d2e1e',
        color: '#ffffff',
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
    },
    topSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%', // Ocupar toda a largura
        padding:'0px 120px 0px 0px',
    },
    section: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px',
    },
    linkA: {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '18px',
    },
    linkB: {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '18px',
        marginLeft:'80px'
    },
    centerSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        width: '80px',
        margin: '0 20px', // Margem horizontal para espaçamento
        borderRadius: '50%',
    },
    cnpj: {
        fontSize: '15px',
        marginTop: '5px',
    },
    text: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    textA: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginLeft:'15px',
    },
    address: {
        fontSize: '14px',
        lineHeight: '1.5',
    },
    contact: {
        alignItems: 'center',
        fontSize: '14px',
    },
    icon: {
        width: '20px',
        height: '20px',
        marginRight:'5px'
    },
    email: {
        fontSize: '14px',
        fontWeight: 'bold',
    },
};

export default styles;
