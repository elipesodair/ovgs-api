import { Module } from '@nestjs/common';
import { TransportTypesController } from './transport-types.controller';
import { TransportTypesService } from './transport-types.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TransportTypesController],
  providers: [TransportTypesService],
})
export class TransportTypesModule {}