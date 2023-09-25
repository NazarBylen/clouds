import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SpecialitySubject } from '../../entities/specialitySubject.entity';
import { SpecialitySubjectDto } from './dto/specialitySubject.dto';

@Injectable()
export class SpecialitySubjectService {
  constructor(
    @InjectRepository(SpecialitySubject)
    private specialitySubjectRepository: Repository<SpecialitySubject>,
  ) {}
  async getSpecialitySubjects(): Promise<SpecialitySubjectDto[]> {
    return this.specialitySubjectRepository.find();
  }

  async getSpecialitySubject(
    specialitySubjectsId: number,
  ): Promise<SpecialitySubjectDto> {
    return this.specialitySubjectRepository.findOne({
      where: {
        id: specialitySubjectsId,
      },
    });
  }
}
