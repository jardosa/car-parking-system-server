import {
  ObjectType,
  Field,
  Int,
  ID,
  GraphQLISODateTime,
} from '@nestjs/graphql';
import Node from 'src/base/entities/Node';

@ObjectType({ implements: Node })
export class ParkingRecord extends Node {
  @Field()
  plateNumber: string;

  @Field(() => ID)
  parkingSlotId: string;

  @Field(() => Int, { nullable: true })
  parkingFee?: number;

  @Field(() => GraphQLISODateTime)
  timeIn: string;
}
