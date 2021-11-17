import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateParkingRecordInput {
  @Field()
  plateNumber: string;

  @Field(() => ID)
  parkingSlotId: string;
}
