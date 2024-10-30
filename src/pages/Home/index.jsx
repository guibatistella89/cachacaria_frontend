import React, { useState } from "react";
import GlobalStyle from "../../globalStyle/style.js";
import NamoImg from "../../assets/Dia_dos_namorados.jpg";
import styles from "./styles.js";
import Navbar from "../../components/navBar.jsx";
import Footer from "../../components/Footer.jsx";

function Home() {
    const [activeSlide, setActiveSlide] = useState(0);

    const changeSlide = (index) => {
        setActiveSlide(index);
    };

    return (
        <div>
            <Navbar />

            <div style={styles.slider}>
                <div style={{ ...styles.slides, transform: `translateX(-${activeSlide * 100}%)` }}>
                    
                    {/* Slide 1 */}
                    <div style={styles.slide}>
    <div style={styles.dataPrevContainer}>
        <h1>20% DE DESCONTO COM <br />O CUPOM:</h1>
        <div style={styles.inactiveButton}>%20ROMANTICA</div>
    </div>
    <img src={NamoImg} alt="Imagem1" style={styles.image} />
    <div style={styles.dataPrev}>
        <h1>DIA DOS NAMORADOS</h1>
        <div>Válido até: 12/06</div>
    </div>
</div>

                    {/* Slide 2 */}
                    <div style={styles.slide}>
    <div style={styles.dataPrevContainer}>
        <h1>20% DE DESCONTO COM <br />O CUPOM:</h1>
        <div style={styles.inactiveButton}>%20ROMANTICA</div>
    </div>
    <img src={NamoImg} alt="Imagem1" style={styles.image} />
    <div style={styles.dataPrev}>
        <h1>DIA DOS NAMORADOS</h1>
        <div>Válido até: 12/06</div>
    </div>
</div>

                    {/* Slide 3 */}
                    <div style={styles.slide}>
    <div style={styles.dataPrevContainer}>
        <h1>20% DE DESCONTO COM <br />O CUPOM:</h1>
        <div style={styles.inactiveButton}>%20ROMANTICA</div>
    </div>
    <img src={NamoImg} alt="Imagem1" style={styles.image} />
    <div style={styles.dataPrev}>
        <h1>DIA DOS NAMORADOS</h1>
        <div>Válido até: 12/06</div>
    </div>
</div>

                    {/* Slide 4 */}
                    <div style={styles.slide}>
    <div style={styles.dataPrevContainer}>
        <h1>20% DE DESCONTO COM <br />O CUPOM:</h1>
        <div style={styles.inactiveButton}>%20ROMANTICA</div>
    </div>
    <img src={NamoImg} alt="Imagem1" style={styles.image} />
    <div style={styles.dataPrev}>
        <h1>DIA DOS NAMORADOS</h1>
        <div>Válido até: 12/06</div>
    </div>
</div>

                    {/* Slide 5 */}
                    <div style={styles.slide}>
    <div style={styles.dataPrevContainer}>
        <h1>20% DE DESCONTO COM <br />O CUPOM:</h1>
        <div style={styles.inactiveButton}>%20ROMANTICA</div>
    </div>
    <img src={NamoImg} alt="Imagem1" style={styles.image} />
    <div style={styles.dataPrev}>
        <h1>DIA DOS NAMORADOS</h1>
        <div>Válido até: 12/06</div>
    </div>
</div>

                    {/* Slide 6 */}
                    <div style={styles.slide}>
    <div style={styles.dataPrevContainer}>
        <h1>20% DE DESCONTO COM <br />O CUPOM:</h1>
        <div style={styles.inactiveButton}>%20ROMANTICA</div>
    </div>
    <img src={NamoImg} alt="Imagem1" style={styles.image} />
    <div style={styles.dataPrev}>
        <h1>DIA DOS NAMORADOS</h1>
        <div>Válido até: 12/06</div>
    </div>
</div>
                    
                </div>
            </div>

            {/* Navegação manual */}
            <div style={styles.manualNavigation}>
                {[0, 1, 2, 3, 4].map((index) => (
                    <label
                        key={index}
                        onClick={() => changeSlide(index)}
                        style={{
                            ...styles.manualBtn,
                            backgroundColor: activeSlide === index ? '#000' : '#fff',
                            color: activeSlide === index ? '#FFF' : '#000'
                        }}
                    ></label>
                ))}
            </div>

            <div style={styles.content}>
                <h1 style={styles.h1}>Bebidas Mais Vendidas!</h1> 
            </div>

            <Footer />
        </div>
    );
}

export default Home;
