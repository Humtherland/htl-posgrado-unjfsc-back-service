import { Test, TestingModule } from '@nestjs/testing';
import { AcademicInformationService } from './academic_information.service';

describe('AcademicInformationService', () => {
  let service: AcademicInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcademicInformationService],
    }).compile();

    service = module.get<AcademicInformationService>(AcademicInformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
