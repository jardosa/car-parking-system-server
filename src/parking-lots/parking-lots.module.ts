import { Module } from '@nestjs/common';
import { ParkingLotsService } from './parking-lots.service';
import { ParkingLotsResolver } from './parking-lots.resolver';

@Module({
  providers: [ParkingLotsResolver, ParkingLotsService]
})
export class ParkingLotsModule {}
