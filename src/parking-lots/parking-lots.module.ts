import { ParkingSlotsService } from './../parking-slots/parking-slots.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ParkingLotsService } from './parking-lots.service';
import { ParkingLotsResolver } from './parking-lots.resolver';
import { ParkingLot, ParkingLotSchema } from './schemas/parking-lots.schema';
import { ParkingSlotsModule } from 'src/parking-slots/parking-slots.module';

@Module({
  imports: [ParkingSlotsModule, MongooseModule.forFeature([{ name: ParkingLot.name, schema: ParkingLotSchema }])],

  providers: [ParkingLotsResolver, ParkingLotsService, ParkingSlotsService],
})
export class ParkingLotsModule {}
