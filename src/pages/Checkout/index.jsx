import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import GlobalStyle, { GlobalButtonLayout } from "../../globalStyle/style.js"; // Importando o estilo global
import styles, { CheckoutContainer, FreightAndSummary, FreightSection, SummarySection, CartImageContainer} from './styles';
import Navbar from "../../components/navBar.jsx";
import Footer from "../../components/Footer.jsx";
import DataPanel from "../../components/dataPanel.jsx"
import carrinhoStage from "../../assets/checkoutStage.png";



const Checkout = () => {
  const [paymentLink, setPaymentLink] = useState(null); // Armazenar o link de pagamento
  const [error, setError] = useState(null); // Para armazenar erros da requisição

  // Fazendo a requisição ao backend para obter o link de pagamento
  useEffect(() => {
    const fetchPaymentLink = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/payment-link"); // Chama o backend Flask
        setPaymentLink(response.data.payment_link); // Armazena o link na variável state
      } catch (error) {
        setError("Erro ao buscar o link de pagamento. Tente novamente mais tarde.");
        console.error("Erro ao buscar o link de pagamento", error); // Em caso de erro
      }
    };

    fetchPaymentLink(); // Chama a função quando o componente for montado
  }, []); // O array vazio garante que a requisição será feita apenas uma vez

  // Enquanto o link de pagamento não estiver disponível, exibe uma mensagem de carregamento ou erro
  if (error) {
    return <div>{error}</div>;
  }

  if (!paymentLink) {
    return <div>Carregando link de pagamento...</div>;
  }

  return (
    <div>
      <Navbar />
      <CartImageContainer>
        <img src={carrinhoStage} alt="Checkout" />
      </CartImageContainer>
      <div className='body' style={styles.body}>
        <FullCheckout paymentLink={paymentLink} />
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;

function FullCheckout({ paymentLink }) {
  return (
    <CheckoutContainer>
      <DataPanel greenButtonText="Salvar Informações" redButtonText="Sair da conta" />
      {/* Seção comentada para o momento */}
      {/* <FreightAndSummary>
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
            <label htmlFor="vip">R$ 26,90 - VIP Delivery (2 a 3 dias corridos)</label>
          </div>
        </FreightSection>

        <SummarySection>
          <h3>Resumo</h3>
          <p>Total dos produtos: <span>R$ 109,99</span></p>
          <p>Frete: <span>R$ 18,20</span></p>
          <p>Total: <span>R$ 128,19</span></p>
        </SummarySection>
      </FreightAndSummary> */}

      <div className='SumaryBtn'>
        <Link to="/cart">
          <GlobalButtonLayout className="whiteBtn">Voltar</GlobalButtonLayout>
        </Link>
        <GlobalButtonLayout className="yellowBtn">
        <a 
  href={paymentLink} 
  style={{ textDecoration: "none", color: "inherit" }} 
  target="_blank" 

  rel="noopener noreferrer"
>
  Pagar agora
</a>
        </GlobalButtonLayout>
      </div>
    </CheckoutContainer>
  );
}
