import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Pokemon } from '../entities/pokemon.entity';

export class CreatePokemonDto extends Pokemon {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsOptional()
  height?: number;
}
