"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCCTPGateways = exports.supportsCCTP = exports.getTestnetChains = exports.getMainnetChains = exports.getSupportedChains = exports.isTestnet = exports.isMainnet = exports.getAddress = exports.getChainConfig = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// Load chain configurations
let chainConfigs = {};
try {
    const configPath = path.join(__dirname, '..', 'chainConfig.json');
    const rawConfig = fs.readFileSync(configPath, 'utf8');
    const allConfigs = JSON.parse(rawConfig);
    chainConfigs = { ...allConfigs.mainnet, ...allConfigs.testnet };
}
catch (error) {
    console.error('Error loading chain configurations:', error);
}
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
