const fs = require('fs');
const path = require('path');

function generateConfigFile(sourcePath, outputPath) {
    const configs = {};
    
    // Read all files in the directory
    const files = fs.readdirSync(sourcePath);
    
    files.forEach(file => {
        if (file.endsWith('.js')) {
            const chainId = parseInt(file.split('.')[0]);
            const configPath = path.join(sourcePath, file);
            const config = require(configPath);
            configs[chainId] = config;
        }
    });
    
    // Write the combined config to a JSON file
    fs.writeFileSync(outputPath, JSON.stringify(configs, null, 2));
}

// Create the chains directory in dist if it doesn't exist
const distChainsDir = path.join(__dirname, '..', 'dist', 'chains');
if (!fs.existsSync(distChainsDir)) {
    fs.mkdirSync(distChainsDir, { recursive: true });
}

// Generate mainnet and testnet config files
generateConfigFile(
    path.join(__dirname, '..', 'src', 'chains', 'mainnet'),
    path.join(distChainsDir, 'mainnet.json')
);

generateConfigFile(
    path.join(__dirname, '..', 'src', 'chains', 'testnet'),
    path.join(distChainsDir, 'testnet.json')
);

// Also copy the JSON files to src for TypeScript compilation
const srcChainsDir = path.join(__dirname, '..', 'src', 'chains');
if (!fs.existsSync(srcChainsDir)) {
    fs.mkdirSync(srcChainsDir, { recursive: true });
}

fs.copyFileSync(
    path.join(distChainsDir, 'mainnet.json'),
    path.join(srcChainsDir, 'mainnet.json')
);

fs.copyFileSync(
    path.join(distChainsDir, 'testnet.json'),
    path.join(srcChainsDir, 'testnet.json')
);
