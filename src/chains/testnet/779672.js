const chainConfig = {
  "name": "avalanche-dispatch-testnet",
  "network": "testnet",
  "type": "evm",
  "chainId": 779672,
  "message": "0x0000000000000000000000000000000000000000", // @note Not deployed by design
  "feeToken": "0xE227dB899AC4b04a44b4E025C5b257bBC5CaC730",
  "usdc": "0xE227dB899AC4b04a44b4E025C5b257bBC5CaC730",
  "weth": "0x2B24e065Ff26E65440bB76A323404044b4e98859", // @note Temporary mock weth
  "protoCCTPGateway": "",
};

module.exports = chainConfig;
