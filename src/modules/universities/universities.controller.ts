import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

import { UniversitiesService } from './universities.service';
import { UniversityDto } from './dto/university.dto';
@ApiTags('Universities')
@Controller('universities')
export class UniversitiesController {
  constructor(private readonly universitiesService: UniversitiesService) {}

  @ApiOkResponse({
    isArray: true,
    type: UniversityDto,
    description: 'List of Universities',
  })
  @Get('/')
  async getUniversities() {
    return this.universitiesService.getUniversities();
  }

  @ApiParam({ name: 'universityId', type: String })
  @ApiOkResponse({
    type: UniversityDto,
    description: 'University',
  })
  @Get('/:universityId')
  async getUniversity(@Param() { universityId }) {
    return this.universitiesService.getUniversity(universityId);
  }
}
