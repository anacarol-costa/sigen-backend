import { AdministradorService } from './../administrador/administrador.service';
import { Carrossel } from './entities/carrossel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CarrosselService } from './carrossel.service';
import { CarrosselController } from './carrossel.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Carrossel])],
  controllers: [CarrosselController],
  providers: [CarrosselService],
  exports: [CarrosselService],
})
export class CarrosselModule { }
