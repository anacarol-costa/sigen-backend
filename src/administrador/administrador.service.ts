import { Injectable } from '@nestjs/common';
import { AdministradorDto } from './dto/administrador.dto';

@Injectable()
export class AdministradorService {
  create(createAdministradorDto: AdministradorDto) {
    return 'This action adds a new administrador';
  }

  findAll() {
    return `This action returns all administrador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} administrador`;
  }

  update(id: number, updateAdministradorDto: AdministradorDto) {
    return `This action updates a #${id} administrador`;
  }

  remove(id: number) {
    return `This action removes a #${id} administrador`;
  }
}
