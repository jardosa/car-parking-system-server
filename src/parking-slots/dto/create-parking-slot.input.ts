import { Size } from './../enums/size.enum';
import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateParkingSlotInput {
  @Field()
  name: string;

  @Field({ defaultValue: false })
  pwdOnly?: boolean;

  @Field(() => Size, { defaultValue: Size.Small })
  size?: Size;

  @Field(() => ID)
  parkingLotId: string;
}
