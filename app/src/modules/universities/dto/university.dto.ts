import { IsString, IsInt, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { CityDto } from '../../cities/dto/city.dto';

export class UniversityDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsInt()
  city_id: number;

  @ApiProperty({ type: CityDto })
  @IsObject()
  city: CityDto;
}
