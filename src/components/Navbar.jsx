import React from "react";
import GlobalStyle from "../globalStyle/style.js";
import logo from "../assets/LOGO.png";
import styles from "./style.js";
import menu from "../assets/icon_perfil.png";
import perfil from "../assets/icon_menu.png";
import lupa from "../assets/lupa_icon.png";

function Navbar() {
    return (
        <div>
            <GlobalStyle />
            <header style={styles.header}>
                <a href="/">
                <img src={logo} alt="Logo Cabeçalho" style={styles.logo} />
                </a>
                <div style={styles.searchContainer}>
                    <input type="text" placeholder="Buscar" style={styles.searchInput} />
                    <button style={styles.searchButton}>
                        <span role="img" aria-label="search"><img src={lupa} style={styles.lupa} /></span>
                    </button>
                </div>
                <div style={styles.menuContainer}>
                    <div style={styles.teste1}>
                    <a href="login">
                        <img src={menu} alt="menuCabecalho" style={styles.menu} />
                        </a>
                        <a href="login" style={styles.menuLink}>Entrar / Registrar-se</a>
                    </div>
                    <div style={styles.teste1}>
                    <a href="catalog">
                        <img src={perfil} alt="perfilCabacalho" style={styles.perfil} />
                        </a>
                        <a href="catalog" style={styles.menuLink}>Catálogo</a>
                    </div>
                </div>
            </header>
            <nav style={styles.navBar}>
                <ul style={styles.navList}>
                    <li style={styles.navItemWithBorder}><a href="catalog" style={styles.navLink}>Cachaças</a></li>
                    <li style={styles.navItemWithBorder}><a href="catalog" style={styles.navLink}>Vodkas</a></li>
                    <li style={styles.navItemWithBorder}><a href="catalog" style={styles.navLink}>Licores</a></li>
                    <li style={styles.lastNavItem}><a href="catalog" style={styles.navLink}>Coquetéis</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
