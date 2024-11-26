import React from 'react';
import { SummarySection, Button } from './styles';
import { Link } from "react-router-dom";


export default function summary({ total, cupom, converToOrder, lenghtCart }) {
    // Lógica

    const cupomDefault = {
        id: 0,
        codigo: '',
        percentual_desc: 0,
    }
    
    const objCupom = cupom ? cupom : cupomDefault;
    const totalComDesconto = total;
    const formatPrice = (price) => {
        return price ? price.toFixed(2).replace('.', ',') : '0,00'; // 
    };

    function handleGeraPedido() {

        if (lenghtCart <= 0) {
            alert("É necessário incluir um item no carrinho para prosseguir");
            return;
        }

        converToOrder();
    }

    // Fim da lógica

    return (
        <SummarySection>
            <h2>Resumo</h2>
            <p>Valor dos Produtos: <span>R$ {formatPrice(total)}</span></p>
            <p>Descontos: <span>R$ {formatPrice(total * objCupom.percentual_desc / 100)} </span></p>
            <p>Cupom de Desconto: <span>{objCupom.codigo}</span></p>
            <h3>Total com Desconto: <span>R$ {formatPrice(totalComDesconto)}</span></h3>

            <div className="buttons">
                <Link to="/checkout">
                    <Button onClick={() => handleGeraPedido()} disabled={lenghtCart <= 0} style={{ cursor: lenghtCart <= 0 ? 'not-allowed' : 'pointer' }}>CONTINUAR A COMPRA</Button>
                </Link>
                <Link to="/catalog">
                    <Button $secondary>VOLTAR AO CATÁLOGO</Button>
                </Link>
            </div>
        </SummarySection>
    );
};