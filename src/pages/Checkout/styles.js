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

const Link = styled.a`
    text-decoration: none;  /* Remove o sublinhado */
    color: inherit;         /* Mantém a cor original ou define uma cor personalizada */
`;

export default styles;

export const CheckoutContainer = styled.div`

  width: 95vw;
  margin-bottom: 30px;  
  
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
  
  .SumaryBtn {
    margin-top: 50px;
    display: flex;    
    justify-content: space-between;
    gap: 25%;

    @media (max-width: 600px) {
      width: 100%;
      flex-direction: column; /* Muda para coluna em telas pequenas */        
      gap: 5px;
      align-items: center; 
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

export const CartImageContainer = styled.div`   
  position: relative;
  display: FLEX; 
  justify-content: center; 
  width: 100%;  
`;