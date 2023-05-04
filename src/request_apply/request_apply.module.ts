import { Module } from '@nestjs/common';
import { RequestApplyService } from './request_apply.service';
import { RequestApplyController } from './request_apply.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { RequestApply } from './entities/request_apply.entity';

@Module({
  controllers: [RequestApplyController],
  providers: [RequestApplyService],
  imports: [
    TypeOrmModule.forFeature([
      RequestApply,
    ]),
    AuthModule
  ],
  exports: [
    RequestApplyService,
    TypeOrmModule,
  ]
})
export class RequestApplyModule {}
