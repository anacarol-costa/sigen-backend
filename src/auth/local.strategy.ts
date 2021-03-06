import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }
  async validar(email: string, senha: string): Promise<any> {
    const user = await this.authService.obterUsuarioPor(email, senha);
    if (!user) {
      throw new UnauthorizedException('invalid_access_token');
    }
    return user;
  }
}
