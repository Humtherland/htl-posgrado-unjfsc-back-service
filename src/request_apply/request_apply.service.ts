import { Injectable } from '@nestjs/common';
import { CreateRequestApplyDto } from './dto/create-request_apply.dto';
import { UpdateRequestApplyDto } from './dto/update-request_apply.dto';

@Injectable()
export class RequestApplyService {
  create(createRequestApplyDto: CreateRequestApplyDto) {
    return 'This action adds a new requestApply';
  }

  findAll() {
    return `This action returns all requestApply`;
  }

  findOne(id: number) {
    return `This action returns a #${id} requestApply`;
  }

  update(id: number, updateRequestApplyDto: UpdateRequestApplyDto) {
    return `This action updates a #${id} requestApply`;
  }

  remove(id: number) {
    return `This action removes a #${id} requestApply`;
  }
}
