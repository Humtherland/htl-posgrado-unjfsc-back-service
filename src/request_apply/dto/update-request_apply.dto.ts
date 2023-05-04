import { PartialType } from '@nestjs/mapped-types';
import { CreateRequestApplyDto } from './create-request_apply.dto';

export class UpdateRequestApplyDto extends PartialType(CreateRequestApplyDto) {}
