import { Test, TestingModule } from '@nestjs/testing';
import { RequestApplyController } from './request_apply.controller';
import { RequestApplyService } from './request_apply.service';

describe('RequestApplyController', () => {
  let controller: RequestApplyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestApplyController],
      providers: [RequestApplyService],
    }).compile();

    controller = module.get<RequestApplyController>(RequestApplyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
