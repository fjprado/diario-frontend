import React from "react";
import Menu from "../Menu";

import "./styles.css";

export default function PageDefault({ title, children }) {
    return (
        <div className="page-default">
            <header className="page-menu">
                <Menu title="Home" />
            </header>
            <main>{children}</main>
        </div>
    );
}
