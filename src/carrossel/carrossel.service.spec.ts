import { Test, TestingModule } from '@nestjs/testing';
import { CarrosselService } from './carrossel.service';

describe('CarrosselService', () => {
  let service: CarrosselService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarrosselService],
    }).compile();

    service = module.get<CarrosselService>(CarrosselService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
