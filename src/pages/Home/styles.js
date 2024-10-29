const styles = {
    header: {
        width: '100%',
        padding: '0px',
        backgroundColor: '#000000',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    logoHeader: {
        height: '120px',
    },
    h1: {
        textAlign: 'center',
        width: '100%',
        height: '84px',
        display: 'flex',
        alignItems: 'center',
        color: '#ffff',
        justifyContent: 'center',
        fontFamily: 'Ribeye',
        fontSize: '40px',
        fontWeight: 'bold',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CFB081',
    },
    slider: {
        position: 'relative',
        marginTop: '5%',
        width: '100%',
        height: '400px',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        background: 'linear-gradient(to top, #D9D9D9, #eee5e9)',
    },
    slides: {
        display: 'flex',
        transition: 'transform 1s ease-in-out',
    },
    slide: {
        minWidth: '100%',
        display: 'flex',
        alignItems: 'center', // Mantenha apenas o alinhamento vertical
        borderRadius: '50%',
    },  
    tdesconto: {
        display: 'flex',
        flexDirection: 'column', // Permite que o texto e o botão fiquem um embaixo do outro
        alignItems: 'center', // Centraliza horizontalmente
        textAlign: 'center', // Alinha o texto ao centro
        marginLeft: '20px', // Ajuste o valor conforme necessário
        marginRight: 'auto', // Ocupa o espaço à esquerda
        color: '#000000',
        fontFamily: 'itali',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    dataPrev: {
        display: 'flex',
        flexDirection: 'column',
        marginRight:'50px',
        textAlign: 'center', // Alinha o texto ao centro
        color: '#AB0606',
        fontFamily: 'itali',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    text11: {
        fontSize: '30px',
        textColor: '#fffff',
    },
    inactiveButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px', // Espaçamento acima do botão
        padding: '10px 20px', // Padding para o botão
        background: 'linear-gradient(to left, #C2A1A1 20%, #A31919 60%)',
        color: '#black', // Cor do texto
        borderRadius: '5px', // Bordas arredondadas
        fontFamily: 'itali',
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'not-allowed', // Indica que o botão é inoperante
        pointerEvents: 'none', // Desativa eventos do mouse
    },
    image1: {
        position: 'absolute',  // Isso vai fixar a imagem na posição desejada
        left: '50%',           // Centraliza a imagem
        transform: 'translateX(-50%)', // Centraliza a imagem horizontalmente
        width: '430px',
        borderRadius: '31px', // Adicione um borderRadius conforme seu desejo
        zIndex: 1,            // Garante que a imagem fique acima de outros elementos
    },
    image2: {
        position: 'absolute',  // Isso vai fixar a imagem na posição desejada
        left: '150%',           // Centraliza a imagem
        transform: 'translateX(-50%)', // Centraliza a imagem horizontalmente
        width: '430px',
        borderRadius: '31px', // Adicione um borderRadius conforme seu desejo
        zIndex: 1,            // Garante que a imagem fique acima de outros elementos
    },
    image3: {
        position: 'absolute',  // Isso vai fixar a imagem na posição desejada
        left: '250%',           // Centraliza a imagem
        transform: 'translateX(-50%)', // Centraliza a imagem horizontalmente
        width: '430px',
        borderRadius: '31px', // Adicione um borderRadius conforme seu desejo
        zIndex: 1,            // Garante que a imagem fique acima de outros elementos
    },
    image4: {
        position: 'absolute',  // Isso vai fixar a imagem na posição desejada
        left: '350%',           // Centraliza a imagem
        transform: 'translateX(-50%)', // Centraliza a imagem horizontalmente
        width: '430px',
        borderRadius: '31px', // Adicione um borderRadius conforme seu desejo
        zIndex: 1,            // Garante que a imagem fique acima de outros elementos
    },
    image5: {
        position: 'absolute',  // Isso vai fixar a imagem na posição desejada
        left: '450%',           // Centraliza a imagem
        transform: 'translateX(-50%)', // Centraliza a imagem horizontalmente
        width: '430px',
        borderRadius: '31px', // Adicione um borderRadius conforme seu desejo
        zIndex: 1,            // Garante que a imagem fique acima de outros elementos
    },
    image: {
        width: '70%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '31px',
    },
    manualNavigation: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '0px',
        background: 'linear-gradient(to bottom, #D9D9D9 30%, #F0EDEC 50%)',
    },
    manualBtn: {
        border: '2px solid #CFB081',
        padding: '5px',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: '1s',
        marginRight: '10px',
        backgroundColor: '#fff',
        width: '2px',
        height: '2px',
        marginTop: '10px',
        marginBottom: '100px'
    },
};

export default styles;