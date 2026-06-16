import { Test, TestingModule } from '@nestjs/testing';
import { SalesOrdersService } from './sales-orders.service';
import { PrismaService } from '../prisma/prisma.service';

describe('SalesOrdersService', () => {
  let service: SalesOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SalesOrdersService,
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<SalesOrdersService>(SalesOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
