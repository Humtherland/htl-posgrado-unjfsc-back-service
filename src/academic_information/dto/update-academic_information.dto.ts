import { PartialType } from '@nestjs/mapped-types';
import { CreateAcademicInformationDto } from './create-academic_information.dto';

export class UpdateAcademicInformationDto extends PartialType(CreateAcademicInformationDto) {}
