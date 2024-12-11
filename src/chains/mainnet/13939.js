const chainConfig = {
  "name": "reef-mainnet",
  "network": "mainnet",
  "type": "reef",
  "chainId": 13939,
  "message": "0xf7af4C3ecA8Dd2E2a59eD44060537a09f701C6ed",
  "messageSubstrate": "5EMjsd1648TVgor7qD19pXda8mbfbDZ3NyTRUiWKZBRmPZ7e",
  "feeToken": "0x0000000000000000000000000000000001000000", // @note proper fee token doesn't exist yet
  "weth": "0x0000000000000000000000000000000001000000" // @note unwrap weth MUST BE FALSE!
};

module.exports = chainConfig;