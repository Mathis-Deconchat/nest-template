import { Test, TestingModule } from '@nestjs/testing';
import { ChangeNomService } from './change-nom.service';

describe('ChangeNomService', () => {
  let service: ChangeNomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChangeNomService],
    }).compile();

    service = module.get<ChangeNomService>(ChangeNomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
