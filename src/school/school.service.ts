import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School } from './entities/school.entity';

@Injectable()
export class SchoolService {

  constructor(@InjectRepository(School)  private readonly repository: Repository<School>){}

  create(createSchoolDto: CreateSchoolDto) {
    const create = this.repository.create(createSchoolDto);
    return this.repository.save(create);
  }

  async findAll() {
    return await this.repository.find({select:['id','name']});
  }

  async findOne(id: number) {
    return await this.repository.findOneBy({id});
  }

  async update(id: number, updateSchoolDto: UpdateSchoolDto) {
    const update = await this.repository.preload({id, ...updateSchoolDto});
    if (!update)throw new NotFoundException('Resource not found')
    return this.repository.save(update);
  }

  async remove(id: number) {
    const remove = await this.repository.findOneBy({id});
    if (!remove)throw new NotFoundException('Resource not found')
    return this.repository.remove(remove)
  }

  async exist(name: string): Promise<Boolean> {
    const o = await this.repository.findOneBy({ name });
    return o !== null;
  }
}
