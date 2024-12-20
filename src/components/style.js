import styled from 'styled-components';

const styles = {
  header: {
    width: '100%',
    padding: '10px 20px',
    backgroundColor: '#3d2e1e',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    height: '120px',
    cursor: 'pointer',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#e8d5b7',
    borderRadius: '25px',
    padding: '5px 10px',
    width: '70%',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    width: '100%',
    padding: '5px',
    backgroundColor: 'transparent',
  },
  searchButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  menuContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '20px',

  },
  menuLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '14px',
  },
  navBar: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#4a3a2a',
    padding: '10px 0',
    marginBottom: '3%',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItemWithBorder: {
    display: 'flex',
    alignItems: 'center',
    borderRight: '1px solid #ffffff',
    paddingRight: '15px',
    marginRight: '15px',
  },
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '0 10px',
  },
  lastNavItem: {
    display: 'flex',
    alignItems: 'center',
  },
  teste1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  menu: {
    width: '40px',
    marginBottom: '5px',
  },
  perfil: {
    width: '40px',
    marginBottom: '5px',
  },
};

export default styles;

export const DataContainer = styled.div`

.form-container {
  display: flex;        

  @media (max-width: 600px) {
    flex-direction: column;
  }
}

.meus-dados {
  padding: 20px 20px 20px 20px;
  border-radius: 8px;
  border: 1px solid #000;    
}

.SumaryBtn {
  display: flex;    
  justify-content: space-between;
  gap: 25%;

    @media (max-width: 600px) {
    width: 100%;
      flex-direction: column;      
      gap: 5px;
      align-items: center; 
  }
  
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
    text-decoration: underline;
    text-decoration-color: #000;
    text-decoration-thickness: 1px;
  }

  input, select {
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

export const OrdersContainer = styled.div`

.orders-list {
  max-height: 560px;
  overflow-y: auto;    
  padding: 10px;    
  border-radius: 8px;
  border: 1px solid #000; 
}

.order-item{
 display: flex;
  justify-content: space-between;
  align-items: center;     
  margin-bottom: 10px;
  padding: 10px;    
  border: 1px solid #000; 
  background-color: #D9D9D9;
}
  
.itemColumn {
  display: flex;
  flex-direction: column;
  align-items: center;     
}

`;