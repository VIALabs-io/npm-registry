const chainConfig = {
  "name": "arbitrum-sepolia",
  "network": "testnet",
  "type": "evm",
  "chainId": 421614,
  "message": "0x0D7e59B0390e47E6C3a29cCdF68e43f3e50e2119",
  "feeToken": "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",
  "weth": "0x47963cB18B1aef899efcdC5EF7341B5167e5d4E0",
  "usdc": "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",
  "rpc": "https://421614.rpc.vialabs.io/",
  "explorer": "https://sepolia.arbiscan.io/",
  "featureGateway": "0x176c9Eb7aabC9A9857E6a08980b463b6C6FE0486",
  "featureCCTP": "0x761fC9166a95f686e55B66C397d04C0889c5c92F",
  "circleTokenMessenger": "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5",
  "circleMessageTransmitter": "0xaCF1ceeF35caAc005e15888dDb8A3515C41B4872",
  "circleTokenMinter": "0xE997d7d2F6E065a9A93Fa2175E878Fb9081F1f0A",
  "protoCCTPGateway": "0x01EF6C714f78503fFBC134777f40cBc062771c6e",
  "isCCTPEnabled": true,
  // This is a root chain for CCTP
  "cctpLeafChains": [
    {
      "chainId": 5115,
      "rootManager": "0x610F32033567097454cE0DF669Abc949Fb2f256B",
      "leafManager": "0x2660b88B931aE3b8dBcb796F3038305C46eb7F88"
    }
  ]
};

module.exports = chainConfig;
