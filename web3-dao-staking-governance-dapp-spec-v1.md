# Web3 DAO Staking Governance DApp Specifications

## Version 1.0

## Project Name

**web3-dao-staking-governance-dapp**

## Project Purpose

This project is a full-stack Web3 application where users can stake a mock ERC-20 token, earn staking rewards over time, and participate in DAO-style governance based on their staked token balance.

The main purpose of this project is to demonstrate how staking and governance can work together in a decentralized application. Users are rewarded for locking tokens into the protocol, and those staked tokens also give them voting power inside the governance system.

This is a learning-focused prototype, not a production financial protocol. The token, rewards, proposals, and governance system will use simplified rules so the project can clearly demonstrate smart contract logic, user interaction, and full-stack Web3 product design.

---

# 1. Product Requirements Document

## 1.1 Core Product Scope

The DApp will include three main systems:

1. **Mock ERC-20 Token System**
2. **Staking System**
3. **Governance Voting System**

Users will connect their wallet, receive or use mock tokens, stake those tokens, earn rewards over time, create proposals, and vote on proposals using their staked balance.

---

# 2. Target Users

## 2.1 Primary Users

The target users are people who want to understand how staking and DAO governance work in a Web3 application.

These users may include:

* Web3 learners
* Beginner blockchain developers
* DAO community members
* Product managers learning decentralized governance
* Portfolio reviewers looking at smart contract and DApp design

---

# 3. Core User Stories

## 3.1 Wallet Connection

As a user, I want to connect my wallet so that I can interact with the DApp using my blockchain address.

## 3.2 Token Approval

As a user, I want to approve the staking contract to use my mock ERC-20 tokens so that I can stake them into the protocol.

## 3.3 Stake Tokens

As a user, I want to deposit mock ERC-20 tokens into the staking contract so that I can earn rewards over time.

## 3.4 View Staked Balance

As a user, I want to see how many tokens I currently have staked so that I understand my position in the protocol.

## 3.5 Earn Rewards

As a user, I want my staked tokens to generate rewards over time so that staking has a clear incentive.

## 3.6 Claim Rewards

As a user, I want to claim my earned rewards so that I can receive the tokens I have earned from staking.

## 3.7 Unstake Tokens

As a user, I want to withdraw my staked tokens so that I can regain access to them.

## 3.8 Create Proposal

As a user with staked tokens, I want to create a governance proposal so that I can suggest actions for the DAO.

Example proposal:

> Allocate 100 tokens to marketing.

## 3.9 Vote on Proposal

As a user with staked tokens, I want to vote Yes or No on proposals so that I can participate in DAO decision-making.

## 3.10 View Proposal Results

As a user, I want to view proposal vote counts so that I can see whether the community supports or rejects the proposal.

---

# 4. Feature Specifications

## 4.1 Mock ERC-20 Token Feature

The DApp will use a mock ERC-20 token for staking and governance.

### Token Name

**Mock Governance Token**

### Token Symbol

**MGT**

### Token Purpose

The mock token will be used for:

* Staking
* Reward distribution
* Governance voting power

### Token Behavior

Users must hold MGT tokens before staking.

For the prototype, token distribution may happen through one of the following methods:

* Initial mint to deployer
* Faucet function for testing
* Manual transfer from deployer to users

---

# 5. Staking Feature

## 5.1 Staking Overview

Users deposit MGT tokens into the staking contract. Once tokens are staked, they begin earning rewards over time.

The staking system should track:

* User staked balance
* Total amount staked in the protocol
* Time or block number when rewards were last updated
* Pending rewards for each user

## 5.2 Staking Requirements

Users must approve the staking contract before depositing tokens.

A user can only stake tokens if:

* Their wallet is connected
* Their token balance is greater than or equal to the amount they want to stake
* The staking amount is greater than 0
* The staking contract has approval to transfer their tokens

## 5.3 Staking Function

The staking contract should include a function similar to:

```solidity
stake(uint256 amount)
```

Expected behavior:

1. Check that the amount is greater than 0.
2. Transfer MGT tokens from the user to the staking contract.
3. Update the user's reward calculation before changing their balance.
4. Increase the user's staked balance.
5. Increase the total staked amount.
6. Emit a staking event.

