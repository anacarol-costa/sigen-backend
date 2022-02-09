import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { EnderecoService } from './endereco.service';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, EnderecoService]
})
export class UsuarioModule {}
