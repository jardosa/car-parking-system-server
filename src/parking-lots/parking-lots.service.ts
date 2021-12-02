import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateParkingLotInput } from './dto/create-parking-lot.input';
import { UpdateParkingLotInput } from './dto/update-parking-lot.input';
import { ParkingLot } from './schemas/parking-lots.schema';

@Injectable()
export class ParkingLotsService {
  constructor(@InjectModel(ParkingLot.name) private parkingLotModel: Model<ParkingLot>) {}
  async create(createParkingLotInput: CreateParkingLotInput): Promise<ParkingLot> {
    const createdParkingLot = await this.parkingLotModel.create(createParkingLotInput);
    return createdParkingLot.save();
  }

  async findAll() {
    return this.parkingLotModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} parkingLot`;
  }

  update(id: number, updateParkingLotInput: UpdateParkingLotInput) {
    return `This action updates a #${id} parkingLot`;
  }

  remove(id: number) {
    return `This action removes a #${id} parkingLot`;
  }
}