## 5.4 Unstaking Function

The staking contract should include a function similar to:

```solidity
unstake(uint256 amount)
```

Expected behavior:

1. Check that the amount is greater than 0.
2. Check that the user has enough staked tokens.
3. Update the user's reward calculation before changing their balance.
4. Decrease the user's staked balance.
5. Decrease the total staked amount.
6. Transfer MGT tokens back to the user.
7. Emit an unstaking event.

## 5.5 Claim Rewards Function

The staking contract should include a function similar to:

```solidity
claimRewards()
```

Expected behavior:

1. Calculate the user's pending rewards.
2. Check that the pending reward amount is greater than 0.
3. Reset or update the user's reward balance.
4. Transfer or mint reward tokens to the user.
5. Emit a reward claim event.

---

# 6. Governance Feature

## 6.1 Governance Overview

Users who have staked tokens can participate in governance. Governance allows users to create proposals and vote Yes or No.

The governance system is based on staked tokens, not wallet token balance. This means a user must have tokens actively staked to create proposals or vote.

## 6.2 Proposal Creation Requirements

A user can create a proposal only if:

* Their wallet is connected
* They have more than 0 staked tokens
* The proposal description is not empty

Example proposal:

> Allocate 100 tokens to marketing.

## 6.3 Proposal Structure

Each proposal should include:

* Proposal ID
* Proposal description
* Address of the proposal creator
* Yes vote count
* No vote count
* Proposal start time or block
* Proposal end time or block
* Proposal status
* Mapping to track whether an address has already voted

## 6.4 Proposal Status Options

A proposal may have one of the following statuses:

* Active
* Passed
* Failed
* Closed

For Version 1.0, the proposal result can be determined by simple majority.

If Yes votes are greater than No votes, the proposal passes.

If No votes are greater than or equal to Yes votes, the proposal fails.

## 6.5 Create Proposal Function

The governance contract should include a function similar to:

```solidity
createProposal(string memory description)
```

Expected behavior:

1. Check that the user has staked tokens.
2. Check that the proposal description is not empty.
3. Create a new proposal.
4. Assign the proposal an ID.
5. Set the proposal as active.
6. Emit a proposal creation event.

## 6.6 Voting Function

The governance contract should include a function similar to:

```solidity
vote(uint256 proposalId, bool support)
```

Expected behavior:

1. Check that the proposal exists.
2. Check that the proposal is active.
3. Check that the user has staked tokens.
4. Check that the user has not already voted on this proposal.
5. Calculate the user's voting weight.
6. If support is true, add the voting weight to Yes votes.
7. If support is false, add the voting weight to No votes.
8. Mark the user as having voted.
9. Emit a vote event.

---

# 7. Tokenomics Architecture

## 7.1 Staking Yield

The staking system will use a simple annual reward rate.

### Annual Reward Rate

**10% APR**

This means that if a user stakes 100 MGT for one full year, they should earn approximately 10 MGT in rewards.

## 7.2 Reward Calculation

The basic reward formula is:

```text
Reward = Staked Amount × Annual Reward Rate × Time Staked / One Year
```

For this project:

```text
Reward = Staked Amount × 10% × Time Staked / 365 days
```

In smart contract form, this can be represented using seconds or blocks.

A simplified seconds-based version:

```text
Reward = Staked Amount × 10 × Time Staked / 100 / 365 days
```

Where:

* `Staked Amount` = number of tokens the user has staked
* `10` = 10% annual reward rate
* `Time Staked` = how long the tokens have been staked
* `365 days` = one full year

## 7.3 Block-Based Reward Option

If rewards are calculated per block, the contract can estimate the annual reward across a number of blocks per year.

Example:

```text
Reward Per Block = Annual Reward / Estimated Blocks Per Year
```

For Version 1.0, a time-based reward system is simpler and easier to understand than a block-based system.

Recommended Version 1.0 choice:

**Use time-based reward calculation with block timestamps.**

---

# 8. Voting Weight Rules

## 8.1 Core Voting Rule

**1 Staked Token = 1 Vote**

A user's voting power is equal to the number of tokens they currently have staked.

