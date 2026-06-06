import React from "react";

export default function StakingCard(props) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1.5rem", margin: "1rem 0", background: "#fafafa" }}>
      <h3>🥩 Token Staking Vault</h3>
      <p>Current Incentive Yield: <strong>{props.yieldRate}% APY</strong></p>
      <p>Your Locked Position: <strong>{props.stakedAmount} GOV-TOKENS</strong></p>
      
      <div style={{ marginTop: "1rem" }}>
        <input type="number" placeholder="Amount to Stake" style={{ padding: "0.5rem", marginRight: "0.5rem" }} />
        <button style={{ padding: "0.5rem 1rem", background: "#007BFF", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Stake Tokens
        </button>
      </div>
    </div>
  );
}