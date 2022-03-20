import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
// import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, //jwt expirado = 401 unauthorized
      secretOrKey: 'teste',
      // secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return { email: payload.email, userId: payload.sub };
  }
}
