import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ParkingSlotsService } from './parking-slots.service';
import { ParkingSlot } from './entities/parking-slot.entity';
import { CreateParkingSlotInput } from './dto/create-parking-slot.input';
import { UpdateParkingSlotInput } from './dto/update-parking-slot.input';
import ParkingSlotConnection from './entities/parking-slot-connection.entity';

@Resolver(() => ParkingSlot)
export class ParkingSlotsResolver {
  constructor(private readonly parkingSlotsService: ParkingSlotsService) {}

  @Mutation(() => ParkingSlot)
  createParkingSlot(
    @Args('createParkingSlotInput')
    createParkingSlotInput: CreateParkingSlotInput,
  ) {
    return this.parkingSlotsService.create(createParkingSlotInput);
  }

  @Query(() => ParkingSlotConnection, { name: 'parkingSlots' })
  async findAll() {
    const docs = await this.parkingSlotsService.findAll();
    return {
      nodes: docs,
      totalCount: docs.length,
    };
  }

  @Query(() => ParkingSlot, { name: 'parkingSlot' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.parkingSlotsService.findOne(id);
  }

  @Query(() => ParkingSlotConnection, {
    name: 'findParkingSlotsByParkingLotId',
  })
  async findAllByParkingLotId(@Args('id') id: string) {
    const docs = await this.parkingSlotsService.findByLotId(id);

    return { nodes: docs, totalCount: docs.length };
  }

  @Mutation(() => ParkingSlot)
  updateParkingSlot(
    @Args('updateParkingSlotInput')
    updateParkingSlotInput: UpdateParkingSlotInput,
  ) {
    return this.parkingSlotsService.update(
      updateParkingSlotInput.id,
      updateParkingSlotInput,
    );
  }

  @Mutation(() => ParkingSlot)
  removeParkingSlot(@Args('id', { type: () => Int }) id: number) {
    return this.parkingSlotsService.remove(id);
  }
}
