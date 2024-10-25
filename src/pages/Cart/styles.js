import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
`;

export const CartContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr; 
  gap: 40px;
  margin-top: 160px;
  width: 100%;
  max-width: 1600px;
  align-items: flex-start; 
`;

export const CartImageContainer = styled.div`
  position: relative;
  display: FLEX; 
  justify-content: center; 
  width: 100%;
`;

export const CartImage = styled.img`
  width: 45%; 
  margin-top:30px;
  margin-bottom:-70px;
  height: auto;
`;

export const ProductItem = styled.div`
  display: flex;
  justify-content: space-between; /* Garante que a imagem, informações e ações fiquem separadas */
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  align-items: center; /* Alinha verticalmente os elementos */

  img {
    width: 120px;
    margin-right: 20px;
  }

  .info {
    flex-grow: 1;
    margin-top:-35px;
    margin-right: 20px;
    p {
      margin: 10px 0;
    }
    .price {
      font-size: 20px;
      font-weight: bold;
      color: #000;
      span {
        text-decoration: line-through;
        color: #999;
        margin-left: 10px;
      }
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    button {
      background-color: red;
      color: #fff;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
      margin-top: 10px;
    }
  }
`;

export const QuantityControl = styled.div`
  align-items: center;
  margin-bottom: 10px;
  margin-top:-20px;


  button {
    background-color: #ddd;
    border: none;
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
    margin: 0 5px;
  }

  input {
    width: 50px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
  }
`;


export const SummarySection = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  width: 100%;
  height: fit-content;

  h2 {
    font-size: 20px;
    padding: 5px;
    margin-bottom: 20px;
  }

  p,
  h3 {
    font-size: 18px;
    padding: 5px;
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
  }

  h3 {
    font-size: 18px;
    color: green;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => (props.secondary ? '#fff' : '#ff8800')};
  color: ${(props) => (props.secondary ? '#ff8800' : '#fff')};
  border: none;
  font-size: 14px;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  width: 350px;
`;

export const DiscountSection = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 10px;
  width: 100%;

  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    color: #fff;
    background-color: blue;
  }
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
