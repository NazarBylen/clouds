import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSubjectBodyDto {
  @IsString()
  @ApiProperty()
  name: string;
}
