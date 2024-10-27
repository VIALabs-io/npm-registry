export interface ChainConfig {
    name: string;
    network: 'mainnet' | 'testnet';
    type: 'evm' | 'solana';
    chainId: number;
    message: string;
    feeToken: string;
    weth: string;
    usdc?: string;
    eurc?: string;
    rpc?: string;
    explorer?: string;
    circleTokenMessenger?: string;
    circleMessageTransmitter?: string;
    circleTokenMinter?: string;
    featureGateway?: string;
    protoCCTPGateway?: string;
    intentCCTPGateway?: string;
    featureCCTP?: string;
    isCCTPEnabled?: boolean;
    cctpLeafChains?: Array<{
        chainId: number;
        rootManager: string;
        leafManager: string;
    }>;
}
export interface ChainConfigs {
    [chainId: number]: ChainConfig;
}
