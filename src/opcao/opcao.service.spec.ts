import { Test, TestingModule } from '@nestjs/testing';
import { OpcaoService } from './opcao.service';

describe('OpcaoService', () => {
  let service: OpcaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpcaoService],
    }).compile();

    service = module.get<OpcaoService>(OpcaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
