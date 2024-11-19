import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';

const withAuth = (WrappedComponent) => {
    return (props) => {
        const { getTokenFromStorage } = useContext(AuthContext);
        const navigate = useNavigate();

        useEffect(() => {
            const token = getTokenFromStorage(); // Pega o token uma vez
            if (!token) {
                navigate('/login'); // Redireciona se o token não estiver presente
            }
            // Dependências removidas para evitar loops desnecessários
        }, [navigate]);         

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
