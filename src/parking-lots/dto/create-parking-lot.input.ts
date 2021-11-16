import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateParkingLotInput {
  @Field()
  name: string;
}
