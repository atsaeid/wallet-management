import { Injectable } from '@nestjs/common';

@Injectable()
export class WalletsService {
  getDerivationPathByStandard(coin, standard) {
    switch (coin) {
      case 'BTC':
        return standard === 'Legacy' ? 'm/44' : 'm/44';
      case 'ETH':
        return standard === 'ERC20' ? 'm/44' : 'm/44';
      case 'BSC':
        return standard === 'BEP20' ? 'm/44' : 'm/44';
      case 'XRP':
        return 'm/44';
      case 'ADA':
        return standard === 'ERC20' ? 'm/44' : 'm/44';
      case 'BEP2':
        return 'm/44';
      case 'BEP20':
        return 'm/44';
      case 'ERC20':
        return 'm/44';
      default:
        throw new Error(`Unsupported coin: ${coin}`);
    }
  }

  getDerivationPath(coin) {
    switch (coin) {
      case 'BTC':
        return 'm/44';
      case 'ETH':
        return 'm/44';
      case 'BSC':
        return 'm/44/60';
      case 'XRP':
        return 'm/44/144';
      case 'ADA':
        return 'm/44/1962';
      case 'BEP2':
        return 'm/44/60';
      case 'BEP20':
        return 'm/44/60';
      case 'ERC20':
        return 'm/44/60';
      default:
        throw new Error(`Unsupported coin: ${coin}`);
    }
  }
}
