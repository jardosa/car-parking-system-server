import { Size } from './../enums/size.enum';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateParkingSlotInput {
  @Field()
  name: string;

  @Field({ defaultValue: false })
  pwdOnly?: boolean;

  @Field(() => Size)
  size: Size;
}
