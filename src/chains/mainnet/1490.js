const chainConfig = {
  "name": "Vitruveo Mainnet",
  "network": "mainnet",
  "type": "evm",
  "chainId": 1490,
  "message": "0x15AC559DA4951c796DB6620fAb286B96840D039A",
  "feeToken": "0xbCfB3FCa16b12C7756CD6C24f1cC0AC0E38569CF",
  "usdc": "0xbCfB3FCa16b12C7756CD6C24f1cC0AC0E38569CF",
  "weth": "0x3ccc3F22462cAe34766820894D04a40381201ef9", // @note no longer has time locks or whitelists (new WVTRU)
  "rpc": "https://1490.rpc.vialabs.io/",
  "explorer": "https://explorer.vitruveo.xyz/",
  "protoCCTPGateway": "0x3CBf846eD83dF3417c2dB897b3DDF7C96E7465a3",
};

module.exports = chainConfig;
