import { Injectable } from '@nestjs/common';
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
//import { UnauthorizedException } from '@nestjs/common';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, senha: string): Promise<any> {
    const user = await this.authService.validateUser(username, senha);
    if (!user) {
      //throw new UnauthorizedException();
    }
    return user;
  }
}