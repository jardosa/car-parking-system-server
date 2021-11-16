import { ParkingLot } from './parking-lot.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import NodeConnection from 'src/base/entities/NodeConnection';

@ObjectType({ implements: NodeConnection })
export default class ParkingLotConnection extends NodeConnection<ParkingLot> {
  @Field(() => [ParkingLot])
  nodes: ParkingLot[];
}
