import { Module } from '@nestjs/common';
import { TrainingService } from './training.service';
import { TrainingController } from './training.controller';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Training } from './entities/training.entity';

@Module({
  controllers: [TrainingController],
  providers: [TrainingService],
  imports: [
    TypeOrmModule.forFeature([
      Training,
    ]),
    AuthModule
  ],
  exports: [
    TrainingService,
    TypeOrmModule,
  ]
})
export class TrainingModule {}