Example:

```text
If a user has 25 MGT staked, they have 25 votes.
```

## 8.2 Voting Weight Formula

```text
Voting Weight = User Staked Token Balance
```

## 8.3 Voting Logic

The voting logic should follow a simple Yes / No structure.

If the user votes Yes:

```text
Proposal Yes Votes += User Staked Balance
```

If the user votes No:

```text
Proposal No Votes += User Staked Balance
```

This connects directly to conditional logic:

```solidity
if (support == true) {
    proposal.yesVotes += votingWeight;
} else {
    proposal.noVotes += votingWeight;
}
```

## 8.4 Voting Restrictions

A user cannot vote if:

* They have 0 staked tokens
* The proposal does not exist
* The proposal is no longer active
* They have already voted on that proposal

---

# 9. Smart Contract Requirements

## 9.1 Contract 1: Mock Token Contract

The mock token contract should handle:

* ERC-20 token creation
* Token minting for testing
* Token transfers
* Token approvals

Possible contract name:

```solidity
MockGovernanceToken.sol
```

## 9.2 Contract 2: Staking Contract

The staking contract should handle:

* Staking tokens
* Unstaking tokens
* Tracking staked balances
* Calculating rewards
* Claiming rewards

Possible contract name:

```solidity
StakingContract.sol
```

## 9.3 Contract 3: Governance Contract

The governance contract should handle:

* Proposal creation
* Voting
* Vote counting
* Proposal status tracking

Possible contract name:

```solidity
GovernanceContract.sol
```

---

# 10. Front-End Requirements

## 10.1 Main Pages or Sections

The DApp front end should include the following sections:

1. Wallet connection area
2. Token balance display
3. Staking dashboard
4. Governance proposal dashboard
5. Proposal creation form
6. Voting interface

## 10.2 Staking Dashboard

The staking dashboard should show:

* User wallet address
* User MGT token balance
* User staked MGT balance
* Pending rewards
* Total tokens staked in the protocol
* Stake input box
* Unstake input box
* Claim rewards button

## 10.3 Governance Dashboard

The governance dashboard should show:

* List of proposals
* Proposal ID
* Proposal description
* Yes votes
* No votes
* Proposal status
* Vote Yes button
* Vote No button

## 10.4 Proposal Creation Form

The proposal creation form should include:

* Text input for proposal description
* Create Proposal button

The form should only allow proposal creation if the user has staked tokens.

---

# 11. Version 1.0 Non-Goals

This project will not include the following features in Version 1.0:

* Real financial assets
* Real DAO treasury management
* Advanced quorum rules
* Delegated voting
* Token price mechanics
* Liquidity pools
* Slashing
* Cross-chain functionality
* Gas optimization beyond basic good practices
* Full production security audit
* Real-world legal governance structure

---

# 12. Success Criteria

Version 1.0 is successful if a user can:

1. Connect a wallet.
2. View their mock token balance.
3. Approve the staking contract.
4. Stake MGT tokens.
5. See their staked balance.
6. Earn rewards over time.
7. Claim staking rewards.
8. Create a governance proposal if they have staked tokens.
9. Vote Yes or No on proposals.
10. Have voting weight equal to their staked token balance.
11. View proposal vote results.

---

# 13. Technical Logic Summary

## Staking Logic

```text
User deposits MGT tokens.
Contract records the user's staked balance.
User earns 10% APR over time.
User can claim rewards.
User can unstake deposited tokens.
```

## Governance Logic

```text
User must have staked tokens to create proposals.
User must have staked tokens to vote.
1 staked token equals 1 vote.
Users can vote Yes or No.
A proposal passes if Yes votes are greater than No votes.
```

---

# 14. Version 1.0 Final Product Definition

The Version 1.0 web3-dao-staking-governance-dapp is a prototype DAO application where staking and governance are connected.

Users stake a mock ERC-20 token to earn 10% APR rewards. Their staked tokens also determine their governance power. A user with 1 staked token has 1 vote, while a user with 100 staked tokens has 100 votes.

The project demonstrates the full product logic behind a basic DAO staking system, including smart contract architecture, tokenomics, conditional voting logic, and front-end user flows.
