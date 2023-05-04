import { Module } from '@nestjs/common';
import { RequestApplyService } from './request_apply.service';
import { RequestApplyController } from './request_apply.controller';

@Module({
  controllers: [RequestApplyController],
  providers: [RequestApplyService]
})
export class RequestApplyModule {}
