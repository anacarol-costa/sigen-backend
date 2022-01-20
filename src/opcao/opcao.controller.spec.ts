import { Test, TestingModule } from '@nestjs/testing';
import { OpcaoController } from './opcao.controller';
import { OpcaoService } from './opcao.service';

describe('OpcaoController', () => {
  let controller: OpcaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpcaoController],
      providers: [OpcaoService],
    }).compile();

    controller = module.get<OpcaoController>(OpcaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
