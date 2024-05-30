import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateWalletAddressDto {
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsNumber()
  balance: number;
}
