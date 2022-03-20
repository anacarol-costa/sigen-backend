import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { AdministradorDto } from './dto/administrador.dto';
import { Administrador } from './entities/administrador.entity';

@Injectable()
export class AdministradorService {
  constructor(
    @InjectRepository(Administrador)
    private readonly administradorRepository: Repository<Administrador>,
  ) {}

  async create(
    createAdministradorDto: AdministradorDto,
  ): Promise<Administrador> {
    const administrador = AdministradorDto.fromEntity(createAdministradorDto);

    return await this.administradorRepository.save(administrador);
  }

  async findAll(): Promise<Administrador[]> {
    return await this.administradorRepository.find();
  }

  async findOne(id: number): Promise<Administrador> {
    return await this.administradorRepository.findOne(id);
  }

  async update(
    id: number,
    updateAdministradorDto: AdministradorDto,
  ): Promise<UpdateResult> {
    const administrador = AdministradorDto.fromEntity(updateAdministradorDto);

    return await this.administradorRepository.update(id, administrador);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.administradorRepository.delete(id);
  }

  async findByEmail(email: string): Promise<Administrador> {
    return this.administradorRepository
      .createQueryBuilder('adm')
      .where('adm.email = :email', { email })
      .getOne();
  }
}
