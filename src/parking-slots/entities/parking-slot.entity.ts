import { ObjectType, Field, ID } from '@nestjs/graphql';
import Node from 'src/base/entities/Node';
import { Size } from '../enums/size.enum';
import { Status } from '../enums/status.enum';

@ObjectType({ implements: Node })
export class ParkingSlot extends Node {
  @Field()
  name: string;

  @Field()
  size: string;

  @Field(() => Status)
  status: Status;

  @Field()
  pwdOnly: boolean;

  @Field(() => ID, { nullable: true })
  parkingLotId?: string;
}
