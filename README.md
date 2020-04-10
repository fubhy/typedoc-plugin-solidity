# typedoc-plugin-solidity

> This typedoc plugin adds support for solidity code highlighting.

[![Package version](https://img.shields.io/npm/v/typedoc-plugin-solidity)](https://www.npmjs.com/package/typedoc-plugin-solidity)
![License](https://img.shields.io/npm/l/typedoc-plugin-solidity)

## Installation

This plugin is published as an [npm package][npm]. You can install it through npm or yarn.

```
# Using yarn
yarn add typedoc-plugin-solidity

# Using npm
npm install typedoc-plugin-solidity
```

Once installed, typedoc will automatically detect and use it.

## Example

This below example will now properly render and highlight the solidity code in the comment.

````typescript
  /**
   * Returns validity and price for some pair of assets from Kyber
   *
   * ```solidity
   * function getKyberPrice(address,address) view returns (bool, uint256)
   * ```
   *
   * @param _baseAsset Address of base asset from the pair
   * @param _quoteAsset Address of quote asset from the pair
   * @returns
   *   - `kyberPrice_` — The price of _baseAsset in terms of _quoteAsset
   *   - `validity_` — Whether the price for this pair is valid
   */
  getKyberPrice: (
    _baseAsset: string,
    _quoteAsset: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ validity_: boolean; kyberPrice_: ethers.BigNumber }>;
````

## Contributing

Third party contributions to this project are welcome and encouraged. If you want to contribute, please open an issue before submtting a pull requests so we can discuss the proposed changes and/or additions.

Please note that all my repositories follow the [Code of Conduct][coc], make sure to review and follow it.

[yarn]: https://yarnpkg.com
[node]: https://nodejs.org
[npm]: https://www.npmjs.com/package/typedoc-plugin-solidity
[coc]: https://github.com/fubhy/typedoc-plugin-solidity/blob/master/CODE_OF_CONDUCT.md
