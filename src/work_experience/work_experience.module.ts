import { Module } from '@nestjs/common';
import { WorkExperienceService } from './work_experience.service';
import { WorkExperienceController } from './work_experience.controller';

@Module({
  controllers: [WorkExperienceController],
  providers: [WorkExperienceService]
})
export class WorkExperienceModule {}
