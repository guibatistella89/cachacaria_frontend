import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.js";
import logoHeader from "../../assets/LOGO.png";
import logoPreta from "../../assets/logopreta.jpeg"; 
import GlobalStyle from "../../globalStyle/style.js";
import AuthContext from '../../auth/AuthContext.jsx';
import withoutAuth from '../../auth/withAuth.jsx';

function Login() {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData);
    };


    return (
        <div style={styles.pageContainer}>
            <GlobalStyle />
            <header style={styles.header}>
            <a href="/">
                <img src={logoHeader} alt="Logo Cabeçalho" style={styles.logoHeader} />
            </a>
            </header>
            <h1 style={styles.title}>Bem-vindo! Faça seu login aqui.</h1>
            <div style={styles.loginContainer}> 
                <div style={styles.loginCard}>
                    <img src={logoPreta} alt="Logo Preta" style={styles.logoPreta} /> 
                    <input type="email" name="email" placeholder="Insira seu email aqui:" style={styles.input} value={formData.email} onChange={handleChange}/>
                    <input type="password" name="password" placeholder="Insira sua senha aqui:" style={styles.input} value={formData.password} onChange={handleChange}/>
                    <button style={styles.button} type="submit" onClick={(e) => handleSubmit(e)}>Entrar</button>
                    <p style={styles.subtitle}>Ainda não possui uma conta?<br /> 
                    <Link to="/register" style={{ color: '#CFB081', textDecoration: 'underline' }}>Faça seu cadastro clicando aqui!</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default withoutAuth(Login);
