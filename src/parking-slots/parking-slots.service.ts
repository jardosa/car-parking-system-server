import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateParkingSlotInput } from './dto/create-parking-slot.input';
import { UpdateParkingSlotInput } from './dto/update-parking-slot.input';
import { ParkingSlot } from './schemas/parking-slots.schema';
import { Model } from 'mongoose';

@Injectable()
export class ParkingSlotsService {
  constructor(
    @InjectModel(ParkingSlot.name) private parkingSlotModel: Model<ParkingSlot>,
  ) {}

  async create(
    createParkingSlotInput: CreateParkingSlotInput,
  ): Promise<ParkingSlot> {
    const createdParkingSlot = await this.parkingSlotModel.create(
      createParkingSlotInput,
    );
    return createdParkingSlot.save();
  }

  async findAll() {
    return this.parkingSlotModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} parkingSlot`;
  }

  update(id: number, updateParkingSlotInput: UpdateParkingSlotInput) {
    return `This action updates a #${id} parkingSlot`;
  }

  remove(id: number) {
    return `This action removes a #${id} parkingSlot`;
  }
}
