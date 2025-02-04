const chainConfig = {
  "name": "avalanche-echo-testnet",
  "network": "testnet",
  "type": "evm",
  "chainId": 173750,
  "message": "", // @note Not deployed by design
  "feeToken": "0x2777023E33B88CE622B15eCfA4ADa3cb5a9C545f",
  "usdc": "0x2777023E33B88CE622B15eCfA4ADa3cb5a9C545f",
  "weth": "0x8228407F8bc38790997616B18AF8773016270558", // @note Temporary mock weth
  "protoCCTPGateway": "",
};

module.exports = chainConfig;