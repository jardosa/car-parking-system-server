import { ParkingSlot } from './../../parking-slots/schemas/parking-slots.schema';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import Node from 'src/base/entities/Node';

@ObjectType({ implements: Node })
export class ParkingLot extends Node {
  @Field({ description: 'Name of parking lot' })
  name: number;

  @Field(() => [ParkingSlot])
  parkingSlots: ParkingSlot[];
}
