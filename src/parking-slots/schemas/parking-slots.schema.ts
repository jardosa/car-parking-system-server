import { Status } from './../enums/status.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import * as mongoose from 'mongoose';

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

  @Prop()
  parkingLotId: mongoose.Schema.Types.ObjectId;
}

export const ParkingSlotSchema = SchemaFactory.createForClass(ParkingSlot);
