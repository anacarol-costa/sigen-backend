import { Carrossel } from './entities/carrossel.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarrosselDto } from './dto/carrossel.dto';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class CarrosselService {
  constructor(
    @InjectRepository(Carrossel)
    private readonly carrosselRepository: Repository<Carrossel>,
  ){}

  async create(createCarrosselDto: CarrosselDto): Promise<Carrossel> {
    const carrossel = CarrosselDto.fromEntity(createCarrosselDto);

    return await this.carrosselRepository.save(carrossel);
  }

  async findAll(): Promise<Carrossel[]> {
    return await this.carrosselRepository.find();
  }

  async findOne(id: number): Promise<Carrossel>  {
    return await this.carrosselRepository.findOne(id);
  }

 async update(id: number, updateCarrosselDto: CarrosselDto): Promise<UpdateResult> {
    const carrossel = CarrosselDto.fromEntity(updateCarrosselDto);
    return await this.carrosselRepository.update(id, carrossel);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.carrosselRepository.delete(id);
  }
}
