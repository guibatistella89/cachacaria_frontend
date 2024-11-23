import React, { useState } from 'react';
import api from '../../api/api.js';
import { DiscountSection, Button } from './styles';

export default function discount({ onCupomApply, idUser, lenghtCart}) {
    // Lógica

    const [cupom, setCupom] = useState('');


    function handleAplicaCupom() {

        if (!(lenghtCart >=1)) {
            alert("É necessário possuir pelo menos um item no carrinho para aplciar o cupom");
            return
        }

        const cupomUppercase = cupom.toUpperCase();


        if (!cupomUppercase) {
            alert("É necessário digitar um copom para aplicá-lo ao carrinho");
            return
        }

        async function getCupom() {
            try {
                const response = await api.get(`/api/cupom/${cupomUppercase}`);                                
                if (response.data.message === 'CoupomNotFound') {                                        
                    alert(`Cupom ${cupomUppercase} não localizado`);
                    return;
                }                
                const objCupom = response.data;
                persistCoupom(objCupom.id);
                if (onCupomApply) {
                    onCupomApply(objCupom);
                }
            } catch (error) {
                console.error('Cupom não localizado:', error);
                setCupom('');
                alert(`Cupom ${cupomUppercase} não localizado`);
            }
        }
        getCupom();
    }


    function persistCoupom(idCupom) {

        async function putCupom() {            
            try {
                const params = {
                    idUser: idUser,
                    idCupom: idCupom,
                };
                await api.put(`/api/cupom/`, params);
            } catch (error) {
                console.error('Cupom não aplicado ao carrinho:', error);
                alert(`Erro interno ao aplicar cupom ${cupomUppercase}`);
            }
        }
        putCupom();
    }


    // Fim da lógica

    return (
        <DiscountSection>
            <input type="text" placeholder="Cupom de Desconto" value={cupom} onChange={(e) => setCupom(e.target.value)} />
            <Button onClick={() => handleAplicaCupom()}>APLICAR CUPOM</Button>
        </DiscountSection>
    );
};


