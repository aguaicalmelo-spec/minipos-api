import { Module } from '@nestjs/common';
import { PanCocoController } from './pan-coco.controller';
import { PanCocoService } from './pan-coco.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PanCocoController],
  providers: [PanCocoService, PrismaService]
})
export class PanCocoModule { }

