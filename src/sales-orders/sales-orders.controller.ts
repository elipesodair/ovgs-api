import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { SalesOrdersService } from './sales-orders.service';

@Controller('sales-orders')
export class SalesOrdersController {
  constructor(
    private readonly salesOrdersService: SalesOrdersService,
  ) {}

  @Post()
  create(
    @Body()
    body: {
      customerId: number;
      transportTypeId: number;
    },
  ) {
    return this.salesOrdersService.create(
      body.customerId,
      body.transportTypeId,
    );
  }

  @Post(':id/items')
  addItem(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: {
      itemId: number;
      quantity: number;
    },
  ) {
    return this.salesOrdersService.addItem(
      id,
      body.itemId,
      body.quantity,
    );
  }

  @Get()
  findAll() {
    return this.salesOrdersService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.salesOrdersService.findOne(id);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: {
      status: string;
    },
  ) {
    return this.salesOrdersService.updateStatus(
      id,
      body.status,
    );
  }

  @Post(':id/schedule')
schedule(
  @Param('id', ParseIntPipe) id: number,
  @Body()
  body: {
    deliveryDate: string;
    timeWindow: string;
  },
) {
  return this.salesOrdersService.schedule(
    id,
    new Date(body.deliveryDate),
    body.timeWindow,
  );
}
}