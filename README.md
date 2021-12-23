[] subgraphs
[] circuits
[] ceramic streams
[] L2 langs

# Getting Frontend Started

1. Run `yarn` to install dependencies.
2. Run `yarn dev` to begin developing.

Drop the contract's ABI into `contracts`. Then run `yarn typechain` and output it to `contracts/types`.

# Getting Contracts Started
1. `dapp build` the contracts to compile their code
2. `dapp test` to run their tests
3. Run `dapp testnet` to create local geth instance
4. Create a new metamask network with the provided `RPC URL`, and `Chain ID`
5. `dapp create` to deploy the contracts to testnet
