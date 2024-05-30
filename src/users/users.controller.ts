import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this.usersService.create(createUserDto);
    } catch (error) {
      throw new Error('Error creating user');
    }
  }

  @Get()
  async findAll(): Promise<User[]> {
    try {
      return await this.usersService.findAll();
    } catch (error) {
      throw new Error('Error retrieving users');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    try {
      return await this.usersService.findOne(+id);
    } catch (error) {
      throw new Error(`Error retrieving user with id ${id}`);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createUserDto: CreateUserDto): Promise<void> {
    try {
      await this.usersService.update(+id, createUserDto);
    } catch (error) {
      throw new Error(`Error updating user with id ${id}`);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    try {
      await this.usersService.remove(+id);
    } catch (error) {
      throw new Error(`Error deleting user with id ${id}`);
    }
  }
}
