import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserRoleGuard } from '../guards/user-role.guard';
import { ValidScopes } from '../interfaces';
import { RoleProtected } from './role-protected.decorator';

export function Auth(...scopes: ValidScopes[]) {

  return applyDecorators(
    RoleProtected(...scopes),
    UseGuards( AuthGuard(), UserRoleGuard ),
  );

}