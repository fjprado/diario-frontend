import React from "react";

export default function NewUserEntry() {
    return (
        <div className="container">
            <div style={styles.flexRow}>
                <div style={styles.terms}> termos: digite aqui</div>
                <form>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="name" type="text" className="validate" />
                            <label className="active" for="name">
                                Como você gostaria de se identificar?
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="email"
                                type="text"
                                className="validate"
                            />
                            <label className="active" for="email">
                                Seu email
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="sex" type="text" className="validate" />
                            <label className="active" for="sex">
                                Como você se identifica sexualmente?
                            </label>
                        </div>
                        <div className="input-field col s6">
                            <input id="age" type="text" className="validate" />
                            <label className="active" for="age">
                                Qual a sua idade?
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

const styles = {
    flexRow: {
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        padding: "30px",
        border: "1px solid lightgray",
        borderRadius: "0px 0px 15px 15px",
    },
    terms: {
        margin: "0 auto",
    },
};
