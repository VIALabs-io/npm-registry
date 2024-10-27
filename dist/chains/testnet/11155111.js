const chainConfig = {
  "name": "sepolia-testnet",
  "network": "testnet",
  "type": "evm",
  "chainId": 11155111,
  "message": "0xF2AA17F92d4D9Be1c0b0D2A3235A06143A2D729f",
  "feeToken": "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
  "weth": "0x47963cB18B1aef899efcdC5EF7341B5167e5d4E0",
  "usdc": "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
  "rpc": "https://11155111.rpc.vialabs.io/",
  "explorer": "https://sepolia.etherscan.io/",
  "featureGateway": "0xbf5288c8e8d5A1b89EFC2CefF1836f4c1392507f",
  "featureCCTP": "0x15CF10bB1a5f54f01561D6efB6bBe86f9B72260E",
  "circleTokenMessenger": "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5",
  "circleMessageTransmitter": "0xaCF1ceeF35caAc005e15888dDb8A3515C41B4872",
  "circleTokenMinter": "0xE997d7d2F6E065a9A93Fa2175E878Fb9081F1f0A",
  "isCCTPEnabled": true,
  // This is a root chain for CCTP
  "cctpLeafChains": [
    {
      "chainId": 48899,
      "rootManager": "0xC7c54ca043dC8e5dd1dF6E5a4B4A2Df42A1ba59d",
      "leafManager": "0x31c3E0eeF8412aC4dF12b5C5B0FF25cff2aBA65A"
    }
  ]
};

module.exports = chainConfig;
