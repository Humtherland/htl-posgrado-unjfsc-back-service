import { Test, TestingModule } from '@nestjs/testing';
import { AcademicInformationController } from './academic_information.controller';
import { AcademicInformationService } from './academic_information.service';

describe('AcademicInformationController', () => {
  let controller: AcademicInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcademicInformationController],
      providers: [AcademicInformationService],
    }).compile();

    controller = module.get<AcademicInformationController>(AcademicInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
