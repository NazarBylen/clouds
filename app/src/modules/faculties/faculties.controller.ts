import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

import { FacultiesService } from './faculties.service';
import { FacultyDto } from './dto/faculty.dto';

@ApiTags('Faculties')
@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @ApiOkResponse({
    isArray: true,
    type: FacultyDto,
    description: 'List of Faculties',
  })
  @Get('/')
  async getFaculties() {
    return this.facultiesService.getFaculties();
  }

  @ApiParam({ name: 'facultyId', type: String })
  @ApiOkResponse({
    type: FacultyDto,
    description: 'Faculty',
  })
  @Get('/:facultyId')
  async getFaculty(@Param() { facultyId }) {
    return this.facultiesService.getFaculty(facultyId);
  }
}
