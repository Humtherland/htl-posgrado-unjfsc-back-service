import { Module } from '@nestjs/common';
import { DegreeService } from './degree.service';
import { DegreeController } from './degree.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Degree } from './entities/degree.entity';
import { DegreeBootstrap } from './bootstrap/degree.bootstrap';

@Module({
  controllers: [DegreeController],
  providers: [
    DegreeService,
    DegreeBootstrap
  ],
  imports: [
    TypeOrmModule.forFeature([
      Degree,
    ]),
    AuthModule
  ],
  exports: [
    DegreeBootstrap,
    DegreeService,
    TypeOrmModule,
  ]
})
export class DegreeModule {}
