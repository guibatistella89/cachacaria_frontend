import React from 'react';
import { Link } from "react-router-dom";
import GlobalStyle, { GlobalButtonLayout } from "../../globalStyle/style.js"; // Importando o estilo global
import styles, { CheckoutContainer, FreightAndSummary, FreightSection, SummarySection } from './styles';
import Navbar from "../../components/navBar.jsx";
import DataPanel from "../../components/dataPanel.jsx"

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <div className='body' style={styles.body}>               
        <FullCheckout />
      </div>
    </div>
  );
};

export default Checkout;

function FullCheckout() {
  return (
    <CheckoutContainer>
      <DataPanel greenButtonText="Salvar Informações" redButtonText="Sair"/>
      <FreightAndSummary>
        <FreightSection>
          <h3>Frete</h3>
          <div>
            <input type="radio" id="azul" name="frete" />
            <label htmlFor="azul">R$ 17,20 - Azul (4 a 5 dias úteis)</label>
          </div>
          <div>
            <input type="radio" id="sedex" name="frete" />
            <label htmlFor="sedex">R$ 18,20 - Sedex (3 a 4 dias úteis)</label>
          </div>
          <div>
            <input type="radio" id="express" name="frete" />
            <label htmlFor="express">R$ 23,10 - Express (2 a 5 dias úteis)</label>
          </div>
          <div>
            <input type="radio" id="vip" name="frete" />
            <label htmlFor="vip">R$  26,90 - VIP Delivery (2 a 3 dias corridos)</label>
          </div>
        </FreightSection>

        <SummarySection>
          <h3>Resumo</h3>
          <p>Total dos produtos: <span>R$ 109,99</span></p>
          <p>Frete: <span>R$ 18,20</span></p>
          <p>Total: <span>R$ 128,19</span></p>
        </SummarySection>
      </FreightAndSummary>
      <div className='SumaryBtn'>
        <GlobalButtonLayout className="whiteBtn">Voltar</GlobalButtonLayout>
        <GlobalButtonLayout className="yellowBtn">Continuar</GlobalButtonLayout>
      </div>
    </CheckoutContainer>
  );
}