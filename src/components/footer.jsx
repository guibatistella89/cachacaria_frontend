import React from "react";
import styles from "./footerStyles.js";
import logo from "../assets/logopreta.jpeg";
import whatsappIcon from "../assets/whatsappIcon.png";
import phoneIcon from "../assets/phoneIcon4.png";


function Footer() {
    return (
        <footer style={styles.footer}>
            <div style={styles.topSection}>
                <div style={styles.section}>
                    <a href="#mais-vendidas" style={styles.linkA}>Mais vendidas</a>
                    <a href="#clientes" style={styles.linkB}>Clientes</a>
                    <a href="#quem-somos" style={styles.linkB}>Quem somos</a>
                    <a href="#como-comprar" style={styles.linkB}>Como comprar</a>
                </div>
                
                <div style={styles.centerSection}>
                    <img src={logo} alt="Logo Cachaçaria" style={styles.logo} />
                    <p style={styles.cnpj}>CNPJ 49.129.031/0001-36</p>
                </div>
                
                <div style={styles.section}>
                    <p style={styles.text}>Venha nos visitar!</p>
                    <p style={styles.address}>Rua Aloísio Guesser 2201<br />88180-000 Antônio Carlos<br />SC - Brasil</p>
                    
                </div>

                <div style={styles.contact}>
                <p style={styles.textA}>Fale conosco!</p>
                    <img src={whatsappIcon} alt="WhatsApp" style={styles.icon} />
                    <span>48 99996-8556<br></br></span>
                    <img src={phoneIcon} alt="Telefone" style={styles.icon} />
                    <span>48 2100-1010</span>
                    <p style={styles.email}>@CACHACARIAANTONIOCARLOS</p>
                </div>
            </div>
            
            
        </footer>
    );
}

export default Footer;
