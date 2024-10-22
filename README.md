# @vialabs-io/npm-registry

This package contains blockchain-related configurations and utilities for cross-chain communication and management. It provides a centralized source of chain configurations and helper functions for developers working with multiple blockchain networks, specifically tailored for ViaLabs projects.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Available Functions](#available-functions)
- [Project Structure](#project-structure)
- [Development](#development)
- [Contributing](#contributing)
- [Dependencies](#dependencies)
- [Related Packages](#related-packages)
- [License](#license)
- [Support](#support)
- [Troubleshooting](#troubleshooting)

## Installation

```bash
npm install @vialabs-io/npm-registry
```

## Usage

Import and use the configurations and functions in your TypeScript files:

```typescript
import { 
  getChainConfig, 
  isTestnet, 
  getProtoCCTPGateway, 
  getIntentCCTPGateway 
} from "@vialabs-io/npm-registry";

// Get chain configuration
const config = getChainConfig(1); // Ethereum Mainnet

// Check if a chain is a testnet
const isTestNet = isTestnet(5); // true for Goerli testnet

// Get CCTP Gateway addresses
const protoCCTPGateway = getProtoCCTPGateway(1);
const intentCCTPGateway = getIntentCCTPGateway(1);
```

## Configuration

The chain configuration object returned by `getChainConfig` has the following structure:

```typescript
interface ChainConfig {
  name: string;
  network: string;
  chainId: number;
  protoCCTPGateway?: string;
  intentCCTPGateway?: string;
  // Other chain-specific properties may be included
}
```

Example configuration:

```typescript
const ethereumConfig = getChainConfig(1);
console.log(ethereumConfig);
// Output:
// {
//   name: "Ethereum",
//   network: "mainnet",
//   chainId: 1,
//   protoCCTPGateway: "0x...",
//   intentCCTPGateway: "0x...",
//   // ... other properties
// }
```

## Available Functions

1. `getChainConfig(chainId: number): ChainConfig`
   - Returns the configuration for a specific chain.
   - Usage:
     ```typescript
     const config = getChainConfig(1);
     console.log(config.name); // "Ethereum"
     ```

2. `isTestnet(chainId: number): boolean`
   - Determines if a given chain ID belongs to a testnet.
   - Usage:
     ```typescript
     const isGoerliTestnet = isTestnet(5);
     console.log(isGoerliTestnet); // true
     ```

3. `getProtoCCTPGateway(chainId: number): string | undefined`
   - Returns the Proto CCTP Gateway address for a given chain ID.
   - Usage:
     ```typescript
     const protoCCTPGateway = getProtoCCTPGateway(1);
     console.log(protoCCTPGateway); // "0x..."
     ```

4. `getIntentCCTPGateway(chainId: number): string | undefined`
   - Returns the Intent CCTP Gateway address for a given chain ID.
   - Usage:
     ```typescript
     const intentCCTPGateway = getIntentCCTPGateway(1);
     console.log(intentCCTPGateway); // "0x..."
     ```

## Project Structure

```
npm-registry/
├── src/
│   ├── index.ts
│   └── chains/
│       ├── mainnet/
│       └── testnet/
├── test/
│   └── mocks/
│       └── chainConfig.json
└── scripts/
```

- `src/index.ts`: Main entry point for the package
- `src/chains/`: Directory containing chain-specific configurations
- `test/mocks/chainConfig.json`: Mock chain configuration for testing purposes
- `scripts/`: Utility scripts for development and maintenance

## Development

To build the package:

```bash
npm run build
```

To run tests:

```bash
npm test
```

### Adding New Chains or Settings

To add a new chain or update existing settings:

1. Add or update the chain-specific file in `src/chains/mainnet/` or `src/chains/testnet/`.
2. Update the `getChainConfig` function in `src/index.ts` if necessary.
3. Update any relevant documentation, including this README.md file.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them with clear, descriptive messages
4. Push your changes to your fork
5. Submit a pull request to the main repository

Please ensure your code follows the existing style and passes all tests.

## Dependencies

This package requires Node.js version 14 or higher. It also has peer dependencies on ethers.js and other blockchain-related libraries. Please check the `package.json` file for a complete list of dependencies.

## Related Packages

- Solidity contracts: @vialabs-io/npm-contracts

## License

MIT

## Support

For any questions or issues, please open an issue on the GitHub repository or contact the ViaLabs support team.

## Troubleshooting

1. **Chain configuration not found**
   - If `getChainConfig` returns `undefined`, ensure you're using a valid chain ID.
   - Check if the chain configuration file exists in the appropriate directory (`src/chains/mainnet/` or `src/chains/testnet/`).

2. **CCTP Gateway address is undefined**
   - Some chains may not have CCTP Gateway addresses configured. Use optional chaining when accessing these properties:
     ```typescript
     const protoCCTPGateway = getChainConfig(chainId)?.protoCCTPGateway;
     ```

3. **TypeScript errors**
   - Ensure you're using TypeScript version 4.0 or higher.
   - If you encounter type errors, try updating to the latest version of the package:
     ```bash
     npm update @vialabs-io/npm-registry
     ```

4. **Version compatibility issues**
   - If you're experiencing unexpected behavior, check that your project's dependencies are compatible with the version of `@vialabs-io/npm-registry` you're using.
   - Review the package's changelog for any breaking changes that might affect your implementation.

5. **Network connectivity problems**
   - If you're having trouble connecting to specific networks, ensure your environment has the necessary network access.
   - Check your firewall settings and make sure the required ports are open for blockchain communication.

6. **Handling deprecated functions or configurations**
   - Keep an eye on deprecation warnings in the console. These will inform you about functions or configurations that may be removed in future versions.
   - Regularly check the package documentation for updates on deprecated features and their replacements.

7. **Dealing with rate limiting or API restrictions**
   - If you're hitting rate limits when interacting with blockchain networks, consider implementing retry logic with exponential backoff in your application.
   - Use caching strategies to reduce the number of repeated calls to the blockchain.

8. **Debugging issues related to chain-specific configurations**
   - If you suspect an issue with a specific chain's configuration, compare the values returned by `getChainConfig` with the official documentation for that blockchain.
   - For custom or less common chains, double-check that all required configuration fields are properly set in the chain-specific file.

9. **Inconsistent behavior across different environments**
   - Ensure that all environments (development, staging, production) are using the same version of `@vialabs-io/npm-registry`.
   - Check for any environment-specific configurations that might be overriding the default behavior of the package.

For more specific issues, please refer to the documentation or open an issue on the GitHub repository.
