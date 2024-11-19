import React from "react";
import GlobalStyle from "../globalStyle/style.js";
import logo from "../assets/LOGO.png";
import styles from "./style.js";
import menu from "../assets/icon_perfil.png";
import perfil from "../assets/icon_menu.png";
import lupa from "../assets/lupa_icon.png";
import carrinho from "../assets/carrinho.png";
import { useAuth } from "../auth/AuthContext.jsx"; // Importa o contexto de autenticação

function Navbar() {
    const { getTokenFromStorage, logout } = useAuth();
    const isLoggedIn = !!getTokenFromStorage(); // Sempre verifica o token atualizado

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
                        <span role="img" aria-label="search">
                            <img src={lupa} style={styles.lupa} />
                        </span>
                    </button>
                </div>
                <div style={styles.menuContainer}>
                    <div style={styles.teste1}>
                        {isLoggedIn ? (
                            <>
                                <a href="/profile">
                                    <img src={menu} alt="Menu Cabeçalho" style={styles.menu} />
                                </a>
                                <a href="/profile" style={styles.menuLink}>Perfil</a>
                            </>
                        ) : (
                            <>
                                <a href="login">
                                    <img src={menu} alt="Menu Cabeçalho" style={styles.menu} />
                                </a>
                                <a href="login" style={styles.menuLink}>Entrar / Registrar-se</a>
                            </>
                        )}
                    </div>
                    <div style={styles.teste1}>
                        <a href="catalog">
                            <img src={perfil} alt="Perfil Cabeçalho" style={styles.perfil} />
                        </a>
                        <a href="catalog" style={styles.menuLink}>Catálogo</a>
                    </div>
                    {isLoggedIn && (
                        <>
                            <div style={styles.teste1}>
                                <a href="/Cart">
                                    <img src={carrinho} alt="Carrinho" style={styles.menu} />
                                </a>
                                <a href="/Cart" style={styles.menuLink}>Carrinho</a>
                            </div>
                            <div style={styles.teste1}>
                                <button
                                    onClick={logout}
                                    style={{
                                        ...styles.menuLink,
                                        border: "none",
                                        background: "none",
                                        cursor: "pointer",
                                    }}
                                >
                                    Sair
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </header>
            <nav style={styles.navBar}>
                <ul style={styles.navList}>
                    <li style={styles.navItemWithBorder}>
                        <a href="catalog" style={styles.navLink}>Cachaças</a>
                    </li>
                    <li style={styles.navItemWithBorder}>
                        <a href="catalog" style={styles.navLink}>Vodkas</a>
                    </li>
                    <li style={styles.navItemWithBorder}>
                        <a href="catalog" style={styles.navLink}>Licores</a>
                    </li>
                    <li style={styles.lastNavItem}>
                        <a href="catalog" style={styles.navLink}>Coquetéis</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;