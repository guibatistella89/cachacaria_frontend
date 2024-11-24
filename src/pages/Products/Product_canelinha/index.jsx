import React, { useState, useEffect } from "react";
import api from '../../../api/api.js';
import styles from "./styles.js";
import CanelinhaImg from "../../../assets/Canelinha.jpeg";
import Carrinho from "../../../assets/carrinho.png"
import GlobalStyle from "../../../globalStyle/style.js"; // Importando o estilo global
import Navbar from "../../../components/navBar.jsx";
import Footer from "../../../components/Footer.jsx";
import cachacaEscuro from "../../../assets/cachacaEscuro.jpg";
import vodkaEscuro from "../../../assets/vodkaEscuro.jpg";
import bitterEscuro from "../../../assets/bitterEscuro.jpg";
import canelinhaEscuro from "../../../assets/canelinhaEscuro.jpg";
import bananaEscuro from "../../../assets/bananaEscuro.jpg";
import limaozinhoEscuro from "../../../assets/limaozinhoEscuro.jpg";

import {
    CartContainer,
    MostWantedSection,
    ProductCard,
} from './styles';

function Canelinha() {
    const IdProd = 7;  // deve passar o id do produto
    const IdUser = 3;  // deve passar o id do usuário
    const [product, setProduct] = useState([]);
    const [quantidade, setQuantidade] = useState(1);

    useEffect(() => {
        async function loadProduct() {
            const response = await api.get(`/api/product/${IdProd}`);
            setProduct(response.data); // Aqui eu alimento minha state com as informações do produto
        }
        loadProduct();
    }, [])



    // Função para incrementar a quantidade
    function incrementar() {
        console.log(product.qtd_fisica);
        if ((quantidade + 1) > product.qtd_fisica) {
            return alert("Estoque insuficiente para a quantidade solicitada");
        }
        setQuantidade(quantidade + 1);
    };

    // Função para decrementar a quantidade
    const decrementar = () => {
        if (quantidade > 1) {  // Impede que a quantidade seja menor que 1
            setQuantidade(quantidade - 1);
        }
    };

    function insertItemCart() {
                async function insertProduct() {
            try {
                await api.post('/api/cart/insertItem', {
                    IdUser: IdUser,
                    IdProd: IdProd,
                    quantidade: quantidade,
                    idTransp: 1,
                    idCupom: 1,
                });
                alert('Produto adicionado ao carrinho');
            } catch (error) {
                alert('Este item já foi adicionado no carrinho');
            }
        }
        insertProduct();
    };

    return (
        <div style={styles.body}>
            <GlobalStyle />
            <div><Navbar /></div>
            <div style={styles.container}>
                <div style={styles.Produto}>
                    <div>
                        <img src={CanelinhaImg} alt="Logo Cabeçalho" style={styles.CanelinhaImg} />
                    </div>
                    <div style={styles.text}>
                        <h1 style={styles.title}>Coquetel canelinha 900ml</h1>
                        <span style={styles.descricao}>
                            Uma mistura envolvente e aromática, com o toque quente e suave da canela. Perfeito para quem busca um sabor
                            marcante e aconchegante, ideal para apreciar em momentos de puro prazer e sofisticação.
                        </span>
                        <div style={styles.ingredientes}>
                            <span style={styles.ingredientesText}>Ingredientes: </span>
                            <span>Água, aguardente de cana, açúcar.</span>
                            <br />
                            <span style={styles.ingredientesText}>Aromatizante:</span>
                            <span>Aroma natural de canela.</span>
                            <br />
                            <span style={styles.ingredientesText}>Corante:</span>
                            <span>Caramelo ins 150A.</span>
                            <br />
                            <span style={styles.vol}>13,9% vol.</span>
                            <span style={styles.estoque}>{`Quantidade em estoque:${product.qtd_fisica} `}</span>
                        </div>
                        <div style={styles.compra}>
                            <span style={styles.preco}>Valor: R$ 15,00</span>
                            <div style={styles.botoesCompra}>
                                {/* Botão de quantidade */}
                                <div style={styles.qtde}>
                                    <button style={styles.buttonQtde} onClick={() => decrementar()}>-</button>
                                    <span style={styles.spanQtde}>{quantidade}</span>
                                    <button style={styles.buttonQtde} onClick={() => incrementar()}>+</button>
                                </div>

                                {/* Botão "Comprar" */}
                                <button style={styles.buttonComprar} onClick={() => insertItemCart()}>
                                    <img src={Carrinho} alt="Carrinho" style={styles.buttonIcon} />
                                    <span>Comprar</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Produtos mais procurados */}
            <CartContainer>
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
            <Footer/>
        </div>
    );
}

export default Canelinha;
