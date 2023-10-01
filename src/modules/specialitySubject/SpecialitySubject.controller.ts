import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

import { SpecialitySubjectService } from './SpecialitySubject.service';
import { SpecialitySubjectDto } from './dto/specialitySubject.dto';

@ApiTags('Speciality/subjects')
@Controller('speciality/subjects')
export class SpecialitySubjectController {
  constructor(
    private readonly specialitySubjectsService: SpecialitySubjectService,
  ) {}

  @ApiOkResponse({
    isArray: true,
    type: SpecialitySubjectDto,
    description: 'List of SpecialitySubjects',
  })
  @Get('/')
  async getSpecialitySubjects() {
    return this.specialitySubjectsService.getSpecialitySubjects();
  }

  @ApiParam({ name: 'specialitySubjectsId', type: String })
  @ApiOkResponse({
    type: SpecialitySubjectDto,
    description: 'SpecialitySubject',
  })
  @Get('/:specialitySubjectsId')
  async getSpecialitySubject(@Param() { specialitySubjectsId }) {
    return this.specialitySubjectsService.getSpecialitySubject(
      specialitySubjectsId,
    );
  }
}
