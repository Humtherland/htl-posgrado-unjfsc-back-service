import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { AuthService } from '../auth.service';
import { ConfigService } from '@nestjs/config';
import { ValidScopes } from '../interfaces';

@Injectable()
export class AuthBootstrap {

    private readonly logger: Logger;

    constructor( 
        private readonly service: AuthService,
        private readonly config: ConfigService
        ) {
        this.logger = new Logger(AuthBootstrap.name)
    }

    async loadData(): Promise<void> {

        const username = "admin";
        const exist: Boolean = await this.service.existByUsername(username);

        if (exist) {
            this.logger.log('[Admin Account] The admin user already exists.');
        } else {
            this.logger.log('[Admin Account] The admin does not exist. Creating...');

            const dto: CreateUserDto = new CreateUserDto();

            dto.fullName = "Admin";
            dto.username = username;
            dto.password = "Adm1n3105";
            dto.scopes = [
                ValidScopes.PERSONS_SUDO,
                ValidScopes.AUTH_SUDO,
            ];
            
            await this.service.create(dto);

            this.logger.log('[Admin Account] The admin was created succesfully.');
        }
    }

}