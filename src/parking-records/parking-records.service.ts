import { Injectable } from '@nestjs/common';
import { CreateParkingRecordInput } from './dto/create-parking-record.input';
import { UpdateParkingRecordInput } from './dto/update-parking-record.input';

@Injectable()
export class ParkingRecordsService {
  create(createParkingRecordInput: CreateParkingRecordInput) {
    return 'This action adds a new parkingRecord';
  }

  findAll() {
    return `This action returns all parkingRecords`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parkingRecord`;
  }

  update(id: number, updateParkingRecordInput: UpdateParkingRecordInput) {
    return `This action updates a #${id} parkingRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} parkingRecord`;
  }
}
