import React from "react";
import { Link } from "react-router-dom";
import GlobalStyle from "../../globalStyle/style.js";
import styles, { ProfileContainer } from './styles.js';
import Navbar from "../../components/navBar.jsx";
import DataPanel from "../../components/dataPanel.jsx"

export default function Profile() {
    return (
        <div>
            <Navbar />
            <div style={styles.body}>
                <GlobalStyle />
                <FullProfile />
            </div>
        </div>
    );
}

function FullProfile() {
    return (
        <ProfileContainer>
            <DataPanel />
        </ProfileContainer>
    );
}