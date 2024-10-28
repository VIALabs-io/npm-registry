"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalConfig = exports.getCCTPGateways = exports.supportsCCTP = exports.getAccountantAddress = exports.getHardhatNetworks = exports.getAllChainIds = exports.getAllTestnetChainIds = exports.getAllMainnetChainIds = exports.isTestnet = exports.isMainnet = exports.getChainConfig = void 0;
const utils_1 = require("./utils");
Object.defineProperty(exports, "supportsCCTP", { enumerable: true, get: function () { return utils_1.supportsCCTP; } });
Object.defineProperty(exports, "getCCTPGateways", { enumerable: true, get: function () { return utils_1.getCCTPGateways; } });
const global_1 = require("./global");
Object.defineProperty(exports, "globalConfig", { enumerable: true, get: function () { return global_1.globalConfig; } });
const chainConfigs_1 = require("./chainConfigs");
function getChainConfig(chainId) {
    return chainConfigs_1.mainnetConfigs[chainId] || chainConfigs_1.testnetConfigs[chainId];
}
exports.getChainConfig = getChainConfig;
function isMainnet(chainId) {
    return chainId in chainConfigs_1.mainnetConfigs;
}
exports.isMainnet = isMainnet;
function isTestnet(chainId) {
    return chainId in chainConfigs_1.testnetConfigs;
}
exports.isTestnet = isTestnet;
function getAllMainnetChainIds() {
    return Object.keys(chainConfigs_1.mainnetConfigs).map(Number);
}
exports.getAllMainnetChainIds = getAllMainnetChainIds;
function getAllTestnetChainIds() {
    return Object.keys(chainConfigs_1.testnetConfigs).map(Number);
}
exports.getAllTestnetChainIds = getAllTestnetChainIds;
function getAllChainIds() {
    return [...getAllMainnetChainIds(), ...getAllTestnetChainIds()];
}
exports.getAllChainIds = getAllChainIds;
function getHardhatNetworks(options = {}) {
    const { chainIds = getAllChainIds(), defaultConfig = {} } = options;
    const networks = {};
    chainIds.forEach(chainId => {
        const config = getChainConfig(chainId);
        if (config) {
            if (config.rpc) {
                const networkType = isMainnet(chainId) ? 'mainnet' : 'testnet';
                const networkName = `${config.network}-${networkType}`;
                networks[networkName] = {
                    url: config.rpc,
                    chainId,
                    ...defaultConfig,
                };
            }
        }
    });
    return networks;
}
exports.getHardhatNetworks = getHardhatNetworks;
function getAccountantAddress(isTestnet) {
    return (0, global_1.getAccountantAddress)(isTestnet);
}
exports.getAccountantAddress = getAccountantAddress;
