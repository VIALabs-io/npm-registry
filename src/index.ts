import { ChainConfig } from './types';
import { supportsCCTP, getCCTPGateways } from './utils';
import { globalConfig, getAccountantAddress as getAccountantAddressFromGlobal } from './global';

// Default empty configs
const mainnetConfigs: { [chainId: number]: ChainConfig } = {};
const testnetConfigs: { [chainId: number]: ChainConfig } = {};

// Try to import chain configs if they exist
try {
  const mainnetData = require('./chains/mainnet.json');
  Object.assign(mainnetConfigs, mainnetData);
} catch (error) {
  console.warn('Mainnet chain configurations not found. They will be generated during build.');
}

try {
  const testnetData = require('./chains/testnet.json');
  Object.assign(testnetConfigs, testnetData);
} catch (error) {
  console.warn('Testnet chain configurations not found. They will be generated during build.');
}

export function getChainConfig(chainId: number): ChainConfig | undefined {
  return mainnetConfigs[chainId] || testnetConfigs[chainId];
}

export function isMainnet(chainId: number): boolean {
  return chainId in mainnetConfigs;
}

export function isTestnet(chainId: number): boolean {
  return chainId in testnetConfigs;
}

export function getAllMainnetChainIds(): number[] {
  return Object.keys(mainnetConfigs).map(Number);
}

export function getAllTestnetChainIds(): number[] {
  return Object.keys(testnetConfigs).map(Number);
}

export function getAllChainIds(): number[] {
  return [...getAllMainnetChainIds(), ...getAllTestnetChainIds()];
}

export function getHardhatNetworks(options: { chainIds?: number[], defaultConfig?: any } = {}) {
  const { chainIds = getAllChainIds(), defaultConfig = {} } = options;
  const networks: { [name: string]: any } = {};

  chainIds.forEach(chainId => {
    const config = getChainConfig(chainId);
    
    if (config) {
      if (config.rpc) {
        const networkType = isMainnet(chainId) ? 'mainnet' : 'testnet';
        const networkName = `${config.network}-${networkType}`;
        networks[networkName] = {
          url: config.rpc,
          chainId: config.chainId,
          ...defaultConfig,
        };
      }
    }
  });

  return networks;
}

export function getAccountantAddress(isTestnet: boolean): string {
  return getAccountantAddressFromGlobal(isTestnet);
}

export { ChainConfig, supportsCCTP, getCCTPGateways, globalConfig };
