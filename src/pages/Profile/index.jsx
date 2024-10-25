import React from "react";
import { Link } from "react-router-dom";
import styles, { ProfileContainer } from './styles.js';
import Navbar from "../../components/navBar.jsx";
import DataPanel from "../../components/dataPanel.jsx";
import OrderList from "../../components/orderList.jsx"


export default function Profile() {
    return (
        <div>
            <Navbar />
            <div style={styles.body}>
                <FullProfile />
            </div>
        </div>
    );
}

function FullProfile() {
    return (
        <ProfileContainer>
            <div className="DataPanel">
                <DataPanel greenButtonText="Salvar Informações" redButtonText="Excluir informações" />
            </div>
            <div className="OrderList">
                <OrderList />
            </div>
        </ProfileContainer>
    );
}