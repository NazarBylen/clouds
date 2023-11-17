import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { University } from '../../entities/university.entity';
import { UniversityDto } from './dto/university.dto';

@Injectable()
export class UniversitiesService {
  constructor(
    @InjectRepository(University)
    private universitiesRepository: Repository<University>,
  ) {}
  async getUniversities(): Promise<UniversityDto[]> {
    return this.universitiesRepository.find({ relations: ['city'] });
  }

  async getUniversity(universityId: number): Promise<UniversityDto> {
    return this.universitiesRepository.findOne({
      where: {
        id: universityId,
      },
      relations: ['city'],
    });
  }
}
