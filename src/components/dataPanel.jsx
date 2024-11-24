import { GlobalButtonLayout } from "../globalStyle/style.js";
import { FormSection, InputGroup, AddressSection, DataContainer } from '../components/style.js';
import { useState, useEffect } from 'react';
import api from '../api/api.js';
import axios from 'axios';
import CitySelector from './CitySelector';

function DataPanel({ greenButtonText, redButtonText, userId }) {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [dta_nascimento, setDtaNascimento] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);

    const idUserSession = userId || 3;

    useEffect(() => {
        const getUserIdent = async () => {
            try {
                const response = await api.get(`/api/ident/${idUserSession}`);
                if (response.data.message === 'IdentNotFound') {
                    return;
                }
                const userData = response.data;
                console.log(userData);

                const formattedDate = userData.dta_nascimento 
                ? new Date(userData.dta_nascimento).toISOString().split('T')[0]
                : '';

                setNome(userData.nome || '');
                setTelefone(userData.telefone || '');
                setWhatsapp(userData.whatsapp || '');
                setDtaNascimento(formattedDate || '');
                setCep(userData.cep || '');
                setLogradouro(userData.logradouro || '');
                setNumero(userData.numero || '');
                setComplemento(userData.complemento || '');
                setSelectedCity(userData.id_cidade || null);
            } catch (error) {
                console.error("Erro ao carregar os dados do usuário:", error);
                alert("Erro ao carregar os dados do usuário.");
            }
        };
        getUserIdent();
    }, [idUserSession]);

    const handleSave = async () => {
        try {
            if (!idUserSession || !selectedCity) {
                console.error("User ID ou cidade não disponível");
                alert("Erro: ID do usuário ou cidade não encontrado.");
                return;
            }

            const data = {
                userId: idUserSession,
                nome: nome,
                telefone: telefone,
                whatsapp: whatsapp,
                dta_nascimento: dta_nascimento,
                cep: cep,
                logradouro: logradouro,
                numero: numero,
                complemento: complemento,
                id_cidade: selectedCity.id,
            };

            const response = await axios.post('http://localhost:3001/api/users/add-identification', data);

            if (response.status === 200) {
                console.log("Identificação salva com sucesso!", response.data);
                alert("Dados Salvos com Sucesso!");
            }
        } catch (error) {
            console.error("Erro ao salvar identificação:", error);
            alert("Erro ao salvar identificação. Verifique se existem campos em branco e tente novamente.");
        }
    };

    const handleClear = () => {
        clearFields();
        alert('Erro ao exlcuir informações');
    };

    const clearFields = () => {
        setNome('');
        setTelefone('');
        setWhatsapp('');
        setDtaNascimento('');
        setCep('');
        setLogradouro('');
        setNumero('');
        setComplemento('');
        setSelectedCity(null);
    };

    return (
        <DataContainer>
            <h2>Meus Dados</h2>
            <div className='meus-dados'>
                <div className="form-container">
                    <DataForm
                        nome={nome} setNome={setNome}
                        telefone={telefone} setTelefone={setTelefone}
                        whatsapp={whatsapp} setWhatsapp={setWhatsapp}
                        dta_nascimento={dta_nascimento} setDtaNascimento={setDtaNascimento}
                    />
                    <AddressForm
                        cep={cep} setCep={setCep}
                        logradouro={logradouro} setLogradouro={setLogradouro}
                        numero={numero} setNumero={setNumero}
                        complemento={complemento} setComplemento={setComplemento}
                        onSelectCity={setSelectedCity}
                    />
                </div>
                <div className='SumaryBtn'>
                    <GlobalButtonLayout className="redBtn" onClick={handleClear}>{redButtonText}</GlobalButtonLayout>
                    <GlobalButtonLayout className="greenBtn" onClick={handleSave}>{greenButtonText}</GlobalButtonLayout>
                </div>
            </div>
        </DataContainer>
    );
}

function DataForm({ nome, setNome, telefone, setTelefone, whatsapp, setWhatsapp, dta_nascimento, setDtaNascimento }) {
    return (
        <FormSection>
            <h3>Dados Pessoais:</h3>
            <InputGroup>
                <label htmlFor="fullName">Nome Completo</label>
                <input
                    id="fullName"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
            </InputGroup>
            <InputGroup>
                <label htmlFor="phone">Telefone</label>
                <input
                    id="phone"
                    type="tel"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    required
                />
            </InputGroup>
            <InputGroup>
                <label htmlFor="whatsapp">WhatsApp</label>
                <input
                    id="whatsapp"
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    required
                />
            </InputGroup>
            <InputGroup>
                <label htmlFor="bdate">Data de Nascimento</label>
                <input
                    id="bdate"
                    type="date"
                    value={dta_nascimento}
                    onChange={(e) => setDtaNascimento(e.target.value)}
                    required
                />
            </InputGroup>
        </FormSection>
    );
}

function AddressForm({ cep, setCep, logradouro, setLogradouro, numero, setNumero, complemento, setComplemento, onSelectCity }) {
    return (
        <AddressSection>
            <h3>Endereço de Entrega:</h3>
            <InputGroup>
                <label htmlFor="cep">CEP</label>
                <input
                    id="cep"
                    type="text"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    required
                />
            </InputGroup>
            <InputGroup>
                <label htmlFor="street">Logradouro</label>
                <input
                    id="street"
                    type="text"
                    value={logradouro}
                    onChange={(e) => setLogradouro(e.target.value)}
                    required
                />
            </InputGroup>
            <InputGroup>
                <label htmlFor="number">Número</label>
                <input
                    id="number"
                    type="text"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    required
                />
            </InputGroup>
            <InputGroup>
                <label htmlFor="complement">Complemento</label>
                <input
                    id="complement"
                    type="text"
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value)}
                />
            </InputGroup>
            <InputGroup>
                <label htmlFor="city">Cidade</label>
                <CitySelector onSelectCity={onSelectCity} />
            </InputGroup>
        </AddressSection>
    );
}

export default DataPanel;
