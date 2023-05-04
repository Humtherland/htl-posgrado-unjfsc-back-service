import { PartialType } from '@nestjs/mapped-types';
import { CreateStudyModalityDto } from './create-study_modality.dto';

export class UpdateStudyModalityDto extends PartialType(CreateStudyModalityDto) {}
