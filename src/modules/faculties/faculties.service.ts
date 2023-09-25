import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Faculty } from '../../entities/faculty.entity';
import { FacultyDto } from './dto/faculty.dto';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty)
    private facultiesRepository: Repository<Faculty>,
  ) {}
  async getFaculties(): Promise<FacultyDto[]> {
    return this.facultiesRepository.find();
  }

  async getFaculty(facultyId: number): Promise<FacultyDto> {
    return this.facultiesRepository.findOne({
      where: {
        id: facultyId,
      },
    });
  }
}
