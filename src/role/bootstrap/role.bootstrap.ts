import { Injectable, Logger } from '@nestjs/common';
import { CreateRoleDto } from '../dto/create-role.dto';
import { RoleService } from '../role.service';

@Injectable()
export class RoleBootstrap {
    private readonly logger: Logger;
    constructor(
        private readonly service: RoleService,
    ) {
        this.logger = new Logger(RoleBootstrap.name)
    }

    async loadData(): Promise<void> {
        const items: CreateRoleDto[] = [
            {
                name:'Admin',
            },
            {
                name:'Docente',
            },
            {
                name:'Apoyo',
            },
            {
                name:'Postulante',
            }
        ]
        items.forEach( async (items) => {
            if(items.name == null || items.name == '') return null;
            else await this.create(items);
        })
    }

    private async create(dto: CreateRoleDto) {
        const exist: Boolean = await this.service.exist(dto.name );

        if (exist) {
            this.logger.log(`The user type ${dto.name} already exists.`);
        } else {
            await this.service.create(dto);
            this.logger.log(`The user type ${dto.name} was created succesfully.`);
        }
    }
}