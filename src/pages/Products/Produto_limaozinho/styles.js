import styled from 'styled-components';

const styles = {
    body: {
        margin: '0', // Remove qualquer margem padrão
        padding: '0', // Remove qualquer padding padrão
        width: '100vw', // Ocupa toda a largura da janela
        height: '100vh', // Ocupa toda a altura da janela
        display: 'flex', // Certifica que o conteúdo se expanda corretamente
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
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
        height: '120px', 
    },
}

export default styles;