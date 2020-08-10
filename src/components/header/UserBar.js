import React from "react";

export default function UserBar() {
    return (
        <div style={styles.userBar}>
            <span style={styles.itemsBar}>Logo</span>
            <span style={styles.itemsBar}>Diário</span>
            <span style={styles.itemsBar}>User</span>
        </div>
    );
}

const styles = {
    userBar: {
        display: "flex",
        fontSize: "1.5rem",
        textAlign: "center",
        justifyContent: "space-between",
        background: "#37474f",
        padding: "5px",
        border: "1px solid lightgray",
        borderRadius: "0px 0px 15px 15px",
        color: "white",
    },
    itemsBar: {
        padding: "5px",
        margin: "0px 30px",
    },
};
