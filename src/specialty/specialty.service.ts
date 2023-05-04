import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';
import { Specialty } from './entities/specialty.entity';

@Injectable()
export class SpecialtyService {

  constructor(@InjectRepository(Specialty)  private readonly repository: Repository<Specialty>){}

  create(createSpecialtyDto: CreateSpecialtyDto) {
    const create = this.repository.create(createSpecialtyDto);
    return this.repository.save(create);
  }

  async findAll() {
    return await this.repository.find({select:['id','name']});
  }

  async findOne(id: number) {
    return await this.repository.findOneBy({id});
  }

  async update(id: number, updateSpecialtyDto: UpdateSpecialtyDto) {
    const update = await this.repository.preload({id, ...updateSpecialtyDto});
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
