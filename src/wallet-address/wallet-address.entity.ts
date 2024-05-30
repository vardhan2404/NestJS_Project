import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/users.entity';

@Entity()
export class WalletAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  address: string;

  @Column('decimal')
  balance: number;

  @ManyToOne(() => User, user => user.id)
  user: User;
}
