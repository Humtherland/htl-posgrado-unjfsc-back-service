import { Injectable, Logger } from '@nestjs/common';
import { DegreeService } from 'src/degree/degree.service';
import { Degree } from 'src/degree/entities/degree.entity';
import { CreateSchoolDto } from 'src/school/dto/create-school.dto';
import { School } from '../entities/school.entity';
import { SchoolService } from '../school.service';


@Injectable()
export class SchoolBootstrap {

    private readonly logger: Logger;

    constructor(
        private readonly service: SchoolService,
        private readonly degreeService: DegreeService,
    ) {
        this.logger = new Logger(SchoolBootstrap.name)
    }

    async loadData(): Promise<void> {
        let maestria: Degree = await this.degreeService.findOneByName('Maestria')
        let doctorado: Degree = await this.degreeService.findOneByName('Doctorado')

        const items: CreateSchoolDto[] = [
            {
                name:'Bromatologia y nutrición',
                id_degree: maestria.id
            },
            {
                name:'Ciencias Económicas contables y financieras',
                id_degree: maestria.id
            },
            {
                name:'Ciencias empresariales',
                id_degree: maestria.id
            },
            {
                name:'Ciencias Sociales',
                id_degree: maestria.id
            },
            {
                name:'Derecho y ciencias políricas',
                id_degree: maestria.id
            },
            {
                name:'Ingenieria industrial sistemas e informática',
                id_degree: maestria.id
            },
            {
                name:'Educación',
                id_degree: maestria.id
            },
            {
                name:'Ingenieria pesquera',
                id_degree: maestria.id
            },
            {
                name:'Ingenieria química y metalurgica',
                id_degree: maestria.id
            },
            {
                name:'Medicina humana',
                id_degree: maestria.id
            },
            {
                name:'Bromatologia y Nutrición',
                id_degree: doctorado.id
            },
            {
                name:'Ciencias económicas contables y financieras',
                id_degree: doctorado.id
            },
            {
                name:'Ciencias empresariales',
                id_degree: doctorado.id
            },
            {
                name:'Ciencias',
                id_degree: doctorado.id
            },
            {
                name:'Educación',
                id_degree: doctorado.id
            },
            {
                name:'Derecho y ciencias politicas',
                id_degree: doctorado.id
            },
        ]
        items.forEach( async (items) => {
            if(items.name == null || items.name == '') return null;
            else await this.create(items);
        })
    }

    private async create(dto: CreateSchoolDto) {
        const exist: Boolean = await this.service.exist(dto.name );

        if (exist) {
            this.logger.log(`The user type ${dto.name} already exists.`);
        } else {
            await this.service.create(dto);
            this.logger.log(`The user type ${dto.name} was created succesfully.`);
        }
    }
}