const chainConfig = {
  "name": "reef-mainnet",
  "network": "mainnet",
  "type": "reef",
  "chainId": 13939,
  "message": "0xdAFcF1e328c09cbc480A09f751c170CfCca3e083",
  "messageSubstrate": "5EMjsd1648TVgor7qD19pXda8mbfbDZ3NyTRUiWKZBRmPZ7e",
  "feeToken": "0x0000000000000000000000000000000001000000", // @note proper fee token doesn't exist yet
  "weth": "0x0000000000000000000000000000000001000000" // @note unwrap weth MUST BE FALSE!
};

module.exports = chainConfig;