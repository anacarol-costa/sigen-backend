import { Test, TestingModule } from '@nestjs/testing';
import { CarrosselController } from './carrossel.controller';
import { CarrosselService } from './carrossel.service';

describe('CarrosselController', () => {
  let controller: CarrosselController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarrosselController],
      providers: [CarrosselService],
    }).compile();

    controller = module.get<CarrosselController>(CarrosselController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
