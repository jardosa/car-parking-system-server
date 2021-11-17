import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ParkingRecordsService } from './parking-records.service';
import { ParkingRecord } from './entities/parking-record.entity';
import { CreateParkingRecordInput } from './dto/create-parking-record.input';
import { UpdateParkingRecordInput } from './dto/update-parking-record.input';
import ParkingRecordConnection from './entities/parking-record-connection.entity';

@Resolver(() => ParkingRecord)
export class ParkingRecordsResolver {
  constructor(private readonly parkingRecordsService: ParkingRecordsService) {}

  @Mutation(() => ParkingRecord)
  createParkingRecord(
    @Args('createParkingRecordInput')
    createParkingRecordInput: CreateParkingRecordInput,
  ) {
    return this.parkingRecordsService.create(createParkingRecordInput);
  }

  @Query(() => ParkingRecordConnection, { name: 'parkingRecords' })
  async findAll() {
    const docs = await this.parkingRecordsService.findAll();
    return {
      totalCount: docs.length,
      nodes: docs,
    };
  }

  @Query(() => ParkingRecord, { name: 'parkingRecord' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.parkingRecordsService.findOne(id);
  }

  @Mutation(() => ParkingRecord)
  updateParkingRecord(
    @Args('updateParkingRecordInput')
    updateParkingRecordInput: UpdateParkingRecordInput,
  ) {
    return this.parkingRecordsService.update(
      updateParkingRecordInput.id,
      updateParkingRecordInput,
    );
  }

  @Mutation(() => ParkingRecord)
  removeParkingRecord(@Args('id', { type: () => Int }) id: number) {
    return this.parkingRecordsService.remove(id);
  }
}
