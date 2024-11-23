import React, { useEffect, useState } from 'react';
import api from '../../api/api.js';
import { ProductItem, QuantityControl, NoProduct } from './styles';
import emptyCart from "../../assets/empty-cart.png";
import ImagemProd from './img.jsx';


export default function itemCart({ idProd, qtdeProd, removeItem, updateItem }) {
    // Lógica    
    const [quantity, setquantity] = useState(qtdeProd);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function loadProduct() {            
            const response = await api.get(`/api/product/${idProd}`);
            setProduct(response.data); // Aqui eu alimento minha state com as informações do produto
        }
        loadProduct();
    }, [])



    function handleupdateItem(action, quantity, idProd) {

        if (action === 'decrease' && quantity === 1) {
            const userConfirmed = window.confirm("Você atingiu a quantidade mínima. Deseja remover o item do carrinho?");
            userConfirmed ? removeItem(idProd) : null;
            return;
        }

        if (action === 'increase') {
            if ((quantity + 1) > product.qtd_fisica) {                
                return alert("Estoque insuficiente para a quantidade solicitada");

            }
        }

        let newQuantity = quantity;
        if (action === 'increase') {
            newQuantity += 1;
        } else if (action === 'decrease') {
            newQuantity -= 1;
        }
        updateItem(action, idProd);
        setquantity(newQuantity);
    }

    const formatPrice = (price) => {
        return price ? price.toFixed(2).replace('.', ',') : '0,00'; // 
    };
    // Fim da lógica

    return (
        <ProductItem>
            <ImagemProd idImgProd={product.id_produto} nomeImgProd={product.nome}/>
            <div className="info">
                <h3>{`${product.nome} - ${product.capacidade_ml}ml`}</h3>
                <p>{product.categoria}</p>
                <p>{`Ingredientes: ${product.ingredientes}.`}</p>
                <p>{`${quantity} x R$${formatPrice(product.preco)}`}</p>
                <p className="price">{`Total ${formatPrice(parseFloat(product.preco) * parseFloat(quantity))}`}</p>
            </div>
            <div className="actions">
                <QuantityControl>
                    <button onClick={() => handleupdateItem('decrease', quantity, idProd)}>-</button>
                    <input type="number" value={quantity} readOnly />
                    <button onClick={() => handleupdateItem('increase', quantity, idProd)}>+</button>
                </QuantityControl>
                <button onClick={() => removeItem(idProd)}>Remover</button>
            </div>
        </ProductItem>
    );
};

export function EmptyCart() {
    return (
        <NoProduct>
            <img src={emptyCart} alt="Carrinho Vazio" />
            <h1>Carrinho Vazio</h1>
        </NoProduct>
    );
}