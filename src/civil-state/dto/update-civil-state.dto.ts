import { PartialType } from '@nestjs/mapped-types';
import { CreateCivilStateDto } from './create-civil-state.dto';

export class UpdateCivilStateDto extends PartialType(CreateCivilStateDto) {}
