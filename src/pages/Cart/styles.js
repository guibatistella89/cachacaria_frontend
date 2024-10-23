import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 140px;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;

  img {
    height: 100%;
  }
`;

export const CartContent = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr;
  gap: 40px;
  margin-top: 160px;
  width: 100%;
  max-width: 1600px;
`;

export const ProductItem = styled.div`
  display: flex;
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;

  img {
    width: 120px;
    margin-right: 20px;
  }

  h3 {
    font-size: 18px;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #888;
    margin: 5px 0;
  }

  .price {
    font-size: 18px;
    font-weight: bold;
    color: #000;

    span {
      text-decoration: line-through;
      color: #999;
      margin-left: 10px;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    margin-top: 10px;

    button {
      background-color: red;
      color: #fff;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
    }
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;

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
  margin-top: 65px;
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
  margin-top: 20px;
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
  margin-top: 20px;
  width: 100%;
  max-width: 800px;

  h2 {
    font-size: 24px;
    margin-bottom: 30px;
    color: red;
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

export const ProductCard = styled.div`
  background-color: #fff;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  text-align: center;

  img {
    width: 100px;
    height: auto;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 16px;
    margin: 5px 0;
  }

  p {
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }
`;
