import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(
    @Body()
    body: {
      sku: string;
      name: string;
    },
  ) {
    return this.itemsService.create(body.sku, body.name);
  }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }
}