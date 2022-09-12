import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PokemonService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createPokemonDto: CreatePokemonDto) {
    const { name, height, images } = createPokemonDto;
    return this.prismaService.pokemon.create({
      data: { name: name, height: height, images: images },
      include: { images: { select: { url: true } } },
    });
  }

  findAll() {
    return this.prismaService.pokemon.findMany({
      include: { images: { select: { url: true } } },
    });
  }

  findOne(id: number) {
    return this.prismaService.pokemon.findUnique({
      where: { id },
      include: { images: { select: { url: true } } },
    });
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    const { name, height } = updatePokemonDto;
    return this.prismaService.pokemon.update({
      where: { id },
      data: { name, height },
      include: { images: { select: { url: true } } },
    });
  }

  remove(id: number) {
    return this.prismaService.pokemon.delete({
      where: { id },
    });
  }
}
