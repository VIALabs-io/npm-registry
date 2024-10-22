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
exports.globalConfig = exports.getCCTPGateways = exports.supportsCCTP = exports.getAccountantAddress = exports.getHardhatNetworks = exports.getAllChainIds = exports.getAllTestnetChainIds = exports.getAllMainnetChainIds = exports.isTestnet = exports.isMainnet = exports.getChainConfig = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const utils_1 = require("./utils");
Object.defineProperty(exports, "supportsCCTP", { enumerable: true, get: function () { return utils_1.supportsCCTP; } });
Object.defineProperty(exports, "getCCTPGateways", { enumerable: true, get: function () { return utils_1.getCCTPGateways; } });
const global_1 = require("./global");
Object.defineProperty(exports, "globalConfig", { enumerable: true, get: function () { return global_1.globalConfig; } });
const mainnetConfigs = {};
const testnetConfigs = {};
// Load mainnet configs
const mainnetPath = path.join(__dirname, 'chains', 'mainnet');
fs.readdirSync(mainnetPath).forEach(file => {
    if (file.endsWith('.js')) {
        const chainId = parseInt(file.split('.')[0]);
        const config = require(path.join(mainnetPath, file));
        mainnetConfigs[chainId] = config;
    }
});
// Load testnet configs
const testnetPath = path.join(__dirname, 'chains', 'testnet');
fs.readdirSync(testnetPath).forEach(file => {
    if (file.endsWith('.js')) {
        const chainId = parseInt(file.split('.')[0]);
        const config = require(path.join(testnetPath, file));
        testnetConfigs[chainId] = config;
    }
});
function getChainConfig(chainId) {
    return mainnetConfigs[chainId] || testnetConfigs[chainId];
}
exports.getChainConfig = getChainConfig;
function isMainnet(chainId) {
    return chainId in mainnetConfigs;
}
exports.isMainnet = isMainnet;
function isTestnet(chainId) {
    return chainId in testnetConfigs;
}
exports.isTestnet = isTestnet;
function getAllMainnetChainIds() {
    return Object.keys(mainnetConfigs).map(Number);
}
exports.getAllMainnetChainIds = getAllMainnetChainIds;
function getAllTestnetChainIds() {
    return Object.keys(testnetConfigs).map(Number);
}
exports.getAllTestnetChainIds = getAllTestnetChainIds;
function getAllChainIds() {
    return [...getAllMainnetChainIds(), ...getAllTestnetChainIds()];
}
exports.getAllChainIds = getAllChainIds;
function getHardhatNetworks(options = {}) {
    const { chainIds = getAllChainIds(), defaultConfig = {} } = options;
    const networks = {};
    console.log(`Processing ${chainIds.length} chain IDs`);
    chainIds.forEach(chainId => {
        const config = getChainConfig(chainId);
        console.log(`Processing chainId: ${chainId}, config: ${JSON.stringify(config)}`);
        if (config) {
            if (config.rpc) {
                const networkType = isMainnet(chainId) ? 'mainnet' : 'testnet';
                const networkName = `${config.network}-${networkType}`;
                networks[networkName] = {
                    url: config.rpc,
                    chainId: config.chainId,
                    ...defaultConfig,
                };
                console.log(`Added network: ${networkName}`);
            }
            else {
                console.log(`Skipping chainId ${chainId}: No RPC URL`);
            }
        }
        else {
            console.log(`No config found for chainId: ${chainId}`);
        }
    });
    console.log(`Total networks added: ${Object.keys(networks).length}`);
    return networks;
}
exports.getHardhatNetworks = getHardhatNetworks;
function getAccountantAddress(isTestnet) {
    return (0, global_1.getAccountantAddress)(isTestnet);
}
exports.getAccountantAddress = getAccountantAddress;
