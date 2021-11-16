import { registerEnumType } from '@nestjs/graphql';
export enum Status {
  Unoccupied = 'Unoccupied',
  Occupied = 'Occupied',
  Unavailable = 'Unavailable',
}

registerEnumType(Status, {
  name: 'Status',
  description: 'Parking Slot status. Could be unoccupied/occupied/unavailable',
});
