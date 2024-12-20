import React from "react";
import { Link } from "react-router-dom";
import styles, { ProfileContainer } from './styles.js';
import Navbar from "../../components/navBar.jsx";
import Footer from "../../components/footer.jsx";
import DataPanel from "../../components/dataPanel.jsx";
import OrderList from "../../components/orderList.jsx"


export default function Profile() {
    return (
        <div>
            <Navbar />
            <div style={styles.body}>
                <FullProfile />
            </div>
            <Footer />
        </div>
    );
}

function FullProfile() {
    return (
        <ProfileContainer>
            <div className="DataPanel">
                <DataPanel redButtonText="Excluir informações" greenButtonText="Salvar Informações" />
            </div>
            <div className="OrderList">
                <OrderList />
            </div>
        </ProfileContainer>
    );
}