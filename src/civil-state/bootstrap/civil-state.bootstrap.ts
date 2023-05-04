import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateSchoolDto } from 'src/school/dto/create-school.dto';
import { CreateSpecialtyDto } from 'src/specialty/dto/create-specialty.dto';
import { CivilStateService } from '../civil-state.service';
import { CreateCivilStateDto } from '../dto/create-civil-state.dto';

@Injectable()
export class CivilStateBootstrap {

    private readonly logger: Logger;

    constructor(
        private readonly service: CivilStateService,
    ) {
        this.logger = new Logger(CivilStateBootstrap.name)
    }

    async loadData(): Promise<void> {
        const items: string[] = [
            'Soltero',
            'Casado',
            'Divorciado',
            'Viudo',
        ]
        items.forEach( async (items) => {
            if(items == null || items == '') return null;
            else await this.create(items);
        })
    }

    private async create(name: string) {
        const exist: Boolean = await this.service.exist(name);

        if (exist) {
            this.logger.log(`The user type ${name} already exists.`);
        } else {
            const dto: CreateCivilStateDto = { name };
            await this.service.create(dto);

            this.logger.log(`The user type ${name} was created succesfully.`);
        }
    }


}