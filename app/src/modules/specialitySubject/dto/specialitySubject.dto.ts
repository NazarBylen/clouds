import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { subjectStatus } from '../../../entities/specialitySubject.entity';

export class SpecialitySubjectDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString()
  speciality_code: string;

  @ApiProperty()
  @IsInt()
  subject_id: number;

  @ApiProperty({ enum: ['main', 'mandatory', 'optional'] })
  subject_status: subjectStatus;
}
