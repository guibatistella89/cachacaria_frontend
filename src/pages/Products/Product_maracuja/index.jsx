import React, { useState } from "react";
import styles from "./styles.js";
import logoHeader from "../../../assets/logoheader.jpeg";
import MaracujaImg from "../../../assets/Maracuja.jpeg";
import Carrinho from "../../../assets/carrinho.png"
import GlobalStyle from "../../../globalStyle/style.js"; // Importando o estilo global

function Maracuja() {
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
                        <img src={MaracujaImg} alt="Logo Cabeçalho" style={styles.MaracujaImg} />
                    </div>
                    <div style={styles.text}>
                        <h1 style={styles.title}>Licor Maracujá 900ml</h1>
                        <span style={styles.descricao}>
                        Uma explosão tropical irresistível! Com o equilíbrio perfeito entre o doce e o cítrico, 
                        oferece um toque de frescor exótico que transforma qualquer drink ou sobremesa em uma experiência única e sofisticada.
                        </span>
                        <div style={styles.ingredientes}>
                            <span style={styles.ingredientesText}>Ingredientes: </span>
                            <span>Água, aguardente de cana, açúcar, polpa de maracujá.</span>
                            <br />
                            <span style={styles.ingredientesText}>Acidulante:</span>
                            <span>Ácido cítrico ins 330.</span>
                            <br />
                            <span style={styles.ingredientesText}>Corante:</span>
                            <span>Amarelo tartazina ins 102.</span>
                            <br />
                            <span style={styles.vol}>15% vol.</span>
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

export default Maracuja;
