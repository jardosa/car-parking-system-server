import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateParkingRecordInput } from './dto/create-parking-record.input';
import { UpdateParkingRecordInput } from './dto/update-parking-record.input';
import { ParkingRecord } from './schemas/parking-records.schema';

@Injectable()
export class ParkingRecordsService {
  constructor(
    @InjectModel(ParkingRecord.name)
    private parkingRecordModel: Model<ParkingRecord>,
  ) {}

  async create(
    createParkingRecordInput: CreateParkingRecordInput,
  ): Promise<ParkingRecord> {
    const createParkingRecord = await this.parkingRecordModel.create(
      createParkingRecordInput,
    );
    return createParkingRecord.save();
  }

  async findAll() {
    return this.parkingRecordModel.find();
  }

  async findOne(id: number) {
    return this.parkingRecordModel.findById(id);
  }

  update(id: number, updateParkingRecordInput: UpdateParkingRecordInput) {
    return `This action updates a #${id} parkingRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} parkingRecord`;
  }
}
