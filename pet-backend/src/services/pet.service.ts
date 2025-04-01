import { Injectable } from '@nestjs/common';
import { Pet } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PetService {
  constructor(private prisma: PrismaService) {}

  async getPets(): Promise<Pet[]> {
    return this.prisma.pet.findMany();
  }

  async createPet(data: { nome: string; nomeDono: string; telefone: string; animal: string; nascimento?: string; raca: string }): Promise<Pet> {
    const petData = {
      nome: data.nome,
      nomeDono: data.nomeDono,
      telefone: data.telefone,
      animal: data.animal,
      nascimento: data.nascimento || null, // Tratar 'nascimento' como null se não for fornecido
      raca: data.raca,
    };

    return this.prisma.pet.create({
      data: petData,
    });
  }

  async updatePet(id: number, data: { nome?: string; nomeDono?: string; telefone?: string; animal?: string; nascimento?: string; raca?: string }): Promise<Pet> {
    const petData = {
      nome: data.nome,
      nomeDono: data.nomeDono,
      telefone: data.telefone,
      animal: data.animal,
      nascimento: data.nascimento || null, // Tratar 'nascimento' como null se não for fornecido
      raca: data.raca,
    };

    return this.prisma.pet.update({
      where: { id },
      data: petData,
    });
  }

  async deletePet(id: number): Promise<Pet> {
    return this.prisma.pet.delete({
      where: { id },
    });
  }
}