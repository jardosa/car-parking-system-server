import { Test, TestingModule } from '@nestjs/testing';
import { ParkingRecordsService } from './parking-records.service';

describe('ParkingRecordsService', () => {
  let service: ParkingRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParkingRecordsService],
    }).compile();

    service = module.get<ParkingRecordsService>(ParkingRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
