import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';

import { Pet } from '@prisma/client';
import { CreatePetDto } from 'src/dto/create-pet.dto';
import { UpdatePetDto } from 'src/dto/update-pet.dto';
import { PetService } from 'src/services/pet.service';

@Controller('pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get('all')
  async getPets(): Promise<Pet[]> {
    return this.petService.getPets();
  }

  @Post('create')
  async createPet(@Body() createPetDto: CreatePetDto): Promise<Pet> {
    return this.petService.createPet(createPetDto);
  }

  @Put('update/:petId')
  async updatePet(
    @Param('petId') petId: number,
    @Body() updatePetDto: UpdatePetDto,
  ): Promise<Pet> {
    return this.petService.updatePet(petId, updatePetDto);
  }

  @Delete('remove/:petId')
  async deletePet(@Param('petId') petId: number): Promise<Pet> {
    return this.petService.deletePet(petId);
  }
}