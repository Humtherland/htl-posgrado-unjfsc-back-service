import { Module } from '@nestjs/common';
import { DegreeService } from './degree.service';
import { DegreeController } from './degree.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Degree } from './entities/degree.entity';

@Module({
  controllers: [DegreeController],
  providers: [DegreeService],
  imports: [
    TypeOrmModule.forFeature([
      Degree,
    ]),
    AuthModule
  ],
  exports: [
    DegreeService,
    TypeOrmModule,
  ]
})
export class DegreeModule {}
