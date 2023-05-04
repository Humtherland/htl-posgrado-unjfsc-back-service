import { Module } from '@nestjs/common';
import { CivilStateService } from './civil-state.service';
import { CivilStateController } from './civil-state.controller';

@Module({
  controllers: [CivilStateController],
  providers: [CivilStateService]
})
export class CivilStateModule {}
