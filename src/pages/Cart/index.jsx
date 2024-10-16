import React from 'react';
import { Link } from "react-router-dom";
import logoHeader from "../../assets/logoheader.jpeg";
import amendoimBranco from "../../assets/amendoimBranco.jpg";
import limaozinhoBranco from "../../assets/limaozinhoBranco.jpg";
import cachacaEscuro from "../../assets/cachacaEscuro.jpg";
import vodkaEscuro from "../../assets/vodkaEscuro.jpg";

import {
  CartContainer,
  Header,
  CartContent,
  ProductItem,
  SummarySection,
  Button,
  DiscountSection,
  MostWantedSection,
  ProductCard,
  QuantityControl
} from './styles';

const Cart = () => {
  return (

    <CartContainer>
      <Header>
        <img src={logoHeader} alt="Logo Cabeçalho" />
      </Header>
      <CartContent>
        <div className="cart">
          <h2>Carrinho</h2>

           {/*Primeiro item do carrinho*/} 
          <ProductItem>
            <img src={amendoimBranco} alt="Vodka" />
            <div>
              <p>Produto adicionado ao carrinho</p>
              <h3>Amendoim 900ml</h3>
              <p>Ingredientes: Água, álcool etílico potável, aroma de ervas</p>
              <p className="price">R$ 15,00</p>
              <div className="actions">
                <QuantityControl>
                  <button>-</button>
                  <input type="number" value={1} readOnly />
                  <button>+</button>
                </QuantityControl>
                <button>Remover</button>
              </div>
            </div>
          </ProductItem>

          {/*Segundo item do carrinho*/}
          <ProductItem>
            <img src={limaozinhoBranco} alt="Cachaça" />
            <div>
              <p>Produto adicionado ao carrinho</p>
              <h3>Limaozinho 900ml</h3>
              <p>Ingredientes: Cana, cachaça, açúcar</p>
              <p className="price">R$ 15,00</p>
              <div className="actions">
                <QuantityControl>
                  <button>-</button>
                  <input type="number" value={1} readOnly />
                  <button>+</button>
                </QuantityControl>
                <button>Remover</button>
              </div>
            </div>
          </ProductItem>

          {/* Cupom de desconto */}
          <DiscountSection>
            <input type="text" placeholder="Cupom de Desconto" />
            <Button>APLICAR CUPOM</Button>
          </DiscountSection>
        </div>

        {/* Resumo da compra */}
        <SummarySection>
          <h2>Resumo</h2>
          <p>Valor dos produtos: <span>R$ 30,00</span></p>
          <p>Descontos: <span>R$ 0,00</span></p>
          <p>Frete: <span>R$ 0,00</span></p>
          <h3>Total à prazo: <span>R$ 35,00</span></h3>
          <h3>Total à vista no Pix: <span>R$ 30,00</span></h3>

          <div className="buttons">
            <Link to="/checkout">
              <Button>IR PARA O PAGAMENTO</Button>
            </Link>
            <Link to="/">
              <Button secondary>CONTINUAR COMPRANDO</Button>
            </Link>
          </div>
        </SummarySection>
      </CartContent>

      {/* Produtos mais procurados */}
      <MostWantedSection>
        <h2>Mais procurados</h2>
        <div className="product-grid">
          <ProductCard>
            <img src={vodkaEscuro} alt="Vodka" />
            <h3>VODKA 1764L</h3>
            <p>R$ 299,90</p>
          </ProductCard>
          <ProductCard>
            <img src={cachacaEscuro} alt="Cachaça" />
            <h3>CACHAÇA 700ml</h3>
            <p>R$ 280,80</p>
          </ProductCard>
        </div>
      </MostWantedSection>
    </CartContainer>
  );
};

export default Cart;
