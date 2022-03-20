import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { AuthService } from './auth.service';
// import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { AdministradorModule } from '../administrador/administrador.module';
import { RolesGuard } from './autorizacao/roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    UsuarioModule,
    PassportModule,
    AdministradorModule,
    JwtModule.register({
      // secret: jwtConstants.secret,
      secretOrPrivateKey: 'teste',
      secret: 'teste',
      signOptions: { expiresIn: '12h' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [AuthService],
})
// eslint-disable-next-line prettier/prettier
export class AuthModule { }
