import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {

  constructor(@InjectRepository(Role)  private readonly repository: Repository<Role>){}
  
  create(createRoleDto: CreateRoleDto) {
    const create = this.repository.create(createRoleDto);
    return this.repository.save(create);
  }

  async findAll() {
    return await this.repository.find({select:['id','name']});
  }

  async findOne(id: number) {
    return await this.repository.findOneBy({id});
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const update = await this.repository.preload({id, ...updateRoleDto});
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
