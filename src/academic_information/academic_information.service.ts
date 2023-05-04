import { Injectable } from '@nestjs/common';
import { CreateAcademicInformationDto } from './dto/create-academic_information.dto';
import { UpdateAcademicInformationDto } from './dto/update-academic_information.dto';

@Injectable()
export class AcademicInformationService {
  create(createAcademicInformationDto: CreateAcademicInformationDto) {
    return 'This action adds a new academicInformation';
  }

  findAll() {
    return `This action returns all academicInformation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} academicInformation`;
  }

  update(id: number, updateAcademicInformationDto: UpdateAcademicInformationDto) {
    return `This action updates a #${id} academicInformation`;
  }

  remove(id: number) {
    return `This action removes a #${id} academicInformation`;
  }
}
