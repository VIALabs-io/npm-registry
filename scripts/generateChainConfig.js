const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'chains');
const outputFile = path.join(__dirname, '..', 'dist', 'chainConfig.json');

function loadConfigs(directory) {
  const configs = {};
  fs.readdirSync(directory).forEach(file => {
    if (file.endsWith('.js')) {
      const chainId = parseInt(file.split('.')[0]);
      const config = require(path.join(directory, file));
      configs[chainId] = config;
    }
  });
  return configs;
}

const mainnetConfigs = loadConfigs(path.join(srcDir, 'mainnet'));
const testnetConfigs = loadConfigs(path.join(srcDir, 'testnet'));

const allConfigs = {
  mainnet: mainnetConfigs,
  testnet: testnetConfigs
};

fs.writeFileSync(outputFile, JSON.stringify(allConfigs, null, 2));
console.log(`Chain configurations written to ${outputFile}`);
