import React, { useState } from "react";
import styles from "./styles.js";
import MentaImg from "../../../assets/Menta.jpeg";
import Carrinho from "../../../assets/carrinho.png"
import GlobalStyle from "../../../globalStyle/style.js"; // Importando o estilo global
import Navbar from "../../../components/navBar.jsx";
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

function Menta() {
    // Estado para a quantidade
    const [quantidade, setQuantidade] = useState(1);

    // Função para incrementar a quantidade
    const incrementar = () => {
        setQuantidade(quantidade + 1);
    };

    // Função para decrementar a quantidade
    const decrementar = () => {
        if (quantidade > 1) {  // Impede que a quantidade seja menor que 1
            setQuantidade(quantidade - 1);
        }
    };

    return (
        <div style={styles.body}>
            <GlobalStyle />
            <div><Navbar /></div>
            <div style={styles.container}>
                <div style={styles.Produto}>
                    <div>
                        <img src={MentaImg} alt="Logo Cabeçalho" style={styles.MentaImg} />
                    </div>
                    <div style={styles.text}>
                        <h1 style={styles.title}>Coquetel Menta 900ml</h1>
                        <span style={styles.descricao}>
                            Este coquetel de menta é uma explosão de frescor e doçura, com um aroma vibrante que encanta os sentidos.
                            Sua cor chamativa faz dele a escolha perfeita para animar qualquer celebração!
                        </span>
                        <div style={styles.ingredientes}>
                            <span style={styles.ingredientesText}>Ingredientes:</span>
                            <span>Água, aguardente de cana, açúcar.</span>
                            <br />
                            <span style={styles.ingredientesText}>Aromatizante:</span>
                            <span>Aroma de hortelã pimenta.</span>
                            <br />
                            <span style={styles.ingredientesText}>Corante:</span>
                            <span>Amarelo tartazina ins 102 e Azul brilhante ins 133.</span>
                            <br />
                            <span style={styles.vol}>13,9% vol.</span>
                            <span style={styles.estoque}>Quantidade em estoque: 30</span>
                        </div>
                        <div style={styles.compra}>
                            <span style={styles.preco}>Valor: R$ 15,00</span>
                            <div style={styles.botoesCompra}>
                                {/* Botão de quantidade */}
                                <div style={styles.qtde}>
                                    <button style={styles.buttonQtde} onClick={decrementar}>-</button>
                                    <span style={styles.spanQtde}>{quantidade}</span>
                                    <button style={styles.buttonQtde} onClick={incrementar}>+</button>
                                </div>

                                {/* Botão "Comprar" */}
                                <button style={styles.buttonComprar}>
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
        </div>
    );
}

export default Menta;
