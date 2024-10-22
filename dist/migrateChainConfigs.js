"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Read the existing chain configurations
const oldChainConfigsPath = path_1.default.join(__dirname, '..', '..', 'config', 'chains.js');
const oldChainConfigsContent = fs_1.default.readFileSync(oldChainConfigsPath, 'utf-8');
const oldChainConfigs = eval(oldChainConfigsContent.replace('module.exports =', ''));
function migrateChainConfig(chainId, oldConfig) {
    return {
        name: oldConfig.name,
        network: oldConfig.network,
        type: oldConfig.type,
        chainId: parseInt(chainId),
        message: oldConfig.message,
        feeToken: oldConfig.feeToken,
        weth: oldConfig.weth,
        usdc: oldConfig.usdc,
        eurc: oldConfig.eurc,
        rpc: oldConfig.rpc,
        explorer: oldConfig.explorer,
        circleTokenMessenger: oldConfig.circleTokenMessanger,
        circleMessageTransmitter: oldConfig.circleMessageTransmitter,
        circleTokenMinter: oldConfig.circleTokenMinter,
        featureGateway: oldConfig.featureGateway,
        protoCCTPGateway: oldConfig.protoCCTPGateway,
        intentCCTPGateway: oldConfig.intentCCTPGateway,
    };
}
function migrateAllChainConfigs() {
    const newChainConfigs = {};
    for (const [chainId, oldConfig] of Object.entries(oldChainConfigs)) {
        newChainConfigs[parseInt(chainId)] = migrateChainConfig(chainId, oldConfig);
    }
    return newChainConfigs;
}
function saveChainConfig(chainConfig) {
    const directory = chainConfig.network === 'mainnet' ? 'mainnet' : 'testnet';
    const filePath = path_1.default.join(__dirname, 'chains', directory, `${chainConfig.chainId}.ts`);
    const content = `import { ChainConfig } from '../../types';\n\nconst chainConfig: ChainConfig = ${JSON.stringify(chainConfig, null, 2)};\n\nexport default chainConfig;`;
    fs_1.default.writeFileSync(filePath, content);
}
const migratedConfigs = migrateAllChainConfigs();
for (const chainConfig of Object.values(migratedConfigs)) {
    saveChainConfig(chainConfig);
}
console.log('Migration completed successfully.');
