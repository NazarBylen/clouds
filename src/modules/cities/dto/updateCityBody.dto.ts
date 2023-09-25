import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCityBodyDto {
  @ApiProperty()
  @IsString()
  name: string;
}
