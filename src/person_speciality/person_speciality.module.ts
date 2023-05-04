import { Module } from '@nestjs/common';
import { PersonSpecialityService } from './person_speciality.service';
import { PersonSpecialityController } from './person_speciality.controller';

@Module({
  controllers: [PersonSpecialityController],
  providers: [PersonSpecialityService]
})
export class PersonSpecialityModule {}
