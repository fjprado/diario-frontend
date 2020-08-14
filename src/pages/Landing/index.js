import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logoImg from "../../assets/images/logo.svg";

export default function Landing() {
    function handleCreateUser() {}

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Diario" />
                    <h2>Termos e condições</h2>
                </div>
                <form onSubmit={handleCreateUser}>
                    <div className="buttons-container">
                        <button type="submit" className="pacient-button">
                            Iniciar seu Diário
                        </button>
                    </div>
                </form>
                <span className="total-connections">
                    Total de 100 conexões já realizadas{" "}
                </span>
                <div className="buttons-container">
                    <Link to="/login" className="login-button">
                        Já tem seu Diário?
                    </Link>
                    <Link to="/psy-form" className="psy-button">
                        É um psicólogo?
                    </Link>
                </div>
            </div>
        </div>
    );
}
