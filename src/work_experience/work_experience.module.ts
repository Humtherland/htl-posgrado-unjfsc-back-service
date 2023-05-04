import { Module } from '@nestjs/common';
import { WorkExperienceService } from './work_experience.service';
import { WorkExperienceController } from './work_experience.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkExperience } from './entities/work_experience.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [WorkExperienceController],
  providers: [WorkExperienceService],
  imports: [
    TypeOrmModule.forFeature([
      WorkExperience,
    ]),
    AuthModule
  ],
  exports: [
    WorkExperienceService,
    TypeOrmModule,
  ]

})
export class WorkExperienceModule {}
