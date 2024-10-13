import React from "react"
import styles from "./styles.js";
import logoHeader from "../../../assets/logoheader.jpeg"
import GlobalStyle from "../../../globalStyle/style.js"; // Importando o estilo global

function Limazinho() {
    return (
        <div style={styles.body}>
            <GlobalStyle />
            <header style={styles.header}>
                <img src={logoHeader} alt="Logo Cabeçalho" style={styles.logoHeader} />
            </header>
        </div>
    )
}

export default Limazinho