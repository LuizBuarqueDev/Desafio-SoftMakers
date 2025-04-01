import { IsString, IsOptional, IsDateString } from 'class-validator';

export class UpdatePetDto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsString()
  @IsOptional()
  nomeDono?: string;

  @IsString()
  @IsOptional()
  telefone?: string;

  @IsString()
  @IsOptional()
  animal?: string;

  @IsDateString()
  @IsOptional()
  nascimento?: string;

  @IsString()
  @IsOptional()
  raca?: string;
}