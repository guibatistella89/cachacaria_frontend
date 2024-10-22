import React from "react";
import { Link } from "react-router-dom";
import logoHeader from "../../assets/logoheader.jpeg";
import GlobalStyle from "../../globalStyle/style.js"; // Importando o estilo global
import styles, { ContentInput } from './styles.js';

export default function Profile() {
    return (
        <div style={styles.body}>
            <GlobalStyle />
            <Header />
            <DataPanel />

        </div>
    );
}


//Header Temporário
function Header() {
    return (
        <header style={styles.header}>
            <img src={logoHeader} alt="Logo Cabeçalho" style={styles.logoHeader} />
        </header>
    );
}

//Painel de dados
function DataPanel() {
    return (
        <div className="fullPanel" style={styles.fullPanel}>
            <div className="mainHeader" style={styles.mainHeader}>
                <h2 style={styles.h2}>Meus Dados</h2>
            </div>
            <div className="forms" style={styles.forms}>
                <BasicData />
                <AddressData />
            </div>
        </div>
    )
}




//Form que contém os dados Básicos
function BasicData() {
    return (
        <div className="BasicForm" style={styles.contentForm}>
            <div style={styles.subHeader}>
                <h3 style={styles.h3}>Informações Básicas</h3>
            </div>
            <div style={styles.infBasic}>
                <form>
                    <ContentInput>
                        <label htmlFor="fullName">Nome Completo</label>
                        <input id="fullName" type="text" name="nomeCompleto" required />
                    </ContentInput>
                    <ContentInput>
                        <label htmlFor="phone">Telefone</label>
                        <input id="phone" type="tel" name="telefone" required />
                    </ContentInput>
                    <ContentInput>
                        <label htmlFor="whatsapp">WhatsApp</label>
                        <input id="whatsapp" type="tel" name="whatsapp" required />
                    </ContentInput>
                    <ContentInput>
                        <label htmlFor="email">E-mail</label>
                        <input id="email" type="email" name="email" required />
                    </ContentInput>
                    <ContentInput>
                        <label htmlFor="bdate ">Data de Nascimento</label>
                        <input id="bdate " type="date" name="dataNascimento" required />
                    </ContentInput>
                </form>
            </div>
        </div>
    );
}


//Form que contém os dados de endereço
function AddressData() {
    return (
        <div className="AddresForm" style={styles.contentForm}>
            <div style={styles.subHeader}>
                <h3 style={styles.h3}>Endereço</h3>
            </div>
            <div style={styles.infAdress}>
                <form>
                    <ContentInput>
                        <label htmlFor="cep">CEP</label>
                        <input id="cep" type="text" name="cep" required />
                    </ContentInput>

                    <ContentInput>
                        <label htmlFor="street">Logradouro</label>
                        <select id="street" name="street" required>
                            <option value="" disabled unselectable="on">Selecione uma opção</option>
                        </select>
                    </ContentInput>
                    <ContentInput>
                        <label htmlFor="number">Número</label>
                        <input id="number" type="number" name="numero" required />
                    </ContentInput>
                    <ContentInput>
                        <label htmlFor="complement">Complemento</label>
                        <input id="complement" type="text" name="complement" required />
                    </ContentInput>
                    <ContentInput>
                        <label htmlFor="district">Bairro</label>
                        <select id="district" name="district" required>
                            <option value="" disabled unselectable="on">Selecione uma opção</option>
                        </select>
                    </ContentInput>
                    <ContentInput>
                        <label htmlFor="city">Cidade</label>
                        <select id="city" name="city" required>
                            <option value="" disabled unselectable="on">Selecione uma opção</option>
                        </select>
                    </ContentInput>
                    <ContentInput>
                        <label htmlFor="state">Estado</label>
                        <select id="state" name="state" required>
                            <option value="" disabled unselectable="on">Selecione uma opção</option>
                        </select>
                    </ContentInput>
                </form>
            </div>
        </div>
    );
}
