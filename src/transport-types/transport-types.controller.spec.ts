import { Test, TestingModule } from '@nestjs/testing';
import { TransportTypesController } from './transport-types.controller';
import { TransportTypesService } from './transport-types.service';

describe('TransportTypesController', () => {
  let controller: TransportTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransportTypesController],
      providers: [
        {
          provide: TransportTypesService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<TransportTypesController>(TransportTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
