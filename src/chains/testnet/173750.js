const chainConfig = {
  "name": "avalanche-echo-testnet",
  "network": "testnet",
  "type": "evm",
  "chainId": 173750,
  "message": "0x0000000000000000000000000000000000000000", // @note Not deployed by design
  "feeToken": "0xA1AeC40c1B58226407B8b0dF050c8D9ab0df7a7D",
  "usdc": "0xA1AeC40c1B58226407B8b0dF050c8D9ab0df7a7D",
  "weth": "0x0B5D4d5c8FfF14322d598BF45795ce6133eF5992", // @note Temporary mock weth
  "protoCCTPGateway": "0x31c3E0eeF8412aC4dF12b5C5B0FF25cff2aBA65A",
};

module.exports = chainConfig;
