import React from "react";
import "./App.css";
import UserBar from "./components/header/UserBar";
import NewUserEntry from "./components/home/newUserEntry/NewUserEntry";

export default function App() {
    return (
        <div>
            <UserBar />
            <NewUserEntry />
        </div>
    );
}
