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
        caretColor: 'transparent',
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
    MaracujaImg: {
        height: '380px',
        marginLeft: '8%',
        marginRight: '50px',
        marginTop: '40px',
        marginBottom: '40px',
        boxShadow: '6px 6px 8px 8px rgba(0, 0, 0, 0.3)',
        borderRadius: '10px',
    },
    Produto: {
        marginTop: '1.5%',
        marginLeft: '30%',
        marginRight: '30%',
        border: '3px solid #5e503f',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'flex-start', // Alinha o conteúdo ao topo
        justifyContent: 'flex-start', // Garante que a imagem fique à esquerda e o texto à direita
        backgroundColor: '#f5f3f4',
    },
    text: {
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '5%',
        marginLeft: '8px',
        marginRight: '30px',
        flex: '1',
        fontFamily: 'Helvetica',
    },
    title: {
        color: '#ffb703',
        fontSize: '28px', // Tamanho do título
        fontWeight: 'bold',
    },
    descricao: {
        marginTop: '12px',
        color: '#582f0e',
        textAlign: 'justify', 
        fontSize: '18px',
    },
    ingredientes: {
        marginTop: '8px',
        color: '#582f0e',
        textAlign: 'justify', 
        fontSize: '16px',
    },
    ingredientesText: {
        fontWeight: 'bold',
        marginRight: '8px',
        marginTop: '8px',
    },
    vol: {
        display: 'block',
        marginTop: '8px',
        fontWeight: 'bold',
        fontSize: '20px',
        color: '#ffb703',
    },
    estoque: {
        display: 'block',
        marginTop: '5px',
        color: '#676975',
    },
    compra: {
        display: 'flex',
        justifyContent: 'center', // Centraliza horizontalmente
        alignItems: 'center', // Centraliza verticalmente, se necessário
        marginTop: '20px', // Espaçamento superior
        flexDirection: 'column', // Alinha o conteúdo em uma coluna
    },
    preco: {
        fontSize: '25px',
        color: '#17642D', 
        fontWeight: 'bold',
    },
    qtde: {
        display: 'flex',
        backgroundColor: '#d6d6d6',
        padding: '3px 0',
        justifyContent: 'space-around',
        alignItems: 'center',
        minWidth: '70px',
        borderRadius: '20px',
    },
    buttonQtde:{
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: '0',
        fontSize: '18px',
        padding: '0 12px',
    },
    spanQtde:{
        padding: '0 4px',
        fontSize: '18px',
    },
    comprar: {
        marginTop: '15px',
        display: 'flex',
        justifyContent: 'center', // Centraliza horizontalmente
    },
    botoesCompra: {
        display: 'flex',
        alignItems: 'center',
        gap: '1px', // Espaçamento entre os botões
        marginTop: '10px',
    },
    buttonComprar: {
        border: '0',
        backgroundColor: '#477C04',
        fontSize: '18px',
        color: '#ffffff',
        display: 'flex',           // Coloca ícone e texto lado a lado
        alignItems: 'center',      // Centraliza verticalmente
        padding: '8px 16px',
        borderRadius: '8px',
        cursor: 'pointer',
        margin: '10px',
    },
    buttonIcon: {
        width: '20px',            // Tamanho do ícone
        height: '20px',
        marginRight: '8px',       // Espaçamento entre o ícone e o texto
    },
}

export default styles;