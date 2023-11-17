import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { City } from '../../entities/city.entity';
import { CityDto } from './dto/city.dto';
import { UpdateCityBodyDto } from './dto/updateCityBody.dto';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private citiesRepository: Repository<City>,
  ) {}
  async getCities(): Promise<CityDto[]> {
    return this.citiesRepository.find();
  }

  async getCity(cityId: number): Promise<CityDto> {
    return this.citiesRepository.findOne({
      where: {
        id: cityId,
      },
    });
  }

  async deleteCity(cityId: number): Promise<any> {
    return this.citiesRepository.delete({ id: cityId });
  }

  async updateCity(cityId: number, city: UpdateCityBodyDto): Promise<CityDto> {
    const currentCity = await this.citiesRepository.findOneBy({
      id: cityId,
    });
    currentCity.name = city.name;
    await this.citiesRepository.save(currentCity);

    return currentCity;
  }

  async createCity(city: UpdateCityBodyDto): Promise<CityDto> {
    const currentCity = new CityDto();
    currentCity.name = city.name;
    await this.citiesRepository.save(currentCity);

    return currentCity;
  }
}
