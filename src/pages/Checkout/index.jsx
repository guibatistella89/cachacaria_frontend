import React from 'react';
import { Link } from "react-router-dom";
import logoHeader from "../../assets/logoheader.jpeg";
import { CheckoutContainer, Header, FormSection, InputGroup, AddressSection, FreightAndSummary, FreightSection, SummarySection, ButtonGroup } from './styles';

const Checkout = () => {
  return (
    <CheckoutContainer>
      <Header>
        <img src={logoHeader} alt="Logo Cabeçalho" />
      </Header>

      <h2>Meus Dados</h2>
      <div className="form-container">
        <FormSection>
          <h3>Dados Pessoais:</h3>
          <InputGroup>
            <label>Nome</label>
            <input type="text" placeholder="Luíza Fernanda Ribeiro dos Santos" />
          </InputGroup>
          <InputGroup>
            <label>Telefone Celular</label>
            <input type="text" placeholder="(95) 2547-1891" />
          </InputGroup>
          <InputGroup>
            <label>Whatsapp</label>
            <input type="text" placeholder="(95) 99912-6177" />
          </InputGroup>
          <InputGroup>
            <label>E-mail</label>
            <input type="email" placeholder="luiza.ferbi@mail.com" />
          </InputGroup>
          <InputGroup>
            <label>Data de Nascimento</label>
            <input type="date" />
          </InputGroup>
          <ButtonGroup>
            <button className="save">Salvar</button>
            <button className="logout">Logout</button>
          </ButtonGroup>
        </FormSection>

        <AddressSection>
          <h3>Endereço de Entrega:</h3>
          <InputGroup>
            <label>CEP</label>
            <input type="text" placeholder="79900-502" />
          </InputGroup>
          <InputGroup>
            <label>Logradouro</label>
            <input type="text" placeholder="Rua Madalena Manvailer" />
          </InputGroup>
          <InputGroup>
            <label>Número</label>
            <input type="text" placeholder="396" />
          </InputGroup>
          <InputGroup>
            <label>Complemento</label>
            <input type="text" placeholder="Apto 4" />
          </InputGroup>
          <InputGroup>
            <label>Bairro</label>
            <input type="text" placeholder="Parque dos Ipês III" />
          </InputGroup>
          <InputGroup>
            <label>Cidade</label>
            <input type="text" placeholder="Ponta Porã" />
          </InputGroup>
          <InputGroup>
            <label>UF</label>
            <input type="text" placeholder="MS" />
          </InputGroup>
        </AddressSection>
      </div>

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

      <ButtonGroup>
        <Link to="/">
          <button className="back">Voltar</button>
        </Link>
        <Link to="/">
          <button className="continue">Continuar</button>
        </Link>
      </ButtonGroup>
    </CheckoutContainer>
  );
};

export default Checkout;
