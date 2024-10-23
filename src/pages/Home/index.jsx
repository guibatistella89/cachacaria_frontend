import React, { useState } from "react";
import GlobalStyle from "../../globalStyle/style.js";
import logoHeader from "../../assets/logoheader.jpeg";
import NamoImg from "../../assets/Dia_dos_namorados.jpg";
import styles from "./styles.js";
import Navbar from "../../components/navBar.jsx";

function Home() {
    const [activeSlide, setActiveSlide] = useState(0);

    const changeSlide = (index) => {
        setActiveSlide(index);
    };

    return (
        <div>
            
            <div><Navbar /></div>
            

            <div style={styles.slider}> 
                <div style={{ ...styles.slides, transform: `translateX(-${activeSlide * 100}%)` }}>
                    <div style={styles.slide}>
                        <div style={styles.tdesconto}>
                            <h1>20% DE DESCONTO COM O CUPOM:</h1>
                            <div style={styles.inactiveButton}>%20ROMANTICA</div>
                        </div>
                        <img src={NamoImg} alt="Imagem1" style={styles.image1} />
                    </div>
                    <div style={styles.slide}>
                        <img src={NamoImg} alt="Imagem2" style={styles.image} />
                    </div>
                    <div style={styles.slide}>
                        <img src={NamoImg} alt="Imagem3" style={styles.image} />
                    </div>
                    <div style={styles.slide}>
                        <img src={NamoImg} alt="Imagem4" style={styles.image} />
                    </div>
                    <div style={styles.slide}>
                        <img src={NamoImg} alt="Imagem5" style={styles.image} />
                    </div>
                </div>
            </div>

            <div style={styles.manualNavigation}>
                <label
                    onClick={() => changeSlide(0)}
                    style={{
                        ...styles.manualBtn,
                        backgroundColor: activeSlide === 0 ? '#000' : '#fff', // Cor de fundo preto quando ativo
                        color: activeSlide === 0 ? '#FFF' : '#000' // Cor do texto
                    }}
                ></label>
                <label
                    onClick={() => changeSlide(1)}
                    style={{
                        ...styles.manualBtn,
                        backgroundColor: activeSlide === 1 ? '#000' : '#fff',
                        color: activeSlide === 1 ? '#FFF' : '#000'
                    }}
                ></label>
                <label
                    onClick={() => changeSlide(2)}
                    style={{
                        ...styles.manualBtn,
                        backgroundColor: activeSlide === 2 ? '#000' : '#fff',
                        color: activeSlide === 2 ? '#FFF' : '#000'
                    }}
                ></label>
                <label
                    onClick={() => changeSlide(3)}
                    style={{
                        ...styles.manualBtn,
                        backgroundColor: activeSlide === 3 ? '#000' : '#fff',
                        color: activeSlide === 3 ? '#FFF' : '#000'
                    }}
                ></label>
                <label
                    onClick={() => changeSlide(4)}
                    style={{
                        ...styles.manualBtn,
                        backgroundColor: activeSlide === 4 ? '#000' : '#fff',
                        color: activeSlide === 4 ? '#FFF' : '#000'
                    }}
                ></label>
            </div>

            <div style={styles.content}>
                <h1 style={styles.h1}>Bebidas Mais Vendidas!</h1> 
            </div>
        </div>
    );
}

export default Home;