import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  constructor(
    params: {
      [P in keyof UserDto]: UserDto[P];
    },
  ) {
    Object.assign(this, params);
  }
}
