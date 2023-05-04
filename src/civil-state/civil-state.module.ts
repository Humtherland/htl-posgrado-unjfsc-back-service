import { Module } from '@nestjs/common';
import { CivilStateService } from './civil-state.service';
import { CivilStateController } from './civil-state.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CivilState } from './entities/civil-state.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [CivilStateController],
  providers: [CivilStateService],
  imports: [
    TypeOrmModule.forFeature([
      CivilState,
    ]),
    AuthModule
  ],
  exports: [
    CivilStateService,
    TypeOrmModule,
  ]
})
export class CivilStateModule {}
