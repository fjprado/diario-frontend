import React, { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../../components/Input";
import "./styles.css";
import logoImg from "../../assets/images/logo.svg";
import Textarea from "../../components/Textarea";

export default function Landing() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [sex, setSex] = useState("");
    const [age, setAge] = useState("");
    const [diary, setDiary] = useState("");

    function handleCreateUser(e) {
        e.preventDefault();
        alert("Cadastro efetuado com sucesso");
    }

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Diario" />
                    <h2>Termos e condições</h2>
                </div>
                <form id="new-diary-form" onSubmit={handleCreateUser}>
                    <fieldset>
                        <legend className="title-legend">
                            Você é novo por aqui?
                        </legend>
                        <legend className="common-legend">Seus Dados</legend>
                        <Input
                            name="name"
                            label="Como você gostaria de se identificar?"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <Input
                            name="email"
                            label="Qual seu email?"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <Input
                            name="sex"
                            label="Como você se identifica sexualmente?"
                            value={sex}
                            onChange={(e) => {
                                setSex(e.target.value);
                            }}
                        />
                        <Input
                            name="age"
                            label="Qual a sua idade?"
                            value={age}
                            onChange={(e) => {
                                setAge(e.target.value);
                            }}
                        />
                    </fieldset>
                    <fieldset>
                        <legend className="common-legend">Seu Diário</legend>
                        <Textarea
                            name="diary"
                            label="Eu sou o seu diário, fale-me mais sobre você..."
                            value={diary}
                            onChange={(e) => {
                                setDiary(e.target.value);
                            }}
                        />
                    </fieldset>
                    <div className="buttons-container">
                        <button type="submit" className="pacient-button">
                            Iniciar seu Diário
                        </button>
                    </div>
                </form>
                <footer id="footer">
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
