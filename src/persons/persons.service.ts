import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonsService {

  constructor(@InjectRepository(Person)  private readonly repository: Repository<Person>){}

  create(createPersonDto: CreatePersonDto) {
    const create = this.repository.create(createPersonDto);
    return this.repository.save(create);
  }

  async findAll() {
    return await this.repository.find({select:['id','name']});
  }

  async findOne(id: string) {
    return await this.repository.findOneBy({id});
  }

  async update(id: string, updatePersonDto: UpdatePersonDto) {
    const update = await this.repository.preload({id, ...updatePersonDto});
    if (!update)throw new NotFoundException('Resource not found')
    return this.repository.save(update);
  }

  async remove(id: string) {
    const remove = await this.repository.findOneBy({id});
    if (!remove)throw new NotFoundException('Resource not found')
    return this.repository.remove(remove)
  }
}
