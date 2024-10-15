import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.js";
import logoHeader from "../../assets/logoheader.jpeg";
import logoPreta from "../../assets/logopreta.jpeg"; 

export default function Login() {
    return (
        <div style={styles.pageContainer}>
            <header style={styles.header}>
                <img src={logoHeader} alt="Logo Cabeçalho" style={styles.logoHeader} />
            </header>
            <h1 style={styles.title}>Bem-vindo! Faça seu login aqui.</h1>
            <div style={styles.loginContainer}> 
                <div style={styles.loginCard}>
                    <img src={logoPreta} alt="Logo Preta" style={styles.logoPreta} /> 
                    <input type="email" placeholder="Insira seu email aqui:" style={styles.input} />
                    <input type="password" placeholder="Insira sua senha aqui:" style={styles.input} />
                    <Link to="/cart">
                        <button style={styles.button}>Entrar</button>
                    </Link>
                    <p style={styles.subtitle}>Ainda não possui uma conta?<br /> 
                    <Link to="/register" style={{ color: '#CFB081', textDecoration: 'underline' }}>Faça seu cadastro clicando aqui!</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
