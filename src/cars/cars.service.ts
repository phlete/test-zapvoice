import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CarsService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateCarDto) {
    return this.prisma.cars.create({ data });
  }

  findAll() {
    return this.prisma.cars.findMany();
  }

  findOne(id: string) {
    return this.prisma.cars.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateCarDto) {
    return this.prisma.cars.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.post.delete({ where: { id } });
  }
}
