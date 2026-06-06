import React from "react";

export default function GovernanceCard() {
  // Static mock data representing a DAO vote proposal
  const mockProposal = {
    id: 1,
    title: "PIP-04: Allocate 5,000 Tokens to Community Treasury",
    votesFor: 1540,
    votesAgainst: 320,
    status: "Active"
  };

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1.5rem", margin: "1rem 0", background: "#fafafa" }}>
      <h3>⚖️ Decentralized Governance</h3>
      <div style={{ borderPadding: "1rem", background: "#fff", padding: "1rem", borderRadius: "6px", marginTop: "1rem" }}>
        <h4>{mockProposal.title}</h4>
        <p>Status: <span style={{ color: "orange", fontWeight: "bold" }}>{mockProposal.status}</span></p>
        <p>👍 For: {mockProposal.votesFor} VP | 👎 Against: {mockProposal.votesAgainst} VP</p>
        
        <div style={{ display: "flex", gap: "10px", marginTop: "1rem" }}>
          <button style={{ padding: "0.5rem 1rem", background: "#28a745", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
            Vote For
          </button>
          <button style={{ padding: "0.5rem 1rem", background: "#dc3545", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
            Vote Against
          </button>
        </div>
      </div>
    </div>
  );
}