import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreatePanCocoDto } from './dto/create-pan-coco.dto';
import { UpdatePanCocoDto } from './dto/update-pan-coco.dto';

@Injectable()
export class PanCocoService {

    constructor(private prisma: PrismaService) { }

    async create(dto: CreatePanCocoDto) {
        return this.prisma.panCoco.create({
            data: {
                fullName: dto.fullName,
                descripcion: dto.descripcion,
                precio: Number(dto.precio),
                isActive: true,
            },
        });
    }

    async findAll() {
        return this.prisma.panCoco.findMany();
    }

    async findOne(id: number) {
        const found = await this.prisma.panCoco.findUnique({
            where: { id },
        });

        if (!found) {
            throw new NotFoundException(`PanCoco ${id} no existe`);
        }

        return found;
    }

    async update(id: number, UpdatePanCocoDto: UpdatePanCocoDto) {
        await this.findOne(id);

        return this.prisma.panCoco.update({
            where: { id },
            data: {
                fullName: UpdatePanCocoDto.fullName,
                descripcion: UpdatePanCocoDto.descripcion,
                precio: Number(UpdatePanCocoDto.precio),
            },
        });
    }

    async remove(id: number) {
        return this.prisma.panCoco.delete({
            where: { id },
        });
    }
}
