import React from "react";

export default function Header(props) {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#1a1a1a", color: "#fff" }}>
      <h2>🏛️ DAO Portal</h2>
      <div>
        {props.isConnected ? (
          <span style={{ color: "#4CAF50", fontWeight: "bold" }}>
            🟢 Connected: {props.address}
          </span>
        ) : (
          <button style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
}