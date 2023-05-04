import { Test, TestingModule } from '@nestjs/testing';
import { RequiredFilesService } from './required_files.service';

describe('RequiredFilesService', () => {
  let service: RequiredFilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequiredFilesService],
    }).compile();

    service = module.get<RequiredFilesService>(RequiredFilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
