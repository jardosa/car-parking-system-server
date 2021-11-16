import { Injectable } from '@nestjs/common';
import { CreateParkingLotInput } from './dto/create-parking-lot.input';
import { UpdateParkingLotInput } from './dto/update-parking-lot.input';

@Injectable()
export class ParkingLotsService {
  create(createParkingLotInput: CreateParkingLotInput) {
    return 'This action adds a new parkingLot';
  }

  findAll() {
    return `This action returns all parkingLots`;
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
