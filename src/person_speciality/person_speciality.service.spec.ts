import { Test, TestingModule } from '@nestjs/testing';
import { PersonSpecialityService } from './person_speciality.service';

describe('PersonSpecialityService', () => {
  let service: PersonSpecialityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonSpecialityService],
    }).compile();

    service = module.get<PersonSpecialityService>(PersonSpecialityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
