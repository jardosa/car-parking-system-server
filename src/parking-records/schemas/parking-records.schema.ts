import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import * as mongoose from 'mongoose';

export type ParkingRecordSchema = ParkingRecord & Document;

@Schema({ timestamps: { createdAt: 'timeIn' } })
export class ParkingRecord {
  @Prop()
  plateNumber: string;

  @Prop()
  parkingSlotId: mongoose.Schema.Types.ObjectId;

  @Prop()
  parkingFee: number;
}

export const ParkingRecordSchema = SchemaFactory.createForClass(ParkingRecord);
