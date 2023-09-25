import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

import { SpecialitiesService } from './specialities.service';
import { SpecialityDto } from './dto/speciality.dto';

@ApiTags('Specialities')
@Controller('specialities')
export class SpecialitiesController {
  constructor(private readonly specialitiesService: SpecialitiesService) {}

  @ApiOkResponse({
    isArray: true,
    type: SpecialityDto,
    description: 'List of Specialities',
  })
  @Get('/')
  async getSpecialities() {
    return this.specialitiesService.getSpecialities();
  }

  @ApiParam({ name: 'specialityId', type: String })
  @ApiOkResponse({
    type: SpecialityDto,
    description: 'Speciality',
  })
  @Get('/:specialityId')
  async getSpeciality(@Param() { specialityId }) {
    return this.specialitiesService.getSpeciality(specialityId);
  }
}
