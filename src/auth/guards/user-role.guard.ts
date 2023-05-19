import { Reflector } from '@nestjs/core';
import { CanActivate, ExecutionContext, Injectable, BadRequestException, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from '../entities/user.entity';
import { META_SCOPES } from '../decorators/role-protected.decorator';

@Injectable()
export class UserRoleGuard implements CanActivate {
  
  constructor(
    private readonly reflector: Reflector
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    
    const validScopes: string[] = this.reflector.get( META_SCOPES , context.getHandler() )

    if ( !validScopes ) return true;
    if ( validScopes.length === 0 ) return true;
    
    const req = context.switchToHttp().getRequest();
    const user = req.user as User;

    if ( !user ) 
      throw new BadRequestException('User not found');
    
    for (const scope of user.scopes ) {
      if ( validScopes.includes( scope ) ) {
        return true;
      }
    }
    
    // throw new ForbiddenException(
    //   `User ${ user.fullName } need a valid scope: [${ validScopes }]`
    // );
  }
}
