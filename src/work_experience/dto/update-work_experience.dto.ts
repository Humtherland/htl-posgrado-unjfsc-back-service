import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkExperienceDto } from './create-work_experience.dto';

export class UpdateWorkExperienceDto extends PartialType(CreateWorkExperienceDto) {}
