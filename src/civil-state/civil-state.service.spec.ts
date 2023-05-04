import { Test, TestingModule } from '@nestjs/testing';
import { CivilStateService } from './civil-state.service';

describe('CivilStateService', () => {
  let service: CivilStateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CivilStateService],
    }).compile();

    service = module.get<CivilStateService>(CivilStateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
