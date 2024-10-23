import React from "react";
import GlobalStyle from "../globalStyle/style.js";
import logo from "../assets/logoheader.jpeg";
import styles from "./style.js";

function Navbar() {
    return (
        <div>
            <GlobalStyle />
            <header style={styles.header}>
                <img src={logo} alt="Logo Cabeçalho" style={styles.logo} />
                <div style={styles.searchContainer}>
                    <input type="text" placeholder="Buscar" style={styles.searchInput} />
                    <button style={styles.searchButton}>
                        <span role="img" aria-label="search">🔍</span>
                    </button>
                </div>
                <div style={styles.menuContainer}>
                    <a href="#catalog" style={styles.menuLink}>Catálogo</a>
                    <a href="#login" style={styles.menuLink}>Entrar / Registrar-se</a>
                </div>
            </header>
            <nav style={styles.navBar}>
                <ul style={styles.navList}>
                    <li style={styles.navItemWithBorder}><a href="#cachacas" style={styles.navLink}>Cachaças</a></li>
                    <li style={styles.navItemWithBorder}><a href="#vodkas" style={styles.navLink}>Vodkas</a></li>
                    <li style={styles.navItemWithBorder}><a href="#licores" style={styles.navLink}>Licores</a></li>
                    <li style={styles.lastNavItem}><a href="#coqueteis" style={styles.navLink}>Coquetéis</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
