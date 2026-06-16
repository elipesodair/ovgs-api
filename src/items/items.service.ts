import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  async create(sku: string, name: string) {
    return this.prisma.item.create({
      data: {
        sku,
        name,
      },
    });
  }

  async findAll() {
    return this.prisma.item.findMany();
  }
}