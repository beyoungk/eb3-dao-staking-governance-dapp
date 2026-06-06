import React from "react";
import Header from "./components/Header";
import StakingCard from "./components/StakingCard";
import GovernanceCard from "./components/GovernanceCard";

function App() {
  // Simulated decentralized states 
  const isWalletConnected = true;
  const activeWalletAddress = "0x71C...3A9";
  const rewardApy = 14.5;
  const userStakedBalance = 450;

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto", paddingBottom: "3rem" }}>
      {/* 1. Navigation Panel */}
      <Header isConnected={isWalletConnected} address={activeWalletAddress} />
      
      {/* 2. Main Action Grid */}
      <main style={{ marginTop: "2rem" }}>
        <h2>DAO Governance & Staking Dashboard</h2>
        <p>Manage your voting shares and track community parameter proposals.</p>
        
        <StakingCard yieldRate={rewardApy} stakedAmount={userStakedBalance} />
        <GovernanceCard />
      </main>
    </div>
  );
}

export default App;

