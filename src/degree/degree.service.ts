import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDegreeDto } from './dto/create-degree.dto';
import { UpdateDegreeDto } from './dto/update-degree.dto';
import { Degree } from './entities/degree.entity';

@Injectable()
export class DegreeService {

  constructor(@InjectRepository(Degree)  private readonly repository: Repository<Degree>){}

  create(createDegreeDto: CreateDegreeDto) {
    const create = this.repository.create(createDegreeDto);
    return this.repository.save(create);
  }

  async findAll() {
    return await this.repository.find({select:['id','name']});
  }

  async findOne(id: number) {
    return await this.repository.findOneBy({id});
  }

  async update(id: number, updateDegreeDto: UpdateDegreeDto) {
    const update = await this.repository.preload({id, ...updateDegreeDto});
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
