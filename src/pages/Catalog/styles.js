import styled from 'styled-components';

const styles = {
    body: {
        margin: '0',
        padding: '20px',
        width: '100%',
        height: '100%',
        display: 'flex', // Certifica que o conteúdo se expanda corretamente
        flexDirection: 'column',        
    },
};

export default styles;

//Styled components

export const CatalogoContainer = styled.div`
    display: flex;

    h2 {
        display: inline-block;
        max-width: 400px; 
        font-size: 28px;
        margin-bottom: 15px;
        color: #8e5e1e;
        border-radius: 8px;
        border: 1px solid #000;  
        padding: 5px;
  }

    .filtro-container {
        margin-right: 20px;
    }

    .filtro-button {
        margin: 5px 0;
        padding: 8px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: gray; /* Mudança de cor ao passar o mouse */
        }
    }

    .filtro-button.ativo {
        background-color: #8e5e1e; 
        color: white; 
    }

    .produtos-wrapper {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
    }

    .produtoLink {
        text-decoration: none;
    }

    .produto-container {
        display: flex; 
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 10px;
        border: 1px solid #ccc;
        padding: 10px;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;

        &:hover {
            transform: scale(1.05);
        }
    }

    .produtoImagem{
        width: 220px;
        height: 350px;
        object-fit: cover;
    }

    .produto-nome {
        margin: 5px 0;
        font-size: 18px;
        font-weight: bold;
        color: #333;
        text-align: center;
    }

    .produto-preco { 
        margin: 5px 0;
        font-size: 16px;
        font-weight: normal;
        color: green;
        text-align: center;
        background-color: #f0f0f0;
        padding: 5px;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    
    @media (max-width: 768px) {
        .produtos-wrapper {
            flex-direction: column; 
        }
    
        .produto-container {
            width: 100%;
        }
    
        .filtro-container {
            margin-bottom: 20px;
        }
    }
`;
