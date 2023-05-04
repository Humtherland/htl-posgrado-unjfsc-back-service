import { Module } from '@nestjs/common';
import { AcademicInformationService } from './academic_information.service';
import { AcademicInformationController } from './academic_information.controller';

@Module({
  controllers: [AcademicInformationController],
  providers: [AcademicInformationService]
})
export class AcademicInformationModule {}
