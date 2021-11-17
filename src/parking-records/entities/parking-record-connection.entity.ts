import { Field, ObjectType } from '@nestjs/graphql';
import NodeConnection from 'src/base/entities/NodeConnection';
import { ParkingRecord } from './parking-record.entity';

@ObjectType({ implements: NodeConnection })
export default class ParkingRecordConnection extends NodeConnection<ParkingRecord> {
  @Field(() => [ParkingRecord])
  nodes: ParkingRecord[];
}
