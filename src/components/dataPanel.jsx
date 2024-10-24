import { GlobalButtonLayout } from "../globalStyle/style.js"; // Importando o estilo global
import { FormSection, InputGroup, AddressSection, DataContainer } from '../components/style.js';


export default function DataPanel() {
    return (
        <DataContainer>
            <h2>Meus Dados</h2>
            <div className='meus-dados'>
                <div className="form-container">
                    <DataForm />
                    <AddressForm />
                </div>
                <ButtonContainer />
            </div>
        </DataContainer >
    );
}

function DataForm() {
    return (
        <FormSection>
            <h3>Dados Pessoais:</h3>
            <InputGroup>
                <label htmlFor="fullName">Nome Completo</label>
                <input id="fullName" type="text" name="nomeCompleto" required />
            </InputGroup>
            <InputGroup>
                <label htmlFor="phone">Telefone</label>
                <input id="phone" type="tel" name="telefone" required />
            </InputGroup>
            <InputGroup>
                <label htmlFor="whatsapp">WhatsApp</label>
                <input id="whatsapp" type="tel" name="whatsapp" required />
            </InputGroup>
            <InputGroup>
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" name="email" required />
            </InputGroup>
            <InputGroup>
                <label htmlFor="bdate ">Data de Nascimento</label>
                <input id="bdate " type="date" name="dataNascimento" required />
            </InputGroup>
        </FormSection>
    );
}

function AddressForm() {
    return (
        <AddressSection>
            <h3>Endereço de Entrega:</h3>
            <InputGroup>
                <label htmlFor="cep">CEP</label>
                <input id="cep" type="text" name="cep" required />
            </InputGroup>
            <InputGroup>
                <label htmlFor="street">Logradouro</label>
                <select id="street" name="street" required>
                    <option value="" disabled unselectable="on">Selecione uma opção</option>
                </select>
            </InputGroup>
            <InputGroup>
                <label htmlFor="number">Número</label>
                <input id="number" type="number" name="numero" required />
            </InputGroup>
            <InputGroup>
                <label htmlFor="complement">Complemento</label>
                <input id="complement" type="text" name="complement" required />
            </InputGroup>
            <InputGroup>
                <label htmlFor="district">Bairro</label>
                <select id="district" name="district" required>
                    <option value="" disabled unselectable="on">Selecione uma opção</option>
                </select>
            </InputGroup>
            <InputGroup>
                <label htmlFor="city">Cidade</label>
                <select id="city" name="city" required>
                    <option value="" disabled unselectable="on">Selecione uma opção</option>
                </select>
            </InputGroup>
            <InputGroup>
                <label htmlFor="state">Estado</label>
                <select id="state" name="state" required>
                    <option value="" disabled unselectable="on">Selecione uma opção</option>
                </select>
            </InputGroup>
        </AddressSection>
    );
}

function ButtonContainer() {
    return (
        <div className='SumaryBtn'>
            <GlobalButtonLayout className="greenBtn" onClick={() => { }}>Salvar</GlobalButtonLayout>
            <GlobalButtonLayout className="redBtn" onClick={() => { }}>Logout</GlobalButtonLayout>
        </div>
    );
}