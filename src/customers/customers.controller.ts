import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() body: { name: string }) {
    return this.customersService.create(body.name);
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }
}