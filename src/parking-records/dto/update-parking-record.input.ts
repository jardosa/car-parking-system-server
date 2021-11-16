import { CreateParkingRecordInput } from './create-parking-record.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateParkingRecordInput extends PartialType(CreateParkingRecordInput) {
  @Field(() => Int)
  id: number;
}
