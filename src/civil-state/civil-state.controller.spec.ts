import { Test, TestingModule } from '@nestjs/testing';
import { CivilStateController } from './civil-state.controller';
import { CivilStateService } from './civil-state.service';

describe('CivilStateController', () => {
  let controller: CivilStateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CivilStateController],
      providers: [CivilStateService],
    }).compile();

    controller = module.get<CivilStateController>(CivilStateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
