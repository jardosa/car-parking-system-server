import { Field, ObjectType } from '@nestjs/graphql';
import NodeConnection from 'src/base/entities/NodeConnection';
import { ParkingSlot } from './parking-slot.entity';

@ObjectType({ implements: NodeConnection })
export default class ParkingSlotConnection extends NodeConnection<ParkingSlot> {
  @Field(() => [ParkingSlot])
  nodes: ParkingSlot[];
}
