import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles, { CatalogoContainer } from './styles.js';
import Navbar from "../../components/navBar.jsx";
import Footer from "../../components/footer.jsx";
import cachacaEscuro from "../../assets/cachacaEscuro.jpg";
import vodkaEscuro from "../../assets/vodkaEscuro.jpg";
import limaozinhoEscuro from "../../assets/limaozinhoEscuro.jpg";
import maracujaEscuro from "../../assets/maracujaEscuro.jpeg";
import canelinhaEscuro from "../../assets/canelinhaEscuro.jpg";
import cocoEscuro from "../../assets/cocoEscuro.jpg";
import bitterEscuro from "../../assets/bitterEscuro.jpg";
import mentaEscuro from "../../assets/mentaEscuro.jpg";
import bananaEscuro from "../../assets/bananaEscuro.jpg";
import amendoimEscuro from "../../assets/amendoimEscuro.jpg";

export default function Catalog() {
    return (
        <div>
            <Navbar />
            <div style={styles.body}>
                <FullCatalogo />
            </div>
            <Footer />
        </div>
    );
}

const produtos = [
    { id: 1, img: cachacaEscuro,    page: 'cachaca',    nome: 'Água de Cana Adoçada',   preco: '15,00',  categoria: 'Cachaça' },
    { id: 2, img: vodkaEscuro,      page: 'vodka',      nome: 'The Brazilian Vodka',    preco: '15,00',  categoria: 'Vodka' },
    { id: 3, img: limaozinhoEscuro, page: 'limaozinho', nome: 'Limãozinho',             preco: '15,00',  categoria: 'Licor' },
    { id: 4, img: maracujaEscuro,   page: 'maracuja',   nome: 'Maracujá',               preco: '15,00',  categoria: 'Licor' },
    { id: 5, img: canelinhaEscuro,  page: 'canelinha',  nome: 'Canelinha',              preco: '15,00',  categoria: 'Coquetel Alcoólico' },
    { id: 6, img: cocoEscuro,       page: 'coco',       nome: 'Coco',                   preco: '15,00',  categoria: 'Coquetel Alcoólico' },
    { id: 7, img: bitterEscuro,     page: 'bitter',     nome: 'Bitter',                 preco: '15,00',  categoria: 'Coquetel Alcoólico' },
    { id: 8, img: mentaEscuro,      page: 'menta',      nome: 'Menta',                  preco: '15,00',  categoria: 'Coquetel Alcoólico' },
    { id: 9, img: bananaEscuro,     page: 'banana',     nome: 'Banana',                 preco: '15,00',  categoria: 'Coquetel Alcoólico' },
    { id: 10, img: amendoimEscuro,  page: 'amendoim',   nome: 'Amendoim',               preco: '15,00',  categoria: 'Coquetel Alcoólico' },
];

function FullCatalogo() {
    
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

    const categorias = ['Todos', 'Cachaça', 'Vodka', 'Licor', 'Coquetel Alcoólico'];

    const produtosFiltrados = produtos.filter(produto =>
        categoriaSelecionada === 'Todos' || produto.categoria === categoriaSelecionada
    );

    return (
        <CatalogoContainer className="catalogo-container">
            <div className="filtro-container">
                <h3>Filtros</h3>
                {categorias.map(categoria => (
                    <div key={categoria} onClick={() => setCategoriaSelecionada(categoria)} className={`filtro-button ${categoriaSelecionada === categoria ? 'ativo' : ''}`}>
                        {categoria}
                    </div>
                ))}
            </div>
            <div>
                <h2>Catálogo</h2>
                <div className="produtos-wrapper">
                    {produtosFiltrados.map(produto => (
                        <Link to={`/${produto.page}`} key={produto.id} className="produtoLink">
                            <div className="produto-container">
                                <img src={produto.img} alt={produto.nome} className="produtoImagem" />
                                <div className="produto-nome">{produto.nome}</div>
                                <div className="produto-preco">R$ {produto.preco}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </CatalogoContainer>
    );
}
