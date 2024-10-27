const chainConfig = {
  "name": "avalanche-testnet",
  "network": "testnet",
  "type": "evm",
  "chainId": 43113,
  "message": "0x8f92F60ffFB05d8c64E755e54A216090D8D6Eaf9",
  "feeToken": "0x5425890298aed601595a70ab815c96711a31bc65",
  "weth": "0x47963cB18B1aef899efcdC5EF7341B5167e5d4E0",
  "usdc": "0x5425890298aed601595a70ab815c96711a31bc65",
  "rpc": "https://43113.rpc.vialabs.io/",
  "explorer": "https://testnet.snowtrace.io/",
  "featureGateway": "0x70B806CBE98953befd43c558E70AeD133f98A44B",
  "featureCCTP": "0x81447ef70771ad90a4e5b2fb57B81F4C09e8026a",
  "circleTokenMessenger": "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5",
  "circleMessageTransmitter": "0xaCF1ceeF35caAc005e15888dDb8A3515C41B4872",
  "circleTokenMinter": "0xE997d7d2F6E065a9A93Fa2175E878Fb9081F1f0A",
  "isCCTPEnabled": true,
  // This is a root chain for CCTP
  "cctpLeafChains": [
    {
      "chainId": 64165,
      "rootManager": "0xD882a92421490aD0e500043B7E60506F45bE6716",
      "leafManager": "0x3EdCD98439d8fc68Fc46825C97880Af9eF4b0272"
    },
    {
      "chainId": 195,
      "rootManager": "0x60fB013997CFa53729A9c8Dfbacecc65c8Dde897",
      "leafManager": "0xa06f5842bB1bF8ea42397fb116BFA17c3F8c8c5b"
    }
  ]
};

module.exports = chainConfig;
