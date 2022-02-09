import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { EnderecoService } from './endereco.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Endereco } from './entities/endereco.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Endereco])],
  controllers: [UsuarioController],
  providers: [UsuarioService, EnderecoService],
  exports: [UsuarioService, EnderecoService]
})
export class UsuarioModule {}
