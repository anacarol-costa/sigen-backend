import { SetMetadata } from '@nestjs/common';
import { Role } from './Role';

export const ROLES_KEY = 'permissao';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
