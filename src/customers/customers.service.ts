import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async create(name: string) {
    return this.prisma.customer.create({
      data: {
        name,
      },
    });
  }

  async findAll() {
    return this.prisma.customer.findMany();
  }
}