import { ParkingSlot } from './../../parking-slots/schemas/parking-slots.schema';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import Node from 'src/base/entities/Node';
import ParkingSlotConnection from 'src/parking-slots/entities/parking-slot-connection.entity';

@ObjectType({ implements: Node })
export class ParkingLot extends Node {
  @Field({ description: 'Name of parking lot' })
  name: string;

  @Field(() => ParkingSlotConnection, { nullable: true })
  parkingSlots?: ParkingSlot[];
}
