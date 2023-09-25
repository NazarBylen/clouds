import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FacultyDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsInt()
  university_id: number;

  @ApiProperty()
  @IsString()
  speciality_code: string;

  @ApiProperty()
  @IsString()
  short_description: string;

  @ApiProperty()
  @IsString()
  url: string;
}
