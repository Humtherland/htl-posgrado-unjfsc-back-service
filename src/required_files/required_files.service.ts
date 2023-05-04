import { Injectable } from '@nestjs/common';
import { CreateRequiredFileDto } from './dto/create-required_file.dto';
import { UpdateRequiredFileDto } from './dto/update-required_file.dto';

@Injectable()
export class RequiredFilesService {
  create(createRequiredFileDto: CreateRequiredFileDto) {
    return 'This action adds a new requiredFile';
  }

  findAll() {
    return `This action returns all requiredFiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} requiredFile`;
  }

  update(id: number, updateRequiredFileDto: UpdateRequiredFileDto) {
    return `This action updates a #${id} requiredFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} requiredFile`;
  }
}
