import { Test, TestingModule } from '@nestjs/testing';
import { ParkingRecordsResolver } from './parking-records.resolver';
import { ParkingRecordsService } from './parking-records.service';

describe('ParkingRecordsResolver', () => {
  let resolver: ParkingRecordsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParkingRecordsResolver, ParkingRecordsService],
    }).compile();

    resolver = module.get<ParkingRecordsResolver>(ParkingRecordsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
