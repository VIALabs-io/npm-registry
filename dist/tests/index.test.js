"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
describe('Chain Configuration Tests', () => {
    test('getChainConfig returns correct config for Ethereum mainnet', () => {
        const config = (0, index_1.getChainConfig)(1);
        expect(config).toBeDefined();
        expect(config === null || config === void 0 ? void 0 : config.name).toBe('Ethereum Mainnet');
        expect(config === null || config === void 0 ? void 0 : config.network).toBe('mainnet');
    });
    test('getChainConfig returns correct config for Ethereum Sepolia testnet', () => {
        const config = (0, index_1.getChainConfig)(11155111);
        expect(config).toBeDefined();
        expect(config === null || config === void 0 ? void 0 : config.name).toBe('ethereum-sepolia');
        expect(config === null || config === void 0 ? void 0 : config.network).toBe('testnet');
    });
    test('isMainnet correctly identifies mainnet chains', () => {
        expect((0, index_1.isMainnet)(1)).toBe(true);
        expect((0, index_1.isMainnet)(11155111)).toBe(false);
    });
    test('isTestnet correctly identifies testnet chains', () => {
        expect((0, index_1.isTestnet)(1)).toBe(false);
        expect((0, index_1.isTestnet)(11155111)).toBe(true);
    });
    test('getAllMainnetChainIds returns non-empty array', () => {
        const mainnetChainIds = (0, index_1.getAllMainnetChainIds)();
        expect(mainnetChainIds.length).toBeGreaterThan(0);
        expect(mainnetChainIds).toContain(1);
    });
    test('getAllTestnetChainIds returns non-empty array', () => {
        const testnetChainIds = (0, index_1.getAllTestnetChainIds)();
        expect(testnetChainIds.length).toBeGreaterThan(0);
        expect(testnetChainIds).toContain(11155111);
    });
    test('getAllChainIds returns combination of mainnet and testnet chain ids', () => {
        const allChainIds = (0, index_1.getAllChainIds)();
        expect(allChainIds.length).toBe((0, index_1.getAllMainnetChainIds)().length + (0, index_1.getAllTestnetChainIds)().length);
        expect(allChainIds).toContain(1);
        expect(allChainIds).toContain(11155111);
    });
    // New tests for CCTP-related functionality
    test('supportsCCTP correctly identifies chains with CCTP support', () => {
        // Assuming chain 1 supports CCTP and chain 2 doesn't
        // You may need to adjust these assumptions based on your actual data
        expect((0, index_1.supportsCCTP)(1)).toBe(true);
        expect((0, index_1.supportsCCTP)(2)).toBe(false);
    });
    test('getCCTPGateways returns correct gateway addresses', () => {
        // Assuming chain 1 has CCTP gateways and chain 2 doesn't
        // You may need to adjust these assumptions based on your actual data
        const gateways1 = (0, index_1.getCCTPGateways)(1);
        expect(gateways1).toBeDefined();
        expect(gateways1 === null || gateways1 === void 0 ? void 0 : gateways1.proto).toBeDefined();
        expect(gateways1 === null || gateways1 === void 0 ? void 0 : gateways1.intent).toBeDefined();
        const gateways2 = (0, index_1.getCCTPGateways)(2);
        expect(gateways2).toBeUndefined();
    });
});
