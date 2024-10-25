import {GlobalButtonLayout } from "../globalStyle/style.js";
import { OrdersContainer } from './style.js';

export default function Orders() {
    // Aqui vamos chamar um array com todos os pedidos do cliente
    const orders = [
        { number: '001', date: '2024-10-01', status: 'Entregue', paymentMethod: 'Cartão de Crédito', value: 'R$ 150,00' },
        { number: '002', date: '2024-10-05', status: 'Pendente', paymentMethod: 'Boleto', value: 'R$ 75,00' },
        { number: '003', date: '2024-10-10', status: 'Cancelado', paymentMethod: 'PayPal', value: 'R$ 200,00' },
        { number: '004', date: '2024-10-15', status: 'Entregue', paymentMethod: 'Cartão de Débito', value: 'R$ 100,00' },
        { number: '005', date: '2024-10-20', status: 'Pendente', paymentMethod: 'Transferência', value: 'R$ 50,00' },
        { number: '006', date: '2024-10-22', status: 'Entregue', paymentMethod: 'Pix', value: 'R$ 120,00' },
        { number: '007', date: '2024-10-23', status: 'Pendente', paymentMethod: 'Cartão de Crédito', value: 'R$ 90,00' },
        { number: '008', date: '2024-10-24', status: 'Cancelado', paymentMethod: 'Boleto', value: 'R$ 60,00' },
        { number: '009', date: '2024-10-25', status: 'Entregue', paymentMethod: 'Transferência', value: 'R$ 80,00' },
        { number: '010', date: '2024-10-26', status: 'Pendente', paymentMethod: 'PayPal', value: 'R$ 110,00' },
    ];    

    return (
        <OrdersContainer>
            <h2>Meus Pedidos</h2>
            <div className="orders-list">
                {orders.map((order, index) => (
                    <div key={index} className="order-item">
                        <div className="itemColumn">
                            <a className="order-title">Número</a>
                            <a className="order-value">{order.number}</a>
                        </div>
                        <div className="itemColumn">
                            <a className="order-title">Data</a>
                            <a className="order-value">{order.date}</a>
                        </div>
                        <div className="itemColumn">
                            <a className="order-title">Status</a>
                            <a className="order-value">{order.status}</a>
                        </div>
                        <div className="itemColumn">
                            <a className="order-title">Forma de Pagamento</a>
                            <a className="order-value">{order.paymentMethod}</a>
                        </div>
                        <div className="itemColumn">
                            <a className="order-title">Valor</a>
                            <a className="order-value">{order.value}</a>
                        </div>
                        <GlobalButtonLayout className="greenBtn" onClick={() => console.log(`Ver detalhes do pedido ${order.number}`)}>Detalhes</GlobalButtonLayout>
                    </div>
                ))}
            </div>
        </OrdersContainer>
    );
};