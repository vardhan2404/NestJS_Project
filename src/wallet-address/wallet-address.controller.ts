import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { CreateWalletAddressDto } from './dto/create-wallet-address.dto';
import { WalletAddress } from './wallet-address.entity';

@Controller('wallet-address')
export class WalletAddressController {
  constructor(private readonly walletAddressService: WalletAddressService) {}

  @Post()
  async create(@Body() createWalletAddressDto: CreateWalletAddressDto): Promise<WalletAddress> {
    try {
      return await this.walletAddressService.create(createWalletAddressDto);
    } catch (error) {
      throw new Error('Error creating wallet address');
    }
  }

  @Get()
  async findAll(): Promise<WalletAddress[]> {
    try {
      return await this.walletAddressService.findAll();
    } catch (error) {
      throw new Error('Error retrieving wallet addresses');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<WalletAddress> {
    try {
      return await this.walletAddressService.findOne(+id);
    } catch (error) {
      throw new Error(`Error retrieving wallet address with id ${id}`);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createWalletAddressDto: CreateWalletAddressDto): Promise<void> {
    try {
      await this.walletAddressService.update(+id, createWalletAddressDto);
    } catch (error) {
      throw new Error(`Error updating wallet address with id ${id}`);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    try {
      await this.walletAddressService.remove(+id);
    } catch (error) {
      throw new Error(`Error deleting wallet address with id ${id}`);
    }
  }
}
