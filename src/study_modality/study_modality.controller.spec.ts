import { Test, TestingModule } from '@nestjs/testing';
import { StudyModalityController } from './study_modality.controller';
import { StudyModalityService } from './study_modality.service';

describe('StudyModalityController', () => {
  let controller: StudyModalityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudyModalityController],
      providers: [StudyModalityService],
    }).compile();

    controller = module.get<StudyModalityController>(StudyModalityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
