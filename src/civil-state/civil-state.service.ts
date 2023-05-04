import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCivilStateDto } from './dto/create-civil-state.dto';
import { UpdateCivilStateDto } from './dto/update-civil-state.dto';
import { CivilState } from './entities/civil-state.entity';

@Injectable()
export class CivilStateService {

  constructor(@InjectRepository(CivilState)  private readonly repository: Repository<CivilState>){}

  create(createCivilStateDto: CreateCivilStateDto) {
    const create = this.repository.create(createCivilStateDto);
    return this.repository.save(create);

  }

  async findAll() {
    return await this.repository.find({select:['id','name']});
  }

  async findOne(id: number) {
    return await this.repository.findOneBy({id});
  }

  async update(id: number, updateCivilStateDto: UpdateCivilStateDto) {
    const update = await this.repository.preload({id, ...updateCivilStateDto});
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
