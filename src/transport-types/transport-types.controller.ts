import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransportTypesService } from './transport-types.service';

@Controller('transport-types')
export class TransportTypesController {
  constructor(
    private readonly transportTypesService: TransportTypesService,
  ) {}

  @Post()
  create(
    @Body()
    body: {
      name: string;
    },
  ) {
    return this.transportTypesService.create(body.name);
  }

  @Get()
  findAll() {
    return this.transportTypesService.findAll();
  }
}