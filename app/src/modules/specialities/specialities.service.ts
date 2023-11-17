import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Speciality } from '../../entities/speciality.entity';
import { SpecialityDto } from './dto/speciality.dto';

@Injectable()
export class SpecialitiesService {
  constructor(
    @InjectRepository(Speciality)
    private specialitiesRepository: Repository<Speciality>,
  ) {}
  async getSpecialities(): Promise<SpecialityDto[]> {
    return this.specialitiesRepository.find();
  }

  async getSpeciality(specialityId: number): Promise<SpecialityDto> {
    return this.specialitiesRepository.findOne({
      where: {
        id: specialityId,
      },
    });
  }
}
