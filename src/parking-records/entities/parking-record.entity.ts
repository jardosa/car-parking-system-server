import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ParkingRecord {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
