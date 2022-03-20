import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './Role';
import { ROLES_KEY } from './roles.decorator';
import { JwtService } from '@nestjs/jwt';
import jwtDecode from 'jwt-decode';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService) {}

  private readonly BEARER = 'Bearer';

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    const bearerToken = this.extrairBearerTokenDeHeader(context);

    return requiredRoles.some((role) => bearerToken.permissao.includes(role));
  }

  extrairBearerTokenDeHeader(context: ExecutionContext): any {
    const bearerToken = context
      .switchToHttp()
      .getRequest()
      .rawHeaders.find((header) => header.includes(this.BEARER));

    return this.decodeBearerToken(bearerToken);
  }

  decodeBearerToken(bearerToken: string): string {
    return jwtDecode(bearerToken.replace(this.BEARER, ''));
  }
}
