import { Test, TestingModule } from '@nestjs/testing';
import { StudyModalityService } from './study_modality.service';

describe('StudyModalityService', () => {
  let service: StudyModalityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudyModalityService],
    }).compile();

    service = module.get<StudyModalityService>(StudyModalityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
