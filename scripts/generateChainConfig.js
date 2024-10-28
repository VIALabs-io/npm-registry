const fs = require('fs');
const path = require('path');

function generateConfigFile() {
    const mainnetConfigs = {};
    const testnetConfigs = {};
    
    // Read mainnet configs
    const mainnetPath = path.join(__dirname, '..', 'src', 'chains', 'mainnet');
    if (fs.existsSync(mainnetPath)) {
        fs.readdirSync(mainnetPath).forEach(file => {
            if (file.endsWith('.js')) {
                const chainId = parseInt(file.split('.')[0]);
                const config = require(path.join(mainnetPath, file));
                // Ensure mainnet configs have network: 'mainnet'
                config.network = 'mainnet';
                mainnetConfigs[chainId] = config;
            }
        });
    }

    // Read testnet configs
    const testnetPath = path.join(__dirname, '..', 'src', 'chains', 'testnet');
    if (fs.existsSync(testnetPath)) {
        fs.readdirSync(testnetPath).forEach(file => {
            if (file.endsWith('.js')) {
                const chainId = parseInt(file.split('.')[0]);
                const config = require(path.join(testnetPath, file));
                // All non-mainnet networks are considered testnet
                config.network = 'testnet';
                testnetConfigs[chainId] = config;
            }
        });
    }

    // Generate the bundled config file
    const bundledContent = `// Auto-generated bundled chain configurations
// DO NOT EDIT DIRECTLY - Edit files in src/chains/{mainnet,testnet} instead

import { ChainConfig, ChainConfigs } from './types';

export const mainnetConfigs: ChainConfigs = ${JSON.stringify(mainnetConfigs, null, 2)};

export const testnetConfigs: ChainConfigs = ${JSON.stringify(testnetConfigs, null, 2)};
`;

    // Write the bundled config
    const bundledPath = path.join(__dirname, '..', 'src', 'chainConfigs.ts');
    fs.writeFileSync(bundledPath, bundledContent);
}

generateConfigFile();
