import { registerEnumType } from '@nestjs/graphql';

export enum Size {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

registerEnumType(Size, {
  name: 'Size',
  description: 'Parking Size. Could be small/medium/large',
});
