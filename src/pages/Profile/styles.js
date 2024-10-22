import styled from 'styled-components';

const styles = {
body: {
        margin: '0',
        padding: '0',
        width: '100vw',
        height: '100vh',
        display: 'flex', // Certifica que o conteúdo se expanda corretamente
        flexDirection: 'column',        
    },


    //header temporário >>>>>>>>>>>>>>>>>>>>>>>>
    header: {
        width: '100%',
        padding: '0px',
        backgroundColor: '#000000',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    logoHeader: {
        height: '140px',
    },
    //header temporário <<<<<<<<<<<<<<<<<<<<<<<<
    
    fullPanel: {        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
        //backgroundColor: 'blue'       
    },
    forms: {
        //backgroundColor: 'red',
        display: 'flex',
    },
    mainHeader: {
        border: '1px solid #000',
        borderRadius: '8px',
        width: '280px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        //backgroundColor: 'yellow'
    },

    h2: {
        padding: '40px',
        fontSize: '30px',
        fontWeight: 'bold',
        marginBottom: '0px',
        color: '#4b3d2c',
    },

};

export default styles;

//Styled components

// Estilo do conteúdo de input
export const ContentInput = styled.div`
    display: flex;
    flex-direction: column;
    
    label {        
        font-size: 1.2rem;
        color: #333;
        font-weight: bold;        
    }

    input,select {
        border: 1px solid #ccc;
        border-radius: 12px;
        padding: 5px;
        font-size: 1rem;
    }
`;




