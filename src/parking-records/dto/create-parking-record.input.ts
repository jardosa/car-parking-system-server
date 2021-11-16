import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateParkingRecordInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
