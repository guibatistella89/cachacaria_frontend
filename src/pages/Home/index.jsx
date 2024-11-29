import React, { useState } from "react";
import GlobalStyle from "../../globalStyle/style.js";
import NamoImg from "../../assets/Dia_dos_namorados.jpg";
import blackFriday from "../../assets/blackCachaca.webp";
import Halloween from "../../assets/Halloween.jpg";
import natal from "../../assets/natalPromotion.jpg";
import pascoa from "../../assets/felizPascoa.jpg";
import styles from "./styles.js";
import Navbar from "../../components/navBar.jsx";
import Footer from "../../components/Footer.jsx";
import cachacaEscuro from "../../assets/cachacaEscuro.jpg";
import vodkaEscuro from "../../assets/vodkaEscuro.jpg";
import bitterEscuro from "../../assets/bitterEscuro.jpg";
import canelinhaEscuro from "../../assets/canelinhaEscuro.jpg";
import bananaEscuro from "../../assets/bananaEscuro.jpg";
import limaozinhoEscuro from "../../assets/limaozinhoEscuro.jpg";

import {
    CartContainer,
    MostWantedSection,
    ProductCard,
} from './styles';

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
        <div style={styles.inactiveButton}>CUPOM20</div>
    </div>
    <img src={blackFriday} alt="Imagem1" style={styles.image} />
    <div style={styles.dataPrev}>
        <h1>A Black Friday CHEGOU!</h1>
        <div>Válido até: 29/11/2024</div>
    </div>
</div>

                    {/* Slide 2 */}
                    <div style={styles.slide}>
    <div style={styles.dataPrevContainer}>
        <h1>10% DE DESCONTO COM <br />O CUPOM:</h1>
        <div style={styles.inactiveButton}>CUPOM10</div>
    </div>
    <img src={Halloween} alt="Imagem1" style={styles.image} />
    <div style={styles.dataPrev}>
        <h1>Um desconto assustador '0'</h1>
        <div>Válido até: 31/10/2024</div>
    </div>
</div>

                    {/* Slide 3 */}
                    <div style={styles.slide}>
    <div style={styles.dataPrevContainer}>
        <h1>20% DE DESCONTO COM <br />O CUPOM:</h1>
        <div style={styles.inactiveButton}>CUPOM20</div>
    </div>
    <img src={natal} alt="Imagem1" style={styles.image} />
    <div style={styles.dataPrev}>
        <h1>FELIZ NATAL COM PRESENTÃO</h1>
        <div>Válido até: 25/12/2024</div>
    </div>
</div>

                    {/* Slide 4 */}
                    <div style={styles.slide}>
    <div style={styles.dataPrevContainer}>
        <h1>20% DE DESCONTO COM <br />O CUPOM:</h1>
        <div style={styles.inactiveButton}>CUPOM20</div>
    </div>
    <img src={pascoa} alt="Imagem1" style={styles.image} />
    <div style={styles.dataPrev}>
        <h1>Adoce sua vida com CUPOM</h1>
        <div>Válido até: 12/06</div>
    </div>
</div>

                    {/* Slide 5 */}
                    <div style={styles.slide}>
    <div style={styles.dataPrevContainer}>
        <h1>20% DE DESCONTO COM <br />O CUPOM:</h1>
        <div style={styles.inactiveButton}>CUPOM20</div>
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
        <div style={styles.inactiveButton}>CUPOM20</div>
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
            <CartContainer>
                <MostWantedSection>
                    <h2>Mais procurados</h2>
                    <div className="product-grid">
                        <ProductCard>
                            <img src={vodkaEscuro} alt="Vodka" />
                            <div className="info">
                                <h3>VODKA 900ml</h3>
                                <p>R$ 15,00</p>
                            </div>
                        </ProductCard>
                        <ProductCard>
                            <img src={cachacaEscuro} alt="Cachaça" />
                            <div className="info">
                                <h3>CACHAÇA 900ml</h3>
                                <p>R$ 15,00</p>
                            </div>
                        </ProductCard>
                        <ProductCard>
                            <img src={canelinhaEscuro} alt="Canelinha" />
                            <div className="info">
                                <h3>CANELINHA 900ml</h3>
                                <p>R$ 15,00</p>
                            </div>
                        </ProductCard>
                        <ProductCard>
                            <img src={bananaEscuro} alt="Banana" />
                            <div className="info">
                                <h3>BANANA 900ml</h3>
                                <p>R$ 15,00</p>
                            </div>
                        </ProductCard>
                        <ProductCard>
                            <img src={limaozinhoEscuro} alt="Limãozinho" />
                            <div className="info">
                                <h3>LIMÃOZINHO 900ml</h3>
                                <p>R$ 15,00</p>
                            </div>
                        </ProductCard>
                        <ProductCard>
                            <img src={bitterEscuro} alt="Bitter" />
                            <div className="info">
                                <h3>BITTER 900ml</h3>
                                <p>R$ 15,00</p>
                            </div>
                        </ProductCard>
                    </div>
                </MostWantedSection>
            </CartContainer>
        <Footer />
        </div>
    );
}

export default Home;
