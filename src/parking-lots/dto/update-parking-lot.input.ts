import { CreateParkingLotInput } from './create-parking-lot.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateParkingLotInput extends PartialType(CreateParkingLotInput) {
  @Field(() => Int)
  id: number;
}
