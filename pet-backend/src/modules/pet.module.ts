import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { PetController } from 'src/controllers/pet.controller';
import { PetService } from 'src/services/pet.service';

@Module({
  imports: [PrismaModule],
  controllers: [PetController],
  providers: [PetService],
})
export class PetModule {}