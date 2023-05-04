import { Module } from '@nestjs/common';
import { AcademicInformationService } from './academic_information.service';
import { AcademicInformationController } from './academic_information.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcademicInformation } from './entities/academic_information.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [AcademicInformationController],
  providers: [AcademicInformationService],
  imports: [
    TypeOrmModule.forFeature([
      AcademicInformation,
    ]),
    AuthModule
  ],
  exports: [
    AcademicInformationService,
    TypeOrmModule,
  ]
})
export class AcademicInformationModule {}
