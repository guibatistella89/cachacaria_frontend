import styled from 'styled-components';

const styles = {
  body: {
    margin: '0',
    padding: '0',
    width: '100%',
    height: '100%',
    display: 'flex', // Certifica que o conteúdo se expanda corretamente
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default styles;

export const CheckoutContainer = styled.div`

  width: 95vw;
  padding: 30px;
  
  margin-top: 120px;

  h2 {
    font-size: 28px;
    margin-bottom: 15px;
    color: #8e5e1e;
  }

  .form-container {
    display: flex;        

    @media (max-width: 600px) {
      flex-direction: column; /* Muda para coluna em telas pequenas */
    }
  }

  .meus-dados {
    padding: 20px 20px 20px 20px;
    border-radius: 8px;
    border: 1px solid #000;    
  }
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

export const FormSection = styled.div`
  width: 50%;
  flex: 1;
  padding: 0 25px 0 25px;

  @media (max-width: 600px) {
    width: 100%;
  }

  h3 {    
    font-size: 18px;
    margin-bottom: 30px;
    text-decoration: underline; /* Adiciona a sublinha */
    text-decoration-color: #000; /* (Opcional) Define a cor da sublinha */
    text-decoration-thickness: 1px; /* (Opcional) Define a espessura da sublinha */
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 12px;
  }
`;

export const AddressSection = styled(FormSection)``;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;  

  label {    
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;

  .save, .logout, .continue, .back {
    width: 200px;
    height: 50px;
    padding: 12px 20px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-size: 15px;
    transition: background-color 0.3s ease;
  }

  .save {
    background-color: #4caf50;
    color: white;

    &:hover {
      background-color: #45a049;
    }
  }

  .logout {
    background-color: #a83232;
    color: white;

    &:hover {
      background-color: #9f2929;
    }
  }

  .continue {
    background-color: #ffbe55;
    color: #fff;

    &:hover {
      background-color: #ffab33;
    }
  }

  .back {
    background-color: #e0e0e0;
    color: #000;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

export const FreightAndSummary = styled.div`
  display: flex;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const FreightSection = styled.div`
  width: 50%;
  background-color: #fff;
  padding: 15px 20px;
  border: 1px solid #ddd;
  border-radius: 4px;

  h3 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  div {
    display: flex;
    align-items: center;
    margin-bottom: 4px;

    input {
      margin-right: 6px;
    }

    label {
      font-size: 14px;
    }
  }
`;

export const SummarySection = styled.div`
  width: 50%;
  background-color: #fff;
  padding: 2px 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-left: 60px;

  h3 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    margin-bottom: 5px;

    span {
      float: right;
    }
  }
`;
