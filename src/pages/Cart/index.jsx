import React, { useState } from 'react'; 
import { Link } from "react-router-dom";
import logoHeader from "../../assets/logoheader.jpeg";
import amendoimBranco from "../../assets/amendoimBranco.jpg";
import limaozinhoBranco from "../../assets/limaozinhoBranco.jpg";
import cachacaEscuro from "../../assets/cachacaEscuro.jpg";
import vodkaEscuro from "../../assets/vodkaEscuro.jpg";
import bitterEscuro from "../../assets/bitterEscuro.jpg";
import canelinhaEscuro from "../../assets/canelinhaEscuro.jpg";
import bananaEscuro from "../../assets/bananaEscuro.jpg";
import limaozinhoEscuro from "../../assets/limaozinhoEscuro.jpg";
import Navbar from "../../components/navBar.jsx";
import printCarrinho from "../../assets/printCarrinho.jpg";



import {
  CartContainer,
  CartContent,
  ProductItem,
  SummarySection,
  Button,
  DiscountSection,
  MostWantedSection,
  ProductCard,
  QuantityControl,
  CartImageContainer,
  CartImage
} from './styles';

const Cart = () => {
  const [quantities, setQuantities] = useState({
    amendoim: 1,
    limaozinho: 1
  });

  const incrementQuantity = (product) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product]: prevQuantities[product] + 1
    }));
  };

  const decrementQuantity = (product) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product]: prevQuantities[product] > 1 ? prevQuantities[product] - 1 : 1
    }));
  };

  return (
    <div>
      <div><Navbar /></div>
      <CartContainer>
      <CartImageContainer>
           <CartImage src={printCarrinho} alt="Carrinho" />
      </CartImageContainer>
      
        <CartContent>
          <div className="cart">
            {/* Primeiro item do carrinho */}
            <ProductItem>
              <img src={amendoimBranco} alt="Amendoim" />
              <div className="info">
                <p>Produto adicionado ao carrinho</p>
                <h3>Amendoim 900ml</h3>
                <p>Ingredientes: Água, álcool etílico potável, aroma de ervas</p>
                <p className="price">R$ 15,00</p>
              </div>
              <div className="actions">
                <QuantityControl>
                  <button onClick={() => decrementQuantity('amendoim')}>-</button>
                  <input type="number" value={quantities.amendoim} readOnly />
                  <button onClick={() => incrementQuantity('amendoim')}>+</button>
                </QuantityControl>
                <button>Remover</button>
              </div>
            </ProductItem>

            {/* Segundo item do carrinho */}
            <ProductItem>
              <img src={limaozinhoBranco} alt="Cachaça" />
              <div className="info">
                <p>Produto adicionado ao carrinho</p>
                <h3>Limaozinho 900ml</h3>
                <p>Ingredientes: Cana, cachaça, açúcar</p>
                <p className="price">R$ 15,00</p>
              </div>
              <div className="actions">
                <QuantityControl>
                  <button onClick={() => decrementQuantity('limaozinho')}>-</button>
                  <input type="number" value={quantities.limaozinho} readOnly />
                  <button onClick={() => incrementQuantity('limaozinho')}>+</button>
                </QuantityControl>
                <button>Remover</button>
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
            <p>Valor dos produtos: <span>R$ {15 * quantities.amendoim + 15 * quantities.limaozinho},00</span></p>
            <p>Descontos: <span>R$ 0,00</span></p>
            <h3>Total à prazo: <span>R$ {15 * quantities.amendoim + 15 * quantities.limaozinho + 5},00</span></h3>
            <h3>Total à vista no Pix: <span>R$ {15 * quantities.amendoim + 15 * quantities.limaozinho},00</span></h3>

            <div className="buttons">
              <Link to="/checkout">
                <Button>IR PARA O PAGAMENTO</Button>
              </Link>
              <Link to="/catalog">
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
              <div className="info">
                <h3>VODKA 900ml</h3>
                <p>R$ 15,00</p>
              </div>
            </ProductCard>
            <ProductCard>
              <img src={cachacaEscuro} alt="Cachaça" />
              <div className="info">
                <h3>CACHAÇA 900ml</h3>
                <p>R$ 15,00</p>
              </div>
            </ProductCard>
            <ProductCard>
              <img src={canelinhaEscuro} alt="Canelinha" />
              <div className="info">
                <h3>CANELINHA 900ml</h3>
                <p>R$ 15,00</p>
              </div>
            </ProductCard>
            <ProductCard>
              <img src={bananaEscuro} alt="Banana" />
              <div className="info">
                <h3>BANANA 900ml</h3>
                <p>R$ 15,00</p>
              </div>
            </ProductCard>
            <ProductCard>
              <img src={limaozinhoEscuro} alt="Limãozinho" />
              <div className="info">
                <h3>LIMÃOZINHO 900ml</h3>
                <p>R$ 15,00</p>
              </div>
            </ProductCard>
            <ProductCard>
              <img src={bitterEscuro} alt="Bitter" />
              <div className="info">
                <h3>BITTER 900ml</h3>
                <p>R$ 15,00</p>
              </div>
            </ProductCard>
          </div>
        </MostWantedSection>
      </CartContainer>


    </div>
  );
};

export default Cart;
