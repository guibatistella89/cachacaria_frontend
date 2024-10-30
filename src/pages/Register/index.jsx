import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.js";
import logoHeader from "../../assets/LOGO.png";
import logoPreta from "../../assets/logopreta.jpeg"; 
import GlobalStyle from "../../globalStyle/style.js";

export default function Register() {
    return (
        <div style={styles.pageContainer}>
            <GlobalStyle />
            <header style={styles.header}>
                <img src={logoHeader} alt="Logo Cabeçalho" style={styles.logoHeader} />
            </header>
            <h1 style={styles.title}>Bem-vindo! Faça seu cadastro aqui.</h1>
            <div style={styles.loginContainer}> 
                <div style={styles.loginCard}>
                    <img src={logoPreta} alt="Logo Preta" style={styles.logoPreta} /> 
                    <input type="email" placeholder="Insira seu email aqui:" style={styles.input} />
                    <input type="password" placeholder="Insira sua senha aqui:" style={styles.input} />
                    <input type="password" placeholder="Confirme sua senha aqui:" style={styles.input} />
                    <button style={styles.button}>Cadastrar</button>
                    <p style={styles.subtitle}>Já possui uma conta?<br /> 
                    <Link to="/" style={{ color: '#CFB081', textDecoration: 'underline' }}>Faça seu login clicando aqui!</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
