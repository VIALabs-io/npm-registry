const chainConfig = {
  "name": "Polygon Mainnet",
  "network": "mainnet",
  "type": "evm",
  "chainId": 137,
  "message": "0x1C5800eb5fECB7760D7F1978ad744feA652a7b27",
  "feeToken": "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
  "weth": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  "usdc": "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
  "rpc": "https://137.rpc.vialabs.io/",
  "explorer": "https://polygonscan.com/",
  "circleTokenMessenger": "0x9daF8c91AEFAE50b9c0E69629D3F6Ca40cA3B3FE",
  "circleMessageTransmitter": "0xF3be9355363857F3e001be68856A2f96b4C39Ba9",
  "circleTokenMinter": "0x10f7835F827D6Cf035115E10c50A853d7FB2D2EC",
  "isCCTPEnabled": true,
  "featureGateway": "0x9bf255FB6C7bbB0e060Ed6CC8996edFB0c4f5e0b",
  "protoCCTPGateway": "0xd6d9317E95Ca1cEDe3D06F3D6844a739194212cc",
  "intentCCTPGateway": "0x0000000000000000000000000000000000000000", // Placeholder address
  "cctpLeafChains": [
    {
      "chainId": 48900,
      "rootManager": "0x8712796136Ac8e0EEeC123251ef93702f265aa80",
      "leafManager": "0x9e0517ADAEc365Af770F67F7e83055d60Ad7D4dc"
    }
  ]
};

module.exports = chainConfig;