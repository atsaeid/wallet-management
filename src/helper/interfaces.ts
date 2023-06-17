/* eslint-disable prettier/prettier */
export default interface WalletAddress {
  address: string;
  privateKey: string;
  publicKey: string;
  mnemonic: string[] | any;
  memo: string;
  blockchainType: BlockchianType;
  TokenStandardType: TokenStandardTypes,
  addressType : BitcoinAddressTypes | EthereumAddressTypes,
}

export enum BlockchianType {
    Bitcoin = 'BTC',
    Binance = 'BSC',
    Ethereum = 'ETH',
    Cardano = 'ADA',
    Ripple = 'XRP',
  }

  export enum BitcoinAddressTypes {
    LegacyAdresse='P2PKH',
    PayScriptHash ='P2SH',
    NativeSegWit='P2WPKH',
    Taproot='P2TR',
  }

  export enum EthereumAddressTypes {
    ExternallyOwnedAddress='EOA',
    ContractAddress = 'EVM',
  }

  
  export enum TokenStandardTypes {
    //coins : FTM,BTCB,BUSD,DOT,ADA
    BinanceChain='BEP2', //require MEMO 

    //coins : CAKE,SFM,CREAM,BURGER,SXP
    BinanceSmartChain = 'BEP20',

    //coins : USDT,USDC,BUSD,DAI,UNI,
    EthereumRequestforComment= 'ERC20',
  }

  export interface UserWalletInfo {
    address: string;
    walletType: BlockchianType;
    addressType : BitcoinAddressTypes,
  }

