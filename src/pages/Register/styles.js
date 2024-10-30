const styles = {
    pageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        //height: '100vh',
        minHeight: '100vh',
        paddingBottom: '100px',
    },
    header: {
        width: '100%',
        padding: '0px',
        backgroundColor: '#4a3a2a',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    logoHeader: {
        height: '110px', 
    },
    title: {
        padding: '40px',
        fontSize: '30px',
        fontWeight: 'bold',
        marginBottom: '-50px',
        color: '#4b3d2c',
    },
    loginContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
    },
    loginCard: {
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#3A301F',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%',
    },
    logoPreta: {
        height: '80px',      
        width: '80px',       
        borderRadius: '50%', 
        marginBottom: '20px',
    },

    input: {
        width: '95%',
        padding: '12px 12px',
        margin: '10px 0',
        borderRadius: '4px',
        border: '3px solid #CFB081',
        fontSize: '16px',
    },
    button: {
        backgroundColor: '#CFB081',
        color: 'white',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '20px',
        marginBottom: '10px'
    },
    subtitle: {
        fontSize: '16px',
        color: 'white',
    },
};

export default styles;

