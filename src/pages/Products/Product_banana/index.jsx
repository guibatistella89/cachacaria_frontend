import React, { useState } from "react";
import styles from "./styles.js";
import logoHeader from "../../../assets/logoheader.jpeg";
import BananaImg from "../../../assets/Banana.jpeg";
import Carrinho from "../../../assets/carrinho.png"
import GlobalStyle from "../../../globalStyle/style.js"; // Importando o estilo global

function Limazinho() {
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
                        <img src={BananaImg} alt="Logo Cabeçalho" style={styles.BananaImg} />
                    </div>
                    <div style={styles.text}>
                        <h1 style={styles.title}>Coquetel banana 900ml</h1>
                        <span style={styles.descricao}>
                        Suave e doce, com o sabor envolvente da banana. Ideal para quem procura um drink tropical e 
                        reconfortante, perfeito para momentos de relaxamento e descontração.
                        </span>
                        <div style={styles.ingredientes}>
                            <span style={styles.ingredientesText}>Ingredientes: </span>
                            <span>Água, aguardente de cana, açúcar.</span>
                            <br />
                            <span style={styles.ingredientesText}>Aromatizante:</span>
                            <span>Aroma natural de banana.</span>
                            <br />
                            <span style={styles.ingredientesText}>Corante:</span>
                            <span>Caramelo ins 150A.</span>
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
        </div>
    );
}

export default Limazinho;
