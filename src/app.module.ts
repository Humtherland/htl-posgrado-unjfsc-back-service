import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsModule } from './persons/persons.module';
import { AuthModule } from './auth/auth.module';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { RoleModule } from './role/role.module';
import { CivilStateModule } from './civil-state/civil-state.module';
import { PersonSpecialityModule } from './person_speciality/person_speciality.module';
import { PublicationsModule } from './publications/publications.module';
import { TrainingModule } from './training/training.module';
import { WorkExperienceModule } from './work_experience/work_experience.module';
import { AcademicInformationModule } from './academic_information/academic_information.module';
import { StudyModalityModule } from './study_modality/study_modality.module';
import { SpecialtyModule } from './specialty/specialty.module';
import { SchoolModule } from './school/school.module';
import { DegreeModule } from './degree/degree.module';
import { RequestApplyModule } from './request_apply/request_apply.module';
import { RequiredFilesModule } from './required_files/required_files.module';
import { PayModule } from './pay/pay.module';

@Module({
  imports: [
    AuthModule,
    BootstrapModule,
    ConfigModule.forRoot(),
    PersonsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: Boolean(process.env.DB_LOAD),
      synchronize: Boolean(process.env.DB_SYNC),
    }),
    RoleModule,
    CivilStateModule,
    PersonSpecialityModule,
    PublicationsModule,
    TrainingModule,
    WorkExperienceModule,
    AcademicInformationModule,
    StudyModalityModule,
    SpecialtyModule,
    SchoolModule,
    DegreeModule,
    RequestApplyModule,
    RequiredFilesModule,
    PayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
