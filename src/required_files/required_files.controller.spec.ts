import { Test, TestingModule } from '@nestjs/testing';
import { RequiredFilesController } from './required_files.controller';
import { RequiredFilesService } from './required_files.service';

describe('RequiredFilesController', () => {
  let controller: RequiredFilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequiredFilesController],
      providers: [RequiredFilesService],
    }).compile();

    controller = module.get<RequiredFilesController>(RequiredFilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
