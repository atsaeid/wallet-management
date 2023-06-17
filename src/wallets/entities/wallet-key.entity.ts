/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WalletKey {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  walletId: number;

  @Column()
  privateKey: string;

  @Column()
  publicKey: string;

  @Column()
  mnemonic_words: string;

  
  @Column()
  wallet_type: string;
}
