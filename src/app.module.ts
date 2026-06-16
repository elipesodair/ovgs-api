import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from './prisma/prisma.module';

import { CustomersModule } from './customers/customers.module';
import { ItemsModule } from './items/items.module';
import { TransportTypesModule } from './transport-types/transport-types.module';
import { SalesOrdersModule } from './sales-orders/sales-orders.module';

@Module({
  imports: [
    PrismaModule,
    CustomersModule,
    ItemsModule,
    TransportTypesModule,
    SalesOrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}