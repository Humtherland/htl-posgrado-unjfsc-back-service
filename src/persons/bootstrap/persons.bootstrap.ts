import { Injectable, Logger } from '@nestjs/common';
import { CreatePersonDto } from '../dto/create-person.dto';
import { Person } from '../entities';
import { PersonsService } from '../persons.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PersonBootstrap {

    private readonly logger: Logger;

    constructor( 
        private readonly service: PersonsService,
        ) {
        this.logger = new Logger(PersonBootstrap.name)
    }

    async loadData(): Promise<void> { }

    async loadAdminData(): Promise<string> {

        const dni = "10000002";
        const exist: Boolean = await this.service.existByDni(dni);

        if (exist) {
            this.logger.log('[Admin Person] The admin person registry already exists.');
        } else {
            this.logger.log('[Admin Person] The admin person registry does not exist. Creating...');

            const dto: CreatePersonDto = new CreatePersonDto();

            dto.dni = dni;
            dto.firstName = "Admin";
            dto.lastName = "User";
            dto.birthday = new Date();
            dto.gender = "nobinario";
            dto.civilState = "soltero";
            dto.zipCode = "15169";
            dto.address = "Av Internet 127.0.0.1";
            dto.email = "admin@example.com";

            const person = await this.service.create(dto);

            this.logger.log('[Admin Person] The admin person registry was created succesfully.');
            return person.id;
        }
    }

}