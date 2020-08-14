import React from "react";
import "./styles.css";

export default function Textarea({ label, name, ...rest }) {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    );
}
