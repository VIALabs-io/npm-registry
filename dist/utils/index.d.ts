import { ChainConfig } from '../types';
export declare function getChainConfig(chainId: number): ChainConfig | undefined;
export declare function getAddress(chainId: number, addressType: keyof ChainConfig): string | undefined;
export declare function isMainnet(chainId: number): boolean;
export declare function isTestnet(chainId: number): boolean;
export declare function getSupportedChains(): number[];
export declare function getMainnetChains(): number[];
export declare function getTestnetChains(): number[];
export declare function supportsCCTP(chainId: number): boolean;
export declare function getCCTPGateways(chainId: number): {
    proto?: string;
    intent?: string;
} | undefined;
