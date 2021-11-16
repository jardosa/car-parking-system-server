import { Module } from '@nestjs/common';
import { ParkingRecordsService } from './parking-records.service';
import { ParkingRecordsResolver } from './parking-records.resolver';

@Module({
  providers: [ParkingRecordsResolver, ParkingRecordsService]
})
export class ParkingRecordsModule {}
