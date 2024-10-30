const styles = {
    slider: {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        background: 'radial-gradient(circle at center, #dcdcdc 0%, #dcdcdc 20%, #dcdcdc 100%)',
 
    },
    slides: {
        display: 'flex',
        transition: 'transform 0.5s ease-in-out',
    },
    slide: {
        
        minWidth: '100%',
        display: 'flex',
        justifyContent: 'space-between', // Mantém os elementos nas extremidades
        alignItems: 'center', // Centraliza verticalmente os itens no slide
        height: '70vh', // Ajusta para ocupar a altura da viewport (ou ajuste conforme necessário)
    },
    dataPrevContainer: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%', // Garante que o conteúdo ocupe toda a altura do slide
        marginLeft: '2%',
    },
    dataPrev: {
        textAlign: 'right',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%', // Garante que o conteúdo ocupe toda a altura do slide
        color: '#AB0606',
        fontFamily: 'itali',
        fontSize: '18px',
        fontWeight: 'bold',
        marginRight: '3%',
    },
    inactiveButton: {
        color: '#AB0606',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        width: '100%', // Ajusta a largura da imagem para 80% do slide
        maxWidth: '600px', // Limita a largura máxima da imagem
        height: 'auto', // Mantém a proporção da imagem
        borderRadius: '31px',
        objectFit: 'cover', // Ajusta a imagem para cobrir o espaço sem distorção
    },
    manualNavigation: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
    },
    manualBtn: {
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        margin: '0 5px',
        cursor: 'pointer',
        display: 'inline-block',
    },
    content: {
        textAlign: 'center',
        margin: '20px 0',
        background:'#CFB081',
        height:'50px',
        alignItems:'center',
    },
    h1: {
        fontSize: '24px',
        textAlign:'center',
        
    },
};

export default styles;
