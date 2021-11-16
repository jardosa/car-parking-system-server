import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ParkingLotSchema = ParkingLot & Document;

@Schema({ timestamps: true })
export class ParkingLot {
  @Prop({ maxlength: 20 })
  name: string;
}

export const ParkingLotSchema = SchemaFactory.createForClass(ParkingLot);
