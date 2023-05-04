import { Module } from '@nestjs/common';
import { SpecialtyService } from './specialty.service';
import { SpecialtyController } from './specialty.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specialty } from './entities/specialty.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [SpecialtyController],
  providers: [SpecialtyService],
  imports: [
    TypeOrmModule.forFeature([
      Specialty,
    ]),
    AuthModule
  ],
  exports: [
    SpecialtyService,
    TypeOrmModule,
  ]
})
export class SpecialtyModule {}
