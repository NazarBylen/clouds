import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

import { CitiesService } from './cities.service';
import { CityDto } from './dto/city.dto';
import { UpdateCityBodyDto } from './dto/updateCityBody.dto';

@ApiTags('Cities')
@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @ApiOkResponse({
    isArray: true,
    type: CityDto,
    description: 'List of Cities',
  })
  @Get('/')
  async getCities() {
    return this.citiesService.getCities();
  }

  @ApiParam({ name: 'cityId', type: String })
  @ApiOkResponse({
    type: CityDto,
    description: 'City',
  })
  @Get('/:cityId')
  async getCity(@Param() { cityId }) {
    return this.citiesService.getCity(cityId);
  }

  @ApiOkResponse({
    description: 'Delete city',
    status: 204,
  })
  @ApiParam({ name: 'cityId', type: String })
  @Delete('/:cityId')
  @HttpCode(204)
  async deleteCity(@Param() { cityId }) {
    return this.citiesService.deleteCity(cityId);
  }

  @ApiOkResponse({
    type: CityDto,
    description: 'Update city',
  })
  @ApiParam({ name: 'cityId', type: String })
  @ApiBody({ type: UpdateCityBodyDto, required: true })
  @Patch('/:cityId')
  async updateCity(@Param() { cityId }, @Body() city: UpdateCityBodyDto) {
    return this.citiesService.updateCity(cityId, city);
  }

  @ApiBody({ type: UpdateCityBodyDto, required: true })
  @ApiOkResponse({ type: UpdateCityBodyDto })
  @Post('/')
  async createCity(@Body() city: UpdateCityBodyDto) {
    return this.citiesService.createCity(city);
  }
}
