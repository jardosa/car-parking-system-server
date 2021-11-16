import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ParkingLotsService } from './parking-lots.service';
import { ParkingLot } from './entities/parking-lot.entity';
import { CreateParkingLotInput } from './dto/create-parking-lot.input';
import { UpdateParkingLotInput } from './dto/update-parking-lot.input';

@Resolver(() => ParkingLot)
export class ParkingLotsResolver {
  constructor(private readonly parkingLotsService: ParkingLotsService) {}

  @Mutation(() => ParkingLot)
  createParkingLot(@Args('createParkingLotInput') createParkingLotInput: CreateParkingLotInput) {
    return this.parkingLotsService.create(createParkingLotInput);
  }

  @Query(() => [ParkingLot], { name: 'parkingLots' })
  findAll() {
    return this.parkingLotsService.findAll();
  }

  @Query(() => ParkingLot, { name: 'parkingLot' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.parkingLotsService.findOne(id);
  }

  @Mutation(() => ParkingLot)
  updateParkingLot(@Args('updateParkingLotInput') updateParkingLotInput: UpdateParkingLotInput) {
    return this.parkingLotsService.update(updateParkingLotInput.id, updateParkingLotInput);
  }

  @Mutation(() => ParkingLot)
  removeParkingLot(@Args('id', { type: () => Int }) id: number) {
    return this.parkingLotsService.remove(id);
  }
}
