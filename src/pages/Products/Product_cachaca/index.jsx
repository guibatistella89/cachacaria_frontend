import React, { useState } from "react";
import styles from "./styles.js";
import logoHeader from "../../../assets/logoheader.jpeg";
import CachacaImg from "../../../assets/Cachaca.jpeg";
import Carrinho from "../../../assets/carrinho.png"
import GlobalStyle from "../../../globalStyle/style.js"; // Importando o estilo global

function Cachaca() {
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
            <header style={styles.header}>
                <img src={logoHeader} alt="Logo Cabeçalho" style={styles.logoHeader} />
            </header>
            <div style={styles.container}>
                <div style={styles.Produto}>
                    <div>
                        <img src={CachacaImg} alt="Logo Cabeçalho" style={styles.CachacaImg} />
                    </div>
                    <div style={styles.text}>
                        <h1 style={styles.title}>Cachaça 900ml</h1>
                        <span style={styles.descricao}>
                        Cheia de personalidade, com sabor marcante e notas de cana-de-açúcar. 
                        Perfeita para apreciar pura ou em caipirinhas, trazendo o espírito do Brasil em cada gole.
                        </span>
                        <div style={styles.ingredientes}>
                            <span style={styles.ingredientesText}>Ingredientes: </span>
                            <span>Água, cachaça, açucar.</span>
                            <br />
                            <span style={styles.vol}>38% vol.</span>
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
        </div>
    );
}

export default Cachaca;
