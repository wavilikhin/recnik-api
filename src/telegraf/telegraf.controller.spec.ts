import { Test, TestingModule } from '@nestjs/testing';
import { TelegrafController } from './telegraf.controller';

describe('TelegrafController', () => {
  let controller: TelegrafController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TelegrafController],
    }).compile();

    controller = module.get<TelegrafController>(TelegrafController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
