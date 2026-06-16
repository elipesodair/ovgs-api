import { Test, TestingModule } from '@nestjs/testing';
import { TransportTypesService } from './transport-types.service';
import { PrismaService } from '../prisma/prisma.service';

describe('TransportTypesService', () => {
  let service: TransportTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransportTypesService,
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<TransportTypesService>(TransportTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
