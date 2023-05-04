import { Module } from '@nestjs/common';
import { StudyModalityService } from './study_modality.service';
import { StudyModalityController } from './study_modality.controller';

@Module({
  controllers: [StudyModalityController],
  providers: [StudyModalityService]
})
export class StudyModalityModule {}
