import { SetMetadata } from '@nestjs/common';
import { ValidScopes } from '../interfaces';

export const META_SCOPES = 'scopes';


export const RoleProtected = (...args: ValidScopes[] ) => {


    return SetMetadata( META_SCOPES , args);
}
