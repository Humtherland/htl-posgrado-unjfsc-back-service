import { Module } from '@nestjs/common';
import { PersonSpecialityService } from './person_speciality.service';
import { PersonSpecialityController } from './person_speciality.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonSpeciality } from './entities/person_speciality.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [PersonSpecialityController],
  providers: [PersonSpecialityService],
  imports: [
    TypeOrmModule.forFeature([
      PersonSpeciality,
    ]),
    AuthModule
  ],
  exports: [
    PersonSpecialityService,
    TypeOrmModule,
  ]

})
export class PersonSpecialityModule {}
