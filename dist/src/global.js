"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountantAddress = exports.globalConfig = void 0;
exports.globalConfig = {
    accountant: {
        mainnet: "0x1234567890123456789012345678901234567890",
        testnet: "0x0987654321098765432109876543210987654321" // Replace with the actual testnet accountant address
    }
};
function getAccountantAddress(isTestnet) {
    return isTestnet ? exports.globalConfig.accountant.testnet : exports.globalConfig.accountant.mainnet;
}
exports.getAccountantAddress = getAccountantAddress;
