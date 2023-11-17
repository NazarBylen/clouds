import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Subject } from '../../entities/subject.entity';
import { SubjectDto } from './dto/subject.dto';
import { UpdateSubjectBodyDto } from './dto/updateSubjectBody.dto';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject)
    private subjectsRepository: Repository<Subject>,
  ) {}
  async getSubjects(): Promise<SubjectDto[]> {
    return this.subjectsRepository.find();
  }

  async getSubject(subjectId: number): Promise<SubjectDto> {
    return this.subjectsRepository.findOne({
      where: {
        id: subjectId,
      },
    });
  }

  async deleteSubject(subjectId: number): Promise<any> {
    return this.subjectsRepository.delete({ id: subjectId });
  }

  async updateSubject(
    subjectId: number,
    subject: UpdateSubjectBodyDto,
  ): Promise<SubjectDto> {
    const currentSubject = await this.subjectsRepository.findOneBy({
      id: subjectId,
    });
    currentSubject.name = subject.name;
    await this.subjectsRepository.save(currentSubject);

    return currentSubject;
  }

  async createSubject(subject: UpdateSubjectBodyDto): Promise<SubjectDto> {
    const currentSubject = new SubjectDto();
    currentSubject.name = subject.name;
    await this.subjectsRepository.save(currentSubject);

    return currentSubject;
  }
}
