import { Test, TestingModule } from '@nestjs/testing';
import { PersonSpecialityController } from './person_speciality.controller';
import { PersonSpecialityService } from './person_speciality.service';

describe('PersonSpecialityController', () => {
  let controller: PersonSpecialityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonSpecialityController],
      providers: [PersonSpecialityService],
    }).compile();

    controller = module.get<PersonSpecialityController>(PersonSpecialityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
