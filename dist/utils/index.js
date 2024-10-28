"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCCTPGateways = exports.supportsCCTP = exports.getTestnetChains = exports.getMainnetChains = exports.getSupportedChains = exports.isTestnet = exports.isMainnet = exports.getAddress = exports.getChainConfig = void 0;
const chainConfigs_1 = require("../chainConfigs");
// Combine mainnet and testnet configs
const chainConfigs = { ...chainConfigs_1.mainnetConfigs, ...chainConfigs_1.testnetConfigs };
function getChainConfig(chainId) {
    return chainConfigs[chainId];
}
exports.getChainConfig = getChainConfig;
function getAddress(chainId, addressType) {
    const config = getChainConfig(chainId);
    if (!config)
        return undefined;
    return config[addressType];
}
exports.getAddress = getAddress;
function isMainnet(chainId) {
    const config = getChainConfig(chainId);
    return config ? config.network === 'mainnet' : false;
}
exports.isMainnet = isMainnet;
function isTestnet(chainId) {
    const config = getChainConfig(chainId);
    return config ? config.network === 'testnet' : false;
}
exports.isTestnet = isTestnet;
function getSupportedChains() {
    return Object.keys(chainConfigs).map(Number);
}
exports.getSupportedChains = getSupportedChains;
function getMainnetChains() {
    return getSupportedChains().filter(isMainnet);
}
exports.getMainnetChains = getMainnetChains;
function getTestnetChains() {
    return getSupportedChains().filter(isTestnet);
}
exports.getTestnetChains = getTestnetChains;
function supportsCCTP(chainId) {
    const config = getChainConfig(chainId);
    return config ? (!!config.protoCCTPGateway || !!config.intentCCTPGateway) : false;
}
exports.supportsCCTP = supportsCCTP;
function getCCTPGateways(chainId) {
    const config = getChainConfig(chainId);
    if (!config)
        return undefined;
    return {
        proto: config.protoCCTPGateway,
        intent: config.intentCCTPGateway
    };
}
exports.getCCTPGateways = getCCTPGateways;
