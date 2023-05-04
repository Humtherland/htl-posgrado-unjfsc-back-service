import { Injectable } from '@nestjs/common';
import { CreatePersonSpecialityDto } from './dto/create-person_speciality.dto';
import { UpdatePersonSpecialityDto } from './dto/update-person_speciality.dto';

@Injectable()
export class PersonSpecialityService {
  create(createPersonSpecialityDto: CreatePersonSpecialityDto) {
    return 'This action adds a new personSpeciality';
  }

  findAll() {
    return `This action returns all personSpeciality`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personSpeciality`;
  }

  update(id: number, updatePersonSpecialityDto: UpdatePersonSpecialityDto) {
    return `This action updates a #${id} personSpeciality`;
  }

  remove(id: number) {
    return `This action removes a #${id} personSpeciality`;
  }
}
