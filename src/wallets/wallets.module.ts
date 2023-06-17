import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletsService } from './wallets.service';
import { WalletsController } from './wallets.controller';
import { Wallet } from './entities/wallet.entity';
import { WalletKey } from './entities/wallet-key.entity';

@Module({
  imports: [],
  controllers: [WalletsController],
  providers: [WalletsService],
})
export class WalletsModule {}
