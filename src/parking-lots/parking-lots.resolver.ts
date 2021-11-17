import ParkingSlotConnection from 'src/parking-slots/entities/parking-slot-connection.entity';
import { ParkingSlotsService } from './../parking-slots/parking-slots.service';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ParkingLotsService } from './parking-lots.service';
import { ParkingLot } from './entities/parking-lot.entity';
import { CreateParkingLotInput } from './dto/create-parking-lot.input';
import { UpdateParkingLotInput } from './dto/update-parking-lot.input';
import ParkingLotConnection from './entities/parking-lot-connection.entity';

@Resolver(() => ParkingLot)
export class ParkingLotsResolver {
  constructor(
    private readonly parkingLotsService: ParkingLotsService,
    private readonly parkingSlotsService: ParkingSlotsService,
  ) {}

  @Mutation(() => ParkingLot)
  createParkingLot(
    @Args('createParkingLotInput') createParkingLotInput: CreateParkingLotInput,
  ) {
    return this.parkingLotsService.create(createParkingLotInput);
  }

  @Query(() => ParkingLotConnection, { name: 'parkingLots' })
  async findAll(): Promise<ParkingLotConnection> {
    const docs = await this.parkingLotsService.findAll();
    return {
      nodes: docs,
      totalCount: docs.length,
    };
  }

  @Query(() => ParkingLot, { name: 'parkingLot' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.parkingLotsService.findOne(id);
  }

  @Mutation(() => ParkingLot)
  updateParkingLot(
    @Args('updateParkingLotInput') updateParkingLotInput: UpdateParkingLotInput,
  ) {
    return this.parkingLotsService.update(
      updateParkingLotInput.id,
      updateParkingLotInput,
    );
  }

  @Mutation(() => ParkingLot)
  removeParkingLot(@Args('id', { type: () => Int }) id: number) {
    return this.parkingLotsService.remove(id);
  }

  @ResolveField(() => ParkingSlotConnection)
  async parkingSlots(@Parent() parkingLot: ParkingLot) {
    const { _id } = parkingLot;
    const docs = await this.parkingSlotsService.findByLotId(_id);
    return { nodes: docs, totalCount: docs.length };
  }
}
