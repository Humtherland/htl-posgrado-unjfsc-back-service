import { Injectable } from '@nestjs/common';
import { CreateStudyModalityDto } from './dto/create-study_modality.dto';
import { UpdateStudyModalityDto } from './dto/update-study_modality.dto';

@Injectable()
export class StudyModalityService {
  create(createStudyModalityDto: CreateStudyModalityDto) {
    return 'This action adds a new studyModality';
  }

  findAll() {
    return `This action returns all studyModality`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studyModality`;
  }

  update(id: number, updateStudyModalityDto: UpdateStudyModalityDto) {
    return `This action updates a #${id} studyModality`;
  }

  remove(id: number) {
    return `This action removes a #${id} studyModality`;
  }
}
