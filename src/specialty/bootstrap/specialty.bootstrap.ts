import { Injectable, Logger } from '@nestjs/common';
import { DegreeService } from 'src/degree/degree.service';
import { Degree } from 'src/degree/entities/degree.entity';
import { CreateSchoolDto } from 'src/school/dto/create-school.dto';
import { School } from 'src/school/entities/school.entity';
import { SchoolService } from 'src/school/school.service';
import { CreateSpecialtyDto } from '../dto/create-specialty.dto';
import { SpecialtyService } from '../specialty.service';


@Injectable()
export class SpecialtyBootstrap {

    private readonly logger: Logger;

    constructor(
        private readonly service: SpecialtyService,
        private readonly schoolService: SchoolService,
    ) {
        this.logger = new Logger(SpecialtyBootstrap.name)
    }

    async loadData(): Promise<void> {
        let school1: School = await this.schoolService.findOneByName('Bromatologia y nutrición')
        let school2: School = await this.schoolService.findOneByName('Ciencias Económicas contables y financieras')
        let school3: School = await this.schoolService.findOneByName('Ciencias empresariales')
        let school4: School = await this.schoolService.findOneByName('Ciencias Sociales')
        let school5: School = await this.schoolService.findOneByName('Derecho y ciencias políricas')
        let school6: School = await this.schoolService.findOneByName('Ingenieria industrial sistemas e informática')
        let school7: School = await this.schoolService.findOneByName('Educación')
        let school8: School = await this.schoolService.findOneByName('Ingenieria pesquera')
        let school9: School = await this.schoolService.findOneByName('Ingenieria química y metalurgica')
        let school10: School = await this.schoolService.findOneByName('Medicina humana')
        let school11: School = await this.schoolService.findOneByName('Bromatologia y Nutrición')
        let school12: School = await this.schoolService.findOneByName('Ciencias económicas contables y financieras')
        let school13: School = await this.schoolService.findOneByName('Ciencias empresariales')
        let school14: School = await this.schoolService.findOneByName('Ciencias')
        let school15: School = await this.schoolService.findOneByName('Educación')
        let school16: School = await this.schoolService.findOneByName('Derecho y ciencias politicas')

        const items: CreateSpecialtyDto[] = [
            {
                name:'Maestía en Ciencias de los Alimentos',
                id_school: school1.id
            },
            {
                name:'Maestría en Contabilidad con Mención en Auditoría',
                id_school: school2.id
            },
            {
                name:'Maestría Contabilidad con Mención en Tributación',
                id_school: school2.id
            },
            {
                name:'Maestría en Contabilidad con Mención en Gestión Empresarial',
                id_school: school2.id
            },
            {
                name:'Maestría en Economía y Finanzas',
                id_school: school2.id
            },
            {
                name:'Maestría en Administración',
                id_school: school3.id
            },
            {
                name:'Maestría en Administración Estratégica',
                id_school: school3.id
            },
            {
                name:'Maestría Finanzas y Negocios Internacionales',
                id_school: school3.id
            },
            {
                name:'Maestría en Gestión Pública',
                id_school: school3.id
            },
            {
                name:'Maestría en Gestión Empresarial',
                id_school: school3.id
            },
            {
                name:'Maestría en Gestión de Servicios de Salud',
                id_school: school3.id
            },
            {
                name:'Maestría en Proyectos y Desarrollo Empresarial',
                id_school: school3.id
            },
            {
                name:'Maestría en Trabajo Social con Mención en Familia',
                id_school: school4.id
            },
            {
                name:'Maestría en Trabajo Social con Mención en Gestión de Rec. Humanos',
                id_school: school4.id
            },
            {
                name:'Maestría en Sociología con mención en Gerencia en Relaciones Comunitarias',
                id_school: school4.id
            },
            {
                name:'Maestría en Sociología con mención en Gerencia Social',
                id_school: school4.id
            },
            {
                name:'Maestría en Derecho con Mención en Derecho Civil y Comercial',
                id_school: school5.id
            },
            {
                name:'Maestría en Derecho con Mención en Ciencias Penales y Criminológicas',
                id_school: school5.id
            },
            {
                name:'Maestría en Derecho Constitucional y Administrativo',
                id_school: school5.id
            },
            {
                name:'Maestría en Derecho de Familia y Políticas Públicas de Niño y del Adolescente',
                id_school: school5.id
            },
            {
                name:'Maestría en ingeniería de sistemas',
                id_school: school6.id
            },
            {
                name:'Maestría en ingeniería industrial',
                id_school: school6.id
            },
            {
                name:'Maestría en Docencia Superior e Investigación Universitaria',
                id_school: school7.id
            },
            {
                name:'Maestría en Ciencias de la Gestión Educativa con Mención en Estimulación Temprano',
                id_school: school7.id
            },
            {
                name:'Maestría en Gerencia de la Educación',
                id_school: school7.id
            },
            {
                name:'Maestría en Cs. de la Gestión Educativa con Mención en Pedagogía',
                id_school: school7.id
            },
            {
                name:'Maestría en Cs. de la Gestión Educativa con Mención en Educación Ambiental',
                id_school: school7.id
            },
            {
                name:'Maestría en Cs. de la Gestión Educativa con Mención en Motricidad Humanos',
                id_school: school7.id
            },
            {
                name:'Maestría en Gerencia en SErvicios Pesqueros',
                id_school: school8.id
            },
            {
                name:'Maestría en Marketing Agroalimentario',
                id_school: school8.id
            },
            {
                name:'Maestría en Ecología y Gestión Ambiental',
                id_school: school9.id
            },
            {
                name:'Maestría en Gestión de Enseñanza de la Química Superior',
                id_school: school9.id
            },
            {
                name:'Maestría en Salud Pública',
                id_school: school10.id
            },
            {
                name:'Doctorado en Salud Pública',
                id_school: school11.id
            },
            {
                name:'Doctorado en Ciencia y Tecnología de los Alimentos',
                id_school: school11.id
            },
            {
                name:'Doctorado en Contabilidad',
                id_school: school12.id
            },
            {
                name:'Dcotorado en Administración',
                id_school: school13.id
            },
            {
                name:'Doctorado en Ciencias Ambientales',
                id_school: school14.id
            },
            {
                name:'Doctorado en Ciencias de la Educación',
                id_school: school15.id
            },
            {
                name:'Doctorado en Derecho y Ciencias Políticas',
                id_school: school16.id
            },
        ]
        items.forEach( async (items) => {
            if(items.name == null || items.name == '') return null;
            else await this.create(items);
        })
    }

    private async create(dto: CreateSpecialtyDto) {
        const exist: Boolean = await this.service.exist(dto.name );

        if (exist) {
            this.logger.log(`The user type ${dto.name} already exists.`);
        } else {
            await this.service.create(dto);
            this.logger.log(`The user type ${dto.name} was created succesfully.`);
        }
    }
}