import styled from 'styled-components';

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
        display:'flex',
        justifyContent: 'center',
        
    },
    h1: {
        fontSize: '24px',
        color:'white',
    },
};

export default styles;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #eee5e9;
`;

export const MostWantedSection = styled.section`
  margin-top: 50px;
  width: 100%;
  max-width: 1600px;

  h2 {
    font-size: 26px;
    margin-bottom: 30px;
    color: red;
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 colunas */
    grid-template-rows: repeat(2, auto); /* 2 linhas */
    gap: 20px;
  }
`;

export const ProductCard = styled.div`
  background-color: #fff;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  display: flex; /* Adiciona flexbox para organizar o layout */
  //align-items: center; /* Alinha verticalmente os itens */
  

  img {
    width: 120px;
    height: auto;
    margin:15PX;
    margin-right: 20px; /* Espaço entre a imagem e o conteúdo */
  }

  .info {
    margin-top:20px;
    text-align: left; /* Alinha o texto à esquerda */
    h3 {
      font-size: 20px;
      margin: 0px 0;
    }

    p {
      margin-top:20px;
      font-size: 20px;
      color: #333;
      font-weight: bold;
    }
  }
`;
