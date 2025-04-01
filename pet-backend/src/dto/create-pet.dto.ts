import { IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class CreatePetDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  nomeDono: string;

  @IsString()
  @IsNotEmpty()
  telefone: string;

  @IsString()
  @IsNotEmpty()
  animal: string;

  @IsDateString()
  @IsOptional()
  nascimento?: string;

  @IsString()
  @IsNotEmpty()
  raca: string;
}
