import { Status } from './../enums/status.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ParkingSlotSchema = ParkingSlot & Document;

@Schema({ timestamps: true })
export class ParkingSlot {
  @Prop()
  name: string;

  @Prop()
  size: string;

  @Prop({ default: Status.Unoccupied })
  status: Status;

  @Prop({ default: false })
  pwdOnly: boolean;
}

export const ParkingSlotSchema = SchemaFactory.createForClass(ParkingSlot);
