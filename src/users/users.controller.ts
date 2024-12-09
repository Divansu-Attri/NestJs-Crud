import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { createUserDto, updateUserDto } from './DTO/create-user.dto';

ApiTags('Users');
@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: createUserDto })
  @Post('/create')
  async create(@Body() createUserDto) {
    return this.UsersService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @Get('/getall')
  async getAll() {
    return this.UsersService.getAll();
  }

  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiParam({ name: 'id', type: String })
  @Get('/getone/:id')
  async getOne(@Param('id') id: string) {
    return this.UsersService.getOne(id);
  }

  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: updateUserDto })
  @Patch('/update/:id')
  async update(@Param('id') id: string, @Body() updateUserDto) {
    return this.UsersService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiParam({ name: 'id', type: String })
  @Delete('/delete/:id')
  async delete(@Param('id') id: string) {
    return this.UsersService.delete(id);
  }
}
