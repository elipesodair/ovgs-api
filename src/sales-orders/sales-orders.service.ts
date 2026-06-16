import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SalesOrderStatus } from '@prisma/client';

@Injectable()
export class SalesOrdersService {
  constructor(private prisma: PrismaService) {}

  async create(customerId: number, transportTypeId: number) {
    return this.prisma.salesOrder.create({
      data: {
        customerId,
        transportTypeId,
      },
    });
  }

  async addItem(salesOrderId: number, itemId: number, quantity: number) {
    return this.prisma.salesOrderItem.create({
      data: {
        salesOrderId,
        itemId,
        quantity,
      },
    });
  }

  async findAll() {
    return this.prisma.salesOrder.findMany({
      include: {
        customer: true,
        transportType: true,
        items: {
          include: {
            item: true,
          },
        },
        schedule: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.salesOrder.findUnique({
      where: { id },
      include: {
        customer: true,
        transportType: true,
        items: {
          include: {
            item: true,
          },
        },
      },
    });
  }

  async updateStatus(id: number, status: string) {
    const order = await this.prisma.salesOrder.findUnique({
      where: { id },
    });

    if (!order) {
      throw new NotFoundException('Ordem não encontrada');
    }

    const flow = [
      'CRIADA',
      'PLANEJADA',
      'AGENDADA',
      'EM_TRANSPORTE',
      'ENTREGUE',
    ];

    const currentIndex = flow.indexOf(order.status);
    const nextIndex = flow.indexOf(status);

    if (nextIndex !== currentIndex + 1) {
      throw new BadRequestException(
        `Transição inválida: ${order.status} -> ${status}`,
      );
    }

    return this.prisma.salesOrder.update({
      where: { id },
      data: {
        status: status as SalesOrderStatus,
      },
    });
  }

  async schedule(salesOrderId: number, deliveryDate: Date, timeWindow: string) {
    return this.prisma.schedule.create({
      data: {
        salesOrderId,
        deliveryDate,
        timeWindow,
      },
    });
  }
}
