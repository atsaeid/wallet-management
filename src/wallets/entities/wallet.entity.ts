import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userid: number;

  @Column()
  btcAddress: string;

  @Column()
  etcAddress: string;

  @Column()
  bscAddress: string;

  @Column()
  xrpAddress: string;

  @Column()
  adaAddress: string;

  @Column()
  wallet_type: string;
}
