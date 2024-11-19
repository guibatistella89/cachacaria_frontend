import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import CryptoJS from 'crypto-js';

// Criação do contexto
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const localSecretKey = "85dscybe8b5f5486732b479395c48897a";
    const navigate = useNavigate();

    const removeTokenFromStorage = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    };

    const getTokenFromStorage = () => {
        try {
            const encryptedToken = localStorage.getItem('token');
            if (!encryptedToken) return null;

            const decryptedToken = CryptoJS.AES.decrypt(encryptedToken, localSecretKey).toString(CryptoJS.enc.Utf8);
            if (!decryptedToken) {
                removeTokenFromStorage();
                return null;
            }
            return decryptedToken;
        } catch (error) {
            console.error('Erro ao recuperar o token:', error);
            return null;
        }
    };

    const setTokenToStorage = (token, role) => {
        try {
            const encryptedToken = CryptoJS.AES.encrypt(token, localSecretKey).toString();
            localStorage.setItem('token', encryptedToken);
            localStorage.setItem('role', role);

            const expirationTimeMillis = 4 * 60 * 60 * 1000; // 4 horas
            setTimeout(() => removeTokenFromStorage(), expirationTimeMillis);
        } catch (error) {
            console.error('Erro ao salvar o token:', error);
        }
    };

    const login = async (formData) => {
        try {
            const response = await api.post('/auth/login', formData);
    
            if (response.status >= 200 && response.status < 300) {
                const { token, role } = response.data;
                setTokenToStorage(token, role);
    
                // Confirme que o token foi armazenado
                if (getTokenFromStorage()) {
                    if (role === 'user') {
                        navigate('/'); // Redireciona para a Home
                    } else {
                        console.warn('Papel desconhecido:', role);
                    }
                } else {
                    console.error("Falha ao armazenar o token.");
                }
            } else {
                alert('Erro durante o login.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Erro ao fazer login. Verifique suas credenciais.');
        }
    };
    

    const logout = () => {
        removeTokenFromStorage();
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ login, logout, getTokenFromStorage }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para consumir o contexto
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
};

export default AuthContext;
