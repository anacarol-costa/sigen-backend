import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { Injectable, UnauthorizedException } from '@nestjs/common';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, senha: string): Promise<any> {
    const user = await this.authService.validateUser(username, senha);
    if (!user) {
      throw new UnauthorizedException('invalid_access_token');
    }
    return user;
  }
}