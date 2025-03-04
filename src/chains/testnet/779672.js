const chainConfig = {
  "name": "avalanche-dispatch-testnet",
  "network": "testnet",
  "type": "evm",
  "chainId": 779672,
  "message": "0x0000000000000000000000000000000000000000", // @note Not deployed by design
  "feeToken": "0xb81A799a812CeC90796F4531a7D694284667f7e5",
  "usdc": "0xb81A799a812CeC90796F4531a7D694284667f7e5",
  "weth": "0xA68E53100d11611F11A8956818F9Bd3DD3A2eE8d", // @note Temporary mock weth
  "protoCCTPGateway": "0xC2bd850A20c02d93942AEe28235946F1542dbd2b",
};

module.exports = chainConfig;