import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ParkingRecordsService } from './parking-records.service';
import { ParkingRecordsResolver } from './parking-records.resolver';
import {
  ParkingRecord,
  ParkingRecordSchema,
} from './schemas/parking-records.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ParkingRecord.name, schema: ParkingRecordSchema },
    ]),
  ],
  exports: [
    MongooseModule.forFeature([
      { name: ParkingRecord.name, schema: ParkingRecordSchema },
    ]),
  ],
  providers: [ParkingRecordsResolver, ParkingRecordsService],
})
export class ParkingRecordsModule {}
