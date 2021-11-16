import { CreateParkingSlotInput } from './create-parking-slot.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateParkingSlotInput extends PartialType(CreateParkingSlotInput) {
  @Field(() => Int)
  id: number;
}
