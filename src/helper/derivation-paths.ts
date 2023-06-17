/* eslint-disable prettier/prettier */
import * as HDKey from 'hdkey';

//BIP-44 specification, as well as BEP2, BEP20, and ERC20 tokens:
const derivation_paths = {
  "bitcoin": "m/44'/0'/0'/0/0",
  "binance-coin": "m/44'/134'/0'/0/0",
  "ethereum": "m/44'/60'/0'/0/0",
  "cardano": "m/44'/195'/0'/0/0",
  "ripple": "m/44'/135'/0'/0/0",
  "tezos": "m/44'/1729'/0'/0/0",
  "litecoin": "m/44'/2'/0'/0/0",
  "dogecoin": "m/44'/145'/0'/0/0",
  "dash": "m/44'/1'/0'/0/0",
  "zcash": "m/44'/142'/0'/0/0",
  "iota": "m/44'/129'/0'/0/0",
  "nem": "m/44'/130'/0'/0/0",
  "vechain": "m/44'/131'/0'/0/0",
  "tron": "m/44'/132'/0'/0/0",
  "eos": "m/44'/133'/0'/0/0",
  "monero": "m/44'/148'/0'/0/0",
  "waves": "m/44'/149'/0'/0/0",
  "bitcoin-cash": "m/44'/141'/0'/0/0",
  "cosmos": "m/44'/118'/0'/0/0",
  "algorand": "m/44'/119'/0'/0/0",
  "iota-devnet": "m/44'/130'/0'/0/1",
  "tezos-mainnet": "m/44'/1729'/0'/0/0",
  "tezos-testnet": "m/44'/1729'/0'/0/1",
  "stellar": "m/44'/136'/0'/0/0",
  "bep2": "m/44'/134'/0'/0/0",
  "bep20": "m/44'/60'/0'/0/0",
  "erc20": "m/44'/60'/0'/0/0",
};

export function GetDerivationPath(coin: string): string {
  if (!derivation_paths.hasOwnProperty(coin)) {
    throw new Error(`Invalid coin: ${coin}`);
  }

  return derivation_paths[coin];
}