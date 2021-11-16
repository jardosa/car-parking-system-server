import { Test, TestingModule } from '@nestjs/testing';
import { ParkingLotsResolver } from './parking-lots.resolver';
import { ParkingLotsService } from './parking-lots.service';

describe('ParkingLotsResolver', () => {
  let resolver: ParkingLotsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParkingLotsResolver, ParkingLotsService],
    }).compile();

    resolver = module.get<ParkingLotsResolver>(ParkingLotsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
