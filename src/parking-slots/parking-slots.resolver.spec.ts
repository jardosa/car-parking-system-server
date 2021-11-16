import { Test, TestingModule } from '@nestjs/testing';
import { ParkingSlotsResolver } from './parking-slots.resolver';
import { ParkingSlotsService } from './parking-slots.service';

describe('ParkingSlotsResolver', () => {
  let resolver: ParkingSlotsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParkingSlotsResolver, ParkingSlotsService],
    }).compile();

    resolver = module.get<ParkingSlotsResolver>(ParkingSlotsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
