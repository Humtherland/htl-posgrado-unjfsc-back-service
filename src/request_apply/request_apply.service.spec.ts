import { Test, TestingModule } from '@nestjs/testing';
import { RequestApplyService } from './request_apply.service';

describe('RequestApplyService', () => {
  let service: RequestApplyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestApplyService],
    }).compile();

    service = module.get<RequestApplyService>(RequestApplyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
