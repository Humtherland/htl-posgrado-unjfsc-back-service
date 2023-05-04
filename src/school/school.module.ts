import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { School } from './entities/school.entity';
import { AuthModule } from 'src/auth/auth.module';
import { SchoolBootstrap } from './bootstrap/school.bootstrap';
import { DegreeModule } from 'src/degree/degree.module';

@Module({
  controllers: [SchoolController],
  providers: [
    SchoolService,
    SchoolBootstrap
  ],
  imports: [
    TypeOrmModule.forFeature([
      School,
    ]),
    AuthModule,
    DegreeModule
  ],
  exports: [
    SchoolBootstrap,
    SchoolService,
    TypeOrmModule,
  ]
})
export class SchoolModule {}
