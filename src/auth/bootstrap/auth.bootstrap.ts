import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { AuthService } from '../auth.service';
import { ConfigService } from '@nestjs/config';
import { ValidScopes } from '../interfaces';
import { RoleService } from 'src/role/role.service';

@Injectable()
export class AuthBootstrap {

    private readonly logger: Logger;

    constructor(
        private readonly service: AuthService,
        // private readonly roleservice: RoleService,
        private readonly config: ConfigService
        ) {
        this.logger = new Logger(AuthBootstrap.name)
    }

    async loadData(): Promise<void> {

        const username = "root";
        const exist: Boolean = await this.service.existByUsername(username);

        if (exist) {
            this.logger.log('[Admin Account] The admin user already exists.');
        } else {
            this.logger.log('[Admin Account] The admin does not exist. Creating...');

            let dto: CreateUserDto = {
                username: username,
                password: "123456",
                id_person: {
                    dni: "76934958",
                    name: "julio",
                    first_name: "porlles",
                    last_name: "pardo",
                    birthday: new Date(),
                    gender: "masculino",
                    cell_phone_number: "970578887",
                    email: "juilo.porlles.pardo@gmail.com",
                    department: "Lima",
                    province: "Lima",
                    district: "Huacho",
                    address: "Av San Martin",
                    id_civil_status: 1,
                    id_role: 3,
                },
                scopes:[
                    ValidScopes.PERSONS_SUDO,
                    ValidScopes.AUTH_SUDO,
                ]
            }
            await this.service.create(dto);
            this.logger.log('[Admin Account] The admin was created succesfully.');
        }
    }

}