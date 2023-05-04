import { Injectable } from '@nestjs/common';
import { CreateCivilStateDto } from './dto/create-civil-state.dto';
import { UpdateCivilStateDto } from './dto/update-civil-state.dto';

@Injectable()
export class CivilStateService {
  create(createCivilStateDto: CreateCivilStateDto) {
    return 'This action adds a new civilState';
  }

  findAll() {
    return `This action returns all civilState`;
  }

  findOne(id: number) {
    return `This action returns a #${id} civilState`;
  }

  update(id: number, updateCivilStateDto: UpdateCivilStateDto) {
    return `This action updates a #${id} civilState`;
  }

  remove(id: number) {
    return `This action removes a #${id} civilState`;
  }
}
