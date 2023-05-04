import { Module } from '@nestjs/common';
import { SpecialtyService } from './specialty.service';
import { SpecialtyController } from './specialty.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specialty } from './entities/specialty.entity';
import { AuthModule } from 'src/auth/auth.module';
import { SpecialtyBootstrap } from './bootstrap/specialty.bootstrap';
import { SchoolModule } from 'src/school/school.module';

@Module({
  controllers: [SpecialtyController],
  providers: [
    SpecialtyBootstrap,
    SpecialtyService
  ],
  imports: [
    TypeOrmModule.forFeature([
      Specialty,
    ]),
    AuthModule,
    SchoolModule
  ],
  exports: [
    SpecialtyBootstrap,
    SpecialtyService,
    TypeOrmModule,
  ]
})
export class SpecialtyModule {}
