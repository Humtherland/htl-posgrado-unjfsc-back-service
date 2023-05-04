import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonSpecialityDto } from './create-person_speciality.dto';

export class UpdatePersonSpecialityDto extends PartialType(CreatePersonSpecialityDto) {}
