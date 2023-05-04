import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateSchoolDto } from 'src/school/dto/create-school.dto';
import { CreateSpecialtyDto } from 'src/specialty/dto/create-specialty.dto';
import { DegreeService } from '../degree.service';
import { CreateDegreeDto } from '../dto/create-degree.dto';


@Injectable()
export class DegreeBootstrap {

    private readonly logger: Logger;

    constructor(
        private readonly service: DegreeService,
    ) {
        this.logger = new Logger(DegreeBootstrap.name)
    }

    async loadData(): Promise<void> {
        const items: string[] = [
            'Maestria',
            'Doctorado',
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
            const dto: CreateDegreeDto = { name };
            await this.service.create(dto);
            this.logger.log(`The user type ${name} was created succesfully.`);
        }
    }
}