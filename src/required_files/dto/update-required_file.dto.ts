import { PartialType } from '@nestjs/mapped-types';
import { CreateRequiredFileDto } from './create-required_file.dto';

export class UpdateRequiredFileDto extends PartialType(CreateRequiredFileDto) {}
