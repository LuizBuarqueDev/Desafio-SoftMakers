import { Module } from '@nestjs/common';
import { PetModule } from './modules/pet.module';

@Module({
  imports: [PetModule],
})
export class AppModule {}
