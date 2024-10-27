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

//Styled components
export const ProfileContainer = styled.div`

  width: 95vw; 
  margin-bottom: 30px;

  .DataPanel{
    margin-bottom: 20px;
  }

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
