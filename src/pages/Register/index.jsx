import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./styles.js";
import logoHeader from "../../assets/LOGO.png";
import logoPreta from "../../assets/logopreta.jpeg"; 
import GlobalStyle from "../../globalStyle/style.js";

export default function Register() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

     
        if (!email || !senha || !confirmarSenha) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

       
        if (senha !== confirmarSenha) {
            setMensagem('As senhas não coincidem!');
            alert('As senhas devem ser iguais!');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    senha,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Usuário cadastrado com sucesso!');
                navigate('/login'); 
            } else {
               
                //if (data.message === 'E-mail já cadastrado') {
                    alert('Este e-mail já está cadastrado. Tente fazer login ou use outro e-mail.');
                //} 
                
                //else {
                // alert(`Erro: ${data.message}`);
                //}
            }
        } catch (error) {
            alert('Ocorreu um erro ao tentar cadastrar. Tente novamente mais tarde.');
        }
    };

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
                    <input 
                        type="email" 
                        placeholder="Insira seu email aqui:" 
                        style={styles.input} 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder="Insira sua senha aqui:" 
                        style={styles.input} 
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder="Confirme sua senha aqui:" 
                        style={styles.input} 
                        value={confirmarSenha} 
                        onChange={(e) => setConfirmarSenha(e.target.value)} 
                    />
                    <button style={styles.button} onClick={handleSubmit}>Cadastrar</button>
                    <p style={styles.subtitle}>Já possui uma conta?<br /> 
                    <Link to="/login" style={{ color: '#CFB081', textDecoration: 'underline' }}>Faça seu login clicando aqui!</Link>
                    </p>
                    <p>{mensagem}</p>
                </div>
            </div>
        </div>
    );
}
