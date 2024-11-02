const chainConfig = {
  "name": "Arbitrum Mainnet",
  "network": "mainnet",
  "type": "evm",
  "chainId": 42161,
  "message": "0x65EEc58ef38882422E887B82f7085e9a9C35dCA1",
  "feeToken": "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  "weth": "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  "usdc": "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  "rpc": "https://42161.rpc.vialabs.io/",
  "explorer": "https://arbiscan.io/",
  "circleTokenMessenger": "0x19330d10D9Cc8751218eaf51E8885D058642E08A",
  "circleMessageTransmitter": "0xC30362313FBBA5cf9163F0bb16a0e01f01A896ca",
  "circleTokenMinter": "0xE7Ed1fa7f45D05C508232aa32649D89b73b8bA48",
  "featureGateway": "0x0000000000000000000000000000000000000000", // Placeholder address
  "protoCCTPGateway": "0x0000000000000000000000000000000000000000", // Placeholder address
  "intentCCTPGateway": "0x0000000000000000000000000000000000000000" // Placeholder address
};

module.exports = chainConfig;