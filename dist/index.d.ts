import { ChainConfig } from './types';
import { supportsCCTP, getCCTPGateways } from './utils';
import { globalConfig } from './global';
export declare function getChainConfig(chainId: number): ChainConfig | undefined;
export declare function isMainnet(chainId: number): boolean;
export declare function isTestnet(chainId: number): boolean;
export declare function getAllMainnetChainIds(): number[];
export declare function getAllTestnetChainIds(): number[];
export declare function getAllChainIds(): number[];
export declare function getHardhatNetworks(options?: {
    chainIds?: number[];
    defaultConfig?: any;
}): {
    [name: string]: any;
};
export declare function getAccountantAddress(isTestnet: boolean): string;
export { ChainConfig, supportsCCTP, getCCTPGateways, globalConfig };
