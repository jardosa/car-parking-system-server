import { ParkingSlot, ParkingSlotSchema } from './schemas/parking-slots.schema';
import { Module } from '@nestjs/common';
import { ParkingSlotsService } from './parking-slots.service';
import { ParkingSlotsResolver } from './parking-slots.resolver';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: ParkingSlot.name, schema: ParkingSlotSchema }])],
  exports: [MongooseModule.forFeature([{ name: ParkingSlot.name, schema: ParkingSlotSchema }])],
  providers: [ParkingSlotsResolver, ParkingSlotsService],
})
export class ParkingSlotsModule {}
