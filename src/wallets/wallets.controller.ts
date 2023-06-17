import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import * as bip39 from 'bip39';
import * as HDKey from 'hdkey';
import * as Bs58check from 'bs58check';
import { GetDerivationPath } from '../helper/derivation-paths';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { GetWaletBalanceDto } from './dto/get-wallet-balance.dto';
import { UserWalletInfo } from '../helper/interfaces';
import { LoadWalletAddressDto } from './dto/load-wallet-adresses.dto';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @Get()
  async sampleAddress() {
    const mnemonic = bip39.generateMnemonic();
    const password = '$ykYoD41JwQ0sA1%QzIo8l';
    const seedBuffer = await bip39.mnemonicToSeed(mnemonic);
    const seed = Buffer.from(seedBuffer).toString('hex');

    //console.log(seed);
    const hdwallet = HDKey.fromMasterSeed(Buffer.from(seed, 'hex'));

    const btcChildWallet = hdwallet.derive('m/44' + '/0' + '/0' + '/0');
    const ethChildWallet = hdwallet.derive('m/44' + '/60' + '/0' + '/0');
    const bchChildWallet = hdwallet.derive('m/44' + '/144' + '/0' + '/0');
    const xrpChildWallet = hdwallet.derive('m/44' + '/145' + '/0' + '/0');
    const adaChildWallet = hdwallet.derive('m/44' + '/196' + '/0' + '/0');

    // Generate send and receive addresses for BTC, ETH, BCH, XRP, and ADA
    console.log(btcChildWallet);
    const btcSendAddress = Bs58check.encode(btcChildWallet.publicKey);
    const btcReceiveAddress = Bs58check.encode(btcChildWallet.privateKey);
    // const ethSendAddress = Bs58check.encode(ethChildWallet.publicKey);
    // const ethReceiveAddress = Bs58check.encode(ethChildWallet.secretKey);
    // const bchSendAddress = Bs58check.encode(bchChildWallet.publicKey);
    // const bchReceiveAddress = Bs58check.encode(bchChildWallet.secretKey);
    // const xrpSendAddress = Bs58check.encode(xrpChildWallet.publicKey);
    // const xrpReceiveAddress = Bs58check.encode(xrpChildWallet.secretKey);
    // const adaSendAddress = Bs58check.encode(adaChildWallet.publicKey);
    // const adaReceiveAddress = Bs58check.encode(adaChildWallet.secretKey);

    console.log('BTC send address:', btcSendAddress);
    console.log('BTC receive address:', btcReceiveAddress);
    // console.log('ETH send address:', ethSendAddress);
    // console.log('ETH receive address:', ethReceiveAddress);
    // console.log('BCH send address:', bchSendAddress);
    // console.log('BCH receive address:', bchReceiveAddress);
    // console.log('XRP send address:', xrpSendAddress);
    // console.log('XRP receive address:', xrpReceiveAddress);
    // console.log('ADA send address:', adaSendAddress);
    // console.log('ADA receive address:', adaReceiveAddress);
    // const wallet = this.hdkey.fromMnemonic(sample_mnemonic);

    // Derive child wallets for all supported coins and standards
    const addresses = {};
    for (const coin of [
      'bitcoin',
      'ethereum',
      'binance-coin',
      'cardano',
      'ripple',
      'tezos',
      'litecoin',
      'bitcoin-cash',
    ]) {
      const path = GetDerivationPath(coin);
      const childWallet = hdwallet.derive(path);
      const address = Bs58check.encode(childWallet.publicKey);
      addresses[coin] = {
        send: address,
        receive: address,
      };
    }
    return addresses;
  }
}
