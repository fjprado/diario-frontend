import React, { useState } from "react";
import Input from "../../components/Input";
import "./styles.css";
import logoImg from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleLogin() {}
    return (
        <div id="page-login">
            <div id="page-login-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Diario" />
                </div>
                <form id="login-form" onSubmit={handleLogin}>
                    <fieldset>
                        <legend className="title-legend">
                            Você já tem seu diário?
                        </legend>
                        <legend className="common-legend">
                            Então fique a vontade
                        </legend>
                        <Input
                            name="email"
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <Input
                            name="password"
                            label="Senha"
                            type="password"
                            value={senha}
                            onChange={(e) => {
                                setSenha(e.target.value);
                            }}
                        />
                    </fieldset>
                    <div className="buttons-container">
                        <button type="submit" className="login-button">
                            Entrar
                        </button>
                    </div>
                </form>

                <footer id="footer">
                    <span className="title-buttons">
                        Ainda não tem cadastro?
                    </span>
                    <div className="buttons-container">
                        <Link to="/" className="new-diary-button">
                            Iniciar um novo diário?
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
