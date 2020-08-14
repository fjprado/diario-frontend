import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Input from "../../components/Input";
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
                <form id="new-diary-form" onSubmit={handleCreateUser}>
                    <fieldset>
                        <legend>Seus Dados</legend>
                        <Input
                            name="name"
                            label="Como você gostaria de se identificar?"
                            value="nome"
                        />
                        <Input
                            name="email"
                            label="Qual seu email?"
                            value="email"
                        />
                        <Input
                            name="sex"
                            label="Como você se identifica sexualmente?"
                            value="sexo"
                        />
                        <Input
                            name="age"
                            label="Qual a sua idade?"
                            value="idade"
                        />
                    </fieldset>
                    <div className="buttons-container">
                        <button type="submit" className="pacient-button">
                            Iniciar seu Diário
                        </button>
                    </div>
                </form>
                <footer>
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
                </footer>
            </div>
        </div>
    );
}
