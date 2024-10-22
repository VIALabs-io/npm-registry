import * as fs from 'fs';
import * as path from 'path';
import { ChainConfig } from './types';
import { supportsCCTP, getCCTPGateways } from './utils';
import { globalConfig, getAccountantAddress as getAccountantAddressFromGlobal } from './global';

const mainnetConfigs: { [chainId: number]: ChainConfig } = {};
const testnetConfigs: { [chainId: number]: ChainConfig } = {};

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
      } else {
        console.log(`Skipping chainId ${chainId}: No RPC URL`);
      }
    } else {
      console.log(`No config found for chainId: ${chainId}`);
    }
  });

  console.log(`Total networks added: ${Object.keys(networks).length}`);
  return networks;
}

export function getAccountantAddress(isTestnet: boolean): string {
  return getAccountantAddressFromGlobal(isTestnet);
}

export { ChainConfig, supportsCCTP, getCCTPGateways, globalConfig };
