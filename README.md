# contract-template-waffle

A pre-configured starter template for smart contracts using
[Waffle](https://getwaffle.io/), [Ganache](https://www.trufflesuite.com/ganache)
and [TypeScript](https://github.com/microsoft/TypeScript).

If you want to use Truffle instead, check out
[this template](https://github.com/CoinbaseStablecoin/contract-template).

## Setup

Requirements:

- Node >= v12
- Yarn

```
$ npm i -g yarn       # Install yarn if you don't already have it
$ yarn install        # Install dependencies
$ yarn setup          # Setup Git hooks
```

## Linting and Formatting

To check code for problems:

```
$ yarn typecheck      # Type-check TypeScript code
$ yarn lint           # Check JavaScript and TypeScript code
$ yarn lint --fix     # Fix problems where possible
$ yarn solhint        # Check Solidity code
```

To auto-format code:

```
$ yarn fmt
```

## TypeScript type definition files for the contracts

To generate type definitions:

```
$ yarn compile && yarn typechain
```

## Testing

First, make sure Ganache is running.

```
$ yarn ganache
```

Run all tests:

```
$ yarn test
```

To run tests in a specific file, run:

```
$ yarn test [path/to/file]
```

## Deployment

```
$ export MNEMONIC="apple banana ..."
$ export RPC_URL="https://goerli.infura.io/v3/abcd1234..."
$ yarn deploy
```

---

MIT License
