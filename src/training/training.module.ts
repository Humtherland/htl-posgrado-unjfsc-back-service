import { Module } from '@nestjs/common';
import { TrainingService } from './training.service';
import { TrainingController } from './training.controller';

@Module({
  controllers: [TrainingController],
  providers: [TrainingService]
})
export class TrainingModule {}
