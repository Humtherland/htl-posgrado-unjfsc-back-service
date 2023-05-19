import { Module } from '@nestjs/common';
import { ApplicantService } from './applicant.service';
import { ApplicantController } from './applicant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Applicant } from './entities/applicant.entity';

@Module({
  controllers: [ApplicantController],
  providers: [ApplicantService],
  imports: [
    TypeOrmModule.forFeature([
      Applicant,
    ]),
    AuthModule
  ],
  exports: [
    ApplicantService,
    TypeOrmModule,
  ]
})
export class ApplicantModule {}
